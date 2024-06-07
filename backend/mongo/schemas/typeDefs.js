const {gql} = require("apollo-server-express");

const typeDefs = gql`
    type Survey {
        _id: ID
    }

    type Query {
        surveys: [Survey]
    }
`;

module.exports = typeDefs;