function removeActiveClass(){
    $("#nav_aktuelles").removeClass("active");
    $("#nav_berechnung").removeClass("active");
    $("#nav_projekt").removeClass("active");
    $("#nav_kontakt").removeClass("active");
};

$("#nav_aktuelles").click(function() {
    $("#contentframe").load("aktuelles.html #content" );
    removeActiveClass();
    $("#nav_aktuelles").addClass("active");
});

$("#nav_berechnung").click(function() {
    $("#contentframe").load("berechnung.html #content" );
    removeActiveClass();
    $("#nav_berechnung").addClass("active");
});

$("#nav_projekt").click(function() {
    $("#contentframe").load("projekt.html #content" );
    removeActiveClass();
    $("#nav_projekt").addClass("active");
});

$("#nav_kontakt").click(function() {
    $("#contentframe").load("kontakt.html #content" );
    removeActiveClass();
    $("#nav_kontakt").addClass("active");
});
