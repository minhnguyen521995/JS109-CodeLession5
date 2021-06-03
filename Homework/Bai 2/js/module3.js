import {Goods} from "./module1.js";

export class Clothes extends Goods {
    constructor(id, name, price, manufacturer, dateImport, origin, material) {
        super(id, name, price, manufacturer, 5, dateImport);
        this.origin = origin;
        this.material = material;
    };
};
