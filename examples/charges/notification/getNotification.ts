import EfiPay from 'sdk-typescript-apis-efi';
import options from '../../credentials';

let params = {
	token: '0476a1d1-cf40-4702-889c-60f06acecb73',
}

const efipay = new EfiPay(options)

// O método getNotification indica os campos que devem ser enviados e que serão retornados
efipay.getNotification(params)
	.then((resposta) => {
		console.log(resposta) // Aqui você tera acesso a resposta da API e os campos retornados de forma intuitiva
	})
	.catch((error) => {
		console.log(error)
	})
