
let iw1 = document.querySelector(".iw1")
let iw2 = document.querySelector(".iw2")
let iw3 = document.querySelector(".iw3")

iw1.addEventListener('click', _ => {
  iw1.classList.toggle('swsan')
  iw2.classList.remove('swsan')
  iw3.classList.remove('swsan')
})
iw2.addEventListener('click', _ => {
  iw2.classList.toggle('swsan')
  iw1.classList.remove('swsan')
  iw3.classList.remove('swsan')
})
iw3.addEventListener('click', _ => {
  iw3.classList.toggle('swsan')
  iw1.classList.remove('swsan')
  iw2.classList.remove('swsan')
})