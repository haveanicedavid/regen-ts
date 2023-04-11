import * as _4 from "./app/runtime/v1alpha1/module";
import * as _5 from "./cosmos/app/runtime/v1alpha1/module";
import * as _6 from "./app/v1alpha1/config";
import * as _7 from "./app/v1alpha1/module";
import * as _8 from "./app/v1alpha1/query";
import * as _9 from "./cosmos/app/v1alpha1/config";
import * as _10 from "./cosmos/app/v1alpha1/module";
import * as _11 from "./cosmos/app/v1alpha1/query";
import * as _12 from "./auth/module/v1/module";
import * as _13 from "./cosmos/auth/module/v1/module";
import * as _14 from "./auth/v1beta1/auth";
import * as _15 from "./auth/v1beta1/genesis";
import * as _16 from "./auth/v1beta1/query";
import * as _17 from "./auth/v1beta1/tx";
import * as _18 from "./cosmos/auth/v1beta1/auth";
import * as _19 from "./cosmos/auth/v1beta1/genesis";
import * as _20 from "./cosmos/auth/v1beta1/query";
import * as _21 from "./cosmos/auth/v1beta1/tx";
import * as _22 from "./authz/module/v1/module";
import * as _23 from "./cosmos/authz/module/v1/module";
import * as _24 from "./authz/v1beta1/authz";
import * as _25 from "./authz/v1beta1/event";
import * as _26 from "./authz/v1beta1/genesis";
import * as _27 from "./authz/v1beta1/query";
import * as _28 from "./authz/v1beta1/tx";
import * as _29 from "./cosmos/authz/v1beta1/authz";
import * as _30 from "./cosmos/authz/v1beta1/event";
import * as _31 from "./cosmos/authz/v1beta1/genesis";
import * as _32 from "./cosmos/authz/v1beta1/query";
import * as _33 from "./cosmos/authz/v1beta1/tx";
import * as _34 from "./autocli/v1/options";
import * as _35 from "./autocli/v1/query";
import * as _36 from "./cosmos/autocli/v1/options";
import * as _37 from "./cosmos/autocli/v1/query";
import * as _38 from "./bank/module/v1/module";
import * as _39 from "./cosmos/bank/module/v1/module";
import * as _40 from "./bank/v1beta1/authz";
import * as _41 from "./bank/v1beta1/bank";
import * as _42 from "./bank/v1beta1/genesis";
import * as _43 from "./bank/v1beta1/query";
import * as _44 from "./bank/v1beta1/tx";
import * as _45 from "./cosmos/bank/v1beta1/authz";
import * as _46 from "./cosmos/bank/v1beta1/bank";
import * as _47 from "./cosmos/bank/v1beta1/genesis";
import * as _48 from "./cosmos/bank/v1beta1/query";
import * as _49 from "./cosmos/bank/v1beta1/tx";
import * as _50 from "./base/abci/v1beta1/abci";
import * as _51 from "./cosmos/base/abci/v1beta1/abci";
import * as _52 from "./base/node/v1beta1/query";
import * as _53 from "./cosmos/base/node/v1beta1/query";
import * as _54 from "./base/query/v1beta1/pagination";
import * as _55 from "./cosmos/base/query/v1beta1/pagination";
import * as _56 from "./base/reflection/v1beta1/reflection";
import * as _57 from "./cosmos/base/reflection/v1beta1/reflection";
import * as _58 from "./base/reflection/v2alpha1/reflection";
import * as _59 from "./cosmos/base/reflection/v2alpha1/reflection";
import * as _60 from "./base/tendermint/v1beta1/query";
import * as _61 from "./base/tendermint/v1beta1/types";
import * as _62 from "./cosmos/base/tendermint/v1beta1/query";
import * as _63 from "./cosmos/base/tendermint/v1beta1/types";
import * as _64 from "./base/v1beta1/coin";
import * as _65 from "./cosmos/base/v1beta1/coin";
import * as _66 from "./circuit/module/v1/module";
import * as _67 from "./cosmos/circuit/module/v1/module";
import * as _68 from "./circuit/v1/query";
import * as _69 from "./circuit/v1/tx";
import * as _70 from "./circuit/v1/types";
import * as _71 from "./cosmos/circuit/v1/query";
import * as _72 from "./cosmos/circuit/v1/tx";
import * as _73 from "./cosmos/circuit/v1/types";
import * as _74 from "./consensus/module/v1/module";
import * as _75 from "./cosmos/consensus/module/v1/module";
import * as _76 from "./consensus/v1/query";
import * as _77 from "./consensus/v1/tx";
import * as _78 from "./cosmos/consensus/v1/query";
import * as _79 from "./cosmos/consensus/v1/tx";
import * as _80 from "./cosmos/crisis/module/v1/module";
import * as _81 from "./crisis/module/v1/module";
import * as _82 from "./cosmos/crisis/v1beta1/genesis";
import * as _83 from "./cosmos/crisis/v1beta1/tx";
import * as _84 from "./crisis/v1beta1/genesis";
import * as _85 from "./crisis/v1beta1/tx";
import * as _86 from "./cosmos/crypto/ed25519/keys";
import * as _87 from "./crypto/ed25519/keys";
import * as _88 from "./cosmos/crypto/hd/v1/hd";
import * as _89 from "./crypto/hd/v1/hd";
import * as _90 from "./cosmos/crypto/keyring/v1/record";
import * as _91 from "./crypto/keyring/v1/record";
import * as _92 from "./cosmos/crypto/multisig/keys";
import * as _93 from "./crypto/multisig/keys";
import * as _94 from "./cosmos/crypto/secp256k1/keys";
import * as _95 from "./crypto/secp256k1/keys";
import * as _96 from "./cosmos/crypto/secp256r1/keys";
import * as _97 from "./crypto/secp256r1/keys";
import * as _98 from "./cosmos/distribution/module/v1/module";
import * as _99 from "./distribution/module/v1/module";
import * as _100 from "./cosmos/distribution/v1beta1/distribution";
import * as _101 from "./cosmos/distribution/v1beta1/genesis";
import * as _102 from "./cosmos/distribution/v1beta1/query";
import * as _103 from "./cosmos/distribution/v1beta1/tx";
import * as _104 from "./distribution/v1beta1/distribution";
import * as _105 from "./distribution/v1beta1/genesis";
import * as _106 from "./distribution/v1beta1/query";
import * as _107 from "./distribution/v1beta1/tx";
import * as _108 from "./cosmos/evidence/module/v1/module";
import * as _109 from "./evidence/module/v1/module";
import * as _110 from "./cosmos/evidence/v1beta1/evidence";
import * as _111 from "./cosmos/evidence/v1beta1/genesis";
import * as _112 from "./cosmos/evidence/v1beta1/query";
import * as _113 from "./cosmos/evidence/v1beta1/tx";
import * as _114 from "./evidence/v1beta1/evidence";
import * as _115 from "./evidence/v1beta1/genesis";
import * as _116 from "./evidence/v1beta1/query";
import * as _117 from "./evidence/v1beta1/tx";
import * as _118 from "./cosmos/feegrant/module/v1/module";
import * as _119 from "./feegrant/module/v1/module";
import * as _120 from "./cosmos/feegrant/v1beta1/feegrant";
import * as _121 from "./cosmos/feegrant/v1beta1/genesis";
import * as _122 from "./cosmos/feegrant/v1beta1/query";
import * as _123 from "./cosmos/feegrant/v1beta1/tx";
import * as _124 from "./feegrant/v1beta1/feegrant";
import * as _125 from "./feegrant/v1beta1/genesis";
import * as _126 from "./feegrant/v1beta1/query";
import * as _127 from "./feegrant/v1beta1/tx";
import * as _128 from "./cosmos/genutil/module/v1/module";
import * as _129 from "./genutil/module/v1/module";
import * as _130 from "./cosmos/genutil/v1beta1/genesis";
import * as _131 from "./genutil/v1beta1/genesis";
import * as _132 from "./cosmos/gov/module/v1/module";
import * as _133 from "./gov/module/v1/module";
import * as _134 from "./cosmos/gov/v1/genesis";
import * as _135 from "./cosmos/gov/v1/gov";
import * as _136 from "./cosmos/gov/v1/query";
import * as _137 from "./cosmos/gov/v1/tx";
import * as _138 from "./gov/v1/genesis";
import * as _139 from "./gov/v1/gov";
import * as _140 from "./gov/v1/query";
import * as _141 from "./gov/v1/tx";
import * as _142 from "./cosmos/gov/v1beta1/genesis";
import * as _143 from "./cosmos/gov/v1beta1/gov";
import * as _144 from "./cosmos/gov/v1beta1/query";
import * as _145 from "./cosmos/gov/v1beta1/tx";
import * as _146 from "./gov/v1beta1/genesis";
import * as _147 from "./gov/v1beta1/gov";
import * as _148 from "./gov/v1beta1/query";
import * as _149 from "./gov/v1beta1/tx";
import * as _150 from "./cosmos/group/module/v1/module";
import * as _151 from "./group/module/v1/module";
import * as _152 from "./cosmos/group/v1/events";
import * as _153 from "./cosmos/group/v1/genesis";
import * as _154 from "./cosmos/group/v1/query";
import * as _155 from "./cosmos/group/v1/tx";
import * as _156 from "./cosmos/group/v1/types";
import * as _157 from "./group/v1/events";
import * as _158 from "./group/v1/genesis";
import * as _159 from "./group/v1/query";
import * as _160 from "./group/v1/tx";
import * as _161 from "./group/v1/types";
import * as _162 from "./cosmos/mint/module/v1/module";
import * as _163 from "./mint/module/v1/module";
import * as _164 from "./cosmos/mint/v1beta1/genesis";
import * as _165 from "./cosmos/mint/v1beta1/mint";
import * as _166 from "./cosmos/mint/v1beta1/query";
import * as _167 from "./cosmos/mint/v1beta1/tx";
import * as _168 from "./mint/v1beta1/genesis";
import * as _169 from "./mint/v1beta1/mint";
import * as _170 from "./mint/v1beta1/query";
import * as _171 from "./mint/v1beta1/tx";
import * as _172 from "./cosmos/msg/textual/v1/textual";
import * as _173 from "./msg/textual/v1/textual";
import * as _174 from "./cosmos/msg/v1/msg";
import * as _175 from "./msg/v1/msg";
import * as _176 from "./cosmos/nft/module/v1/module";
import * as _177 from "./nft/module/v1/module";
import * as _178 from "./cosmos/nft/v1beta1/event";
import * as _179 from "./cosmos/nft/v1beta1/genesis";
import * as _180 from "./cosmos/nft/v1beta1/nft";
import * as _181 from "./cosmos/nft/v1beta1/query";
import * as _182 from "./cosmos/nft/v1beta1/tx";
import * as _183 from "./nft/v1beta1/event";
import * as _184 from "./nft/v1beta1/genesis";
import * as _185 from "./nft/v1beta1/nft";
import * as _186 from "./nft/v1beta1/query";
import * as _187 from "./nft/v1beta1/tx";
import * as _188 from "./cosmos/orm/module/v1alpha1/module";
import * as _189 from "./orm/module/v1alpha1/module";
import * as _190 from "./cosmos/orm/query/v1alpha1/query";
import * as _191 from "./orm/query/v1alpha1/query";
import * as _192 from "./cosmos/orm/v1/orm";
import * as _193 from "./orm/v1/orm";
import * as _194 from "./cosmos/orm/v1alpha1/schema";
import * as _195 from "./orm/v1alpha1/schema";
import * as _196 from "./cosmos/params/module/v1/module";
import * as _197 from "./params/module/v1/module";
import * as _198 from "./cosmos/params/v1beta1/params";
import * as _199 from "./cosmos/params/v1beta1/query";
import * as _200 from "./params/v1beta1/params";
import * as _201 from "./params/v1beta1/query";
import * as _202 from "./cosmos/query/v1/query";
import * as _203 from "./query/v1/query";
import * as _204 from "./cosmos/reflection/v1/reflection";
import * as _205 from "./reflection/v1/reflection";
import * as _206 from "./cosmos/slashing/module/v1/module";
import * as _207 from "./slashing/module/v1/module";
import * as _208 from "./cosmos/slashing/v1beta1/genesis";
import * as _209 from "./cosmos/slashing/v1beta1/query";
import * as _210 from "./cosmos/slashing/v1beta1/slashing";
import * as _211 from "./cosmos/slashing/v1beta1/tx";
import * as _212 from "./slashing/v1beta1/genesis";
import * as _213 from "./slashing/v1beta1/query";
import * as _214 from "./slashing/v1beta1/slashing";
import * as _215 from "./slashing/v1beta1/tx";
import * as _216 from "./cosmos/staking/module/v1/module";
import * as _217 from "./staking/module/v1/module";
import * as _218 from "./cosmos/staking/v1beta1/authz";
import * as _219 from "./cosmos/staking/v1beta1/genesis";
import * as _220 from "./cosmos/staking/v1beta1/query";
import * as _221 from "./cosmos/staking/v1beta1/staking";
import * as _222 from "./cosmos/staking/v1beta1/tx";
import * as _223 from "./staking/v1beta1/authz";
import * as _224 from "./staking/v1beta1/genesis";
import * as _225 from "./staking/v1beta1/query";
import * as _226 from "./staking/v1beta1/staking";
import * as _227 from "./staking/v1beta1/tx";
import * as _228 from "./cosmos/store/internal/kv/v1beta1/kv";
import * as _229 from "./store/internal/kv/v1beta1/kv";
import * as _230 from "./cosmos/store/snapshots/v1/snapshot";
import * as _231 from "./store/snapshots/v1/snapshot";
import * as _232 from "./cosmos/store/streaming/abci/grpc";
import * as _233 from "./store/streaming/abci/grpc";
import * as _234 from "./cosmos/store/v1beta1/commit_info";
import * as _235 from "./cosmos/store/v1beta1/listening";
import * as _236 from "./store/v1beta1/commit_info";
import * as _237 from "./store/v1beta1/listening";
import * as _238 from "./cosmos/tx/config/v1/config";
import * as _239 from "./tx/config/v1/config";
import * as _240 from "./cosmos/tx/signing/v1beta1/signing";
import * as _241 from "./tx/signing/v1beta1/signing";
import * as _242 from "./cosmos/tx/v1beta1/service";
import * as _243 from "./cosmos/tx/v1beta1/tx";
import * as _244 from "./tx/v1beta1/service";
import * as _245 from "./tx/v1beta1/tx";
import * as _246 from "./cosmos/upgrade/module/v1/module";
import * as _247 from "./upgrade/module/v1/module";
import * as _248 from "./cosmos/upgrade/v1beta1/query";
import * as _249 from "./cosmos/upgrade/v1beta1/tx";
import * as _250 from "./cosmos/upgrade/v1beta1/upgrade";
import * as _251 from "./upgrade/v1beta1/query";
import * as _252 from "./upgrade/v1beta1/tx";
import * as _253 from "./upgrade/v1beta1/upgrade";
import * as _254 from "./cosmos/vesting/module/v1/module";
import * as _255 from "./vesting/module/v1/module";
import * as _256 from "./cosmos/vesting/v1beta1/tx";
import * as _257 from "./cosmos/vesting/v1beta1/vesting";
import * as _258 from "./vesting/v1beta1/tx";
import * as _259 from "./vesting/v1beta1/vesting";
import * as _292 from "./auth/v1beta1/tx.amino";
import * as _293 from "./authz/v1beta1/tx.amino";
import * as _294 from "./bank/v1beta1/tx.amino";
import * as _295 from "./circuit/v1/tx.amino";
import * as _296 from "./consensus/v1/tx.amino";
import * as _297 from "./cosmos/auth/v1beta1/tx.amino";
import * as _298 from "./cosmos/authz/v1beta1/tx.amino";
import * as _299 from "./cosmos/bank/v1beta1/tx.amino";
import * as _300 from "./cosmos/circuit/v1/tx.amino";
import * as _301 from "./cosmos/consensus/v1/tx.amino";
import * as _302 from "./cosmos/crisis/v1beta1/tx.amino";
import * as _303 from "./cosmos/distribution/v1beta1/tx.amino";
import * as _304 from "./cosmos/evidence/v1beta1/tx.amino";
import * as _305 from "./cosmos/feegrant/v1beta1/tx.amino";
import * as _306 from "./cosmos/gov/v1/tx.amino";
import * as _307 from "./cosmos/gov/v1beta1/tx.amino";
import * as _308 from "./cosmos/group/v1/tx.amino";
import * as _309 from "./cosmos/mint/v1beta1/tx.amino";
import * as _310 from "./cosmos/nft/v1beta1/tx.amino";
import * as _311 from "./cosmos/slashing/v1beta1/tx.amino";
import * as _312 from "./cosmos/staking/v1beta1/tx.amino";
import * as _313 from "./cosmos/upgrade/v1beta1/tx.amino";
import * as _314 from "./cosmos/vesting/v1beta1/tx.amino";
import * as _315 from "./crisis/v1beta1/tx.amino";
import * as _316 from "./distribution/v1beta1/tx.amino";
import * as _317 from "./evidence/v1beta1/tx.amino";
import * as _318 from "./feegrant/v1beta1/tx.amino";
import * as _319 from "./gov/v1/tx.amino";
import * as _320 from "./gov/v1beta1/tx.amino";
import * as _321 from "./group/v1/tx.amino";
import * as _322 from "./mint/v1beta1/tx.amino";
import * as _323 from "./nft/v1beta1/tx.amino";
import * as _324 from "./slashing/v1beta1/tx.amino";
import * as _325 from "./staking/v1beta1/tx.amino";
import * as _326 from "./upgrade/v1beta1/tx.amino";
import * as _327 from "./vesting/v1beta1/tx.amino";
import * as _328 from "./auth/v1beta1/tx.registry";
import * as _329 from "./authz/v1beta1/tx.registry";
import * as _330 from "./bank/v1beta1/tx.registry";
import * as _331 from "./circuit/v1/tx.registry";
import * as _332 from "./consensus/v1/tx.registry";
import * as _333 from "./cosmos/auth/v1beta1/tx.registry";
import * as _334 from "./cosmos/authz/v1beta1/tx.registry";
import * as _335 from "./cosmos/bank/v1beta1/tx.registry";
import * as _336 from "./cosmos/circuit/v1/tx.registry";
import * as _337 from "./cosmos/consensus/v1/tx.registry";
import * as _338 from "./cosmos/crisis/v1beta1/tx.registry";
import * as _339 from "./cosmos/distribution/v1beta1/tx.registry";
import * as _340 from "./cosmos/evidence/v1beta1/tx.registry";
import * as _341 from "./cosmos/feegrant/v1beta1/tx.registry";
import * as _342 from "./cosmos/gov/v1/tx.registry";
import * as _343 from "./cosmos/gov/v1beta1/tx.registry";
import * as _344 from "./cosmos/group/v1/tx.registry";
import * as _345 from "./cosmos/mint/v1beta1/tx.registry";
import * as _346 from "./cosmos/nft/v1beta1/tx.registry";
import * as _347 from "./cosmos/slashing/v1beta1/tx.registry";
import * as _348 from "./cosmos/staking/v1beta1/tx.registry";
import * as _349 from "./cosmos/upgrade/v1beta1/tx.registry";
import * as _350 from "./cosmos/vesting/v1beta1/tx.registry";
import * as _351 from "./crisis/v1beta1/tx.registry";
import * as _352 from "./distribution/v1beta1/tx.registry";
import * as _353 from "./evidence/v1beta1/tx.registry";
import * as _354 from "./feegrant/v1beta1/tx.registry";
import * as _355 from "./gov/v1/tx.registry";
import * as _356 from "./gov/v1beta1/tx.registry";
import * as _357 from "./group/v1/tx.registry";
import * as _358 from "./mint/v1beta1/tx.registry";
import * as _359 from "./nft/v1beta1/tx.registry";
import * as _360 from "./slashing/v1beta1/tx.registry";
import * as _361 from "./staking/v1beta1/tx.registry";
import * as _362 from "./upgrade/v1beta1/tx.registry";
import * as _363 from "./vesting/v1beta1/tx.registry";
import * as _364 from "./auth/v1beta1/query.lcd";
import * as _365 from "./authz/v1beta1/query.lcd";
import * as _366 from "./bank/v1beta1/query.lcd";
import * as _367 from "./base/node/v1beta1/query.lcd";
import * as _368 from "./base/tendermint/v1beta1/query.lcd";
import * as _369 from "./circuit/v1/query.lcd";
import * as _370 from "./consensus/v1/query.lcd";
import * as _371 from "./cosmos/auth/v1beta1/query.lcd";
import * as _372 from "./cosmos/authz/v1beta1/query.lcd";
import * as _373 from "./cosmos/bank/v1beta1/query.lcd";
import * as _374 from "./cosmos/base/node/v1beta1/query.lcd";
import * as _375 from "./cosmos/base/tendermint/v1beta1/query.lcd";
import * as _376 from "./cosmos/circuit/v1/query.lcd";
import * as _377 from "./cosmos/consensus/v1/query.lcd";
import * as _378 from "./cosmos/distribution/v1beta1/query.lcd";
import * as _379 from "./cosmos/evidence/v1beta1/query.lcd";
import * as _380 from "./cosmos/feegrant/v1beta1/query.lcd";
import * as _381 from "./cosmos/gov/v1/query.lcd";
import * as _382 from "./cosmos/gov/v1beta1/query.lcd";
import * as _383 from "./cosmos/group/v1/query.lcd";
import * as _384 from "./cosmos/mint/v1beta1/query.lcd";
import * as _385 from "./cosmos/nft/v1beta1/query.lcd";
import * as _386 from "./cosmos/params/v1beta1/query.lcd";
import * as _387 from "./cosmos/slashing/v1beta1/query.lcd";
import * as _388 from "./cosmos/staking/v1beta1/query.lcd";
import * as _389 from "./cosmos/tx/v1beta1/service.lcd";
import * as _390 from "./cosmos/upgrade/v1beta1/query.lcd";
import * as _391 from "./distribution/v1beta1/query.lcd";
import * as _392 from "./evidence/v1beta1/query.lcd";
import * as _393 from "./feegrant/v1beta1/query.lcd";
import * as _394 from "./gov/v1/query.lcd";
import * as _395 from "./gov/v1beta1/query.lcd";
import * as _396 from "./group/v1/query.lcd";
import * as _397 from "./mint/v1beta1/query.lcd";
import * as _398 from "./nft/v1beta1/query.lcd";
import * as _399 from "./params/v1beta1/query.lcd";
import * as _400 from "./slashing/v1beta1/query.lcd";
import * as _401 from "./staking/v1beta1/query.lcd";
import * as _402 from "./tx/v1beta1/service.lcd";
import * as _403 from "./upgrade/v1beta1/query.lcd";
import * as _404 from "./lcd";
export namespace cosmos {
  export namespace app {
    export namespace runtime {
      export const v1alpha1 = { ..._4,
        ..._5
      };
    }
    export const v1alpha1 = { ..._6,
      ..._7,
      ..._8,
      ..._9,
      ..._10,
      ..._11
    };
  }
  export namespace auth {
    export namespace module {
      export const v1 = { ..._12,
        ..._13
      };
    }
    export const v1beta1 = { ..._14,
      ..._15,
      ..._16,
      ..._17,
      ..._18,
      ..._19,
      ..._20,
      ..._21,
      ..._292,
      ..._297,
      ..._328,
      ..._333,
      ..._364,
      ..._371
    };
  }
  export namespace authz {
    export namespace module {
      export const v1 = { ..._22,
        ..._23
      };
    }
    export const v1beta1 = { ..._24,
      ..._25,
      ..._26,
      ..._27,
      ..._28,
      ..._29,
      ..._30,
      ..._31,
      ..._32,
      ..._33,
      ..._293,
      ..._298,
      ..._329,
      ..._334,
      ..._365,
      ..._372
    };
  }
  export namespace autocli {
    export const v1 = { ..._34,
      ..._35,
      ..._36,
      ..._37
    };
  }
  export namespace bank {
    export namespace module {
      export const v1 = { ..._38,
        ..._39
      };
    }
    export const v1beta1 = { ..._40,
      ..._41,
      ..._42,
      ..._43,
      ..._44,
      ..._45,
      ..._46,
      ..._47,
      ..._48,
      ..._49,
      ..._294,
      ..._299,
      ..._330,
      ..._335,
      ..._366,
      ..._373
    };
  }
  export namespace base {
    export namespace abci {
      export const v1beta1 = { ..._50,
        ..._51
      };
    }
    export namespace node {
      export const v1beta1 = { ..._52,
        ..._53,
        ..._367,
        ..._374
      };
    }
    export namespace query {
      export const v1beta1 = { ..._54,
        ..._55
      };
    }
    export namespace reflection {
      export const v1beta1 = { ..._56,
        ..._57
      };
      export const v2alpha1 = { ..._58,
        ..._59
      };
    }
    export namespace tendermint {
      export const v1beta1 = { ..._60,
        ..._61,
        ..._62,
        ..._63,
        ..._368,
        ..._375
      };
    }
    export const v1beta1 = { ..._64,
      ..._65
    };
  }
  export namespace circuit {
    export namespace module {
      export const v1 = { ..._66,
        ..._67
      };
    }
    export const v1 = { ..._68,
      ..._69,
      ..._70,
      ..._71,
      ..._72,
      ..._73,
      ..._295,
      ..._300,
      ..._331,
      ..._336,
      ..._369,
      ..._376
    };
  }
  export namespace consensus {
    export namespace module {
      export const v1 = { ..._74,
        ..._75
      };
    }
    export const v1 = { ..._76,
      ..._77,
      ..._78,
      ..._79,
      ..._296,
      ..._301,
      ..._332,
      ..._337,
      ..._370,
      ..._377
    };
  }
  export namespace crisis {
    export namespace module {
      export const v1 = { ..._80,
        ..._81
      };
    }
    export const v1beta1 = { ..._82,
      ..._83,
      ..._84,
      ..._85,
      ..._302,
      ..._315,
      ..._338,
      ..._351
    };
  }
  export namespace crypto {
    export const ed25519 = { ..._86,
      ..._87
    };
    export namespace hd {
      export const v1 = { ..._88,
        ..._89
      };
    }
    export namespace keyring {
      export const v1 = { ..._90,
        ..._91
      };
    }
    export const multisig = { ..._92,
      ..._93
    };
    export const secp256k1 = { ..._94,
      ..._95
    };
    export const secp256r1 = { ..._96,
      ..._97
    };
  }
  export namespace distribution {
    export namespace module {
      export const v1 = { ..._98,
        ..._99
      };
    }
    export const v1beta1 = { ..._100,
      ..._101,
      ..._102,
      ..._103,
      ..._104,
      ..._105,
      ..._106,
      ..._107,
      ..._303,
      ..._316,
      ..._339,
      ..._352,
      ..._378,
      ..._391
    };
  }
  export namespace evidence {
    export namespace module {
      export const v1 = { ..._108,
        ..._109
      };
    }
    export const v1beta1 = { ..._110,
      ..._111,
      ..._112,
      ..._113,
      ..._114,
      ..._115,
      ..._116,
      ..._117,
      ..._304,
      ..._317,
      ..._340,
      ..._353,
      ..._379,
      ..._392
    };
  }
  export namespace feegrant {
    export namespace module {
      export const v1 = { ..._118,
        ..._119
      };
    }
    export const v1beta1 = { ..._120,
      ..._121,
      ..._122,
      ..._123,
      ..._124,
      ..._125,
      ..._126,
      ..._127,
      ..._305,
      ..._318,
      ..._341,
      ..._354,
      ..._380,
      ..._393
    };
  }
  export namespace genutil {
    export namespace module {
      export const v1 = { ..._128,
        ..._129
      };
    }
    export const v1beta1 = { ..._130,
      ..._131
    };
  }
  export namespace gov {
    export namespace module {
      export const v1 = { ..._132,
        ..._133
      };
    }
    export const v1 = { ..._134,
      ..._135,
      ..._136,
      ..._137,
      ..._138,
      ..._139,
      ..._140,
      ..._141,
      ..._306,
      ..._319,
      ..._342,
      ..._355,
      ..._381,
      ..._394
    };
    export const v1beta1 = { ..._142,
      ..._143,
      ..._144,
      ..._145,
      ..._146,
      ..._147,
      ..._148,
      ..._149,
      ..._307,
      ..._320,
      ..._343,
      ..._356,
      ..._382,
      ..._395
    };
  }
  export namespace group {
    export namespace module {
      export const v1 = { ..._150,
        ..._151
      };
    }
    export const v1 = { ..._152,
      ..._153,
      ..._154,
      ..._155,
      ..._156,
      ..._157,
      ..._158,
      ..._159,
      ..._160,
      ..._161,
      ..._308,
      ..._321,
      ..._344,
      ..._357,
      ..._383,
      ..._396
    };
  }
  export namespace mint {
    export namespace module {
      export const v1 = { ..._162,
        ..._163
      };
    }
    export const v1beta1 = { ..._164,
      ..._165,
      ..._166,
      ..._167,
      ..._168,
      ..._169,
      ..._170,
      ..._171,
      ..._309,
      ..._322,
      ..._345,
      ..._358,
      ..._384,
      ..._397
    };
  }
  export namespace msg {
    export namespace textual {
      export const v1 = { ..._172,
        ..._173
      };
    }
    export const v1 = { ..._174,
      ..._175
    };
  }
  export namespace nft {
    export namespace module {
      export const v1 = { ..._176,
        ..._177
      };
    }
    export const v1beta1 = { ..._178,
      ..._179,
      ..._180,
      ..._181,
      ..._182,
      ..._183,
      ..._184,
      ..._185,
      ..._186,
      ..._187,
      ..._310,
      ..._323,
      ..._346,
      ..._359,
      ..._385,
      ..._398
    };
  }
  export namespace orm {
    export namespace module {
      export const v1alpha1 = { ..._188,
        ..._189
      };
    }
    export namespace query {
      export const v1alpha1 = { ..._190,
        ..._191
      };
    }
    export const v1 = { ..._192,
      ..._193
    };
    export const v1alpha1 = { ..._194,
      ..._195
    };
  }
  export namespace params {
    export namespace module {
      export const v1 = { ..._196,
        ..._197
      };
    }
    export const v1beta1 = { ..._198,
      ..._199,
      ..._200,
      ..._201,
      ..._386,
      ..._399
    };
  }
  export namespace query {
    export const v1 = { ..._202,
      ..._203
    };
  }
  export namespace reflection {
    export const v1 = { ..._204,
      ..._205
    };
  }
  export namespace slashing {
    export namespace module {
      export const v1 = { ..._206,
        ..._207
      };
    }
    export const v1beta1 = { ..._208,
      ..._209,
      ..._210,
      ..._211,
      ..._212,
      ..._213,
      ..._214,
      ..._215,
      ..._311,
      ..._324,
      ..._347,
      ..._360,
      ..._387,
      ..._400
    };
  }
  export namespace staking {
    export namespace module {
      export const v1 = { ..._216,
        ..._217
      };
    }
    export const v1beta1 = { ..._218,
      ..._219,
      ..._220,
      ..._221,
      ..._222,
      ..._223,
      ..._224,
      ..._225,
      ..._226,
      ..._227,
      ..._312,
      ..._325,
      ..._348,
      ..._361,
      ..._388,
      ..._401
    };
  }
  export namespace store {
    export namespace internal {
      export namespace kv {
        export const v1beta1 = { ..._228,
          ..._229
        };
      }
    }
    export namespace snapshots {
      export const v1 = { ..._230,
        ..._231
      };
    }
    export namespace streaming {
      export const abci = { ..._232,
        ..._233
      };
    }
    export const v1beta1 = { ..._234,
      ..._235,
      ..._236,
      ..._237
    };
  }
  export namespace tx {
    export namespace config {
      export const v1 = { ..._238,
        ..._239
      };
    }
    export namespace signing {
      export const v1beta1 = { ..._240,
        ..._241
      };
    }
    export const v1beta1 = { ..._242,
      ..._243,
      ..._244,
      ..._245,
      ..._389,
      ..._402
    };
  }
  export namespace upgrade {
    export namespace module {
      export const v1 = { ..._246,
        ..._247
      };
    }
    export const v1beta1 = { ..._248,
      ..._249,
      ..._250,
      ..._251,
      ..._252,
      ..._253,
      ..._313,
      ..._326,
      ..._349,
      ..._362,
      ..._390,
      ..._403
    };
  }
  export namespace vesting {
    export namespace module {
      export const v1 = { ..._254,
        ..._255
      };
    }
    export const v1beta1 = { ..._256,
      ..._257,
      ..._258,
      ..._259,
      ..._314,
      ..._327,
      ..._350,
      ..._363
    };
  }
  export const ClientFactory = { ..._404
  };
}