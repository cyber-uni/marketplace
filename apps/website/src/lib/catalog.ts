// Reads the marketplace catalogs at build time. The catalogs are the source of truth: the site
// never lists a plugin that is not in `.claude-plugin/marketplace.json`, and it offers a
// harness's install command only when that harness's catalog carries the entry.
import codexCatalog from '../../../../.agents/plugins/marketplace.json'
import copilotCatalog from '../../../../.github/plugin/marketplace.json'
import claudeCatalog from '../../../../.claude-plugin/marketplace.json'
import moves from '../../../../data/moves.json'

const marketplaceName = claudeCatalog.name

type Source =
	| { source: 'npm'; package: string }
	| { source: 'github'; repo: string; path?: string }
	| { source: 'git-subdir'; url: string; path: string; ref?: string }
	| { source: string }

interface Install {
	harness: string
	command?: string
	note?: string
}

interface Listing {
	name: string
	description: string
	tags: string[]
	sourceLabel: string
	sourceUrl: string
	movingTo?: string
	installs: Install[]
}

const codexNames = new Set(codexCatalog.plugins.map((p) => p.name))
const copilotNames = new Set(copilotCatalog.plugins.map((p) => p.name))
const moveMap: Record<string, { to: string }> = moves.moves

function describeSource(source: Source, repository: string): string {
	if ('package' in source) return `npm ${source.package}`
	if ('repo' in source) return `${source.repo}${source.path ? `/${source.path}` : ''}`
	if ('path' in source) return `${repository.replace('https://github.com/', '')}/${source.path}`
	return repository
}

export function readListings(): Listing[] {
	return claudeCatalog.plugins
		.map((plugin) => {
			const source = plugin.source as Source
			const installs: Install[] = [
				{ harness: 'Claude Code', command: `/plugin install ${plugin.name}@${marketplaceName}` },
				codexNames.has(plugin.name)
					? { harness: 'Codex', command: `codex plugin add ${plugin.name}@${marketplaceName}` }
					: { harness: 'Codex', note: 'not available' },
				copilotNames.has(plugin.name)
					? {
							harness: 'GitHub Copilot CLI',
							command: `copilot plugin install ${plugin.name}@${marketplaceName}`,
						}
					: { harness: 'GitHub Copilot CLI', note: 'not available' },
				{ harness: 'Cursor', note: 'import the catalog as a team marketplace' },
			]
			return {
				name: plugin.name,
				description: plugin.description,
				tags: plugin.keywords ?? [],
				sourceLabel: describeSource(source, plugin.repository),
				sourceUrl: plugin.homepage ?? plugin.repository,
				movingTo: moveMap[plugin.name]?.to,
				installs,
			}
		})
		.sort((a, b) => a.name.localeCompare(b.name))
}
