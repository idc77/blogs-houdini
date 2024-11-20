<script lang="ts">
import BlogCard from "$lib/components/Blog/BlogCard.svelte";
import {fragment, graphql} from "$houdini";
export let bloglist

$: blogs = fragment(bloglist, graphql(`
fragment BlogList on Query {
    blogs {
        totalCount
        edges {
            node {
                id
                ...BlogCard
            }
        }
    }
}`))

console.log("bloglist:", bloglist)
console.log("blogs:", blogs)
</script>

<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4 mb-4">
    {#each $blogs?.data?.blogs?.edges as edge (edge.node.id)}
        <BlogCard id={edge.node.id} bloginput={edge.node} />
    {/each}
</div>
<hr>
{JSON.stringify($blogs)}
