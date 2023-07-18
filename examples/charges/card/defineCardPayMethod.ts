/* eslint-disable import/extensions */
import EfiPay from 'gn-api-sdk-typescript';
import options from '../../credentials';

const body = {
	payment: {
		credit_card: {
			installments: 1,
			payment_token: '6426f3abd8688639c6772963669bbb8e0eb3c319',
			billing_address: {
				street: 'Av. JK',
				number: 909,
				neighborhood: 'Bauxita',
				zipcode: '35400000',
				city: 'Ouro Preto',
				state: 'MG',
			},
			customer: {
				name: 'Gorbadoc Oldbuck',
				email: 'oldbuck@efipay.com.br',
				cpf: '94271564656',
				birth: '1977-01-15',
				phone_number: '5144916523',
			},
		},
	},
};

const params = {
	id: 1000,
};

const efipay = new EfiPay(options);

efipay
	.definePayMethod(params, body)
	.then((resposta: Promise<any>) => {
		console.log(resposta);
	})
	.catch((error: Promise<any>) => {
		console.log(error);
	});
