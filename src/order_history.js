//Best Seller
function loadOrder() {
    fetch("./order_history.json")
        .then(function (res) {
            if (!res.ok) {
                throw Error("Http Error:", res.status);
            }
            return res.json();
        })
        .then(function (data) {
            let order = "";
            for (let p of data) {
                order += "<div class='order_item'>";
                order += "<div class='item_product'>" +
                    "<p class = 'product_p1'>" + 'Tên Sản Phẩm' + "</p>" +

                    "<div class = 'product'>" + "<p class = 'name_pro'>" + "<image class='img_pro' src='./hinh/" + p.products[0].img1_url + "' />" + p.products[0].name_product + "</p>" +
                    "<p class = 'name_pro'>" + 'x' + p.products[0].quantity + "</p>" +
                    "</div>" +
                    "</div>";
                order += "<div class='item_element'>" +
                    "<p class = 'order_item_p1'>" + 'Mã Đơn Đặt hàng' + "</p>" +
                    "<p class = 'name_pro'>" + p.id + "</p>" +
                    "</div>";
                order += "<div class='item_element'>" +
                    "<p class = 'order_item_p1'>" + 'Thời Gian Đặt Hàng' + "</p>" +
                    "<p class = 'name_pro'>" + p.time + "</p>" +
                    "</div>";
                order += "<div class='item_element'>" +
                    "<p class = 'order_item_p1'>" + 'Tổng Thanh Toán' + "</p>" +
                    "<p class = 'name_pro'>" + p.total_order + "</p>" +
                    "</div>";
                order += "<div class='item_element'>" +
                    "<p class = 'order_item_p1'>" + 'Trạng Thái' + "</p>" +
                    "<p class = 'name_pro'>" + p.status + "</p>" +
                    "<a href='./danhgiasp.html'><button class='btn_order_detail'>" + 'Xem Chi Tiết' + "</button></a>" +
                    "</div>";
                order += "</div>";
            }
            document.getElementById("order").innerHTML = order;
        })
        .catch(function (err) {
            alert(err.message);
        })
}