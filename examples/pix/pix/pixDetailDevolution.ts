/* eslint-disable import/extensions */
import EfiPay from 'gn-api-sdk-typescript';
import options from '../../credentials';

const params = {
	e2eId: 'E18236120202104191813s0326120V4K',
	id: '607dc88bb83bf',
};

const efipay = new EfiPay(options);

efipay
	.pixDetailDevolution(params)
	.then((resposta: Promise<any>) => {
		console.log(resposta);
	})
	.catch((error: Promise<any>) => {
		console.log(error);
	});
