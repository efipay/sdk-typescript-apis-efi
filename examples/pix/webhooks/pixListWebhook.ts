/* eslint-disable import/extensions */
import EfiPay from 'gn-api-sdk-typescript';
import options from '../../credentials';

const params = {
	inicio: '2022-01-22T16:01:35Z',
	fim: '2024-11-30T20:10:00Z',
};

const efipay = new EfiPay(options);

efipay
	.pixListWebhook(params)
	.then((resposta: Promise<any>) => {
		console.log(resposta);
	})
	.catch((error: Promise<any>) => {
		console.log(error);
	});
