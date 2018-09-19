// var pagination =  require('../../data/pagination')
var wrap = require("../../../src/wrap");
var pagination = require("../../../data/pagination.schema");
var schema = wrap.success({
    type: "object",
    properties: {
        projects: {
            type: "array",
            items: {
                type: "object",
                properties: {
                    name: {
                        type: "string",
                        chance: {
                            country: {
                                full: true
                            }
                        }
                    },
                    comment: {
                        type: "string"
                    },
                    id: {
                        type: "integer",
                        minimum: 0
                    },
                    status: {
                        type: "string",
                        enum: ["0", "1", "2"]
                    }
                },
                required: ["name", "id", "comment", "status"]
            },
            minItems: 4
        },
        pagination
    },
    required: ["projects", "pagination"]
});

module.exports = schema;
