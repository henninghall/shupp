import React, {Component} from "react";
import {StyleSheet, View, Platform, ListView} from "react-native";
import BarcodeScanner from "react-native-barcode-scanner-universal";
import ShoppingList from "./ShoppingList";
import PayButton from "./PayButton";

export default class StartView extends Component {

    constructor(props){
        super(props);
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        let scannedItems =  [12345];
        this.state = {
            scannedItems: scannedItems,
            dataSource: ds.cloneWithRows(scannedItems),
            lastItemAddedTime: 0,
        };
    }

    render() {
        let scanArea = null;
        if (Platform.OS === 'ios') {
            scanArea = (
                <View style={styles.rectangleContainer}>
                    <View style={styles.rectangle} />
                </View>
            )
        }

        return (
            <View style={styles.container}>
                <BarcodeScanner
                    onBarCodeRead={(code) => {
                        console.log(code);
                        this.addItemToList(code);
                    }
                    }
                    style={styles.camera}>
                    {scanArea}
                </BarcodeScanner>
                <View style={styles.bottomBar}>
                    <ShoppingList
                        dataSource={this.state.dataSource}
                    />
                    <PayButton />
                </View>
            </View>
        )
    }

    addItemToList(code){
        const secondsSinceLastAddedItem = (new Date() - this.state.lastItemAddedTime) / 1000;
        if (secondsSinceLastAddedItem < 2) return;
        console.log(code);
        const newList = this.state.scannedItems.concat([54322]);
        this.setState({
            scannedItems: newList,
            dataSource: this.state.dataSource.cloneWithRows(newList),
            lastItemAddedTime: new Date(),
        });
    }


}
const styles = StyleSheet.create({
    camera: {
        flex: 3
    },
    container: {
        flex: 1,
    },
    bottomBar: {
        flex: 1,
        flexDirection: 'row',
    },
    rectangleContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'transparent'
    },
    rectangle: {
        height: 250,
        width: 250,
        borderWidth: 2,
        borderColor: '#00FF00',
        backgroundColor: 'transparent'
    }
});
