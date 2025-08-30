import { useState } from "react";
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import './TicketAccordion.css'

function TicketAccordion({item}){
    return (
        <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography component="span"> {item.ticket_name} <span className="tkt_status">{item.status}</span></Typography>
        </AccordionSummary>
        <AccordionDetails>
          {item.desc}
        </AccordionDetails>
      </Accordion>
    )
}

export default TicketAccordion