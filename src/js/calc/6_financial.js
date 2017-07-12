
$("#FinAnreiz_btn_back").on({
    click:
        function(){
            formShowPreviouos("FinAnreiz", "Energiedaten");
        }
});
$("#FinAnreiz_btn_forward").on({
    click:
        function(){
            formShowNext(true, "FinAnreiz", "FinAnreiz");
        }
});