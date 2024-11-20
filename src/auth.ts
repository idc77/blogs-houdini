import {SvelteKitAuth} from "@auth/sveltekit"
import Keycloak from "@auth/sveltekit/providers/keycloak"

declare module "@auth/sveltekit" {
    interface Session {
        access_token?: string
    }
}

declare module "@auth/core/jwt" {
    interface JWT {
        accessToken?: string
    }
}

export const { signIn, signOut, handle } = SvelteKitAuth({
    providers: [Keycloak],
    callbacks: {
        async jwt({ token, trigger, session, account }) {
            if (trigger === "update") token.name = session.user.name
            if (account?.provider === "keycloak") {
                return { ...token, accessToken: account.access_token }
            }
            return token
        },
        async session({session, token}) {
            if (token?.accessToken) session.access_token = token.accessToken
            if (token) {
                session.user.id = token.sub as string
            }
            return session
        },
    }
})
