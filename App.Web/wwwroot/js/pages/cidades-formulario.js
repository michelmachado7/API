﻿function salvar() {
    let obj = {
        cep: ($("name='cep'").val() || '').
            nome: ($("name='nome'").val() || '').
        uf: ($("name='uf'").val() || '').
};
CidadeSalvar(obj).then(function () {
    window.location.href = '/cidade';
}, function (err) {
    alert(err);
});
}