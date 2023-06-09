import React from 'react'
import Dashboard from './Pages/Dashboard'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Customers from './Pages/Customers'
import Products from './Pages/Products'
import AgentsSupervisor from './Pages/AgentsSupervisor'
import Companies from './Pages/Companies'
import Collection from './Pages/Collection'
import Reports from './Pages/Reports'
import Complaints from './Pages/Complaints'
import SMSWallet from './Pages/SMSWallet'
import Expenses from './Pages/Expenses'
import LiveTracking from './Pages/LiveTracking'
import LoginSignup from './Pages/LoginSignup'
import { ThemeProvider, createTheme } from '@mui/material'
import LandingPage from './Pages/LandingPage'


const App = () => {
  const theme = createTheme({
    typography: {
      fontFamily: [
        'Poppins',
        'sans-serif'
      ].join(','),
    }
  })
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/loginsignup' element={<LoginSignup />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/customers' element={<Customers />} />
          <Route path='/products' element={<Products />} />
          <Route path='/agents-supervisor' element={<AgentsSupervisor />} />
          <Route path='/companies' element={<Companies />} />
          <Route path='/collection' element={<Collection />} />
          <Route path='/reports' element={<Reports />} />
          <Route path='/complaints' element={<Complaints />} />
          <Route path='/sms-wallet' element={<SMSWallet />} />
          <Route path='/expenses' element={<Expenses />} />
          <Route path='/livetracking' element={<LiveTracking />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
