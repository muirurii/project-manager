import {gql} from "@apollo/client";
import { USER_FIELDS } from "../../fragments";

export const GET_USER = gql`
    ${USER_FIELDS}
    query getUser(
        $username:String!,
        $password:String!
    ) {
        getUser(input:{username:$username,password:$password}){
            ...userFields
        }
    }
`
export const REFRESH_USER = gql`
    ${USER_FIELDS}
    query refreshUser{
        refreshUser{
            ...userFields
        }
    }
`