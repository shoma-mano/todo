export const FlashIcon = ({color, width=20, height=20}: { color: string; width?: number; height?:number; }) => {
    return (
        <svg width={width} height={height} viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M12.6863 8.09336H10.4975V2.99336C10.4975 1.80336 9.85292 1.56253 9.06667 2.45503L8.50001 3.09961L3.70459 8.55378C3.04584 9.29753 3.32209 9.90669 4.31376 9.90669H6.50251V15.0067C6.50251 16.1967 7.14709 16.4375 7.93334 15.545L8.50001 14.9004L13.2954 9.44628C13.9542 8.70253 13.6779 8.09336 12.6863 8.09336Z"
                fill={color}/>
        </svg>
    )
}