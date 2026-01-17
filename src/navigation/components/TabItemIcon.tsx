import React from 'react';

import {Icon} from 'react-native-paper';

const TabItemIcon = ({icon}: {icon: string}) => {
	return <Icon source={icon} size={20} />;
};

export const createTabIconFunction = (icon: string) => {
	return () => <TabItemIcon icon={icon} />;
};
