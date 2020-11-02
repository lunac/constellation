export const config = {
    types: [{
        label: 'feat',
        description: {
            en: 'A new feature'
        }
    },
    {
        label: 'fix',
        description: {
            en: 'A bug fix'
        }
    },
    {
        label: 'build',
        description: {
            en: 'Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)'
        }
    },
    {
        label: 'ci',
        description: {
            en: 'Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs)'
        }
    },
    {
        label: 'docs',
        description: {
            en: 'Documentation only changes'
        }
    },
    {
        label: 'perf',
        description: {
            en: 'A code change that improves performance'
        }
    },
    {
        label: 'refactor',
        description: {
            en: 'A code change that neither fixes a bug nor adds a feature'
        }
    },
    {
        label: 'style',
        description: {
            en: 'Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)'
        }
    },
    {
        label: 'test',
        description: {
            en: 'Adding missing tests or correcting existing tests'
        }
    }],
    ticketNumber: {
        optional: false,
        prefix: '#'
    }
};