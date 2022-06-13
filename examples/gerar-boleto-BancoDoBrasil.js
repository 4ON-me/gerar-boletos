const { Bancos, Boletos, streamToPromise } = require('../lib/index');

const boleto = {
  banco: new Bancos.BancoBrasil(),
  pagador: {
    registroNacional: '12345678912',
    nome: 'José Bonifácio de Andrada',
    endereco: {
      logradouro: 'Rua Pedro Lessa, 15',
      cidade: 'Rio de Janeiro',
      estadoUF: 'RJ',
      cep: '20030-030'
    }
  },
  // instrucoes: ['Após o vencimento Mora dia R$ 1,59', 'Após o vencimento, multa de 2%'],

  beneficiario: {
    nome: 'Empresa Fictícia LTDA',
    cnpj:'43576788000191',
    dadosBancarios: {
      carteira: '09',
      agencia: '18455',
      conta: '1277165',
    },
    endereco: {
      logradouro: 'Rua Pedro Lessa, 15',
      bairro: 'Centro',
      cidade: 'Rio de Janeiro',
      estadoUF: 'RJ',
      cep: '20030-030'
    }
  },
  boleto: {
    codigoBarraNumerico: '00193901800000011010000003128557664418431217',
    linhaDigitavel: '00190000090312855766144184312179390180000001101',
    numeroDocumento: '00031285576644184312',
    especieDocumento: 'Outro',
    valor: 5.39,
    datas: {
      vencimento: '06-16-2022',
      processamento: '06-13-2022',
      documentos: '06-13-2022'
    }
  }
};

const novoBoleto = new Boletos(boleto);
novoBoleto.gerarBoleto();

novoBoleto.pdfFile().then(async ({ stream }) => {
  // ctx.res.set('Content-type', 'application/pdf');	
  await streamToPromise(stream);
}).catch((error) => {
  return error;
});



