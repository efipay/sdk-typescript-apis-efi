/* eslint-disable import/extensions */
import EfiPay from 'gn-api-sdk-typescript';
import options from '../../credentials';

const efipay = new EfiPay(options);

const params = {
	dataInicio: '2022-01-01',
	dataFim: '2022-06-30',
};

efipay
	.payListPayments(params, [])
	.then((resposta: Promise<any>) => {
		console.log(resposta);
	})
	.catch((error: Promise<any>) => {
		console.log(error);
	});
