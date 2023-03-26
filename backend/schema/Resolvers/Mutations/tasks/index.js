const Task = require("../../../../db/Models/Task");
const { verifyToken } = require("../../../../auth/token");

exports.addTask = async(parent, { input }, { req }) => {
    // verifyToken(req)

    const { taskName, projectId, description, creatorId, assignedUsers, estimatedHours } = input;

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