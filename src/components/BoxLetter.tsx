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
  currentWord,
  handleChange,
  reference
}: BoxWithLetter) {
  return (
    <div
      className={boxStyle({
        background,
        borderColor,
        colorTheme,
      })}
    >
      <BoxContent currentWord={currentWord} fontColor={fontColor} letter={letter} inputBox={inputBox} handleChange={handleChange} position={position} reference={reference} />
    </div>
  );
}


