
$("#Automatize_btn_back").on({
    click:
        function(){
            formShowPreviouos("Automatize", "Energiedaten");
        }
});
$("#Automatize_btn_forward").on({
    click:
        function(){
            formShowNext(true, "Automatize", "Schulung");
        }
});

function showAutomatizeContent(){
    // ####### SHOW AUTOMATIZE CONTENT ##########
    $("#check_calc_automatize").on({
        change:
            function () {
                if(document.getElementById('check_calc_automatize').checked){
                    $("#Automatize_content").fadeIn("slow");
                } else {
                    $("#Automatize_content").fadeOut("slow");
                }
            }
    });

    // ## --> Show Elektroverbrauch <-- ##
    var calcAutomatizeElec_Checkbox = $("#calc_autoElec");
    var ElecAutoSavings = $("#ElecAuto_SavingsDIV");
    var ElecAutoSavingsAbsolut = $("#ElecAuto_Savings_AbsDIV");
    var ElecAutoCost = $("#ElecAuto_CostDIV");
    var ElecAutoCostMaintain = $("#ElecAuto_CostMaintainDIV");

    calcAutomatizeElec_Checkbox.on({
        change:
            function () {
                if (document.getElementById('calc_autoElec').checked){
                    ElecAutoSavings.fadeIn("slow");
                    ElecAutoSavingsAbsolut.fadeIn("slow");
                    ElecAutoCost.fadeIn("slow");
                    ElecAutoCostMaintain.fadeIn("slow");
                } else {
                    ElecAutoSavings.fadeOut("slow");
                    ElecAutoSavingsAbsolut.fadeOut("slow");
                    ElecAutoCost.fadeOut("slow");
                    ElecAutoCostMaintain.fadeOut("slow");
                }
            }
    });


    // ## --> Show Wärmeverbrauch <-- ##
    var calcAutomatizeHeat_Checkbox = $("#calc_autoHeatManual");
    var HeatAutoSavings = $("#HeatAuto_SavingsDIV");
    var HeatAutoSavingsAbsolut = $("#HeatAuto_Savings_AbsDIV");
    var HeatAutoCost = $("#HeatAuto_CostDIV");
    var HeatAutoCostMaintain = $("#HeatAuto_CostMaintainDIV");

    calcAutomatizeHeat_Checkbox.on({
        change:
            function () {
                if (document.getElementById('calc_autoHeatManual').checked){
                    HeatAutoSavings.fadeIn("slow");
                    HeatAutoSavingsAbsolut.fadeIn("slow");
                    HeatAutoCost.fadeIn("slow");
                    HeatAutoCostMaintain.fadeIn("slow");
                } else {
                    HeatAutoSavings.fadeOut("slow");
                    HeatAutoSavingsAbsolut.fadeOut("slow");
                    HeatAutoCost.fadeOut("slow");
                    HeatAutoCostMaintain.fadeOut("slow");
                }
            }
    });
};
showAutomatizeContent();

