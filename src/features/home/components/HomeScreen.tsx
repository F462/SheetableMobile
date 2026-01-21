import React from 'react';

import {ScrollView} from 'react-native';
import {Text} from 'react-native-paper';

import {BaseScreen} from 'src/ui/BaseScreen';

export const HomeScreen = () => {
	return (
		<BaseScreen>
			<ScrollView>
				<Text>Home page</Text>
			</ScrollView>
		</BaseScreen>
	);
};
