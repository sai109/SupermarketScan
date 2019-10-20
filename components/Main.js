import React from 'react';
import { View, Text, Button, StyleSheet, Alert } from 'react-native';

export default class Main extends React.Component {
	render() {
		return (
			<View style={styles.container}>
				<Text>Shopping List</Text>
				<Text>My Basket</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});