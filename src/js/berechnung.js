function convertString( str ){
    var isString = typeof str === 'string';
    if (isString){
        if ( str.length >= 16 ){
            return str;
        } else {
            var _str = " " + str + " ";
            return convertString(_str);
        }
    } else {
        return str;
    }
}

function createCanvasGAF ( id, text, color, bold ){
    var canvas, context, canvaso, contexto;

    canvaso = document.getElementById(id);
    context = canvaso.getContext('2d');
    context.lineWidth = 3;
    context.font = "12px Arial";
    context.fillText(convertString(text), 45, 45);

    context.strokeStyle = color;
    context.beginPath();
    context.moveTo(11, 11);
    context.lineTo(121, 11);
    context.moveTo(120, 11);
    context.lineTo(150, 41);
    context.moveTo(150, 39);
    context.lineTo(120, 71);
    context.moveTo(121, 70);
    context.lineTo(10, 70);
    context.moveTo(11, 70);
    context.lineTo(41, 41);
    context.moveTo(39, 41);
    context.lineTo(10, 10);
    context.stroke();
    context.closePath();
}

function buildGAF(){
    createCanvasGAF("GAF_1", "Grunddaten", "#0000ff", true);
    createCanvasGAF("GAF_2", "Gebäudedaten", "#000000", false);
    createCanvasGAF("GAF_3", "Energiedaten", "#000000", false);
    createCanvasGAF("GAF_4", "Automatisierung", "#000000", false);
    createCanvasGAF("GAF_5", "Schulungen", "#000000", false);
    createCanvasGAF("GAF_6", "Fin. Anreizsystem", "#000000", false);
    createCanvasGAF("GAF_7", "Kontrolle", "#000000", false);
    createCanvasGAF("GAF_8", "Ergebnis", "#000000", false);
}

function addTooltips(){
    $(document).ready(function(){
        $('[data-toggle="tooltip"]').tooltip({
            animated: 'fade',
            html: 'true'
        });
    });
}

/* ####################################################################################
   ################################  Guided Tour ######################################
   ####################################################################################
 */
function gafSwitch(fromGAF, toGAF){
    var from = "GAF_" + fromGAF;
    var to = "GAF_" + toGAF;
    var canvasFrom = document.getElementById(from);
    var canvasTo = document.getElementById(to);
    var ctxFrom = canvasFrom.getContext("2d");
    var ctxTo = canvasTo.getContext("2d");
}

function removeValidationClasses(id){
    $(id + "DIV").removeClass("has-error").removeClass("has-warning").removeClass("has-success");
    $(id + "SPAN").removeClass("glyphicon-remove").removeClass("glyphicon-warning-sign").removeClass("glyphicon-ok");
}

function addValidationClasses(id, status){
    if ( status == "success" ){
        $(id + "DIV").addClass("has-success");
        $(id + "SPAN").addClass("glyphicon-ok");
    } else if ( status == "warning" ){
        $(id + "DIV").addClass("has-warning");
        $(id + "SPAN").addClass("glyphicon-warning-sign");
    } else if ( status == "error" ) {
        $(id + "DIV").addClass("has-error");
        $(id + "SPAN").addClass("glyphicon-remove");
    } else {
        alert("You shit");
        console.log("Wrong Status in addValidationClasses - Function");
    }
}

