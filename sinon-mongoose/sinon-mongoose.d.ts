// Type definitions for sinon-mongoose v1.3.0
// Project: https://github.com/underscopeio/sinon-mongoose
// Definitions by: Steve Hipwell <https://github.com/stevehipwell>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import * as s from "sinon";

declare module "sinon" {

  interface SinonStub {

    /**
     * When called, the stub will create a new stub to represent a mongoose chained function.
     */
    chain(name: string): SinonStub
  }

}
