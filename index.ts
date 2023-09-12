/* eslint-disable no-param-reassign */
/* eslint-disable import/extensions */
import constants from './src/constants';
import Endpoints from './src/endpoints';
import { EfiConfig } from './src/interfaces/efiConfig.interface';
import { EfiCredentials } from './src/interfaces/efiCredentials.interface';

class EfiPay {
	// eslint-disable-next-line no-undef
	[index: string]: any;

	constructor(options: EfiCredentials) {
		if (options.pathCert || options.pix_cert) {
			options.certificate = options.pathCert || options.pix_cert;
		}

		if (options.cert_base64 && typeof options.certificate === 'string') {
			options.certificate = Buffer.from(options.certificate, 'base64');
		}

		const credentials: EfiConfig = {
			client_id: options.client_id,
			client_secret: options.client_secret,
			certificate: options.certificate,
			cert_base64: options.cert_base64,
			sandbox: options.sandbox,
		};

		if (options.pemKey) {
			credentials.pemKey = options.pemKey;
		}

		const methods = {};
		Object.keys(constants.APIS).forEach((endpoint) => {
			const key = endpoint as keyof typeof constants.APIS;
			Object.assign(methods, constants.APIS[key].ENDPOINTS);
		});

		Object.keys(methods).forEach((api) => {
			this[api] = (params: any, body: any) => {
				const endpoints = new Endpoints(credentials, constants);
				return endpoints.run(api, params, body);
			};
		});
	}
}

export default EfiPay;
export { EfiCredentials };
