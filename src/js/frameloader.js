function removeActiveClass(){
    $("#nav_aktuelles").removeClass("active");
    $("#nav_berechnung").removeClass("active");
    $("#nav_projekt").removeClass("active");
    $("#nav_kontakt").removeClass("active");
};

function switchContent( destination ){
    var dest = destination + ".html #content";
    $("#contentframe").load( dest );
    removeActiveClass();
    var nav = "#nav_" + destination;
    $(nav).addClass("active");
}

$("#nav_aktuelles").click(switchContent("aktuelles"));
$("#nav_berechnung").click(switchContent("berechnung"));
$("#nav_projekt").click(switchContent("projekt"));
$("#nav_kontakt").click(switchContent("kontakt"));
