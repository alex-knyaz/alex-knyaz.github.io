<script lang="ts">
    type propTypes = {
        value?: string | number | boolean;
        group?: string | number | boolean;
        children?: any;
        class?: string;
    };
    let { value = "", group = $bindable(), children = "", class: className = "" } = $props();
</script>

<label class="btn {className}"><input type="radio" bind:group {value} />
    {#if children}{@render children()}{/if}
</label>