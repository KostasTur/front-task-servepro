import { ReactComponent as LoadingIcon } from '../../assets/loadingIcon.svg';
import './loader.css';
const Loader = () => {
	return (
		<div className='loader'>
			Informacija Kraunasi
			<LoadingIcon className='loader__icon' />
		</div>
	);
};

export default Loader;
