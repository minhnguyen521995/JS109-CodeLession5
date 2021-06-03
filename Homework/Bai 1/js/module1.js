export class Meme {
    id;
    name;
    image;
    dateModified;
    constructor(id, name, image, dateModified) {
        this.id = id;
        this.name = name;
        this.image = image;
        this.dateModified = dateModified;
    };
    show() {
        let node = document.getElementById('container');
        let name = document.createElement('h1');
        let image = document.createElement('img');
        let dateModified = document.createElement('h2');
        name.textContent = 'Tên meme: ' + this.name;
        image.src = this.image;
        dateModified.textContent = 'Ngày tạo: ' + this.dateModified;
        node.appendChild(name);
        node.appendChild(image);
        node.appendChild(dateModified);
    };
    update(data) {
        this.name = data.name;
        this.image = data.image;
    }
};

