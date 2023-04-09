import { gql } from "@apollo/client";
import { PROJECT_FIELDS } from "../../fragments";

export const ADD_PROJECT = gql`

  mutation addProject(
    $projectName: String!
    $description: String!
    $creator: ID!
    $estimatedHours: Int!
  ) {
    addProject(input:{
        projectName:$projectName,
        description:$description,
        creator:$creator,
        estimatedHours:$estimatedHours
    }) {
      _id
    projectName
    description
    estimatedHours
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
