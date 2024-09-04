import EfiPay from 'sdk-typescript-apis-efi';
import options from '../../credentials';

let params = {
	inicio: '2023-01-22T16:01:35Z',
	fim: '2023-11-30T20:10:00Z',
}

const efipay = new EfiPay(options)

// O método pixListDueCharges indica os campos que devem ser enviados e que serão retornados
efipay.pixListDueCharges(params)
	.then((resposta) => {
		console.log(resposta) // Aqui você tera acesso a resposta da API e os campos retornados de forma intuitiva
	}) 
	.catch((error) => {
		console.log(error)
	})
