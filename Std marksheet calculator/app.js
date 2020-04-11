// const calcy = () =>{
//     let wd = document.getElementById('wd').value;
//     let maths = document.getElementById("maths").value;
//     let comp = document.getElementById("comp").value;
//     let phy = document.getElementById("phy").value;

//     let totalGrades = Number(wd) + Number(maths) + Number(comp) + Number(phy);
//     alert(totalGrades)
    
//     let perc = (totalGrades/400) * 100;
//     alert(perc)

//     if (perc >= 90 && perc <= 100){
//         grade = "A+1"
//     }
//     else if(perc >= 80 && perc <= 90){
//         grade = "A"
//     }
//     else if(perc >= 70 && perc <= 80){
//         grade = "B"
//     }
//     else if(perc >= 60 && perc <= 70){
//         grade = "C"
//     }
//     else if(perc >= 50 && perc <= 60){
//         grade = "D"
//     }
//     else{
//         grade = "Fail"
//     }

//     if (perc >= 50){
//         document.getElementById("showData").innerHTML = `Out of 400 your Total is ${totalGrades} and Percentage is ${perc}%. <br> Your Grade is ${grade} You're Pass`
//     }else{
//         document.getElementById("showData").innerHTML = `Out of 400 your Total is ${totalGrades} and Percentage is ${perc}%. <br> Your Grade is ${grade} You're Fail`
//     }
// }


function calculate(){
    var wd = document.getElementById('wd').value;
    var maths = document.getElementById("maths").value;
    var comp = document.getElementById("comp").value;
    var phy = document.getElementById("phy").value;

    var totalGrades = Number(wd) + Number(maths) + Number(comp) + Number(phy);
    // alert(totalGrades)
    
    var perc = (totalGrades/400) * 100;
    // alert(perc)

    if (perc >= 90 && perc <= 100){
        grade = "A+1"
    }
    else if(perc >= 80 && perc <= 90){
        grade = "A"
    }
    else if(perc >= 70 && perc <= 80){
        grade = "B"
    }
    else if(perc >= 60 && perc <= 70){
        grade = "C"
    }
    else if(perc >= 50 && perc <= 60){
        grade = "D"
    }
    else{
        grade = "Fail"
    }

    if (perc >= 50){
        document.getElementById("showData").innerHTML = `Out of 400 your Total is ${totalGrades} and Percentage is ${perc}%. <br> Your Grade is ${grade} You're Pass`
    }else{
        document.getElementById("showData").innerHTML = `Out of 400 your Total is ${totalGrades} and Percentage is ${perc}%. <br> Your Grade is ${grade} You're Fail`
    }
}