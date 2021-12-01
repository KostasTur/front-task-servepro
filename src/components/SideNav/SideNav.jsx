import React from 'react';
import { NavLink } from 'react-router-dom';
import cn from 'classnames';

import './sideNav.css';
const SideNav = () => {
	return (
		<nav aria-label='secondary navigation' className='side-nav'>
			<h2 className='side-nav__title'>Dienos Funkcijos</h2>
			<ul className='side-nav__list'>
				<li className='side-nav__item'>
					<NavLink
						className={({ isActive }) =>
							cn('side-nav__link', { 'side-nav__link--active': isActive })
						}
						to='/'
					>
						Registracija
					</NavLink>
				</li>
				<li className='side-nav__item'>
					<NavLink
						className={({ isActive }) =>
							cn('side-nav__link', { 'side-nav__link--active': isActive })
						}
						to='/funkcijos'
					>
						Kliento paieška
					</NavLink>
				</li>
				<li className='side-nav__item'>
					<NavLink
						className={({ isActive }) =>
							cn('side-nav__link', { 'side-nav__link--active': isActive })
						}
						to='/'
					>
						Sąskaitos
					</NavLink>
				</li>
				<li className='side-nav__item'>
					<NavLink
						className={({ isActive }) =>
							cn('side-nav__link', { 'side-nav__link--active': isActive })
						}
						to='/'
					>
						Kasa
					</NavLink>
				</li>
				<li className='side-nav__item'>
					<NavLink
						className={({ isActive }) =>
							cn('side-nav__link', { 'side-nav__link--active': isActive })
						}
						to='/'
					>
						Orderiai
					</NavLink>
				</li>
				<li className='side-nav__item'>
					<NavLink
						className={({ isActive }) =>
							cn('side-nav__link', { 'side-nav__link--active': isActive })
						}
						to='/'
					>
						Medžiagų išdavimas
					</NavLink>
				</li>
			</ul>
			<h2 className='side-nav__title'>Kortelės</h2>
			<ul className='side-nav__list'>
				<li className='side-nav__item'>
					<NavLink
						className={({ isActive }) =>
							cn('side-nav__link', { 'side-nav__link--active': isActive })
						}
						to='/'
					>
						Fiziniai klientai
					</NavLink>
				</li>
				<li className='side-nav__item'>
					<NavLink
						className={({ isActive }) =>
							cn('side-nav__link', { 'side-nav__link--active': isActive })
						}
						to='/'
					>
						Juridiniai Klientai
					</NavLink>
				</li>
				<li className='side-nav__item'>
					<NavLink
						className={({ isActive }) =>
							cn('side-nav__link', { 'side-nav__link--active': isActive })
						}
						to='/'
					>
						Paslaugos
					</NavLink>
				</li>
				<li className='side-nav__item'>
					<NavLink
						className={({ isActive }) =>
							cn('side-nav__link', { 'side-nav__link--active': isActive })
						}
						to='/'
					>
						Prekės
					</NavLink>
				</li>
				<li className='side-nav__item'>
					<NavLink
						className={({ isActive }) =>
							cn('side-nav__link', { 'side-nav__link--active': isActive })
						}
						to='/'
					>
						Darbuotojai
					</NavLink>
				</li>
			</ul>
		</nav>
	);
};

export default SideNav;
