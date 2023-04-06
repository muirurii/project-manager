const { gql } = require("apollo-server-express");

exports.typeDefs = gql `
  type User {
    _id: ID!
    username: String!
    email: String!
    picture: String!
    accessToken: String!
    projects: [Project!]!
    tasks:[Task!]!
    createdAt: String!
  }

  type Project {
    _id: ID!
    projectName: String!
    description: String!
    creator: User!
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
    project: Project!
    description: String!
    creator: User!
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
    creator: User!
    task: String!
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
    creator: ID!
    estimatedHours: Int
  }

  input TaskInput {
    taskName:String!,
    project:ID!,
    description:String!,
    creator:ID!,
    assignedUsers: String,
    estimatedHours:Int!
  }

  input AddMember {
      username: String!
      project: ID!
    }

  #Queries

  type Query {
    getUser(input: LoginUserInput): User!
    getUsers: [User!]!
    refreshUser:User!
    getProject(project:ID!): Project!
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