
function loadNewsDetail(jsonUrl, contentId, URLid) {
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
                if (p.id == URLid) {
                    html += `<div class='item'>`;
                    html += `<div class='contentchitiet'>`;
                    html += "<h2 class='name'>" + p.name + "</h2>";
                    html += "<p class='daynews'>" + p.day + "</p>";
                    html += "<p class='content1'>" + p.content_mo_dau + "</p>";
                    html += `<div class='img'>`;
                    html += "<img class='img-full' src='../img" + p.img_url + "'/>";
                    html += "</div>";
                    html += "<p class='content2'>" + p.content + "</p>";
                    html += `<div class='box'>`;
                    html += "<span>Share</span>"
                    html += "<img class='share' src='../img" + p.img_share + "'/>";
                    html += "</div>";
                    html += `<div class='box'>`;
                    html += "<span>Like</span>"
                    html += "<img class='like' src='../img" + p.img_like + "'/>";
                    html += "</div>";
                    html += "</div>";
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
    const jsonUrl = data.type == "sukien" ? "../data/tin tức sự kiện.json" : "../data/tin_tuc_song_khoe.json";
    loadNewsDetail(jsonUrl, "tintuc_chitiet", data.id)
}
window.onload = loadNewWithID();
