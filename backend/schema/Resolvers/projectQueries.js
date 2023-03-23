const Project = require("../../db/Models/Project");

exports.getProject = async(parent, args) => {

    const { projectId } = args;
    const project = await Project.findById(projectId);

    return project;

}


exports.getProjects = async() => {
    const projects = await Project.find();
    return projects;
}