/* eslint-disable import/extensions */
import EfiPay from 'gn-api-sdk-typescript';
import options from '../../credentials';

const efipay = new EfiPay(options);

const params = {
	inicio: '2022-01-01',
	fim: '2022-06-30',
};

efipay
	.ofListPixPayment(params, [])
	.then((resposta: Promise<any>) => {
		console.log(resposta);
	})
	.catch((error: Promise<any>) => {
		console.log(error);
	});
