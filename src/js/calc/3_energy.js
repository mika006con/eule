
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