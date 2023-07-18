/* eslint-disable import/extensions */
import EfiPay from 'gn-api-sdk-typescript';
import options from '../../credentials';

const efipay = new EfiPay(options);

const body = {
	valor: '0.01',
};

const params = {
	identificadorPagamento: 'urn:efipay:ea807997-9c28-47a7-8ebc-eeb672ea59f0',
};

efipay
	.ofDevolutionPix(params, body)
	.then((resposta: Promise<any>) => {
		console.log(resposta);
	})
	.catch((error: Promise<any>) => {
		console.log(error);
	});
