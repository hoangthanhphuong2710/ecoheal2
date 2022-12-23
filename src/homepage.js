//Best Seller
function loadBestSeller(){
    fetch("./best_seller.json")
    .then(function(res){
        if(!res.ok){
            throw Error("Http Error:", res.status);
        }
        return res.json();
    })
    .then(function(data)
    {
        let bestseller = "";
        for(let p of data){
        bestseller += "<div class='bestseller_item'>"
        bestseller += "<image class='item_img' src='./hinh/" + p.img1_url + "' />";
        bestseller += "<p class = 'bestseller_item_p1'>" + p.name + "</p>";
        bestseller += "<div class = 'bestseller_item_p2'>" 
        bestseller += "<div class = 'p2_text'>" + "<image class = 'p2_img' src='./hinh/" + p.icon1_url + "' />" + "Đã bán " + p.sold + "</div>";
        bestseller += "<image class = 'p2_img' src='./hinh/" + p.icon2_url + "' />" + p.star + "</div>";
        bestseller += "<p class = 'bestseller_item_p3'>" + p.price + "</p>"
        bestseller += "</div>";
    }
    document.getElementById("best_seller").innerHTML=bestseller;
    }) 
    .catch(function(err){
        alert(err.message);
    })
}

//News
function loadNews(){
    fetch("./tin_tuc_song_khoe.json")
    .then(function(res){
        if(!res.ok){
            throw Error("Http Error:", res.status);
        }
        return res.json();
    })
    .then(function(data)
    {
        let news = "";
        for(let u of data){
        news += "<div class='news_item'>"
        news += "<image class='news_item_img' src='./hinh/" + u.img_url + "' />";
        news += "<p class = 'news_item_p1'>" + u.title + "</p>";
        news += "<a class = 'read_more' href=''>" + "Đọc thêm" + "</a>"
        news += "</div>";
    }
    document.getElementById("news").innerHTML=news;
    }) 
    .catch(function(err){
        alert(err.message);
    })
}

//Reviews
function loadReview(){
    fetch("./review.json")
    .then(function(res){
        if(!res.ok){
            throw Error("Http Error:", res.status);
        }
        return res.json();
    })
    .then(function(data)
    {
        let review = "";
        for(let y of data){
        review += "<div class='review_item'>"
        review += "<p class = 'review_item_p1'>" + y.content + "</p>";
        review += "<div class = 'review_customer'>" + "<image class='review_img' src='./hinh/" + y.img + "' />";
        review += "<p>" + y.user_name + "</p>" + "</div>";
        review += "</div>";
    }
    document.getElementById("review").innerHTML=review;
    }) 
    .catch(function(err){
        alert(err.message);
    })
}