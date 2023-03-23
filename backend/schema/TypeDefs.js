const { gql } = require("apollo-server-express");

const typeDefs = gql `
  type User {
    _id: ID!
    username: String!
    email: String!
    picture: String!
    projects: [String!]!
    createdAt: String!
  }

  type Project {
    _id: ID!
    projectName: String!
    description: String!
    creatorId: User!
    admins: [User!]!
    assignedUsers: [User!]!
    status: String!
    estimatedHours: Int!
    tasks: [Task!]!
    createdAt: String!
  }

  type Task {
    _id: ID!
    taskName: String!
    projectId: String!
    description: String!
    creatorId: User!
    assignedUsers: [User!]!
    pictureURL: String!
    cloudinaryID: String!
    status: String!
    estimatedHours: String!
    comments: [Comment!]!
    createdAt: String!
  }

  type Comment {
    _id: ID!
    body: String!
    creatorId: User!
    taskId: String!
    replies: [Comment!]!
    createdAt: String!
  }

  input NewUserInput {
    username: String!
    email: String!
    password: String!
    repeatPassword: String!
  }

  input LoginUserInput {
    username: String!
    password: String!
  }

  input ProjectInput {
    projectName: String
    description: String!
    creatorId: ID!
    estimatedHours: Int
  }

  input TaskInput {
    taskName:String!,
    projectId:ID!,
    description:String!,
    creatorId:ID!,
    estimatedHours:Int!
  }

  input AddMember {
      username: String!
      projectId: ID!
    }

  #Queries

  type Query {
    getUser(input: LoginUserInput): User!
    getUsers: [User!]!
    getProject(projectId:ID!): Project!
    getProjects: [Project!]!
    getTask: Task!
    getTasks: [Task!]!
  }

  type Mutation {
    addUser(input: NewUserInput!): User!
    addProject(input: ProjectInput!): Project!
    addTask(input: TaskInput!): Task!
    addMember(input: AddMember!): Project!
  }
`;

module.exports = { typeDefs };