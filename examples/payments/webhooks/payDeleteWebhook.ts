import EfiPay from 'sdk-typescript-apis-efi';
import options from '../../credentials';

let body = {
    url: 'https://suaUrl.com.br/webhook',
}

const efipay = new EfiPay(options)

// O método payDeleteWebhook indica os campos que devem ser enviados e que serão retornados
efipay.payDeleteWebhook({}, body)
    .then((resposta) => {
        console.log(resposta) // Aqui você tera acesso a resposta da API e os campos retornados de forma intuitiva
    })
    .catch((error) => {
        console.log(error)
    })
