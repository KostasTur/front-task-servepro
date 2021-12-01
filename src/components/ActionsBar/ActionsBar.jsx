import React from 'react';
import { ReactComponent as AddUserIcon } from '../../assets/addUserIcon.svg';
import { ReactComponent as AddCompanyIcon } from '../../assets/addCompanyIcon.svg';
import { ReactComponent as PrintIcon } from '../../assets/printIcon.svg';
import { ReactComponent as LightBulbIcon } from '../../assets/lightBulbIcon.svg';
import { ReactComponent as ScreenViewIcon } from '../../assets/screenViewIcon.svg';
import { ReactComponent as BackArrowIcon } from '../../assets/backArrowIcon.svg';

import './actionsBar.css';

const ActionsBar = () => {
	return (
		<div className='actions-bar'>
			<div className='actions-bar__buttons'>
				<button className='actions-bar__button' data-tooltip='Naujas klientas'>
					<AddUserIcon />
				</button>
				<button className='actions-bar__button' data-tooltip='Nauja įmonė'>
					<AddCompanyIcon />
				</button>
				<button className='actions-bar__button' data-tooltip='Spausdinti'>
					<PrintIcon />
				</button>
				<button className='actions-bar__button' data-tooltip='Tebunie šviesa'>
					<LightBulbIcon />
				</button>
				<button className='actions-bar__button' data-tooltip='Vizualizacija'>
					<ScreenViewIcon />
				</button>
				<button className='actions-bar__button' data-tooltip='Grįžti atgal'>
					<BackArrowIcon />
				</button>
			</div>
		</div>
	);
};

export default ActionsBar;
