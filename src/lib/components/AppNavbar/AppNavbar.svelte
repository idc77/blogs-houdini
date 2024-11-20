<script lang="ts">
    import {
        Dropdown,
        DropdownDivider,
        DropdownHeader,
        DropdownItem,
        Navbar,
        NavBrand
    } from 'flowbite-svelte';
    import {page} from "$app/stores"
    import {SignIn, SignOut} from "@auth/sveltekit/components";
    import UserAvatar from "$lib/components/AppNavbar/UserAvatar.svelte";

    let session = $page.data.session
</script>

<Navbar fluid>
    <NavBrand href="/">
        <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Blogs</span>
    </NavBrand>
    <div class="flex md:order-2">
        {#if (session)}
            <UserAvatar/>
            <Dropdown>
                <DropdownHeader>
                    <span class="block text-sm">{session?.user?.name}</span>
                    <span class="block truncate text-sm font-medium">{session.user?.email}</span>
                </DropdownHeader>
                <DropdownItem>Profile</DropdownItem>
                <DropdownDivider/>
                <DropdownItem>
                    <SignOut/>
                </DropdownItem>
            </Dropdown>
        {:else}
            <SignIn provider="keycloak"/>
        {/if}
    </div>
</Navbar>

