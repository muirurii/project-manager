const express = require("express");
const { ApolloServerPluginLandingPageGraphQLPlayground } = require('apollo-server-core');
const dotenv = require("dotenv");
const path = require("path");
dotenv.config({
    path: path.join(__dirname, '../', ".env")
});
const cookieParser = require("cookie-parser");
const PORT = process.env.PORT || 5000;
const connection = require("./db/config");
const { ApolloServer } = require("apollo-server-express");
const { typeDefs } = require("./schema/TypeDefs");
const { getTask, getTasks } = require("./schema/Resolvers/taskQueries");
const { getUser, getUsers, refreshUser } = require("./schema/Resolvers/userQueries");
const { getProject, getProjects } = require("./schema/Resolvers/projectQueries");
const { addUser, addProject, addTask, addMember } = require("./schema/Mutations");
const { verifyToken } = require("./auth/token");

const app = express();
connection();

app.use(cookieParser());

const allowedOrigins = [
    "http://localhost:3000",
    "http://localhost:5000",
    undefined
];

const corsOptions = {
    origin: (origin, callback) => {
        if (allowedOrigins.includes(origin) || origin === undefined) {
            callback(null, true);
        } else {
            callback(new Error("Not allowed by cors"));
        }
    },
    optionSuccessStatus: 200,
    credentials: true,
};

// app.use(verifyToken);

const startServer = async() => {
    const server = new ApolloServer({
        typeDefs,
        resolvers: {
            Query: {
                getUser,
                getUsers,
                refreshUser,
                getProject,
                getProjects,
                getTask,
                getTasks,
            },
            Mutation: {
                addUser,
                addProject,
                addTask,
                addMember,
            }
        },
        context: ({ req, res }) => ({ req, res }),
        plugins: [
            ApolloServerPluginLandingPageGraphQLPlayground,
        ]
    });

    await server.start();
    server.applyMiddleware({ app, cors: corsOptions });

    app.listen(PORT, () => console.log(`graphql server started on ${server.graphqlPath}`));
}

app.get("/api", () => console.log(`API working on ${PORT}`));

startServer();