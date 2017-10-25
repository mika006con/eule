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

function testCase(){
    $("#buildingYearMain").val(1921);
    $("#upperStories").val(4);
    $("#siteA").val(10);
    $("#siteB").val(10);
    $("#siteC").val(10);
    $("#siteD").val(10);
    
    energElec_Unknown.prop('checked', true);
    energElecIncrease_Unknown.prop('checked', true);
    energElecUsage_Unknown.prop('checked', true);
    energHeat_Unknown.prop('checked', true);
    energHeatIncrease_Unknown.prop('checked', true);
    energHeatUsage_Unknown.prop('checked', true);
}
testCase();

function getFullAddress() {
    return   ($("#route").val() + " "
            + $("#street_number").val() + ", "
            + $("#postal_code").val() + " "
            + $("#locality").val() + ", "
            + $("#administrative_area_level_1").val() + ", "
            + $("#country").val());
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
    $("#control_EPreissteigerung").val( "+ " + $("#energyCostIncreaseElec").val() + "% p.a.");
    $("#control_EVerbrauch").val( $("#energyUsageElec").val() + " kWh / Jahr");

    $("#control_HQuelle").val( $("#energySourceHeat").val() );
    $("#control_HPreis").val( $("#energyCostHeat").val() + " €/kWh");
    $("#control_HPreissteigerung").val( "+ " + $("#energyCostIncreaseHeat").val() + "% p.a.");
    $("#control_HVerbrauch").val( $("#energyUsageHeat").val() + " kWh / Jahr");

    $("#control_NutzerRot").val( $("#redBehaviour").val() + " %");
    $("#control_NutzerBlau").val( $("#blueBehaviour").val() + " %");
    $("#control_NutzerGruen").val( $("#greenBehaviour").val() + " %");
}

function getFullAutomize(){
    var automizeIsChecked = document.getElementById('check_calc_automatize').checked;
    if(automizeIsChecked) {
        // TODO: Control issues to program
    } else {
        $("#control_Automize").val("Es sollen keine Automatisierungsmaßnahmen berücksichtigt werden.");
    }
}

function getFullEducation(){
    var educationIsChecked = document.getElementById('check_calc_education').checked;
    if(educationIsChecked) {
        // TODO: Control issues to program
    } else {
        $("#control_Education").val("Es sollen keine Schulungsmaßnahmen berücksichtigt werden.");
    }
}

function getFullFinancial(){
    $("#control_Fin_InterestRate").val( $("#finToEmployees").val() + "% Beteiligung" );
    $("#control_Fin_Percent").val( $("#showCalcInterest").val() + " % p.a.");
}

$("#control_All").on({
    click:
        function () {
            $("#control_Adresse").val(getFullAddress());
            getFullBulding();
            getFullEnergy();
            getFullAutomize();
            getFullEducation();
            getFullFinancial();
        }
});
