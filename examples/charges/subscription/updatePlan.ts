import EfiPay from 'sdk-typescript-apis-efi';
import options from '../../credentials';

let params = {
	id: 1008,
}

let body = {
	name: 'My new plan',
}

const efipay = new EfiPay(options)

// O método updatePlan indica os campos que devem ser enviados e que serão retornados
efipay.updatePlan(params, body)
	.then((resposta) => {
		console.log(resposta) // Aqui você tera acesso a resposta da API e os campos retornados de forma intuitiva
	})
	.catch((error) => {
		console.log(error)
	})
