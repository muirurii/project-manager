import {gql} from "@apollo/client";
import { USER_FIELDS } from "../../fragments";

const GET_USER = gql`
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

export {GET_USER};