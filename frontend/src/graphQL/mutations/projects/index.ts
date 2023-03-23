import { gql } from "@apollo/client";
import { PROJECT_FIELDS } from "../../fragments";

export const ADD_PROJECT = gql`
  ${PROJECT_FIELDS}

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
      ...projectFields
    }
  }
`;

export const ADD_MEMBER = gql`

    ${PROJECT_FIELDS}

    mutation addMember(
      $username:String!,
      $projectId: ID!
    ){
      addMember (
       input:{
        username:$username,
        projectId:$projectId
       }
      ){
        ...projectFields
      }
    }

`
