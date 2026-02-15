import styles from "./AuthButton.module.scss"

type Props = {
    label:string;
    onClick : ()=>void;
}

const AuthButton = (props:Props)=> {
    return(
        <button onClick={props.onClick} type="button" className={`${styles["auth-button"]} text-xl`}>
            <p>{props.label}</p>
            <p className={`${styles["auth-button__arrow"]} `}>→</p>
        </button>
    )
}
export default AuthButton;