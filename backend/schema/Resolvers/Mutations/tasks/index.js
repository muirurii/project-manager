const Task = require("../../../../db/Models/Task");
const { verifyToken } = require("../../../../auth/token");
const Project = require("../../../../db/Models/Project");
const { customError } = require("../../../Errors");

exports.addTask = async(parent, { input }, { req }) => {
    // verifyToken(req)

    const { taskName, project, description, creator, assignedUsers, estimatedHours } = input;
    const verifiedProject = await Project.findById(project);

    if (!verifiedProject) {
        return customError("account not registered", "BAD_USER_INPUT");
    }

    const task = await Task.create({
        taskName,
        project,
        description,
        creator,
        assignedUsers: [assignedUsers],
        estimatedHours,
    });

    verifiedProject.tasks.push(task._id);

    return task;
};