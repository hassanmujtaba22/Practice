// alert("I LOVE YOU MERI JAAN")

var engMark = parseInt(prompt("Total Mark of English: ",0))
var mathsMark = parseInt(prompt("Total Mark of Maths: ",0))
var urduMark = parseInt(prompt("Total Mark of Urdu: ",0))
var sciMark = parseInt(prompt("Total Mark of Science: ",0))
var sindhiMark = parseInt(prompt("Total Mark of Sindhi: ",0))
var islMark = parseInt(prompt("Total Mark of Islamiat: ",0))
var sstMark = parseInt(prompt("Total Mark of Social Studies: ",0))
var compMark = parseInt(prompt("Total Mark of Computer: ",0))

var total_marks = engMark + mathsMark + urduMark + sciMark + sindhiMark + islMark + sstMark + compMark

function calculate(){

    var thename = document.getElementById("stdName")
    var stdName = thename.value
    var upper = stdName.charAt(0).toUpperCase() + stdName.substring(1);
    stdName = upper

    var eng = document.getElementById('eng').value;
    var maths = document.getElementById("maths").value;
    var urdu = document.getElementById("urdu").value;
    var sci = document.getElementById("sci").value;
    var sindhi = document.getElementById("sindhi").value;
    var isl = document.getElementById("isl").value;
    var sst = document.getElementById("sst").value;
    var comp = document.getElementById("comp").value;

    var obtainedMark = Number(eng) + Number(maths) + Number(urdu) + Number(sci) + Number(sindhi) + Number(isl) + Number(sst) + Number(comp);
    
    var perc = (obtainedMark/total_marks) * 100;

    
    if (perc >= 80 && perc <= 100){
        grade = "A+1"
    }
    else if(perc >= 70 && perc <= 79){
        grade = "A"
    }
    else if(perc >= 60 && perc <= 69){
        grade = "B"
    }
    else if(perc >= 50 && perc <= 59){
        grade = "C"
    }
    else if(perc >= 34 && perc <= 49){
        grade = "D"
    }
    else{
        grade = "E"
    }

    if (perc >= 34){
        document.getElementById("showData").innerHTML = `Total Marks of all Subjects is ${total_marks}.<br> Obtained Marks of all subjects is ${obtainedMark}. <br> Percentage ${perc}%. <br> Grade ${grade}. <br> ${stdName} is Passed`
    }else{
        document.getElementById("showData").innerHTML = `Total Marks of all Subjects is ${total_marks}.<br> Obtained Marks of all subjects is ${obtainedMark}. <br> Percentage ${perc}%. <br> Grade ${grade}. <br> ${stdName} is Failed`
    }
}