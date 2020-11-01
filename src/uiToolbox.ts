import * as vscode from 'vscode';
import { common, localize } from './properties';

const quickPickOptions: vscode.QuickPickOptions = {
    ignoreFocusOut: true,
    matchOnDescription: true,
    matchOnDetail: true
};

const inputBoxOptions: vscode.InputBoxOptions = {
    ignoreFocusOut: true
};

type PickCallback = (selected: vscode.QuickPickItem) => void;
export const pickQuestion = async (
    placeHolder: string,
    items: vscode.QuickPickItem[],
    onSelected?: PickCallback,
): Promise<vscode.QuickPickItem | undefined> => {
    const selectedPick = await vscode.window.showQuickPick(items, { ...quickPickOptions, placeHolder: placeHolder });
    if (!selectedPick) { return undefined; }
    if (onSelected) { onSelected(selectedPick); }
    return selectedPick;
};

export const yesOrNo = async (
    placeHolder: string,
    selectedCB?: PickCallback
): Promise<boolean> => {
    const options = [{
        label: localize(common.yes)
    }, {
        label: localize(common.no)
    }];
    const selectedPick = await pickQuestion(placeHolder, options);
    if (!selectedPick) { return false; }
    if (selectedCB) { selectedCB(selectedPick); }
    return selectedPick.label === options[0].label;
};

export const inputQuestion = async (
    placeHolder: string,
    onSave?: (input: string) => void,
    onValidate?: (input: string) => string
): Promise<string | undefined> => {
    const userAnswer = await vscode.window.showInputBox({
        ...inputBoxOptions,
        ...{ placeHolder: placeHolder },
        ...(onValidate ? { validateInput: onValidate } : {})
    });
    if (!userAnswer) { return undefined; }
    if (onSave) { onSave(userAnswer); }
    return userAnswer;
};