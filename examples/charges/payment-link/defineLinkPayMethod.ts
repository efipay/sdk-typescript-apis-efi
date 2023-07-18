/* eslint-disable import/extensions */
import EfiPay from 'gn-api-sdk-typescript';
import options from '../../credentials';

const params = {
	id: 0,
};

const body = {
	billet_discount: 0,
	card_discount: 0,
	message: '',
	expire_at: '2022-12-01',
	request_delivery_address: false,
	payment_method: 'all',
};

const efipay = new EfiPay(options);

efipay
	.defineLinkPayMethod(params, body)
	.then((resposta: Promise<any>) => {
		console.log(resposta);
	})
	.catch((error: Promise<any>) => {
		console.log(error);
	});
