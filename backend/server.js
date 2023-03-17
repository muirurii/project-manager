const express = require("express");
const { ApolloServerPluginLandingPageGraphQLPlayground } = require('apollo-server-core');
const dotenv = require("dotenv");
const path = require("path");
dotenv.config({
    path: path.join(__dirname, '../', ".env")
});
const cors = require("cors");
const PORT = process.env.PORT || 5000;
const connection = require("./db/config");
const { ApolloServer } = require("apollo-server-express");
const { typeDefs } = require("./schema/TypeDefs");
const { getTask, getTasks } = require("./schema/Resolvers/taskQueries")
const { getUser, getUsers } = require("./schema/Resolvers/userQueries")
const { getProject, getProjects } = require("./schema/Resolvers/projectQueries")
const { addUser, addProject, addTask } = require("./schema/Mutations")

const app = express();
connection();
// app.use(cors());

const startServer = async() => {
    const server = new ApolloServer({
        typeDefs,
        resolvers: {
            Query: {
                getUser,
                getUsers,
                getProject,
                getProjects,
                getTask,
                getTasks,
            },
            Mutation: {
                addUser,
                addProject,
                addTask
            }
        },
        plugins: [
            ApolloServerPluginLandingPageGraphQLPlayground
        ]
    });

    await server.start();
    server.applyMiddleware({ app });

    app.listen(PORT, () => console.log(`graphql server started on ${server.graphqlPath}`));
}

app.get("/api", () => console.log(`API working on ${PORT}`));

startServer();