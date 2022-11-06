import s from "../../app/menus/newnote/NewNote.module.sass";
import { FlashIcon } from "../Icon/FlashIcon";
import { useState } from "react";

export const useFlashIconGroup = ({ isChangeable = true }: { isChangeable?: boolean }) => {
    const [energyCost, setEnergyCost] = useState<1 | 2 | 3>(1);

    const FlashIconGroup = isChangeable ? () => {
        return (
            <div className={s.priorityButtonContainer}>
                {[1, 2, 3].map((cost, index) => {
                    return (
                        <div key={index} onClick={() => setEnergyCost((cost) as 1 | 2 | 3)}>
                            <FlashIcon color={index + 1 <= energyCost ? '#78ACD5' : '#464646'}
                            ></FlashIcon>
                        </div>
                    )
                })}
            </div>
        )
    } : ({ defaultCost }: { defaultCost?: number }) => {
        return (
            <div className={s.priorityButtonContainer}>
                {[1, 2, 3].map((cost, index) => {
                    return (
                        <div key={index}>
                            <FlashIcon color={index + 1 <= defaultCost! ? '#78ACD5' : '#464646'}
                            ></FlashIcon>
                        </div>
                    )
                })}
            </div>
        )
    }


    return {
        FlashIconGroup,
        energyCost,
    }
}