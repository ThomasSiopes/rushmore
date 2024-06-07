const { Survey } = require("../models");

const resolvers = {
    Query: {
        surveys: async() => {
            return Survey.find();
        }
    }
}

module.exports = resolvers;