
$("#Energiedaten_btn_back").on({
    click:
        function(){
            formShowPreviouos("Energiedaten", "Gebäudedaten");
        }
});
$("#Energiedaten_btn_forward").on({
    click:
        function(){
            formShowNext(true, "Energiedaten", "Automatize");
         //   formShowNext(Step3Validation(), "Energiedaten", "Energiedaten");

        }
});

// ################### Validate Elec  ######################
var energElec = $("#energyCostElec");
var energElec_Unknown = $("#checkUnknown_CostElec");

var energElecIncrease = $("#energyCostIncreaseElec");
var energElecIncrease_Unknown = $("#energyCostIncreaseElec_Unknown");

var energElecUsage = $("#energyUsageElec");
var energElecUsage_Unknown = $("#energyUsageElecUnknown");

// ## -->  Bezugspreis <-- ##
energElec.on({
    change:
        function () {
            if ( energElec.val() == "" ){
                removeValidationClasses("#energyCostElec");
                addValidationClasses("#energyCostElec", "error");
            } else if((parseFloat(energElec.val()) < 0.20)){
                removeValidationClasses("#energyCostElec");
                addValidationClasses("#energyCostElec", "warning");
            } else {
                removeValidationClasses("#energyCostElec");
                addValidationClasses("#energyCostElec", "success");
            }
        }
});

energElec_Unknown.on({
    change:
        function () {
            if (document.getElementById('checkUnknown_CostElec').checked){
                energElec.val(0.25);
                energElec.prop('readonly', true);
            } else {
                energElec.prop('readonly', false);
            }
        }
});

// ## -->  Preissteigerung <-- ##
energElecIncrease.on({
    change:
        function () {
            if ( energElecIncrease.val() == "" ){
                removeValidationClasses("#energyCostIncreaseElec");
                addValidationClasses("#energyCostIncreaseElec", "error");
            } else if((parseFloat(energElecIncrease.val()) <= 0.50) || (parseFloat(energElecIncrease.val()) >= 3.00)){
                removeValidationClasses("#energyCostIncreaseElec");
                addValidationClasses("#energyCostIncreaseElec", "warning");
            } else {
                removeValidationClasses("#energyCostIncreaseElec");
                addValidationClasses("#energyCostIncreaseElec", "success");
            }
        }
});

energElecIncrease_Unknown.on({
    change:
        function () {
            if (document.getElementById('energyCostIncreaseElec_Unknown').checked){
                energElecIncrease.val(2.00);
                energElecIncrease.prop('readonly', true);
            } else {
                energElecIncrease.prop('readonly', false);
            }
        }
});

// ## -->  Verbrauch <-- ##
energElecUsage.on({
    change:
        function () {
            if ( energElecUsage.val() == "" ){
                removeValidationClasses("#energyUsageElec");
                addValidationClasses("#energyUsageElec", "error");
            } else if((parseFloat(energElecUsage.val()) <= 0)){
                removeValidationClasses("#energyUsageElec");
                addValidationClasses("#energyUsageElec", "warning");
            } else {
                removeValidationClasses("#energyUsageElec");
                addValidationClasses("#energyUsageElec", "success");
            }
        }
});

energElecUsage_Unknown.on({
    change:
        function () {
            if (document.getElementById('energyUsageElecUnknown').checked){
                energElecUsage.val(1);
                energElecUsage.prop('readonly', true);
            } else {
                energElecUsage.prop('readonly', false);
            }
        }
});



// ################### Validate Heat  ######################
var energHeat = $("#energyCostHeat");
var energHeat_Unknown = $("#checkUnknown_CostHeat");

var energHeatIncrease = $("#energyCostIncreaseHeat");
var energHeatIncrease_Unknown = $("#energyCostIncreaseHeat_Unknown");

var energHeatUsage = $("#energyUsageHeat");
var energHeatUsage_Unknown = $("#energyUsageHeatUnknown");

// ## -->  Bezugspreis <-- ##
energHeat.on({
    change:
        function () {
            if ( energHeat.val() == "" ){
                removeValidationClasses("#energyCostHeat");
                addValidationClasses("#energyCostHeat", "error");
            } else if((parseFloat(energElec.val()) < 0.20)){
                removeValidationClasses("#energyCostHeat");
                addValidationClasses("#energyCostHeat", "warning");
            } else {
                removeValidationClasses("#energyCostHeat");
                addValidationClasses("#energyCostHeat", "success");
            }
        }
});

