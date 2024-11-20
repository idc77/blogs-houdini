/// <references types="houdini-svelte">

/** @type {import('houdini').ConfigFile} */
const config = {
    "watchSchema": {
        "url": "http://localhost:8081/query"
    },
    "plugins": {
        "houdini-svelte": {}
    },
    scalars: {
        Time: {
            type: "Date"
        }
    }
}

export default config
