import React from 'react'
import './table_booking.css'
import { useNavigate } from "react-router-dom";
// import fontawesome from '@fortawesome/fontawesome'
// import FontAwesomeIcon from '@fortawesome/react-fontawesome';
// import { faCalendarDays, faPerson } from '@fortawesome/fontawesome-free-solid'
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css';

const Table_booking = (props) => {
  const navigate = useNavigate();

    return (
        <>
        <div className='backgroundcolour2'>
            <div className='tablecolour'>
          <div className='headerSearch'>
            <button onClick={() => navigate("/Sign_in")}   className='buttonYourStay'>BOOK YOUR STAY</button> 
            <input type="text" placeholder="First Name & Last Name" className="headerNameInput" />
           
            <span className='HeaderSearchText'>date to date</span>
            <input type="text" placeholder="First Name & Last Name" className="headerNameInput" />
          
            <span className='HeaderSearchText'>2 adults 2 children 1 room</span>
            
            </div>
            
            <h3>Enjoy wild Africa in luxury <br></br>at Mthimkhulu Safari Lodges</h3>
            <p className='para2'>Mthimkhulu game reserve comprises of seven separate 5-star safari lodges and an explorer camp. 
            Each luxury lodge has its own bespoke style that provides you with a unique experience during your stay. The various lodges are spaced out across our game reserve, to ensure that you 
            and your fellow adventurers have a private and memorable experience of South Africa.
             Mthimkhulu offers an array of experiences you can enjoy such as Game Drives, Fly-fishing, Walking Safaris, Wildlife Rehabilitation Centre, Photographic Safaris and more. <br></br>
             So, let’s take a look at our incredible accommodation options in Mthimkhulu!</p>
            </div>
         </div>
         
    </>
  )
}

export default Table_booking
