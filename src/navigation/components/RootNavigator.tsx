import React from 'react';

import BootSplash from 'react-native-bootsplash';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {StyleSheet} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useTheme} from 'react-native-paper';

import {AccountScreen} from 'src/features/account/components/AccountScreen';
import {TabNavigator} from './TabNavigator';
import {selectIsUserLoggedIn} from 'src/features/account/context/accountSelectors';
import {useAppSelector} from 'src/features/data/context/store';

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});

const Stack = createNativeStackNavigator();

export const RootNavigator = () => {
	const theme = useTheme<any>();

	const isUserLoggedIn = useAppSelector(selectIsUserLoggedIn);

	return (
		<SafeAreaView style={styles.container}>
			<NavigationContainer
				theme={theme}
				onReady={() => {
					BootSplash.hide({fade: true}).catch(console.error);
				}}>
				<Stack.Navigator
					screenOptions={{
						headerShown: false,
					}}>
					{isUserLoggedIn ? null : (
						<Stack.Screen name="Account" component={AccountScreen} />
					)}
					<Stack.Screen name="Home" component={TabNavigator} />
				</Stack.Navigator>
			</NavigationContainer>
		</SafeAreaView>
	);
};
