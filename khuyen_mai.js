function loadSPKhuyen_Mai() {
  fetch("../data/san_pham_khuyen_mai.json")
    .then(function (request) {
      if (!request.ok) {
        throw Error("Http Error:", request.status);
      }
      return request.json();
    })
    .then(function (data) {
      let html = "";
      for (let p of data) {
        html +=
          "<a href='./" + p.link + "' target='_blank' class='link_san_pham'>";
        html += `<div class='item' id='item_spk'>`;
        html += `<div class='img'>`;
        html += "<img class='img-full' src='" + p.img_url + "'/>";
        html += "</div>";
        html += `<div class='content'>`;
        html += "<p class='name'>" + p.name + "</p>";
        html += `<div class='flex-center'>`;
        html += "<img class='icon1' src='" + p.icon1_url + "'/>";
        html += "<span class='description'>" + "đã bán " + p.sold + "</span>";
        html += "<img class='icon2' src='" + p.icon2_url + "'/>";
        html += "<span class='description'>" + p.star + "</span><br />";
        html += "<div class='gia'>";
        html += "<div class='container_price_orgin'>";
        html += "<p class='price_orgin'>" + p.price_goc + "</p>";
        html += "</div>";
        html += `<div class='price-box'>`;
        html += "<p class='price'>" + p.price + "</p><br />";
        html += "</div>";
        html += "</div>";
        html += "</div>";
        html += "</div>";
        html += "</div>";
        html += "</div>";
        html += "</a>";
      }
      document.getElementById("spKhuyenMai").innerHTML = html;
      console.log(html);
    })
    .catch(function (err) {
      alert(err.mesage);
    });
}
function loadKhuyenMai() {
  loadSPKhuyen_Mai("../data/san_pham_khuyen_mai.json", "spKhuyenMai");
}
window.onload = loadKhuyenMai();
function countDown() {
  var ngayHienTai = new Date().getTime();
  var giang_sinh = new Date(2022, 11, 25, 0, 0, 0).getTime();
  thoigianConLai = giang_sinh - ngayHienTai;
  var giay = 1000;
  var phut = giay * 60;
  var gio = phut * 60;
  var ngay = gio * 24;
  var d = Math.floor(thoigianConLai / ngay);
  var h = Math.floor((thoigianConLai % ngay) / gio);
  var m = Math.floor((thoigianConLai % gio) / phut);
  var s = Math.floor((thoigianConLai % phut) / giay);
  document.getElementById("thoi_gian_con_lai").innerHTML =
    "CHỈ CÒN " + d + ":" + h + ":" + m + ":" + s;
}
setInterval(function () {
  countDown();
}, 1000);
// function addActiveCategory(id) {
//   document.getElementById("biscottiLink").classList.remove("activeCategory");
//   document.getElementById("granolaLink").classList.remove("activeCategory");
//   document.getElementById("butterLink").classList.remove("activeCategory");
//   document.getElementById("cerealLink").classList.remove("activeCategory");
//   document.getElementById(id).classList.add("activeCategory");
// }
