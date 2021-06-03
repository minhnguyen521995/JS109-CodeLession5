import {Goods} from "./module1.js"

export class Houseware extends Goods {
    constructor(id, name, price, manufacturer, dateImport, durable) {
        super(id, name, price, manufacturer, 10, dateImport);
        this.durable = durable;
    };
}