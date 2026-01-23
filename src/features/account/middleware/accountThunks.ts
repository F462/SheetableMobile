import axios from 'axios';

import {getApiToken, storeApiToken} from '../utils/accountPersistor';
import {userLoggedIn, userLoggedOut} from '../context/accountActions';
import {createAppAsyncThunk} from 'src/features/data/middleware/createAppAsyncThunk';

export const loginUser = createAppAsyncThunk<void, {serverUrl: string}>(
	'account/loginUser',
	async ({serverUrl}, {dispatch}) => {
		const apiToken = await getApiToken();

		if (apiToken === null || apiToken === undefined) {
			return;
		}

		axios.defaults.headers.common.Authorization = `Bearer ${apiToken}`;
		axios.defaults.baseURL = `${serverUrl}/api`;

		dispatch(userLoggedIn(serverUrl));
	},
);

export const logoutUser = createAppAsyncThunk<void, void>(
	'account/logoutUser',
	async (_payload, {dispatch}) => {
		delete axios.defaults.headers.common.Authorization;

		dispatch(userLoggedOut());
	},
);

export const signInUser = createAppAsyncThunk<
	void,
	{serverUrl: string; email: string; password: string}
>('account/signInUser', async ({serverUrl, email, password}, {dispatch}) => {
	try {
		axios.defaults.baseURL = `${serverUrl}/api`;

		const {data} = await axios.post<string>('/login', {
			email: email,
			password: password,
		});

		await storeApiToken(data);

		await dispatch(loginUser({serverUrl}));
	} catch (error) {
		console.error(error);
	}
});
