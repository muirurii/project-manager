const Project = require("../../../../db/Models/Project");
const User = require("../../../../db/Models/User");
const customError = require("../../../Errors");

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