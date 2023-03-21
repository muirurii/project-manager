import { gql } from "@apollo/client";

export const ADD_PROJECT = gql`
  mutation addProject(
    $projectName: String!
    $description: String!
    $creatorId: ID!
    $estimatedHours: Int!
  ) {
    addProject(input:{
        projectName:$projectName,
        description:$description,
        creatorId:$creatorId,
        estimatedHours:$estimatedHours
    }) {
      _id
      projectName
      description
      estimatedHours
      status
    }
  }
`;
