import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, createContext } from "react";
import { ThemeProvider } from "styled-components";
import { ChangeThemeIcon } from './components/Theme/ChangeThemeIcon';
import { Navbar } from './components/navbar/Navbar';
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Portfolio } from "./pages/Portfolio";
import { Capabilities } from "./pages/Capabilities";
import { Contact } from "./pages/Contact";
import { Menu } from "./pages/Menu";

const LightTheme = {
  pageBackground: "var(--tWhite)",
  pageBackgroundS: "var(--tBlack)",
  titleColor: "var(--tdBlue)",
  titleColorS: "var(--tWhite)",
  hoverColor: "var(--tPink)",
};

const DarkTheme = {
  pageBackground: "var(--tBlack)",
  pageBackgroundS: "var(--tWhite)",
  titleColor: "var(--tWhite)",
  titleColorS: "var(--tdBlue)",
  hoverColor: "var(--tPink)",
};

const themes = {
  light: LightTheme,
  dark: DarkTheme,
};

export const AppContext = createContext();

function App() {
  const [theme, setTheme] = useState("light");

  return (
    <div className="App">
      <ThemeProvider theme={themes[theme]}>
        <AppContext.Provider value={{ theme, setTheme }}>
          <Router>
              <Navbar />
              <ChangeThemeIcon />
              <Routes>
                <Route path="/myp/" element={<Menu />} />
                <Route path="/about" element={<About />} />
                <Route path="/caps" element={<Capabilities />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
          </Router>
        </AppContext.Provider>
      </ThemeProvider>
    </div>

  );
};

export default App;
