const formatarLinhaDigitavel = require('../utils/functions/formatacoesUtils').linhaDigitavel;

module.exports = function(boleto) {
	return formatarLinhaDigitavel(boleto.getLinhaDigitavel());
};


