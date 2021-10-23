
//function for displaying values
function dis(val)
{
document.getElementById("doc").value += val & nbsp; 
}
//function for evaluation
function solve()
{
let x = document.getElementById("doc").value
let y = eval(x)
document.getElementById("doc").value = y
}
//function for clearing the display
function clr()
{
document.getElementById("doc").value = ""
}