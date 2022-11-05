import styles from "./CoolButton.module.css";


export const CoolButton =
    ({
         text,
         className, onClick,
         disabled = false
     }: { text: string; className?: string; onClick: () => void; disabled: boolean }) => {
        return (
            <>
                <button disabled={disabled} onClick={onClick} className={`${styles.test} ${className}`}>
                    <span>{text}</span>
                </button>
            </>
        )
    }