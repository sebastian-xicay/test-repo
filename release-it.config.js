module.exports = {
    // General config
    git: {
        commit: true,
        tag: true,
        push: true,
        requireCleanWorkingDir: true,
        commitMessage: 'chore(release): v${version}',
        tagName: 'v${version}',
    },
    npm: {
        publish: false, // set true if publishing to npm
    },
    github: {
        release: true,
        tokenRef: 'GITHUB_TOKEN',
    },
    hooks: {
        afterBump: 'echo Version bumped to ${version}',
        afterRelease: 'echo Released ${version} to GitHub',
    },
    plugins: {
        '@release-it/conventional-changelog': {
            preset: 'conventionalcommits',
            infile: 'CHANGELOG.md',
            changelogHeader: '# 📦 Release Notes\n\n',
            changelog: {
                // Override the default changelog generation template
                // Example using custom commit groups
                commitGroupsSort: 'title',
                commitGroups: [
                    { title: '✨ Features', types: ['feat'] },
                    { title: '🐛 Bug Fixes', types: ['fix'] },
                    { title: '🧹 Chores', types: ['chore', 'refactor', 'style'] },
                    { title: '📝 Documentation', types: ['docs'] },
                    { title: '🧪 Tests', types: ['test'] },
                ],
                noteGroups: [{ title: '🚨 BREAKING CHANGES', keyword: 'BREAKING CHANGE' }],
            }
        }
    }
};
