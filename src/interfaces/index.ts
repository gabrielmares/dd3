export interface initialState {
    colorTheme: string;
    showInstructions: boolean;
    handleTheme: () => void;
    handleInstructions: () => void;
    state?: stateObject;
    action?: actionReducer;
    dispatch?: React.Dispatch<EventTarget>;
}

export type actionReducer = { type: "reset" } | { type: "update-list" };

export interface stateObject {
    listOfWords: string[];
}

export const defaultState: initialState = {
    colorTheme: "light",
    showInstructions: false,
    handleTheme: () => {},
    handleInstructions: () => {},
    state: {
        listOfWords: [],
    },
};

export interface DarkMode {
    colorTheme: string;
    handleTheme: () => void;
}

export interface BoxWithLetter {
    letter: string;
    background?:
        | "bg-[white]"
        | "bg-[--bg-boxLetter-empty]"
        | "bg-[#CEB02C]"
        | "bg-[#939B9F]"
        | "bg-[--bg-boxLetter-correct]}"
        | string;
    fontColor?: FontBoxColor;
    borderColor?: boolean;
    inputBox: boolean;
    position: number;
    currentWord: [];
    colorTheme?: string;
    reference: HTMLInputElement | React.LegacyRef<HTMLInputElement> | number;
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface BoxContentProps {
    inputBox: boolean;
    position: number;
    fontColor: FontBoxColor;
    currentWord: [];
    letter: string;
    reference: HTMLInputElement | React.LegacyRef<HTMLInputElement>;
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface TextDescription {
    content: string;
}

export interface BoxStyleProps {
    background: backgroundColor | undefined;
    borderColor: boolean;
    colorTheme: string | undefined;
}

export interface containerExampleWithDescription {
    wordToIterate: BoxWithLetter[];
    firstText: string;
    emphasis: string;
    restText: string;
    colorTheme: string;
}

type FontBoxColor = "text-white" | "text-black";
type backgroundColor =
    | "bg-[white]"
    | "bg-[--bg-boxLetter-empty]"
    | "bg-[#CEB02C]"
    | "bg-[#939B9F]"
    | "bg-[--bg-boxLetter-correct]}"
    | string;

export interface descriptionWords {
    firstText: string;
    emphasis: string;
    restText: string;
}
