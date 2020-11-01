import simpleGit, { SimpleGit, SimpleGitOptions } from 'simple-git';

const options: SimpleGitOptions = {
    baseDir: process.cwd(),
    binary: 'git',
    maxConcurrentProcesses: 6,
};

export const gitBox = async (rootPath: string = process.cwd()) => {
    const git = simpleGit({ ...options, baseDir: rootPath });
    try {
        await git.status();
    } catch (e) {
        console.error(`${e}`);
        return null;
    }
    return git;
};

export const checkStagedFiles = async (git: SimpleGit): Promise<boolean> => {
    const status = await git?.status();
    return status && status.created.length + status.modified.length > 0;
};

export const commit = async (git: SimpleGit, head: string, body: string) => ((await git?.commit([head, body])));

export const addAll = async (git: SimpleGit) => await git?.add('./*');

