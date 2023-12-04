import { inputClass, letterStyle } from "../helpers/customClasses";
import { BoxContentProps } from "../interfaces";

const BoxContent = ({ inputBox, letter, handleChange, position, activeRow, rowNumber }: BoxContentProps) => {
  return (
    <>
      {inputBox ?
        <input
          autoFocus={position === 0 && activeRow === rowNumber}
          disabled={activeRow !== rowNumber}
          className={inputClass(position, rowNumber)}
          maxLength={1}
          onChange={e => handleChange(e)}
        />
        :
        <h1 className={letterStyle}>{letter}</h1>}
    </>
  );
};

export default BoxContent;
