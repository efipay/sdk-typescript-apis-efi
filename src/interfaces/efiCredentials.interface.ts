/* eslint-disable camelcase */
import { PathLike } from 'fs';

export interface EfiCredentials {
	client_id: string;
	client_secret: string;
	certificate?: PathLike | string;
	cert_base64?: boolean;
	pix_cert?: PathLike | string;
	pathCert?: PathLike | string;
	pemKey?: PathLike | string;
	sandbox: boolean;
	validateMtls?: boolean;
	partnerToken?: string;
}
