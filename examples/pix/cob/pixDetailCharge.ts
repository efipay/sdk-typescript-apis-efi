/* eslint-disable import/extensions */
import EfiPay from 'gn-api-sdk-typescript';
import options from '../../credentials';

const params = {
	txid: 'dt9BHlyzrb5jrFNAdfEDVpHgiOmDbVqVxd',
};

const efipay = new EfiPay(options);

efipay
	.pixDetailCharge(params)
	.then((resposta: Promise<any>) => {
		console.log(resposta);
	})
	.catch((error: Promise<any>) => {
		console.log(error);
	});
