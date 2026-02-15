import { type LucideIcon } from "lucide-react";

type Props = {
    label:string;
    icon:LucideIcon;
    type:"text"|"email"|"password"|"number";
}

const AuthInput = ({ label, icon:Icon, type }: Props)=>{
    return(
        <div>
            <Icon size={24}/>
            <input type={type} placeholder={label}/>
        </div>
    )
}

export default AuthInput;