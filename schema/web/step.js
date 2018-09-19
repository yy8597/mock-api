var schema = {
    type: "object",
    properties: {
        status: {
            type: "integer",
            enum: [0]
        },
        data: {
            type: "object",
            properties: {
                name: {
                    type: "string"
                },
                id: {
                    type: "integer",
                    minimum: 0
                },
                projectId: {
                    type: "integer",
                    minimum: 0
                },
                comment: {
                    type: "string"
                },
                lastStepIds: {
                    type: "string"
                },
                status: {
                    type: "string",
                    enum: ["0", "1", "2"]
                },
                ipListTargetType: {
                    type: "string",
                    enum: ["0", "1", "2"]
                },
                ipListId: {
                    type: "integer",
                    minimum: 0,
                    minimum: 1000
                },

                domainTargetType: {
                    type: "string",
                    enum: ["0", "1", "2"]
                },
                domainListId: {
                    type: "integer",
                    minimum: 0,
                    minimum: 1000
                },

                countryTargetType: {
                    type: "string",
                    enum: ["0", "1", "2"]
                },
                countryListId: {
                    type: "integer",
                    minimum: 0,
                    minimum: 1000
                },

                languageTargetType: {
                    type: "string",
                    enum: ["0", "1", "2"]
                },
                languageListId: {
                    type: "integer",
                    minimum: 0,
                    minimum: 1000
                },

                requestInterval: {
                    type: "string",
                    enum: ["0", "1000"]
                },
                rejectRootDomain: {
                    type: "string",
                    enum: ["2", "1"]
                },
                reportDimension1: {
                    type: "string"
                },
                reportDimension2: {
                    type: "string"
                },            
            },
            required: ["name","id","projectId","comment","lastStepIds","status","ipListTargetType","ipListId","domainTargetType","domainListId","countryTargetType","countryListId","languageTargetType","languageListId","requestInterval","rejectRootDomain","reportDimension1","reportDimension2"]
        }
    },
    required: ["status", "data"]
};

module.exports = schema;
