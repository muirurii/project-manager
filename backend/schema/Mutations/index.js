const User = require("../../db/Models/User");
const Project = require("../../db/Models/Project");
const Task = require("../../db/Models/Task");
const bcrypt = require("bcrypt");
const { GraphQLError } = require("graphql");

const customError = (message, code) => {
    throw new GraphQLError(message, {
        extensions: {
            code,
        },
    });
};

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
    const { taskName, projectId, description, creatorId, estimatedHours } =
    args.input;

    const task = await Task.create({
        taskName,
        projectId,
        description,
        creatorId,
        estimatedHours,
    });

    return task;
};