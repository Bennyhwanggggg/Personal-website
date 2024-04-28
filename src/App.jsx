import React from 'react';
import { Home } from './pages/Home';
import { ThemeProvider } from '@mui/material/styles';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import theme from './theme/theme';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';

library.add(fab);

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div className="App" style={{height: '100%', width: '100%'}}>
          <Routes>
            <Route path='/portfolio' element={<Home />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;