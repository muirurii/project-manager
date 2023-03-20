import {gql} from "@apollo/client";

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
            picture,
            createdAt
        }
    }
`


export {ADD_USER};