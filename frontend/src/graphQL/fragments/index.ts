import { gql } from "@apollo/client";

export const USER_FIELDS = gql`
  fragment userFields on User {
    _id
    username
    email
    picture
    createdAt
  }
`;

export const PRODUCT_FIELDS = gql`

  fragment projectFields on Project {
    _id
    projectName
    description
    creatorId
    estimatedHours
    status
  }

`