import {gql} from "@apollo/client";

const GET_PROJECTS = gql`
  query getProjects{
        getProjects{
          projectName
        }
  }
`

export {GET_PROJECTS} 