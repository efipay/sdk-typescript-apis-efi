/* eslint-disable import/extensions */
import EfiPay from 'gn-api-sdk-typescript';
import options from '../../credentials';

const body = {
	valor: '7.89',
};

const params = {
	e2eId: 'E18236120202104191813s0326120V4K',
	id: '101',
};

const efipay = new EfiPay(options);

efipay
	.pixDevolution(params, body)
	.then((resposta: Promise<any>) => {
		console.log(resposta);
	})
	.catch((error: Promise<any>) => {
		console.log(error);
	});
