import { gql } from "@apollo/client";
import { USER_FIELDS } from "../../fragments";

const ADD_USER = gql`
    mutation addUser(
        $username:String!,
        $email:String!,
        $password:String!
        $repeatPassword:String!
    ) {
        addUser(input:{username:$username,email:$email,
        password:$password,repeatPassword:$repeatPassword}){
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

export { ADD_USER };
