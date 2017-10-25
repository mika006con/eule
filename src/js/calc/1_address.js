function Step1Validation(){
    var street = $("#routeDIV").hasClass("has-success");
    var zipcode = $("#postal_codeDIV").hasClass("has-success");
    var city = $("#localityDIV").hasClass("has-success");
    var country = $("#countryDIV").hasClass("has-success");
    return street  && zipcode && city && country;
}

function checkAddressEntries () {
    checkStreet();
    checkStreetNumber();
    checkPostalCode();
    checkLocality();
    checkCountry();
    checkAdministrativeArea();
    enableForwardButtonGrunddaten();
}

function checkStreet() {
    removeValidationClasses("#route");
    switch ($("#route").val()) {
        case "" :
            addValidationClasses("#route", "error");
            break;
        default :
            addValidationClasses("#route", "success");
    }
}

function checkStreetNumber() {
    removeValidationClasses("#street_number");
    switch ($("#street_number").val()) {
        case "" :
            addValidationClasses("#street_number", "error");
            break;
        default :
            addValidationClasses("#street_number", "success");
    }
}

function checkPostalCode() {
    removeValidationClasses("#postal_code");
    switch ($("#postal_code").val()) {
        case "":
            addValidationClasses("#postal_code", "error");
            break;
        default :
            addValidationClasses("#postal_code", "success");
    }
}

function checkLocality() {
    removeValidationClasses("#locality");
    switch ($("#locality").val()) {
        case "" :
            addValidationClasses("#locality", "error");
            break;
        default :
            addValidationClasses("#locality", "success");
    }
}

function checkAdministrativeArea() {
    removeValidationClasses("#administrative_area_level_1");
    switch ($("#administrative_area_level_1").val()) {
        case "" :
            addValidationClasses("#administrative_area_level_1", "error");
            break;
        default :
            addValidationClasses("#administrative_area_level_1", "success");
    }
}

function checkCountry() {
    removeValidationClasses("#country");
    switch ($("#country").val()) {
        case "" :
            addValidationClasses("#country", "error");
            break;
        default :
            addValidationClasses("#country", "success");
    }
}

function enableForwardButtonGrunddaten(){
    document.getElementById('Grunddaten_btn_forward').disabled = !Step1Validation();
}

$("#Grunddaten_btn_forward").on({
    click:
        function(){
            formShowNext(Step1Validation(), "Grunddaten", "Gebäudedaten");
        }
});

// --> Step 1 onFocusOut Validation Events <<<
// TODO: Enter Validation values
$("#route").on({
    change: function(){ checkStreet(); enableForwardButtonGrunddaten() }
});

$("#street_number").on({
    change: function(){ checkStreetNumber(); enableForwardButtonGrunddaten() }
});

$("#postal_code").on({
    change: function(){ checkPostalCode(); enableForwardButtonGrunddaten() }
});

$("#locality").on({
    change: function(){ checkLocality(); enableForwardButtonGrunddaten() }
});

$("#administrative_area_level_1").on({
    change: function(){ checkAdministrativeArea(); enableForwardButtonGrunddaten() }
});

$("#country").on({
    change: function(){ checkCountry(); enableForwardButtonGrunddaten() }
});