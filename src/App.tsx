import { useContext, Suspense, lazy } from "react";
import GameHeader from "./components/GameHeader.js";
import InstructionsGame from "./components/InstructionsGame.js";
import { WordleState } from "./context/wordleContext.js";
import Loading from "./components/Loading.js";

const DashboardComponent = lazy(() => import('./components/DashboardComponent.js'))


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
        <Suspense fallback={<Loading />}>
          <div className="dark:bg-[#262B3C] h-screen ">
            <GameHeader
              setDark={handleTheme}
              theme={colorTheme}
              showInstructions={handleInstructions}
            />
            <DashboardComponent />
          </div>
        </Suspense>
      }
    </>
  );
}

export default App;
