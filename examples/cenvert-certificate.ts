import { PathLike, readFileSync } from 'fs';

export default function certificateToBase64(pathCert: PathLike) {
	try {
		const hasCertificateValid = pathCert.toString().endsWith('.pem') || pathCert.toString().endsWith('.p12');
		if (!hasCertificateValid) {
			throw new Error('O certificado deve ser .pem ou .p12');
		}
		const certification = readFileSync(pathCert);

		const base64 = Buffer.from(certification).toString('base64');

		return base64;
	} catch (err) {
		if (err instanceof Error) {
			return err.message;
		}
		throw new Error(err);
	}
}
