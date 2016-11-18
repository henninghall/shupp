import React, {Component} from "react";
import {StyleSheet, ListView, Text, View} from "react-native";
import ListItem from './ListItem';
import ItemDatabase from "../data/ItemDatabase";

export default class ShoppingList extends Component {

    render() {
        return (
            <ListView
                style={styles.container}
                dataSource={this.props.dataSource}
                renderRow={(rowData) => this.getListItem(rowData)}
                enableEmptySections
            />
        )
    }

    getListItem(key){
        let item = ItemDatabase.get(key);
        item = ItemDatabase.getRandom();
        return  <ListItem title={item.title} price={item.price} />
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 2,
        margin: 20,
    },

});
