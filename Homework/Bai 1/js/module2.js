import { Meme } from "./module1.js";

class MemeCollection {
    id;
    name;
    owner;
    memes;
    constructor(id, name, owner, memes) {
        this.id = id;
        this.name = name;
        this.owner = owner;
        this.memes = memes;
    };
    add(meme) {
        if (meme instanceof Meme) {
            this.memes.push(meme);
        } else {
            console.log('Nhập sai rồi');
        }
    };
    update(id, data) {
        for (let i = 0; i < this.memes.length; i++) {
            if (id == this.memes[i].id) {
                this.memes[i].name = data.name;
                this.memes[i].image = data.image;
            } else {
                console.log('Không tìm thấy dữ liệu');
            };
        };
    };
    delete(id) {
        for (let i = 0; i < this.memes.length; i++) {
            if (id == this.memes[i].id) {
                this.memes.splice(i, 1);
            };
        };
    }
    show() {
        console.log(this);
    }
};

let badLuck = new Meme('m1', 'Bad luck Brian', 'https://i.imgflip.com/4yklgu.jpg', '1/6/2021');
let doge = new Meme('m2', 'Doge', 'https://upload.wikimedia.org/wikipedia/en/thumb/5/5f/Original_Doge_meme.jpg/300px-Original_Doge_meme.jpg', '1/6/2021');
let collection1 = new MemeCollection('mc1', 'Collection 1', 'Hoàng Minh', [badLuck]);
collection1.add(doge);
collection1.show();
badLuck.show();
doge.update({name: 'Doge Scare', image: 'https://i.pinimg.com/originals/04/22/f0/0422f085467c311cfa7d1d3b2523db5f.jpg'});
doge.show();