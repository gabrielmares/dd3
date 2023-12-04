import { BoxStyleProps } from "../interfaces";

export const landingContainer =
    " bg-[--bg-light-instructions]  my-14 w-[547px] border-black border dark:bg-[--bg-dark-instructions] dark:border-[#939B9F] rounded-xl ";

export const howToPlay =
    "font-bold text-[35px] font-roboto text-center mt-10 leading-[41.02px] dark:text-white";

export const boxStyle = ({ background,
    borderColor,
    colorTheme,
}: BoxStyleProps) => {
    const borderStyle: string =
        borderColor && colorTheme === "dark"
            ? " border border-black"
            : " border border-[#939B9F] ";

    const backgroundByTheme =
        background === "bg-[white]" && colorTheme === "light"
            ? " dark:bg-[--bg-dark-container] "
            : background;

    const selectionWithOutBorder = !borderColor ? " " : borderStyle;

    return (
        backgroundByTheme +
        selectionWithOutBorder +
        " flex justify-center place-items-center mt-[26px] ml-[11px] w-[76px] rounded-[5px] h-[76px] "
    );
};

export const letterStyle =
    "uppercase dark:text-white leading-[41.02px] font-bold text-[35px] font-roboto ";

export const buttonStyle = " text-white bg-[#6AAA64] text-[35px] uppercase w-[263px] font-bold  font-roboto text-center rounded-md ";


export const landingFooter =
    "w-full mt-[41px] justify-center items-center flex h-[51px]";

export const landingExample =
    "mt-[16px] font-bold font-roboto text-left text-[19px] leading-[22.27px] dark:text-white";

export const inputClass = (position: number, rowNumber: number) =>
    `${"input-" + rowNumber + position} ` + "font-roboto text-white text-center border border-black/30 rounded-sm font-bold text-3xl black uppercase h-[45px] w-[36px] bg-[--input-light-background] dark:bg-[--bg-boxLetter-empty] dark:boder-[none] dark:opacity-1  "