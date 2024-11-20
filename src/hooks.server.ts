import type { Handle } from '@sveltejs/kit';
import { i18n } from '$lib/i18n';
import { sequence } from '@sveltejs/kit/hooks';
import { handle as handleAuth } from  "./auth"
import {setSession} from "$houdini";

const handleParaglide: Handle = i18n.handle();
const handleHoudini = async ({event, resolve}) => {
    const session = await event.locals.auth();

    // set the session information for this event
    setSession(event, { session })

    // pass the event onto the default handle
    return await resolve(event)
}
export const handle: Handle = sequence(handleAuth, handleParaglide, handleHoudini);
