import React, {useState} from 'react';

import {Button, Text, TextInput, useTheme} from 'react-native-paper';
import {StyleSheet, View} from 'react-native';
import {useSelector} from 'react-redux';
import {useTranslation} from 'react-i18next';

import {
	selectIsUserLoggedIn,
	selectServerUrl,
} from '../context/accountSelectors';
import {
	selectIsUserLoggingIn,
	selectIsUserLoggingOut,
} from 'src/features/appState/context/appStateSelectors';
import {useAppDispatch, useAppSelector} from 'src/features/data/context/store';
import {BaseScreen} from 'src/ui/BaseScreen';
import {signInUser} from '../middleware/accountThunks';
import {useStyle} from 'src/theming/utils/useStyle';

const styles = StyleSheet.create({
	inputContainer: {
		marginVertical: 10,
	},
	actionButton: {
		marginHorizontal: 10,
		marginVertical: 20,
	},
	spacer: {
		flex: 1,
	},
});

export const AccountScreen = () => {
	const {t} = useTranslation();
	const theme = useTheme();
	const dispatch = useAppDispatch();

	const isUserLoggingIn = useAppSelector(selectIsUserLoggingIn);
	const isUserLoggingOut = useAppSelector(selectIsUserLoggingOut);

	const isUserLoggedIn = useAppSelector(selectIsUserLoggedIn);

	const [serverUrl, setServerUrl] = useState(
		useSelector(selectServerUrl) ?? '',
	);
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const dynamicStyles = useStyle(
		() => ({
			logoutButton: {
				backgroundColor: theme.colors.error,
			},
		}),
		[theme.colors.error],
	);

	return (
		<BaseScreen>
			<View style={styles.inputContainer}>
				<Text>{t('enterServerUrl')}</Text>
				<TextInput value={serverUrl} onChangeText={setServerUrl} />
			</View>
			<View style={styles.inputContainer}>
				<Text>{t('enterEmail')}</Text>
				<TextInput
					value={email}
					onChangeText={setEmail}
					keyboardType="email-address"
					autoComplete="email"
					textContentType="emailAddress"
				/>
			</View>
			<View style={styles.inputContainer}>
				<Text>{t('enterPassword')}</Text>
				<TextInput
					value={password}
					onChangeText={setPassword}
					keyboardType="default"
					autoComplete="password"
					textContentType="password"
					secureTextEntry
				/>
			</View>
			<Button
				style={styles.actionButton}
				mode="contained"
				loading={isUserLoggingIn}
				icon="content-save-outline"
				onPress={() => {
					dispatch(signInUser({serverUrl, email, password})).catch(
						console.error,
					);
				}}>
				{t('save')}
			</Button>
			<View style={styles.spacer} />
			{isUserLoggedIn && (
				<Button
					style={[styles.actionButton, dynamicStyles.logoutButton]}
					mode="contained"
					loading={isUserLoggingOut}
					icon="logout"
					onPress={() => {}}>
					{t('logout')}
				</Button>
			)}
		</BaseScreen>
	);
};
