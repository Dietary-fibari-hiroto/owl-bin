
import { ImagesIndex } from "../../assets/images/ImagesIndex";
import styles from "./Login.module.scss"
import { Link } from "react-router-dom";
import { AuthInput } from "../../components/form";
import { Mail } from "lucide-react";

const Login = ()=>{
    return(
        <section className={`${styles["login-page"]} section-frame`}>
            <img className="img--md-box" src={ImagesIndex.dawn_owl_hello} alt="dawn_owl_hello"/>
            <div  className={`${styles["login-page__form"]}`}>
                <div>
                    <p className="text-5xl">Login</p>
                    <p className="text-base">おかえりなさい。今日もここから始めましょう。</p>
                </div>
                <form>
                    <AuthInput label="メールアドレス" icon={Mail} type="text" />
                </form>
                <div>
                    <span></span>
                    <Link to=""></Link>
                </div>
            </div>
        </section>
    )
}

export default Login;