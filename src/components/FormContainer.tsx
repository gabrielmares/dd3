import { FormContainer } from "../interfaces";
import FormDisabled from "./FormDisabled";
import FormEnabled from "./FormEnabled";


const FormContainer = ({ refs, colorTheme, handleChange, word, rowNumber, activeRow }: FormContainer) => {
    return (
        <>
            {(activeRow === rowNumber) ?
                (<FormEnabled
                    word={word}
                    colorTheme={colorTheme}
                    inputBox={activeRow === rowNumber}
                    handleChange={handleChange}
                    activeRow={activeRow}
                    rowNumber={rowNumber}
                    refs={refs}
                />) :
                (<FormDisabled
                    word={word}
                    colorTheme={colorTheme}
                    inputBox={activeRow === rowNumber}
                    handleChange={handleChange}
                    activeRow={activeRow}
                    rowNumber={rowNumber}
                />)
            }
        </>
    );
}

export default FormContainer;