import { gql } from "@apollo/client";
import { PROJECT_FIELDS } from "../../fragments";

export const GET_PROJECTS = gql`
  query getProjects {
    getProjects {
      _id
    projectName
    creator{
      username
      _id
      picture
    }
    description
    estimatedHours
    status
    createdAt
    }
  }
`;

export const GET_PROJECT = gql`
  query getProject($project: ID!) {
    getProject(project: $project) {
      _id
    projectName
    description
    estimatedHours
    status
    createdAt
    }
  }
`;
