import Link from "next/link";
import styles from "../style/MyLink.module.css"
export default function ({text, href}){
    return(
        <Link href={href}>
            <a className={styles.link}>{text}</a>
        </Link>
    )
}