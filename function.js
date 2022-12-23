function loadProducts(jsonUrl, contentId) {
    fetch(jsonUrl)
        .then(function (request) {
            if (!request.ok) {
                throw Error("Http Error:", request.status);
            }
            return request.json();
        })
        .then(function (data) {
            let html = "";
            for (let p of data) {
                html += `<a class='item' href='./chitietsp.html?id=${p.id}&type=${contentId}'target='_bank'>`;
                html += `<div class='img img-spkhac'>`;
                // html += "<img class='img-full' src='../img" + p.img_url + "'/>";
                html += `<img class='img-full img-full-spkhac' src='../img${p.img_url}' />`;
                html += "</div>";
                html += `<div class='content'>`;
                html += "<p class='name'>" + p.name + "</p>";
                html += `<div class='flex-center'>`;
                html += "<img class='icon1' src='../img" + p.icon1_url + "'/>";
                html += "<span class='description'>" + "đã bán " + p.sold + "</span>";
                html += "<img class='icon1' src='../img" + p.icon2_url + "'/>";
                html += "<span class='description'>" + p.star + "</span><br />";
                html += "</div>";
                html += `<div class='price-box'>`;
                html += "<p class='price'>" + p.price + "</p><br />";
                html += "</div>";
                html += "</div>";
                html += "</a>";
            }
            document.getElementById(contentId).innerHTML = html;
        })
        .catch(function (err) {
            alert(err.mesage);
        });
}