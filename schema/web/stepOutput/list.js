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
                    country: {
                        type: "string",
                    },
                    resultType: {
                        type: "integer",
                        enum: ["0", "1", "2"]
                    },
                    resultTextType: {
                        type: "integer",
                        enum: ["1", "2"]
                    },
                    result: {
                        type: "string",
                    },
                    comment: {
                        type: "string",
                    },
                    status: {
                        type: "string",
                        enum: ["0", "1", "2"]
                    }

                },
                required: ["name","stepId","id","country","resultTextType","result","comment","status","resultType"]
            },
            minItems: 20
        },
        // pagination
    },
    required: ["rules"/* , "pagination" */]
});

module.exports = schema;
