import { ThemeProvider, createTheme, getContrastRatio } from '@mui/material';
import './App.css';
import NavBar from './components/NavBar/NavBar';

import { Outlet } from 'react-router-dom';
import BottomBanner from './components/BottomBanner/BottomBanner';

const customTheme = createTheme({
  palette: {
    primary: {
      main: '#000000', // Custom black color
      contrastText: getContrastRatio('#fff', '#000000') > 4.5 ? '#fff' : '#111',
    },
  },
  // Add other theme options as needed
});


function App() {
  return (
    <ThemeProvider theme={customTheme}>
        <div style={{ display: 'flex', flexDirection: 'column', height: '100vh',backgroundColor:'red'}}>
          <NavBar/>
          <div style={{ flex: 1, backgroundColor: 'whitesmoke',margin:0 }}>
            <Outlet/>
          </div>
          <BottomBanner/>
        </div>
    </ThemeProvider>
  );
}

export default App;
