/* ####################################################################################
 ################################   Navigation  ######################################
 ####################################################################################
 */
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

//Initiale Error Ausgabe bei Gebäudeabmessungen
if ( ! ($("#AufbauMeasurableDIV").hasClass("has-success")) || ($("#AufbauMeasurableDIV").hasClass("has-error"))){
    addValidationClasses("#AufbauMeasurable", "error");
}


// Oberflächensteuerung
// Ein-Ausblenden Anbaujahr
$("#isBuildingAddition").on({
        change:
            function () {
                if (document.getElementById('isBuildingAddition').checked) {
                    $("#buildingYearAddDIV").fadeIn("slow");
                    $("#buildingYearAddPercentDIV").fadeIn("slow");
                } else {
                    $("#buildingYearAddDIV").fadeOut("slow");
                    $("#buildingYearAddPercentDIV").fadeOut("slow");
                }
            }
    });

// Aufbauart annähernd: Abmessungen
$("input:radio[name='buildingType']").on({
        change:
            function(){
                var selectedOption = $("input:radio[name='buildingType']:checked").val();
                var wrap = $("#wrapBuildingMeasure");
                switch (selectedOption){
                    case "quadratisch":
                        wrap.fadeOut("fast", "swing", function () {
                            $("#buildingMeasureIMG").attr("src", "img/buildingMeasures/quadratisch.png");
                            showSites(true, true, true, true, false, false, false, false, false, false, false, false);
                            wrap.fadeIn();
                        });
                        break;

                    case "lform":
                        wrap.fadeOut("fast", "swing", function () {
                            $("#buildingMeasureIMG").attr("src", "img/buildingMeasures/l-foermig.png");
                            showSites(true, true, true, true, true, true, false, false, false, false, false, false);
                            wrap.fadeIn();
                        });
                        break;

                    case "rechteckig":
                        wrap.fadeOut("fast", "swing", function () {
                            $("#buildingMeasureIMG").attr("src", "img/buildingMeasures/rechteckig.png");
                            showSites(true, true, true, true, false, false, false, false, false, false, false, false);
                            wrap.fadeIn();
                        });
                        break;


                    case "hform":
                        wrap.fadeOut("fast", "swing", function () {
                            $("#buildingMeasureIMG").attr("src", "img/buildingMeasures/h-foermig.png");
                            showSites(true, true, true, true, true, true, true, true, true, true, true, true);
                            wrap.fadeIn();
                        });
                        break;

                    case "uform":
                        wrap.fadeOut("fast", "swing", function () {
                            $("#buildingMeasureIMG").attr("src", "img/buildingMeasures/u-foermig.png");
                            showSites(true, true, true, true, true, true, true, true, false, false, false, false);
                            wrap.fadeIn();
                        });
                        break;

                    case "oform":
                        wrap.fadeOut("fast", "swing", function () {
                            $("#buildingMeasureIMG").attr("src", "img/buildingMeasures/o-foermig.png");
                            showSites(true, true, true, true, true, true, true, true, false, false, false, false);
                            wrap.fadeIn();
                        });
                        break;

                    default:
                        break;
                }
            }
    });
function showSites(a, b, c, d, e, f, g, h, i, j, k, l){
    if(a){$("#siteAlabel").css("visibility", "visible"); } else {$("#siteAlabel").css("visibility", "hidden");}
    if(b){$("#siteBlabel").css("visibility", "visible"); } else {$("#siteBlabel").css("visibility", "hidden");}
    if(c){$("#siteClabel").css("visibility", "visible"); } else {$("#siteClabel").css("visibility", "hidden");}
    if(d){$("#siteDlabel").css("visibility", "visible"); } else {$("#siteDlabel").css("visibility", "hidden");}
    if(e){$("#siteElabel").css("visibility", "visible"); } else {$("#siteElabel").css("visibility", "hidden");}
    if(f){$("#siteFlabel").css("visibility", "visible"); } else {$("#siteFlabel").css("visibility", "hidden");}
    if(g){$("#siteGlabel").css("visibility", "visible"); } else {$("#siteGlabel").css("visibility", "hidden");}
    if(h){$("#siteHlabel").css("visibility", "visible"); } else {$("#siteHlabel").css("visibility", "hidden");}
    if(i){$("#siteIlabel").css("visibility", "visible"); } else {$("#siteIlabel").css("visibility", "hidden");}
    if(j){$("#siteJlabel").css("visibility", "visible"); } else {$("#siteJlabel").css("visibility", "hidden");}
    if(k){$("#siteKlabel").css("visibility", "visible"); } else {$("#siteKlabel").css("visibility", "hidden");}
    if(l){$("#siteLlabel").css("visibility", "visible"); } else {$("#siteLlabel").css("visibility", "hidden");}
}

