import React from 'react';

import {ScrollView} from 'react-native';
import {Text} from 'react-native-paper';

import {BaseScreen} from 'src/ui/BaseScreen';

export const AboutScreen = () => {
	return (
		<BaseScreen>
			<ScrollView>
				<Text>About page</Text>
			</ScrollView>
		</BaseScreen>
	);
};
