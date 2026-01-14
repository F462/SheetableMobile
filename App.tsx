import {PersistGate} from 'redux-persist/integration/react';
import {Provider} from 'react-redux';
import React from 'react';
import {Text} from 'react-native-paper';

import {persistor, store} from './src/redux/store';

function App() {
	return (
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<Text>Hello World!</Text>
			</PersistGate>
		</Provider>
	);
}

export default App;
