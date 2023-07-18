/* eslint-disable import/extensions */
import EfiPay from 'gn-api-sdk-typescript';
import options from '../../credentials';

const params = {
	id: 25093006,
	parcel: 1,
};

const body = {
	expire_at: '2023-12-12',
};

const efipay = new EfiPay(options);

efipay
	.updateCarnetParcel(params, body)
	.then((resposta: Promise<any>) => {
		console.log(resposta);
	})
	.catch((error: Promise<any>) => {
		console.log(error);
	});
