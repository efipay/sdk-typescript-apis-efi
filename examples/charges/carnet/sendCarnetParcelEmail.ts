/* eslint-disable import/extensions */
import EfiPay from 'gn-api-sdk-typescript';
import options from '../../credentials';

const params = {
	id: 1002,
	parcel: 1,
};

const body = {
	email: 'oldbuck@efipay.com.br',
};

const efipay = new EfiPay(options);

efipay
	.sendCarnetParcelEmail(params, body)
	.then((resposta: Promise<any>) => {
		console.log(resposta);
	})
	.catch((error: Promise<any>) => {
		console.log(error);
	});
