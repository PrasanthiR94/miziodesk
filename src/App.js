import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
 import Header from './components/Header/Header';
 import Footer from './components/Footer/Footer';
import Login from './pages/Login/Login';
import Home from './pages/Home/Home';
import Layout from './Layout/Layout';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Tickets from './pages/Tickets/Tickets';
import NewTicket from './pages/NewTicket/NewTicket';

function App() {
  return (
    <div className="App">
       <ToastContainer />
     <Routes>
       <Route path="/" element={<Login />} />
       <Route element={<Layout/>}>
            <Route path="/home" element={<Home />} />
            <Route path='/tickets' element={<Tickets/>} />
              <Route path='/new-ticket' element={<NewTicket/>} />
       </Route>

          {/* <Route path="/categories" element={<CategoriesPage />} />
           <Route path="/productdetails" element={<ProductPage />} /> */}
           {/* <Route path='/about' element={<About/>} /> */}
          {/* <Route path="*" element={<h1>404 - Not Found</h1>} />   */}
        </Routes>
    </div>
  );
}

export default App;
