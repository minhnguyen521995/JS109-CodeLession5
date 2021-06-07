
import { Houseware } from "./module2.js";
import { Clothes } from "./module3.js";
import { Food } from "./module4.js";

/* Hàm tạo thẻ hàng hóa đã nhập (tạo nút Bán - theo định danh của hàng hóa đó và xóa mặt hàng đó khỏi kho lưu trữ & 
    lưu lại mặt hàng được bán) */
function rendenItem(doc) {
    let myForm = document.getElementById('goods-list');
    let li = document.createElement('li');
    let name = document.createElement('span');
    let price = document.createElement('span');
    let sell = document.createElement('button');

    name.textContent = doc.name;
    price.textContent = doc.price;
    sell.textContent = 'Bán';

    li.appendChild(name);
    li.appendChild(price);
    li.appendChild(sell);
    myForm.appendChild(li);

    sell.addEventListener('click', () => {
        myForm.removeChild(li);
        doc.export();
    })
}

/* Nhập hàng hóa vào Class tương ứng */
let inputForm1 = document.getElementById('add-goods-form1');

inputForm1.addEventListener('submit', (event) => {
    event.preventDefault();

    let good = new Houseware(inputForm1.id.value, inputForm1.name.value, inputForm1.price.value, inputForm1.manufacturer.value, inputForm1.dateImport.value, inputForm1.durable.value)
    good.import();

    inputForm1.id.value = "";
    inputForm1.name.value = "";
    inputForm1.price.value = "";
    inputForm1.manufacturer.value = "";
    inputForm1.dateImport.value = "";
    inputForm1.durable.value = "";

    rendenItem(good);
})

let inputForm2 = document.getElementById('add-goods-form2');

inputForm2.addEventListener('submit', (event) => {
    event.preventDefault();

    let good = new Clothes(inputForm2.id.value, inputForm2.name.value, inputForm2.price.value, inputForm2.manufacturer.value, inputForm2.dateImport.value, inputForm2.origin.value, inputForm2.material.value)
    
    good.import();

    inputForm2.id.value = "";
    inputForm2.name.value = "";
    inputForm2.price.value = "";
    inputForm2.manufacturer.value = "";
    inputForm2.dateImport.value = "";
    inputForm2.origin.value = "";
    inputForm2.material.value = '';

    rendenItem(good);
})

let inputForm3 = document.getElementById('add-goods-form3');

inputForm3.addEventListener('submit', (event) => {
    event.preventDefault();

    let good = new Food(inputForm3.id.value, inputForm3.name.value, inputForm3.price.value, inputForm3.manufacturer.value, inputForm3.dateImport.value, inputForm3.taste.value)
    
    good.import();

    inputForm3.id.value = "";
    inputForm3.name.value = "";
    inputForm3.price.value = "";
    inputForm3.manufacturer.value = "";
    inputForm3.dateImport.value = "";
    inputForm3.taste.value = "";

    rendenItem(good);
})

/* Hàm in ra màn hình tổng số tiền hàng đã bán được */

let calculate = document.getElementById('revenue');

calculate.addEventListener('click', () => {
    let storeData = localStorage.getItem('revenue');
    if (storeData) {
        let revenue = JSON.parse(storeData);
        let sum = 0;
        for (let i = 0; i < revenue.length; i++) {
            sum += parseInt(revenue[i]);
            document.getElementById("result").innerHTML = sum + ' VNĐ';
        }
    }
})

