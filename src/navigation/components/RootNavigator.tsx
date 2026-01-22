import React from 'react';

import BootSplash from 'react-native-bootsplash';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {StyleSheet} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useTheme} from 'react-native-paper';

import {TabNavigator} from './TabNavigator';

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});

const Stack = createNativeStackNavigator();

export const RootNavigator = () => {
	const theme = useTheme<any>();

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
					<Stack.Screen
						name="Home"
						component={TabNavigator}
						options={{headerShown: false}}
					/>
				</Stack.Navigator>
			</NavigationContainer>
		</SafeAreaView>
	);
};
