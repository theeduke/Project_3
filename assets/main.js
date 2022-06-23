const button5 = document.querySelector("#plusFive")
const indicator = document.querySelector("#number-indicator")
const disp = document.querySelector("#display-heading")
const press = document.querySelector("#plusTen")
const sumTwenty = document.querySelector("#plusTwenty")
const  btn = document.querySelector("#plusFifteen")
button5.addEventListener('click', () => {
  disp.textContent = "added 5"
  indicator.textContent = (parseInt(indicator.textContent) + 5).toString()
})
press.addEventListener('click',()=>{
  disp.textContent = "added 10"
  indicator.textContent = (parseInt(indicator.textContent) + 10).toString()
})

sumTwenty.addEventListener('click',() => {
  disp.textContent = "added 20"
  indicator.textContent = (parseInt(indicator.textContent) + 20).toString()
}
  )
btn.addEventListener('click',() => {
  disp.textContent = "added 15"
  indicator.textContent = (parseInt(indicator.textContent) + 15).toString()
})