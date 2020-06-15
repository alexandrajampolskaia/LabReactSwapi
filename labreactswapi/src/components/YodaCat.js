import React, { useState } from "react";
import FadeEffect from './FadeEffect'
import yodacat from './yodacat.png'

 
const YodaCat = () => {
const [show, setShow] = useState(false);

  return (
	  <div>
    <FadeEffect show={show}>

      <div className="popUpModal" onClick={() => setShow(show => !show)}>

	  <img src={yodacat} className="yodacat" alt="yodacat" />

      </div> 
	</FadeEffect> 
	<button className="addCustomButtonYodaCustom" onClick={() => setShow(show => !show)}>Yoda</button>
	</div>
  );
};

export default YodaCat;