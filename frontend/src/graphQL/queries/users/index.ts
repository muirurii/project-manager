import { gql } from "@apollo/client";
import { USER_FIELDS } from "../../fragments";

export const GET_USER = gql`
  query getUser($username: String!, $password: String!) {
    getUser(input: { username: $username, password: $password }) {
      _id
      username
      email
      picture
      accessToken
      createdAt
      projects {
        _id
        projectName
        description
        estimatedHours
        createdAt
      }
    }
  }
`;
export const REFRESH_USER = gql`
  query refreshUser {
    refreshUser {
      _id
      username
      email
      picture
      accessToken
      createdAt
      projects {
        _id
        projectName
        description
        estimatedHours
        createdAt
      }
    }
  }
`;
