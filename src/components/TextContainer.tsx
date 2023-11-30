const TextContainer = (props: { children: JSX.Element | JSX.Element[] }) => {
  return (
    <div className="font-roboto text-left text-[19px] leading-[22.27px] dark:text-white">
      {props.children}
    </div>
  );
};

export default TextContainer;
