const Project = require("../../db/Models/Project");

const ProjectQueries = {
    getProject: async(parent, args) => {

        const { projectId } = args;
        const project = await Project.findById(projectId);

        return project;

    },
    getProjects: () => {
        return [{ projectName: "Hello" }];
    },
}

module.exports = ProjectQueries;