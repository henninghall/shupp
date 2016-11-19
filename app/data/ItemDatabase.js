import Item from "./Item";

const data = {
    12345 : new Item("Milk", "11"),
    54322 : new Item("Eggs", "23"),
    23443 : new Item("Apples", "17"),
    94623 : new Item("Cheese", "53"),
    23123 : new Item("Julmust", "25"),
};

export default class ItemDatabase {

    static get(key){
        return data[key];
    }

    static getRandom() {
        return data[this.getRandomKey()];
    }

    static getRandomKey(){
        const randomIndex = Math.floor(Math.random() * Object.keys(data).length);
        return Object.keys(data)[randomIndex];
    }
}
