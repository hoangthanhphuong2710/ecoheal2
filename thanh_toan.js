var modal = document.getElementById('myModal');
var span = document.getElementById('closeModal');

function thanhToan() {
	modal.style.display = 'block';
	localStorage.setItem("giohang", JSON.stringify([]));
}

span.onclick = function () {
	modal.style.display = 'none';
	window.location.replace('./menu.html');
};

window.onclick = function (event) {
	if (event.target == modal) {
		modal.style.display = 'none';
	}
};
function formatTien(tien) {
	return `${tien.toLocaleString('vi')}VNĐ`;
}

function layGioHang() {
	const data = localStorage.getItem('giohang');
	const giohang = data ? JSON.parse(data) : [];

	let tongtien = 0;

	giohang.forEach(p => (tongtien += p.giatien * p.soluong));

	return { giohang, tongtien };
}

function loadListProduct() {
	const { giohang, tongtien } = layGioHang();

	let html = '';
	html += '<tr>';
	html += '<th>Tên Sản Phẩm:</th>';
	html += '<th>Đơn giá:</th>';
	html += '<th>Số lượng:</th>';
	html += '<th>Thành tiền:</th>';
	html += '</tr>';
	for (const p of giohang) {
		const giatienTheoSoLuong = p.giatien * p.soluong;

		const tien = formatTien(p.giatien);
		const formatTienTheoSoLuong = formatTien(giatienTheoSoLuong);

		html += `<tr>`;
		html += `<td>`;
		html += `<div class="flex-box items-center">`;
		html += `<img class="product-img" src=".${p.hinh}" alt="hinh_sanpham" />`;
		html += `<p class="margin-left-10">${p.ten}</p>`;
		html += `</div>`;
		html += `</td>`;
		html += `<td>${tien}</td>`;
		html += `<td>${p.soluong}</td>`;
		html += `<td>${formatTienTheoSoLuong}</td>`;
		html += `</tr>`;
	}

	const tongThanhToan = tongtien + 20000;

	document.getElementById('product-table').innerHTML = html;
	document.getElementById('tongTien').innerHTML = formatTien(tongtien);
	document.getElementById('tongThanhToan').innerHTML = formatTien(tongThanhToan);
}

window.onload = loadListProduct();
