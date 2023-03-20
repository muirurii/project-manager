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
