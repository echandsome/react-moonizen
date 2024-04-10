import React, { useState } from 'react';
import { Provider } from "react-redux";
import { StyledEngineProvider, ThemeProvider } from "@mui/material";
import store from './store';
import { Web3ReactProvider } from '@web3-react/core';
import getLibrary from './configs/getLibrary';
import useCustomTheme from "./hooks/useCustomTheme";

import './App.css';
import './assets/fonts/fonts.css';
import MainFrame from './frames/MainFrame';

function App() {
  
  const [darkMode/*, setDarkMode*/] = useState(true);
  const { customTheme } = useCustomTheme(darkMode);

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={customTheme}>
        <Provider store={store}>
          <Web3ReactProvider getLibrary={getLibrary}>
            <MainFrame />
          </Web3ReactProvider>
        </Provider>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default App;
