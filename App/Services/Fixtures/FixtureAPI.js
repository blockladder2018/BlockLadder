import BlockLadderServiceCallFactory from 'App/Services/BlockLadderServiceCallFactory';
import { enabledFixtures } from 'App/Config/DebugConfig';
import _ from 'lodash';

function returnResultPromise(result) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      return resolve(result);
    }, 100);
  });
}

export default {
  getProxysCall: () => {
    if (!enabledFixtures.proxys) {
      return BlockLadderServiceCallFactory.getProxysCall();
    }

    return () => {
      const result = {
        "proxys": [
          {
            "id": 1,
            "ip": "138.197.223.133",
            "port": "8381",
            "password": "yahoo1011",
            "encryption": "aes-256-cfb",
            "status": ""
          }
        ]
      };

      return returnResultPromise(result);
    };
  },

};
