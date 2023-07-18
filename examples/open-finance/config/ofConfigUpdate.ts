/* eslint-disable import/extensions */
import EfiPay from 'gn-api-sdk-typescript';
import options from '../../credentials';

const efipay = new EfiPay(options);

const body = {
	redirectURL: 'https:/suaUrl.com.br/redirect',
	webhookURL: 'https://suaUrl.com.br/webhook',
};

efipay
	.ofConfigUpdate([], body)
	.then((resposta: Promise<any>) => {
		console.log(resposta);
	})
	.catch((error: Promise<any>) => {
		console.log(error);
	});
