import {gql} from "@apollo/client";
import {USER_FIELDS} from "../../fragments";

const ADD_USER = gql`
        ${USER_FIELDS}
    mutation addUser(
        $username:String!,
        $email:String!,
        $password:String!
        $repeatPassword:String!
    ) {
        addUser(input:{username:$username,email:$email,
        password:$password,repeatPassword:$repeatPassword}){
            ...userFields
        }
    }
`


export {ADD_USER};