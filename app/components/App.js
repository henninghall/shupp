import React, {Component} from "react";
import {StyleSheet, View, StatusBar} from "react-native";
import NavigationBar from "react-native-navbar";

import ShoppingView from './ShoppingView';

export default class App extends Component {

    render() {
        const titleConfig = {
            title: 'Shupp',
            style: styles.title,
        };

        return (
            <View style={styles.container}>
                <StatusBar
                    backgroundColor="#e05a06"
                    barStyle="light-content"
                />
                <NavigationBar
                    style={styles.navBar}
                    title={titleConfig}
                />
                <ShoppingView />
            </View>
        );
    }

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    navBar: {
        backgroundColor: '#e05a06',
    },
    title: {
        color: 'white',
        fontSize: 25,
    }
});
