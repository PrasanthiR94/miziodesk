import Logo from '../../assets/images/miz-logo.png'
import { useMizi } from '../../MiziContext'
import PersonIcon from '@mui/icons-material/Person';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import './Header.css'

function Header(){
    const {userName} = useMizi()


    return (
        <div className="header_cover">
            <div className="header-left">
                <img src={Logo} />
            </div>
            <div className='header-right'>
                <div className='user-account'>
                    <PersonIcon/> <div className='username_user_acc'>{userName} </div> <ArrowDropDownIcon/>
                </div>
            </div>
        </div>
    )
}

export default Header