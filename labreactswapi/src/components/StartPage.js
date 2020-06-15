import React, { useState } from 'react'
import FadeEffect from './FadeEffect'

function WelcomeBackPage() {
	const [show, setShow] = useState(true);

	return (
		<div>
	<FadeEffect show={show}>
		<div className="startPageDiv">
		  <div className="startPageInnerDiv">
		  <p className="startPageheader">WELCOME STAR WARS FAN! </p>
		  {/* Here you can search amongst our Star Wars characters and planets and add them to your favorite list. If you, for any reason, don't find your favorites in our collection you can add your own. Then you can filter your favorites based on chosen category. Enjoy! */}

				<button type="button" className="startPageButton" onClick={() => setShow((show) => !show)}> Thanks </button> <br /> 
			</div>
			</div>
			</FadeEffect>
		</div>
	  );
	};

export default WelcomeBackPage;