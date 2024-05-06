import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginSignup from './Components/LoginSignup';
import Dashboard from './Components/Dashboard';
import DepositPage from './Components/DepositPage';
import WithdrawalPage from './Components/WithdrawalPage';
function App() {
  return (
    <BrowserRouter>
    <div className="App lg:mx-40">
      <Routes>
          <Route path="/" element={<LoginSignup/>}/>
          <Route path="/Dashboard" element={<Header element={<Dashboard />}/>} />
          <Route path="/Deposite" element={<Header element={<DepositPage />}/>} />
          <Route path="/withdrawal" element={<Header element={<WithdrawalPage />}/>} />
    
      </Routes>
    </div>
    

  </BrowserRouter>

  );
}

export default App;
