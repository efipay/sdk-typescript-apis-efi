/* eslint-disable import/extensions */
/* eslint-disable camelcase */
import { PathLike } from 'fs';
import { EndpointInterface } from './endpoint.interface';

export interface EfiConfig {
	client_id: string;
	client_secret: string;
	certificate?: PathLike | string;
	cert_base64?: boolean;
	pemKey?: PathLike | string;
	sandbox: boolean;
	partnerToken?: string;
	rawResponse?: any;
	baseUrl?: string;
	validateMtls?: boolean;
	authRoute?: EndpointInterface;
	agent?: any;
}
