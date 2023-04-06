import { gql } from "@apollo/client";

export const USER_FIELDS = gql`
  fragment userFields on User {
    _id
    username
    email
    picture
    accessToken
    createdAt
  }
`;

export const PROJECT_FIELDS = gql`
  fragment projectFields on Project {
    _id
    projectName
    description
    estimatedHours
  }
`;

export const TASK_FIELDS = gql`
  fragment taskFields on Task {
    _id
    taskName
    description
    estimatedHours
  }
`;
