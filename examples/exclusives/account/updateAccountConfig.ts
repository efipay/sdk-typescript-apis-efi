/* eslint-disable import/extensions */
import EfiPay from 'gn-api-sdk-typescript';
import options from '../../credentials';

const body = {
	pix: {
		receberSemChave: true,
		chaves: {
			SUACHAVEPIX: {
				recebimento: {
					txidObrigatorio: false,
					qrCodeEstatico: {
						recusarTodos: false,
					},
				},
			},
		},
	},
};

const efipay = new EfiPay(options);

efipay
	.updateAccountConfig([], body)
	.then((resposta: Promise<any>) => {
		console.log(resposta);
	})
	.catch((error: Promise<any>) => {
		console.log(error);
	});
