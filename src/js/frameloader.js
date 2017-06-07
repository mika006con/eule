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

switchContent("aktuelles");

$("#nav_aktuelles").on({
    click:      function(){ switchContent("aktuelles");     }
});

$("#nav_berechnung").on({
    click:      function(){ switchContent("berechnung");    }
});

$("#nav_projekt").on({
    click:      function(){ switchContent("projekt");       }
});

$("#nav_kontakt").on({
    click:      function(){ switchContent("kontakt");       }
});
