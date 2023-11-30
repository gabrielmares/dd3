import { containerExampleWithDescription } from "../interfaces";
import BoxLetter from "./BoxLetter";
import DescriptionWord from "./DescriptionWord";
import TextContainer from "./TextContainer";

const ExampleWithDescription = ({
  wordToIterate,
  firstText,
  emphasis,
  restText,
  colorTheme,
}: containerExampleWithDescription) => {
  return (
    <>
      <div className="flex flex-row">
        {wordToIterate.map((char) => (
          <BoxLetter
            key={char.letter}
            letter={char.letter}
            borderColor={char?.borderColor}
            background={char.background}
            inputBox={char.inputBox}
            colorTheme={colorTheme}
          />
        ))}
      </div>
      <div className=" mt-[19px]">
        <TextContainer>
          <DescriptionWord
            firstText={firstText}
            emphasis={emphasis}
            restText={restText}
          />
        </TextContainer>
      </div>
    </>
  );
};

export default ExampleWithDescription;
