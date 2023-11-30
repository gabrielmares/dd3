import { useMemo, useDeferredValue, useState, Suspense, useContext, useRef } from 'react'
import { WordleState } from '../context/wordleContext';
import list from '../helpers/dictionary';
import BoxLetter from './BoxLetter';

const DashboardComponent = () => {
    const { colorTheme } = useContext(WordleState)
    // const [shiftWord, setShiftWord] = useState<boolean>(false)
    const [inputWord, setInputWord] = useState<[]>([]);
    const refs = [useRef<HTMLElement | number>(null), useRef<HTMLElement | number>(null), useRef<HTMLElement | number>(null), useRef<HTMLElement | number>(null), useRef<HTMLElement | number>(null)];

    // load list of words
    const lazyLoad: string[] = useDeferredValue(list);

    // REMOVE WORK AFTER 
    // const restartShift = () => setShiftWord(prev => !prev)
    // const updatedList = useMemo(() => {
    //     if (shiftWord) {
    //         lazyLoad.shift();
    //         return restartShift()
    //     }
    // }, [shiftWord])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputWord([...inputWord,
        e.target.value]);

    }

    return (
        <Suspense fallback={<h1>loading....</h1>}>
            <div className="mt-20 h-2/5 mr-auto ml-auto w-5/12 ">
                <div className=" grid grid-cols-5">
                    {lazyLoad[0]?.split("").map((char, index) => (
                        <BoxLetter
                            key={char + index}
                            letter={""}
                            borderColor={false}
                            colorTheme={colorTheme}
                            background="bg-[--bg-boxLetter-empty]"
                            inputBox={true}
                            handleChange={handleChange}
                            position={index}
                            currentWord={inputWord}
                            reference={refs[parseInt(inputWord.length)]}
                        />
                    ))}
                </div>
                <div className=" grid grid-cols-5">
                    {lazyLoad[0]?.split("").map((char, index) => (
                        <BoxLetter
                            key={char + index}
                            letter={""}
                            borderColor={false}
                            colorTheme={colorTheme}
                            background="bg-[--bg-boxLetter-empty]"
                            inputBox={true}
                            handleChange={handleChange}
                            position={index}
                            currentWord={inputWord}
                        />
                    ))}
                </div>
                <div className=" grid grid-cols-5">
                    {lazyLoad[0]?.split("").map((char, index) => (
                        <BoxLetter
                            key={char + index}
                            letter={""}
                            borderColor={false}
                            colorTheme={colorTheme}
                            background="bg-[--bg-boxLetter-empty]"
                            inputBox={true}
                            handleChange={handleChange}
                            position={index}
                            currentWord={inputWord}

                        />
                    ))}
                </div>
                <div className=" grid grid-cols-5">
                    {lazyLoad[0]?.split("").map((char, index) => (
                        <BoxLetter
                            key={char + index}
                            letter={""}
                            borderColor={false}
                            colorTheme={colorTheme}
                            background="bg-[--bg-boxLetter-empty]"
                            inputBox={true}
                            handleChange={handleChange}
                            position={index}
                            currentWord={inputWord}
                            
                        />
                    ))}
                </div>
                <div className=" grid grid-cols-5">
                    {lazyLoad[0]?.split("").map((char, index) => (
                        <BoxLetter
                            key={char + index}
                            letter={""}
                            borderColor={false}
                            colorTheme={colorTheme}
                            background="bg-[--bg-boxLetter-empty]"
                            inputBox={true}
                            position={index}
                            currentWord={inputWord}
                            handleChange={handleChange}
                        />
                    ))}
                </div>
            </div>
        </Suspense>
    );
}

export default DashboardComponent;