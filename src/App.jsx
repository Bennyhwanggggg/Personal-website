import React from 'react';
import { Home } from './pages/Home';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme/theme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Home></Home>
      </div>
    </ThemeProvider>
  );
};

export default App;