const express = require("express");
// const {Ap} = require("apollo-server")
const PORT = process.env.PORT || 5000;
const { ApolloServer } = require("apollo-server-express");
const { typeDefs } = require("./schema/TypeDefs");
const { resolvers } = require("./schema/Resolvers");

const app = express();

const startServer = async() => {
    const server = new ApolloServer({
        typeDefs,
        resolvers,
    });

    await server.start();
    server.applyMiddleware({ app });

    app.listen(PORT, () => console.log(`graphql server started on ${server.graphqlPath}`));
}

app.get("/api", () => console.log(`API working on ${PORT}`));

startServer();