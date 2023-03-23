import { gql } from "@apollo/client";
import { TASK_FIELDS } from "../../fragments";

export const ADD_TASK = gql`
  ${TASK_FIELDS}
  mutation addTask(
    $taskName: String!
    $description: String!
    $projectId: ID!
    $creatorId: ID!
    $assignedUsers:String!
    $estimatedHours: Int!
  ) {
    addTask(
      input: {
        taskName: $taskName
        description: $description
        projectId: $projectId
        creatorId: $creatorId
        assignedUsers: $assignedUsers
        estimatedHours: $estimatedHours
      }
    ){

    ...taskFields
  }
  }
`;
