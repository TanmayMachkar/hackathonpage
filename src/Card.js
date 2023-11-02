import React from 'react';

const Card = ({ name, email, id}) => {
	return(
		<div className = 'grow dib tc f3-ns no-underline bg-light-green black-90 pa5 ma3 br4 ba shadow-5' >
			<img alt = 'robots' src ={`https://robohash.org/${id}?200x200`}/>
			<div>
				<h2>{name}</h2>
				<p>{email}</p>
			</div>
		</div>
	);
}

export default Card;