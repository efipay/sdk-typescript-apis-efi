/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import Gerencianet from 'gn-api-sdk-typescript';
import options from '../../config';

const body = {
    tipoCob: 'cob',
};

const gerencianet = Gerencianet(options);

gerencianet.pixCreateLocation([], body).then(console.log).catch(console.log).done();