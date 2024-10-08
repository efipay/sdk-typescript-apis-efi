import EfiPay from 'sdk-typescript-apis-efi';
import options from '../../credentials';

const efipay = new EfiPay(options)

let params = {
    inicio: '2024-01-01',
    fim: '2024-01-31',
}

// O método medList indica os campos que devem ser enviados e que serão retornados
efipay.medList(params)
    .then((resposta) => {
        console.log(resposta) // Aqui você tera acesso a resposta da API e os campos retornados de forma intuitiva
    })
    .catch((error) => {
        console.log(error)
    })
