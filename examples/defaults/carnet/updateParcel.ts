/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import Gerencianet from 'gn-api-sdk-typescript';
import options from '../../config';

const params = {
    id: 1008,
};

const body = {
    parcel: 1,
    expire_at: '2020-12-12',
};

const gerencianet = Gerencianet(options);

gerencianet.updateParcel(params, body).then(console.log).catch(console.log).done();
