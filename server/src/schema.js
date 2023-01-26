const { gql } = require("apollo-server");

const typeDefs = gql`
    type Query {
        "Get Tracks array for homepage grid"
        tracksForHome: [Track!]!
        "Get a specific Track"
        track(id: ID!): Track
    }

    "A track is a group of Modules that teaches about a specific topic."
    type Track {
        "Track ID"
        id: ID!
        "Track title"
        title: String!
        "Track author"
        author: Author!
        "Track thumbnail"
        thumbnail: String
        "Approx. Track length, in minutes (Optional)"
        length: Int
        "Number of Modules in this Track (Optional)"
        modulesCount: Int
        "The track's complete description, can be in Markdown format"
        description: String
        "The number of times a track has been viewed"
        numberOfViews: Int
        "The track's complete array of Modules"
        modules: [Module!]!
    }

    "Author of a complete Track or a Module"
    type Author {
        "Author Id"
        id: ID!
        "Author name"
        name: String!
        "Photo of the Author (Optional)"
        photo: String
    }

    "A Module is a single unit of teaching. Multiple Modules comprose a track"
    type Module {
        id: ID!
        "The Module's title"
        title: String!
        "the Module's length in minutes"
        length: Int
    }
`;

module.exports = typeDefs;