energHeat_Unknown.on({
    change:
        function () {
            if (document.getElementById('checkUnknown_CostHeat').checked){
                energHeat.val(0.10);
                energHeat.prop('readonly', true);
            } else {
                energHeat.prop('readonly', false);
            }
        }
});


// ## -->  Preissteigerung <-- ##
energHeatIncrease.on({
    change:
        function () {
            if ( energHeatIncrease.val() == "" ){
                removeValidationClasses("#energyCostIncreaseHeat");
                addValidationClasses("#energyCostIncreaseHeat", "error");
            } else if((parseFloat(energHeatIncrease.val()) <= 0.50) || (parseFloat(energHeatIncrease.val()) >= 3.00)){
                removeValidationClasses("#energyCostIncreaseHeat");
                addValidationClasses("#energyCostIncreaseHeat", "warning");
            } else {
                removeValidationClasses("#energyCostIncreaseHeat");
                addValidationClasses("#energyCostIncreaseHeat", "success");
            }
        }
});

energHeatIncrease_Unknown.on({
    change:
        function () {
            if (document.getElementById('energyCostIncreaseHeat_Unknown').checked){
                energHeatIncrease.val(2.00);
                energHeatIncrease.prop('readonly', true);
            } else {
                energHeatIncrease.prop('readonly', false);
            }
        }
});

// ## -->  Verbrauch <-- ##
energHeatUsage.on({
    change:
        function () {
            if ( energHeatUsage.val() == "" ){
                removeValidationClasses("#energyUsageHeat");
                addValidationClasses("#energyUsageHeat", "error");
            } else if((parseFloat(energHeatUsage.val()) <= 0)){
                removeValidationClasses("#energyUsageHeat");
                addValidationClasses("#energyUsageHeat", "warning");
            } else {
                removeValidationClasses("#energyUsageHeat");
                addValidationClasses("#energyUsageHeat", "success");
            }
        }
});

energHeatUsage_Unknown.on({
    change:
        function () {
            if (document.getElementById('energyUsageHeatUnknown').checked){
                energHeatUsage.val(1);
                energHeatUsage.prop('readonly', true);
            } else {
                energHeatUsage.prop('readonly', false);
            }
        }
});



// ############ Validate Nutzerverhalten ############
var redPeople = $("#redBehaviour");
var bluePeople= $("#blueBehaviour");
var greenPeople=$("#greenBehaviour");


redPeople.on({
    change:
        function () {
            updateStatusBehaviour();
        }
});

bluePeople.on({
    change:
        function () {
            updateStatusBehaviour();
        }
});

greenPeople.on({
    change:
        function () {
            updateStatusBehaviour();
        }
});

function updateStatusBehaviour() {
    var totalSum = parseFloat(redPeople.val()) + parseFloat(bluePeople.val()) + parseFloat(greenPeople.val());
    if ( totalSum < 99.95 || totalSum > 100.05 ){
        removeValidationClasses("#redBehaviour");
        removeValidationClasses("#blueBehaviour");
        removeValidationClasses("#greenBehaviour");
        addValidationClasses("#redBehaviour", "error");
        addValidationClasses("#blueBehaviour", "error");
        addValidationClasses("#greenBehaviour", "error");
    } else if ( totalSum != 100 ) {
        removeValidationClasses("#redBehaviour");
        removeValidationClasses("#blueBehaviour");
        removeValidationClasses("#greenBehaviour");
        addValidationClasses("#redBehaviour", "warning");
        addValidationClasses("#blueBehaviour", "warning");
        addValidationClasses("#greenBehaviour", "warning");
    } else {
        removeValidationClasses("#redBehaviour");
        removeValidationClasses("#blueBehaviour");
        removeValidationClasses("#greenBehaviour");
        addValidationClasses("#redBehaviour", "success");
        addValidationClasses("#blueBehaviour", "success");
        addValidationClasses("#greenBehaviour", "success");
    }
}
