
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