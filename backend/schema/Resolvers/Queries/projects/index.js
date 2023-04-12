const Project = require("../../../../db/Models/Project");

exports.getProject = async(parent, args) => {

    const project = await Project.findById(args.project).populate("creator");
    return project;

}


exports.getProjects = async() => {
    const projects = await Project.find().populate("creator");
    return projects;
}