/* eslint-disable import/extensions */
import Gerencianet from 'gn-api-sdk-typescript';
import options from '../../credentials';

const params = {
	brand: 'visa',
	total: 5000,
};

const gerencianet = new Gerencianet(options);

gerencianet
	.getInstallments(params)
	.then((resposta: Promise<any>) => {
		console.log(resposta);
	})
	.catch((error: Promise<any>) => {
		console.log(error);
	});
