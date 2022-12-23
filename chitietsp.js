function themvaoGioHang(ten, giatien, hinh) {
    const data = localStorage.getItem('giohang');
    const giohang = data ? JSON.parse(data) : [];

    const soluong = parseInt(document.getElementById('soluong').innerHTML);

    const sanpham = { giatien, ten, soluong, hinh };
    giohang.push(sanpham);
    console.log("gio hang", giohang)

    localStorage.setItem('giohang', JSON.stringify(giohang));
}
function congTruSoLuong(type) {
    const content = document.getElementById('soluong');
    let ketqua = parseInt(content.innerHTML);

    if (type == 'cong') ketqua++;
    else {
        if (ketqua > 1) ketqua--;
    }

    content.innerHTML = ketqua;
}
function loadNewsDetail(jsonUrl, contentId, URLid) {
    fetch(jsonUrl)
        .then(function (request) {
            if (!request.ok) {
                throw Error("Http Error:", request.status);
            }
            return request.json();
        })
        .then(function (data) {
            console.log("htnl", data)

            let html = "";
            for (let p of data) {
                if (p.id == URLid) {

                    html += `<div class='container'>`;
                    html += `<div class='img'>`;
                    html += "<img class='img-full' src='../img" + p.img_url + "'/>";
                    html += "</div>";
                    html += `<div class='contentchitiet'>`;
                    html += "<h2 class='name'>" + p.name + "</h2>";
                    html += "<span class='starnumber'>" + p.star + "</span>";
                    html += "<img class='icon2'src='../img" + p.icon2_url + "'/>";
                    html += "<img class='icon2'src='../img" + p.icon2_url + "'/>";
                    html += "<img class='icon2'src='../img" + p.icon2_url + "'/>";
                    html += "<img class='icon2'src='../img" + p.icon2_url + "'/>";
                    html += "<img class='icon2'src='../img" + p.icon2_url + "'/>";
                    html += `<span class='feedbackNumber'> | ${p.feedback} đánh giá </span>`;
                    html += `<span class='soldNumber'>| ${p.sold} đã bán</span>`;
                    html += `<hr class='hr-green'>`
                    html += `<h3 class='price'>GIÁ: ${p.price}</h3>`;
                    html += `<span>SỐ LƯỢNG  </span > `;
                    html += `<span class='math-button'onclick='congTruSoLuong("tru")'>-</span> `;
                    html += `<span id='soluong' > 1</span > `;
                    html += `<span class='math-button'onclick='congTruSoLuong("cong")'>+</span> `;
                    html += `<div class='container soluongbox' > `;
                    html += `<div class='buy' onclick='themvaoGioHang("${p.name}", "${p.price}", "./img${p.img_url}")'>Thêm vào giỏ hàng</div>`;
                    html += "<a href='thanh_toan.html' class='muangay-box'>" + "Mua ngay" + "</a>";
                    html += "</div>";
                    html += `<hr class ='hr-green' > `
                    html += "</div>";
                    html += "</div>";
                    html += `<div class='mota' > `;
                    html += "<h3>MÔ TẢ SẢN PHẨM</h3>"
                    html += "<p class='motaContent'>" + p.describe + "<p/>";
                    html += "</div>";
                }
            }
            document.getElementById(contentId).innerHTML = html;
        })
        .catch(function (err) {
            alert(err.mesage);
        });
}

function loadNewWithID() {
    let url = document.location.href,
        params = url.split("?")[1].split("&"),
        data = {},
        tmp;
    for (let i = 0; i < params.length; i++) {
        tmp = params[i].split("=");
        data[tmp[0]] = decodeURIComponent(tmp[1]); // key = values
    }
    const JsonID = {
        "granolaCategory": "../data/granola.json",
        "butterCategory": "../data/Bo_an_kieng.json",
        "biscottiCategory": "../data/biscotti.json",
        "cerealCategory": "../data/Hat_ngu_coc.json",
        "bestseller": "../data/sản phẩm bán chạy.json"
    }
    loadNewsDetail(JsonID[data.type], "sanpham_chitiet", data.id)
}
window.onload = loadNewWithID();


