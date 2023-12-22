import http from "./axiosConfig";
import * as ApiEndpoint from "../Constants/apiEndpoints";
import { IBaseUser, IUser } from "../Components/UserDashboard/userInterfaces";

class UserDataService 
{
    getAll =()=>{
        return http.get<Array<IUser>>(ApiEndpoint.GET_ALLUSERS);
    }

    create = (data:IBaseUser)=>{
        return http.post<IUser>(ApiEndpoint.CREATE_USER, data);
    }

}

export default new UserDataService;
