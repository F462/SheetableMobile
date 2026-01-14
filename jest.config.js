module.exports = {
	preset: 'react-native',
	setupFiles: [
		'./jest.setup.js'
	],
	transform: {
		'^.+\\.ts?$': 'ts-jest',
		'^.+\\.(js|jsx)$': 'babel-jest'
	},
	transformIgnorePatterns: [],
	testPathIgnorePatterns: ['<rootDir>/node_modules/']
};
