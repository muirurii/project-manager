const { gql } = require("apollo-server-express");

const typeDefs = gql `
  type User {
    _id: ID!
    username: String!
    email: String!
    picture: String!
    projects: [String]
    createdAt: String
  }

  type Project {
    _id: ID!
    projectName: String
    description: String
    creatorId: ID!
    admins: [User!]
    assignedUsers: [User!]
    status: String
    estimatedHours: String
    tasks: [Task!]
    createdAt: String
  }

  type Task {
    _id: ID!
    taskName: String
    projectId: String
    description: String
    creatorId: ID!
    assignedUsers: [User!]
    pictureURL: String
    cloudinaryID: String
    status: String
    estimatedHours: String
    comments: [Comment!]
    createdAt: String
  }

  type Comment {
    _id: ID!
    body: String
    creatorId: ID!
    taskId: String
    replies: [Comment!]
    createdAt: String
  }

  #Queries

  type Query{ 
    getUser(_id: ID!): User
    getUsers: [User!]
    getProject: Project
    getProjects: [Project!]
    getTask: Task
    getTasks: [Task!]
  }
`;

module.exports = { typeDefs };