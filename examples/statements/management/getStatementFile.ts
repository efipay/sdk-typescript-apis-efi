import EfiPay from 'sdk-typescript-apis-efi';
import options from '../../credentials';

const efipay = new EfiPay(options)

let params = {
    nome_arquivo: 'nome_arquivo'
}

// O método getStatementFile indica os campos que devem ser enviados e que serão retornados
efipay.getStatementFile(params)
    .then((resposta) => {
        console.log(resposta) // Aqui você tera acesso a resposta da API e os campos retornados de forma intuitiva
    })
    .catch((error) => {
        console.log(error)
    })
