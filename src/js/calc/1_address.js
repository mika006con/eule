function Step1Validation(){
    var street = $("#locationStreetDIV").hasClass("has-success");
    var houseid = $("#locationHouseIDDIV").hasClass("has-success");
    var zipcode = $("#locationZIPDIV").hasClass("has-success");
    var city = $("#locationCityDIV").hasClass("has-success");
    var country = $("#locationCountryDIV").hasClass("has-success");
    return street && houseid && zipcode && city && country;
}

$("#Grunddaten_btn_forward").on({
    click:
        function(){
            formShowNext(true, "Grunddaten", "Gebäudedaten");
            //formShowNext(Step1Validation(), "Grunddaten", "Gebäudedaten");
        }
});

// --> Step 1 onFocusOut Validation Events <<<
// TODO: Enter Validation values
$("#locationStreet").on({
    focusout:
        function checkStreet() {
            removeValidationClasses("#locationStreet");
            switch ($("#locationStreet").val()) {
                case "" :
                    addValidationClasses("#locationStreet", "success");
                    break;
                default :
                    addValidationClasses("#locationStreet", "error");
            }
        }
});
$("#locationHouseID").on({
    focusout:
        function() {
            removeValidationClasses("#locationHouseID");
            switch ($("#locationHouseID").val()) {
                case "" :
                    addValidationClasses("#locationHouseID", "success");
                    break;
                default :
                    addValidationClasses("#locationHouseID", "error");
            }
        }
});
$("#locationZIP").on({
    focusout:
        function() {
            removeValidationClasses("#locationZIP");
            switch ($("#locationZIP").val()) {
                case "":
                    addValidationClasses("#locationZIP", "success");
                    break;
                default :
                    addValidationClasses("#locationZIP", "error");
            }
        }
});
$("#locationCity").on({
    focusout:
        function() {
            removeValidationClasses("#locationCity");
            switch ($("#locationCity").val()) {
                case "" :
                    addValidationClasses("#locationCity", "success");
                    break;
                default :
                    addValidationClasses("#locationCity", "error");
            }
        }
});
$("#locationCountry").on({
    focusout:
        function() {
            removeValidationClasses("#locationCountry");
            switch ($("#locationCountry").val()) {
                case "" :
                    addValidationClasses("#locationCountry", "success");
                    break;
                default :
                    addValidationClasses("#locationCountry", "error");
            }
        }
});