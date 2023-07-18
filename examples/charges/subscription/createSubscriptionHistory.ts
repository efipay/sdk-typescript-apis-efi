/* eslint-disable import/extensions */
import EfiPay from 'gn-api-sdk-typescript';
import options from '../../credentials';

const params = {
	id: 1001,
};

const body = {
	description: 'This subscription is about a service',
};

const efipay = new EfiPay(options);

efipay
	.createSubscriptionHistory(params, body)
	.then((resposta: Promise<any>) => {
		console.log(resposta);
	})
	.catch((error: Promise<any>) => {
		console.log(error);
	});