function validateAutoElectricity(){
    // ################### Validate Elec  ######################
    var ElecAuto_Savings_Val = $("#ElecAuto_Savings");
    var ElecAuto_SavingsAbs_Val = $("#ElecAuto_Savings_Abs");
    var ElecAuto_Cost_Val = $("#ElecAuto_Cost");
    var ElecAuto_CostMaintain_Val = $("#ElecAuto_CostMaintain");

    ElecAuto_Savings_Val.on({
        focusout:
            function () {
                if ( ElecAuto_Savings_Val.val() == "" ){
                    removeValidationClasses("#ElecAuto_Savings");
                    addValidationClasses("#ElecAuto_Savings", "error");
                } else if((parseFloat(ElecAuto_Savings_Val.val()) <= 15.0) || (parseFloat(ElecAuto_Savings_Val.val()) >= 75.0)){
                    removeValidationClasses("#ElecAuto_Savings");
                    addValidationClasses("#ElecAuto_Savings", "warning");
                } else {
                    removeValidationClasses("#ElecAuto_Savings");
                    addValidationClasses("#ElecAuto_Savings", "success");
                }
                ElecAuto_SavingsAbs_Val.val(Math.round(ElecAuto_Savings_Val.val() / 100 * $("#energyUsageElec").val()));
            }
    });

    ElecAuto_Cost_Val.on({
        focusout:
            function () {
                if ( ElecAuto_Cost_Val.val() == "" ){
                    removeValidationClasses("#ElecAuto_Cost");
                    addValidationClasses("#ElecAuto_Cost", "error");
                } else if((parseFloat(ElecAuto_Cost_Val.val()) <= 0)){
                    removeValidationClasses("#ElecAuto_Cost");
                    addValidationClasses("#ElecAuto_Cost", "warning");
                } else {
                    removeValidationClasses("#ElecAuto_Cost");
                    addValidationClasses("#ElecAuto_Cost", "success");
                }
            }
    });

    ElecAuto_CostMaintain_Val.on({
        focusout:
            function () {
                if ( ElecAuto_CostMaintain_Val.val() == "" ){
                    removeValidationClasses("#ElecAuto_CostMaintain");
                    addValidationClasses("#ElecAuto_CostMaintain", "error");
                } else if((parseFloat(ElecAuto_CostMaintain_Val.val()) <= 0)){
                    removeValidationClasses("#ElecAuto_CostMaintain");
                    addValidationClasses("#ElecAuto_CostMaintain", "warning");
                } else {
                    removeValidationClasses("#ElecAuto_CostMaintain");
                    addValidationClasses("#ElecAuto_CostMaintain", "success");
                }
            }
    });
}
validateAutoElectricity();

function validateAutoHeating(){
    // ################### Validate Heat  ######################
    var HeatAuto_Savings_Val = $("#HeatAuto_Savings");
    var HeatAuto_SavingsAbs_Val = $("#HeatAuto_Savings_Abs");
    var HeatAuto_Cost_Val = $("#HeatAuto_Cost");
    var HeatAuto_CostMaintain_Val = $("#HeatAuto_CostMaintain");

    HeatAuto_Savings_Val.on({
        focusout:
            function () {
                if ( HeatAuto_Savings_Val.val() == "" ){
                    removeValidationClasses("#HeatAuto_Savings");
                    addValidationClasses("#HeatAuto_Savings", "error");
                } else if((parseFloat(HeatAuto_Savings_Val.val()) <= 15.0) || (parseFloat(HeatAuto_Savings_Val.val()) >= 75.0)){
                    removeValidationClasses("#HeatAuto_Savings");
                    addValidationClasses("#HeatAuto_Savings", "warning");
                } else {
                    removeValidationClasses("#HeatAuto_Savings");
                    addValidationClasses("#HeatAuto_Savings", "success");
                }
                HeatAuto_SavingsAbs_Val.val(Math.round(HeatAuto_Savings_Val.val() / 100 * $("#energyUsageHeat").val()));
            }
    });

    HeatAuto_Cost_Val.on({
        focusout:
            function () {
                if ( HeatAuto_Cost_Val.val() == "" ){
                    removeValidationClasses("#HeatAuto_Cost");
                    addValidationClasses("#HeatAuto_Cost", "error");
                } else if((parseFloat(HeatAuto_Cost_Val.val()) <= 0)){
                    removeValidationClasses("#HeatAuto_Cost");
                    addValidationClasses("#HeatAuto_Cost", "warning");
                } else {
                    removeValidationClasses("#HeatAuto_Cost");
                    addValidationClasses("#HeatAuto_Cost", "success");
                }
            }
    });

    HeatAuto_CostMaintain_Val.on({
        focusout:
            function () {
                if ( HeatAuto_CostMaintain_Val.val() == "" ){
                    removeValidationClasses("#HeatAuto_CostMaintain");
                    addValidationClasses("#HeatAuto_CostMaintain", "error");
                } else if((parseFloat(HeatAuto_CostMaintain_Val.val()) <= 0)){
                    removeValidationClasses("#HeatAuto_CostMaintain");
                    addValidationClasses("#HeatAuto_CostMaintain", "warning");
                } else {
                    removeValidationClasses("#HeatAuto_CostMaintain");
                    addValidationClasses("#HeatAuto_CostMaintain", "success");
                }
            }
    });
}
validateAutoHeating();