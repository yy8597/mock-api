module.exports = {
    type: 'object',
    properties: {
        current: {
            type: "number",
            enum: [1]
        },
        pageSize: {
            type: "number",
            enum: [50]
        },
        total: {
            type: 'integer',
            minimum: 200,
            maximum: 400,
        }
    },
    required: ['current', 'pageSize', 'total']
}