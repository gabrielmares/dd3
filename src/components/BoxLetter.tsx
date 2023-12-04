import { boxStyle } from "../helpers/customClasses";
import { BoxWithLetter } from "../interfaces";
import BoxContent from "./BoxContent";

export default function BoxLetter({
  letter,
  fontColor = "text-black",
  borderColor = false,
  background,
  inputBox = false,
  colorTheme,
  position,
  handleChange,
  activeRow,
  rowNumber
}: BoxWithLetter) {
  return (
    <div
      className={boxStyle({
        background,
        borderColor,
        colorTheme,
      })}
    >
      <BoxContent
        fontColor={fontColor}
        letter={letter}
        inputBox={inputBox}
        handleChange={handleChange}
        position={position}
        activeRow={activeRow}
        rowNumber={rowNumber}
      />
    </div>
  );
}


