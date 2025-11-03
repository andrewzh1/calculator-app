const display = document.getElementById("display")
let numArr = document.querySelectorAll(".num-btn")
let opArr = document.querySelectorAll(".op-btn")

numArr.forEach(function(num)
{
    num.addEventListener("click", function()
    {
        display.textContent += num.textContent
    })
})

opArr.forEach(function(op)
{
    op.addEventListener("click", function()
    {
        display.textContent += op.textContent
    })
})

