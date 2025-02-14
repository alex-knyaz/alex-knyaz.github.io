<script lang="ts">
    import { onMount } from "svelte";

    interface Props {
        options?: { value: string | number | boolean; label: string }[];
        value?: string | number | boolean;
    }

    let { options = [], value = $bindable("") }: Props = $props();

    const handleChange = (selectedValue: string | number | boolean) => {
        value = selectedValue;
    };
</script>

<div class="inline-flex">
    {#each options as option, ixd}
        <label class="px-2 py-1 text-sm cursor-pointer select-none bg-gray-50 dark:bg-gray-800 border 
        border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 
        dark:hover:bg-gray-700 {ixd === 0 ? 'rounded-l' : ''} {ixd === options.length - 1 ? 'rounded-r' : ''} 
        {ixd !== 0 ? 'border-l-0' : ''} {value === option.value ? '!bg-blue-500 !text-white !dark:bg-blue-600' : ''}">
            <input
                type="radio"
                name="options"
                value={option.value}
                checked={value === option.value}
                onchange={() => handleChange(option.value)}
                class="hidden"
            />
            {option.label}
        </label>
    {/each}
</div>
