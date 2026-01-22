import {jest} from '@jest/globals';

jest.mock('@react-native-async-storage/async-storage', () =>
	require('@react-native-async-storage/async-storage/jest/async-storage-mock')
);

// see https://react.i18next.com/misc/testing
jest.mock('react-i18next', () => ({
	useTranslation: () => ({t: key => key, i18n: {language: 'en'}}),
	initReactI18next: {
		type: '3rdParty',
		init: () => {}
	}
}));

jest.mock('react-native-localize', () => ({
	findBestLanguageTag: jest.fn()
}));

jest.mock('react-native-bootsplash', () => {
	return {
		hide: jest.fn().mockResolvedValue(),
		isVisible: jest.fn().mockResolvedValue(false),
		useHideAnimation: jest.fn().mockReturnValue({
			container: {},
			logo: {source: 0},
			brand: {source: 0}
		})
	};
});