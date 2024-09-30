/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */

export interface commonResponse{
    message?:string
}

export interface authenticationResponse extends commonResponse{
    token: string
}