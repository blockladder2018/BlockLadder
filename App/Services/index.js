import DebugConfig from 'App/Config/DebugConfig';

import FixtureAPI from './Fixtures/FixtureAPI';
import BlockLadderServiceClientFactory from './BlockLadderServiceCallFactory';

export const fixtureAPI = FixtureAPI;
export default DebugConfig.useFixtures ? fixtureAPI : BlockLadderServiceCallFactory;
