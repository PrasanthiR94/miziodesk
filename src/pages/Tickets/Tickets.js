import './Tickets.css'
import TicketTab from './TicketTab'

function Tickets(){

    return(
        <div className='tickets_page_cover'>
            <h2>Tickets</h2>
            <div className='tickets_page_content'>
                    <TicketTab />
            </div>
        </div>
    )
}

export default Tickets