
/* ####################################################################################
   ################################  Berechnungen #####################################
   ####################################################################################
 */
//-- Kapitalwertberechnung --->
/*  OUTPUT =   Kapitalwert der Investition
    _Et =   Einzahlungen der Periode t : [Array]
    _At =   Auszahlungen der Periode t : [Array]
    _i  =   Kalkulationszinssatz
    _n  =   Nutzungsdauer des Investitionsobjekts
 */


function SehnenviereckRechner(a, b, c, d){  // https://rechneronline.de/pi/sehnenviereck.php
    var s = (a+b+c+d)/2;   // Halbumfang
    return (Math.round(Math.sqrt(((s-a) * (s-b) * (s-c) * (s-d)))));
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

function calcCapitalValue( _Et, _At, _i, _n){
    // Kapitalwert = Sum( t=0, n: (Et-At) * ( 1+i ) ^-(Periode t)
    if (_Et.length != _At.length || _Et.length != _n+1){
        alert ( "Arrays stimmen nicht" );
    }
    var c0 = 0;
    for (i = 0; i <= _n; i++){
        c0 += (_Et[i] - _At[i]) * Math.pow(1+i, -i);
    }
}
