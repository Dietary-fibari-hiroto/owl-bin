import { useNavigate} from "react-router-dom";

import { ImagesIndex } from "../assets/images/ImagesIndex";
import { AuthButton,ActionButton } from "../components/buttons";
import styles from "./Index.module.scss";

export const Index = ()=>{
    const navigate = useNavigate();
    return(
        <section className={`${styles["index-page"]} section-frame`}>
            <img onClick={()=>window.location.assign("https://v2.dawn-waiting.com")} className={styles["index-page__header"]} src={ImagesIndex.dawn_logo_black} alt="dawn_logo_black"/>

            <div className={styles["index-page__content"]}>
                <div>
                    <p className="text-6xl">ふくろうびん</p>
                    <p className="text-xl">見守って、整えて、届けるシフト。</p>
                </div>
                <p className="concept-text-width">
                    募集のやり方はそのままに、そのあとの手間だけなくしましょう。 届いた希望を集めて、整えて、あなたの手元へ。 ふくろうびんで、シフト管理の負担を減らしましょう！
                </p>
                <nav className={styles["index-page__content-nav"]}>
                    <AuthButton label="ログイン" onClick={()=>navigate("/login")}/>
                    <ActionButton label="無料で試す" onClick={()=>navigate("/register")} />
                </nav>
                <a className={styles["index-page__content-homepage"]} href="https://www.duskshift.dawn-waiting.com/">ホームページへ...</a>
                
            </div>
            <img className={styles["index-page__visual"]} src = {ImagesIndex.DuskOwl_flaing} alt="DuskOwl_flaing"/>
        </section>
    )
}