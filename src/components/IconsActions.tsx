interface iconActions {
    Component1: React.FunctionComponent;
    Component2: React.FunctionComponent;
    dispatch: () => void;
    condition: boolean;
    customStyle?: string
}

const IconsActions = ({ Component1, Component2, dispatch, condition, customStyle }: iconActions) => {
    return (
        <div onClick={() => dispatch()} className={customStyle}>
            {condition ? <Component1 /> : <Component2 />}
        </div>
    );
}

export default IconsActions;