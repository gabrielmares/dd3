import { descriptionWords } from "../interfaces";

const DescriptionWord = ({
  firstText,
  emphasis,
  restText,
}: descriptionWords) => {
  return (
    <h3 className="w-screen ">
      {firstText} <b>{emphasis}</b> {restText}
    </h3>
  );
};

export default DescriptionWord;
