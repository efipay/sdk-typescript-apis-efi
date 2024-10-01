import EfiPay from 'sdk-typescript-apis-efi';
import options from '../../credentials';

options['validateMtls'] = false

let body = {
	webhookUrl: 'https://exemplo-pix/webhook',
}

let params = {
	chave: 'SUACHAVEPIX',
}

const efipay = new EfiPay(options)

efipay.pixConfigWebhook(params, body)
	.then((resposta) => {
		console.log(resposta)
	})
	.catch((error) => {
		console.log(error)
	})
