

function increment() {
    var quantityInput = document.getElementById('quantity');
    var quantity = parseInt(quantityInput.value);

    if (quantity < 100) {
        quantity++;
    }

    quantityInput.value = quantity;
}

function decrement() {
    var quantityInput = document.getElementById('quantity');
    var quantity = parseInt(quantityInput.value);

    if (quantity > 0) {
        quantity--;
    }

    quantityInput.value = quantity;
}


let headerEl = document.querySelector("nav");
let El = document.querySelector(".updwn");
onscroll = _ => {
    if (scrollY > 0) {
        headerEl.classList.add("bg-dark", "py-4")
    } else {
        headerEl.classList.remove("bg-dark", "py-4")

    }
    if (scrollY > 500) {
        El.classList.remove("d-none")
    } else {
        El.classList.add("d-none")
    }
  
}
 
   onload = _ => {
    if (scrollY > 10) {
       headerEl.classList.add("bg-dark", "py-4")
     }
    else {
        headerEl.classList.remove("bg-dark", "py-4")
        }
}



// updawn







// box-img

const smImgELAll = document.querySelectorAll(".images-sm img"),
    bigImgEl = document.querySelector(".images-lg img");
colorboxs = document.querySelectorAll(".color");

// colorboxs[0] = smImgELAll[1].src 
// colorboxs[1] = smImgELAll[2].src
// colorboxs[2] = smImgELAll[3].src
// colorboxs[3] = smImgELAll[0].src 

colorboxs[0].onclick = _ => {
    bigImgEl.src = smImgELAll[1].src;
    cleanBorder()
    colorboxs[0].style.border = "dashed 4px #ff910092"

}

colorboxs[1].onclick = _ => {
    bigImgEl.src = smImgELAll[2].src;
    cleanBorder()
    colorboxs[1].style.border = "dashed 4px #ff910092"
}
colorboxs[2].onclick = _ => {
    bigImgEl.src = smImgELAll[3].src;
    cleanBorder()
    colorboxs[2].style.border = "dashed 4px #ff910092"
}
colorboxs[3].onclick = _ => {
    bigImgEl.src = smImgELAll[0].src;
    cleanBorder()
    colorboxs[3].style.border = "dashed 4px #ff910092"
}


smImgELAll[0].style.border = "dashed 2px #917FB3"
for (const item of smImgELAll) {
    item.onclick = _ => {
        cleanBorder()
        item.style.border = "solid 2px black"
        bigImgEl.src = item.src;
    }
}

function cleanBorder() {
    for (const img of smImgELAll) {
        img.style.border = ""
    }

    for (const iterator of colorboxs) {
        iterator.style.border = ""
    }
}



