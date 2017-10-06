$("#Kontrolle_btn_back").on({
    click:
        function(){
            formShowPreviouos("Kontrolle", "FinAnreiz");
        }
});
$("#Kontrolle_btn_forward").on({
    click:
        function(){
            formShowNext(true, "Kontrolle", "Kontrolle");
        }
});


function getFullAddress() {
    return   ($("#locationStreet").val() + " "
            + $("#locationHouseID").val() + ", "
            + $("#locationZIP").val() + " "
            + $("#locationCity").val() + ", "
            + $("#locationCountry").val());
}
function getSquareMeters(){
    var selectedForm = $('input[name=buildingType]:checked', '#AufbauartDIV').val();
    var SquareMeters = 0;
    var Gebaeudeform = $("#control_Gebaeudeform");
    var A = parseFloat($("#siteA").val());
    var B = parseFloat($("#siteB").val());
    var C = parseFloat($("#siteC").val());
    var D = parseFloat($("#siteD").val());
    var E = parseFloat($("#siteE").val());
    var F = parseFloat($("#siteF").val());
    var G = parseFloat($("#siteG").val());
    var H = parseFloat($("#siteH").val());
    var I = parseFloat($("#siteI").val());
    var J = parseFloat($("#siteJ").val());
    var K = parseFloat($("#siteK").val());
    var L = parseFloat($("#siteL").val());

    function SehnenviereckRechner(a, b, c, d){  // https://rechneronline.de/pi/sehnenviereck.php
        var s = (a+b+c+d)/2;   // Halbumfang
        return (Math.round(Math.sqrt(((s-a) * (s-b) * (s-c) * (s-d)))));
    }

    switch (selectedForm){
        case "quadratisch":   //quadratisch (A, B, C, D)
            Gebaeudeform.val("Quadratisch");
            SquareMeters = SehnenviereckRechner(A, B, C, D);
            break;
        case "rechteckig":    //rechteckig (A, B, C, D)
            Gebaeudeform.val("Rechteckig");
            SquareMeters = SehnenviereckRechner(A, B, C, D);
            break;
        case "lform":         //lform (A, B, C, D, E, F)
            Gebaeudeform.val("L-Förmig");
            var q1 = SehnenviereckRechner((A-E), (B-D), C, F);
            var q2 = SehnenviereckRechner((A-E), (B-F), C, D);
            var q3 = SehnenviereckRechner((A-C), (B-D), E, F);
            SquareMeters = q1 + q2 + q3;
            break;
        case "hform":         //hform (A, B, C, D, E, F, G, H, I, J, K, L)
            Gebaeudeform.val("H-Förmig");
            break;
        case "uform":         //uform (A, B, C, D, E, F, G, H)
            Gebaeudeform.val("U-Förmig");
            var q4 = SehnenviereckRechner((A-G), B, (C-E), (H+F+D));
            var q5 = Math.round(G*H);
            var q6 = Math.round(E*D);
            SquareMeters = q4 + q5 + q6;
            break;
        case "oform":         //oform (A, B, C, D, E, F, G, H)
            Gebaeudeform.val("O-Förmig");
            SquareMeters = (SehnenviereckRechner(A,B,C,D) - SehnenviereckRechner(E,F,G,H));
            break;
        default:
    }
    //alert(SquareMeters + " || TODO: 7_controls: Zeile 72, HForm sqm-Berechnung");
    return SquareMeters;
}
function getBJKombi(){
    if(document.getElementById('isBuildingAddition').checked){
        var percent = parseFloat($("#buildingYearAddPercent").val()) / 100;
        var mainPercent = 1 - percent;
        var oldPart = parseFloat($("#buildingYearMain").val());
        var newPart = parseFloat($("#buildingYearAdd").val());
        var BJKombi = Math.round((oldPart * mainPercent) + (newPart * percent));
        return BJKombi;
    } else {
        return $("#buildingYearMain").val();
    }
}
function getFullBulding(){
    $("#control_Geschosse").val( "Geschosse: " + $("#upperStories").val());
    $("#control_Baujahr").val( "Baujahr: " + $("#buildingYearMain").val() );
    $("#control_BJKombi").val( "BJ(kombiniert): " + getBJKombi());
    $("#control_Flaeche").val(getSquareMeters() + " qm");
}
function getFullEnergy(){
    $("#control_EQuelle").val( $("#energySourceElec").val() );
    $("#control_EPreis").val( $("#energyCostElec").val() + " €/kWh");
    $("#control_EPreissteigerung").val( $("#energyCostIncreaseElec").val() + " % p.a.");
    $("#control_EVerbrauch").val( $("#energyUsageElec").val() + " kWh / Jahr");

    $("#control_HQuelle").val( $("#energySourceHeat").val() );
    $("#control_HPreis").val( $("#energyCostHeat").val() + " €/kWh");
    $("#control_HPreissteigerung").val( $("#energyCostIncreaseHeat").val() + " % p.a.");
    $("#control_HVerbrauch").val( $("#energyUsageHeat").val() + " kWh / Jahr");

    $("#control_NutzerRot").val( $("#redBehaviour").val() + " %");
    $("#control_NutzerBlau").val( $("#blueBehaviour").val() + " %");
    $("#control_NutzerGruen").val( $("#greenBehaviour").val() + " %");
}

$("#control_All").on({
    click:
        function () {
            $("#control_Adresse").val(getFullAddress());
            getFullBulding();
            getFullEnergy();
        }
});
