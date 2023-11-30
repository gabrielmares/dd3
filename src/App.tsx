import { useContext } from "react";
import GameHeader from "./components/GameHeader.js";
import InstructionsGame from "./components/InstructionsGame.js";
import DashboardComponent from "./components/DashboardComponent.js";
import { WordleState } from "./context/wordleContext.js";

function App() {
  const { colorTheme, handleInstructions, showInstructions, handleTheme } = useContext(WordleState)
  
  return (
    <>
      {showInstructions ?
        <InstructionsGame
          closeInstructions={handleInstructions}
          colorTheme={colorTheme}
        />
        :
        <div className="dark:bg-[#262B3C] h-screen ">
          <GameHeader
            setDark={handleTheme}
            theme={colorTheme}
            showInstructions={handleInstructions}
          />
          <DashboardComponent />
        </div>
      }
    </>
  );
}

export default App;
