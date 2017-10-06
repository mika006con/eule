
$("#Schulung_btn_back").on({
    click:
        function(){
            formShowPreviouos("Schulung", "Automatize");
        }
});
$("#Schulung_btn_forward").on({
    click:
        function(){
            formShowNext(true, "Schulung", "FinAnreiz");
        }
});

$("#check_calc_education").on({
    change:
        function () {
            if(document.getElementById('check_calc_education').checked){
                $("#Schulung_content").fadeIn("slow");
            } else {
                $("#Schulung_content").fadeOut("slow");
            }
        }
});

// ##############  Education Row 1 ################
var educationQuantity = $("#educationQuantity");
var educationCost = $("#educationCost");
var educationTotalCost = $("#educationTotalCost");

function validateEducationQuantity () {
    if ( educationQuantity.val() == "" || (parseFloat(educationQuantity.val()) <= 0) ){
        removeValidationClasses("#educationQuantity");
        addValidationClasses("#educationQuantity", "error");
    } else if((parseFloat(educationQuantity.val()) > 100)){
        removeValidationClasses("#educationQuantity");
        addValidationClasses("#educationQuantity", "warning");
    } else {
        removeValidationClasses("#educationQuantity");
        addValidationClasses("#educationQuantity", "success");
    }
    educationTotalCost.val(Math.round(educationQuantity.val() * educationCost.val()));
}
function validateEducationCost() {
    if ( educationCost.val() == "" ){
        removeValidationClasses("#educationCost");
        addValidationClasses("#educationCost", "error");
    } else if((parseFloat(educationCost.val()) <= 0)){
        removeValidationClasses("#educationCost");
        addValidationClasses("#educationCost", "warning");
    } else {
        removeValidationClasses("#educationCost");
        addValidationClasses("#educationCost", "success");
    }
    educationTotalCost.val(Math.round(educationQuantity.val() * educationCost.val()));
}

educationQuantity.on({
    focusout:
        function () {
            validateEducationQuantity();
        },
    change:
        function () {
            validateEducationQuantity();
        }
});
educationCost.on({
    focusout:
        function () {
            validateEducationCost();
        },
    change:
        function () {
            validateEducationCost();
        }
});



// ##############  Education Row 2 ################
var educationSuccessRate = $("#educationSuccessRate");
var educationLasts = $("#educationLasts");
var educationTotalSavings = $("#educationTotalSavings");
// energElecUsage = $("#energyUsageElec"); && energHeatUsage = $("#energyUsageHeat");

function calcLinearDescrease(Amount, DurationYears){
    var savings = 0;
    var reduceAmount = Amount / DurationYears;
    var currAmount = Amount;
    for (var i=DurationYears; i > 0; i--){
        savings += currAmount;
        currAmount -= reduceAmount;
    }
    return savings;
}

function validateEducationSuccessRate () {
    if ( educationSuccessRate.val() == "" || (parseFloat(educationSuccessRate.val()) < 0) || (parseFloat(educationSuccessRate.val()) >= 100) ){
        removeValidationClasses("#educationSuccessRate");
        addValidationClasses("#educationSuccessRate", "error");
    } else if((parseFloat(educationSuccessRate.val()) <= 0.01) || (parseFloat(educationSuccessRate.val()) > 50)){
        removeValidationClasses("#educationSuccessRate");
        addValidationClasses("#educationSuccessRate", "warning");
    } else {
        removeValidationClasses("#educationSuccessRate");
        addValidationClasses("#educationSuccessRate", "success");
    }
    var SumEnergyUsagePerAnno = (parseFloat($("#energyUsageElec").val()) + parseFloat($("#energyUsageHeat").val()));
    educationTotalSavings.val(Math.round(calcLinearDescrease(SumEnergyUsagePerAnno, educationLasts.val()) * educationSuccessRate.val() / 100));
}
function validateEducationLasts() {
    if ( educationLasts.val() == "" || (parseFloat(educationLasts.val()) <= 0)){
        removeValidationClasses("#educationLasts");
        addValidationClasses("#educationLasts", "error");
    } else if((parseFloat(educationLasts.val()) >= 4)){
        removeValidationClasses("#educationLasts");
        addValidationClasses("#educationLasts", "warning");
    } else {
        removeValidationClasses("#educationLasts");
        addValidationClasses("#educationLasts", "success");
    }
    var SumEnergyUsagePerAnno = (parseFloat($("#energyUsageElec").val()) + parseFloat($("#energyUsageHeat").val()));
    educationTotalSavings.val(Math.round(calcLinearDescrease(SumEnergyUsagePerAnno, educationLasts.val()) * educationSuccessRate.val() / 100));
}

educationSuccessRate.on({
    focusout:
        function () {
            validateEducationSuccessRate();
        },
    change:
        function () {
            validateEducationSuccessRate();
        }
});

educationLasts.on({
    focusout:
        function () {
            validateEducationLasts();
        },
    change:
        function () {
            validateEducationLasts();
        }
});



