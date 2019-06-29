import {object, objectType} from 'config/axios-config';

const server = {
  Thought: {
    get: slug => object.get(slug)
  },
  Thoughts: {
    get: () => objectType.get('thoughts')
  }
};

export default server;