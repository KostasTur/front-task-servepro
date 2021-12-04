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
							cn('side-nav__link', { 'is-active': isActive })
						}
						to='/funkcijos/registracija'
					>
						Registracija
					</NavLink>
				</li>
				<li className='side-nav__item'>
					<NavLink
						className={({ isActive }) =>
							cn('side-nav__link', { 'is-active': isActive })
						}
						to='/funkcijos/kliento-paieska'
					>
						Kliento paieška
					</NavLink>
				</li>
				<li className='side-nav__item'>
					<NavLink
						className={({ isActive }) =>
							cn('side-nav__link', { 'is-active': isActive })
						}
						to='/funkcijos/saskaitos'
					>
						Sąskaitos
					</NavLink>
				</li>
				<li className='side-nav__item'>
					<NavLink
						className={({ isActive }) =>
							cn('side-nav__link', { 'is-active': isActive })
						}
						to='/funkcijos/kasa'
					>
						Kasa
					</NavLink>
				</li>
				<li className='side-nav__item'>
					<NavLink
						className={({ isActive }) =>
							cn('side-nav__link', { 'is-active': isActive })
						}
						to='/funkcijos/orderiai'
					>
						Orderiai
					</NavLink>
				</li>
				<li className='side-nav__item'>
					<NavLink
						className={({ isActive }) =>
							cn('side-nav__link', { 'is-active': isActive })
						}
						to='/funkcijos/medziagu-isdavimas'
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
							cn('side-nav__link', { 'is-active': isActive })
						}
						to='/funkcijos/fiziniai-klientai'
					>
						Fiziniai klientai
					</NavLink>
				</li>
				<li className='side-nav__item'>
					<NavLink
						className={({ isActive }) =>
							cn('side-nav__link', { 'is-active': isActive })
						}
						to='/funkcijos/juridiniai-klientai'
					>
						Juridiniai Klientai
					</NavLink>
				</li>
				<li className='side-nav__item'>
					<NavLink
						className={({ isActive }) =>
							cn('side-nav__link', { 'is-active': isActive })
						}
						to='/funkcijos/paslaugos'
					>
						Paslaugos
					</NavLink>
				</li>
				<li className='side-nav__item'>
					<NavLink
						className={({ isActive }) =>
							cn('side-nav__link', { 'is-active': isActive })
						}
						to='/funkcijos/prekes'
					>
						Prekės
					</NavLink>
				</li>
				<li className='side-nav__item'>
					<NavLink
						className={({ isActive }) =>
							cn('side-nav__link', { 'is-active': isActive })
						}
						to='/funkcijos/darbuotojai'
					>
						Darbuotojai
					</NavLink>
				</li>
			</ul>
		</nav>
	);
};

export default SideNav;
