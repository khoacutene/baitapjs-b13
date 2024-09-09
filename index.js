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
        price_1 = (1 * tienDien_1)
        price_2 = (distance - 1) * tienDien_1
        price_3 = (distance - 50) * tienDien_2
        price =  price_1 + price_2 + price_3

    } else if (100 < distance && distance <= 200) {
        price_1 = (1 * tienDien_1)
        price_2 = (distance - 1) * tienDien_1
        price_3 = (distance - 50) * tienDien_2
        price_4 = (distance - 100) * tienDien_3
        price = price_1 + price_2 + price_3 + price_4

    } else if (200 < distance && distance <= 350 ) {
        price_1 = (1 * tienDien_1)
        price_2 = (distance - 1) * tienDien_1
        price_3 = (distance - 50) * tienDien_2
        price_4 = (distance - 100) * tienDien_3
        price_5 = (distance - 150) * tienDien_4
        price = price_1 + price_2 + price_3 + price_4 + price_5

    } else if (350 > distance) {
        price_1 = (1 * tienDien_1)
        price_2 = (distance - 1) * tienDien_1
        price_3 = (distance - 50) * tienDien_2
        price_4 = (distance - 100) * tienDien_3
        price_5 = (distance - 150) * tienDien_4
        price_6 = (distance - 250) * tienDien_5
        price = price_1 + price_2 + price_3 + price_4 + price_5 + price_6

    } else {
        alert("Làm ơn nhập thông tin")
    }

    const formatter = new   Intl.NumberFormat("vi-VN", {currency: "VND", style: "currency"});

    const pTien = document.getElementById("pTien");

    pTien.innerHTML =  formatter.format(price);

}

// Nhà Dân
const nDanHoaDon = 4.5
const nDanDichVu = 20.5
const nDanThueKenh = 7.5

// Doanh Nghiệp
const dNghiepHoaDon = 15
const dNghiepDichVu = 75
const dNghiepDichVu_them = 75
const dNghiepThueKenh = 50

const getTypeCap = () => {
    const dan = document.getElementById("nhaDan")
    const nghiep = document.getElementById("doanhNghiep")

    let type = "";

    if (dan.checked) {
        type = "NHA_DAN";
    } else if (nghiep.checked) {
        type = "DOANH_NGHIEP";
    } 
    return type;
}

const calculateDetail = (NHADAN, DOANHNGHIEP) => {
    let price = 0
    let price_1 = 0
    let price_2 = 0
    let price_3 = 0

    if (NHADAN) {
        price_1 = (nDanDichVu * 1) * NHADAN
        price_2 = (nDanHoaDon * 1) 
        price_3 = NHADAN * nDanThueKenh
        price = price_1 + price_2 + price_3
    }
    if (DOANHNGHIEP) {
        price_1 = dNghiepHoaDon * 1
        price_2 = dNghiepDichVu * 1
        price_3 = DOANHNGHIEP * dNghiepThueKenh
        price = price_1 + price_2 + price_3
    }
    const formatter = new   Intl.NumberFormat("vi-VN", {currency: "VND", style: "currency"});

    document.getElementById("pThongBao").innerHTML = formatter.format(price  );
}

function calculate() {
    const type = getTypeCap();
    const NHADAN = document.getElementById("txtKhachHang").value
    const DOANHNGHIEP = document.getElementById("txtKenh").value

    switch (type) {
        case "NHA_DAN":
            calculateDetail (NHADAN, DOANHNGHIEP, nDanHoaDon,nDanDichVu, nDanThueKenh);
            break;
        case "DOANH_NGHIEP":
            calculateDetail(NHADAN, DOANHNGHIEP, dNghiepHoaDon, dNghiepDichVu, dNghiepThueKenh);
            break;
    }
}
