import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom';
import './Sidebar.css'
import HomeFilledIcon from '@mui/icons-material/HomeFilled';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';

function Sidebar(){

    return(
       <div className='sidebar_cover'>
        <div className='sidebar_wrap'>
            <ul>
                <li>
                    <NavLink to='/home'><HomeFilledIcon /> Dashboard</NavLink>
                </li>
                <li>
                    <NavLink to='/tickets'><ConfirmationNumberIcon /> Tickets</NavLink>
                </li>
                 <li>
                    <NavLink to='/new-ticket'><ConfirmationNumberIcon /> Create a ticket</NavLink>
                </li>
            </ul>
        </div>
       </div>
    )
}

export default Sidebar