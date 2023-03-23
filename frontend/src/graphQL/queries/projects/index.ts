import {gql} from "@apollo/client";
import { PROJECT_FIELDS } from "../../fragments";

export const GET_PROJECTS = gql`

    ${PROJECT_FIELDS}

    query getProjects {
      getProjects{
          ...projectFields
      }  
    }

`

export const GET_PROJECT = gql`

    ${PROJECT_FIELDS}

    query getProject(
      $projectId: ID!
      ){
      getProject(
        projectId:$projectId
      ){
        ...projectFields
      }
    }


`