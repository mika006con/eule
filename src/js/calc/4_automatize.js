
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