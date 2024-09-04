import EfiPay from 'sdk-typescript-apis-efi';
import options from '../../credentials';

const efipay = new EfiPay(options)

let params = {
    idInfracao: '1'
}

let body = {
    analise: "aceito",
    justificativa: "Justificativa"
}

// O método medDefebse indica os campos que devem ser enviados e que serão retornados
efipay.medDefebse(params, body)
    .then((resposta) => {
        console.log(resposta) // Aqui você tera acesso a resposta da API e os campos retornados de forma intuitiva
    })
    .catch((error) => {
        console.log(error)
    })
