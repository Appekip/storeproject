
function addCart(){
    alert("Item added to cart!");
}


fillSite();
async function fillSite(){
let category = document.getElementById("ProdCat").value;
console.log(category);
    const response = await fetch(`/Data/"${category}"`);
    const data = await response.json();
    console.log(data);
}