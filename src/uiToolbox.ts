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
    onSelected: PickCallback,
): Promise<boolean> => {
    const pickSelected = await vscode.window.showQuickPick(items, { ...quickPickOptions, placeHolder: placeHolder });
    if (!pickSelected) { return false; }
    if (onSelected) { onSelected(pickSelected); }
    return true;
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
    const pickSelected = await vscode.window.showQuickPick(options, { ...quickPickOptions, placeHolder: placeHolder });
    if (!pickSelected) { return false; }
    if (selectedCB) { selectedCB(pickSelected); }
    return pickSelected.label === options[0].label;
};

export const inputQuestion = async (
    placeHolder: string,
    onSave: (input: string) => void,
    onValidate?: (input: string) => string
): Promise<boolean> => {
    const userAnswer = await vscode.window.showInputBox({
        ...inputBoxOptions,
        ...{ placeHolder: placeHolder },
        ...(onValidate ? { validateInput: onValidate } : {})
    });
    if (!userAnswer) { return false; }
    onSave(userAnswer);
    return true;
};