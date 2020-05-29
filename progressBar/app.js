function Circle(el){
    $(el).circleProgress({fill: {color: "#ff5cff"}})
    .on("circle-animation-progress", function(event, progress, stepValue){
        $(this).find("strong").text(String(stepValue.toFixed(1)).substr(2)+"%")
    })
}
Circle(".round")