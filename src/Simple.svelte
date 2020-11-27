<script>
    export let message = '';
    export let action = () => {};
</script>


<div use:action>
    <p>This is it. 💻</p>
    <p>{message}</p>
</div>