import { letterStyle } from "../helpers/customClasses";
import { BoxContentProps } from "../interfaces";

const BoxContent = ({ inputBox, letter, handleChange, position, currentWord, reference }: BoxContentProps) => {
  return (
    <>
      {inputBox ?
        <input
          disabled={position !== 0 && currentWord?.length < position || currentWord?.length > position}
          className="font-roboto text-white text-center border border-black/30 rounded-sm font-bold text-3xl black uppercase h-[45px] w-[36px] bg-[--input-light-background] dark:bg-[--bg-boxLetter-empty] dark:boder-[none] dark:opacity-1  "
          maxLength={1}
          onChange={e => handleChange(e)}
          ref={reference}
        />
        :
        <h1 className={letterStyle}>{letter}</h1>}
    </>
  );
};

export default BoxContent;
