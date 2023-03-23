import {gql} from "@apollo/client";
import { PROJECT_FIELDS } from "../../fragments";

export const GET_PROJECTS = gql`
    
    query getProjects {
      getProjects{
        _id
    projectName
    description
    estimatedHours
      }  
    }

`