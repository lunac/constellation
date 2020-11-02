import { localize, compiler, common } from './properties';
import { pickQuestion, inputQuestion } from './uiToolbox';
import { config } from './baseConfig';

const getType = async () => {
    const picked = await pickQuestion(localize(compiler.placeholders.commitType), config.types.map((type) => ({ label: type.label, description: localize(type.description) })));
    if (!picked) { throw new Error(localize(compiler.errors.noCommitType)); }
    return picked.label;
};

const getTicketNumber = async () => {
    const tickets = await inputQuestion(`${(config.ticketNumber.optional ? `[${localize(common.optional)}]` : '')}${localize(compiler.placeholders.ticketNumber)}`);
    if (!config.ticketNumber.optional && !tickets) { throw new Error(localize(compiler.errors.noTicketNumber)); }
    return tickets ? `(${tickets.split(',').map(ticket => `${config.ticketNumber.prefix}${ticket.trim()}`)})` : '';
};

const getHead = async () => {
    const head = await inputQuestion(localize(compiler.placeholders.head));
    if (!head) { throw new Error(localize(compiler.errors.noHead)); }
    return head;
};

export const getMessage = async () => {
    return `${await getType()}${await getTicketNumber()}: ${await getHead()}`;
};