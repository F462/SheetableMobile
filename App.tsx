import {PersistGate} from 'redux-persist/integration/react';
import {Provider} from 'react-redux';
import React from 'react';
import i18n from 'src/localization/i18n';

// Run initial configuration for i18n;
i18n;

import {persistor, store} from './src/redux/store';
import {RootNavigator} from 'src/navigation/components/RootNavigator';
import {ThemeProvider} from 'src/theming/components/ThemeProvider';

function App() {
	return (
		<Provider store={store}>
			<ThemeProvider>
				<PersistGate loading={null} persistor={persistor}>
					<RootNavigator />
				</PersistGate>
			</ThemeProvider>
		</Provider>
	);
}

export default App;
