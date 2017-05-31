$("#nav_aktuelles").click(function() {
    $("#contentframe").load("../aktuelles.html", function(){
        alert("Load Performed");
    })
});