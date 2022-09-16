function SetCookie(name, value) {
    let expires = "";
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

function GetCookie(name) {
    let nameEQ = name + "=";
    let ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

function DeleteCookie(name) {
    document.cookie = name + '=; Max-Age=-99999999;';
    if (name === 'CP-Token') {
        SetCookie('CP-Token', null);
    }
}

function DeleteAllCookies() {
    DeleteCookie('CP-Token');
    DeleteCacheCookies();
}

function DeleteCacheCookies() {
    DeleteCookie('id-usuario');
    DeleteCookie('id-tipo-usuario');
    DeleteCookie('tipo-usuario');
    DeleteCookie('nome-usuario');
    DeleteCookie('numero-permissoes');
    DeleteCookie('org-codigo');
}

async function CidadeListaCidades() {
    return new Promise((resolve, reject) => {
        Get('Cidade/ListaCidades').then(function (response) {
            if (response.status === 'success') {
                resolve(response.data);
            } else {
                reject(response.message);
            }
        }, function (err) {
            console.error(err);
            reject('Erro desconhecido');
        });
    });
}

async function CidadeBuscaPorId(id) {
    return new Promise((resolve, reject) => {
        Get('Cidade/BuscaPorId?id=' + id).then(function (response) {
            if (response.status === 'success') {
                resolve(response.data);
            } else {
                reject(response.message);
            }
        }, function (err) {
            console.error(err);
            reject('Erro desconhecido');
        });
    });
}

async function CidadeSalvar(obj) {
    return new Promise((resolve, reject) => {
        Post('Cidade/Salvar', obj).then(function (response) {
            if (response.status === 'success') {
                resolve(response.data);
            } else {
                reject(response.message);
            }
        }, function (err) {
            console.error(err);
            reject('Erro desconhecido');
        });
    });
}

async function CidadeRemover(id) {
    return new Promise((resolve, reject) => {
        Delete('Cidade/Remover?id=' + id).then(function (response) {
            if (response.status === 'success') {
                resolve(response.data);
            } else {
                reject(response.message);
            }
        }, function (err) {
            console.error(err);
            reject('Erro desconhecido');
        });
    });
}
