import { useState } from "react";
import TicketAccordion from "./TicketAccordion";
import './TicketTab.css'

function TicketTab({item}){
  // Set initial state for active tab
  const [activeTab, setActiveTab] = useState(0);

  // Handle tab click by updating activeTab
  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  const tickets = [
    {
        id:1,
        ticket_name:"Laptop restarting issue.",
        desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        category:"Hardware",
        status:"Open"
    },
    {
        id:2,
        ticket_name:"Laptop closing issue.",
        desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        category:"Hardware",
        status:"Open"
    },
     {
        id:3,
        ticket_name:"Internet connection issue",
        desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        category:"Network",
        status:"Open"
    },
     {
        id:4,
        ticket_name:"Slow internet.",
        desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        category:"Network",
        status:"Open"
    },
    {
        id:5,
        ticket_name:"Install postman",
        desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        category:"Software",
        status:"Open"
    },
    {
        id:6,
        ticket_name:"Lorem Ipsum",
        desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        category:"Other",
        status:"Open"
    },
     {
        id:7,
        ticket_name:"Lorem Ipsum",
        desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        category:"Other",
        status:"Open"
    },

]
const hardware = tickets.filter((el)=>el.category === "Hardware")
const software = tickets.filter((el)=>el.category === "Software")
const network = tickets.filter((el)=>el.category === "Network")
const other = tickets.filter((el)=>el.category === "Other")

    return(
        <>
     
      {/* Tab buttons */}
      <div className="tab-buttons">
        <button
          className={`tab ${activeTab === 0 ? 'active' : ''}`}
          onClick={() => handleTabClick(0)}
        >
         Hardware
        </button>
        <button
          className={`tab ${activeTab === 1 ? 'active' : ''}`}
          onClick={() => handleTabClick(1)}
        >
         Software
        </button>
        <button
          className={`tab ${activeTab === 2 ? 'active' : ''}`}
          onClick={() => handleTabClick(2)}
        >
         Network
        </button>
         <button
          className={`tab ${activeTab === 3 ? 'active' : ''}`}
          onClick={() => handleTabClick(3)}
        >
          Other
        </button>
      </div>

      {/* Tab content */}
      <div className="tab-contents">
        {activeTab === 0 && <div className="tab-content">
            <h3>Hardware</h3>
            <div className="tab_content_inner">
                {hardware.map((el)=>{
                    return <TicketAccordion item={el}/>
                })}
            </div>
        </div>}
        {activeTab === 1 && <div className="tab-content">
             <h3>Software</h3>
            <div className="tab_content_inner">
                {software.map((el)=>{
                    return <TicketAccordion item={el}/>
                })}
            </div></div>}
        {activeTab === 2 && <div className="tab-content">
             <h3>Network</h3>
            <div className="tab_content_inner">
                {network.map((el)=>{
                    return <TicketAccordion item={el}/>
                })}
            </div></div>}
        {activeTab === 3 && <div className="tab-content">
             <h3>Other</h3>
            <div className="tab_content_inner">
                {other.map((el)=>{
                    return <TicketAccordion item={el}/>
                })}
            </div></div>}
      </div>
       </>
    )
}
export default TicketTab