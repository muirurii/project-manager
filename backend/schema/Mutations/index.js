const User = require("../../db/Models/User");
const Project = require("../../db/Models/Project");
const Task = require("../../db/Models/Task");

exports.addUser = async(parent, args) => {

    const { username, email, password } = args.input;

    const user = await User.create({
        username,
        email,
        password,
    })

    return user;
}
exports.addProject = async(parent, args) => {
    const { projectName, description, creatorId, estimatedHours } = args.input;

    const project = await Project.create({
        projectName,
        description,
        creatorId,
        estimatedHours
    });

    return project;
}
exports.addTask = async(parent, args) => {
    const { taskName, projectId, description, creatorId, estimatedHours } = args.input;

    const task = await Task.create({
        taskName,
        projectId,
        description,
        creatorId,
        estimatedHours
    });

    return task;
}