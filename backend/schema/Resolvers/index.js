//Queries

const { getUser, getUsers, refreshUser } = require("./Queries/users");
const { getProject, getProjects } = require("./Queries/projects");
const { getTask, getTasks } = require("./Queries/tasks");

//Mutations

const { addUser } = require("./Mutations/users");
const { addProject, addMember } = require("./Mutations/projects");
const { addTask } = require("./Mutations/tasks");

module.exports = {
    Query: {
        getUser,
        refreshUser,
        getUsers,
        getProject,
        getProjects,
        getTask,
        getTasks
    },
    Mutation: {
        addUser,
        addProject,
        addMember,
        addTask
    }
}