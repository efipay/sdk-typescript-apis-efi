import EfiPay from 'sdk-typescript-apis-efi';
import options from '../../credentials';

let params = {
	inicio: '2022-01-22T16:01:35Z',
	fim: '2022-11-30T20:10:00Z',
}

const efipay = new EfiPay(options)

efipay.pixReceivedList(params)
	.then((resposta) => {
		console.log(resposta)
	})
	.catch((error) => {
		console.log(error)
	})
