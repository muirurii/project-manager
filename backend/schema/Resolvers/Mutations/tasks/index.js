const Task = require("../../../../db/Models/Task");

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