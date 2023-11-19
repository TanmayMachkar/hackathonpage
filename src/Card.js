import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";

const Card = ({ name, email, id, hrefinsta, hreflinkedin, hrefgithub}) => {
	return(
		<div className = 'grow dib tc f3-ns no-underline bg-light-green black-90 pa5 ma3 br4 ba shadow-5' >
			<img alt = 'robots' src ={`https://robohash.org/${Math.random()}?200x200`}/>
			<div>
				<h2>{name}</h2>
				<div class="container">
			        <div class="contact-wrapper load-hidden">
			          <a
			            rel="noreferrer"
			            target="_blank"
			            style={{textDecoration: 'none'}}
			            className="gmail container"
			            href={`mailto:${email}`}
			            >GMAIL</a
			          >
			        </div>
			    </div>
				<div class="social-container1">
				  <a href={hrefgithub} className="github1 social1">
			        <FontAwesomeIcon icon={faGithub} size="2x" />
			      </a>
			      <a href={hrefinsta} className="instagram1 social1">
			        <FontAwesomeIcon icon={faInstagram} size="2x" />
			      </a>
			      <a href={hreflinkedin} className="linkedin1 social1">
			        <FontAwesomeIcon icon={faLinkedin} size="2x" />
			      </a>
			    </div>
			</div>
		</div>
	);
}

export default Card;