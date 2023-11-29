document.addEventListener('DOMContentLoaded', function() {
    FLU.style.display = 'none';
    MAN.style.display = 'none';
});
const CALCULAR = document.getElementById('calcular');
const ERROR = document.getElementById('error');
const FLU = document.getElementById('flu');
const MAN = document.getElementById('man');
const DATO_INPUT = document.getElementById('peso');

CALCULAR.addEventListener('click', function() {
    const DATO = DATO_INPUT.valueAsNumber; 

    if (DATO > 0) {
        ERROR.style.display = 'none';

        let flujo, mantenimiento;

        if (DATO <= 30) {
            flujo = holliday(DATO);
            mantenimiento = flujo * 1.5;
        } else {
            const { volumen1500 } = superficie(DATO);
            flujo = volumen1500; 
            mantenimiento = flujo * 1.5;
        }

        FLU.innerHTML = 'Volumen diario: ' + flujo + ' cc';
        MAN.innerHTML = 'Mantenimiento: ' + Math.round(flujo / 24) + ' cc/hr | m+m/2: ' + flujo / 24 * 1.5 + ' cc/hr';
        FLU.style.display = 'block';
        MAN.style.display = 'block';
    } else {
        ERROR.style.display = 'block';
        FLU.style.display = 'none';
        MAN.style.display = 'none';
    }
});

function holliday(DATO) {
    let resultado;
    if (DATO >= 20) {
        resultado = ((DATO - 20) * 20) + 1500;
    } else if (DATO > 10) {
        resultado = ((DATO - 10) * 50) + 1000;
    } else {
        resultado = DATO * 100;
    }
    return resultado;
}

function superficie(DATO) {
    let superficie = ((DATO * 4) + 7) / (DATO + 90);
    let volumen1500 = Math.round(superficie * 1500);

    return {volumen1500 };

}
