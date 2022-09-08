import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import GlobalStyle, { darkTheme, lightTheme } from './globalStyles';

// import logo from './logo.svg';
import './App.css';
// import Navbar from './components/Navbar';
import Navbar from './components/Navbar/Navbar2';
import HomePage from './pages/HomePage/HomePage';
import RegisterAndLogin from './pages/RegisterAndLogin/RegisterAndLogin';
import ProfilePage from './pages/ProfilePage';
import ProtectedRoute from './components/Store/ProtectedRoute';
// import AllRoutes from './AllRoutes';

export const ThemeContext = React.createContext(null);

const App = () => {
  // Theme
  const [theme, setTheme] = useState('light');
  const themeStyle = theme === 'light' ? lightTheme : darkTheme;

  // Popup
  // const [buttonPopup, setButtonPopup] = useState(false);
  // const [timedPopup, setTimedPopup] = useState(false);

  // 3 Second timed Popup
  // useEffect(() => {
  //   setTimeout(() => {
  //     setTimedPopup(true);
  //   }, 3000);
  // }, []);

  return (
    <>
      <BrowserRouter basename="">
        <ThemeContext.Provider value={{ setTheme, theme }}>
          <ThemeProvider theme={themeStyle}>
            <GlobalStyle />
            <Navbar />

            {/* <AllRoutes /> */}
            <main>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/signin" element={<RegisterAndLogin />} />
                <Route
                  path="/profile"
                  element={
                    <ProtectedRoute>
                      {/* <ProfileScreen /> */}
                      <ProfilePage />
                      {/* <ImageResize /> */}
                    </ProtectedRoute>
                  }
                />{' '}
              </Routes>
            </main>
          </ThemeProvider>
        </ThemeContext.Provider>
      </BrowserRouter>
    </>
  );
};

export default App;
