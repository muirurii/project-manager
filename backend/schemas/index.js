const User = require("../db/Models/User");
const Project = require("../db/Models/Project");
const Task = require("../db/Models/Task");
const Comment = require("../db/Models/Comment");

const {
    GraphQLObjectType,
    GraphQLID,
    GraphQLString,
    GraphQLNonNull,
    GraphQLInt,
    GraphQLList,
    GraphQLBoolean,
    GraphQLSchema,
} = require("graphql");

//Types for queries

const ProjectType = new GraphQLObjectType({
    name: "Project",
    fields: () => ({
        _id: {
            type: GraphQLID,
        },
        projectName: {
            type: GraphQLString,
        },
        description: {
            type: GraphQLString,
        },
        creator: {
            type: UserType,
            resolve(parent) {
                return User.findById(parent.creatorId);
            },
        },
        admins: {
            type: new GraphQLList(UserType),
            resolve(parent) {
                return User.findById(parent.admins);
            },
        },
        assignedUsers: {
            type: new GraphQLList(UserType),
            resolve(parent) {
                return User.findById(parent.assignedUsers);
            },
        },
        status: {
            type: GraphQLString,
        },
        estimatedHours: {
            type: GraphQLInt,
        },
        tasks: {
            type: new GraphQLList(TaskType),
            resolve(parent) {
                return Task.find({ _id: $in[parent.tasks] });
            },
        },
    }),
});

const UserType = new GraphQLObjectType({
    name: "User",
    fields: () => ({
        _id: {
            type: GraphQLID,
        },
        username: {
            type: GraphQLString,
        },
        email: {
            type: GraphQLString,
        },
        password: {
            type: GraphQLString,
        },
        picture: {
            type: GraphQLString,
        },
        projects: {
            type: new GraphQLList(ProjectType),
            resolve(parent) {
                return Project.find({ _id: $in[parent.projects] });
            },
        },
    }),
});

const CommentType = new GraphQLObjectType({
    name: "Comment",
    fields: () => ({
        _id: {
            type: GraphQLID,
        },
        body: {
            type: GraphQLString,
        },
        creator: {
            type: UserType,
            resolve(parent) {
                return User.findById(parent.creatorId);
            },
        },
        replies: {
            type: CommentType,
            resolve(parent) {
                return Comment.find({ _id: $in[parent.replies] });
            },
        },
    }),
});

const TaskType = new GraphQLObjectType({
    name: "Task",
    fields: () => ({
        _id: {
            type: GraphQLID,
        },
        taskName: {
            type: GraphQLString,
        },
        project: {
            type: ProjectType,
            resolve(parent) {
                return Project.findById(parent.projectId);
            },
        },
        description: {
            type: GraphQLString,
        },
        creator: {
            type: UserType,
            resolve(parent) {
                return User.findById(parent.creatorId);
            },
        },
        assignedUsers: {
            type: new GraphQLList(UserType),
            resolve(parent) {
                return User.find({ _id: $in[parent.assignedUsers] });
            },
        },
        pictureURL: {
            type: GraphQLString,
        },
        status: {
            type: GraphQLString,
        },
        estimatedHours: {
            type: GraphQLInt,
        },
        comments: {
            type: new GraphQLList(CommentType),
            resolve(parent) {
                return Comment.find({ _id: $in[parent.comments] });
            },
        },
    }),
});

const RootQuery = new GraphQLObjectType({
    name: "Root",
    fields: () => ({
        client: {
            type: UserType,
            args: {
                _id: {
                    type: GraphQLID,
                },
            },
            resolve(parent, args) {
                return User.findById(args._id);
            },
        },
        project: {
            type: ProjectType,
            args: {
                _id: {
                    type: GraphQLString,
                },
            },
            resolve(parent, args) {
                return Project.findById(args._id);
            },
        },
    }),
});

// const Mutation = new GraphQLObjectType({
//     name: "Mutation",
//     fields: {
//         addProject: {
//             type: ProjectType,
//             args: {
//                 name: GraphQLString,
//                 description: GraphQLString,
//                 clientId: GraphQLID,
//             },
//             resolve(parent, args) {
//                 const { clientId, description, name } = args;
//                 projects.push({ _id: 5, clientId, description, name });
//                 return projects;
//             },
//         },
//     },
// });

module.exports = new GraphQLSchema({
    query: RootQuery,
    // mutation: Mutation,
});