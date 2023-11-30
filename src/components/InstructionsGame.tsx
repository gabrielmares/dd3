import {
  cantoIterator,
  gatosIterator,
  vocalIterator,
} from "../helpers/wordsForDescription";
import ExampleWithDescription from "./ExampleWithDescription";
import TextContainer from "./TextContainer";
import TextDescription from "./TextDescription";
import landingText from "../helpers/landingText.json";

import {
  buttonStyle,
  howToPlay,
  landingContainer,
  landingExample,
  landingFooter,
} from "../helpers/customClasses";


interface closeInstructions {
  closeInstructions: () => void;
  colorTheme: string;
}

const InstructionsGame = ({ closeInstructions, colorTheme }: closeInstructions) => {

  return (
    <div className="bg-[--bg-light-container] h-screen overflow-hidden transition duration-300 dark:bg-[--bg-dark-container]">
      <div className="flex justify-center h-full">
        <div className={landingContainer}>
          <h1 className={howToPlay}>Cómo Jugar</h1>
          <div className="ml-10 w-[90%] mt-10">
            <TextContainer>
              <TextDescription content={landingText.firstSentence} />
              <br />
              <TextDescription content={landingText.secondSentence} />
              <br />
              <TextDescription content={landingText.thirdSentence} />
            </TextContainer>
            <h3 className={landingExample}>Ejemplos</h3>
            {/* RENDER GATOS WORD WITH EXPLANATION */}
            <ExampleWithDescription
              colorTheme={colorTheme}
              wordToIterate={gatosIterator}
              firstText="La letra "
              emphasis="G"
              restText="está en la palabra y en la posición correcta"
            />
            {/* RENDER VOCAL WORD WITH EXPLANATION */}
            <ExampleWithDescription
              colorTheme={colorTheme}
              wordToIterate={vocalIterator}
              firstText="La letra "
              emphasis="O"
              restText="está en la palabra pero en la posición incorrecta."
            />
            {/* RENDER CANTO WORD WITH EXPLANATION */}
            <ExampleWithDescription
              colorTheme={colorTheme}
              wordToIterate={cantoIterator}
              firstText="La letra "
              emphasis="C"
              restText="no está en la palabra"
            />
          </div>
          <div className="ml-10 w-[90%] mt-10 h-[52]">
            <TextContainer>
              <TextDescription content={landingText.fourthSentence} />
            </TextContainer>
          </div>
          <div className={landingFooter}>
            <TextContainer>
              <TextDescription content={landingText.fifthSentence} />
            </TextContainer>
          </div>
          <div className={landingFooter}>
            <button className={buttonStyle} onClick={() => closeInstructions()}>
              " !jugar¡"
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstructionsGame;
