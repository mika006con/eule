
/* ####################################################################################
   ################################  Berechnungen #####################################
   ####################################################################################
 */
//-- Kapitalwertberechnung --->
/*  OUTPUT =   Kapitalwert der Investition
    _Et =   Einzahlungen der Periode t : [Array]
    _At =   Auszahlungen der Periode t : [Array]
    _i  =   Kalkulationszinssatz
    _n  =   Nutzungsdauer des Investitionsobjekts
 */
function calcCapitalValue( _Et, _At, _i, _n){
    // Kapitalwert = Sum( t=0, n: (Et-At) * ( 1+i ) ^-(Periode t)
    if (_Et.length != _At.length || _Et.length != _n+1){
        alert ( "Arrays stimmen nicht" );
    }
    var c0 = 0;
    for (i = 0; i <= _n; i++){
        c0 += (_Et[i] - _At[i]) * Math.pow(1+i, -i);
    }
}
