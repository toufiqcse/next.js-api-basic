export interface IPost {
    body: string,
    id: any,
    title: string,
    userId: number
}

export interface IUser {
    id?: any,
    name?:string,
    userName?: string,
    email?: string,
    phone?: string,
    website?: string,
    street?: string,
    suite?:string,
    city?: string,
    zipcode?: number,
    lat?: number,
    lng?: number,
    address?:object,
 
}

export interface IUseStateUser {
    users: string,
    setUsers: string
}
export interface IUserStateUser {
    user: string,
    setUser: string
}