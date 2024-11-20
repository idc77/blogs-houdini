<script lang="ts">
import {Avatar} from "flowbite-svelte";
import {page} from "$app/stores"

let session = $page.data.session
</script>

<Avatar alt="User avatar">{session?.user.name.substring(0,2)}</Avatar>
