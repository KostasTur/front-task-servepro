import React from 'react';
import { Link } from 'react-router-dom';

import './footer.css';

import { ReactComponent as FooterLogo } from '../../assets/footerLogo.svg';
import { ReactComponent as LanguageIcon } from '../../assets/gaublys.svg';

const Footer = () => {
	return (
		<footer>
			<div className='footer__logo'>
				<FooterLogo />
			</div>
			<ul className='footer__list'>
				<li className='footer__item'>
					<Link className='footer__link' to='/privatumo-politika'>
						Privatumo politika
					</Link>
				</li>
				<li className='footer__item'>
					<Link className='footer__link' to='/privatumo-politika'>
						Privatumo politika
					</Link>
				</li>
				<li className='footer__item'>
					<Link className='footer__link' to='/privatumo-politika'>
						Privatumo politika
					</Link>
				</li>
			</ul>
			<div className='footer__language'>
				<LanguageIcon />
				<span>Liteuvių</span>
			</div>
		</footer>
	);
};

export default Footer;
