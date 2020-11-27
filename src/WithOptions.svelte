<script lang='ts'>
    import {twemoji} from '.'
    export let className = 'emoji-class'
    $: how = { className }
</script>

<p use:twemoji={how}>Hello! 👋</p>