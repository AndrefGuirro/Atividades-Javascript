class FormValidator {
    constructor() {
        this.erros = {};
    }

    validarCampo(id, tipo = 'texto') {
        const campo = document.getElementById(id);
        const valor = campo.value.trim();
        const erroDiv = document.getElementById(id + "_erro");

        if (tipo === 'email') {
            const emailValido = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(valor);
            if (!emailValido) {
                erroDiv.textContent = "Por favor, insira um e-mail válido.";
                return false;
            }
        }

        if (valor === "") {
            erroDiv.textContent = "Este campo é obrigatório.";
            return false;
        }

        erroDiv.textContent = "";
        return true;
    }

    formatarTelefone(campo) {
        let valor = campo.value.replace(/\D/g, "");
        valor = valor.length > 10 ? valor.replace(/^(\d{2})(\d{5})(\d{4})$/, "($1) $2-$3") : valor.replace(/^(\d{2})(\d{4})(\d{4})$/, "($1) $2-$3");
        campo.value = valor;
    }

    validarFormulario() {
        const nomeValido = this.validarCampo('nome');
        const emailValido = this.validarCampo('email', 'email');
        const dataNascimentoValido = this.validarCampo('data_nascimento');
        const tipoUsuario = document.querySelector('input[name="tipo_usuario"]:checked').value;
        let camposExtrasValidos = true;

        if (tipoUsuario === "Aluno") {
            camposExtrasValidos = this.validarCampo('curso') && this.validarCampo('matricula');
        } else if (tipoUsuario === "Professor") {
            camposExtrasValidos = this.validarCampo('area') && this.validarCampo('lattes') && this.validarCampo('matricula');
        }

        return nomeValido && emailValido && dataNascimentoValido && camposExtrasValidos;
    }
}

class FormController {
    constructor(validator) {
        this.validator = validator;
        this.init();
    }

    init() {
        this.alternarCampos();
    }

    alternarCampos() {
        const camposDiv = document.getElementById('campos_especificos');
        camposDiv.innerHTML = "";
        const tipoUsuario = document.querySelector('input[name="tipo_usuario"]:checked').value;

        if (tipoUsuario === "Aluno") {
            this.adicionarCampoAluno(camposDiv);
        } else if (tipoUsuario === "Professor") {
            this.adicionarCampoProfessor(camposDiv);
        }
    }

    adicionarCampoAluno(camposDiv) {
        camposDiv.innerHTML = `
            <label for="curso">Curso:</label>
            <input type="text" id="curso" name="curso" placeholder="Digite seu curso" onblur="formController.validator.validarCampo('curso')">
            <label for="matricula">Matrícula (10 dígitos):</label>
            <input type="text" id="matricula" name="matricula" placeholder="Digite sua matrícula" onblur="formController.validator.validarCampo('matricula')">
        `;
    }

    adicionarCampoProfessor(camposDiv) {
        camposDiv.innerHTML = `
            <label for="area">Área:</label>
            <input type="text" id="area" name="area" placeholder="Digite sua área de atuação" onblur="formController.validator.validarCampo('area')">
            <label for="lattes">Lattes:</label>
            <input type="text" id="lattes" name="lattes" placeholder="Digite seu link Lattes" onblur="formController.validator.validarCampo('lattes')">
            <label for="matricula">Matrícula (5 dígitos):</label>
            <input type="text" id="matricula" name="matricula" placeholder="Digite sua matrícula" onblur="formController.validator.validarCampo('matricula')">
        `;
    }

    formatarTelefone(campo) {
        this.validator.formatarTelefone(campo);
    }

    validarFormulario() {
        return this.validator.validarFormulario();
    }
}

// Instanciar as classes e iniciar o controlador do formulário
const validator = new FormValidator();
const formController = new FormController(validator);

window.onload = function() {
    formController.init();
};
