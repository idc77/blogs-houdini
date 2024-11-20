<script lang="ts">
    import { fragment, graphql } from '$houdini'
    import {ArrowUpRightFromSquareOutline} from "flowbite-svelte-icons";
    import {Card} from "flowbite-svelte";

    /* @type { import('$houdini').BlogCard } */
    export let bloginput
    $: blog = fragment(bloginput, graphql(`
    fragment BlogCard on Blog {
        id
        createTime
        updateTime
        slug
        title
        description
        tagline
    }`))
</script>

<Card id={$$props.id}>
    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {$blog.title}
    </h5>
    <p class="mb-2 text-sm">{$blog.tagline}</p>
    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight">
        {$blog.description}
    </p>
    <a href="/" class="inline-flex items-center text-primary-600 hover:underline">
        Visit
        <ArrowUpRightFromSquareOutline class="w-4 h-4 ms-2.5" />
    </a>
</Card>
