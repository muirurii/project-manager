const ProjectQueries = {
    getProject: () => {
        return {
            projectName: "Hello",
            _id: "44",
            description: "String!",
            creatorId: "ID!",
            admins: ["User!"],
            assignedUsers: ["User!"],
            status: "String!",
            estimatedHours: "Int!",
            tasks: ["Task!"],
            createdAt: " String!"
        };
    },
    getProjects: () => {
        return [{ projectName: "Hello" }];
    },
}

module.exports = ProjectQueries;