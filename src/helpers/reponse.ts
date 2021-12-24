const responses = {
    500: {
        type: 'object',
        properties: {
            success: { type: 'boolean' },
            code: { type: 'number' },
            message: { type: 'string' },
            error: { type: 'string' }
        }
    },

    200: {
        type: 'object',
        properties: {
            success: { type: 'boolean' },
            message: { type: 'string' },
            data: {}
        }
    }
}

export default function (keys: number[]) {
    return keys.reduce((acc: any, key: number) =>
        ({ ...acc, [key]: responses[key] }),
        {}
    )
}