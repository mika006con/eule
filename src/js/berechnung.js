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
        $('[data-toggle="tooltip"]').tooltip();
    });
}

function formShowNext(current, next){
    $("#" + current).fadeOut("slow", "swing", function(){
        $("#" + next).fadeIn("slow");
    });
}

function formShowPreviouos(current, previous){
    $("#" + current).fadeOut("slow", "swing", function(){
            $("#" + previous).fadeIn("slow");
        }
    );
}

//-- on... Events -->
function EventHandlingListener(){
    $("#Grunddaten_btn_forward").on({
        click:      function(){ formShowNext("Grunddaten", "Gebäudedaten");     }
    });
    $("#Gebäudedaten_btn_back").on({
        click:      function(){ formShowPreviouos("Gebäudedaten", "Grunddaten");     }
    });
    $("#Gebäudedaten_btn_forward").on({
        click:      function(){ formShowNext("Gebäudedaten", "Energiedaten");     }
    });
    $("#Energiedaten_btn_back").on({
        click:      function(){ formShowNext("Energiedaten", "Gebäudedaten");     }
    });
    $("#Energiedaten_btn_forward").on({
        click:      function(){ formShowNext("Energiedaten", "Energiedaten");     }
    });
}

function gafSwitch(fromGAF, toGAF){
    var from = "GAF_" + fromGAF;
    var to = "GAF_" + toGAF;
    var canvasFrom = document.getElementById(from);
    var canvasTo = document.getElementById(to);
    var ctxFrom = canvasFrom.getContext("2d");
    var ctxTo = canvasTo.getContext("2d");
}

function executeBerechnung() {
    buildGAF();
    addTooltips();
    EventHandlingListener();
}

executeBerechnung();