const path = require('path');
const StringUtils = require('../../utils/string-utils');
const pad = StringUtils.pad;

var Bs2 = (function () {
	var NUMERO_BS2 = '218',
		DIGITO_BS2 = '6';

	function Bs2() {

	}

	Bs2.prototype.getTitulos = function () {
		return {
			instrucoes: 'Informações de responsabilidade do beneficiário',
			nomeDoPagador: 'Nome do Pagador',
			especie: 'Moeda',
			quantidade: 'Quantidade',
			valor: 'Valor',
			moraMulta: '(+) Juros / Multa'
		};
	};

	Bs2.prototype.exibirReciboDoPagadorCompleto = function () {
		return true;
	};

	Bs2.prototype.exibirCampoCip = function () {
		return false;
	};

	Bs2.prototype.geraCodigoDeBarrasPara = function (boleto) {
		return boleto.getcodigoBarraNumerico();
	};

	Bs2.prototype.getNumeroFormatadoComDigito = function () {
		return [
			NUMERO_BS2,
			DIGITO_BS2
		].join('-');
	};

	Bs2.prototype.getNumeroFormatado = function () {
		return NUMERO_BS2;
	};

	Bs2.prototype.getCarteiraFormatado = function (beneficiario) {
		return pad(beneficiario.getCarteira(), 2, '0');
	};

	Bs2.prototype.getCarteiraTexto = function (beneficiario) {
		return pad(beneficiario.getCarteira(), 2, '0');
	};

	Bs2.prototype.getCodigoFormatado = function (beneficiario) {
		return pad(beneficiario.getCodigoBeneficiario(), 7, '0');
	};

	Bs2.prototype.getImagem = function () {
		return path.join(__dirname, 'logotipos/bs2.png');
	};

	Bs2.prototype.getNossoNumeroFormatado = function (beneficiario) {
		return pad(beneficiario.getNossoNumero(), 17, '0');
	};

	Bs2.prototype.getNossoNumeroECodigoDocumento = function (boleto) {
		var beneficiario = boleto.getBeneficiario();

		return [
			this.getNossoNumeroFormatado(beneficiario)
		].join('-');
	};

	Bs2.prototype.getNome = function () {
		return 'Banco Bs2';
	};

	Bs2.prototype.getImprimirNome = function () {
		return false;
	};

	Bs2.prototype.getAgenciaECodigoBeneficiario = function (boleto) {
		var beneficiario = boleto.getBeneficiario(),

			codigo = this.getCodigoFormatado(beneficiario),
			digitoCodigo = beneficiario.getDigitoCodigoBeneficiario();

		if (digitoCodigo) {
			codigo += '-' + digitoCodigo;
		}

		return beneficiario.getAgenciaFormatada() + '/' + codigo;
	};

	Bs2.novoBs2 = function () {
		return new Bs2();
	};

	return Bs2;
})();

module.exports = Bs2;
