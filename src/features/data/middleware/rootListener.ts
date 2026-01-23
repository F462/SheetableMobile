import {AppStartListening} from '../context/store';
import {startAccountListeners} from 'src/features/account/middleware/accountListeners';

export const startRootListener = (startListening: AppStartListening) => {
	startAccountListeners(startListening);
};
