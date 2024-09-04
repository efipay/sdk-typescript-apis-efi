<h1 align="center">SDK Node.js para APIs Efí Pay</h1>

![Banner APIs Efí Pay](https://gnetbr.com/BJgSIUhlYs)

> Um módulo nodejs para integrar seu backend com os serviços de pagamento da [Efí](http://sejaefi.com.br).

## Instalação

```bash
$ npm install sdk-typescript-apis-efi
```

## Uso Básico

Importe o módulo:

```js
import EfiPay from 'sdk-typescript-apis-efi';
```

Insira suas credenciais e defina se deseja usar o sandbox ou não.
Você também pode usar o arquivo [examples/credentials.js](examples/credentials.js) de modelo.

```js
export default {
	// PRODUÇÃO = false
	// HOMOLOGAÇÃO = true
	sandbox: false,
	client_id: 'seuClientId',
	client_secret: 'seuClientSecret',
	certificate: 'caminho/Ate/O/Certificado/Pix',
	cert_base64: false, // Indica se o certificado está em base64 ou não
};
```

Instancie o módulo passando as options:

```js
const efipay = new EfiPay(options);
```

Crie uma cobrança:

```js
let chargeInput = {
	items: [
		{
			name: 'Product A',
			value: 1000,
			amount: 2,
		},
	],
};

efipay
	.createCharge({}, chargeInput)
	.then((resposta) => {
		console.log(resposta);
	})
	.catch((error) => {
		console.log(error);
	});
```

## Exemplos

Para executar os exemplos, clone este repo e instale as dependências:

```bash
$ git clone git@github.com:efipay/sdk-typescript-apis-efi.git
$ cd sdk-typescript-apis-efi/examples
$ npm install
```

Defina suas credenciais em credentials.js:

```js
export default {
	// PRODUÇÃO = false
	// HOMOLOGAÇÃO = true
	sandbox: false,
	client_id: 'seuClientId',
	client_secret: 'seuClientSecret',
	certificate: 'caminhoAteOCertificadoPix',
	cert_base64: false, // Indica se o certificado está em base64 ou não
};
```

Em seguida, execute o exemplo que você deseja:

```bash
$ npx tsx createCharge.ts
```

## Documentação

A documentação completa com todos os endpoints disponíveis você encontra em: https://dev.sejaefi.com.br/.

## License

[MIT](LICENSE)
