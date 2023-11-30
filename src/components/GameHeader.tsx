import { useState } from 'react';
import DarkToggle from "./DarkToggle.tsx";
import IconsActions from "./IconsActions.tsx";
import InfoComponent from "./InfoSvg.tsx";
import LightToggle from "./LightToggle.tsx";
import StatisticDark from "./StatisticDark.tsx";
import StatisticLight from "./StatisticLight.tsx";


export interface gameHeader {
    showInstructions: () => void;
    theme: string;
    setDark: () => void;
}


const GameHeader = ({ showInstructions, theme, setDark }: gameHeader) => {

    const [showStatistic, setShowStastistic] = useState<boolean>(false)
    const handleStatistic = () => {
        setShowStastistic(prev => !prev)
    }

    return (
        <div className="grid place-items-center pt-[83px]">
            <div className="bg-[#f3f3f3] w-7/12 h-[84px] flex flex-row items-center rounded-2xl dark:bg-[--bg-dark-headerBar]">
                <div className="ml-[22px] dark:bg-[#DADCE0] ]" onClick={() => showInstructions()}>
                    <InfoComponent />
                </div>
                <h1 className=" uppercase text[#202537] font-roboto font-semibold text-4xl grow text-center justify-self-center dark:text-[#DADCE0] ">
                    wordle
                </h1>
                <div className=' flex flex-row pr-5 self-center h-8 space-x-1 '>
                    {/* SHOW STATISTICS */}
                    <IconsActions
                        condition={showStatistic}
                        Component1={StatisticDark}
                        Component2={StatisticLight}
                        dispatch={handleStatistic}

                    />
                    {/* TOGGLE THEME */}
                    <IconsActions
                        condition={theme === "light"}
                        Component1={DarkToggle}
                        Component2={LightToggle}
                        dispatch={setDark}
                    />
                </div>
            </div>
        </div >
    );
}

export default GameHeader;