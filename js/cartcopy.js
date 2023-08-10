let btncart = document.querySelector(".btncart")
let sizebls = document.querySelector("#Sizebls")
let quintity = document.querySelector("#quantity")
const smImgELAll2 = document.querySelectorAll(".images-sm img")

let btnx = document.querySelector(".btnx")
let danger = document.querySelector(".danger")
let prceAll = document.querySelector(".prceall")
var num = 0

//   img
var imgselect = ""

for (const item of smImgELAll2) {
    item.addEventListener('click', _ => {
        imgselect = item.src
    })
}




// color
var colorselect = ""

colorboxs = document.querySelectorAll(".color");
for (const iterator of colorboxs) {
    iterator.addEventListener('click', _ => {
        colorselect = iterator.getAttribute("data-color")
    })
}


 















let userAll = JSON.parse(localStorage.getItem("users")) || [];



btncart.addEventListener('click', _ => {
    let newPro = {
        imgselect: imgselect,
        sizebls: sizebls.value,
        quintity: quintity.value,
        colorselect: colorselect,
        num: num,
    }
    userAll.push(newPro)
 
     showData()
     
    localStorage.setItem("users", JSON.stringify(userAll))
    clearData()
})


function showData() {
    let cont = ''
    var sum =0
    for (let i = 0; i < userAll.length; i++) {

        cont  += ` 

                     
        <div class="row gap-lg-5 gap-2 btncluseclass d-flex  align-items-center justify-content-center mt-3">
                        <div class="col col-lg-3 ">
                            <div class="d-flex flex-column flex-lg-row align-items-center gap-lg-5 gap-0  ">
                                <img src="${userAll[i].imgselect} " class="img-fluid  "  alt="">
                                <p class=" gap-lg-3 gap-3 d-none d-lg-block  ">
                                    T-Shirt Summer Vibes <br>
                                    <span class="text-secondary">#261311</span>
                                </p>
                            </div>
                        </div>
                         
                        <div class="col">
                            <p>${userAll[i].colorselect}</p>
                        </div>

                        <div class="col">
                            <p>${userAll[i].sizebls}</p>
                        </div>
                        <div class="col">
                            <div
                                class=" d-flex flex-row align-items-center justify-content-center   bord-b-b w-50  mb-3  ">
                               
                                 <span id="quantity">${userAll[i].quintity}</span>
 
                             </div>
                        </div>
                        <div class="col">
                            <p>${userAll[i].quintity*69}</p>


                        </div>
                         
                             <button onclick="deleteData(${i})"  class=" small-danger col btn-close me-2 mb-2 bg-light "></button>
 
          </div>
                      
           <br>   
            
`
       

        var sum = sum + (userAll[i].quintity*69)  
}
   prceAll.innerHTML = sum 
    btnx.innerHTML = cont;
    clearData()
}
 
 




// delete 
function deleteData(i) {
    --num
    if (num == 0) {
        danger.textContent =''
    } else {
        danger.textContent = num
    }
     userAll.splice(i, 1)
    localStorage.users = JSON.stringify(userAll)
    showData()
}


// clear input
function clearData() {
 
         sizebls.value=''
             quintity.value= 0
                

}


// danger
 
btncart.addEventListener('click', i => {
      num++
    danger.innerHTML = num
  

})


















