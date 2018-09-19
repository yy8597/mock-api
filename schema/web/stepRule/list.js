// var pagination =  require('../../data/pagination')
var wrap = require("../../../src/wrap");
// var pagination = require("../../data/pagination.schema");
var schema = wrap.success({
    type: "object",
    properties: {
        rules: {
            type: "array",
            items: {
                type: "object",
                properties: {
                    name: {
                        type: 'string',
                        chance: 'name'
                    },
                    stepId: {
                        type: "integer",
                        minimum: 0
                    },
                    id: {
                        type: "integer",
                        minimum: 0
                    },
                    parameter: {
                        type: "string",
                        chance: "name"
                    },
                    valueType: {
                        type: "string",
                        enum: ['0', '1', '2', '3']
                    },
                    filterType: {
                        type: "string",
                        enum: ['0', '11', '12', '21', '22', '23', '23', '25', '31']
                    },
                    textValue: {
                        type: "string",
                        chance: "name"
                    },
                    numberValue: {
                        type: "integer",
                        minimum: 0,
                        maximum: 100
                    },
                    min: {
                        type: "integer",
                        minimum: 0,
                        maximum: 100
                    },
                    max: {
                        type: "integer",
                        minimum: 0,
                        maximum: 100
                    },
                    status: {
                        type: "string",
                        enum: ["0", "1", "2"]
                    }
                },
                required: ["name", "stepId","id","parameter","valueType","filterType","textValue","numberValue","status","max", "min"]
            },
            minItems: 20
        },
        // pagination
    },
    required: ["rules"/* , "pagination" */]
});

module.exports = schema;
