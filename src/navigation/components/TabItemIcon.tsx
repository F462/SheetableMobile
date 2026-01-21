import React from 'react';

import {Icon, useTheme} from 'react-native-paper';

const TabItemIcon = ({icon, focused}: {icon: string; focused: boolean}) => {
	const theme = useTheme();

	return (
		<Icon
			source={icon}
			size={20}
			color={focused ? theme.colors.primary : undefined}
		/>
	);
};

export const createTabIconFunction = (icon: string) => {
	return ({focused}: {focused: boolean}) => (
		<TabItemIcon icon={icon} focused={focused} />
	);
};
