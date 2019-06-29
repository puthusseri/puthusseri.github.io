import axios from 'axios';

const CONSTANTS = {
  API_URL: 'https://api.cosmicjs.com/v1/kitzeio',
  OBJECT: 'object',
  OBJECT_TYPE: 'object-type',
  PRETTY: '?pretty=true'
};

const object = axios.create({});
object.interceptors.request.use(config => ({
    ...config,
    ...{url: `${CONSTANTS.API_URL}/${CONSTANTS.OBJECT}/${config.url}${CONSTANTS.PRETTY}/`}
  })
);

const objectType = axios.create({});
objectType.interceptors.request.use(config => ({
    ...config,
    ...{url: `${CONSTANTS.API_URL}/${CONSTANTS.OBJECT_TYPE}/${config.url}${CONSTANTS.PRETTY}/`}
  })
);

export {object, objectType};