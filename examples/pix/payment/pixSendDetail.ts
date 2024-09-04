import EfiPay from 'sdk-typescript-apis-efi';
import options from '../../credentials';

let params = {
	e2eid: '',
}

const efipay = new EfiPay(options)

// O método pixSendDetail indica os campos que devem ser enviados e que serão retornados
efipay.pixSendDetail(params)
	.then((resposta) => {
		console.log(resposta) // Aqui você tera acesso a resposta da API e os campos retornados de forma intuitiva
	})
	.catch((error) => {
		console.log(error)
	})
