// Bài tập 1
var btn = document.getElementById('btn');
var ketQua = document.getElementById('ketqua');
var date = new Date() // Lấy ngày tháng năm
btn.onclick = function () {
    var mn
    var day = +document.getElementById('day').value;
    var month = + document.getElementById('month').value;
    var year = +document.getElementById('year').value;
    function mm(a) {
        switch (a) {
            case 1:
            case 3:
            case 5:
            case 7:
            case 8:
            case 10:
            case 12:
                return 31;
            case 4:
            case 6:
            case 9:
            case 11:
                return 30;
            case 2:
                return 28;
            default:
                break;
        }
    }
    if (day === 1) {
        ketQua.innerHTML += `Ngày trước đó: ${mm(month - 1)}/${month - 1}/${year}`;
        ketQua.innerHTML += `Ngày sau đó${day + 1}/${month}/${year}`;
        return;
    }

    if (day === 30) {
        if (mm(month) === 30) {
            ketQua.innerHTML += ` Ngày sau đó: 1 / ${month + 1} /${year}`;
        } else {
            ketQua.innerHTML += `Ngày sau đó: ${day + 1}/${month}/${year}`;
        }
        ketQua.innerHTML += `Ngày trước đó :${day - 1}/${month}/${year}`;
        return;
    }
    if (day === 31) {
        if (mm(month) === 31) {
            ketQua.innerHTML += `Ngày sau đó: 1/${month + 1}/${year}`;
        }
        ketQua.innerHTML += `Ngày trước đó: ${day - 1}/${month}/${year}`;
        return;
    }

    if (day === 28) {
        if (mm(month) === 28)
            ketQua.innerHTML += `Ngày sau đó: 1/${month + 1}/${year}`;
        ketQua.innerHTML += ` Ngày trước đó: ${day - 1}/${month}/${year}`;
        return;
    }
    console.log(`${day + 1}/${month}/${year}`);
    console.log(`${day - 1}/${month}/${year}`);


    ketQua.innerHTML =
        `Ngày sau đó: ${day + 1}/${month}/${year} Ngày trước đó: ${day - 1}/${month}/${year}`;
}

// Bài tập 2
var btn_1 = document.getElementById("btn_1");
var ketqua_1 = document.getElementById("ketqua_1");

btn_1.onclick = function () {
    var month_1 = +document.getElementById("month_1").value;
    var year_1 = +document.getElementById("year_1").value;
    if ((year_1 % 4 === 0 && year_1 % 100 !== 0 && year_1 % 400 !== 0) || (year_1 % 100 === 0 && year_1 % 400 === 0)) {
        switch (month_1) {
            case 1:
            case 3:
            case 5:
            case 7:
            case 8:
            case 10:
            case 12:
                ketqua_1.innerHTML = `Tháng ${month_1} có :31 ngày  ${year_1} là năm nhuần`
                break;
            case 4:
            case 6:
            case 9:
            case 11:
                ketqua_1.innerHTML = `Tháng ${month_1} có :30 ngày <br> ${year_1} là năm nhuần`
                break;
            case 2:
                ketqua_1.innerHTML = `Tháng ${month_1} có :29 ngày <br> ${year_1} là năm nhuần`
                break;
            default:
                break;
        }
    } else {
        switch (month_1) {
            case 1:
            case 3:
            case 5:
            case 7:
            case 8:
            case 10:
            case 12:
                ketqua_1.innerHTML = `Tháng ${month_1} có :31 ngày <br> ${year_1} không là năm nhuần`
                break;
            case 4:
            case 6:
            case 9:
            case 11:
                ketqua_1.innerHTML = `Tháng ${month_1} có :30 ngày <br> ${year_1} không là năm nhuần`
                break;
            case 2:
                ketqua_1.innerHTML = `Tháng ${month_1} có :28 ngày <br> ${year_1} không là năm nhuần`
                break
            default:
                break;
        }

    }

}


// Bài tập 3
var btn_number = document.getElementById("btn_number");
var ketqua_number = document.getElementById("ketqua_number");

btn_number.onclick = function () {
    var number = document.getElementById("number").value;
    if (+number)
        switch (+number[0]) {
            case 1: ketqua_number.innerHTML += "Một trăm "; break;
            case 2: ketqua_number.innerHTML += "Hai trăm "; break;
            case 3: ketqua_number.innerHTML += "Ba trăm "; break;
            case 4: ketqua_number.innerHTML += "Bốn trăm "; break;
            case 5: ketqua_number.innerHTML += "Năm trăm "; break;
            case 6: ketqua_number.innerHTML += "Sáu trăm "; break;
            case 7: ketqua_number.innerHTML += "Bảy trăm "; break;
            case 8: ketqua_number.innerHTML += "Tám trăm "; break;
            case 9: ketqua_number.innerHTML += "Chín trăm "; break;
        }
    if (+number[1] === 0 && +number[2] === 0) {
        return;
    } else if (+number[1] === 0) {
        ketqua_number.innerHTML += "lẻ";
    }

    switch (+number[1]) {
        case 1: ketqua_number.innerHTML += "mười "; break;
        case 2: ketqua_number.innerHTML += "hai mươi "; break;
        case 3: ketqua_number.innerHTML += "ba mươi "; break;
        case 4: ketqua_number.innerHTML += "bốn mươi "; break;
        case 5: ketqua_number.innerHTML += "năm mươi "; break;
        case 6: ketqua_number.innerHTML += "sáu mươi "; break;
        case 7: ketqua_number.innerHTML += "bảy mươi "; break;
        case 8: ketqua_number.innerHTML += "tám mươi "; break;
        case 9: ketqua_number.innerHTML += "chín mươi "; break;
    }

    switch (+number[2]) {
        case 1: ketqua_number.innerHTML += "một "; break;
        case 2: ketqua_number.innerHTML += "hai "; break;
        case 3: ketqua_number.innerHTML += "ba "; break;
        case 4: ketqua_number.innerHTML += "bốn "; break;
        case 5: ketqua_number.innerHTML += "lăm "; break;
        case 6: ketqua_number.innerHTML += "sáu "; break;
        case 7: ketqua_number.innerHTML += "bảy "; break;
        case 8: ketqua_number.innerHTML += "tám "; break;
        case 9: ketqua_number.innerHTML += "chín "; break;
    }
}

