// var pagination =  require('../../data/pagination')
var wrap = require("../../../src/wrap");
// var pagination = require("../../data/pagination.schema");
var schema = wrap.success({
    type: "object",
    properties: {
        paths: {
            type: "array",
            items: {
                type: "object",
                properties: {
                    path: {
                        type: "string",
                        chance: {
                            country: {
                                full: true
                            }
                        }
                    },
                    id: {
                        type: "integer",
                        minimum: 0
                    },
                    value: {
                        type: "string",
                        chance: "name"
                    },
                    status: {
                        type: "string",
                        enum: ["0", "1", "2"]
                    }
                },
                required: ["path", "id", "value", "status"]
            },
            minItems: 20
        },
        // pagination
    },
    required: ["paths"/* , "pagination" */]
});

module.exports = schema;
