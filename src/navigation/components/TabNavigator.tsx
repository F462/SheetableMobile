import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {screens} from '../screens';

const Tab = createBottomTabNavigator();

export const TabNavigator = () => {
	return (
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
	);
};
