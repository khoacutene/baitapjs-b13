
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
const dNDichVu = 75;
const dNKenh = 50;
const dNDichVuThem = 5;

let selected = 'nhaDan'

const chonTinhTien = (element) => {

   if (element.value === "nhaDan") {
    document.getElementById("txt_soKenh").style.display="block"
    document.getElementById("txt_soKetNoi").style.display="none"
   } else if (element.value === "doanhNghiep") {
    document.getElementById("txt_soKenh").style.display="block"
    document.getElementById("txt_soKetNoi").style.display="block"
   }

   selected = element.value

}

const tinhTienCap =() => {
    let price = 0;
    let price_1 = 0;
    let price_2 = 0;
    let price_3 = 0;
    let price_4 = 0;

    const tienKenh = document.getElementById("txt_soKenh").value*1;
    const tienKetNoi = document.getElementById("txt_soKetNoi").value*1;

    const pThongBaoTienCap = document.getElementById("pThongBaoTienCap");
    const tenKH = document.getElementById("tenKH")
    const formatter = new   Intl.NumberFormat("vi-VN", {currency: "VND", style: "currency"});

    if (selected == "nhaDan" && tienKenh) {
        price_1 = nDHoaDon * 1;
        price_2 = nDDichVu * 1;
        price_3 = tienKenh * nDKenh;
        price = price_1 + price_2 + price_3;
        pThongBaoTienCap.innerHTML = `Họ tên: ` + tenKH.value + `Tiền điện là: ` + formatter.format(price);

    }else if (selected = "doanhNghiep") {

        if (tienKetNoi > 10) {
            price_1 = dNHoaDon * 1
            price_2 =  dNDichVu* 1
            price_3 = dNKenh * tienKetNoi   
            price_4 = (tienKetNoi - 10) * dNDichVuThem
            price = price_1 + price_2 + price_3 + price_4;
        } else {
            price_1 = dNHoaDon * 1
            price_2 =  dNDichVu* 1
            price_3 = dNKenh * tienKetNoi
            price = price_1 + price_2 + price_3; 
        }
     
        pThongBaoTienCap.innerHTML = `Họ tên: ` + tenKH.value + `Tiền điện là: ` + formatter.format(price);

    } 


}