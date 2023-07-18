<h1 align="center">SDK Typescript para APIs Efí Pay</h1>

![Banner APIs Efí Pay](https://gnetbr.com/BJgSIUhlYs)


> Um módulo Typescript para integrar seu backend com os serviços de pagamento da [Efí](http://sejaefi.com.br).
## Instalação

```bash
$ npm install sdk-typescript-apis-efi
```

## Uso Básico

Importe o módulo:

```typescript
import EfiPay from 'sdk-typescript-apis-efi';
```

Insira suas credenciais e defina se deseja usar o sandbox ou não.
Você também pode usar o arquivo [examples/config.ts](examples/config.ts) de modelo.

```typescript
export = {
	// PRODUÇÃO = false
	// HOMOLOGAÇÃO = true
	sandbox: false,
	client_id: 'seuclient_id',
	client_secret: 'seuclient_secret',
	certificate: 'caminhoAteOCertificadoPix',
};
```

Instancie o módulo passando as options:

```typescript
const efipay = EfiPay(options);
```

Crie uma cobrança:

```typescript
var body = {
	items: [
		{
			name: 'Product A',
			value: 1000,
			amount: 2,
		},
	],
};

efipay
	.createCharge({}, body)
	.then((resposta: any) => {
		console.log(resposta);
	})
	.catch((error: Promise<any>) => {
		console.log(error);
	})
	.done();
```

## Exemplos

Para executar os exemplos, clone este repo e instale as dependências:

```bash
$ git clone git@github.com:efipay/sdk-typescript-apis-efi.git
$ cd sdk-typescript-apis-efi/examples
$ npm install
```

Defina suas credenciais em config.ts:

```typescript
export = {
	// PRODUÇÃO = false
	// HOMOLOGAÇÃO = true
	sandbox: false,
	client_id: 'seuclient_id',
	client_secret: 'seuclient_secret',
	certificate: 'caminhoAteOCertificadoPix',
};
```

Em seguida, execute o exemplo que você deseja:

```bash
$ ts-node createCharge.ts
```

## Documentação

A documentação completa com todos os endpoints disponíveis você encontra em: https://dev.efipay.com.br/.

## License

[MIT](LICENSE)