//-- on... Events -->
function EventHandlingListener(){
    $("#Grunddaten_btn_forward").on({
        click:
            function(){
                formShowNext(Step1Validation(), "Grunddaten", "Gebäudedaten");
            }
    });
    $("#Gebäudedaten_btn_back").on({
        click:
            function() {
                formShowPreviouos("Gebäudedaten", "Grunddaten");
            }
    });
    $("#Gebäudedaten_btn_forward").on({
        click:
            function(){
                formShowNext(Step2Validation(), "Gebäudedaten", "Energiedaten");
            }
    });
    $("#Energiedaten_btn_back").on({
        click:
            function(){
                formShowPreviouos("Energiedaten", "Gebäudedaten");
            }
    });
    $("#Energiedaten_btn_forward").on({
        click:
            function(){
                formShowNext(Step3Validation(), "Energiedaten", "Energiedaten");
            }
    });
    // --> Step 1 onFocusOut Validation Events <<<
    // TODO: Enter Validation values
    $("#locationStreet").on({
        focusout:
            function() {
                removeValidationClasses("#locationStreet");
                switch ($("#locationStreet").val()) {
                    case "s" :
                        addValidationClasses("#locationStreet", "success");
                        break;
                    default :
                        addValidationClasses("#locationStreet", "error");
                }
            }
    });
    $("#locationHouseID").on({
        focusout:
            function() {
                removeValidationClasses("#locationHouseID");
                switch ($("#locationHouseID").val()) {
                    case "s" :
                        addValidationClasses("#locationHouseID", "success");
                        break;
                    default :
                        addValidationClasses("#locationHouseID", "error");
                }
            }
    });
    $("#locationZIP").on({
        focusout:
            function() {
                removeValidationClasses("#locationZIP");
                switch ($("#locationZIP").val()) {
                    case "s":
                        addValidationClasses("#locationZIP", "success");
                        break;
                    default :
                        addValidationClasses("#locationZIP", "error");
                }
            }
    });
    $("#locationCity").on({
        focusout:
            function() {
                removeValidationClasses("#locationCity");
                switch ($("#locationCity").val()) {
                    case "s" :
                        addValidationClasses("#locationCity", "success");
                        break;
                    default :
                        addValidationClasses("#locationCity", "error");
                }
            }
    });
    $("#locationCountry").on({
        focusout:
            function() {
                removeValidationClasses("#locationCountry");
                switch ($("#locationCountry").val()) {
                    case "s" :
                        addValidationClasses("#locationCountry", "success");
                        break;
                    default :
                        addValidationClasses("#locationCountry", "error");
                }
            }
    });

    // --> Step 2 onFocusOut Validation <<<
    $("#isBuildingAddition").on({
        change:
            function (){
                alert("HALLO");
                var isChecked = $("#isBuildingAddition").val();
                if ( isChecked ){
                    $("#buildingYearAdd_DIV").fadeIn("slow");
                }
            }
    });
}

function formShowNext(toExecute, current, next){
    if ( toExecute ) {
        $("#" + current).fadeOut("slow", "swing", function () {
            $("#" + next).fadeIn("slow");
        });
    }
}

function formShowPreviouos(current, previous){
    $("#" + current).fadeOut("slow", "swing", function () {
            $("#" + previous).fadeIn("slow");
        }
    );
}




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


/* ####################################################################################
   ################################  Validierungen ####################################
   ####################################################################################
 */

function Step1Validation(){
    var street = $("#locationStreetDIV").hasClass("has-success");
    var houseid = $("#locationHouseIDDIV").hasClass("has-success");
    var zipcode = $("#locationZIPDIV").hasClass("has-success");
    var city = $("#locationCityDIV").hasClass("has-success");
    var country = $("#locationCountryDIV").hasClass("has-success");
    return street && houseid && zipcode && city && country;
}

function Step2Validation(){
    var toExecute = false;
    function Step2validateBuildYear(){
        var currentYear = new Date().getFullYear();  //yyyy
        if ( $("#buildingYearMain").val() > currentYear ){
            alert ("baujahr > currentJahr");
        }
        if ( $("#isBuildingAddition").val() == true ){
            if ( $("#buildingYearMain").val() > $("#buildingYearAdd").val() ){
                alert ( "baujahr > anbaujahr");
            }
        }
    }
    toExecute = Step2validateBuildYear();
    return toExecute;
}


function Step3Validation(){}
function Step4Validation(){}
function Step5Validation(){}
function Step6Validation(){}
function Step7Validation(){}
function Step8Validation(){}




function executeBerechnung() {
    buildGAF();
    addTooltips();
    EventHandlingListener();
}

executeBerechnung();