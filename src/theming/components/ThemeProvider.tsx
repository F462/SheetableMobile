import {
	MD3DarkTheme as PaperDefaultDarkTheme,
	MD3LightTheme as PaperDefaultLightTheme,
	PaperProvider,
	adaptNavigationTheme,
} from 'react-native-paper';
import React, {useMemo} from 'react';
import {Appearance} from 'react-native';
import {DefaultTheme as NavigationDefaultTheme} from '@react-navigation/native';
import deepmerge from 'deepmerge';

import {AppTheme} from 'src/features/settings/types';
import {selectAppTheme} from 'src/features/settings/context/settingsSelectors';
import {useAppSelector} from 'src/features/data/context/store';

const {LightTheme: navigationLightTheme, DarkTheme: navigationDarkTheme} =
	adaptNavigationTheme({
		reactNavigationLight: NavigationDefaultTheme,
		reactNavigationDark: NavigationDefaultTheme,
	});

const paperLightTheme = {
	...PaperDefaultLightTheme,
	colors: {
		// created with https://callstack.github.io/react-native-paper/docs/guides/theming/#creating-dynamic-theme-colors
		primary: 'rgb(0, 100, 150)',
		onPrimary: 'rgb(255, 255, 255)',
		primaryContainer: 'rgb(203, 230, 255)',
		onPrimaryContainer: 'rgb(0, 30, 49)',
		secondary: 'rgb(80, 96, 111)',
		onSecondary: 'rgb(255, 255, 255)',
		secondaryContainer: 'rgb(212, 228, 246)',
		onSecondaryContainer: 'rgb(13, 29, 42)',
		tertiary: 'rgb(102, 88, 123)',
		onTertiary: 'rgb(255, 255, 255)',
		tertiaryContainer: 'rgb(236, 220, 255)',
		onTertiaryContainer: 'rgb(33, 21, 52)',
		error: 'rgb(186, 26, 26)',
		onError: 'rgb(255, 255, 255)',
		errorContainer: 'rgb(255, 218, 214)',
		onErrorContainer: 'rgb(65, 0, 2)',
		background: 'rgb(252, 252, 255)',
		onBackground: 'rgb(26, 28, 30)',
		surface: 'rgb(252, 252, 255)',
		onSurface: 'rgb(26, 28, 30)',
		surfaceVariant: 'rgb(222, 227, 234)',
		onSurfaceVariant: 'rgb(66, 71, 77)',
		outline: 'rgb(114, 120, 126)',
		outlineVariant: 'rgb(193, 199, 206)',
		shadow: 'rgb(0, 0, 0)',
		scrim: 'rgb(0, 0, 0)',
		inverseSurface: 'rgb(47, 49, 51)',
		inverseOnSurface: 'rgb(240, 240, 244)',
		inversePrimary: 'rgb(144, 205, 255)',
		elevation: {
			level0: 'transparent',
			level1: 'rgb(239, 244, 250)',
			level2: 'rgb(232, 240, 247)',
			level3: 'rgb(224, 235, 244)',
			level4: 'rgb(222, 234, 242)',
			level5: 'rgb(217, 231, 240)',
		},
		surfaceDisabled: 'rgba(26, 28, 30, 0.12)',
		onSurfaceDisabled: 'rgba(26, 28, 30, 0.38)',
		backdrop: 'rgba(43, 49, 55, 0.4)',
	},
};
const combinedLightTheme = deepmerge(navigationLightTheme, paperLightTheme);

const paperDarkTheme = {
	...PaperDefaultDarkTheme,
	colors: {
		// created with https://callstack.github.io/react-native-paper/docs/guides/theming/#creating-dynamic-theme-colors
		primary: 'rgb(144, 205, 255)',
		onPrimary: 'rgb(0, 51, 80)',
		primaryContainer: 'rgb(0, 75, 114)',
		onPrimaryContainer: 'rgb(203, 230, 255)',
		secondary: 'rgb(184, 200, 217)',
		onSecondary: 'rgb(34, 50, 63)',
		secondaryContainer: 'rgb(57, 72, 86)',
		onSecondaryContainer: 'rgb(212, 228, 246)',
		tertiary: 'rgb(209, 191, 231)',
		onTertiary: 'rgb(55, 43, 74)',
		tertiaryContainer: 'rgb(78, 65, 98)',
		onTertiaryContainer: 'rgb(236, 220, 255)',
		error: 'rgb(255, 180, 171)',
		onError: 'rgb(105, 0, 5)',
		errorContainer: 'rgb(147, 0, 10)',
		onErrorContainer: 'rgb(255, 180, 171)',
		background: 'rgb(26, 28, 30)',
		onBackground: 'rgb(226, 226, 229)',
		surface: 'rgb(26, 28, 30)',
		onSurface: 'rgb(226, 226, 229)',
		surfaceVariant: 'rgb(66, 71, 77)',
		onSurfaceVariant: 'rgb(193, 199, 206)',
		outline: 'rgb(140, 145, 152)',
		outlineVariant: 'rgb(66, 71, 77)',
		shadow: 'rgb(0, 0, 0)',
		scrim: 'rgb(0, 0, 0)',
		inverseSurface: 'rgb(226, 226, 229)',
		inverseOnSurface: 'rgb(47, 49, 51)',
		inversePrimary: 'rgb(0, 100, 150)',
		elevation: {
			level0: 'transparent',
			level1: 'rgb(32, 37, 41)',
			level2: 'rgb(35, 42, 48)',
			level3: 'rgb(39, 48, 55)',
			level4: 'rgb(40, 49, 57)',
			level5: 'rgb(43, 53, 62)',
		},
		surfaceDisabled: 'rgba(226, 226, 229, 0.12)',
		onSurfaceDisabled: 'rgba(226, 226, 229, 0.38)',
		backdrop: 'rgba(43, 49, 55, 0.4)',
	},
};
const combinedDarkTheme = deepmerge(navigationDarkTheme, paperDarkTheme);

const combinedDarkOledTheme = deepmerge(combinedDarkTheme, {
	colors: {
		background: 'rgb(0, 0, 0)',
	},
});

export const ThemeProvider = ({children}: React.PropsWithChildren<{}>) => {
	const appThemeSetting = useAppSelector(selectAppTheme);

	const theme = useMemo(() => {
		switch (appThemeSetting) {
			case AppTheme.SYSTEM:
				if (Appearance.getColorScheme() === 'dark') {
					return combinedDarkTheme;
				} else {
					return combinedLightTheme;
				}
			case AppTheme.LIGHT:
				return combinedLightTheme;
			case AppTheme.DARK:
				return combinedDarkTheme;
			case AppTheme.DARK_OLED:
				return combinedDarkOledTheme;
		}
	}, [appThemeSetting]);

	return <PaperProvider theme={theme}>{children}</PaperProvider>;
};
