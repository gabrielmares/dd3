import { FormContainer } from "../interfaces"
import BoxLetter from "./BoxLetter"

const FormDisabled = ({ rowNumber, colorTheme, handleChange, activeRow, word, inputBox }: FormContainer) => {
    return (
        <div className=" grid grid-cols-5">
            {word?.split("").map((chart: string, index: number) => (
                <BoxLetter
                    key={chart + index + rowNumber}
                    currentWord={word?.split("")}
                    letter={""}
                    borderColor={false}
                    colorTheme={colorTheme}
                    background="bg-[--bg-boxLetter-empty]"
                    inputBox={inputBox}
                    handleChange={handleChange}
                    position={index}
                    activeRow={activeRow}
                    rowNumber={rowNumber}
                    reference={null}
                />
            ))}
        </div>
    )
}

export default FormDisabled