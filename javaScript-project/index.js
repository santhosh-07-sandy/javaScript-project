// Project Name:cm to inches
function convert()
    {
       let cmVal = Number(document.getElementById("input").value)
       let inchVal = cmVal/2.5

       let result = document.getElementById("result")
       result.innerHTML = inchVal.toFixed(2) + " inches"
     }