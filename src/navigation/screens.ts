import {ScreenParameters} from './ScreenParameters';
import {createTabIconFunction} from './components/TabItemIcon';

import {AboutScreen} from 'src/features/about/components/AboutScreen';
import {HomeScreen} from 'src/features/home/components/HomeScreen';
import {SettingsScreen} from 'src/features/settings/components/SettingsScreen';

export const screens: Array<{
	name: keyof ScreenParameters;
	component: React.FC<any>;
	options?: any;
}> = [
	{
		name: 'Home',
		component: HomeScreen,
		options: {
			tabBarIcon: createTabIconFunction('home'),
		},
	},
	{
		name: 'About',
		component: AboutScreen,
		options: {
			tabBarIcon: createTabIconFunction('information-variant'),
		},
	},
	{
		name: 'Settings',
		component: SettingsScreen,
		options: {
			tabBarIcon: createTabIconFunction('cog'),
		},
	},
];
