import { parse, ParseCallback, ParseObject } from 'twemoji'
import { afterUpdate } from 'svelte'

type TwemojiHow = Partial<ParseObject> | ParseCallback;


export function twemoji(node: HTMLElement, how: TwemojiHow = {}) {
    parse(node, how)
    afterUpdate(() => {
        parse(node, how)
    })
	return {
		update() {
            console.warn('Changing twemoji options after the action was mounted is not possible.')
        }
	}
}
