
const tienDien_1 = 500;
const tienDien_2 = 650;
const tienDien_3 = 850;
const tienDien_4 = 1100;
const tienDien_5 = 1300;            

function calculate () {
    let price = 0;
    let price_1 = 0;
    let price_2 = 0;
    let price_3 = 0;
    let price_4 = 0;
    let price_5 = 0;
    let price_6 = 0;

    const distance = document.getElementById("soKW") . value * 1;

    if (0 <= distance && distance <= 1) {
        price = tienDien_1
    }else if (1 <= distance && distance <= 50) {
        price_1 = (1 * tienDien_1)
        price_2 = (distance - 1) * tienDien_1
        price = price_1 + price_2

    } else if (50 < distance && distance <= 100) {
        price_1 = (distance - (distance - 50)) * tienDien_1
        price_2 = (distance - 50) * tienDien_2
        price =  price_1 + price_2 

    } else if (100 < distance && distance <= 200) {
        price_1 = (distance - (distance - 50)) * tienDien_1
        price_2 = (distance -(distance - 50)) * tienDien_2
        price_3 = (distance - 100) * tienDien_3
        price = price_1 + price_2 + price_3

    } else if (200 < distance && distance <= 350 ) {
        price_1 = (distance - (distance - 50)) * tienDien_1
        price_2 = (distance - (distance - 50)) * tienDien_2
        price_3 = (distance - (distance - 100)) * tienDien_3
        price_4 = (distance - 200) * tienDien_4
        price = price_1 + price_2 + price_3 + price_4

    } else if (350 > distance) {
        price_1 = (distance - (distance - 50)) * tienDien_1
        price_2 = (distance - (distance - 50)) * tienDien_2
        price_3 = (distance - (distance - 100)) * tienDien_3
        price_4 = (distance - (distance - 150)) * tienDien_4
        price_5 = (distance - 350) * tienDien_4
        price = price_1 + price_2 + price_3 + price_4 + price_5

    } else {
        alert("Làm ơn nhập thông tin")
    }

    const formatter = new   Intl.NumberFormat("vi-VN", {currency: "VND", style: "currency"});

    const pInHoTen = document.getElementById("pInHoTen")
    const ten = document.getElementById("ten")

    const pTien = document.getElementById("pTien");
    pTien.innerHTML = `Họ tên: ` + ten.value + `Tiền điện là: ` + formatter.format(price);


}


// Nhà dân
const nDHoaDon = 4.5;
const nDDichVu = 20.5;
const nDKenh = 7.5;

// Doanh nghiệp
const dNHoaDon = 15;
const dNKenh = 50;
const dNDichVu = 75;
const dNDichVuThem = 5;

const tinhTienCap = () => {
    let price = 0
    let price_1 = 0
    let price_3 = 0
    let price_4 = 0
}