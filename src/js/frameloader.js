function removeActiveClass(){
    $("#nav_aktuelles").removeClass("active");
    $("#nav_berechnung").removeClass("active");
    $("#nav_projekt").removeClass("active");
    $("#nav_kontakt").removeClass("active");
}

function switchContent( destination ){
    var dest = destination + ".html #content";
    $("#contentframe").fadeOut("slow", "swing", function(){
        removeActiveClass();
        var nav = "#nav_" + destination;
        $("#contentframe").load(dest, function(respone, status, xhr){
            console.log("Loading: " + status);
            $("#contentframe").fadeIn("slow");
            $(nav).addClass("active");
        });
    });
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


function executeScript( dest ){
    switch(dest) {
        case "aktuelles":
            executeAktuelles();
            break;
        case "berechnung":
            executeBerechnung();
            break;
        case "projekt":
            executeProjekt();
            break;
        case "kontakt":
            executeKontakt();
            break;
        default:
            break;
    }
}