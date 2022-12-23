
function loadNews(jsonUrl, contentId) {
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
                html += `<div class='item'>`;
                html += `<div class='img'>`;
                // html += "<img class='img-full' src='../img" + p.img_url + "'/>";
                html += "<img class='img-full' src='../img" + p.img_url + "'/>";
                html += "</div>";
                html += `<div class='content'>`;
                html += "<p class='name'>" + p.name + "</p>";
                html += "<p class='daynews'>" + p.day + "</p>";
                html += "<p class='detail'>" + p.detail + "</p>";
                html += `<div class='docthem-box'>`;
                html += `<a class='buttonadd' href='./tintucchitiet.html?id=${p.id}&type=${contentId}'target='_bank'>${p.add}</a>`;
                html += "</div>";
                html += "</div>";
                html += "</div>";
            }
            document.getElementById(contentId).innerHTML = html;
        })
        .catch(function (err) {
            alert(err.mesage);
        });
}
function addActiveNews(id) {
    document.getElementById("sukienLink").classList.remove("activeCategory");
    document.getElementById("songkhoeLink").classList.remove("activeCategory");
    document.getElementById(id).classList.add("activeCategory");
}

