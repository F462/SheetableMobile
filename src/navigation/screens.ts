import {AboutScreen} from 'src/features/about/components/AboutScreen';
import {ScreenParameters} from './ScreenParameters';
import {createTabIconFunction} from './components/TabItemIcon';

export const screens: Array<{
	name: keyof ScreenParameters;
	component: React.FC<any>;
	options?: any;
}> = [
	{
		name: 'About',
		component: AboutScreen,
		options: {
			tabBarIcon: createTabIconFunction('information-variant'),
		},
	},
];
