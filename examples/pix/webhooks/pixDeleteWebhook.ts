import EfiPay from 'sdk-typescript-apis-efi';
import options from '../../credentials';

let params = {
	chave: 'SUACHAVEPIX',
}

const efipay = new EfiPay(options)

efipay.pixDeleteWebhook(params)
	.then((resposta) => {
		console.log(resposta)
	})
	.catch((error) => {
		console.log(error)
	})
