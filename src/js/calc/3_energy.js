$("#Energiedaten_btn_back").on({
    click:
        function(){
            formShowPreviouos("Energiedaten", "Gebäudedaten");
        }
});
$("#Energiedaten_btn_forward").on({
    click:
        function(){
            formShowNext(Step3Validation(), "Energiedaten", "Automatize");

        }
});
function enableForwardButtonEnergiedaten(){
    document.getElementById('Energiedaten_btn_forward').disabled = !Step3Validation();
}
function Step3Validation(){
    var energ1 = energElec.hasClass("has-success") || (document.getElementById('checkUnknown_CostElec').checked);
    var energ2 = energElecIncrease.hasClass("has-success") || (document.getElementById('energyCostIncreaseElec_Unknown').checked);
    var energ3 = energElecUsage.hasClass("has-success") || (document.getElementById('energyUsageElecUnknown').checked);

    var heat1 = energHeat.hasClass("has-success") || (document.getElementById('checkUnknown_CostHeat').checked);;
    var heat2 = energHeatIncrease.hasClass("has-success") || (document.getElementById('energyCostIncreaseHeat_Unknown').checked);
    var heat3 = energHeatIncrease.hasClass("has-success") || (document.getElementById('energyUsageHeatUnknown').checked);

    var user1 = $("#redBehaviourDIV").hasClass("has-success") || $("#redBehaviourDIV").hasClass("has-warning");
    var user2 = $("#blueBehaviourDIV").hasClass("has-success") || $("#blueBehaviourDIV").hasClass("has-warning");
    var user3 = $("#greenBehaviourDIV").hasClass("has-success") || $("#greenBehaviourDIV").hasClass("has-warning");

    return energ1 && energ2 && energ3 && heat1 && heat2 && heat3 && user1 && user2 && user3;
}


// ################### Validate Elec  ######################
var energElec = $("#energyCostElec");
var energElec_Unknown = $("#checkUnknown_CostElec");

var energElecIncrease = $("#energyCostIncreaseElec");
var energElecIncrease_Unknown = $("#energyCostIncreaseElec_Unknown");

var energElecUsage = $("#energyUsageElec");
var energElecUsage_Unknown = $("#energyUsageElecUnknown");

// ## -->  Bezugspreis <-- ##
function validateEnergElec(){
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
energElec.on({
    change: function(){ validateEnergElec(); enableForwardButtonEnergiedaten() }
});

function validateEnergElec_Unknown(){
    if (document.getElementById('checkUnknown_CostElec').checked){
        energElec.val(0.25);
        energElec.prop('readonly', true);
    } else {
        energElec.prop('readonly', false);
    }
}
energElec_Unknown.on({
    change: function(){ validateEnergElec_Unknown(); enableForwardButtonEnergiedaten() }
});

// ## -->  Preissteigerung <-- ##
function validateEnergElecIncrease(){
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
energElecIncrease.on({
    change:
        function() {validateEnergElecIncrease(); enableForwardButtonEnergiedaten() }
});

function validateEnergElecIncrease_Unknown(){
    if (document.getElementById('energyCostIncreaseElec_Unknown').checked){
        energElecIncrease.val(2.00);
        energElecIncrease.prop('readonly', true);
    } else {
        energElecIncrease.prop('readonly', false);
    }
}
energElecIncrease_Unknown.on({
    change:
        function(){ validateEnergElecIncrease_Unknown(); enableForwardButtonEnergiedaten() }
});

// ## -->  Verbrauch <-- ##
function validateEnergElecUsage() {
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
energElecUsage.on({
    change:
        function(){ validateEnergElecUsage(); enableForwardButtonEnergiedaten() }
});

function validateEnergElecUsage_Unknown() {
    if (document.getElementById('energyUsageElecUnknown').checked){
        energElecUsage.val(1);
        energElecUsage.prop('readonly', true);
    } else {
        energElecUsage.prop('readonly', false);
    }
}
energElecUsage_Unknown.on({
    change:
        function(){ validateEnergElecUsage_Unknown(); enableForwardButtonEnergiedaten() }
});



// ################### Validate Heat  ######################
var energHeat = $("#energyCostHeat");
var energHeat_Unknown = $("#checkUnknown_CostHeat");

var energHeatIncrease = $("#energyCostIncreaseHeat");
var energHeatIncrease_Unknown = $("#energyCostIncreaseHeat_Unknown");

var energHeatUsage = $("#energyUsageHeat");
var energHeatUsage_Unknown = $("#energyUsageHeatUnknown");

// ## -->  Bezugspreis <-- ##
function validateEnergHeat(){
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
energHeat.on({
    change: function(){ validateEnergHeat(); enableForwardButtonEnergiedaten() }
});
function validateEnergHeat_Unknown() {
    if (document.getElementById('checkUnknown_CostHeat').checked){
        energHeat.val(0.10);
        energHeat.prop('readonly', true);
    } else {
        energHeat.prop('readonly', false);
    }

}
energHeat_Unknown.on({
    change: function(){ validateEnergHeat_Unknown(); enableForwardButtonEnergiedaten() }
});


// ## -->  Preissteigerung <-- ##
function validateEnergHeatIncrease(){
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
energHeatIncrease.on({
    change: function() { validateEnergHeatIncrease(); enableForwardButtonEnergiedaten() }
});

function validateEnergHeatIncrease_Unknown() {
    if (document.getElementById('energyCostIncreaseHeat_Unknown').checked){
        energHeatIncrease.val(2.00);
        energHeatIncrease.prop('readonly', true);
    } else {
        energHeatIncrease.prop('readonly', false);
    }
}
energHeatIncrease_Unknown.on({
    change:
        function() { validateEnergHeatIncrease_Unknown(); enableForwardButtonEnergiedaten() }
});

// ## -->  Verbrauch <-- ##
function validateEnergHeatUsage() {
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
energHeatUsage.on({
    change:  function(){ validateEnergHeatUsage(); enableForwardButtonEnergiedaten() }
});

function validateEnergHeatUsage_Unknown(){
    if (document.getElementById('energyUsageHeatUnknown').checked){
        energHeatUsage.val(1);
        energHeatUsage.prop('readonly', true);
    } else {
        energHeatUsage.prop('readonly', false);
    }
}
energHeatUsage_Unknown.on({
    change: function(){ validateEnergHeatUsage_Unknown(); enableForwardButtonEnergiedaten() }
});



// ############ Validate Nutzerverhalten ############
var redPeople = $("#redBehaviour");
var bluePeople= $("#blueBehaviour");
var greenPeople=$("#greenBehaviour");


redPeople.on({
    change: function () { updateStatusBehaviour(); enableForwardButtonEnergiedaten() }
});

bluePeople.on({
    change: function () { updateStatusBehaviour(); enableForwardButtonEnergiedaten() }
});

greenPeople.on({
    change: function () { updateStatusBehaviour(); enableForwardButtonEnergiedaten() }
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
// Initiale Ausführung zur Klassensetzung der vorausgefüllte Werte
updateStatusBehaviour()