/* eslint-disable import/extensions */
import EfiPay from 'gn-api-sdk-typescript';
import options from '../../credentials';

const efipay = new EfiPay(options);

const body = {
	pagador: {
		idParticipante: '',
		cpf: '',
	},
	valor: '0.01',
	favorecido: {
		contaBanco: {
			codigoBanco: '',
			agencia: '',
			documento: '',
			nome: '',
			conta: '',
			tipoConta: '',
		},
	},
	codigoCidadeIBGE: '',
	infoPagador: 'Cobrança referente ao pedido X',
};

efipay
	.ofStartPixPayment([], body)
	.then((resposta: Promise<any>) => {
		console.log(resposta);
	})
	.catch((error: Promise<any>) => {
		console.log(error);
	});
