"use client";
import {ReactNode} from "react";
import {usePathname} from "next/navigation"
import styles from "../../styles/MenusLayout.module.css";

const MenusLayout = ({children}: { children: ReactNode }) => {
    const pathname = usePathname();
    console.log(pathname);
    return <>
        <div className={styles.menuContainer}>
            <header className={styles.header}>
                Note
            </header>
            <div className={styles.menu}>
                {children}
            </div>
        </div>
    </>
}

export default MenusLayout;