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
            formShowNext(true, "Gebäudedaten", "Energiedaten");
            //formShowNext(Step2Validation(), "Gebäudedaten", "Energiedaten");
        }
});

function Step2Validation() {
    var currentYear = $("#buildingYearMainDIV").hasClass("has-success");
    var additionalYear;
    if (document.getElementById('isBuildingAddition').checked) {
        additionalYear = $("#buildingYearAddDIV").hasClass("has-success");
    } else {
        additionalYear = true;
    }
    return currentYear && additionalYear;
}


// --> Step 2 onFocusOut Validation <<<
$("#buildingYearMain").on({
        focusout:
            function() {
                removeValidationClasses("#buildingYearMain");
                var year = $("#buildingYearMain").val();
                var currentYear = new Date().getFullYear();  //yyyy
                if ( year <= currentYear ) {
                    addValidationClasses("#buildingYearMain", "success");
                } else {
                    addValidationClasses("#buildingYearMain", "error");
                }
            }
    });
$("#buildingYearAdd").on({
        focusout:
            function() {
                removeValidationClasses("#buildingYearAdd");
                var year = $("#buildingYearAdd").val();
                var currentYear = new Date().getFullYear();  //yyyy
                if ( year <= currentYear ) {
                    addValidationClasses("#buildingYearAdd", "success");
                } else {
                    addValidationClasses("#buildingYearAdd", "error");
                }
            }
    });
$("#isBuildingAddition").on({
        change:
            function () {
                if (document.getElementById('isBuildingAddition').checked) {
                    $("#buildingYearAddDIV").fadeIn("slow");
                } else {
                    $("#buildingYearAddDIV").fadeOut("slow");
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


