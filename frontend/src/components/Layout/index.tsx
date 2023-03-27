import { ReactNode } from "react";
import { REFRESH_USER } from "../../graphQL/queries/users";
import { useQuery } from "@apollo/client";
import Loader from "./Loader";
import {setUser} from "../../features/user/userSlice";
import { useAppDispatch } from "../../app/hooks";
import { UserTypes } from "../../Types";


const Layout = ({ children }: { children: ReactNode }) => {
  const {loading,error,data} = useQuery(REFRESH_USER);
  const dispatch = useAppDispatch();

console.log(data)
console.log(error)

if(loading) return <Loader height="100vh" width="100vw" />

if(data){
    const user = data.refreshUser as UserTypes;
    dispatch(setUser(user));
  }

  // if(error) return <p>Error :{error.message}</p>

  return (
    <div className="mb-5">
      {children}
    </div>
  );
};

export default Layout;
