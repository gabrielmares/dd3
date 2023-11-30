import { useEffect, useState } from "react";
import { DarkMode } from "../interfaces";

export default function useDarkSide(): DarkMode {
  const [dark, setDark] = useState<boolean>(Boolean(localStorage.theme));
  const colorTheme: string = !dark ? "light" : "dark";

  const handleTheme = () => setDark(prev => !prev)

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(colorTheme);
    root.classList.add(dark ? "light" : "dark");

    localStorage.setItem("theme", colorTheme);
  }, [dark, colorTheme]);

  return { colorTheme, handleTheme };
}
