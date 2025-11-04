const display = document.getElementById("display")
let numArr = document.querySelectorAll(".num-btn")
let opArr = document.querySelectorAll(".op-btn")
let clearBtn = document.getElementById("clear-btn")
let evalBtn = document.getElementById("eval-btn")

numArr.forEach(function(num)
{
    num.addEventListener("click", function()
    {
        if(display.textContent == 0)
        {
            display.textContent = num.textContent
        }
        else
        {
            display.textContent += num.textContent
        }
    })
})

opArr.forEach(function(op)
{
    op.addEventListener("click", function()
    {
        display.textContent += op.textContent
    })
})

clearBtn.addEventListener("click", function()
{
    display.textContent = "0"
})

evalBtn.addEventListener("click", function()
{
    let result = eval(display.textContent)
    display.textContent = result
})