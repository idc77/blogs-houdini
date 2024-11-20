# Blogs with svelte-kit and houdini

bug repo

## setup

```
npx auth secret
```

change those values in /.env
```
AUTH_SECRET="npx auth secret"
AUTH_KEYCLOAK_ID="client id"
AUTH_KEYCLOAK_SECRET="client secret"
AUTH_KEYCLOAK_ISSUER="https://domain.tld/auth/realms/realm_name"
```

a keycloak idp is required, or you change the IDP params in `src/auth.ts` in
```ts
export const { signIn, signOut, handle } = SvelteKitAuth({
    providers: [Keycloak],
    // ...
})
```
to your idp type, also change your values in .env to reflect your idp name (replace keycloak with your idp name).
