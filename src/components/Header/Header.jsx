import React from 'react';
import { NavLink } from 'react-router-dom';
import cn from 'classnames';

import { ReactComponent as HeaderLogo } from '../../assets/mainLogo.svg';
import './header.css';

const Header = () => {
	return (
		<header>
			<div className='header__logo'>
				<HeaderLogo />
			</div>

			<nav className='main-nav'>
				<ul className='main-nav__list'>
					<li className='main-nav__item'>
						<NavLink
							className={({ isActive }) =>
								cn('main-nav__link', { 'main-nav__link--active': isActive })
							}
							to='/funkcijos'
						>
							Funkcijos
						</NavLink>
					</li>
					<li className='main-nav__item'>
						<NavLink
							className={({ isActive }) =>
								cn('main-nav__link', { 'main-nav__link--active': isActive })
							}
							to='/ataskaitos'
						>
							Ataskaitos
						</NavLink>
					</li>
					<li className='main-nav__item'>
						<NavLink
							className={({ isActive }) =>
								cn('main-nav__link', { 'main-nav__link--active': isActive })
							}
							to='/sandelys'
						>
							Sandėlys
						</NavLink>
					</li>
					<li className='main-nav__item'>
						<NavLink
							className={({ isActive }) =>
								cn('main-nav__link', { 'main-nav__link--active': isActive })
							}
							to='/nustatymai'
						>
							Nustatymai
						</NavLink>
					</li>
					<li className='main-nav__item'>
						<NavLink
							className={({ isActive }) =>
								cn('main-nav__link', { 'main-nav__link--active': isActive })
							}
							to='/atsijungti'
						>
							Atsijungti
						</NavLink>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;
