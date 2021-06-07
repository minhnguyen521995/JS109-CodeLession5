import Person from "./person.js"

export default class Positive {
    positive;
    people;
    closeContact;
    constructor() {
        this.positive = [];
        this.people = [];
        this.closeContact = [];
    }
    /* Nhập tập N người (N là 1 số nhập vào từ bàn phím) */
    import(person) {
        if (person instanceof Person) {
            this.people.push(person);
        } else {
            console.log('Nhập sai rồi')
        }
    };
    /* Nhập thông báo có 1 người có số điện thoại là P (nhập vào từ bàn phím) bị mắc COVID-19 */
    inputPos(P) {
        let index = this.people.findIndex(function (person) {
            return person.telephone == P;
        })

        if (index >= 0) {
            let person = this.people[index];
            this.positive.push(person);
        }
    }
    /* Tìm những người tiếp xúc gần với bệnh nhân COVID-19 mà bộ y tế đã thông báo */
    findClose(P) {
        let index = this.positive.findIndex(function (person) {
            return person.telephone == P;
        });
        let x = this.people[index].location.X;
        let y = this.people[index].location.Y;
        for (let i = 0; i < this.people.length; i++) {
            let distance = Math.sqrt(Math.pow(x - this.people[i].location.X, 2) + Math.pow(y - this.people[i].location.Y, 2));
            if (distance < 2 && distance != 0) {
                let closePerson = this.people[i];
                this.closeContact.push(closePerson);
            }
        }
        console.log(this.closeContact);
    }
}

let a = new Person('A', 123456789, { X: 1, Y: 1 });
let b = new Person('B', 987654321, { X: 2, Y: 1 });
let c = new Person('C', 654987321, { X: 5, Y: 3 });

let input = new Positive();

input.import(a);
input.import(b);
input.import(c);

input.inputPos(123456789);

input.findClose(123456789);

