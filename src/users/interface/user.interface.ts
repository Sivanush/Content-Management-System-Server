/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */

import { User } from "../model/user.model"

export interface commonResponse{
    message?:string
}

export interface authenticationResponse extends commonResponse{
    token: string
}


export interface userDataResponse extends commonResponse,User{
    
}