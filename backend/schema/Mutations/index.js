const User = require("../../db/Models/User");
const Project = require("../../db/Models/Project");
const Task = require("../../db/Models/Task");
const bcrypt = require("bcrypt");
const { customError } = require("../Errors");

exports.addUser = async(parent, args) => {
    const { username, email, password, repeatPassword } = args.input;

    if (password !== repeatPassword) {
        return customError("Passwords don't match", "BAD_USER_INPUT");
    }

    const duplicate = await User.findOne({
        $or: [{ email }, { username }],
    });

    if (duplicate) {
        const duplicateName = await User.findOne({ username });

        if (duplicateName) {
            customError("username already registered", "BAD_USER_INPUT");
        } else {
            customError("email already registered", "BAD_USER_INPUT");
        }
        customError("email and username already registered", "BAD_USER_INPUT");
    }

    const hashedPassword = await bcrypt.hash(password, 7);

    const user = await User.create({
        username,
        email,
        password: hashedPassword,
    });

    return user;
};
exports.addProject = async(parent, args) => {
    const { projectName, description, creatorId, estimatedHours } = args.input;

    const project = await Project.create({
        projectName,
        description,
        creatorId,
        estimatedHours,
    });

    return project;
};
exports.addTask = async(parent, args) => {
    const { taskName, projectId, description, creatorId, assignedUsers, estimatedHours } =
    args.input;

    const task = await Task.create({
        taskName,
        projectId,
        description,
        creatorId,
        assignedUsers: [assignedUsers],
        estimatedHours,
    });

    return task;
};

exports.addMember = async(parent, args) => {

    const { username, projectId } = args.input;
    const user = await User.findOne({ username });

    if (user === null) {
        return customError("user not found", "BAD_USER_INPUT");
    }
    const project = await Project.findById(projectId);

    if (project === null) {
        return customError("project not found", "BAD_USER_INPUT");
    }

    project.members.push(user._id);
    await project.save();
    user.projects.push(project._id);
    await user.save();

    return project;
}