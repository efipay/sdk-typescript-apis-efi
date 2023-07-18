/* eslint-disable import/extensions */
import EfiPay from 'gn-api-sdk-typescript';
import options from '../../credentials';

options.validateMtls = false;

const body = {
	webhookUrl: 'https://exemplo-pix/webhook',
};

const params = {
	chave: 'SUACHAVEPIX',
};

const efipay = new EfiPay(options);

efipay
	.pixConfigWebhook(params, body)
	.then((resposta: Promise<any>) => {
		console.log(resposta);
	})
	.catch((error: Promise<any>) => {
		console.log(error);
	});
