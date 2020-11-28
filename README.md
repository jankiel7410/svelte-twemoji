# Svelte-twemoji
A simple svelte wrapper for `twemoji`. Now you can just drop `twemoji` action into
your component and all emojis will become consistent across all platforms.

## Usage

### Basic Usage

```javascript
<script>
import {twemoji} from 'svelte-twemoji';
</script>

<p use:twemoji>
This emoji will be transformed into an image: ✨.
</p>
```

### Advanced usage

You can also specify how twemoji will process the contents using a configuration object
or a callback function.

See [twemoji's README for detailed documentation on this feature](https://github.com/twitter/twemoji).
See below for an example:

```javascript
<script>
import {twemoji} from 'svelte-twemoji';
</script>

<p use:twemoji={{ className: 'my-awesome-emoji' }}>
This emoji will be transformed into an image: ✨.
</p>
```

## TypeScript support?

You betcha!

## Common gotchas

1. Try to stick with using this action where it's needed. Dropping it on the root component will probably cause some performance issues at some point.
2. If you're using the configuration object or a callback, don't make it dynamic. Twemoji *does not* try to alter the already converted emojis to match a new config.
3. You need to set your charset to utf-8 when using emoji. Set the following meta tag in your document: `<meta charset="utf-8">`
4. Go and see the [docs for twemoji](https://github.com/twitter/twemoji). You'll find some tips for styling the images.

# Credits
Thank you Twitter for providing [twemoji](https://github.com/twitter/twemoji). It's awesome.

# License

Code licensed under the MIT License: http://opensource.org/licenses/MIT

As per the Twemoji repository, the graphics are licensed under the CC-BY 4.0 which has a pretty good guide on best practices for attribution. Please adhere to the attribution requirements when using these emojis.