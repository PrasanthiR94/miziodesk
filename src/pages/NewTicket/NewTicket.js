import './NewTicket.css'
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Button from '../../components/Button/Button';

function NewTicket(){
function categoryHandle(){

}
function ticketSubmitHandle(){

}
    return(
        <div className='new_tickets_page_cover'>
            <h2>Create a ticket</h2>
            <div className='create_ticket_content'>
                <div className='create_ticket_box'>
                     <FormControl fullWidth>
 <TextField id="outlined-basic" label="Title" variant="outlined" /></FormControl>
 <FormControl fullWidth>
  <InputLabel id="demo-simple-select-label">Select category</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    // value={age}
    label="Category"
    onChange={categoryHandle}
  >
    <MenuItem value={10}>Hardware</MenuItem>
    <MenuItem value={20}>Software</MenuItem>
    <MenuItem value={30}>Network</MenuItem>
      <MenuItem value={30}>Other</MenuItem>
  </Select>
</FormControl>
<FormControl fullWidth>
      <TextField
      label="Description"
      multiline
      rows={4}  
      maxRows={8}  
      variant="outlined"  
    />
</FormControl >
<div className='new_ticket'>
    <Button onClick={ticketSubmitHandle}>Submit</Button>
</div>

                </div>
            </div>
        </div>
    )
}

export default NewTicket