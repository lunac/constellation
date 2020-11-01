import { localize, compiler } from './properties';
import { pickQuestion } from './uiToolbox';
import { config } from './baseConfig';

const getType = async () => {
    const picked = await pickQuestion(localize(compiler.commitType), config.types.map((type) => ({ label: type.label, description: localize(type.description) })));
    if (!picked) { return; } //error;
    console.log(picked);
    return picked.label;
};

export const getMessage = () => {
    let result;
    result = getType();
    return result;
};