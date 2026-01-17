import React from 'react';

import {SafeAreaView} from 'react-native-safe-area-context';
import {StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {screens} from '../screens';

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});

const Tab = createBottomTabNavigator();

export const TabNavigator = () => {
	return (
		<SafeAreaView style={styles.container}>
			<Tab.Navigator>
				{screens.map((screen) => (
					<Tab.Screen
						key={screen.name}
						name={screen.name}
						component={screen.component}
						options={screen.options}
					/>
				))}
			</Tab.Navigator>
		</SafeAreaView>
	);
};
