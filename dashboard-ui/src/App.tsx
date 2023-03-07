// @ts-nocheck
import './App.css'
import { ColorModeContext, useMode } from './theme'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { Routes, Route } from 'react-router-dom';
import TopBar from './scenes/global/TopBar';
import SideBar from './scenes/global/SideBar';
import Dashboard from './scenes/Dashboard';
// import Team from './scenes/Team';
// import Invoices from './scenes/Invices';
// import Contact from './scenes/Contact';
// import Bar from './scenes/Bar';
// import Form from './scenes/Form';
// import Line from './scenes/Line';
// import Pie from './scenes/Pie';
// import FAQ from './scenes/FAQ';
// import Geography from './scenes/Geography';
// import Calendar from './scenes/Calendar';


function App() {
 const [theme , colorMode ] =  useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
    <ThemeProvider theme={theme}>
      <CssBaseline/>
    <div className="app">
      <main className="content">
        <TopBar/>
        <SideBar/>
        <Routes>
          <Route path="/" element={<Dashboard/>}/>
          {/* <Route path="/contacts" element={<Contacts/>}/>
          <Route path="/invoices" element={<Invoices/>}/>
          <Route path="/form" element={<Form/>}/>
          <Route path="/bar" element={<Bar/>}/>
          <Route path="/pie" element={<Pie/>}/>
          <Route path="/line" element={<Line/>}/>
          <Route path="/faq" element={<FAQ/>}/>
          <Route path="/geography" element={<Geography/>}/>
          <Route path="/calendar" element={<Calendar/>}/> */}
        </Routes>
      </main>
    </div>
    </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export default App
