import React from 'react';
import Card from './Card';

const CardList = ({robots}) => {
	return(
		<div>
			{
				robots.map((user,i) => {
					return(
						<Card 
						key = {i} 
						id = {robots[i].id} 
						name = {robots[i].name} 
						email = {robots[i].email}
						hrefinsta = {robots[i].hrefinsta}
						hreflinkedin = {robots[i].hreflinkedin}
						hrefgithub = {robots[i].hrefgithub}
						/>
					) 
			
				})
			}
	  	</div>
	);
}

export default CardList;