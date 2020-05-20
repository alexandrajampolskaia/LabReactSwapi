import React from 'react'

const Input = ({ errorMessage, ...props}) => (
	<div className="input-text">
		<input {...props} /> <br />
		{errorMessage && <span className="errorMessage">{errorMessage}</span>} <br />
	</div>
);

export default Input;