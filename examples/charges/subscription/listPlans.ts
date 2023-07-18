/* eslint-disable import/extensions */
import EfiPay from 'gn-api-sdk-typescript';
import options from '../../credentials';

const params = {
	name: 'My Plan',
	limit: 20,
	offset: 0,
};

const efipay = new EfiPay(options);

efipay
	.listPlans(params)
	.then((resposta: Promise<any>) => {
		console.log(resposta);
	})
	.catch((error: Promise<any>) => {
		console.log(error);
	});
