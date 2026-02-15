import styles from "./ActionButton.module.scss";

type Props = {
    label:string;
    onClick:()=>void;
}

const ActionButton = (props:Props)=>{
    return(
        <button className={`${styles["action-button"]} text-md `} type="button" onClick={props.onClick}>
            <p>{props.label}</p>
        </button>
    )
}


export default ActionButton;