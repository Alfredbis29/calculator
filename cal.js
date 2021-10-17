
//function for displaying values
function dis(val)
{
document.getElementById("atho").value += val & nbsp; 
}
//function for evaluation
function solve()
{
let x = document.getElementById("atho").value
let y = eval(x)
document.getElementById("atho").value = y
}
//function for clearing the display
function clr()
{
document.getElementById("atho").value = ""
}