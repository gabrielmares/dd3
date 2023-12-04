import { FormContainer } from "../interfaces";
import BoxLetter from "./BoxLetter";

const FormEnabled = ({ refs, rowNumber, colorTheme, handleChange, activeRow, word }: FormContainer) => {
    return (
        <form ref={refs}>
            <div className=" grid grid-cols-5">
                {word?.split("").map((chart: string, index: number) => (
                    <BoxLetter
                        key={chart + index + rowNumber}
                        currentWord={word?.split("")}
                        letter={""}
                        borderColor={false}
                        colorTheme={colorTheme}
                        background="bg-[--bg-boxLetter-empty]"
                        inputBox={true}
                        handleChange={handleChange}
                        position={index}
                        activeRow={activeRow}
                        rowNumber={rowNumber}
                    />
                ))}
            </div>
        </form>
    )
}

export default FormEnabled;