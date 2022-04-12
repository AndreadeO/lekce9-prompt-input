const vysledek = document.getElementById('vysledek > span');

document.getElementById('tlacitko-secti').addEventListener('click', () => {
    let prvni = parseInt(document.querySelector('input[name=a]').value);
    let druhe = parseInt(document.querySelector('input[name=b]').value);
    vysledek.innerHTML = secti(
        prvni,
        druhe,
        document.getElementById("operator").value
    );
});
