import {Goods} from "./module1.js";

export class Food extends Goods {
    constructor(id, name, price, manufacturer, dateImport, taste) {
        super(id, name, price, manufacturer, 2, dateImport);
        this.taste = taste;
    };
};
