import simpleGit, { SimpleGit } from 'simple-git';

export const gitBox = async () => {
    const git = simpleGit();
    try {
        await git.status();
    }catch(e){
        console.error(`Ops something wrong happen initializing git, this usually happens when vscode cannot find git ${e}`);
        return null;
    }
    return git;
};

export const checkStagedFiles = async (git:SimpleGit):Promise<boolean> => ((await git?.status())?.staged.length > 0);

export const commit = async (git:SimpleGit, head:string, body:string) => ((await git?.commit([head, body])));

