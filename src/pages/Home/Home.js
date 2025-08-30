import './Home.css'
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import InventoryIcon from '@mui/icons-material/Inventory';
import PieChartIcon from '@mui/icons-material/PieChart';
import TvIcon from '@mui/icons-material/Tv';
import { Link } from 'react-router-dom';

function Home(){

    const homeContent = [
        {
            name :"Tickets",
            img: ConfirmationNumberIcon,
            desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            link:'/tickets',
            bg: "#FFB347"
        },
          {
            name :"Inventory",
            img: InventoryIcon,
            desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            link:'inventory',
            bg:"#FFDAB9"
            
        },
          {
            name :"Reports",
            img: PieChartIcon,
            desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            link:"/reports",
            bg:"#AEC6CF"
        },
          {
            name :"Devices under maintenance",
            img: TvIcon,
            desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            link:'/devicesmaintenance',
            bg:"#c397d9"
        }
    ]

    return(
       <div className='homepage_cover'>
        <h2>Dashboard</h2>
        <div className='home_content'>
            <div className='home_content_tiles'>
                {homeContent.map((el)=>{
                    return   <div className='home_tiles_wrap' style={{background:el.bg}}>
                         <Link to={el.link}>
                     <div className='home_tile'>
                             <el.img/>
                            <h3>{el.name}</h3>
                            <p>{el.desc}</p>
                </div>
                </Link>
                        </div>
                })}
            
            </div>
        </div>
       </div>
    )
}

export default Home