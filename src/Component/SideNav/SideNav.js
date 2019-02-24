import React from 'react';
import './Sidenav.css';
import * as FontAwesome from 'react-icons/fa';
import BackGround from './BG.jpg';


const Sidenav = () => {
	return(
			<div className='sidecontent'>
				<div className='wrapper'>
					{<img src={BackGround} alt='Background' className='image'/>}
        <a href="www.google.com" ><FontAwesome.FaHome className='demo'/>HOME</a> 
        <a href="www.google.com" ><FontAwesome.FaUser className='demo' />PROFILE</a> 
        <a href="www.google.com" ><FontAwesome.FaList className='demo'/>LIST</a> 
        <a href="www.google.com" ><FontAwesome.FaBell className='demo' />NOTIFICATION </a> 
        <a href="www.google.com" ><FontAwesome.FaMapMarker className='demo' />LOCATION</a> 
				</div>
			</div>					
		);
    
}

export default Sidenav;