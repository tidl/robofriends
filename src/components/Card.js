import React from 'react';
//import './Card.css';

const Card = ({name, email, id}) => {
	return(
		<div className='tc bg-light-green dib br3 pa5 ma3 grow bw3 shadow-5'>
		<img alt='robots' src={'https://robohash.org/'+id+'?size200x200'} />
			<div>
				<h2>{name}</h2>
				<p>{email}</p>
			</div>
		</div>
	);
}

export default Card;