<script lang="ts">
    import AppNavbar from "$lib/components/AppNavbar/AppNavbar.svelte";
    import BlogList from "$lib/components/Blog/BlogList.svelte";

    /* @type { import('./$houdini').PageData } */
    export let data

    $: ({BlogListQuery} = data)
</script>

<AppNavbar/>
<BlogList bloglist={$BlogListQuery}/>
