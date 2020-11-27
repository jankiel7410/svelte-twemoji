import { ParseCallback, ParseObject } from 'twemoji';
export declare type TwemojiHow = Partial<ParseObject> | ParseCallback;
export default function (node: HTMLElement, how?: TwemojiHow): {
    update(): void;
};
