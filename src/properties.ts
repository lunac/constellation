import { env } from 'vscode';

export const git = {
    error: {
        notGitRepository: {
            en: "not a git repository (or any of the parent directories): .git",
        },
        noStagedFiles: {
            en: 'not staged files to commit!',
        }
    },
    info: {
        shouldStageFiles: {
            en: 'No staged files were found, do you want to stage all of them?'
        }
    }
};

export const common = {
    yes: {
        en: 'yes'
    },
    no: {
        en: 'no'
    },
    optional: {
        en: 'optional'
    }
};

export const compiler = {
    placeholders: {
        commitType: {
            en: 'Pick the correct type for your commit'
        },
        ticketNumber: {
            en: 'Write your ticket number separated by comma ( , )'
        },
        head: {
            en: 'Write an message short and clear, using only imperative sense'
        }
    },
    errors: {
        noCommitType: {
            en: 'You must select a commit type!'
        },
        noTicketNumber: {
            en: 'You must write at least one ticket number'
        },
        noHead: {
            en: 'You must write a commit message'
        }
    }
};

type PropKey = {
    en: string,
    [key: string]: string,
};

const getLocale = (): string => (env.language.split('-')[0]);
export const localize = (propkey: PropKey) => {
    const locale = getLocale();
    if (locale in propkey) { return propkey[locale]; }
    if ('en' in propkey) { return propkey.en; }
    return JSON.stringify(propkey);
};