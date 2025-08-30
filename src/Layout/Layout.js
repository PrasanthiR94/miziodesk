import { Navigate, Outlet } from 'react-router-dom'
import './Layout.css'
import Cookies from 'js-cookie';
import Header from '../components/Header/Header'
import Sidebar from '../components/Sidebar/Sidebar'
import Footer from '../components/Footer/Footer';


function Layout(props){

var Token = Cookies.get("UserToken")
    // return(
    //     Token?<>
        
    //     <Header/>
    //     <div className='Layout_cover'>
    //         <Sidebar/>
    //         <div className='center_content'>
    //             <Outlet/>
    //         </div>
    //     </div>
    //     </>:<Navigate to='/'/>
    // )


      return(
        
        <>
        <Header/>
        <div className='Layout_cover'>
            <Sidebar/>
            <div className='center_content'>
                <Outlet/>
            </div>
        </div>
        <Footer/>
        </> 
    )
}

export default Layout