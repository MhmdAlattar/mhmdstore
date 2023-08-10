let btncart = document.querySelector(".btncart")
let sizebls = document.querySelector("#Sizebls")
let quintity = document.querySelector("#quantity")
const smImgELAll2 = document.querySelectorAll(".images-sm img")

 
// let colborlack = document.querySelector(".BLC")
// let colorblue = document.querySelector(".BC")
// let colorbayj = document.querySelector(".WC")
// let colorwithe = document.querySelector(".WIC")


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
// تعريف المتغير وتهيئته بقيمة صفر
// var counter = 0;

// // العنصر الذي سيتم تحديث قيمته
// var display = document.getElementById("counter-display");
// // زيادة القيمة عند الضغط على زر الزائد
// document.getElementById("increment-button").addEventListener("click", function () {
//     counter++;
//     display.textContent = counter;
// });





let danger = document.querySelector(".danger")
var num = 0
btncart.addEventListener('click', _ => {

    num++
    danger.textContent = num
   
})
 
 

// let price1
// let price = document.querySelector(".pricee")
//  if (quintity.value == 2) {
//       price1 = 139.98
// }
// else if (quintity.value == 3){
//       price1 = 209.96

// } 






let btnx = document.querySelector(".btnx")
// let BX = document.querySelector(".btncluse")
//  let userAll = JSON.parse(localStorage.getItem("users")) || [];


btncart.addEventListener('click', _ => {

    let sizechart = sizebls.value
    let quintityselect = quintity.value
     
    let userObject = {}
     btnx.innerHTML += ` 

                        
        <div class="row gap-lg-5 gap-0 btncluseclass">
                        <div class="col col-lg-3 ">
                            <div class="d-flex flex-column flex-lg-row align-items-center gap-lg-5 gap-0 ">
                                <img src="${imgselect}" alt="">
                                <p class=" gap-lg-3 gap-3">
                                    T-Shirt Summer Vibes <br>
                                    <span class="text-secondary">#261311</span>
                                </p>
                            </div>
                        </div>
                        <div class="col">
                            <p>${colorselect}</p>
                        </div>

                        <div class="col">
                            <p>${sizechart}</p>
                        </div>
                        <div class="col">
                            <div
                                class=" d-flex flex-row align-items-center justify-content-center gap-4 bord-b-m w-75    p-2 mb-2 ">
                               
                                <button onclick="decrement()">-</button>
                                <span id="quantity">${ quintityselect}</span>
 
                                     <button onclick="increment()">+</button>
                            </div>
                        </div>
                        <div class="col">
                            <p>69.99</p>


                        </div>
                         
                             <button onclick="closeContent(this.parentNode)"  class=" small-danger col btn-close me-2 mb-2 bg-light "></button>
 
          </div>
        
                         
                              <br>   
            
`

    sizebls.value=""
    quintity.value=0



    





    //  store local Storage

    // localStorage.setItem()


    // userObject.uesr_sizebls = sizechart;
    // userObject.uesr_quintity = quintityselect;
    // userObject.uesr_img = imgselect;
    // userObject.uesr_color = colorselect;
 
    //  userAll.push(userObject)
    // console.log(userAll);
    // localStorage.setItem("users", JSON.stringify(userAll))


 
 })
 

function closeContent(element) {
    element.remove();
}

//  getitem/
function showuser() {
    for (const users of userAll) {
        console.log(users.uesr_sizebls);
    }
}

showuser()







//    اغلاق المنتج
// let BCX = document.querySelector(".btnxcluse")
//  let BCC = document.querySelector(".btncluseclass")
// console.log(BCX);

// BCX.addEventListener('click', _ => {
//     BCC.classList.add("d-none")
// })














    // // Example starter JavaScript for disabling form submissions if there are invalid fields
    // (() => {
    //     'use strict'

    //     // Fetch all the forms we want to apply custom Bootstrap validation styles to
    //     const forms = document.querySelectorAll('.needs-validation')

    //     // Loop over them and prevent submission
    //     Array.from(forms).forEach(form => {
    //         form.addEventListener('submit', event => {
    //             if (!form.checkValidity()) {
    //                 event.preventDefault()
    //                 event.stopPropagation()
    //             }

    //             form.classList.add('was-validated')
    //         }, false)
    //     })
    // })()