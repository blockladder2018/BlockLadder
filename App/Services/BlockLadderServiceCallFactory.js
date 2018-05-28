import { BlockLadderService } from 'block-ladder-js-client';
import _ from 'lodash';
import store from 'App/Redux';
import DebugConfig from 'App/Config/DebugConfig';

class BlockLadderServiceCallFactory {

  static setupClient() {
    this.serviceClient = new BlockLadderService.Client();
    console.log("BlockLadder Client has been set up");
  }

  static getProxysCall() {
    this.setupClient();

    return () => {
      return this.serviceClient.proxys();
    };
  }
}

export default BlockLadderServiceCallFactory;
