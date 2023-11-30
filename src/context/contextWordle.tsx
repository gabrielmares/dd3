import { useState } from 'react'
import useDarkSide from "../hooks/useDarkSide";
import { WordleState } from "./wordleContext"


export const ContextWordle = (props: React.PropsWithChildren) => {

    const { colorTheme, handleTheme } = useDarkSide();

    const [showInstructions, setShowInstructions] = useState<boolean>(true)

    const handleInstructions = () => {
        setShowInstructions((prev: boolean) => !prev)
    }

    return (
        <WordleState.Provider value={{
            colorTheme,
            showInstructions,
            handleTheme,
            handleInstructions
        }} >
            {props.children}
        </WordleState.Provider>
    )

}