
$("#FinAnreiz_btn_back").on({
    click:
        function(){
            formShowPreviouos("FinAnreiz", "Schulung");
        }
});
$("#FinAnreiz_btn_forward").on({
    click:
        function(){
            formShowNext(true, "FinAnreiz", "Kontrolle");
        }
});

var showCalcInterest = $("#showCalcInterest");
function validateShowCalcInterest() {
    if ( showCalcInterest.val() == ""){
        removeValidationClasses("#showCalcInterest");
        addValidationClasses("#showCalcInterest", "error");
    } else if((parseFloat(showCalcInterest.val()) >= 6) || (parseFloat(showCalcInterest.val()) <= 0)){
        removeValidationClasses("#showCalcInterest");
        addValidationClasses("#showCalcInterest", "warning");
    } else {
        removeValidationClasses("#showCalcInterest");
        addValidationClasses("#showCalcInterest", "success");
    }
}
showCalcInterest.on({
    focusout:
        function () {
            validateShowCalcInterest();
        },
    change:
        function () {
            validateShowCalcInterest();
        }
});

var finToEmployees = $("#finToEmployees");
function validateFinToEmployees(){
    if ( finToEmployees.val() == "" || (parseFloat(finToEmployees.val()) < 0) || (parseFloat(finToEmployees.val()) > 100)){
        removeValidationClasses("#finToEmployees");
        addValidationClasses("#finToEmployees", "error");
    } else if((parseFloat(finToEmployees.val()) <= 0)){
        removeValidationClasses("#finToEmployees");
        addValidationClasses("#finToEmployees", "warning");
    } else {
        removeValidationClasses("#finToEmployees");
        addValidationClasses("#finToEmployees", "success");
    }
}
finToEmployees.on({
    focusout:
        function () {
            validateFinToEmployees();
        },
    change:
        function () {
            validateFinToEmployees();
        }
});