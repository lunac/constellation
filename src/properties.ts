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