import React from 'react';

const SearchBox = ({searchfield, searchChange}) => {
	return(
		<div class="sb" className='pa2'>
			<input 
			className='pa3 ba b--green bg-lightest-blue'
			type='search' 
			placeholder='Search Members'
			onChange={searchChange}
			/>
		</div>
	);
}

export default SearchBox;