function enableForwardButtonGebaudedaten(){
    document.getElementById('Gebäudedaten_btn_forward').disabled = !Step2Validation();
}
function checkBuildingYear() {
    removeValidationClasses("#buildingYearMain");
    var year = $("#buildingYearMain").val();
    var currentYear = new Date().getFullYear();  //yyyy
    if ( year <= currentYear && year >= 1800) {
        addValidationClasses("#buildingYearMain", "success");
    } else {
        addValidationClasses("#buildingYearMain", "error");
    }
}
function checkBuildingYearAdd() {
    removeValidationClasses("#buildingYearAdd");
    var year = $("#buildingYearAdd").val();
    var currentYear = new Date().getFullYear();  //yyyy
    if ( year <= currentYear && year >= 1800) {
        addValidationClasses("#buildingYearAdd", "success");
    } else {
        addValidationClasses("#buildingYearAdd", "error");
    }
}
function checkBuildingYearPercent() {
    removeValidationClasses("#buildingYearAddPercent");
    var perc = $("#buildingYearAddPercent").val();
    if ( perc < 1 || perc > 99 ){
        addValidationClasses("#buildingYearAddPercent", "error");
    } else {
        addValidationClasses("#buildingYearAddPercent", "success");
    }
}
function checkBuildingStories() {
    removeValidationClasses("#upperStories");
    var stories = $("#upperStories").val();
    if ( stories < 1 || stories > 250 ){
        addValidationClasses("#upperStories", "error");
    } else {
        addValidationClasses("#upperStories", "success");
    }
}
function checkBuildingMeasures(){
    var squareM = getSquareMeters();
    var squareMStr = parseFloat(squareM).toString();
    if (squareMStr == "NaN"){
        // Nicht berechenbar -> error
        $("#AufbauMeasurable").val("Die eingegebenen Abmessungen führen zu einer nicht berechenbaren Fläche.");
        removeValidationClasses("#AufbauMeasurable");
        addValidationClasses("#AufbauMeasurable", "error");
    } else {
        // Berechenbar -> success
        $("#AufbauMeasurable").val("Die berechnete Grundfläche beträgt " + squareMStr + " qm.");
        removeValidationClasses("#AufbauMeasurable");
        addValidationClasses("#AufbauMeasurable", "success");
    }
}
// --> Step 2 onFocusOut Validation <<<
function eventHandlerBuilding (){
    $("#buildingYearMain").on({
        change: function(){ checkBuildingYear(); enableForwardButtonGebaudedaten() }
    });
    $("#buildingYearAdd").on({
        change: function(){ checkBuildingYearAdd(); enableForwardButtonGebaudedaten() }
    });
    $("#buildingYearAddPercent").on({
        change: function(){ checkBuildingYearPercent(); enableForwardButtonGebaudedaten() }
    });
    $("#upperStories").on({
        change: function(){ checkBuildingStories(); enableForwardButtonGebaudedaten() }
    });
    $("#isBuildingAddition").on({
        change: function(){ enableForwardButtonGebaudedaten() }
    });
    $("#siteA").on({
        change: function(){ checkBuildingMeasures(); enableForwardButtonGebaudedaten() }
    });
    $("#siteB").on({
        change: function(){ checkBuildingMeasures(); enableForwardButtonGebaudedaten() }
    });
    $("#siteC").on({
        change: function(){ checkBuildingMeasures(); enableForwardButtonGebaudedaten() }
    });
    $("#siteD").on({
        change: function(){ checkBuildingMeasures(); enableForwardButtonGebaudedaten() }
    });
    $("#siteE").on({
        change: function(){ checkBuildingMeasures(); enableForwardButtonGebaudedaten() }
    });
    $("#siteF").on({
        change: function(){ checkBuildingMeasures(); enableForwardButtonGebaudedaten() }
    });
    $("#siteG").on({
        change: function(){ checkBuildingMeasures(); enableForwardButtonGebaudedaten() }
    });
    $("#siteH").on({
        change: function(){ checkBuildingMeasures(); enableForwardButtonGebaudedaten() }
    });
    $("#siteI").on({
        change: function(){ checkBuildingMeasures(); enableForwardButtonGebaudedaten() }
    });
    $("#siteJ").on({
        change: function(){ checkBuildingMeasures(); enableForwardButtonGebaudedaten() }
    });
    $("#siteK").on({
        change: function(){ checkBuildingMeasures(); enableForwardButtonGebaudedaten() }
    });
    $("#siteL").on({
        change: function(){ checkBuildingMeasures(); enableForwardButtonGebaudedaten() }
    });
}

eventHandlerBuilding();

function Step2Validation() {
    var currentYear = $("#buildingYearMainDIV").hasClass("has-success");
    var additionalYear;
    var percent;
    if (document.getElementById('isBuildingAddition').checked) {
        additionalYear = $("#buildingYearAddDIV").hasClass("has-success");
        percent = $("#buildingYearAddPercentDIV").hasClass("has-success");
    } else {
        additionalYear = true;
        percent = true;
    }
    var stories = $("#upperStoriesDIV").hasClass("has-success");
    var measures = $("#AufbauMeasurableDIV").hasClass("has-success");
    return currentYear && additionalYear && percent && stories && measures;
}
