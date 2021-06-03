export let revenue = [];

export class Goods {
    id;
    name;
    price;
    manufacturer;
    discount;
    dateImport;
    constructor(id, name, price, manufacturer, discount, dateImport) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.manufacturer = manufacturer;
        this.discount = discount;
        this.dateImport = dateImport;
    };

    import() {
        localStorage.setItem(`${this.id}`, JSON.stringify(this));
    };

    export() {
        localStorage.setItem(`${this.id} (sold)`, `${this.price - this.price * this.discount / 100}`);
        revenue.push(`${this.price - this.price * this.discount / 100}`);
        localStorage.setItem('revenue', JSON.stringify(revenue));
        localStorage.removeItem(`${this.id}`);
    };
}
