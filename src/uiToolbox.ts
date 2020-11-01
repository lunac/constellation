import * as vscode from 'vscode';
import { common, localize } from './properties';

const quickPickOptions = {
    ignoreFocusOut: true,
    matchOnDescription: true,
    matchOnDetail: true
};

type PickCallback = (selected: vscode.QuickPickItem) => void;
export const quickView = async () => {
    return {};
};

export const yesOrNo = async (
    text: string,
    selectedCB?: PickCallback
): Promise<boolean> => {
    const options = [{
        label: localize(common.yes)
    }, {
        label: localize(common.no)
    }];
    const pickSelected = await vscode.window.showQuickPick(options, { ...quickPickOptions, placeHolder: text });
    if (!pickSelected) { return false; }
    if (selectedCB) { selectedCB(pickSelected); }
    return pickSelected.label === options[0].label;
};