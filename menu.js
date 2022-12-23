
function loadBestSeller() {
    loadProducts("../data/sản phẩm bán chạy.json", "bestseller")
}
function addActiveCategory(id) {
    document.getElementById("biscottiLink").classList.remove("activeCategory");
    document.getElementById("granolaLink").classList.remove("activeCategory");
    document.getElementById("butterLink").classList.remove("activeCategory");
    document.getElementById("cerealLink").classList.remove("activeCategory");

    document.getElementById(id).classList.add("activeCategory");
}
window.onload = loadBestSeller();