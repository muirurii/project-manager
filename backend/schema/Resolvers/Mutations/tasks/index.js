const Task = require("../../../../db/Models/Task");
const { verifyToken } = require("../../../../auth/token");

exports.addTask = async(parent, { input }, { req }) => {
    // verifyToken(req)

    const { taskName, project, description, creator, assignedUsers, estimatedHours } = input;

    const task = await Task.create({
        taskName,
        project,
        description,
        creator,
        assignedUsers: [assignedUsers],
        estimatedHours,
    });

    return task;
};