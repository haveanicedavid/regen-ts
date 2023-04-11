import * as _270 from "../cosmos/tendermint/abci/types";
import * as _271 from "./abci/types";
import * as _272 from "../cosmos/tendermint/crypto/keys";
import * as _273 from "../cosmos/tendermint/crypto/proof";
import * as _274 from "./crypto/keys";
import * as _275 from "./crypto/proof";
import * as _276 from "../cosmos/tendermint/libs/bits/types";
import * as _277 from "./libs/bits/types";
import * as _278 from "../cosmos/tendermint/p2p/types";
import * as _279 from "./p2p/types";
import * as _280 from "../cosmos/tendermint/types/block";
import * as _281 from "../cosmos/tendermint/types/evidence";
import * as _282 from "../cosmos/tendermint/types/params";
import * as _283 from "../cosmos/tendermint/types/types";
import * as _284 from "../cosmos/tendermint/types/validator";
import * as _285 from "./types/block";
import * as _286 from "./types/evidence";
import * as _287 from "./types/params";
import * as _288 from "./types/types";
import * as _289 from "./types/validator";
import * as _290 from "../cosmos/tendermint/version/types";
import * as _291 from "./version/types";
export namespace tendermint {
  export const abci = { ..._270,
    ..._271
  };
  export const crypto = { ..._272,
    ..._273,
    ..._274,
    ..._275
  };
  export namespace libs {
    export const bits = { ..._276,
      ..._277
    };
  }
  export const p2p = { ..._278,
    ..._279
  };
  export const types = { ..._280,
    ..._281,
    ..._282,
    ..._283,
    ..._284,
    ..._285,
    ..._286,
    ..._287,
    ..._288,
    ..._289
  };
  export const version = { ..._290,
    ..._291
  };
}