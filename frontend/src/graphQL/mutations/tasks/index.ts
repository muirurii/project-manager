import { gql } from "@apollo/client";
import { TASK_FIELDS } from "../../fragments";

export const ADD_TASK = gql`
  mutation addTask(
    $taskName: String!
    $description: String!
    $project: ID!
    $creator: ID!
    $assignedUsers:String!
    $estimatedHours: Int!
  ) {
    addTask(
      input: {
        taskName: $taskName
        description: $description
        project: $project
        creator: $creator
        assignedUsers: $assignedUsers
        estimatedHours: $estimatedHours
      }
    ){
      taskName
  }
  }
`;
