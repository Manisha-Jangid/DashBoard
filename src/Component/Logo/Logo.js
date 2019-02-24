import React from 'react';
import Tilt from 'react-tilt';
import './Logo.css'
import brain from './brain.jpg';


const Logo = () => {
	return (
		<div className='mine'>
			<Tilt className="Tilt br2 shadow-5" options={{ max : 15 }} style={{ height: 20, width: 50 }} >
			 	<div className="Tilt-inner im"><img  src={brain} alt='brainLogo'/> </div>
			</Tilt>	
		</div>
		);
}

export default Logo;