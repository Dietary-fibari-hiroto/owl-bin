import { Index } from "../pages/Index"
import { Login } from "../pages/auths"

type RouteModel = {
    path:string,
    element:React.ReactNode
}

export const routeList:RouteModel[] = [
    {path:"/",element:<Index/>},
    {path:"/login",element:<Login/>}
]

export const staffRouteList:RouteModel[] = [
    {path:"",element:<>staff</>}
]

export const adminRouteList:RouteModel[]=[
    {path:"",element:<>admin</>}
]

