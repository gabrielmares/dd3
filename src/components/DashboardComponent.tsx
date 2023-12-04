import { useDeferredValue, useState, useContext, useRef } from 'react'
import { WordleState } from '../context/wordleContext';
import list from '../helpers/dictionary';
import FormContainer from './FormContainer';



const DashboardComponent = () => {
    const { colorTheme } = useContext(WordleState)
    // const [shiftWord, setShiftWord] = useState<boolean>(false)
    const [inputWord, setInputWord] = useState<string[]>([]);
    const refs = useRef<HTMLFormElement | HTMLDivElement>(null);
    const activeRow = useRef<number>(0);
    // load list of words
    const lazyLoad: string[] = useDeferredValue(list);
    const rows: string[] = ("words").split("")

    // REMOVE WORD
    // const restartShift = () => setShiftWord(prev => !prev)
    // const updatedList = useMemo(() => {
    //     if (shiftWord) {
    //         lazyLoad.shift();
    //         return restartShift()
    //     }
    // }, [shiftWord])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {        
        setInputWord([...inputWord, e.target.value]);
        const form = refs.current
        const input: HTMLInputElement = form?.querySelector(`.input-${activeRow.current}${inputWord.length + 1}`);
        input?.focus();
    }
    return (
        <div className="mt-20 h-2/5 mr-auto ml-auto w-5/12 ">
            {rows.map((word, index) =>
            (<FormContainer
                colorTheme={colorTheme}
                refs={refs}
                handleChange={handleChange}
                word={lazyLoad[0]}
                rowNumber={index}
                key={`${index}${refs + lazyLoad[0]}${word}`}
                activeRow={activeRow.current}
            />))
            }
        </div>
    );
}

export default DashboardComponent;