import {Get, Post} from "./fetchService";
import * as ApiEndpoint from "../Constants/apiEndpoints";
import { IBaseUser, IUser } from "../Components/UserDashboard/userInterfaces";


class UserDataService 
{
    getAll =()=>{
        return Get<Array<IUser>>(ApiEndpoint.GET_ALLUSERS);
    }

    create = (data:IBaseUser)=>{
        return Post<IUser,IBaseUser>(ApiEndpoint.CREATE_USER, data);
    }
}
export default new UserDataService;
