import * as _5 from "./cosmos/app/runtime/v1alpha1/module";
import * as _9 from "./cosmos/app/v1alpha1/config";
import * as _10 from "./cosmos/app/v1alpha1/module";
import * as _11 from "./cosmos/app/v1alpha1/query";
import * as _13 from "./cosmos/auth/module/v1/module";
import * as _18 from "./cosmos/auth/v1beta1/auth";
import * as _19 from "./cosmos/auth/v1beta1/genesis";
import * as _20 from "./cosmos/auth/v1beta1/query";
import * as _21 from "./cosmos/auth/v1beta1/tx";
import * as _23 from "./cosmos/authz/module/v1/module";
import * as _29 from "./cosmos/authz/v1beta1/authz";
import * as _30 from "./cosmos/authz/v1beta1/event";
import * as _31 from "./cosmos/authz/v1beta1/genesis";
import * as _32 from "./cosmos/authz/v1beta1/query";
import * as _33 from "./cosmos/authz/v1beta1/tx";
import * as _36 from "./cosmos/autocli/v1/options";
import * as _37 from "./cosmos/autocli/v1/query";
import * as _39 from "./cosmos/bank/module/v1/module";
import * as _45 from "./cosmos/bank/v1beta1/authz";
import * as _46 from "./cosmos/bank/v1beta1/bank";
import * as _47 from "./cosmos/bank/v1beta1/genesis";
import * as _48 from "./cosmos/bank/v1beta1/query";
import * as _49 from "./cosmos/bank/v1beta1/tx";
import * as _51 from "./cosmos/base/abci/v1beta1/abci";
import * as _53 from "./cosmos/base/node/v1beta1/query";
import * as _55 from "./cosmos/base/query/v1beta1/pagination";
import * as _57 from "./cosmos/base/reflection/v1beta1/reflection";
import * as _59 from "./cosmos/base/reflection/v2alpha1/reflection";
import * as _62 from "./cosmos/base/tendermint/v1beta1/query";
import * as _63 from "./cosmos/base/tendermint/v1beta1/types";
import * as _65 from "./cosmos/base/v1beta1/coin";
import * as _67 from "./cosmos/circuit/module/v1/module";
import * as _71 from "./cosmos/circuit/v1/query";
import * as _72 from "./cosmos/circuit/v1/tx";
import * as _73 from "./cosmos/circuit/v1/types";
import * as _75 from "./cosmos/consensus/module/v1/module";
import * as _78 from "./cosmos/consensus/v1/query";
import * as _79 from "./cosmos/consensus/v1/tx";
import * as _81 from "./crisis/module/v1/module";
import * as _84 from "./crisis/v1beta1/genesis";
import * as _85 from "./crisis/v1beta1/tx";
import * as _87 from "./crypto/ed25519/keys";
import * as _89 from "./crypto/hd/v1/hd";
import * as _91 from "./crypto/keyring/v1/record";
import * as _93 from "./crypto/multisig/keys";
import * as _95 from "./crypto/secp256k1/keys";
import * as _97 from "./crypto/secp256r1/keys";
import * as _99 from "./distribution/module/v1/module";
import * as _104 from "./distribution/v1beta1/distribution";
import * as _105 from "./distribution/v1beta1/genesis";
import * as _106 from "./distribution/v1beta1/query";
import * as _107 from "./distribution/v1beta1/tx";
import * as _109 from "./evidence/module/v1/module";
import * as _114 from "./evidence/v1beta1/evidence";
import * as _115 from "./evidence/v1beta1/genesis";
import * as _116 from "./evidence/v1beta1/query";
import * as _117 from "./evidence/v1beta1/tx";
import * as _119 from "./feegrant/module/v1/module";
import * as _124 from "./feegrant/v1beta1/feegrant";
import * as _125 from "./feegrant/v1beta1/genesis";
import * as _126 from "./feegrant/v1beta1/query";
import * as _127 from "./feegrant/v1beta1/tx";
import * as _129 from "./genutil/module/v1/module";
import * as _131 from "./genutil/v1beta1/genesis";
import * as _133 from "./gov/module/v1/module";
import * as _138 from "./gov/v1/genesis";
import * as _139 from "./gov/v1/gov";
import * as _140 from "./gov/v1/query";
import * as _141 from "./gov/v1/tx";
import * as _146 from "./gov/v1beta1/genesis";
import * as _147 from "./gov/v1beta1/gov";
import * as _148 from "./gov/v1beta1/query";
import * as _149 from "./gov/v1beta1/tx";
import * as _151 from "./group/module/v1/module";
import * as _157 from "./group/v1/events";
import * as _158 from "./group/v1/genesis";
import * as _159 from "./group/v1/query";
import * as _160 from "./group/v1/tx";
import * as _161 from "./group/v1/types";
import * as _163 from "./mint/module/v1/module";
import * as _168 from "./mint/v1beta1/genesis";
import * as _169 from "./mint/v1beta1/mint";
import * as _170 from "./mint/v1beta1/query";
import * as _171 from "./mint/v1beta1/tx";
import * as _177 from "./nft/module/v1/module";
import * as _183 from "./nft/v1beta1/event";
import * as _184 from "./nft/v1beta1/genesis";
import * as _185 from "./nft/v1beta1/nft";
import * as _186 from "./nft/v1beta1/query";
import * as _187 from "./nft/v1beta1/tx";
import * as _189 from "./orm/module/v1alpha1/module";
import * as _191 from "./orm/query/v1alpha1/query";
import * as _193 from "./orm/v1/orm";
import * as _195 from "./orm/v1alpha1/schema";
import * as _197 from "./params/module/v1/module";
import * as _200 from "./params/v1beta1/params";
import * as _201 from "./params/v1beta1/query";
import * as _205 from "./reflection/v1/reflection";
import * as _207 from "./slashing/module/v1/module";
import * as _212 from "./slashing/v1beta1/genesis";
import * as _213 from "./slashing/v1beta1/query";
import * as _214 from "./slashing/v1beta1/slashing";
import * as _215 from "./slashing/v1beta1/tx";
import * as _217 from "./staking/module/v1/module";
import * as _223 from "./staking/v1beta1/authz";
import * as _224 from "./staking/v1beta1/genesis";
import * as _225 from "./staking/v1beta1/query";
import * as _226 from "./staking/v1beta1/staking";
import * as _227 from "./staking/v1beta1/tx";
import * as _229 from "./store/internal/kv/v1beta1/kv";
import * as _231 from "./store/snapshots/v1/snapshot";
import * as _233 from "./store/streaming/abci/grpc";
import * as _236 from "./store/v1beta1/commit_info";
import * as _237 from "./store/v1beta1/listening";
import * as _239 from "./tx/config/v1/config";
import * as _241 from "./tx/signing/v1beta1/signing";
import * as _244 from "./tx/v1beta1/service";
import * as _245 from "./tx/v1beta1/tx";
import * as _247 from "./upgrade/module/v1/module";
import * as _251 from "./upgrade/v1beta1/query";
import * as _252 from "./upgrade/v1beta1/tx";
import * as _253 from "./upgrade/v1beta1/upgrade";
import * as _255 from "./vesting/module/v1/module";
import * as _258 from "./vesting/v1beta1/tx";
import * as _259 from "./vesting/v1beta1/vesting";
import * as _371 from "./cosmos/auth/v1beta1/query.lcd";
import * as _372 from "./cosmos/authz/v1beta1/query.lcd";
import * as _373 from "./cosmos/bank/v1beta1/query.lcd";
import * as _374 from "./cosmos/base/node/v1beta1/query.lcd";
import * as _375 from "./cosmos/base/tendermint/v1beta1/query.lcd";
import * as _376 from "./cosmos/circuit/v1/query.lcd";
import * as _377 from "./cosmos/consensus/v1/query.lcd";
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
export declare namespace cosmos {
    namespace app {
        namespace runtime {
            const v1alpha1: {
                Module: {
                    encode(message: _5.Module, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _5.Module;
                    fromJSON(object: any): _5.Module;
                    toJSON(message: _5.Module): unknown;
                    fromPartial(object: Partial<_5.Module>): _5.Module;
                };
                StoreKeyConfig: {
                    encode(message: _5.StoreKeyConfig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _5.StoreKeyConfig;
                    fromJSON(object: any): _5.StoreKeyConfig;
                    toJSON(message: _5.StoreKeyConfig): unknown;
                    fromPartial(object: Partial<_5.StoreKeyConfig>): _5.StoreKeyConfig;
                };
            };
        }
        const v1alpha1: {
            QueryConfigRequest: {
                encode(_: _11.QueryConfigRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _11.QueryConfigRequest;
                fromJSON(_: any): _11.QueryConfigRequest;
                toJSON(_: _11.QueryConfigRequest): unknown;
                fromPartial(_: Partial<_11.QueryConfigRequest>): _11.QueryConfigRequest;
            };
            QueryConfigResponse: {
                encode(message: _11.QueryConfigResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _11.QueryConfigResponse;
                fromJSON(object: any): _11.QueryConfigResponse;
                toJSON(message: _11.QueryConfigResponse): unknown;
                fromPartial(object: Partial<_11.QueryConfigResponse>): _11.QueryConfigResponse;
            };
            ModuleDescriptor: {
                encode(message: _10.ModuleDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _10.ModuleDescriptor;
                fromJSON(object: any): _10.ModuleDescriptor;
                toJSON(message: _10.ModuleDescriptor): unknown;
                fromPartial(object: Partial<_10.ModuleDescriptor>): _10.ModuleDescriptor;
            };
            PackageReference: {
                encode(message: _10.PackageReference, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _10.PackageReference;
                fromJSON(object: any): _10.PackageReference;
                toJSON(message: _10.PackageReference): unknown;
                fromPartial(object: Partial<_10.PackageReference>): _10.PackageReference;
            };
            MigrateFromInfo: {
                encode(message: _10.MigrateFromInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _10.MigrateFromInfo;
                fromJSON(object: any): _10.MigrateFromInfo;
                toJSON(message: _10.MigrateFromInfo): unknown;
                fromPartial(object: Partial<_10.MigrateFromInfo>): _10.MigrateFromInfo;
            };
            Config: {
                encode(message: _9.Config, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _9.Config;
                fromJSON(object: any): _9.Config;
                toJSON(message: _9.Config): unknown;
                fromPartial(object: Partial<_9.Config>): _9.Config;
            };
            ModuleConfig: {
                encode(message: _9.ModuleConfig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _9.ModuleConfig;
                fromJSON(object: any): _9.ModuleConfig;
                toJSON(message: _9.ModuleConfig): unknown;
                fromPartial(object: Partial<_9.ModuleConfig>): _9.ModuleConfig;
            };
            GolangBinding: {
                encode(message: _9.GolangBinding, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _9.GolangBinding;
                fromJSON(object: any): _9.GolangBinding;
                toJSON(message: _9.GolangBinding): unknown;
                fromPartial(object: Partial<_9.GolangBinding>): _9.GolangBinding;
            };
        };
    }
    namespace auth {
        namespace module {
            const v1: {
                Module: {
                    encode(message: _13.Module, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _13.Module;
                    fromJSON(object: any): _13.Module;
                    toJSON(message: _13.Module): unknown;
                    fromPartial(object: Partial<_13.Module>): _13.Module;
                };
                ModuleAccountPermission: {
                    encode(message: _13.ModuleAccountPermission, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _13.ModuleAccountPermission;
                    fromJSON(object: any): _13.ModuleAccountPermission;
                    toJSON(message: _13.ModuleAccountPermission): unknown;
                    fromPartial(object: Partial<_13.ModuleAccountPermission>): _13.ModuleAccountPermission;
                };
            };
        }
        const v1beta1: {
            LCDQueryClient: typeof _371.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    updateParams(value: _21.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    updateParams(value: _21.MsgUpdateParams): {
                        typeUrl: string;
                        value: _21.MsgUpdateParams;
                    };
                };
                toJSON: {
                    updateParams(value: _21.MsgUpdateParams): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    updateParams(value: any): {
                        typeUrl: string;
                        value: _21.MsgUpdateParams;
                    };
                };
                fromPartial: {
                    updateParams(value: _21.MsgUpdateParams): {
                        typeUrl: string;
                        value: _21.MsgUpdateParams;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.auth.v1beta1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: ({ authority, params }: _21.MsgUpdateParams) => {
                        authority: string;
                        params: {
                            max_memo_characters: string;
                            tx_sig_limit: string;
                            tx_size_cost_per_byte: string;
                            sig_verify_cost_ed25519: string;
                            sig_verify_cost_secp256k1: string;
                        };
                    };
                    fromAmino: ({ authority, params }: {
                        authority: string;
                        params: {
                            max_memo_characters: string;
                            tx_sig_limit: string;
                            tx_size_cost_per_byte: string;
                            sig_verify_cost_ed25519: string;
                            sig_verify_cost_secp256k1: string;
                        };
                    }) => _21.MsgUpdateParams;
                };
            };
            MsgUpdateParams: {
                encode(message: _21.MsgUpdateParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _21.MsgUpdateParams;
                fromJSON(object: any): _21.MsgUpdateParams;
                toJSON(message: _21.MsgUpdateParams): unknown;
                fromPartial(object: Partial<_21.MsgUpdateParams>): _21.MsgUpdateParams;
            };
            MsgUpdateParamsResponse: {
                encode(_: _21.MsgUpdateParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _21.MsgUpdateParamsResponse;
                fromJSON(_: any): _21.MsgUpdateParamsResponse;
                toJSON(_: _21.MsgUpdateParamsResponse): unknown;
                fromPartial(_: Partial<_21.MsgUpdateParamsResponse>): _21.MsgUpdateParamsResponse;
            };
            QueryAccountsRequest: {
                encode(message: _20.QueryAccountsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _20.QueryAccountsRequest;
                fromJSON(object: any): _20.QueryAccountsRequest;
                toJSON(message: _20.QueryAccountsRequest): unknown;
                fromPartial(object: Partial<_20.QueryAccountsRequest>): _20.QueryAccountsRequest;
            };
            QueryAccountsResponse: {
                encode(message: _20.QueryAccountsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _20.QueryAccountsResponse;
                fromJSON(object: any): _20.QueryAccountsResponse;
                toJSON(message: _20.QueryAccountsResponse): unknown;
                fromPartial(object: Partial<_20.QueryAccountsResponse>): _20.QueryAccountsResponse;
            };
            QueryAccountRequest: {
                encode(message: _20.QueryAccountRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _20.QueryAccountRequest;
                fromJSON(object: any): _20.QueryAccountRequest;
                toJSON(message: _20.QueryAccountRequest): unknown;
                fromPartial(object: Partial<_20.QueryAccountRequest>): _20.QueryAccountRequest;
            };
            QueryAccountResponse: {
                encode(message: _20.QueryAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _20.QueryAccountResponse;
                fromJSON(object: any): _20.QueryAccountResponse;
                toJSON(message: _20.QueryAccountResponse): unknown;
                fromPartial(object: Partial<_20.QueryAccountResponse>): _20.QueryAccountResponse;
            };
            QueryParamsRequest: {
                encode(_: _20.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _20.QueryParamsRequest;
                fromJSON(_: any): _20.QueryParamsRequest;
                toJSON(_: _20.QueryParamsRequest): unknown;
                fromPartial(_: Partial<_20.QueryParamsRequest>): _20.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _20.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _20.QueryParamsResponse;
                fromJSON(object: any): _20.QueryParamsResponse;
                toJSON(message: _20.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_20.QueryParamsResponse>): _20.QueryParamsResponse;
            };
            QueryModuleAccountsRequest: {
                encode(_: _20.QueryModuleAccountsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _20.QueryModuleAccountsRequest;
                fromJSON(_: any): _20.QueryModuleAccountsRequest;
                toJSON(_: _20.QueryModuleAccountsRequest): unknown;
                fromPartial(_: Partial<_20.QueryModuleAccountsRequest>): _20.QueryModuleAccountsRequest;
            };
            QueryModuleAccountsResponse: {
                encode(message: _20.QueryModuleAccountsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _20.QueryModuleAccountsResponse;
                fromJSON(object: any): _20.QueryModuleAccountsResponse;
                toJSON(message: _20.QueryModuleAccountsResponse): unknown;
                fromPartial(object: Partial<_20.QueryModuleAccountsResponse>): _20.QueryModuleAccountsResponse;
            };
            QueryModuleAccountByNameRequest: {
                encode(message: _20.QueryModuleAccountByNameRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _20.QueryModuleAccountByNameRequest;
                fromJSON(object: any): _20.QueryModuleAccountByNameRequest;
                toJSON(message: _20.QueryModuleAccountByNameRequest): unknown;
                fromPartial(object: Partial<_20.QueryModuleAccountByNameRequest>): _20.QueryModuleAccountByNameRequest;
            };
            QueryModuleAccountByNameResponse: {
                encode(message: _20.QueryModuleAccountByNameResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _20.QueryModuleAccountByNameResponse;
                fromJSON(object: any): _20.QueryModuleAccountByNameResponse;
                toJSON(message: _20.QueryModuleAccountByNameResponse): unknown;
                fromPartial(object: Partial<_20.QueryModuleAccountByNameResponse>): _20.QueryModuleAccountByNameResponse;
            };
            Bech32PrefixRequest: {
                encode(_: _20.Bech32PrefixRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _20.Bech32PrefixRequest;
                fromJSON(_: any): _20.Bech32PrefixRequest;
                toJSON(_: _20.Bech32PrefixRequest): unknown;
                fromPartial(_: Partial<_20.Bech32PrefixRequest>): _20.Bech32PrefixRequest;
            };
            Bech32PrefixResponse: {
                encode(message: _20.Bech32PrefixResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _20.Bech32PrefixResponse;
                fromJSON(object: any): _20.Bech32PrefixResponse;
                toJSON(message: _20.Bech32PrefixResponse): unknown;
                fromPartial(object: Partial<_20.Bech32PrefixResponse>): _20.Bech32PrefixResponse;
            };
            AddressBytesToStringRequest: {
                encode(message: _20.AddressBytesToStringRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _20.AddressBytesToStringRequest;
                fromJSON(object: any): _20.AddressBytesToStringRequest;
                toJSON(message: _20.AddressBytesToStringRequest): unknown;
                fromPartial(object: Partial<_20.AddressBytesToStringRequest>): _20.AddressBytesToStringRequest;
            };
            AddressBytesToStringResponse: {
                encode(message: _20.AddressBytesToStringResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _20.AddressBytesToStringResponse;
                fromJSON(object: any): _20.AddressBytesToStringResponse;
                toJSON(message: _20.AddressBytesToStringResponse): unknown;
                fromPartial(object: Partial<_20.AddressBytesToStringResponse>): _20.AddressBytesToStringResponse;
            };
            AddressStringToBytesRequest: {
                encode(message: _20.AddressStringToBytesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _20.AddressStringToBytesRequest;
                fromJSON(object: any): _20.AddressStringToBytesRequest;
                toJSON(message: _20.AddressStringToBytesRequest): unknown;
                fromPartial(object: Partial<_20.AddressStringToBytesRequest>): _20.AddressStringToBytesRequest;
            };
            AddressStringToBytesResponse: {
                encode(message: _20.AddressStringToBytesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _20.AddressStringToBytesResponse;
                fromJSON(object: any): _20.AddressStringToBytesResponse;
                toJSON(message: _20.AddressStringToBytesResponse): unknown;
                fromPartial(object: Partial<_20.AddressStringToBytesResponse>): _20.AddressStringToBytesResponse;
            };
            QueryAccountAddressByIDRequest: {
                encode(message: _20.QueryAccountAddressByIDRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _20.QueryAccountAddressByIDRequest;
                fromJSON(object: any): _20.QueryAccountAddressByIDRequest;
                toJSON(message: _20.QueryAccountAddressByIDRequest): unknown;
                fromPartial(object: Partial<_20.QueryAccountAddressByIDRequest>): _20.QueryAccountAddressByIDRequest;
            };
            QueryAccountAddressByIDResponse: {
                encode(message: _20.QueryAccountAddressByIDResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _20.QueryAccountAddressByIDResponse;
                fromJSON(object: any): _20.QueryAccountAddressByIDResponse;
                toJSON(message: _20.QueryAccountAddressByIDResponse): unknown;
                fromPartial(object: Partial<_20.QueryAccountAddressByIDResponse>): _20.QueryAccountAddressByIDResponse;
            };
            QueryAccountInfoRequest: {
                encode(message: _20.QueryAccountInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _20.QueryAccountInfoRequest;
                fromJSON(object: any): _20.QueryAccountInfoRequest;
                toJSON(message: _20.QueryAccountInfoRequest): unknown;
                fromPartial(object: Partial<_20.QueryAccountInfoRequest>): _20.QueryAccountInfoRequest;
            };
            QueryAccountInfoResponse: {
                encode(message: _20.QueryAccountInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _20.QueryAccountInfoResponse;
                fromJSON(object: any): _20.QueryAccountInfoResponse;
                toJSON(message: _20.QueryAccountInfoResponse): unknown;
                fromPartial(object: Partial<_20.QueryAccountInfoResponse>): _20.QueryAccountInfoResponse;
            };
            GenesisState: {
                encode(message: _19.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _19.GenesisState;
                fromJSON(object: any): _19.GenesisState;
                toJSON(message: _19.GenesisState): unknown;
                fromPartial(object: Partial<_19.GenesisState>): _19.GenesisState;
            };
            BaseAccount: {
                encode(message: _18.BaseAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _18.BaseAccount;
                fromJSON(object: any): _18.BaseAccount;
                toJSON(message: _18.BaseAccount): unknown;
                fromPartial(object: Partial<_18.BaseAccount>): _18.BaseAccount;
            };
            ModuleAccount: {
                encode(message: _18.ModuleAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _18.ModuleAccount;
                fromJSON(object: any): _18.ModuleAccount;
                toJSON(message: _18.ModuleAccount): unknown;
                fromPartial(object: Partial<_18.ModuleAccount>): _18.ModuleAccount;
            };
            ModuleCredential: {
                encode(message: _18.ModuleCredential, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _18.ModuleCredential;
                fromJSON(object: any): _18.ModuleCredential;
                toJSON(message: _18.ModuleCredential): unknown;
                fromPartial(object: Partial<_18.ModuleCredential>): _18.ModuleCredential;
            };
            Params: {
                encode(message: _18.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _18.Params;
                fromJSON(object: any): _18.Params;
                toJSON(message: _18.Params): unknown;
                fromPartial(object: Partial<_18.Params>): _18.Params;
            };
        };
    }
    namespace authz {
        namespace module {
            const v1: {
                Module: {
                    encode(_: _23.Module, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _23.Module;
                    fromJSON(_: any): _23.Module;
                    toJSON(_: _23.Module): unknown;
                    fromPartial(_: Partial<_23.Module>): _23.Module;
                };
            };
        }
        const v1beta1: {
            LCDQueryClient: typeof _372.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    grant(value: _33.MsgGrant): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    exec(value: _33.MsgExec): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    revoke(value: _33.MsgRevoke): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    grant(value: _33.MsgGrant): {
                        typeUrl: string;
                        value: _33.MsgGrant;
                    };
                    exec(value: _33.MsgExec): {
                        typeUrl: string;
                        value: _33.MsgExec;
                    };
                    revoke(value: _33.MsgRevoke): {
                        typeUrl: string;
                        value: _33.MsgRevoke;
                    };
                };
                toJSON: {
                    grant(value: _33.MsgGrant): {
                        typeUrl: string;
                        value: unknown;
                    };
                    exec(value: _33.MsgExec): {
                        typeUrl: string;
                        value: unknown;
                    };
                    revoke(value: _33.MsgRevoke): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    grant(value: any): {
                        typeUrl: string;
                        value: _33.MsgGrant;
                    };
                    exec(value: any): {
                        typeUrl: string;
                        value: _33.MsgExec;
                    };
                    revoke(value: any): {
                        typeUrl: string;
                        value: _33.MsgRevoke;
                    };
                };
                fromPartial: {
                    grant(value: _33.MsgGrant): {
                        typeUrl: string;
                        value: _33.MsgGrant;
                    };
                    exec(value: _33.MsgExec): {
                        typeUrl: string;
                        value: _33.MsgExec;
                    };
                    revoke(value: _33.MsgRevoke): {
                        typeUrl: string;
                        value: _33.MsgRevoke;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.authz.v1beta1.MsgGrant": {
                    aminoType: string;
                    toAmino: ({ granter, grantee, grant }: _33.MsgGrant) => {
                        granter: string;
                        grantee: string;
                        grant: {
                            authorization: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            expiration: {
                                seconds: string;
                                nanos: number;
                            };
                        };
                    };
                    fromAmino: ({ granter, grantee, grant }: {
                        granter: string;
                        grantee: string;
                        grant: {
                            authorization: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            expiration: {
                                seconds: string;
                                nanos: number;
                            };
                        };
                    }) => _33.MsgGrant;
                };
                "/cosmos.authz.v1beta1.MsgExec": {
                    aminoType: string;
                    toAmino: ({ grantee, msgs }: _33.MsgExec) => {
                        grantee: string;
                        msgs: {
                            type_url: string;
                            value: Uint8Array;
                        }[];
                    };
                    fromAmino: ({ grantee, msgs }: {
                        grantee: string;
                        msgs: {
                            type_url: string;
                            value: Uint8Array;
                        }[];
                    }) => _33.MsgExec;
                };
                "/cosmos.authz.v1beta1.MsgRevoke": {
                    aminoType: string;
                    toAmino: ({ granter, grantee, msgTypeUrl }: _33.MsgRevoke) => {
                        granter: string;
                        grantee: string;
                        msg_type_url: string;
                    };
                    fromAmino: ({ granter, grantee, msg_type_url }: {
                        granter: string;
                        grantee: string;
                        msg_type_url: string;
                    }) => _33.MsgRevoke;
                };
            };
            MsgGrant: {
                encode(message: _33.MsgGrant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _33.MsgGrant;
                fromJSON(object: any): _33.MsgGrant;
                toJSON(message: _33.MsgGrant): unknown;
                fromPartial(object: Partial<_33.MsgGrant>): _33.MsgGrant;
            };
            MsgExecResponse: {
                encode(message: _33.MsgExecResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _33.MsgExecResponse;
                fromJSON(object: any): _33.MsgExecResponse;
                toJSON(message: _33.MsgExecResponse): unknown;
                fromPartial(object: Partial<_33.MsgExecResponse>): _33.MsgExecResponse;
            };
            MsgExec: {
                encode(message: _33.MsgExec, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _33.MsgExec;
                fromJSON(object: any): _33.MsgExec;
                toJSON(message: _33.MsgExec): unknown;
                fromPartial(object: Partial<_33.MsgExec>): _33.MsgExec;
            };
            MsgGrantResponse: {
                encode(_: _33.MsgGrantResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _33.MsgGrantResponse;
                fromJSON(_: any): _33.MsgGrantResponse;
                toJSON(_: _33.MsgGrantResponse): unknown;
                fromPartial(_: Partial<_33.MsgGrantResponse>): _33.MsgGrantResponse;
            };
            MsgRevoke: {
                encode(message: _33.MsgRevoke, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _33.MsgRevoke;
                fromJSON(object: any): _33.MsgRevoke;
                toJSON(message: _33.MsgRevoke): unknown;
                fromPartial(object: Partial<_33.MsgRevoke>): _33.MsgRevoke;
            };
            MsgRevokeResponse: {
                encode(_: _33.MsgRevokeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _33.MsgRevokeResponse;
                fromJSON(_: any): _33.MsgRevokeResponse;
                toJSON(_: _33.MsgRevokeResponse): unknown;
                fromPartial(_: Partial<_33.MsgRevokeResponse>): _33.MsgRevokeResponse;
            };
            QueryGrantsRequest: {
                encode(message: _32.QueryGrantsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _32.QueryGrantsRequest;
                fromJSON(object: any): _32.QueryGrantsRequest;
                toJSON(message: _32.QueryGrantsRequest): unknown;
                fromPartial(object: Partial<_32.QueryGrantsRequest>): _32.QueryGrantsRequest;
            };
            QueryGrantsResponse: {
                encode(message: _32.QueryGrantsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _32.QueryGrantsResponse;
                fromJSON(object: any): _32.QueryGrantsResponse;
                toJSON(message: _32.QueryGrantsResponse): unknown;
                fromPartial(object: Partial<_32.QueryGrantsResponse>): _32.QueryGrantsResponse;
            };
            QueryGranterGrantsRequest: {
                encode(message: _32.QueryGranterGrantsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _32.QueryGranterGrantsRequest;
                fromJSON(object: any): _32.QueryGranterGrantsRequest;
                toJSON(message: _32.QueryGranterGrantsRequest): unknown;
                fromPartial(object: Partial<_32.QueryGranterGrantsRequest>): _32.QueryGranterGrantsRequest;
            };
            QueryGranterGrantsResponse: {
                encode(message: _32.QueryGranterGrantsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _32.QueryGranterGrantsResponse;
                fromJSON(object: any): _32.QueryGranterGrantsResponse;
                toJSON(message: _32.QueryGranterGrantsResponse): unknown;
                fromPartial(object: Partial<_32.QueryGranterGrantsResponse>): _32.QueryGranterGrantsResponse;
            };
            QueryGranteeGrantsRequest: {
                encode(message: _32.QueryGranteeGrantsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _32.QueryGranteeGrantsRequest;
                fromJSON(object: any): _32.QueryGranteeGrantsRequest;
                toJSON(message: _32.QueryGranteeGrantsRequest): unknown;
                fromPartial(object: Partial<_32.QueryGranteeGrantsRequest>): _32.QueryGranteeGrantsRequest;
            };
            QueryGranteeGrantsResponse: {
                encode(message: _32.QueryGranteeGrantsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _32.QueryGranteeGrantsResponse;
                fromJSON(object: any): _32.QueryGranteeGrantsResponse;
                toJSON(message: _32.QueryGranteeGrantsResponse): unknown;
                fromPartial(object: Partial<_32.QueryGranteeGrantsResponse>): _32.QueryGranteeGrantsResponse;
            };
            GenesisState: {
                encode(message: _31.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _31.GenesisState;
                fromJSON(object: any): _31.GenesisState;
                toJSON(message: _31.GenesisState): unknown;
                fromPartial(object: Partial<_31.GenesisState>): _31.GenesisState;
            };
            EventGrant: {
                encode(message: _30.EventGrant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _30.EventGrant;
                fromJSON(object: any): _30.EventGrant;
                toJSON(message: _30.EventGrant): unknown;
                fromPartial(object: Partial<_30.EventGrant>): _30.EventGrant;
            };
            EventRevoke: {
                encode(message: _30.EventRevoke, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _30.EventRevoke;
                fromJSON(object: any): _30.EventRevoke;
                toJSON(message: _30.EventRevoke): unknown;
                fromPartial(object: Partial<_30.EventRevoke>): _30.EventRevoke;
            };
            GenericAuthorization: {
                encode(message: _29.GenericAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _29.GenericAuthorization;
                fromJSON(object: any): _29.GenericAuthorization;
                toJSON(message: _29.GenericAuthorization): unknown;
                fromPartial(object: Partial<_29.GenericAuthorization>): _29.GenericAuthorization;
            };
            Grant: {
                encode(message: _29.Grant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _29.Grant;
                fromJSON(object: any): _29.Grant;
                toJSON(message: _29.Grant): unknown;
                fromPartial(object: Partial<_29.Grant>): _29.Grant;
            };
            GrantAuthorization: {
                encode(message: _29.GrantAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _29.GrantAuthorization;
                fromJSON(object: any): _29.GrantAuthorization;
                toJSON(message: _29.GrantAuthorization): unknown;
                fromPartial(object: Partial<_29.GrantAuthorization>): _29.GrantAuthorization;
            };
            GrantQueueItem: {
                encode(message: _29.GrantQueueItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _29.GrantQueueItem;
                fromJSON(object: any): _29.GrantQueueItem;
                toJSON(message: _29.GrantQueueItem): unknown;
                fromPartial(object: Partial<_29.GrantQueueItem>): _29.GrantQueueItem;
            };
        };
    }
    namespace autocli {
        const v1: {
            AppOptionsRequest: {
                encode(_: _37.AppOptionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _37.AppOptionsRequest;
                fromJSON(_: any): _37.AppOptionsRequest;
                toJSON(_: _37.AppOptionsRequest): unknown;
                fromPartial(_: Partial<_37.AppOptionsRequest>): _37.AppOptionsRequest;
            };
            AppOptionsResponse_ModuleOptionsEntry: {
                encode(message: _37.AppOptionsResponse_ModuleOptionsEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _37.AppOptionsResponse_ModuleOptionsEntry;
                fromJSON(object: any): _37.AppOptionsResponse_ModuleOptionsEntry;
                toJSON(message: _37.AppOptionsResponse_ModuleOptionsEntry): unknown;
                fromPartial(object: Partial<_37.AppOptionsResponse_ModuleOptionsEntry>): _37.AppOptionsResponse_ModuleOptionsEntry;
            };
            AppOptionsResponse: {
                encode(message: _37.AppOptionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _37.AppOptionsResponse;
                fromJSON(object: any): _37.AppOptionsResponse;
                toJSON(message: _37.AppOptionsResponse): unknown;
                fromPartial(object: Partial<_37.AppOptionsResponse>): _37.AppOptionsResponse;
            };
            ModuleOptions: {
                encode(message: _36.ModuleOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _36.ModuleOptions;
                fromJSON(object: any): _36.ModuleOptions;
                toJSON(message: _36.ModuleOptions): unknown;
                fromPartial(object: Partial<_36.ModuleOptions>): _36.ModuleOptions;
            };
            ServiceCommandDescriptor_SubCommandsEntry: {
                encode(message: _36.ServiceCommandDescriptor_SubCommandsEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _36.ServiceCommandDescriptor_SubCommandsEntry;
                fromJSON(object: any): _36.ServiceCommandDescriptor_SubCommandsEntry;
                toJSON(message: _36.ServiceCommandDescriptor_SubCommandsEntry): unknown;
                fromPartial(object: Partial<_36.ServiceCommandDescriptor_SubCommandsEntry>): _36.ServiceCommandDescriptor_SubCommandsEntry;
            };
            ServiceCommandDescriptor: {
                encode(message: _36.ServiceCommandDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _36.ServiceCommandDescriptor;
                fromJSON(object: any): _36.ServiceCommandDescriptor;
                toJSON(message: _36.ServiceCommandDescriptor): unknown;
                fromPartial(object: Partial<_36.ServiceCommandDescriptor>): _36.ServiceCommandDescriptor;
            };
            RpcCommandOptions_FlagOptionsEntry: {
                encode(message: _36.RpcCommandOptions_FlagOptionsEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _36.RpcCommandOptions_FlagOptionsEntry;
                fromJSON(object: any): _36.RpcCommandOptions_FlagOptionsEntry;
                toJSON(message: _36.RpcCommandOptions_FlagOptionsEntry): unknown;
                fromPartial(object: Partial<_36.RpcCommandOptions_FlagOptionsEntry>): _36.RpcCommandOptions_FlagOptionsEntry;
            };
            RpcCommandOptions: {
                encode(message: _36.RpcCommandOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _36.RpcCommandOptions;
                fromJSON(object: any): _36.RpcCommandOptions;
                toJSON(message: _36.RpcCommandOptions): unknown;
                fromPartial(object: Partial<_36.RpcCommandOptions>): _36.RpcCommandOptions;
            };
            FlagOptions: {
                encode(message: _36.FlagOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _36.FlagOptions;
                fromJSON(object: any): _36.FlagOptions;
                toJSON(message: _36.FlagOptions): unknown;
                fromPartial(object: Partial<_36.FlagOptions>): _36.FlagOptions;
            };
            PositionalArgDescriptor: {
                encode(message: _36.PositionalArgDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _36.PositionalArgDescriptor;
                fromJSON(object: any): _36.PositionalArgDescriptor;
                toJSON(message: _36.PositionalArgDescriptor): unknown;
                fromPartial(object: Partial<_36.PositionalArgDescriptor>): _36.PositionalArgDescriptor;
            };
        };
    }
    namespace bank {
        namespace module {
            const v1: {
                Module: {
                    encode(message: _39.Module, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _39.Module;
                    fromJSON(object: any): _39.Module;
                    toJSON(message: _39.Module): unknown;
                    fromPartial(object: Partial<_39.Module>): _39.Module;
                };
            };
        }
        const v1beta1: {
            LCDQueryClient: typeof _373.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    send(value: _49.MsgSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    multiSend(value: _49.MsgMultiSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateParams(value: _49.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    setSendEnabled(value: _49.MsgSetSendEnabled): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    send(value: _49.MsgSend): {
                        typeUrl: string;
                        value: _49.MsgSend;
                    };
                    multiSend(value: _49.MsgMultiSend): {
                        typeUrl: string;
                        value: _49.MsgMultiSend;
                    };
                    updateParams(value: _49.MsgUpdateParams): {
                        typeUrl: string;
                        value: _49.MsgUpdateParams;
                    };
                    setSendEnabled(value: _49.MsgSetSendEnabled): {
                        typeUrl: string;
                        value: _49.MsgSetSendEnabled;
                    };
                };
                toJSON: {
                    send(value: _49.MsgSend): {
                        typeUrl: string;
                        value: unknown;
                    };
                    multiSend(value: _49.MsgMultiSend): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateParams(value: _49.MsgUpdateParams): {
                        typeUrl: string;
                        value: unknown;
                    };
                    setSendEnabled(value: _49.MsgSetSendEnabled): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    send(value: any): {
                        typeUrl: string;
                        value: _49.MsgSend;
                    };
                    multiSend(value: any): {
                        typeUrl: string;
                        value: _49.MsgMultiSend;
                    };
                    updateParams(value: any): {
                        typeUrl: string;
                        value: _49.MsgUpdateParams;
                    };
                    setSendEnabled(value: any): {
                        typeUrl: string;
                        value: _49.MsgSetSendEnabled;
                    };
                };
                fromPartial: {
                    send(value: _49.MsgSend): {
                        typeUrl: string;
                        value: _49.MsgSend;
                    };
                    multiSend(value: _49.MsgMultiSend): {
                        typeUrl: string;
                        value: _49.MsgMultiSend;
                    };
                    updateParams(value: _49.MsgUpdateParams): {
                        typeUrl: string;
                        value: _49.MsgUpdateParams;
                    };
                    setSendEnabled(value: _49.MsgSetSendEnabled): {
                        typeUrl: string;
                        value: _49.MsgSetSendEnabled;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.bank.v1beta1.MsgSend": {
                    aminoType: string;
                    toAmino: ({ fromAddress, toAddress, amount }: _49.MsgSend) => {
                        from_address: string;
                        to_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                    };
                    fromAmino: ({ from_address, to_address, amount }: {
                        from_address: string;
                        to_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                    }) => _49.MsgSend;
                };
                "/cosmos.bank.v1beta1.MsgMultiSend": {
                    aminoType: string;
                    toAmino: ({ inputs, outputs }: _49.MsgMultiSend) => {
                        inputs: {
                            address: string;
                            coins: {
                                denom: string;
                                amount: string;
                            }[];
                        }[];
                        outputs: {
                            address: string;
                            coins: {
                                denom: string;
                                amount: string;
                            }[];
                        }[];
                    };
                    fromAmino: ({ inputs, outputs }: {
                        inputs: {
                            address: string;
                            coins: {
                                denom: string;
                                amount: string;
                            }[];
                        }[];
                        outputs: {
                            address: string;
                            coins: {
                                denom: string;
                                amount: string;
                            }[];
                        }[];
                    }) => _49.MsgMultiSend;
                };
                "/cosmos.bank.v1beta1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: ({ authority, params }: _49.MsgUpdateParams) => {
                        authority: string;
                        params: {
                            send_enabled: {
                                denom: string;
                                enabled: boolean;
                            }[];
                            default_send_enabled: boolean;
                        };
                    };
                    fromAmino: ({ authority, params }: {
                        authority: string;
                        params: {
                            send_enabled: {
                                denom: string;
                                enabled: boolean;
                            }[];
                            default_send_enabled: boolean;
                        };
                    }) => _49.MsgUpdateParams;
                };
                "/cosmos.bank.v1beta1.MsgSetSendEnabled": {
                    aminoType: string;
                    toAmino: ({ authority, sendEnabled, useDefaultFor }: _49.MsgSetSendEnabled) => {
                        authority: string;
                        send_enabled: {
                            denom: string;
                            enabled: boolean;
                        }[];
                        use_default_for: string[];
                    };
                    fromAmino: ({ authority, send_enabled, use_default_for }: {
                        authority: string;
                        send_enabled: {
                            denom: string;
                            enabled: boolean;
                        }[];
                        use_default_for: string[];
                    }) => _49.MsgSetSendEnabled;
                };
            };
            MsgSend: {
                encode(message: _49.MsgSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _49.MsgSend;
                fromJSON(object: any): _49.MsgSend;
                toJSON(message: _49.MsgSend): unknown;
                fromPartial(object: Partial<_49.MsgSend>): _49.MsgSend;
            };
            MsgSendResponse: {
                encode(_: _49.MsgSendResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _49.MsgSendResponse;
                fromJSON(_: any): _49.MsgSendResponse;
                toJSON(_: _49.MsgSendResponse): unknown;
                fromPartial(_: Partial<_49.MsgSendResponse>): _49.MsgSendResponse;
            };
            MsgMultiSend: {
                encode(message: _49.MsgMultiSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _49.MsgMultiSend;
                fromJSON(object: any): _49.MsgMultiSend;
                toJSON(message: _49.MsgMultiSend): unknown;
                fromPartial(object: Partial<_49.MsgMultiSend>): _49.MsgMultiSend;
            };
            MsgMultiSendResponse: {
                encode(_: _49.MsgMultiSendResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _49.MsgMultiSendResponse;
                fromJSON(_: any): _49.MsgMultiSendResponse;
                toJSON(_: _49.MsgMultiSendResponse): unknown;
                fromPartial(_: Partial<_49.MsgMultiSendResponse>): _49.MsgMultiSendResponse;
            };
            MsgUpdateParams: {
                encode(message: _49.MsgUpdateParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _49.MsgUpdateParams;
                fromJSON(object: any): _49.MsgUpdateParams;
                toJSON(message: _49.MsgUpdateParams): unknown;
                fromPartial(object: Partial<_49.MsgUpdateParams>): _49.MsgUpdateParams;
            };
            MsgUpdateParamsResponse: {
                encode(_: _49.MsgUpdateParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _49.MsgUpdateParamsResponse;
                fromJSON(_: any): _49.MsgUpdateParamsResponse;
                toJSON(_: _49.MsgUpdateParamsResponse): unknown;
                fromPartial(_: Partial<_49.MsgUpdateParamsResponse>): _49.MsgUpdateParamsResponse;
            };
            MsgSetSendEnabled: {
                encode(message: _49.MsgSetSendEnabled, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _49.MsgSetSendEnabled;
                fromJSON(object: any): _49.MsgSetSendEnabled;
                toJSON(message: _49.MsgSetSendEnabled): unknown;
                fromPartial(object: Partial<_49.MsgSetSendEnabled>): _49.MsgSetSendEnabled;
            };
            MsgSetSendEnabledResponse: {
                encode(_: _49.MsgSetSendEnabledResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _49.MsgSetSendEnabledResponse;
                fromJSON(_: any): _49.MsgSetSendEnabledResponse;
                toJSON(_: _49.MsgSetSendEnabledResponse): unknown;
                fromPartial(_: Partial<_49.MsgSetSendEnabledResponse>): _49.MsgSetSendEnabledResponse;
            };
            QueryBalanceRequest: {
                encode(message: _48.QueryBalanceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _48.QueryBalanceRequest;
                fromJSON(object: any): _48.QueryBalanceRequest;
                toJSON(message: _48.QueryBalanceRequest): unknown;
                fromPartial(object: Partial<_48.QueryBalanceRequest>): _48.QueryBalanceRequest;
            };
            QueryBalanceResponse: {
                encode(message: _48.QueryBalanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _48.QueryBalanceResponse;
                fromJSON(object: any): _48.QueryBalanceResponse;
                toJSON(message: _48.QueryBalanceResponse): unknown;
                fromPartial(object: Partial<_48.QueryBalanceResponse>): _48.QueryBalanceResponse;
            };
            QueryAllBalancesRequest: {
                encode(message: _48.QueryAllBalancesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _48.QueryAllBalancesRequest;
                fromJSON(object: any): _48.QueryAllBalancesRequest;
                toJSON(message: _48.QueryAllBalancesRequest): unknown;
                fromPartial(object: Partial<_48.QueryAllBalancesRequest>): _48.QueryAllBalancesRequest;
            };
            QueryAllBalancesResponse: {
                encode(message: _48.QueryAllBalancesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _48.QueryAllBalancesResponse;
                fromJSON(object: any): _48.QueryAllBalancesResponse;
                toJSON(message: _48.QueryAllBalancesResponse): unknown;
                fromPartial(object: Partial<_48.QueryAllBalancesResponse>): _48.QueryAllBalancesResponse;
            };
            QuerySpendableBalancesRequest: {
                encode(message: _48.QuerySpendableBalancesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _48.QuerySpendableBalancesRequest;
                fromJSON(object: any): _48.QuerySpendableBalancesRequest;
                toJSON(message: _48.QuerySpendableBalancesRequest): unknown;
                fromPartial(object: Partial<_48.QuerySpendableBalancesRequest>): _48.QuerySpendableBalancesRequest;
            };
            QuerySpendableBalancesResponse: {
                encode(message: _48.QuerySpendableBalancesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _48.QuerySpendableBalancesResponse;
                fromJSON(object: any): _48.QuerySpendableBalancesResponse;
                toJSON(message: _48.QuerySpendableBalancesResponse): unknown;
                fromPartial(object: Partial<_48.QuerySpendableBalancesResponse>): _48.QuerySpendableBalancesResponse;
            };
            QuerySpendableBalanceByDenomRequest: {
                encode(message: _48.QuerySpendableBalanceByDenomRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _48.QuerySpendableBalanceByDenomRequest;
                fromJSON(object: any): _48.QuerySpendableBalanceByDenomRequest;
                toJSON(message: _48.QuerySpendableBalanceByDenomRequest): unknown;
                fromPartial(object: Partial<_48.QuerySpendableBalanceByDenomRequest>): _48.QuerySpendableBalanceByDenomRequest;
            };
            QuerySpendableBalanceByDenomResponse: {
                encode(message: _48.QuerySpendableBalanceByDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _48.QuerySpendableBalanceByDenomResponse;
                fromJSON(object: any): _48.QuerySpendableBalanceByDenomResponse;
                toJSON(message: _48.QuerySpendableBalanceByDenomResponse): unknown;
                fromPartial(object: Partial<_48.QuerySpendableBalanceByDenomResponse>): _48.QuerySpendableBalanceByDenomResponse;
            };
            QueryTotalSupplyRequest: {
                encode(message: _48.QueryTotalSupplyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _48.QueryTotalSupplyRequest;
                fromJSON(object: any): _48.QueryTotalSupplyRequest;
                toJSON(message: _48.QueryTotalSupplyRequest): unknown;
                fromPartial(object: Partial<_48.QueryTotalSupplyRequest>): _48.QueryTotalSupplyRequest;
            };
            QueryTotalSupplyResponse: {
                encode(message: _48.QueryTotalSupplyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _48.QueryTotalSupplyResponse;
                fromJSON(object: any): _48.QueryTotalSupplyResponse;
                toJSON(message: _48.QueryTotalSupplyResponse): unknown;
                fromPartial(object: Partial<_48.QueryTotalSupplyResponse>): _48.QueryTotalSupplyResponse;
            };
            QuerySupplyOfRequest: {
                encode(message: _48.QuerySupplyOfRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _48.QuerySupplyOfRequest;
                fromJSON(object: any): _48.QuerySupplyOfRequest;
                toJSON(message: _48.QuerySupplyOfRequest): unknown;
                fromPartial(object: Partial<_48.QuerySupplyOfRequest>): _48.QuerySupplyOfRequest;
            };
            QuerySupplyOfResponse: {
                encode(message: _48.QuerySupplyOfResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _48.QuerySupplyOfResponse;
                fromJSON(object: any): _48.QuerySupplyOfResponse;
                toJSON(message: _48.QuerySupplyOfResponse): unknown;
                fromPartial(object: Partial<_48.QuerySupplyOfResponse>): _48.QuerySupplyOfResponse;
            };
            QueryParamsRequest: {
                encode(_: _48.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _48.QueryParamsRequest;
                fromJSON(_: any): _48.QueryParamsRequest;
                toJSON(_: _48.QueryParamsRequest): unknown;
                fromPartial(_: Partial<_48.QueryParamsRequest>): _48.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _48.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _48.QueryParamsResponse;
                fromJSON(object: any): _48.QueryParamsResponse;
                toJSON(message: _48.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_48.QueryParamsResponse>): _48.QueryParamsResponse;
            };
            QueryDenomsMetadataRequest: {
                encode(message: _48.QueryDenomsMetadataRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _48.QueryDenomsMetadataRequest;
                fromJSON(object: any): _48.QueryDenomsMetadataRequest;
                toJSON(message: _48.QueryDenomsMetadataRequest): unknown;
                fromPartial(object: Partial<_48.QueryDenomsMetadataRequest>): _48.QueryDenomsMetadataRequest;
            };
            QueryDenomsMetadataResponse: {
                encode(message: _48.QueryDenomsMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _48.QueryDenomsMetadataResponse;
                fromJSON(object: any): _48.QueryDenomsMetadataResponse;
                toJSON(message: _48.QueryDenomsMetadataResponse): unknown;
                fromPartial(object: Partial<_48.QueryDenomsMetadataResponse>): _48.QueryDenomsMetadataResponse;
            };
            QueryDenomMetadataRequest: {
                encode(message: _48.QueryDenomMetadataRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _48.QueryDenomMetadataRequest;
                fromJSON(object: any): _48.QueryDenomMetadataRequest;
                toJSON(message: _48.QueryDenomMetadataRequest): unknown;
                fromPartial(object: Partial<_48.QueryDenomMetadataRequest>): _48.QueryDenomMetadataRequest;
            };
            QueryDenomMetadataResponse: {
                encode(message: _48.QueryDenomMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _48.QueryDenomMetadataResponse;
                fromJSON(object: any): _48.QueryDenomMetadataResponse;
                toJSON(message: _48.QueryDenomMetadataResponse): unknown;
                fromPartial(object: Partial<_48.QueryDenomMetadataResponse>): _48.QueryDenomMetadataResponse;
            };
            QueryDenomOwnersRequest: {
                encode(message: _48.QueryDenomOwnersRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _48.QueryDenomOwnersRequest;
                fromJSON(object: any): _48.QueryDenomOwnersRequest;
                toJSON(message: _48.QueryDenomOwnersRequest): unknown;
                fromPartial(object: Partial<_48.QueryDenomOwnersRequest>): _48.QueryDenomOwnersRequest;
            };
            DenomOwner: {
                encode(message: _48.DenomOwner, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _48.DenomOwner;
                fromJSON(object: any): _48.DenomOwner;
                toJSON(message: _48.DenomOwner): unknown;
                fromPartial(object: Partial<_48.DenomOwner>): _48.DenomOwner;
            };
            QueryDenomOwnersResponse: {
                encode(message: _48.QueryDenomOwnersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _48.QueryDenomOwnersResponse;
                fromJSON(object: any): _48.QueryDenomOwnersResponse;
                toJSON(message: _48.QueryDenomOwnersResponse): unknown;
                fromPartial(object: Partial<_48.QueryDenomOwnersResponse>): _48.QueryDenomOwnersResponse;
            };
            QuerySendEnabledRequest: {
                encode(message: _48.QuerySendEnabledRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _48.QuerySendEnabledRequest;
                fromJSON(object: any): _48.QuerySendEnabledRequest;
                toJSON(message: _48.QuerySendEnabledRequest): unknown;
                fromPartial(object: Partial<_48.QuerySendEnabledRequest>): _48.QuerySendEnabledRequest;
            };
            QuerySendEnabledResponse: {
                encode(message: _48.QuerySendEnabledResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _48.QuerySendEnabledResponse;
                fromJSON(object: any): _48.QuerySendEnabledResponse;
                toJSON(message: _48.QuerySendEnabledResponse): unknown;
                fromPartial(object: Partial<_48.QuerySendEnabledResponse>): _48.QuerySendEnabledResponse;
            };
            GenesisState: {
                encode(message: _47.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _47.GenesisState;
                fromJSON(object: any): _47.GenesisState;
                toJSON(message: _47.GenesisState): unknown;
                fromPartial(object: Partial<_47.GenesisState>): _47.GenesisState;
            };
            Balance: {
                encode(message: _47.Balance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _47.Balance;
                fromJSON(object: any): _47.Balance;
                toJSON(message: _47.Balance): unknown;
                fromPartial(object: Partial<_47.Balance>): _47.Balance;
            };
            Params: {
                encode(message: _46.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _46.Params;
                fromJSON(object: any): _46.Params;
                toJSON(message: _46.Params): unknown;
                fromPartial(object: Partial<_46.Params>): _46.Params;
            };
            SendEnabled: {
                encode(message: _46.SendEnabled, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _46.SendEnabled;
                fromJSON(object: any): _46.SendEnabled;
                toJSON(message: _46.SendEnabled): unknown;
                fromPartial(object: Partial<_46.SendEnabled>): _46.SendEnabled;
            };
            Input: {
                encode(message: _46.Input, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _46.Input;
                fromJSON(object: any): _46.Input;
                toJSON(message: _46.Input): unknown;
                fromPartial(object: Partial<_46.Input>): _46.Input;
            };
            Output: {
                encode(message: _46.Output, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _46.Output;
                fromJSON(object: any): _46.Output;
                toJSON(message: _46.Output): unknown;
                fromPartial(object: Partial<_46.Output>): _46.Output;
            };
            Supply: {
                encode(message: _46.Supply, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _46.Supply;
                fromJSON(object: any): _46.Supply;
                toJSON(message: _46.Supply): unknown;
                fromPartial(object: Partial<_46.Supply>): _46.Supply;
            };
            DenomUnit: {
                encode(message: _46.DenomUnit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _46.DenomUnit;
                fromJSON(object: any): _46.DenomUnit;
                toJSON(message: _46.DenomUnit): unknown;
                fromPartial(object: Partial<_46.DenomUnit>): _46.DenomUnit;
            };
            Metadata: {
                encode(message: _46.Metadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _46.Metadata;
                fromJSON(object: any): _46.Metadata;
                toJSON(message: _46.Metadata): unknown;
                fromPartial(object: Partial<_46.Metadata>): _46.Metadata;
            };
            SendAuthorization: {
                encode(message: _45.SendAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _45.SendAuthorization;
                fromJSON(object: any): _45.SendAuthorization;
                toJSON(message: _45.SendAuthorization): unknown;
                fromPartial(object: Partial<_45.SendAuthorization>): _45.SendAuthorization;
            };
        };
    }
    namespace base {
        namespace abci {
            const v1beta1: {
                TxResponse: {
                    encode(message: _51.TxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _51.TxResponse;
                    fromJSON(object: any): _51.TxResponse;
                    toJSON(message: _51.TxResponse): unknown;
                    fromPartial(object: Partial<_51.TxResponse>): _51.TxResponse;
                };
                ABCIMessageLog: {
                    encode(message: _51.ABCIMessageLog, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _51.ABCIMessageLog;
                    fromJSON(object: any): _51.ABCIMessageLog;
                    toJSON(message: _51.ABCIMessageLog): unknown;
                    fromPartial(object: Partial<_51.ABCIMessageLog>): _51.ABCIMessageLog;
                };
                StringEvent: {
                    encode(message: _51.StringEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _51.StringEvent;
                    fromJSON(object: any): _51.StringEvent;
                    toJSON(message: _51.StringEvent): unknown;
                    fromPartial(object: Partial<_51.StringEvent>): _51.StringEvent;
                };
                Attribute: {
                    encode(message: _51.Attribute, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _51.Attribute;
                    fromJSON(object: any): _51.Attribute;
                    toJSON(message: _51.Attribute): unknown;
                    fromPartial(object: Partial<_51.Attribute>): _51.Attribute;
                };
                GasInfo: {
                    encode(message: _51.GasInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _51.GasInfo;
                    fromJSON(object: any): _51.GasInfo;
                    toJSON(message: _51.GasInfo): unknown;
                    fromPartial(object: Partial<_51.GasInfo>): _51.GasInfo;
                };
                Result: {
                    encode(message: _51.Result, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _51.Result;
                    fromJSON(object: any): _51.Result;
                    toJSON(message: _51.Result): unknown;
                    fromPartial(object: Partial<_51.Result>): _51.Result;
                };
                SimulationResponse: {
                    encode(message: _51.SimulationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _51.SimulationResponse;
                    fromJSON(object: any): _51.SimulationResponse;
                    toJSON(message: _51.SimulationResponse): unknown;
                    fromPartial(object: Partial<_51.SimulationResponse>): _51.SimulationResponse;
                };
                MsgData: {
                    encode(message: _51.MsgData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _51.MsgData;
                    fromJSON(object: any): _51.MsgData;
                    toJSON(message: _51.MsgData): unknown;
                    fromPartial(object: Partial<_51.MsgData>): _51.MsgData;
                };
                TxMsgData: {
                    encode(message: _51.TxMsgData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _51.TxMsgData;
                    fromJSON(object: any): _51.TxMsgData;
                    toJSON(message: _51.TxMsgData): unknown;
                    fromPartial(object: Partial<_51.TxMsgData>): _51.TxMsgData;
                };
                SearchTxsResult: {
                    encode(message: _51.SearchTxsResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _51.SearchTxsResult;
                    fromJSON(object: any): _51.SearchTxsResult;
                    toJSON(message: _51.SearchTxsResult): unknown;
                    fromPartial(object: Partial<_51.SearchTxsResult>): _51.SearchTxsResult;
                };
                SearchBlocksResult: {
                    encode(message: _51.SearchBlocksResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _51.SearchBlocksResult;
                    fromJSON(object: any): _51.SearchBlocksResult;
                    toJSON(message: _51.SearchBlocksResult): unknown;
                    fromPartial(object: Partial<_51.SearchBlocksResult>): _51.SearchBlocksResult;
                };
            };
        }
        namespace node {
            const v1beta1: {
                LCDQueryClient: typeof _374.LCDQueryClient;
                ConfigRequest: {
                    encode(_: _53.ConfigRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _53.ConfigRequest;
                    fromJSON(_: any): _53.ConfigRequest;
                    toJSON(_: _53.ConfigRequest): unknown;
                    fromPartial(_: Partial<_53.ConfigRequest>): _53.ConfigRequest;
                };
                ConfigResponse: {
                    encode(message: _53.ConfigResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _53.ConfigResponse;
                    fromJSON(object: any): _53.ConfigResponse;
                    toJSON(message: _53.ConfigResponse): unknown;
                    fromPartial(object: Partial<_53.ConfigResponse>): _53.ConfigResponse;
                };
            };
        }
        namespace query {
            const v1beta1: {
                PageRequest: {
                    encode(message: _55.PageRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _55.PageRequest;
                    fromJSON(object: any): _55.PageRequest;
                    toJSON(message: _55.PageRequest): unknown;
                    fromPartial(object: Partial<_55.PageRequest>): _55.PageRequest;
                };
                PageResponse: {
                    encode(message: _55.PageResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _55.PageResponse;
                    fromJSON(object: any): _55.PageResponse;
                    toJSON(message: _55.PageResponse): unknown;
                    fromPartial(object: Partial<_55.PageResponse>): _55.PageResponse;
                };
            };
        }
        namespace reflection {
            const v1beta1: {
                ListAllInterfacesRequest: {
                    encode(_: _57.ListAllInterfacesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _57.ListAllInterfacesRequest;
                    fromJSON(_: any): _57.ListAllInterfacesRequest;
                    toJSON(_: _57.ListAllInterfacesRequest): unknown;
                    fromPartial(_: Partial<_57.ListAllInterfacesRequest>): _57.ListAllInterfacesRequest;
                };
                ListAllInterfacesResponse: {
                    encode(message: _57.ListAllInterfacesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _57.ListAllInterfacesResponse;
                    fromJSON(object: any): _57.ListAllInterfacesResponse;
                    toJSON(message: _57.ListAllInterfacesResponse): unknown;
                    fromPartial(object: Partial<_57.ListAllInterfacesResponse>): _57.ListAllInterfacesResponse;
                };
                ListImplementationsRequest: {
                    encode(message: _57.ListImplementationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _57.ListImplementationsRequest;
                    fromJSON(object: any): _57.ListImplementationsRequest;
                    toJSON(message: _57.ListImplementationsRequest): unknown;
                    fromPartial(object: Partial<_57.ListImplementationsRequest>): _57.ListImplementationsRequest;
                };
                ListImplementationsResponse: {
                    encode(message: _57.ListImplementationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _57.ListImplementationsResponse;
                    fromJSON(object: any): _57.ListImplementationsResponse;
                    toJSON(message: _57.ListImplementationsResponse): unknown;
                    fromPartial(object: Partial<_57.ListImplementationsResponse>): _57.ListImplementationsResponse;
                };
            };
            const v2alpha1: {
                AppDescriptor: {
                    encode(message: _59.AppDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _59.AppDescriptor;
                    fromJSON(object: any): _59.AppDescriptor;
                    toJSON(message: _59.AppDescriptor): unknown;
                    fromPartial(object: Partial<_59.AppDescriptor>): _59.AppDescriptor;
                };
                TxDescriptor: {
                    encode(message: _59.TxDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _59.TxDescriptor;
                    fromJSON(object: any): _59.TxDescriptor;
                    toJSON(message: _59.TxDescriptor): unknown;
                    fromPartial(object: Partial<_59.TxDescriptor>): _59.TxDescriptor;
                };
                AuthnDescriptor: {
                    encode(message: _59.AuthnDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _59.AuthnDescriptor;
                    fromJSON(object: any): _59.AuthnDescriptor;
                    toJSON(message: _59.AuthnDescriptor): unknown;
                    fromPartial(object: Partial<_59.AuthnDescriptor>): _59.AuthnDescriptor;
                };
                SigningModeDescriptor: {
                    encode(message: _59.SigningModeDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _59.SigningModeDescriptor;
                    fromJSON(object: any): _59.SigningModeDescriptor;
                    toJSON(message: _59.SigningModeDescriptor): unknown;
                    fromPartial(object: Partial<_59.SigningModeDescriptor>): _59.SigningModeDescriptor;
                };
                ChainDescriptor: {
                    encode(message: _59.ChainDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _59.ChainDescriptor;
                    fromJSON(object: any): _59.ChainDescriptor;
                    toJSON(message: _59.ChainDescriptor): unknown;
                    fromPartial(object: Partial<_59.ChainDescriptor>): _59.ChainDescriptor;
                };
                CodecDescriptor: {
                    encode(message: _59.CodecDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _59.CodecDescriptor;
                    fromJSON(object: any): _59.CodecDescriptor;
                    toJSON(message: _59.CodecDescriptor): unknown;
                    fromPartial(object: Partial<_59.CodecDescriptor>): _59.CodecDescriptor;
                };
                InterfaceDescriptor: {
                    encode(message: _59.InterfaceDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _59.InterfaceDescriptor;
                    fromJSON(object: any): _59.InterfaceDescriptor;
                    toJSON(message: _59.InterfaceDescriptor): unknown;
                    fromPartial(object: Partial<_59.InterfaceDescriptor>): _59.InterfaceDescriptor;
                };
                InterfaceImplementerDescriptor: {
                    encode(message: _59.InterfaceImplementerDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _59.InterfaceImplementerDescriptor;
                    fromJSON(object: any): _59.InterfaceImplementerDescriptor;
                    toJSON(message: _59.InterfaceImplementerDescriptor): unknown;
                    fromPartial(object: Partial<_59.InterfaceImplementerDescriptor>): _59.InterfaceImplementerDescriptor;
                };
                InterfaceAcceptingMessageDescriptor: {
                    encode(message: _59.InterfaceAcceptingMessageDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _59.InterfaceAcceptingMessageDescriptor;
                    fromJSON(object: any): _59.InterfaceAcceptingMessageDescriptor;
                    toJSON(message: _59.InterfaceAcceptingMessageDescriptor): unknown;
                    fromPartial(object: Partial<_59.InterfaceAcceptingMessageDescriptor>): _59.InterfaceAcceptingMessageDescriptor;
                };
                ConfigurationDescriptor: {
                    encode(message: _59.ConfigurationDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _59.ConfigurationDescriptor;
                    fromJSON(object: any): _59.ConfigurationDescriptor;
                    toJSON(message: _59.ConfigurationDescriptor): unknown;
                    fromPartial(object: Partial<_59.ConfigurationDescriptor>): _59.ConfigurationDescriptor;
                };
                MsgDescriptor: {
                    encode(message: _59.MsgDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _59.MsgDescriptor;
                    fromJSON(object: any): _59.MsgDescriptor;
                    toJSON(message: _59.MsgDescriptor): unknown;
                    fromPartial(object: Partial<_59.MsgDescriptor>): _59.MsgDescriptor;
                };
                GetAuthnDescriptorRequest: {
                    encode(_: _59.GetAuthnDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _59.GetAuthnDescriptorRequest;
                    fromJSON(_: any): _59.GetAuthnDescriptorRequest;
                    toJSON(_: _59.GetAuthnDescriptorRequest): unknown;
                    fromPartial(_: Partial<_59.GetAuthnDescriptorRequest>): _59.GetAuthnDescriptorRequest;
                };
                GetAuthnDescriptorResponse: {
                    encode(message: _59.GetAuthnDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _59.GetAuthnDescriptorResponse;
                    fromJSON(object: any): _59.GetAuthnDescriptorResponse;
                    toJSON(message: _59.GetAuthnDescriptorResponse): unknown;
                    fromPartial(object: Partial<_59.GetAuthnDescriptorResponse>): _59.GetAuthnDescriptorResponse;
                };
                GetChainDescriptorRequest: {
                    encode(_: _59.GetChainDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _59.GetChainDescriptorRequest;
                    fromJSON(_: any): _59.GetChainDescriptorRequest;
                    toJSON(_: _59.GetChainDescriptorRequest): unknown;
                    fromPartial(_: Partial<_59.GetChainDescriptorRequest>): _59.GetChainDescriptorRequest;
                };
                GetChainDescriptorResponse: {
                    encode(message: _59.GetChainDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _59.GetChainDescriptorResponse;
                    fromJSON(object: any): _59.GetChainDescriptorResponse;
                    toJSON(message: _59.GetChainDescriptorResponse): unknown;
                    fromPartial(object: Partial<_59.GetChainDescriptorResponse>): _59.GetChainDescriptorResponse;
                };
                GetCodecDescriptorRequest: {
                    encode(_: _59.GetCodecDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _59.GetCodecDescriptorRequest;
                    fromJSON(_: any): _59.GetCodecDescriptorRequest;
                    toJSON(_: _59.GetCodecDescriptorRequest): unknown;
                    fromPartial(_: Partial<_59.GetCodecDescriptorRequest>): _59.GetCodecDescriptorRequest;
                };
                GetCodecDescriptorResponse: {
                    encode(message: _59.GetCodecDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _59.GetCodecDescriptorResponse;
                    fromJSON(object: any): _59.GetCodecDescriptorResponse;
                    toJSON(message: _59.GetCodecDescriptorResponse): unknown;
                    fromPartial(object: Partial<_59.GetCodecDescriptorResponse>): _59.GetCodecDescriptorResponse;
                };
                GetConfigurationDescriptorRequest: {
                    encode(_: _59.GetConfigurationDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _59.GetConfigurationDescriptorRequest;
                    fromJSON(_: any): _59.GetConfigurationDescriptorRequest;
                    toJSON(_: _59.GetConfigurationDescriptorRequest): unknown;
                    fromPartial(_: Partial<_59.GetConfigurationDescriptorRequest>): _59.GetConfigurationDescriptorRequest;
                };
                GetConfigurationDescriptorResponse: {
                    encode(message: _59.GetConfigurationDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _59.GetConfigurationDescriptorResponse;
                    fromJSON(object: any): _59.GetConfigurationDescriptorResponse;
                    toJSON(message: _59.GetConfigurationDescriptorResponse): unknown;
                    fromPartial(object: Partial<_59.GetConfigurationDescriptorResponse>): _59.GetConfigurationDescriptorResponse;
                };
                GetQueryServicesDescriptorRequest: {
                    encode(_: _59.GetQueryServicesDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _59.GetQueryServicesDescriptorRequest;
                    fromJSON(_: any): _59.GetQueryServicesDescriptorRequest;
                    toJSON(_: _59.GetQueryServicesDescriptorRequest): unknown;
                    fromPartial(_: Partial<_59.GetQueryServicesDescriptorRequest>): _59.GetQueryServicesDescriptorRequest;
                };
                GetQueryServicesDescriptorResponse: {
                    encode(message: _59.GetQueryServicesDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _59.GetQueryServicesDescriptorResponse;
                    fromJSON(object: any): _59.GetQueryServicesDescriptorResponse;
                    toJSON(message: _59.GetQueryServicesDescriptorResponse): unknown;
                    fromPartial(object: Partial<_59.GetQueryServicesDescriptorResponse>): _59.GetQueryServicesDescriptorResponse;
                };
                GetTxDescriptorRequest: {
                    encode(_: _59.GetTxDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _59.GetTxDescriptorRequest;
                    fromJSON(_: any): _59.GetTxDescriptorRequest;
                    toJSON(_: _59.GetTxDescriptorRequest): unknown;
                    fromPartial(_: Partial<_59.GetTxDescriptorRequest>): _59.GetTxDescriptorRequest;
                };
                GetTxDescriptorResponse: {
                    encode(message: _59.GetTxDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _59.GetTxDescriptorResponse;
                    fromJSON(object: any): _59.GetTxDescriptorResponse;
                    toJSON(message: _59.GetTxDescriptorResponse): unknown;
                    fromPartial(object: Partial<_59.GetTxDescriptorResponse>): _59.GetTxDescriptorResponse;
                };
                QueryServicesDescriptor: {
                    encode(message: _59.QueryServicesDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _59.QueryServicesDescriptor;
                    fromJSON(object: any): _59.QueryServicesDescriptor;
                    toJSON(message: _59.QueryServicesDescriptor): unknown;
                    fromPartial(object: Partial<_59.QueryServicesDescriptor>): _59.QueryServicesDescriptor;
                };
                QueryServiceDescriptor: {
                    encode(message: _59.QueryServiceDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _59.QueryServiceDescriptor;
                    fromJSON(object: any): _59.QueryServiceDescriptor;
                    toJSON(message: _59.QueryServiceDescriptor): unknown;
                    fromPartial(object: Partial<_59.QueryServiceDescriptor>): _59.QueryServiceDescriptor;
                };
                QueryMethodDescriptor: {
                    encode(message: _59.QueryMethodDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _59.QueryMethodDescriptor;
                    fromJSON(object: any): _59.QueryMethodDescriptor;
                    toJSON(message: _59.QueryMethodDescriptor): unknown;
                    fromPartial(object: Partial<_59.QueryMethodDescriptor>): _59.QueryMethodDescriptor;
                };
            };
        }
        namespace tendermint {
            const v1beta1: {
                LCDQueryClient: typeof _375.LCDQueryClient;
                Block: {
                    encode(message: _63.Block, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _63.Block;
                    fromJSON(object: any): _63.Block;
                    toJSON(message: _63.Block): unknown;
                    fromPartial(object: Partial<_63.Block>): _63.Block;
                };
                Header: {
                    encode(message: _63.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _63.Header;
                    fromJSON(object: any): _63.Header;
                    toJSON(message: _63.Header): unknown;
                    fromPartial(object: Partial<_63.Header>): _63.Header;
                };
                GetValidatorSetByHeightRequest: {
                    encode(message: _62.GetValidatorSetByHeightRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _62.GetValidatorSetByHeightRequest;
                    fromJSON(object: any): _62.GetValidatorSetByHeightRequest;
                    toJSON(message: _62.GetValidatorSetByHeightRequest): unknown;
                    fromPartial(object: Partial<_62.GetValidatorSetByHeightRequest>): _62.GetValidatorSetByHeightRequest;
                };
                GetValidatorSetByHeightResponse: {
                    encode(message: _62.GetValidatorSetByHeightResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _62.GetValidatorSetByHeightResponse;
                    fromJSON(object: any): _62.GetValidatorSetByHeightResponse;
                    toJSON(message: _62.GetValidatorSetByHeightResponse): unknown;
                    fromPartial(object: Partial<_62.GetValidatorSetByHeightResponse>): _62.GetValidatorSetByHeightResponse;
                };
                GetLatestValidatorSetRequest: {
                    encode(message: _62.GetLatestValidatorSetRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _62.GetLatestValidatorSetRequest;
                    fromJSON(object: any): _62.GetLatestValidatorSetRequest;
                    toJSON(message: _62.GetLatestValidatorSetRequest): unknown;
                    fromPartial(object: Partial<_62.GetLatestValidatorSetRequest>): _62.GetLatestValidatorSetRequest;
                };
                GetLatestValidatorSetResponse: {
                    encode(message: _62.GetLatestValidatorSetResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _62.GetLatestValidatorSetResponse;
                    fromJSON(object: any): _62.GetLatestValidatorSetResponse;
                    toJSON(message: _62.GetLatestValidatorSetResponse): unknown;
                    fromPartial(object: Partial<_62.GetLatestValidatorSetResponse>): _62.GetLatestValidatorSetResponse;
                };
                Validator: {
                    encode(message: _62.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _62.Validator;
                    fromJSON(object: any): _62.Validator;
                    toJSON(message: _62.Validator): unknown;
                    fromPartial(object: Partial<_62.Validator>): _62.Validator;
                };
                GetBlockByHeightRequest: {
                    encode(message: _62.GetBlockByHeightRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _62.GetBlockByHeightRequest;
                    fromJSON(object: any): _62.GetBlockByHeightRequest;
                    toJSON(message: _62.GetBlockByHeightRequest): unknown;
                    fromPartial(object: Partial<_62.GetBlockByHeightRequest>): _62.GetBlockByHeightRequest;
                };
                GetBlockByHeightResponse: {
                    encode(message: _62.GetBlockByHeightResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _62.GetBlockByHeightResponse;
                    fromJSON(object: any): _62.GetBlockByHeightResponse;
                    toJSON(message: _62.GetBlockByHeightResponse): unknown;
                    fromPartial(object: Partial<_62.GetBlockByHeightResponse>): _62.GetBlockByHeightResponse;
                };
                GetLatestBlockRequest: {
                    encode(_: _62.GetLatestBlockRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _62.GetLatestBlockRequest;
                    fromJSON(_: any): _62.GetLatestBlockRequest;
                    toJSON(_: _62.GetLatestBlockRequest): unknown;
                    fromPartial(_: Partial<_62.GetLatestBlockRequest>): _62.GetLatestBlockRequest;
                };
                GetLatestBlockResponse: {
                    encode(message: _62.GetLatestBlockResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _62.GetLatestBlockResponse;
                    fromJSON(object: any): _62.GetLatestBlockResponse;
                    toJSON(message: _62.GetLatestBlockResponse): unknown;
                    fromPartial(object: Partial<_62.GetLatestBlockResponse>): _62.GetLatestBlockResponse;
                };
                GetSyncingRequest: {
                    encode(_: _62.GetSyncingRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _62.GetSyncingRequest;
                    fromJSON(_: any): _62.GetSyncingRequest;
                    toJSON(_: _62.GetSyncingRequest): unknown;
                    fromPartial(_: Partial<_62.GetSyncingRequest>): _62.GetSyncingRequest;
                };
                GetSyncingResponse: {
                    encode(message: _62.GetSyncingResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _62.GetSyncingResponse;
                    fromJSON(object: any): _62.GetSyncingResponse;
                    toJSON(message: _62.GetSyncingResponse): unknown;
                    fromPartial(object: Partial<_62.GetSyncingResponse>): _62.GetSyncingResponse;
                };
                GetNodeInfoRequest: {
                    encode(_: _62.GetNodeInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _62.GetNodeInfoRequest;
                    fromJSON(_: any): _62.GetNodeInfoRequest;
                    toJSON(_: _62.GetNodeInfoRequest): unknown;
                    fromPartial(_: Partial<_62.GetNodeInfoRequest>): _62.GetNodeInfoRequest;
                };
                GetNodeInfoResponse: {
                    encode(message: _62.GetNodeInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _62.GetNodeInfoResponse;
                    fromJSON(object: any): _62.GetNodeInfoResponse;
                    toJSON(message: _62.GetNodeInfoResponse): unknown;
                    fromPartial(object: Partial<_62.GetNodeInfoResponse>): _62.GetNodeInfoResponse;
                };
                VersionInfo: {
                    encode(message: _62.VersionInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _62.VersionInfo;
                    fromJSON(object: any): _62.VersionInfo;
                    toJSON(message: _62.VersionInfo): unknown;
                    fromPartial(object: Partial<_62.VersionInfo>): _62.VersionInfo;
                };
                Module: {
                    encode(message: _62.Module, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _62.Module;
                    fromJSON(object: any): _62.Module;
                    toJSON(message: _62.Module): unknown;
                    fromPartial(object: Partial<_62.Module>): _62.Module;
                };
                ABCIQueryRequest: {
                    encode(message: _62.ABCIQueryRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _62.ABCIQueryRequest;
                    fromJSON(object: any): _62.ABCIQueryRequest;
                    toJSON(message: _62.ABCIQueryRequest): unknown;
                    fromPartial(object: Partial<_62.ABCIQueryRequest>): _62.ABCIQueryRequest;
                };
                ABCIQueryResponse: {
                    encode(message: _62.ABCIQueryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _62.ABCIQueryResponse;
                    fromJSON(object: any): _62.ABCIQueryResponse;
                    toJSON(message: _62.ABCIQueryResponse): unknown;
                    fromPartial(object: Partial<_62.ABCIQueryResponse>): _62.ABCIQueryResponse;
                };
                ProofOp: {
                    encode(message: _62.ProofOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _62.ProofOp;
                    fromJSON(object: any): _62.ProofOp;
                    toJSON(message: _62.ProofOp): unknown;
                    fromPartial(object: Partial<_62.ProofOp>): _62.ProofOp;
                };
                ProofOps: {
                    encode(message: _62.ProofOps, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _62.ProofOps;
                    fromJSON(object: any): _62.ProofOps;
                    toJSON(message: _62.ProofOps): unknown;
                    fromPartial(object: Partial<_62.ProofOps>): _62.ProofOps;
                };
            };
        }
        const v1beta1: {
            Coin: {
                encode(message: _65.Coin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _65.Coin;
                fromJSON(object: any): _65.Coin;
                toJSON(message: _65.Coin): unknown;
                fromPartial(object: Partial<_65.Coin>): _65.Coin;
            };
            DecCoin: {
                encode(message: _65.DecCoin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _65.DecCoin;
                fromJSON(object: any): _65.DecCoin;
                toJSON(message: _65.DecCoin): unknown;
                fromPartial(object: Partial<_65.DecCoin>): _65.DecCoin;
            };
            IntProto: {
                encode(message: _65.IntProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _65.IntProto;
                fromJSON(object: any): _65.IntProto;
                toJSON(message: _65.IntProto): unknown;
                fromPartial(object: Partial<_65.IntProto>): _65.IntProto;
            };
            DecProto: {
                encode(message: _65.DecProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _65.DecProto;
                fromJSON(object: any): _65.DecProto;
                toJSON(message: _65.DecProto): unknown;
                fromPartial(object: Partial<_65.DecProto>): _65.DecProto;
            };
        };
    }
    namespace circuit {
        namespace module {
            const v1: {
                Module: {
                    encode(message: _67.Module, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _67.Module;
                    fromJSON(object: any): _67.Module;
                    toJSON(message: _67.Module): unknown;
                    fromPartial(object: Partial<_67.Module>): _67.Module;
                };
            };
        }
        const v1: {
            LCDQueryClient: typeof _376.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    authorizeCircuitBreaker(value: _72.MsgAuthorizeCircuitBreaker): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    tripCircuitBreaker(value: _72.MsgTripCircuitBreaker): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    resetCircuitBreaker(value: _72.MsgResetCircuitBreaker): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    authorizeCircuitBreaker(value: _72.MsgAuthorizeCircuitBreaker): {
                        typeUrl: string;
                        value: _72.MsgAuthorizeCircuitBreaker;
                    };
                    tripCircuitBreaker(value: _72.MsgTripCircuitBreaker): {
                        typeUrl: string;
                        value: _72.MsgTripCircuitBreaker;
                    };
                    resetCircuitBreaker(value: _72.MsgResetCircuitBreaker): {
                        typeUrl: string;
                        value: _72.MsgResetCircuitBreaker;
                    };
                };
                toJSON: {
                    authorizeCircuitBreaker(value: _72.MsgAuthorizeCircuitBreaker): {
                        typeUrl: string;
                        value: unknown;
                    };
                    tripCircuitBreaker(value: _72.MsgTripCircuitBreaker): {
                        typeUrl: string;
                        value: unknown;
                    };
                    resetCircuitBreaker(value: _72.MsgResetCircuitBreaker): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    authorizeCircuitBreaker(value: any): {
                        typeUrl: string;
                        value: _72.MsgAuthorizeCircuitBreaker;
                    };
                    tripCircuitBreaker(value: any): {
                        typeUrl: string;
                        value: _72.MsgTripCircuitBreaker;
                    };
                    resetCircuitBreaker(value: any): {
                        typeUrl: string;
                        value: _72.MsgResetCircuitBreaker;
                    };
                };
                fromPartial: {
                    authorizeCircuitBreaker(value: _72.MsgAuthorizeCircuitBreaker): {
                        typeUrl: string;
                        value: _72.MsgAuthorizeCircuitBreaker;
                    };
                    tripCircuitBreaker(value: _72.MsgTripCircuitBreaker): {
                        typeUrl: string;
                        value: _72.MsgTripCircuitBreaker;
                    };
                    resetCircuitBreaker(value: _72.MsgResetCircuitBreaker): {
                        typeUrl: string;
                        value: _72.MsgResetCircuitBreaker;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.circuit.v1.MsgAuthorizeCircuitBreaker": {
                    aminoType: string;
                    toAmino: ({ granter, grantee, permissions }: _72.MsgAuthorizeCircuitBreaker) => {
                        granter: string;
                        grantee: string;
                        permissions: {
                            level: number;
                            limit_type_urls: string[];
                        };
                    };
                    fromAmino: ({ granter, grantee, permissions }: {
                        granter: string;
                        grantee: string;
                        permissions: {
                            level: number;
                            limit_type_urls: string[];
                        };
                    }) => _72.MsgAuthorizeCircuitBreaker;
                };
                "/cosmos.circuit.v1.MsgTripCircuitBreaker": {
                    aminoType: string;
                    toAmino: ({ authority, msgTypeUrls }: _72.MsgTripCircuitBreaker) => {
                        authority: string;
                        msg_type_urls: string[];
                    };
                    fromAmino: ({ authority, msg_type_urls }: {
                        authority: string;
                        msg_type_urls: string[];
                    }) => _72.MsgTripCircuitBreaker;
                };
                "/cosmos.circuit.v1.MsgResetCircuitBreaker": {
                    aminoType: string;
                    toAmino: ({ authority, msgTypeUrls }: _72.MsgResetCircuitBreaker) => {
                        authority: string;
                        msg_type_urls: string[];
                    };
                    fromAmino: ({ authority, msg_type_urls }: {
                        authority: string;
                        msg_type_urls: string[];
                    }) => _72.MsgResetCircuitBreaker;
                };
            };
            permissions_LevelFromJSON(object: any): _73.Permissions_Level;
            permissions_LevelToJSON(object: _73.Permissions_Level): string;
            Permissions_Level: typeof _73.Permissions_Level;
            Permissions_LevelSDKType: typeof _73.Permissions_LevelSDKType;
            Permissions: {
                encode(message: _73.Permissions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _73.Permissions;
                fromJSON(object: any): _73.Permissions;
                toJSON(message: _73.Permissions): unknown;
                fromPartial(object: Partial<_73.Permissions>): _73.Permissions;
            };
            GenesisAccountPermissions: {
                encode(message: _73.GenesisAccountPermissions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _73.GenesisAccountPermissions;
                fromJSON(object: any): _73.GenesisAccountPermissions;
                toJSON(message: _73.GenesisAccountPermissions): unknown;
                fromPartial(object: Partial<_73.GenesisAccountPermissions>): _73.GenesisAccountPermissions;
            };
            GenesisState: {
                encode(message: _73.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _73.GenesisState;
                fromJSON(object: any): _73.GenesisState;
                toJSON(message: _73.GenesisState): unknown;
                fromPartial(object: Partial<_73.GenesisState>): _73.GenesisState;
            };
            MsgAuthorizeCircuitBreaker: {
                encode(message: _72.MsgAuthorizeCircuitBreaker, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _72.MsgAuthorizeCircuitBreaker;
                fromJSON(object: any): _72.MsgAuthorizeCircuitBreaker;
                toJSON(message: _72.MsgAuthorizeCircuitBreaker): unknown;
                fromPartial(object: Partial<_72.MsgAuthorizeCircuitBreaker>): _72.MsgAuthorizeCircuitBreaker;
            };
            MsgAuthorizeCircuitBreakerResponse: {
                encode(message: _72.MsgAuthorizeCircuitBreakerResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _72.MsgAuthorizeCircuitBreakerResponse;
                fromJSON(object: any): _72.MsgAuthorizeCircuitBreakerResponse;
                toJSON(message: _72.MsgAuthorizeCircuitBreakerResponse): unknown;
                fromPartial(object: Partial<_72.MsgAuthorizeCircuitBreakerResponse>): _72.MsgAuthorizeCircuitBreakerResponse;
            };
            MsgTripCircuitBreaker: {
                encode(message: _72.MsgTripCircuitBreaker, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _72.MsgTripCircuitBreaker;
                fromJSON(object: any): _72.MsgTripCircuitBreaker;
                toJSON(message: _72.MsgTripCircuitBreaker): unknown;
                fromPartial(object: Partial<_72.MsgTripCircuitBreaker>): _72.MsgTripCircuitBreaker;
            };
            MsgTripCircuitBreakerResponse: {
                encode(message: _72.MsgTripCircuitBreakerResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _72.MsgTripCircuitBreakerResponse;
                fromJSON(object: any): _72.MsgTripCircuitBreakerResponse;
                toJSON(message: _72.MsgTripCircuitBreakerResponse): unknown;
                fromPartial(object: Partial<_72.MsgTripCircuitBreakerResponse>): _72.MsgTripCircuitBreakerResponse;
            };
            MsgResetCircuitBreaker: {
                encode(message: _72.MsgResetCircuitBreaker, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _72.MsgResetCircuitBreaker;
                fromJSON(object: any): _72.MsgResetCircuitBreaker;
                toJSON(message: _72.MsgResetCircuitBreaker): unknown;
                fromPartial(object: Partial<_72.MsgResetCircuitBreaker>): _72.MsgResetCircuitBreaker;
            };
            MsgResetCircuitBreakerResponse: {
                encode(message: _72.MsgResetCircuitBreakerResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _72.MsgResetCircuitBreakerResponse;
                fromJSON(object: any): _72.MsgResetCircuitBreakerResponse;
                toJSON(message: _72.MsgResetCircuitBreakerResponse): unknown;
                fromPartial(object: Partial<_72.MsgResetCircuitBreakerResponse>): _72.MsgResetCircuitBreakerResponse;
            };
            QueryAccountRequest: {
                encode(message: _71.QueryAccountRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _71.QueryAccountRequest;
                fromJSON(object: any): _71.QueryAccountRequest;
                toJSON(message: _71.QueryAccountRequest): unknown;
                fromPartial(object: Partial<_71.QueryAccountRequest>): _71.QueryAccountRequest;
            };
            AccountResponse: {
                encode(message: _71.AccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _71.AccountResponse;
                fromJSON(object: any): _71.AccountResponse;
                toJSON(message: _71.AccountResponse): unknown;
                fromPartial(object: Partial<_71.AccountResponse>): _71.AccountResponse;
            };
            QueryAccountsRequest: {
                encode(message: _71.QueryAccountsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _71.QueryAccountsRequest;
                fromJSON(object: any): _71.QueryAccountsRequest;
                toJSON(message: _71.QueryAccountsRequest): unknown;
                fromPartial(object: Partial<_71.QueryAccountsRequest>): _71.QueryAccountsRequest;
            };
            AccountsResponse: {
                encode(message: _71.AccountsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _71.AccountsResponse;
                fromJSON(object: any): _71.AccountsResponse;
                toJSON(message: _71.AccountsResponse): unknown;
                fromPartial(object: Partial<_71.AccountsResponse>): _71.AccountsResponse;
            };
            QueryDisabledListRequest: {
                encode(_: _71.QueryDisabledListRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _71.QueryDisabledListRequest;
                fromJSON(_: any): _71.QueryDisabledListRequest;
                toJSON(_: _71.QueryDisabledListRequest): unknown;
                fromPartial(_: Partial<_71.QueryDisabledListRequest>): _71.QueryDisabledListRequest;
            };
            DisabledListResponse: {
                encode(message: _71.DisabledListResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _71.DisabledListResponse;
                fromJSON(object: any): _71.DisabledListResponse;
                toJSON(message: _71.DisabledListResponse): unknown;
                fromPartial(object: Partial<_71.DisabledListResponse>): _71.DisabledListResponse;
            };
        };
    }
    namespace consensus {
        namespace module {
            const v1: {
                Module: {
                    encode(message: _75.Module, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _75.Module;
                    fromJSON(object: any): _75.Module;
                    toJSON(message: _75.Module): unknown;
                    fromPartial(object: Partial<_75.Module>): _75.Module;
                };
            };
        }
        const v1: {
            LCDQueryClient: typeof _377.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    updateParams(value: _79.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    updateParams(value: _79.MsgUpdateParams): {
                        typeUrl: string;
                        value: _79.MsgUpdateParams;
                    };
                };
                toJSON: {
                    updateParams(value: _79.MsgUpdateParams): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    updateParams(value: any): {
                        typeUrl: string;
                        value: _79.MsgUpdateParams;
                    };
                };
                fromPartial: {
                    updateParams(value: _79.MsgUpdateParams): {
                        typeUrl: string;
                        value: _79.MsgUpdateParams;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.consensus.v1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: ({ authority, block, evidence, validator }: _79.MsgUpdateParams) => {
                        authority: string;
                        block: {
                            max_bytes: string;
                            max_gas: string;
                        };
                        evidence: {
                            max_age_num_blocks: string;
                            max_age_duration: {
                                seconds: string;
                                nanos: number;
                            };
                            max_bytes: string;
                        };
                        validator: {
                            pub_key_types: string[];
                        };
                    };
                    fromAmino: ({ authority, block, evidence, validator }: {
                        authority: string;
                        block: {
                            max_bytes: string;
                            max_gas: string;
                        };
                        evidence: {
                            max_age_num_blocks: string;
                            max_age_duration: {
                                seconds: string;
                                nanos: number;
                            };
                            max_bytes: string;
                        };
                        validator: {
                            pub_key_types: string[];
                        };
                    }) => _79.MsgUpdateParams;
                };
            };
            MsgUpdateParams: {
                encode(message: _79.MsgUpdateParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _79.MsgUpdateParams;
                fromJSON(object: any): _79.MsgUpdateParams;
                toJSON(message: _79.MsgUpdateParams): unknown;
                fromPartial(object: Partial<_79.MsgUpdateParams>): _79.MsgUpdateParams;
            };
            MsgUpdateParamsResponse: {
                encode(_: _79.MsgUpdateParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _79.MsgUpdateParamsResponse;
                fromJSON(_: any): _79.MsgUpdateParamsResponse;
                toJSON(_: _79.MsgUpdateParamsResponse): unknown;
                fromPartial(_: Partial<_79.MsgUpdateParamsResponse>): _79.MsgUpdateParamsResponse;
            };
            QueryParamsRequest: {
                encode(_: _78.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _78.QueryParamsRequest;
                fromJSON(_: any): _78.QueryParamsRequest;
                toJSON(_: _78.QueryParamsRequest): unknown;
                fromPartial(_: Partial<_78.QueryParamsRequest>): _78.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _78.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _78.QueryParamsResponse;
                fromJSON(object: any): _78.QueryParamsResponse;
                toJSON(message: _78.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_78.QueryParamsResponse>): _78.QueryParamsResponse;
            };
        };
    }
    namespace crisis {
        namespace module {
            const v1: {
                Module: {
                    encode(message: _81.Module, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _81.Module;
                    fromJSON(object: any): _81.Module;
                    toJSON(message: _81.Module): unknown;
                    fromPartial(object: Partial<_81.Module>): _81.Module;
                };
            };
        }
        const v1beta1: {
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    verifyInvariant(value: _85.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateParams(value: _85.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    verifyInvariant(value: _85.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: _85.MsgVerifyInvariant;
                    };
                    updateParams(value: _85.MsgUpdateParams): {
                        typeUrl: string;
                        value: _85.MsgUpdateParams;
                    };
                };
                toJSON: {
                    verifyInvariant(value: _85.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateParams(value: _85.MsgUpdateParams): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    verifyInvariant(value: any): {
                        typeUrl: string;
                        value: _85.MsgVerifyInvariant;
                    };
                    updateParams(value: any): {
                        typeUrl: string;
                        value: _85.MsgUpdateParams;
                    };
                };
                fromPartial: {
                    verifyInvariant(value: _85.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: _85.MsgVerifyInvariant;
                    };
                    updateParams(value: _85.MsgUpdateParams): {
                        typeUrl: string;
                        value: _85.MsgUpdateParams;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.crisis.v1beta1.MsgVerifyInvariant": {
                    aminoType: string;
                    toAmino: ({ sender, invariantModuleName, invariantRoute }: _85.MsgVerifyInvariant) => {
                        sender: string;
                        invariant_module_name: string;
                        invariant_route: string;
                    };
                    fromAmino: ({ sender, invariant_module_name, invariant_route }: {
                        sender: string;
                        invariant_module_name: string;
                        invariant_route: string;
                    }) => _85.MsgVerifyInvariant;
                };
                "/cosmos.crisis.v1beta1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: ({ authority, constantFee }: _85.MsgUpdateParams) => {
                        authority: string;
                        constant_fee: {
                            denom: string;
                            amount: string;
                        };
                    };
                    fromAmino: ({ authority, constant_fee }: {
                        authority: string;
                        constant_fee: {
                            denom: string;
                            amount: string;
                        };
                    }) => _85.MsgUpdateParams;
                };
            };
            MsgVerifyInvariant: {
                encode(message: _85.MsgVerifyInvariant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _85.MsgVerifyInvariant;
                fromJSON(object: any): _85.MsgVerifyInvariant;
                toJSON(message: _85.MsgVerifyInvariant): unknown;
                fromPartial(object: Partial<_85.MsgVerifyInvariant>): _85.MsgVerifyInvariant;
            };
            MsgVerifyInvariantResponse: {
                encode(_: _85.MsgVerifyInvariantResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _85.MsgVerifyInvariantResponse;
                fromJSON(_: any): _85.MsgVerifyInvariantResponse;
                toJSON(_: _85.MsgVerifyInvariantResponse): unknown;
                fromPartial(_: Partial<_85.MsgVerifyInvariantResponse>): _85.MsgVerifyInvariantResponse;
            };
            MsgUpdateParams: {
                encode(message: _85.MsgUpdateParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _85.MsgUpdateParams;
                fromJSON(object: any): _85.MsgUpdateParams;
                toJSON(message: _85.MsgUpdateParams): unknown;
                fromPartial(object: Partial<_85.MsgUpdateParams>): _85.MsgUpdateParams;
            };
            MsgUpdateParamsResponse: {
                encode(_: _85.MsgUpdateParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _85.MsgUpdateParamsResponse;
                fromJSON(_: any): _85.MsgUpdateParamsResponse;
                toJSON(_: _85.MsgUpdateParamsResponse): unknown;
                fromPartial(_: Partial<_85.MsgUpdateParamsResponse>): _85.MsgUpdateParamsResponse;
            };
            GenesisState: {
                encode(message: _84.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _84.GenesisState;
                fromJSON(object: any): _84.GenesisState;
                toJSON(message: _84.GenesisState): unknown;
                fromPartial(object: Partial<_84.GenesisState>): _84.GenesisState;
            };
        };
    }
    namespace crypto {
        const ed25519: {
            PubKey: {
                encode(message: _87.PubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _87.PubKey;
                fromJSON(object: any): _87.PubKey;
                toJSON(message: _87.PubKey): unknown;
                fromPartial(object: Partial<_87.PubKey>): _87.PubKey;
            };
            PrivKey: {
                encode(message: _87.PrivKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _87.PrivKey;
                fromJSON(object: any): _87.PrivKey;
                toJSON(message: _87.PrivKey): unknown;
                fromPartial(object: Partial<_87.PrivKey>): _87.PrivKey;
            };
        };
        namespace hd {
            const v1: {
                BIP44Params: {
                    encode(message: _89.BIP44Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _89.BIP44Params;
                    fromJSON(object: any): _89.BIP44Params;
                    toJSON(message: _89.BIP44Params): unknown;
                    fromPartial(object: Partial<_89.BIP44Params>): _89.BIP44Params;
                };
            };
        }
        namespace keyring {
            const v1: {
                Record: {
                    encode(message: _91.Record, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _91.Record;
                    fromJSON(object: any): _91.Record;
                    toJSON(message: _91.Record): unknown;
                    fromPartial(object: Partial<_91.Record>): _91.Record;
                };
                Record_Local: {
                    encode(message: _91.Record_Local, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _91.Record_Local;
                    fromJSON(object: any): _91.Record_Local;
                    toJSON(message: _91.Record_Local): unknown;
                    fromPartial(object: Partial<_91.Record_Local>): _91.Record_Local;
                };
                Record_Ledger: {
                    encode(message: _91.Record_Ledger, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _91.Record_Ledger;
                    fromJSON(object: any): _91.Record_Ledger;
                    toJSON(message: _91.Record_Ledger): unknown;
                    fromPartial(object: Partial<_91.Record_Ledger>): _91.Record_Ledger;
                };
                Record_Multi: {
                    encode(_: _91.Record_Multi, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _91.Record_Multi;
                    fromJSON(_: any): _91.Record_Multi;
                    toJSON(_: _91.Record_Multi): unknown;
                    fromPartial(_: Partial<_91.Record_Multi>): _91.Record_Multi;
                };
                Record_Offline: {
                    encode(_: _91.Record_Offline, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _91.Record_Offline;
                    fromJSON(_: any): _91.Record_Offline;
                    toJSON(_: _91.Record_Offline): unknown;
                    fromPartial(_: Partial<_91.Record_Offline>): _91.Record_Offline;
                };
            };
        }
        const multisig: {
            LegacyAminoPubKey: {
                encode(message: _93.LegacyAminoPubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _93.LegacyAminoPubKey;
                fromJSON(object: any): _93.LegacyAminoPubKey;
                toJSON(message: _93.LegacyAminoPubKey): unknown;
                fromPartial(object: Partial<_93.LegacyAminoPubKey>): _93.LegacyAminoPubKey;
            };
        };
        const secp256k1: {
            PubKey: {
                encode(message: _95.PubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _95.PubKey;
                fromJSON(object: any): _95.PubKey;
                toJSON(message: _95.PubKey): unknown;
                fromPartial(object: Partial<_95.PubKey>): _95.PubKey;
            };
            PrivKey: {
                encode(message: _95.PrivKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _95.PrivKey;
                fromJSON(object: any): _95.PrivKey;
                toJSON(message: _95.PrivKey): unknown;
                fromPartial(object: Partial<_95.PrivKey>): _95.PrivKey;
            };
        };
        const secp256r1: {
            PubKey: {
                encode(message: _97.PubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _97.PubKey;
                fromJSON(object: any): _97.PubKey;
                toJSON(message: _97.PubKey): unknown;
                fromPartial(object: Partial<_97.PubKey>): _97.PubKey;
            };
            PrivKey: {
                encode(message: _97.PrivKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _97.PrivKey;
                fromJSON(object: any): _97.PrivKey;
                toJSON(message: _97.PrivKey): unknown;
                fromPartial(object: Partial<_97.PrivKey>): _97.PrivKey;
            };
        };
    }
    namespace distribution {
        namespace module {
            const v1: {
                Module: {
                    encode(message: _99.Module, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _99.Module;
                    fromJSON(object: any): _99.Module;
                    toJSON(message: _99.Module): unknown;
                    fromPartial(object: Partial<_99.Module>): _99.Module;
                };
            };
        }
        const v1beta1: {
            LCDQueryClient: typeof _391.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    setWithdrawAddress(value: _107.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawDelegatorReward(value: _107.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawValidatorCommission(value: _107.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    fundCommunityPool(value: _107.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateParams(value: _107.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    communityPoolSpend(value: _107.MsgCommunityPoolSpend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    depositValidatorRewardsPool(value: _107.MsgDepositValidatorRewardsPool): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    setWithdrawAddress(value: _107.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: _107.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: _107.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: _107.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: _107.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: _107.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: _107.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: _107.MsgFundCommunityPool;
                    };
                    updateParams(value: _107.MsgUpdateParams): {
                        typeUrl: string;
                        value: _107.MsgUpdateParams;
                    };
                    communityPoolSpend(value: _107.MsgCommunityPoolSpend): {
                        typeUrl: string;
                        value: _107.MsgCommunityPoolSpend;
                    };
                    depositValidatorRewardsPool(value: _107.MsgDepositValidatorRewardsPool): {
                        typeUrl: string;
                        value: _107.MsgDepositValidatorRewardsPool;
                    };
                };
                toJSON: {
                    setWithdrawAddress(value: _107.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: unknown;
                    };
                    withdrawDelegatorReward(value: _107.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: unknown;
                    };
                    withdrawValidatorCommission(value: _107.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: unknown;
                    };
                    fundCommunityPool(value: _107.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateParams(value: _107.MsgUpdateParams): {
                        typeUrl: string;
                        value: unknown;
                    };
                    communityPoolSpend(value: _107.MsgCommunityPoolSpend): {
                        typeUrl: string;
                        value: unknown;
                    };
                    depositValidatorRewardsPool(value: _107.MsgDepositValidatorRewardsPool): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    setWithdrawAddress(value: any): {
                        typeUrl: string;
                        value: _107.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: any): {
                        typeUrl: string;
                        value: _107.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: any): {
                        typeUrl: string;
                        value: _107.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: any): {
                        typeUrl: string;
                        value: _107.MsgFundCommunityPool;
                    };
                    updateParams(value: any): {
                        typeUrl: string;
                        value: _107.MsgUpdateParams;
                    };
                    communityPoolSpend(value: any): {
                        typeUrl: string;
                        value: _107.MsgCommunityPoolSpend;
                    };
                    depositValidatorRewardsPool(value: any): {
                        typeUrl: string;
                        value: _107.MsgDepositValidatorRewardsPool;
                    };
                };
                fromPartial: {
                    setWithdrawAddress(value: _107.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: _107.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: _107.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: _107.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: _107.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: _107.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: _107.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: _107.MsgFundCommunityPool;
                    };
                    updateParams(value: _107.MsgUpdateParams): {
                        typeUrl: string;
                        value: _107.MsgUpdateParams;
                    };
                    communityPoolSpend(value: _107.MsgCommunityPoolSpend): {
                        typeUrl: string;
                        value: _107.MsgCommunityPoolSpend;
                    };
                    depositValidatorRewardsPool(value: _107.MsgDepositValidatorRewardsPool): {
                        typeUrl: string;
                        value: _107.MsgDepositValidatorRewardsPool;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.distribution.v1beta1.MsgSetWithdrawAddress": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, withdrawAddress }: _107.MsgSetWithdrawAddress) => {
                        delegator_address: string;
                        withdraw_address: string;
                    };
                    fromAmino: ({ delegator_address, withdraw_address }: {
                        delegator_address: string;
                        withdraw_address: string;
                    }) => _107.MsgSetWithdrawAddress;
                };
                "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, validatorAddress }: _107.MsgWithdrawDelegatorReward) => {
                        delegator_address: string;
                        validator_address: string;
                    };
                    fromAmino: ({ delegator_address, validator_address }: {
                        delegator_address: string;
                        validator_address: string;
                    }) => _107.MsgWithdrawDelegatorReward;
                };
                "/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission": {
                    aminoType: string;
                    toAmino: ({ validatorAddress }: _107.MsgWithdrawValidatorCommission) => {
                        validator_address: string;
                    };
                    fromAmino: ({ validator_address }: {
                        validator_address: string;
                    }) => _107.MsgWithdrawValidatorCommission;
                };
                "/cosmos.distribution.v1beta1.MsgFundCommunityPool": {
                    aminoType: string;
                    toAmino: ({ amount, depositor }: _107.MsgFundCommunityPool) => {
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                        depositor: string;
                    };
                    fromAmino: ({ amount, depositor }: {
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                        depositor: string;
                    }) => _107.MsgFundCommunityPool;
                };
                "/cosmos.distribution.v1beta1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: ({ authority, params }: _107.MsgUpdateParams) => {
                        authority: string;
                        params: {
                            community_tax: string;
                            base_proposer_reward: string;
                            bonus_proposer_reward: string;
                            withdraw_addr_enabled: boolean;
                        };
                    };
                    fromAmino: ({ authority, params }: {
                        authority: string;
                        params: {
                            community_tax: string;
                            base_proposer_reward: string;
                            bonus_proposer_reward: string;
                            withdraw_addr_enabled: boolean;
                        };
                    }) => _107.MsgUpdateParams;
                };
                "/cosmos.distribution.v1beta1.MsgCommunityPoolSpend": {
                    aminoType: string;
                    toAmino: ({ authority, recipient, amount }: _107.MsgCommunityPoolSpend) => {
                        authority: string;
                        recipient: string;
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                    };
                    fromAmino: ({ authority, recipient, amount }: {
                        authority: string;
                        recipient: string;
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                    }) => _107.MsgCommunityPoolSpend;
                };
                "/cosmos.distribution.v1beta1.MsgDepositValidatorRewardsPool": {
                    aminoType: string;
                    toAmino: ({ depositor, validatorAddress, amount }: _107.MsgDepositValidatorRewardsPool) => {
                        depositor: string;
                        validator_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                    };
                    fromAmino: ({ depositor, validator_address, amount }: {
                        depositor: string;
                        validator_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                    }) => _107.MsgDepositValidatorRewardsPool;
                };
            };
            MsgSetWithdrawAddress: {
                encode(message: _107.MsgSetWithdrawAddress, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _107.MsgSetWithdrawAddress;
                fromJSON(object: any): _107.MsgSetWithdrawAddress;
                toJSON(message: _107.MsgSetWithdrawAddress): unknown;
                fromPartial(object: Partial<_107.MsgSetWithdrawAddress>): _107.MsgSetWithdrawAddress;
            };
            MsgSetWithdrawAddressResponse: {
                encode(_: _107.MsgSetWithdrawAddressResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _107.MsgSetWithdrawAddressResponse;
                fromJSON(_: any): _107.MsgSetWithdrawAddressResponse;
                toJSON(_: _107.MsgSetWithdrawAddressResponse): unknown;
                fromPartial(_: Partial<_107.MsgSetWithdrawAddressResponse>): _107.MsgSetWithdrawAddressResponse;
            };
            MsgWithdrawDelegatorReward: {
                encode(message: _107.MsgWithdrawDelegatorReward, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _107.MsgWithdrawDelegatorReward;
                fromJSON(object: any): _107.MsgWithdrawDelegatorReward;
                toJSON(message: _107.MsgWithdrawDelegatorReward): unknown;
                fromPartial(object: Partial<_107.MsgWithdrawDelegatorReward>): _107.MsgWithdrawDelegatorReward;
            };
            MsgWithdrawDelegatorRewardResponse: {
                encode(message: _107.MsgWithdrawDelegatorRewardResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _107.MsgWithdrawDelegatorRewardResponse;
                fromJSON(object: any): _107.MsgWithdrawDelegatorRewardResponse;
                toJSON(message: _107.MsgWithdrawDelegatorRewardResponse): unknown;
                fromPartial(object: Partial<_107.MsgWithdrawDelegatorRewardResponse>): _107.MsgWithdrawDelegatorRewardResponse;
            };
            MsgWithdrawValidatorCommission: {
                encode(message: _107.MsgWithdrawValidatorCommission, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _107.MsgWithdrawValidatorCommission;
                fromJSON(object: any): _107.MsgWithdrawValidatorCommission;
                toJSON(message: _107.MsgWithdrawValidatorCommission): unknown;
                fromPartial(object: Partial<_107.MsgWithdrawValidatorCommission>): _107.MsgWithdrawValidatorCommission;
            };
            MsgWithdrawValidatorCommissionResponse: {
                encode(message: _107.MsgWithdrawValidatorCommissionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _107.MsgWithdrawValidatorCommissionResponse;
                fromJSON(object: any): _107.MsgWithdrawValidatorCommissionResponse;
                toJSON(message: _107.MsgWithdrawValidatorCommissionResponse): unknown;
                fromPartial(object: Partial<_107.MsgWithdrawValidatorCommissionResponse>): _107.MsgWithdrawValidatorCommissionResponse;
            };
            MsgFundCommunityPool: {
                encode(message: _107.MsgFundCommunityPool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _107.MsgFundCommunityPool;
                fromJSON(object: any): _107.MsgFundCommunityPool;
                toJSON(message: _107.MsgFundCommunityPool): unknown;
                fromPartial(object: Partial<_107.MsgFundCommunityPool>): _107.MsgFundCommunityPool;
            };
            MsgFundCommunityPoolResponse: {
                encode(_: _107.MsgFundCommunityPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _107.MsgFundCommunityPoolResponse;
                fromJSON(_: any): _107.MsgFundCommunityPoolResponse;
                toJSON(_: _107.MsgFundCommunityPoolResponse): unknown;
                fromPartial(_: Partial<_107.MsgFundCommunityPoolResponse>): _107.MsgFundCommunityPoolResponse;
            };
            MsgUpdateParams: {
                encode(message: _107.MsgUpdateParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _107.MsgUpdateParams;
                fromJSON(object: any): _107.MsgUpdateParams;
                toJSON(message: _107.MsgUpdateParams): unknown;
                fromPartial(object: Partial<_107.MsgUpdateParams>): _107.MsgUpdateParams;
            };
            MsgUpdateParamsResponse: {
                encode(_: _107.MsgUpdateParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _107.MsgUpdateParamsResponse;
                fromJSON(_: any): _107.MsgUpdateParamsResponse;
                toJSON(_: _107.MsgUpdateParamsResponse): unknown;
                fromPartial(_: Partial<_107.MsgUpdateParamsResponse>): _107.MsgUpdateParamsResponse;
            };
            MsgCommunityPoolSpend: {
                encode(message: _107.MsgCommunityPoolSpend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _107.MsgCommunityPoolSpend;
                fromJSON(object: any): _107.MsgCommunityPoolSpend;
                toJSON(message: _107.MsgCommunityPoolSpend): unknown;
                fromPartial(object: Partial<_107.MsgCommunityPoolSpend>): _107.MsgCommunityPoolSpend;
            };
            MsgCommunityPoolSpendResponse: {
                encode(_: _107.MsgCommunityPoolSpendResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _107.MsgCommunityPoolSpendResponse;
                fromJSON(_: any): _107.MsgCommunityPoolSpendResponse;
                toJSON(_: _107.MsgCommunityPoolSpendResponse): unknown;
                fromPartial(_: Partial<_107.MsgCommunityPoolSpendResponse>): _107.MsgCommunityPoolSpendResponse;
            };
            MsgDepositValidatorRewardsPool: {
                encode(message: _107.MsgDepositValidatorRewardsPool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _107.MsgDepositValidatorRewardsPool;
                fromJSON(object: any): _107.MsgDepositValidatorRewardsPool;
                toJSON(message: _107.MsgDepositValidatorRewardsPool): unknown;
                fromPartial(object: Partial<_107.MsgDepositValidatorRewardsPool>): _107.MsgDepositValidatorRewardsPool;
            };
            MsgDepositValidatorRewardsPoolResponse: {
                encode(_: _107.MsgDepositValidatorRewardsPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _107.MsgDepositValidatorRewardsPoolResponse;
                fromJSON(_: any): _107.MsgDepositValidatorRewardsPoolResponse;
                toJSON(_: _107.MsgDepositValidatorRewardsPoolResponse): unknown;
                fromPartial(_: Partial<_107.MsgDepositValidatorRewardsPoolResponse>): _107.MsgDepositValidatorRewardsPoolResponse;
            };
            QueryParamsRequest: {
                encode(_: _106.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _106.QueryParamsRequest;
                fromJSON(_: any): _106.QueryParamsRequest;
                toJSON(_: _106.QueryParamsRequest): unknown;
                fromPartial(_: Partial<_106.QueryParamsRequest>): _106.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _106.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _106.QueryParamsResponse;
                fromJSON(object: any): _106.QueryParamsResponse;
                toJSON(message: _106.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_106.QueryParamsResponse>): _106.QueryParamsResponse;
            };
            QueryValidatorDistributionInfoRequest: {
                encode(message: _106.QueryValidatorDistributionInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _106.QueryValidatorDistributionInfoRequest;
                fromJSON(object: any): _106.QueryValidatorDistributionInfoRequest;
                toJSON(message: _106.QueryValidatorDistributionInfoRequest): unknown;
                fromPartial(object: Partial<_106.QueryValidatorDistributionInfoRequest>): _106.QueryValidatorDistributionInfoRequest;
            };
            QueryValidatorDistributionInfoResponse: {
                encode(message: _106.QueryValidatorDistributionInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _106.QueryValidatorDistributionInfoResponse;
                fromJSON(object: any): _106.QueryValidatorDistributionInfoResponse;
                toJSON(message: _106.QueryValidatorDistributionInfoResponse): unknown;
                fromPartial(object: Partial<_106.QueryValidatorDistributionInfoResponse>): _106.QueryValidatorDistributionInfoResponse;
            };
            QueryValidatorOutstandingRewardsRequest: {
                encode(message: _106.QueryValidatorOutstandingRewardsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _106.QueryValidatorOutstandingRewardsRequest;
                fromJSON(object: any): _106.QueryValidatorOutstandingRewardsRequest;
                toJSON(message: _106.QueryValidatorOutstandingRewardsRequest): unknown;
                fromPartial(object: Partial<_106.QueryValidatorOutstandingRewardsRequest>): _106.QueryValidatorOutstandingRewardsRequest;
            };
            QueryValidatorOutstandingRewardsResponse: {
                encode(message: _106.QueryValidatorOutstandingRewardsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _106.QueryValidatorOutstandingRewardsResponse;
                fromJSON(object: any): _106.QueryValidatorOutstandingRewardsResponse;
                toJSON(message: _106.QueryValidatorOutstandingRewardsResponse): unknown;
                fromPartial(object: Partial<_106.QueryValidatorOutstandingRewardsResponse>): _106.QueryValidatorOutstandingRewardsResponse;
            };
            QueryValidatorCommissionRequest: {
                encode(message: _106.QueryValidatorCommissionRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _106.QueryValidatorCommissionRequest;
                fromJSON(object: any): _106.QueryValidatorCommissionRequest;
                toJSON(message: _106.QueryValidatorCommissionRequest): unknown;
                fromPartial(object: Partial<_106.QueryValidatorCommissionRequest>): _106.QueryValidatorCommissionRequest;
            };
            QueryValidatorCommissionResponse: {
                encode(message: _106.QueryValidatorCommissionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _106.QueryValidatorCommissionResponse;
                fromJSON(object: any): _106.QueryValidatorCommissionResponse;
                toJSON(message: _106.QueryValidatorCommissionResponse): unknown;
                fromPartial(object: Partial<_106.QueryValidatorCommissionResponse>): _106.QueryValidatorCommissionResponse;
            };
            QueryValidatorSlashesRequest: {
                encode(message: _106.QueryValidatorSlashesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _106.QueryValidatorSlashesRequest;
                fromJSON(object: any): _106.QueryValidatorSlashesRequest;
                toJSON(message: _106.QueryValidatorSlashesRequest): unknown;
                fromPartial(object: Partial<_106.QueryValidatorSlashesRequest>): _106.QueryValidatorSlashesRequest;
            };
            QueryValidatorSlashesResponse: {
                encode(message: _106.QueryValidatorSlashesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _106.QueryValidatorSlashesResponse;
                fromJSON(object: any): _106.QueryValidatorSlashesResponse;
                toJSON(message: _106.QueryValidatorSlashesResponse): unknown;
                fromPartial(object: Partial<_106.QueryValidatorSlashesResponse>): _106.QueryValidatorSlashesResponse;
            };
            QueryDelegationRewardsRequest: {
                encode(message: _106.QueryDelegationRewardsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _106.QueryDelegationRewardsRequest;
                fromJSON(object: any): _106.QueryDelegationRewardsRequest;
                toJSON(message: _106.QueryDelegationRewardsRequest): unknown;
                fromPartial(object: Partial<_106.QueryDelegationRewardsRequest>): _106.QueryDelegationRewardsRequest;
            };
            QueryDelegationRewardsResponse: {
                encode(message: _106.QueryDelegationRewardsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _106.QueryDelegationRewardsResponse;
                fromJSON(object: any): _106.QueryDelegationRewardsResponse;
                toJSON(message: _106.QueryDelegationRewardsResponse): unknown;
                fromPartial(object: Partial<_106.QueryDelegationRewardsResponse>): _106.QueryDelegationRewardsResponse;
            };
            QueryDelegationTotalRewardsRequest: {
                encode(message: _106.QueryDelegationTotalRewardsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _106.QueryDelegationTotalRewardsRequest;
                fromJSON(object: any): _106.QueryDelegationTotalRewardsRequest;
                toJSON(message: _106.QueryDelegationTotalRewardsRequest): unknown;
                fromPartial(object: Partial<_106.QueryDelegationTotalRewardsRequest>): _106.QueryDelegationTotalRewardsRequest;
            };
            QueryDelegationTotalRewardsResponse: {
                encode(message: _106.QueryDelegationTotalRewardsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _106.QueryDelegationTotalRewardsResponse;
                fromJSON(object: any): _106.QueryDelegationTotalRewardsResponse;
                toJSON(message: _106.QueryDelegationTotalRewardsResponse): unknown;
                fromPartial(object: Partial<_106.QueryDelegationTotalRewardsResponse>): _106.QueryDelegationTotalRewardsResponse;
            };
            QueryDelegatorValidatorsRequest: {
                encode(message: _106.QueryDelegatorValidatorsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _106.QueryDelegatorValidatorsRequest;
                fromJSON(object: any): _106.QueryDelegatorValidatorsRequest;
                toJSON(message: _106.QueryDelegatorValidatorsRequest): unknown;
                fromPartial(object: Partial<_106.QueryDelegatorValidatorsRequest>): _106.QueryDelegatorValidatorsRequest;
            };
            QueryDelegatorValidatorsResponse: {
                encode(message: _106.QueryDelegatorValidatorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _106.QueryDelegatorValidatorsResponse;
                fromJSON(object: any): _106.QueryDelegatorValidatorsResponse;
                toJSON(message: _106.QueryDelegatorValidatorsResponse): unknown;
                fromPartial(object: Partial<_106.QueryDelegatorValidatorsResponse>): _106.QueryDelegatorValidatorsResponse;
            };
            QueryDelegatorWithdrawAddressRequest: {
                encode(message: _106.QueryDelegatorWithdrawAddressRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _106.QueryDelegatorWithdrawAddressRequest;
                fromJSON(object: any): _106.QueryDelegatorWithdrawAddressRequest;
                toJSON(message: _106.QueryDelegatorWithdrawAddressRequest): unknown;
                fromPartial(object: Partial<_106.QueryDelegatorWithdrawAddressRequest>): _106.QueryDelegatorWithdrawAddressRequest;
            };
            QueryDelegatorWithdrawAddressResponse: {
                encode(message: _106.QueryDelegatorWithdrawAddressResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _106.QueryDelegatorWithdrawAddressResponse;
                fromJSON(object: any): _106.QueryDelegatorWithdrawAddressResponse;
                toJSON(message: _106.QueryDelegatorWithdrawAddressResponse): unknown;
                fromPartial(object: Partial<_106.QueryDelegatorWithdrawAddressResponse>): _106.QueryDelegatorWithdrawAddressResponse;
            };
            QueryCommunityPoolRequest: {
                encode(_: _106.QueryCommunityPoolRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _106.QueryCommunityPoolRequest;
                fromJSON(_: any): _106.QueryCommunityPoolRequest;
                toJSON(_: _106.QueryCommunityPoolRequest): unknown;
                fromPartial(_: Partial<_106.QueryCommunityPoolRequest>): _106.QueryCommunityPoolRequest;
            };
            QueryCommunityPoolResponse: {
                encode(message: _106.QueryCommunityPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _106.QueryCommunityPoolResponse;
                fromJSON(object: any): _106.QueryCommunityPoolResponse;
                toJSON(message: _106.QueryCommunityPoolResponse): unknown;
                fromPartial(object: Partial<_106.QueryCommunityPoolResponse>): _106.QueryCommunityPoolResponse;
            };
            DelegatorWithdrawInfo: {
                encode(message: _105.DelegatorWithdrawInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _105.DelegatorWithdrawInfo;
                fromJSON(object: any): _105.DelegatorWithdrawInfo;
                toJSON(message: _105.DelegatorWithdrawInfo): unknown;
                fromPartial(object: Partial<_105.DelegatorWithdrawInfo>): _105.DelegatorWithdrawInfo;
            };
            ValidatorOutstandingRewardsRecord: {
                encode(message: _105.ValidatorOutstandingRewardsRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _105.ValidatorOutstandingRewardsRecord;
                fromJSON(object: any): _105.ValidatorOutstandingRewardsRecord;
                toJSON(message: _105.ValidatorOutstandingRewardsRecord): unknown;
                fromPartial(object: Partial<_105.ValidatorOutstandingRewardsRecord>): _105.ValidatorOutstandingRewardsRecord;
            };
            ValidatorAccumulatedCommissionRecord: {
                encode(message: _105.ValidatorAccumulatedCommissionRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _105.ValidatorAccumulatedCommissionRecord;
                fromJSON(object: any): _105.ValidatorAccumulatedCommissionRecord;
                toJSON(message: _105.ValidatorAccumulatedCommissionRecord): unknown;
                fromPartial(object: Partial<_105.ValidatorAccumulatedCommissionRecord>): _105.ValidatorAccumulatedCommissionRecord;
            };
            ValidatorHistoricalRewardsRecord: {
                encode(message: _105.ValidatorHistoricalRewardsRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _105.ValidatorHistoricalRewardsRecord;
                fromJSON(object: any): _105.ValidatorHistoricalRewardsRecord;
                toJSON(message: _105.ValidatorHistoricalRewardsRecord): unknown;
                fromPartial(object: Partial<_105.ValidatorHistoricalRewardsRecord>): _105.ValidatorHistoricalRewardsRecord;
            };
            ValidatorCurrentRewardsRecord: {
                encode(message: _105.ValidatorCurrentRewardsRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _105.ValidatorCurrentRewardsRecord;
                fromJSON(object: any): _105.ValidatorCurrentRewardsRecord;
                toJSON(message: _105.ValidatorCurrentRewardsRecord): unknown;
                fromPartial(object: Partial<_105.ValidatorCurrentRewardsRecord>): _105.ValidatorCurrentRewardsRecord;
            };
            DelegatorStartingInfoRecord: {
                encode(message: _105.DelegatorStartingInfoRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _105.DelegatorStartingInfoRecord;
                fromJSON(object: any): _105.DelegatorStartingInfoRecord;
                toJSON(message: _105.DelegatorStartingInfoRecord): unknown;
                fromPartial(object: Partial<_105.DelegatorStartingInfoRecord>): _105.DelegatorStartingInfoRecord;
            };
            ValidatorSlashEventRecord: {
                encode(message: _105.ValidatorSlashEventRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _105.ValidatorSlashEventRecord;
                fromJSON(object: any): _105.ValidatorSlashEventRecord;
                toJSON(message: _105.ValidatorSlashEventRecord): unknown;
                fromPartial(object: Partial<_105.ValidatorSlashEventRecord>): _105.ValidatorSlashEventRecord;
            };
            GenesisState: {
                encode(message: _105.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _105.GenesisState;
                fromJSON(object: any): _105.GenesisState;
                toJSON(message: _105.GenesisState): unknown;
                fromPartial(object: Partial<_105.GenesisState>): _105.GenesisState;
            };
            Params: {
                encode(message: _104.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _104.Params;
                fromJSON(object: any): _104.Params;
                toJSON(message: _104.Params): unknown;
                fromPartial(object: Partial<_104.Params>): _104.Params;
            };
            ValidatorHistoricalRewards: {
                encode(message: _104.ValidatorHistoricalRewards, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _104.ValidatorHistoricalRewards;
                fromJSON(object: any): _104.ValidatorHistoricalRewards;
                toJSON(message: _104.ValidatorHistoricalRewards): unknown;
                fromPartial(object: Partial<_104.ValidatorHistoricalRewards>): _104.ValidatorHistoricalRewards;
            };
            ValidatorCurrentRewards: {
                encode(message: _104.ValidatorCurrentRewards, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _104.ValidatorCurrentRewards;
                fromJSON(object: any): _104.ValidatorCurrentRewards;
                toJSON(message: _104.ValidatorCurrentRewards): unknown;
                fromPartial(object: Partial<_104.ValidatorCurrentRewards>): _104.ValidatorCurrentRewards;
            };
            ValidatorAccumulatedCommission: {
                encode(message: _104.ValidatorAccumulatedCommission, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _104.ValidatorAccumulatedCommission;
                fromJSON(object: any): _104.ValidatorAccumulatedCommission;
                toJSON(message: _104.ValidatorAccumulatedCommission): unknown;
                fromPartial(object: Partial<_104.ValidatorAccumulatedCommission>): _104.ValidatorAccumulatedCommission;
            };
            ValidatorOutstandingRewards: {
                encode(message: _104.ValidatorOutstandingRewards, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _104.ValidatorOutstandingRewards;
                fromJSON(object: any): _104.ValidatorOutstandingRewards;
                toJSON(message: _104.ValidatorOutstandingRewards): unknown;
                fromPartial(object: Partial<_104.ValidatorOutstandingRewards>): _104.ValidatorOutstandingRewards;
            };
            ValidatorSlashEvent: {
                encode(message: _104.ValidatorSlashEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _104.ValidatorSlashEvent;
                fromJSON(object: any): _104.ValidatorSlashEvent;
                toJSON(message: _104.ValidatorSlashEvent): unknown;
                fromPartial(object: Partial<_104.ValidatorSlashEvent>): _104.ValidatorSlashEvent;
            };
            ValidatorSlashEvents: {
                encode(message: _104.ValidatorSlashEvents, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _104.ValidatorSlashEvents;
                fromJSON(object: any): _104.ValidatorSlashEvents;
                toJSON(message: _104.ValidatorSlashEvents): unknown;
                fromPartial(object: Partial<_104.ValidatorSlashEvents>): _104.ValidatorSlashEvents;
            };
            FeePool: {
                encode(message: _104.FeePool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _104.FeePool;
                fromJSON(object: any): _104.FeePool;
                toJSON(message: _104.FeePool): unknown;
                fromPartial(object: Partial<_104.FeePool>): _104.FeePool;
            };
            CommunityPoolSpendProposal: {
                encode(message: _104.CommunityPoolSpendProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _104.CommunityPoolSpendProposal;
                fromJSON(object: any): _104.CommunityPoolSpendProposal;
                toJSON(message: _104.CommunityPoolSpendProposal): unknown;
                fromPartial(object: Partial<_104.CommunityPoolSpendProposal>): _104.CommunityPoolSpendProposal;
            };
            DelegatorStartingInfo: {
                encode(message: _104.DelegatorStartingInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _104.DelegatorStartingInfo;
                fromJSON(object: any): _104.DelegatorStartingInfo;
                toJSON(message: _104.DelegatorStartingInfo): unknown;
                fromPartial(object: Partial<_104.DelegatorStartingInfo>): _104.DelegatorStartingInfo;
            };
            DelegationDelegatorReward: {
                encode(message: _104.DelegationDelegatorReward, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _104.DelegationDelegatorReward;
                fromJSON(object: any): _104.DelegationDelegatorReward;
                toJSON(message: _104.DelegationDelegatorReward): unknown;
                fromPartial(object: Partial<_104.DelegationDelegatorReward>): _104.DelegationDelegatorReward;
            };
            CommunityPoolSpendProposalWithDeposit: {
                encode(message: _104.CommunityPoolSpendProposalWithDeposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _104.CommunityPoolSpendProposalWithDeposit;
                fromJSON(object: any): _104.CommunityPoolSpendProposalWithDeposit;
                toJSON(message: _104.CommunityPoolSpendProposalWithDeposit): unknown;
                fromPartial(object: Partial<_104.CommunityPoolSpendProposalWithDeposit>): _104.CommunityPoolSpendProposalWithDeposit;
            };
        };
    }
    namespace evidence {
        namespace module {
            const v1: {
                Module: {
                    encode(_: _109.Module, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _109.Module;
                    fromJSON(_: any): _109.Module;
                    toJSON(_: _109.Module): unknown;
                    fromPartial(_: Partial<_109.Module>): _109.Module;
                };
            };
        }
        const v1beta1: {
            LCDQueryClient: typeof _392.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    submitEvidence(value: _117.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitEvidence(value: _117.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: _117.MsgSubmitEvidence;
                    };
                };
                toJSON: {
                    submitEvidence(value: _117.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    submitEvidence(value: any): {
                        typeUrl: string;
                        value: _117.MsgSubmitEvidence;
                    };
                };
                fromPartial: {
                    submitEvidence(value: _117.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: _117.MsgSubmitEvidence;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.evidence.v1beta1.MsgSubmitEvidence": {
                    aminoType: string;
                    toAmino: ({ submitter, evidence }: _117.MsgSubmitEvidence) => {
                        submitter: string;
                        evidence: {
                            type_url: string;
                            value: Uint8Array;
                        };
                    };
                    fromAmino: ({ submitter, evidence }: {
                        submitter: string;
                        evidence: {
                            type_url: string;
                            value: Uint8Array;
                        };
                    }) => _117.MsgSubmitEvidence;
                };
            };
            MsgSubmitEvidence: {
                encode(message: _117.MsgSubmitEvidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _117.MsgSubmitEvidence;
                fromJSON(object: any): _117.MsgSubmitEvidence;
                toJSON(message: _117.MsgSubmitEvidence): unknown;
                fromPartial(object: Partial<_117.MsgSubmitEvidence>): _117.MsgSubmitEvidence;
            };
            MsgSubmitEvidenceResponse: {
                encode(message: _117.MsgSubmitEvidenceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _117.MsgSubmitEvidenceResponse;
                fromJSON(object: any): _117.MsgSubmitEvidenceResponse;
                toJSON(message: _117.MsgSubmitEvidenceResponse): unknown;
                fromPartial(object: Partial<_117.MsgSubmitEvidenceResponse>): _117.MsgSubmitEvidenceResponse;
            };
            QueryEvidenceRequest: {
                encode(message: _116.QueryEvidenceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _116.QueryEvidenceRequest;
                fromJSON(object: any): _116.QueryEvidenceRequest;
                toJSON(message: _116.QueryEvidenceRequest): unknown;
                fromPartial(object: Partial<_116.QueryEvidenceRequest>): _116.QueryEvidenceRequest;
            };
            QueryEvidenceResponse: {
                encode(message: _116.QueryEvidenceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _116.QueryEvidenceResponse;
                fromJSON(object: any): _116.QueryEvidenceResponse;
                toJSON(message: _116.QueryEvidenceResponse): unknown;
                fromPartial(object: Partial<_116.QueryEvidenceResponse>): _116.QueryEvidenceResponse;
            };
            QueryAllEvidenceRequest: {
                encode(message: _116.QueryAllEvidenceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _116.QueryAllEvidenceRequest;
                fromJSON(object: any): _116.QueryAllEvidenceRequest;
                toJSON(message: _116.QueryAllEvidenceRequest): unknown;
                fromPartial(object: Partial<_116.QueryAllEvidenceRequest>): _116.QueryAllEvidenceRequest;
            };
            QueryAllEvidenceResponse: {
                encode(message: _116.QueryAllEvidenceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _116.QueryAllEvidenceResponse;
                fromJSON(object: any): _116.QueryAllEvidenceResponse;
                toJSON(message: _116.QueryAllEvidenceResponse): unknown;
                fromPartial(object: Partial<_116.QueryAllEvidenceResponse>): _116.QueryAllEvidenceResponse;
            };
            GenesisState: {
                encode(message: _115.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _115.GenesisState;
                fromJSON(object: any): _115.GenesisState;
                toJSON(message: _115.GenesisState): unknown;
                fromPartial(object: Partial<_115.GenesisState>): _115.GenesisState;
            };
            Equivocation: {
                encode(message: _114.Equivocation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _114.Equivocation;
                fromJSON(object: any): _114.Equivocation;
                toJSON(message: _114.Equivocation): unknown;
                fromPartial(object: Partial<_114.Equivocation>): _114.Equivocation;
            };
        };
    }
    namespace feegrant {
        namespace module {
            const v1: {
                Module: {
                    encode(_: _119.Module, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _119.Module;
                    fromJSON(_: any): _119.Module;
                    toJSON(_: _119.Module): unknown;
                    fromPartial(_: Partial<_119.Module>): _119.Module;
                };
            };
        }
        const v1beta1: {
            LCDQueryClient: typeof _393.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    grantAllowance(value: _127.MsgGrantAllowance): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    revokeAllowance(value: _127.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    grantAllowance(value: _127.MsgGrantAllowance): {
                        typeUrl: string;
                        value: _127.MsgGrantAllowance;
                    };
                    revokeAllowance(value: _127.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: _127.MsgRevokeAllowance;
                    };
                };
                toJSON: {
                    grantAllowance(value: _127.MsgGrantAllowance): {
                        typeUrl: string;
                        value: unknown;
                    };
                    revokeAllowance(value: _127.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    grantAllowance(value: any): {
                        typeUrl: string;
                        value: _127.MsgGrantAllowance;
                    };
                    revokeAllowance(value: any): {
                        typeUrl: string;
                        value: _127.MsgRevokeAllowance;
                    };
                };
                fromPartial: {
                    grantAllowance(value: _127.MsgGrantAllowance): {
                        typeUrl: string;
                        value: _127.MsgGrantAllowance;
                    };
                    revokeAllowance(value: _127.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: _127.MsgRevokeAllowance;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.feegrant.v1beta1.MsgGrantAllowance": {
                    aminoType: string;
                    toAmino: ({ granter, grantee, allowance }: _127.MsgGrantAllowance) => {
                        granter: string;
                        grantee: string;
                        allowance: {
                            type_url: string;
                            value: Uint8Array;
                        };
                    };
                    fromAmino: ({ granter, grantee, allowance }: {
                        granter: string;
                        grantee: string;
                        allowance: {
                            type_url: string;
                            value: Uint8Array;
                        };
                    }) => _127.MsgGrantAllowance;
                };
                "/cosmos.feegrant.v1beta1.MsgRevokeAllowance": {
                    aminoType: string;
                    toAmino: ({ granter, grantee }: _127.MsgRevokeAllowance) => {
                        granter: string;
                        grantee: string;
                    };
                    fromAmino: ({ granter, grantee }: {
                        granter: string;
                        grantee: string;
                    }) => _127.MsgRevokeAllowance;
                };
            };
            MsgGrantAllowance: {
                encode(message: _127.MsgGrantAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _127.MsgGrantAllowance;
                fromJSON(object: any): _127.MsgGrantAllowance;
                toJSON(message: _127.MsgGrantAllowance): unknown;
                fromPartial(object: Partial<_127.MsgGrantAllowance>): _127.MsgGrantAllowance;
            };
            MsgGrantAllowanceResponse: {
                encode(_: _127.MsgGrantAllowanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _127.MsgGrantAllowanceResponse;
                fromJSON(_: any): _127.MsgGrantAllowanceResponse;
                toJSON(_: _127.MsgGrantAllowanceResponse): unknown;
                fromPartial(_: Partial<_127.MsgGrantAllowanceResponse>): _127.MsgGrantAllowanceResponse;
            };
            MsgRevokeAllowance: {
                encode(message: _127.MsgRevokeAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _127.MsgRevokeAllowance;
                fromJSON(object: any): _127.MsgRevokeAllowance;
                toJSON(message: _127.MsgRevokeAllowance): unknown;
                fromPartial(object: Partial<_127.MsgRevokeAllowance>): _127.MsgRevokeAllowance;
            };
            MsgRevokeAllowanceResponse: {
                encode(_: _127.MsgRevokeAllowanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _127.MsgRevokeAllowanceResponse;
                fromJSON(_: any): _127.MsgRevokeAllowanceResponse;
                toJSON(_: _127.MsgRevokeAllowanceResponse): unknown;
                fromPartial(_: Partial<_127.MsgRevokeAllowanceResponse>): _127.MsgRevokeAllowanceResponse;
            };
            QueryAllowanceRequest: {
                encode(message: _126.QueryAllowanceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _126.QueryAllowanceRequest;
                fromJSON(object: any): _126.QueryAllowanceRequest;
                toJSON(message: _126.QueryAllowanceRequest): unknown;
                fromPartial(object: Partial<_126.QueryAllowanceRequest>): _126.QueryAllowanceRequest;
            };
            QueryAllowanceResponse: {
                encode(message: _126.QueryAllowanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _126.QueryAllowanceResponse;
                fromJSON(object: any): _126.QueryAllowanceResponse;
                toJSON(message: _126.QueryAllowanceResponse): unknown;
                fromPartial(object: Partial<_126.QueryAllowanceResponse>): _126.QueryAllowanceResponse;
            };
            QueryAllowancesRequest: {
                encode(message: _126.QueryAllowancesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _126.QueryAllowancesRequest;
                fromJSON(object: any): _126.QueryAllowancesRequest;
                toJSON(message: _126.QueryAllowancesRequest): unknown;
                fromPartial(object: Partial<_126.QueryAllowancesRequest>): _126.QueryAllowancesRequest;
            };
            QueryAllowancesResponse: {
                encode(message: _126.QueryAllowancesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _126.QueryAllowancesResponse;
                fromJSON(object: any): _126.QueryAllowancesResponse;
                toJSON(message: _126.QueryAllowancesResponse): unknown;
                fromPartial(object: Partial<_126.QueryAllowancesResponse>): _126.QueryAllowancesResponse;
            };
            QueryAllowancesByGranterRequest: {
                encode(message: _126.QueryAllowancesByGranterRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _126.QueryAllowancesByGranterRequest;
                fromJSON(object: any): _126.QueryAllowancesByGranterRequest;
                toJSON(message: _126.QueryAllowancesByGranterRequest): unknown;
                fromPartial(object: Partial<_126.QueryAllowancesByGranterRequest>): _126.QueryAllowancesByGranterRequest;
            };
            QueryAllowancesByGranterResponse: {
                encode(message: _126.QueryAllowancesByGranterResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _126.QueryAllowancesByGranterResponse;
                fromJSON(object: any): _126.QueryAllowancesByGranterResponse;
                toJSON(message: _126.QueryAllowancesByGranterResponse): unknown;
                fromPartial(object: Partial<_126.QueryAllowancesByGranterResponse>): _126.QueryAllowancesByGranterResponse;
            };
            GenesisState: {
                encode(message: _125.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _125.GenesisState;
                fromJSON(object: any): _125.GenesisState;
                toJSON(message: _125.GenesisState): unknown;
                fromPartial(object: Partial<_125.GenesisState>): _125.GenesisState;
            };
            BasicAllowance: {
                encode(message: _124.BasicAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _124.BasicAllowance;
                fromJSON(object: any): _124.BasicAllowance;
                toJSON(message: _124.BasicAllowance): unknown;
                fromPartial(object: Partial<_124.BasicAllowance>): _124.BasicAllowance;
            };
            PeriodicAllowance: {
                encode(message: _124.PeriodicAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _124.PeriodicAllowance;
                fromJSON(object: any): _124.PeriodicAllowance;
                toJSON(message: _124.PeriodicAllowance): unknown;
                fromPartial(object: Partial<_124.PeriodicAllowance>): _124.PeriodicAllowance;
            };
            AllowedMsgAllowance: {
                encode(message: _124.AllowedMsgAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _124.AllowedMsgAllowance;
                fromJSON(object: any): _124.AllowedMsgAllowance;
                toJSON(message: _124.AllowedMsgAllowance): unknown;
                fromPartial(object: Partial<_124.AllowedMsgAllowance>): _124.AllowedMsgAllowance;
            };
            Grant: {
                encode(message: _124.Grant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _124.Grant;
                fromJSON(object: any): _124.Grant;
                toJSON(message: _124.Grant): unknown;
                fromPartial(object: Partial<_124.Grant>): _124.Grant;
            };
        };
    }
    namespace genutil {
        namespace module {
            const v1: {
                Module: {
                    encode(_: _129.Module, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _129.Module;
                    fromJSON(_: any): _129.Module;
                    toJSON(_: _129.Module): unknown;
                    fromPartial(_: Partial<_129.Module>): _129.Module;
                };
            };
        }
        const v1beta1: {
            GenesisState: {
                encode(message: _131.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _131.GenesisState;
                fromJSON(object: any): _131.GenesisState;
                toJSON(message: _131.GenesisState): unknown;
                fromPartial(object: Partial<_131.GenesisState>): _131.GenesisState;
            };
        };
    }
    namespace gov {
        namespace module {
            const v1: {
                Module: {
                    encode(message: _133.Module, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _133.Module;
                    fromJSON(object: any): _133.Module;
                    toJSON(message: _133.Module): unknown;
                    fromPartial(object: Partial<_133.Module>): _133.Module;
                };
            };
        }
        const v1: {
            LCDQueryClient: typeof _394.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    submitProposal(value: _141.MsgSubmitProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    execLegacyContent(value: _141.MsgExecLegacyContent): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    vote(value: _141.MsgVote): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    voteWeighted(value: _141.MsgVoteWeighted): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    deposit(value: _141.MsgDeposit): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateParams(value: _141.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    cancelProposal(value: _141.MsgCancelProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitProposal(value: _141.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _141.MsgSubmitProposal;
                    };
                    execLegacyContent(value: _141.MsgExecLegacyContent): {
                        typeUrl: string;
                        value: _141.MsgExecLegacyContent;
                    };
                    vote(value: _141.MsgVote): {
                        typeUrl: string;
                        value: _141.MsgVote;
                    };
                    voteWeighted(value: _141.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _141.MsgVoteWeighted;
                    };
                    deposit(value: _141.MsgDeposit): {
                        typeUrl: string;
                        value: _141.MsgDeposit;
                    };
                    updateParams(value: _141.MsgUpdateParams): {
                        typeUrl: string;
                        value: _141.MsgUpdateParams;
                    };
                    cancelProposal(value: _141.MsgCancelProposal): {
                        typeUrl: string;
                        value: _141.MsgCancelProposal;
                    };
                };
                toJSON: {
                    submitProposal(value: _141.MsgSubmitProposal): {
                        typeUrl: string;
                        value: unknown;
                    };
                    execLegacyContent(value: _141.MsgExecLegacyContent): {
                        typeUrl: string;
                        value: unknown;
                    };
                    vote(value: _141.MsgVote): {
                        typeUrl: string;
                        value: unknown;
                    };
                    voteWeighted(value: _141.MsgVoteWeighted): {
                        typeUrl: string;
                        value: unknown;
                    };
                    deposit(value: _141.MsgDeposit): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateParams(value: _141.MsgUpdateParams): {
                        typeUrl: string;
                        value: unknown;
                    };
                    cancelProposal(value: _141.MsgCancelProposal): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    submitProposal(value: any): {
                        typeUrl: string;
                        value: _141.MsgSubmitProposal;
                    };
                    execLegacyContent(value: any): {
                        typeUrl: string;
                        value: _141.MsgExecLegacyContent;
                    };
                    vote(value: any): {
                        typeUrl: string;
                        value: _141.MsgVote;
                    };
                    voteWeighted(value: any): {
                        typeUrl: string;
                        value: _141.MsgVoteWeighted;
                    };
                    deposit(value: any): {
                        typeUrl: string;
                        value: _141.MsgDeposit;
                    };
                    updateParams(value: any): {
                        typeUrl: string;
                        value: _141.MsgUpdateParams;
                    };
                    cancelProposal(value: any): {
                        typeUrl: string;
                        value: _141.MsgCancelProposal;
                    };
                };
                fromPartial: {
                    submitProposal(value: _141.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _141.MsgSubmitProposal;
                    };
                    execLegacyContent(value: _141.MsgExecLegacyContent): {
                        typeUrl: string;
                        value: _141.MsgExecLegacyContent;
                    };
                    vote(value: _141.MsgVote): {
                        typeUrl: string;
                        value: _141.MsgVote;
                    };
                    voteWeighted(value: _141.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _141.MsgVoteWeighted;
                    };
                    deposit(value: _141.MsgDeposit): {
                        typeUrl: string;
                        value: _141.MsgDeposit;
                    };
                    updateParams(value: _141.MsgUpdateParams): {
                        typeUrl: string;
                        value: _141.MsgUpdateParams;
                    };
                    cancelProposal(value: _141.MsgCancelProposal): {
                        typeUrl: string;
                        value: _141.MsgCancelProposal;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.gov.v1.MsgSubmitProposal": {
                    aminoType: string;
                    toAmino: ({ messages, initialDeposit, proposer, metadata, title, summary, expedited }: _141.MsgSubmitProposal) => {
                        messages: {
                            type_url: string;
                            value: Uint8Array;
                        }[];
                        initial_deposit: {
                            denom: string;
                            amount: string;
                        }[];
                        proposer: string;
                        metadata: string;
                        title: string;
                        summary: string;
                        expedited: boolean;
                    };
                    fromAmino: ({ messages, initial_deposit, proposer, metadata, title, summary, expedited }: {
                        messages: {
                            type_url: string;
                            value: Uint8Array;
                        }[];
                        initial_deposit: {
                            denom: string;
                            amount: string;
                        }[];
                        proposer: string;
                        metadata: string;
                        title: string;
                        summary: string;
                        expedited: boolean;
                    }) => _141.MsgSubmitProposal;
                };
                "/cosmos.gov.v1.MsgExecLegacyContent": {
                    aminoType: string;
                    toAmino: ({ content, authority }: _141.MsgExecLegacyContent) => {
                        content: {
                            type_url: string;
                            value: Uint8Array;
                        };
                        authority: string;
                    };
                    fromAmino: ({ content, authority }: {
                        content: {
                            type_url: string;
                            value: Uint8Array;
                        };
                        authority: string;
                    }) => _141.MsgExecLegacyContent;
                };
                "/cosmos.gov.v1.MsgVote": {
                    aminoType: string;
                    toAmino: ({ proposalId, voter, option, metadata }: _141.MsgVote) => {
                        proposal_id: string;
                        voter: string;
                        option: number;
                        metadata: string;
                    };
                    fromAmino: ({ proposal_id, voter, option, metadata }: {
                        proposal_id: string;
                        voter: string;
                        option: number;
                        metadata: string;
                    }) => _141.MsgVote;
                };
                "/cosmos.gov.v1.MsgVoteWeighted": {
                    aminoType: string;
                    toAmino: ({ proposalId, voter, options, metadata }: _141.MsgVoteWeighted) => {
                        proposal_id: string;
                        voter: string;
                        options: {
                            option: number;
                            weight: string;
                        }[];
                        metadata: string;
                    };
                    fromAmino: ({ proposal_id, voter, options, metadata }: {
                        proposal_id: string;
                        voter: string;
                        options: {
                            option: number;
                            weight: string;
                        }[];
                        metadata: string;
                    }) => _141.MsgVoteWeighted;
                };
                "/cosmos.gov.v1.MsgDeposit": {
                    aminoType: string;
                    toAmino: ({ proposalId, depositor, amount }: _141.MsgDeposit) => {
                        proposal_id: string;
                        depositor: string;
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                    };
                    fromAmino: ({ proposal_id, depositor, amount }: {
                        proposal_id: string;
                        depositor: string;
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                    }) => _141.MsgDeposit;
                };
                "/cosmos.gov.v1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: ({ authority, params }: _141.MsgUpdateParams) => {
                        authority: string;
                        params: {
                            min_deposit: {
                                denom: string;
                                amount: string;
                            }[];
                            max_deposit_period: {
                                seconds: string;
                                nanos: number;
                            };
                            voting_period: {
                                seconds: string;
                                nanos: number;
                            };
                            quorum: string;
                            threshold: string;
                            veto_threshold: string;
                            min_initial_deposit_ratio: string;
                            proposal_cancel_ratio: string;
                            proposal_cancel_dest: string;
                            expedited_voting_period: {
                                seconds: string;
                                nanos: number;
                            };
                            expedited_threshold: string;
                            expedited_min_deposit: {
                                denom: string;
                                amount: string;
                            }[];
                            burn_vote_quorum: boolean;
                            burn_proposal_deposit_prevote: boolean;
                            burn_vote_veto: boolean;
                        };
                    };
                    fromAmino: ({ authority, params }: {
                        authority: string;
                        params: {
                            min_deposit: {
                                denom: string;
                                amount: string;
                            }[];
                            max_deposit_period: {
                                seconds: string;
                                nanos: number;
                            };
                            voting_period: {
                                seconds: string;
                                nanos: number;
                            };
                            quorum: string;
                            threshold: string;
                            veto_threshold: string;
                            min_initial_deposit_ratio: string;
                            proposal_cancel_ratio: string;
                            proposal_cancel_dest: string;
                            expedited_voting_period: {
                                seconds: string;
                                nanos: number;
                            };
                            expedited_threshold: string;
                            expedited_min_deposit: {
                                denom: string;
                                amount: string;
                            }[];
                            burn_vote_quorum: boolean;
                            burn_proposal_deposit_prevote: boolean;
                            burn_vote_veto: boolean;
                        };
                    }) => _141.MsgUpdateParams;
                };
                "/cosmos.gov.v1.MsgCancelProposal": {
                    aminoType: string;
                    toAmino: ({ proposalId, proposer }: _141.MsgCancelProposal) => {
                        proposal_id: string;
                        proposer: string;
                    };
                    fromAmino: ({ proposal_id, proposer }: {
                        proposal_id: string;
                        proposer: string;
                    }) => _141.MsgCancelProposal;
                };
            };
            MsgSubmitProposal: {
                encode(message: _141.MsgSubmitProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _141.MsgSubmitProposal;
                fromJSON(object: any): _141.MsgSubmitProposal;
                toJSON(message: _141.MsgSubmitProposal): unknown;
                fromPartial(object: Partial<_141.MsgSubmitProposal>): _141.MsgSubmitProposal;
            };
            MsgSubmitProposalResponse: {
                encode(message: _141.MsgSubmitProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _141.MsgSubmitProposalResponse;
                fromJSON(object: any): _141.MsgSubmitProposalResponse;
                toJSON(message: _141.MsgSubmitProposalResponse): unknown;
                fromPartial(object: Partial<_141.MsgSubmitProposalResponse>): _141.MsgSubmitProposalResponse;
            };
            MsgExecLegacyContent: {
                encode(message: _141.MsgExecLegacyContent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _141.MsgExecLegacyContent;
                fromJSON(object: any): _141.MsgExecLegacyContent;
                toJSON(message: _141.MsgExecLegacyContent): unknown;
                fromPartial(object: Partial<_141.MsgExecLegacyContent>): _141.MsgExecLegacyContent;
            };
            MsgExecLegacyContentResponse: {
                encode(_: _141.MsgExecLegacyContentResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _141.MsgExecLegacyContentResponse;
                fromJSON(_: any): _141.MsgExecLegacyContentResponse;
                toJSON(_: _141.MsgExecLegacyContentResponse): unknown;
                fromPartial(_: Partial<_141.MsgExecLegacyContentResponse>): _141.MsgExecLegacyContentResponse;
            };
            MsgVote: {
                encode(message: _141.MsgVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _141.MsgVote;
                fromJSON(object: any): _141.MsgVote;
                toJSON(message: _141.MsgVote): unknown;
                fromPartial(object: Partial<_141.MsgVote>): _141.MsgVote;
            };
            MsgVoteResponse: {
                encode(_: _141.MsgVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _141.MsgVoteResponse;
                fromJSON(_: any): _141.MsgVoteResponse;
                toJSON(_: _141.MsgVoteResponse): unknown;
                fromPartial(_: Partial<_141.MsgVoteResponse>): _141.MsgVoteResponse;
            };
            MsgVoteWeighted: {
                encode(message: _141.MsgVoteWeighted, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _141.MsgVoteWeighted;
                fromJSON(object: any): _141.MsgVoteWeighted;
                toJSON(message: _141.MsgVoteWeighted): unknown;
                fromPartial(object: Partial<_141.MsgVoteWeighted>): _141.MsgVoteWeighted;
            };
            MsgVoteWeightedResponse: {
                encode(_: _141.MsgVoteWeightedResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _141.MsgVoteWeightedResponse;
                fromJSON(_: any): _141.MsgVoteWeightedResponse;
                toJSON(_: _141.MsgVoteWeightedResponse): unknown;
                fromPartial(_: Partial<_141.MsgVoteWeightedResponse>): _141.MsgVoteWeightedResponse;
            };
            MsgDeposit: {
                encode(message: _141.MsgDeposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _141.MsgDeposit;
                fromJSON(object: any): _141.MsgDeposit;
                toJSON(message: _141.MsgDeposit): unknown;
                fromPartial(object: Partial<_141.MsgDeposit>): _141.MsgDeposit;
            };
            MsgDepositResponse: {
                encode(_: _141.MsgDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _141.MsgDepositResponse;
                fromJSON(_: any): _141.MsgDepositResponse;
                toJSON(_: _141.MsgDepositResponse): unknown;
                fromPartial(_: Partial<_141.MsgDepositResponse>): _141.MsgDepositResponse;
            };
            MsgUpdateParams: {
                encode(message: _141.MsgUpdateParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _141.MsgUpdateParams;
                fromJSON(object: any): _141.MsgUpdateParams;
                toJSON(message: _141.MsgUpdateParams): unknown;
                fromPartial(object: Partial<_141.MsgUpdateParams>): _141.MsgUpdateParams;
            };
            MsgUpdateParamsResponse: {
                encode(_: _141.MsgUpdateParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _141.MsgUpdateParamsResponse;
                fromJSON(_: any): _141.MsgUpdateParamsResponse;
                toJSON(_: _141.MsgUpdateParamsResponse): unknown;
                fromPartial(_: Partial<_141.MsgUpdateParamsResponse>): _141.MsgUpdateParamsResponse;
            };
            MsgCancelProposal: {
                encode(message: _141.MsgCancelProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _141.MsgCancelProposal;
                fromJSON(object: any): _141.MsgCancelProposal;
                toJSON(message: _141.MsgCancelProposal): unknown;
                fromPartial(object: Partial<_141.MsgCancelProposal>): _141.MsgCancelProposal;
            };
            MsgCancelProposalResponse: {
                encode(message: _141.MsgCancelProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _141.MsgCancelProposalResponse;
                fromJSON(object: any): _141.MsgCancelProposalResponse;
                toJSON(message: _141.MsgCancelProposalResponse): unknown;
                fromPartial(object: Partial<_141.MsgCancelProposalResponse>): _141.MsgCancelProposalResponse;
            };
            QueryConstitutionRequest: {
                encode(_: _140.QueryConstitutionRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _140.QueryConstitutionRequest;
                fromJSON(_: any): _140.QueryConstitutionRequest;
                toJSON(_: _140.QueryConstitutionRequest): unknown;
                fromPartial(_: Partial<_140.QueryConstitutionRequest>): _140.QueryConstitutionRequest;
            };
            QueryConstitutionResponse: {
                encode(message: _140.QueryConstitutionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _140.QueryConstitutionResponse;
                fromJSON(object: any): _140.QueryConstitutionResponse;
                toJSON(message: _140.QueryConstitutionResponse): unknown;
                fromPartial(object: Partial<_140.QueryConstitutionResponse>): _140.QueryConstitutionResponse;
            };
            QueryProposalRequest: {
                encode(message: _140.QueryProposalRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _140.QueryProposalRequest;
                fromJSON(object: any): _140.QueryProposalRequest;
                toJSON(message: _140.QueryProposalRequest): unknown;
                fromPartial(object: Partial<_140.QueryProposalRequest>): _140.QueryProposalRequest;
            };
            QueryProposalResponse: {
                encode(message: _140.QueryProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _140.QueryProposalResponse;
                fromJSON(object: any): _140.QueryProposalResponse;
                toJSON(message: _140.QueryProposalResponse): unknown;
                fromPartial(object: Partial<_140.QueryProposalResponse>): _140.QueryProposalResponse;
            };
            QueryProposalsRequest: {
                encode(message: _140.QueryProposalsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _140.QueryProposalsRequest;
                fromJSON(object: any): _140.QueryProposalsRequest;
                toJSON(message: _140.QueryProposalsRequest): unknown;
                fromPartial(object: Partial<_140.QueryProposalsRequest>): _140.QueryProposalsRequest;
            };
            QueryProposalsResponse: {
                encode(message: _140.QueryProposalsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _140.QueryProposalsResponse;
                fromJSON(object: any): _140.QueryProposalsResponse;
                toJSON(message: _140.QueryProposalsResponse): unknown;
                fromPartial(object: Partial<_140.QueryProposalsResponse>): _140.QueryProposalsResponse;
            };
            QueryVoteRequest: {
                encode(message: _140.QueryVoteRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _140.QueryVoteRequest;
                fromJSON(object: any): _140.QueryVoteRequest;
                toJSON(message: _140.QueryVoteRequest): unknown;
                fromPartial(object: Partial<_140.QueryVoteRequest>): _140.QueryVoteRequest;
            };
            QueryVoteResponse: {
                encode(message: _140.QueryVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _140.QueryVoteResponse;
                fromJSON(object: any): _140.QueryVoteResponse;
                toJSON(message: _140.QueryVoteResponse): unknown;
                fromPartial(object: Partial<_140.QueryVoteResponse>): _140.QueryVoteResponse;
            };
            QueryVotesRequest: {
                encode(message: _140.QueryVotesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _140.QueryVotesRequest;
                fromJSON(object: any): _140.QueryVotesRequest;
                toJSON(message: _140.QueryVotesRequest): unknown;
                fromPartial(object: Partial<_140.QueryVotesRequest>): _140.QueryVotesRequest;
            };
            QueryVotesResponse: {
                encode(message: _140.QueryVotesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _140.QueryVotesResponse;
                fromJSON(object: any): _140.QueryVotesResponse;
                toJSON(message: _140.QueryVotesResponse): unknown;
                fromPartial(object: Partial<_140.QueryVotesResponse>): _140.QueryVotesResponse;
            };
            QueryParamsRequest: {
                encode(message: _140.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _140.QueryParamsRequest;
                fromJSON(object: any): _140.QueryParamsRequest;
                toJSON(message: _140.QueryParamsRequest): unknown;
                fromPartial(object: Partial<_140.QueryParamsRequest>): _140.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _140.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _140.QueryParamsResponse;
                fromJSON(object: any): _140.QueryParamsResponse;
                toJSON(message: _140.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_140.QueryParamsResponse>): _140.QueryParamsResponse;
            };
            QueryDepositRequest: {
                encode(message: _140.QueryDepositRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _140.QueryDepositRequest;
                fromJSON(object: any): _140.QueryDepositRequest;
                toJSON(message: _140.QueryDepositRequest): unknown;
                fromPartial(object: Partial<_140.QueryDepositRequest>): _140.QueryDepositRequest;
            };
            QueryDepositResponse: {
                encode(message: _140.QueryDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _140.QueryDepositResponse;
                fromJSON(object: any): _140.QueryDepositResponse;
                toJSON(message: _140.QueryDepositResponse): unknown;
                fromPartial(object: Partial<_140.QueryDepositResponse>): _140.QueryDepositResponse;
            };
            QueryDepositsRequest: {
                encode(message: _140.QueryDepositsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _140.QueryDepositsRequest;
                fromJSON(object: any): _140.QueryDepositsRequest;
                toJSON(message: _140.QueryDepositsRequest): unknown;
                fromPartial(object: Partial<_140.QueryDepositsRequest>): _140.QueryDepositsRequest;
            };
            QueryDepositsResponse: {
                encode(message: _140.QueryDepositsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _140.QueryDepositsResponse;
                fromJSON(object: any): _140.QueryDepositsResponse;
                toJSON(message: _140.QueryDepositsResponse): unknown;
                fromPartial(object: Partial<_140.QueryDepositsResponse>): _140.QueryDepositsResponse;
            };
            QueryTallyResultRequest: {
                encode(message: _140.QueryTallyResultRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _140.QueryTallyResultRequest;
                fromJSON(object: any): _140.QueryTallyResultRequest;
                toJSON(message: _140.QueryTallyResultRequest): unknown;
                fromPartial(object: Partial<_140.QueryTallyResultRequest>): _140.QueryTallyResultRequest;
            };
            QueryTallyResultResponse: {
                encode(message: _140.QueryTallyResultResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _140.QueryTallyResultResponse;
                fromJSON(object: any): _140.QueryTallyResultResponse;
                toJSON(message: _140.QueryTallyResultResponse): unknown;
                fromPartial(object: Partial<_140.QueryTallyResultResponse>): _140.QueryTallyResultResponse;
            };
            voteOptionFromJSON(object: any): _139.VoteOption;
            voteOptionToJSON(object: _139.VoteOption): string;
            proposalStatusFromJSON(object: any): _139.ProposalStatus;
            proposalStatusToJSON(object: _139.ProposalStatus): string;
            VoteOption: typeof _139.VoteOption;
            VoteOptionSDKType: typeof _139.VoteOptionSDKType;
            ProposalStatus: typeof _139.ProposalStatus;
            ProposalStatusSDKType: typeof _139.ProposalStatusSDKType;
            WeightedVoteOption: {
                encode(message: _139.WeightedVoteOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _139.WeightedVoteOption;
                fromJSON(object: any): _139.WeightedVoteOption;
                toJSON(message: _139.WeightedVoteOption): unknown;
                fromPartial(object: Partial<_139.WeightedVoteOption>): _139.WeightedVoteOption;
            };
            Deposit: {
                encode(message: _139.Deposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _139.Deposit;
                fromJSON(object: any): _139.Deposit;
                toJSON(message: _139.Deposit): unknown;
                fromPartial(object: Partial<_139.Deposit>): _139.Deposit;
            };
            Proposal: {
                encode(message: _139.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _139.Proposal;
                fromJSON(object: any): _139.Proposal;
                toJSON(message: _139.Proposal): unknown;
                fromPartial(object: Partial<_139.Proposal>): _139.Proposal;
            };
            TallyResult: {
                encode(message: _139.TallyResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _139.TallyResult;
                fromJSON(object: any): _139.TallyResult;
                toJSON(message: _139.TallyResult): unknown;
                fromPartial(object: Partial<_139.TallyResult>): _139.TallyResult;
            };
            Vote: {
                encode(message: _139.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _139.Vote;
                fromJSON(object: any): _139.Vote;
                toJSON(message: _139.Vote): unknown;
                fromPartial(object: Partial<_139.Vote>): _139.Vote;
            };
            DepositParams: {
                encode(message: _139.DepositParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _139.DepositParams;
                fromJSON(object: any): _139.DepositParams;
                toJSON(message: _139.DepositParams): unknown;
                fromPartial(object: Partial<_139.DepositParams>): _139.DepositParams;
            };
            VotingParams: {
                encode(message: _139.VotingParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _139.VotingParams;
                fromJSON(object: any): _139.VotingParams;
                toJSON(message: _139.VotingParams): unknown;
                fromPartial(object: Partial<_139.VotingParams>): _139.VotingParams;
            };
            TallyParams: {
                encode(message: _139.TallyParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _139.TallyParams;
                fromJSON(object: any): _139.TallyParams;
                toJSON(message: _139.TallyParams): unknown;
                fromPartial(object: Partial<_139.TallyParams>): _139.TallyParams;
            };
            Params: {
                encode(message: _139.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _139.Params;
                fromJSON(object: any): _139.Params;
                toJSON(message: _139.Params): unknown;
                fromPartial(object: Partial<_139.Params>): _139.Params;
            };
            GenesisState: {
                encode(message: _138.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _138.GenesisState;
                fromJSON(object: any): _138.GenesisState;
                toJSON(message: _138.GenesisState): unknown;
                fromPartial(object: Partial<_138.GenesisState>): _138.GenesisState;
            };
        };
        const v1beta1: {
            LCDQueryClient: typeof _395.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    submitProposal(value: _149.MsgSubmitProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    vote(value: _149.MsgVote): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    voteWeighted(value: _149.MsgVoteWeighted): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    deposit(value: _149.MsgDeposit): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitProposal(value: _149.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _149.MsgSubmitProposal;
                    };
                    vote(value: _149.MsgVote): {
                        typeUrl: string;
                        value: _149.MsgVote;
                    };
                    voteWeighted(value: _149.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _149.MsgVoteWeighted;
                    };
                    deposit(value: _149.MsgDeposit): {
                        typeUrl: string;
                        value: _149.MsgDeposit;
                    };
                };
                toJSON: {
                    submitProposal(value: _149.MsgSubmitProposal): {
                        typeUrl: string;
                        value: unknown;
                    };
                    vote(value: _149.MsgVote): {
                        typeUrl: string;
                        value: unknown;
                    };
                    voteWeighted(value: _149.MsgVoteWeighted): {
                        typeUrl: string;
                        value: unknown;
                    };
                    deposit(value: _149.MsgDeposit): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    submitProposal(value: any): {
                        typeUrl: string;
                        value: _149.MsgSubmitProposal;
                    };
                    vote(value: any): {
                        typeUrl: string;
                        value: _149.MsgVote;
                    };
                    voteWeighted(value: any): {
                        typeUrl: string;
                        value: _149.MsgVoteWeighted;
                    };
                    deposit(value: any): {
                        typeUrl: string;
                        value: _149.MsgDeposit;
                    };
                };
                fromPartial: {
                    submitProposal(value: _149.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _149.MsgSubmitProposal;
                    };
                    vote(value: _149.MsgVote): {
                        typeUrl: string;
                        value: _149.MsgVote;
                    };
                    voteWeighted(value: _149.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _149.MsgVoteWeighted;
                    };
                    deposit(value: _149.MsgDeposit): {
                        typeUrl: string;
                        value: _149.MsgDeposit;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.gov.v1beta1.MsgSubmitProposal": {
                    aminoType: string;
                    toAmino: ({ content, initialDeposit, proposer }: _149.MsgSubmitProposal) => {
                        content: {
                            type_url: string;
                            value: Uint8Array;
                        };
                        initial_deposit: {
                            denom: string;
                            amount: string;
                        }[];
                        proposer: string;
                    };
                    fromAmino: ({ content, initial_deposit, proposer }: {
                        content: {
                            type_url: string;
                            value: Uint8Array;
                        };
                        initial_deposit: {
                            denom: string;
                            amount: string;
                        }[];
                        proposer: string;
                    }) => _149.MsgSubmitProposal;
                };
                "/cosmos.gov.v1beta1.MsgVote": {
                    aminoType: string;
                    toAmino: ({ proposalId, voter, option }: _149.MsgVote) => {
                        proposal_id: string;
                        voter: string;
                        option: number;
                    };
                    fromAmino: ({ proposal_id, voter, option }: {
                        proposal_id: string;
                        voter: string;
                        option: number;
                    }) => _149.MsgVote;
                };
                "/cosmos.gov.v1beta1.MsgVoteWeighted": {
                    aminoType: string;
                    toAmino: ({ proposalId, voter, options }: _149.MsgVoteWeighted) => {
                        proposal_id: string;
                        voter: string;
                        options: {
                            option: number;
                            weight: string;
                        }[];
                    };
                    fromAmino: ({ proposal_id, voter, options }: {
                        proposal_id: string;
                        voter: string;
                        options: {
                            option: number;
                            weight: string;
                        }[];
                    }) => _149.MsgVoteWeighted;
                };
                "/cosmos.gov.v1beta1.MsgDeposit": {
                    aminoType: string;
                    toAmino: ({ proposalId, depositor, amount }: _149.MsgDeposit) => {
                        proposal_id: string;
                        depositor: string;
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                    };
                    fromAmino: ({ proposal_id, depositor, amount }: {
                        proposal_id: string;
                        depositor: string;
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                    }) => _149.MsgDeposit;
                };
            };
            MsgSubmitProposal: {
                encode(message: _149.MsgSubmitProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _149.MsgSubmitProposal;
                fromJSON(object: any): _149.MsgSubmitProposal;
                toJSON(message: _149.MsgSubmitProposal): unknown;
                fromPartial(object: Partial<_149.MsgSubmitProposal>): _149.MsgSubmitProposal;
            };
            MsgSubmitProposalResponse: {
                encode(message: _149.MsgSubmitProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _149.MsgSubmitProposalResponse;
                fromJSON(object: any): _149.MsgSubmitProposalResponse;
                toJSON(message: _149.MsgSubmitProposalResponse): unknown;
                fromPartial(object: Partial<_149.MsgSubmitProposalResponse>): _149.MsgSubmitProposalResponse;
            };
            MsgVote: {
                encode(message: _149.MsgVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _149.MsgVote;
                fromJSON(object: any): _149.MsgVote;
                toJSON(message: _149.MsgVote): unknown;
                fromPartial(object: Partial<_149.MsgVote>): _149.MsgVote;
            };
            MsgVoteResponse: {
                encode(_: _149.MsgVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _149.MsgVoteResponse;
                fromJSON(_: any): _149.MsgVoteResponse;
                toJSON(_: _149.MsgVoteResponse): unknown;
                fromPartial(_: Partial<_149.MsgVoteResponse>): _149.MsgVoteResponse;
            };
            MsgVoteWeighted: {
                encode(message: _149.MsgVoteWeighted, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _149.MsgVoteWeighted;
                fromJSON(object: any): _149.MsgVoteWeighted;
                toJSON(message: _149.MsgVoteWeighted): unknown;
                fromPartial(object: Partial<_149.MsgVoteWeighted>): _149.MsgVoteWeighted;
            };
            MsgVoteWeightedResponse: {
                encode(_: _149.MsgVoteWeightedResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _149.MsgVoteWeightedResponse;
                fromJSON(_: any): _149.MsgVoteWeightedResponse;
                toJSON(_: _149.MsgVoteWeightedResponse): unknown;
                fromPartial(_: Partial<_149.MsgVoteWeightedResponse>): _149.MsgVoteWeightedResponse;
            };
            MsgDeposit: {
                encode(message: _149.MsgDeposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _149.MsgDeposit;
                fromJSON(object: any): _149.MsgDeposit;
                toJSON(message: _149.MsgDeposit): unknown;
                fromPartial(object: Partial<_149.MsgDeposit>): _149.MsgDeposit;
            };
            MsgDepositResponse: {
                encode(_: _149.MsgDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _149.MsgDepositResponse;
                fromJSON(_: any): _149.MsgDepositResponse;
                toJSON(_: _149.MsgDepositResponse): unknown;
                fromPartial(_: Partial<_149.MsgDepositResponse>): _149.MsgDepositResponse;
            };
            QueryProposalRequest: {
                encode(message: _148.QueryProposalRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _148.QueryProposalRequest;
                fromJSON(object: any): _148.QueryProposalRequest;
                toJSON(message: _148.QueryProposalRequest): unknown;
                fromPartial(object: Partial<_148.QueryProposalRequest>): _148.QueryProposalRequest;
            };
            QueryProposalResponse: {
                encode(message: _148.QueryProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _148.QueryProposalResponse;
                fromJSON(object: any): _148.QueryProposalResponse;
                toJSON(message: _148.QueryProposalResponse): unknown;
                fromPartial(object: Partial<_148.QueryProposalResponse>): _148.QueryProposalResponse;
            };
            QueryProposalsRequest: {
                encode(message: _148.QueryProposalsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _148.QueryProposalsRequest;
                fromJSON(object: any): _148.QueryProposalsRequest;
                toJSON(message: _148.QueryProposalsRequest): unknown;
                fromPartial(object: Partial<_148.QueryProposalsRequest>): _148.QueryProposalsRequest;
            };
            QueryProposalsResponse: {
                encode(message: _148.QueryProposalsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _148.QueryProposalsResponse;
                fromJSON(object: any): _148.QueryProposalsResponse;
                toJSON(message: _148.QueryProposalsResponse): unknown;
                fromPartial(object: Partial<_148.QueryProposalsResponse>): _148.QueryProposalsResponse;
            };
            QueryVoteRequest: {
                encode(message: _148.QueryVoteRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _148.QueryVoteRequest;
                fromJSON(object: any): _148.QueryVoteRequest;
                toJSON(message: _148.QueryVoteRequest): unknown;
                fromPartial(object: Partial<_148.QueryVoteRequest>): _148.QueryVoteRequest;
            };
            QueryVoteResponse: {
                encode(message: _148.QueryVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _148.QueryVoteResponse;
                fromJSON(object: any): _148.QueryVoteResponse;
                toJSON(message: _148.QueryVoteResponse): unknown;
                fromPartial(object: Partial<_148.QueryVoteResponse>): _148.QueryVoteResponse;
            };
            QueryVotesRequest: {
                encode(message: _148.QueryVotesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _148.QueryVotesRequest;
                fromJSON(object: any): _148.QueryVotesRequest;
                toJSON(message: _148.QueryVotesRequest): unknown;
                fromPartial(object: Partial<_148.QueryVotesRequest>): _148.QueryVotesRequest;
            };
            QueryVotesResponse: {
                encode(message: _148.QueryVotesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _148.QueryVotesResponse;
                fromJSON(object: any): _148.QueryVotesResponse;
                toJSON(message: _148.QueryVotesResponse): unknown;
                fromPartial(object: Partial<_148.QueryVotesResponse>): _148.QueryVotesResponse;
            };
            QueryParamsRequest: {
                encode(message: _148.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _148.QueryParamsRequest;
                fromJSON(object: any): _148.QueryParamsRequest;
                toJSON(message: _148.QueryParamsRequest): unknown;
                fromPartial(object: Partial<_148.QueryParamsRequest>): _148.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _148.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _148.QueryParamsResponse;
                fromJSON(object: any): _148.QueryParamsResponse;
                toJSON(message: _148.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_148.QueryParamsResponse>): _148.QueryParamsResponse;
            };
            QueryDepositRequest: {
                encode(message: _148.QueryDepositRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _148.QueryDepositRequest;
                fromJSON(object: any): _148.QueryDepositRequest;
                toJSON(message: _148.QueryDepositRequest): unknown;
                fromPartial(object: Partial<_148.QueryDepositRequest>): _148.QueryDepositRequest;
            };
            QueryDepositResponse: {
                encode(message: _148.QueryDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _148.QueryDepositResponse;
                fromJSON(object: any): _148.QueryDepositResponse;
                toJSON(message: _148.QueryDepositResponse): unknown;
                fromPartial(object: Partial<_148.QueryDepositResponse>): _148.QueryDepositResponse;
            };
            QueryDepositsRequest: {
                encode(message: _148.QueryDepositsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _148.QueryDepositsRequest;
                fromJSON(object: any): _148.QueryDepositsRequest;
                toJSON(message: _148.QueryDepositsRequest): unknown;
                fromPartial(object: Partial<_148.QueryDepositsRequest>): _148.QueryDepositsRequest;
            };
            QueryDepositsResponse: {
                encode(message: _148.QueryDepositsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _148.QueryDepositsResponse;
                fromJSON(object: any): _148.QueryDepositsResponse;
                toJSON(message: _148.QueryDepositsResponse): unknown;
                fromPartial(object: Partial<_148.QueryDepositsResponse>): _148.QueryDepositsResponse;
            };
            QueryTallyResultRequest: {
                encode(message: _148.QueryTallyResultRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _148.QueryTallyResultRequest;
                fromJSON(object: any): _148.QueryTallyResultRequest;
                toJSON(message: _148.QueryTallyResultRequest): unknown;
                fromPartial(object: Partial<_148.QueryTallyResultRequest>): _148.QueryTallyResultRequest;
            };
            QueryTallyResultResponse: {
                encode(message: _148.QueryTallyResultResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _148.QueryTallyResultResponse;
                fromJSON(object: any): _148.QueryTallyResultResponse;
                toJSON(message: _148.QueryTallyResultResponse): unknown;
                fromPartial(object: Partial<_148.QueryTallyResultResponse>): _148.QueryTallyResultResponse;
            };
            voteOptionFromJSON(object: any): _147.VoteOption;
            voteOptionToJSON(object: _147.VoteOption): string;
            proposalStatusFromJSON(object: any): _147.ProposalStatus;
            proposalStatusToJSON(object: _147.ProposalStatus): string;
            VoteOption: typeof _147.VoteOption;
            VoteOptionSDKType: typeof _147.VoteOptionSDKType;
            ProposalStatus: typeof _147.ProposalStatus;
            ProposalStatusSDKType: typeof _147.ProposalStatusSDKType;
            WeightedVoteOption: {
                encode(message: _147.WeightedVoteOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _147.WeightedVoteOption;
                fromJSON(object: any): _147.WeightedVoteOption;
                toJSON(message: _147.WeightedVoteOption): unknown;
                fromPartial(object: Partial<_147.WeightedVoteOption>): _147.WeightedVoteOption;
            };
            TextProposal: {
                encode(message: _147.TextProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _147.TextProposal;
                fromJSON(object: any): _147.TextProposal;
                toJSON(message: _147.TextProposal): unknown;
                fromPartial(object: Partial<_147.TextProposal>): _147.TextProposal;
            };
            Deposit: {
                encode(message: _147.Deposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _147.Deposit;
                fromJSON(object: any): _147.Deposit;
                toJSON(message: _147.Deposit): unknown;
                fromPartial(object: Partial<_147.Deposit>): _147.Deposit;
            };
            Proposal: {
                encode(message: _147.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _147.Proposal;
                fromJSON(object: any): _147.Proposal;
                toJSON(message: _147.Proposal): unknown;
                fromPartial(object: Partial<_147.Proposal>): _147.Proposal;
            };
            TallyResult: {
                encode(message: _147.TallyResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _147.TallyResult;
                fromJSON(object: any): _147.TallyResult;
                toJSON(message: _147.TallyResult): unknown;
                fromPartial(object: Partial<_147.TallyResult>): _147.TallyResult;
            };
            Vote: {
                encode(message: _147.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _147.Vote;
                fromJSON(object: any): _147.Vote;
                toJSON(message: _147.Vote): unknown;
                fromPartial(object: Partial<_147.Vote>): _147.Vote;
            };
            DepositParams: {
                encode(message: _147.DepositParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _147.DepositParams;
                fromJSON(object: any): _147.DepositParams;
                toJSON(message: _147.DepositParams): unknown;
                fromPartial(object: Partial<_147.DepositParams>): _147.DepositParams;
            };
            VotingParams: {
                encode(message: _147.VotingParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _147.VotingParams;
                fromJSON(object: any): _147.VotingParams;
                toJSON(message: _147.VotingParams): unknown;
                fromPartial(object: Partial<_147.VotingParams>): _147.VotingParams;
            };
            TallyParams: {
                encode(message: _147.TallyParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _147.TallyParams;
                fromJSON(object: any): _147.TallyParams;
                toJSON(message: _147.TallyParams): unknown;
                fromPartial(object: Partial<_147.TallyParams>): _147.TallyParams;
            };
            GenesisState: {
                encode(message: _146.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _146.GenesisState;
                fromJSON(object: any): _146.GenesisState;
                toJSON(message: _146.GenesisState): unknown;
                fromPartial(object: Partial<_146.GenesisState>): _146.GenesisState;
            };
        };
    }
    namespace group {
        namespace module {
            const v1: {
                Module: {
                    encode(message: _151.Module, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _151.Module;
                    fromJSON(object: any): _151.Module;
                    toJSON(message: _151.Module): unknown;
                    fromPartial(object: Partial<_151.Module>): _151.Module;
                };
            };
        }
        const v1: {
            LCDQueryClient: typeof _396.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createGroup(value: _160.MsgCreateGroup): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupMembers(value: _160.MsgUpdateGroupMembers): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupAdmin(value: _160.MsgUpdateGroupAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupMetadata(value: _160.MsgUpdateGroupMetadata): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createGroupPolicy(value: _160.MsgCreateGroupPolicy): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createGroupWithPolicy(value: _160.MsgCreateGroupWithPolicy): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupPolicyAdmin(value: _160.MsgUpdateGroupPolicyAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupPolicyDecisionPolicy(value: _160.MsgUpdateGroupPolicyDecisionPolicy): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupPolicyMetadata(value: _160.MsgUpdateGroupPolicyMetadata): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    submitProposal(value: _160.MsgSubmitProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawProposal(value: _160.MsgWithdrawProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    vote(value: _160.MsgVote): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    exec(value: _160.MsgExec): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    leaveGroup(value: _160.MsgLeaveGroup): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createGroup(value: _160.MsgCreateGroup): {
                        typeUrl: string;
                        value: _160.MsgCreateGroup;
                    };
                    updateGroupMembers(value: _160.MsgUpdateGroupMembers): {
                        typeUrl: string;
                        value: _160.MsgUpdateGroupMembers;
                    };
                    updateGroupAdmin(value: _160.MsgUpdateGroupAdmin): {
                        typeUrl: string;
                        value: _160.MsgUpdateGroupAdmin;
                    };
                    updateGroupMetadata(value: _160.MsgUpdateGroupMetadata): {
                        typeUrl: string;
                        value: _160.MsgUpdateGroupMetadata;
                    };
                    createGroupPolicy(value: _160.MsgCreateGroupPolicy): {
                        typeUrl: string;
                        value: _160.MsgCreateGroupPolicy;
                    };
                    createGroupWithPolicy(value: _160.MsgCreateGroupWithPolicy): {
                        typeUrl: string;
                        value: _160.MsgCreateGroupWithPolicy;
                    };
                    updateGroupPolicyAdmin(value: _160.MsgUpdateGroupPolicyAdmin): {
                        typeUrl: string;
                        value: _160.MsgUpdateGroupPolicyAdmin;
                    };
                    updateGroupPolicyDecisionPolicy(value: _160.MsgUpdateGroupPolicyDecisionPolicy): {
                        typeUrl: string;
                        value: _160.MsgUpdateGroupPolicyDecisionPolicy;
                    };
                    updateGroupPolicyMetadata(value: _160.MsgUpdateGroupPolicyMetadata): {
                        typeUrl: string;
                        value: _160.MsgUpdateGroupPolicyMetadata;
                    };
                    submitProposal(value: _160.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _160.MsgSubmitProposal;
                    };
                    withdrawProposal(value: _160.MsgWithdrawProposal): {
                        typeUrl: string;
                        value: _160.MsgWithdrawProposal;
                    };
                    vote(value: _160.MsgVote): {
                        typeUrl: string;
                        value: _160.MsgVote;
                    };
                    exec(value: _160.MsgExec): {
                        typeUrl: string;
                        value: _160.MsgExec;
                    };
                    leaveGroup(value: _160.MsgLeaveGroup): {
                        typeUrl: string;
                        value: _160.MsgLeaveGroup;
                    };
                };
                toJSON: {
                    createGroup(value: _160.MsgCreateGroup): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateGroupMembers(value: _160.MsgUpdateGroupMembers): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateGroupAdmin(value: _160.MsgUpdateGroupAdmin): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateGroupMetadata(value: _160.MsgUpdateGroupMetadata): {
                        typeUrl: string;
                        value: unknown;
                    };
                    createGroupPolicy(value: _160.MsgCreateGroupPolicy): {
                        typeUrl: string;
                        value: unknown;
                    };
                    createGroupWithPolicy(value: _160.MsgCreateGroupWithPolicy): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateGroupPolicyAdmin(value: _160.MsgUpdateGroupPolicyAdmin): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateGroupPolicyDecisionPolicy(value: _160.MsgUpdateGroupPolicyDecisionPolicy): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateGroupPolicyMetadata(value: _160.MsgUpdateGroupPolicyMetadata): {
                        typeUrl: string;
                        value: unknown;
                    };
                    submitProposal(value: _160.MsgSubmitProposal): {
                        typeUrl: string;
                        value: unknown;
                    };
                    withdrawProposal(value: _160.MsgWithdrawProposal): {
                        typeUrl: string;
                        value: unknown;
                    };
                    vote(value: _160.MsgVote): {
                        typeUrl: string;
                        value: unknown;
                    };
                    exec(value: _160.MsgExec): {
                        typeUrl: string;
                        value: unknown;
                    };
                    leaveGroup(value: _160.MsgLeaveGroup): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    createGroup(value: any): {
                        typeUrl: string;
                        value: _160.MsgCreateGroup;
                    };
                    updateGroupMembers(value: any): {
                        typeUrl: string;
                        value: _160.MsgUpdateGroupMembers;
                    };
                    updateGroupAdmin(value: any): {
                        typeUrl: string;
                        value: _160.MsgUpdateGroupAdmin;
                    };
                    updateGroupMetadata(value: any): {
                        typeUrl: string;
                        value: _160.MsgUpdateGroupMetadata;
                    };
                    createGroupPolicy(value: any): {
                        typeUrl: string;
                        value: _160.MsgCreateGroupPolicy;
                    };
                    createGroupWithPolicy(value: any): {
                        typeUrl: string;
                        value: _160.MsgCreateGroupWithPolicy;
                    };
                    updateGroupPolicyAdmin(value: any): {
                        typeUrl: string;
                        value: _160.MsgUpdateGroupPolicyAdmin;
                    };
                    updateGroupPolicyDecisionPolicy(value: any): {
                        typeUrl: string;
                        value: _160.MsgUpdateGroupPolicyDecisionPolicy;
                    };
                    updateGroupPolicyMetadata(value: any): {
                        typeUrl: string;
                        value: _160.MsgUpdateGroupPolicyMetadata;
                    };
                    submitProposal(value: any): {
                        typeUrl: string;
                        value: _160.MsgSubmitProposal;
                    };
                    withdrawProposal(value: any): {
                        typeUrl: string;
                        value: _160.MsgWithdrawProposal;
                    };
                    vote(value: any): {
                        typeUrl: string;
                        value: _160.MsgVote;
                    };
                    exec(value: any): {
                        typeUrl: string;
                        value: _160.MsgExec;
                    };
                    leaveGroup(value: any): {
                        typeUrl: string;
                        value: _160.MsgLeaveGroup;
                    };
                };
                fromPartial: {
                    createGroup(value: _160.MsgCreateGroup): {
                        typeUrl: string;
                        value: _160.MsgCreateGroup;
                    };
                    updateGroupMembers(value: _160.MsgUpdateGroupMembers): {
                        typeUrl: string;
                        value: _160.MsgUpdateGroupMembers;
                    };
                    updateGroupAdmin(value: _160.MsgUpdateGroupAdmin): {
                        typeUrl: string;
                        value: _160.MsgUpdateGroupAdmin;
                    };
                    updateGroupMetadata(value: _160.MsgUpdateGroupMetadata): {
                        typeUrl: string;
                        value: _160.MsgUpdateGroupMetadata;
                    };
                    createGroupPolicy(value: _160.MsgCreateGroupPolicy): {
                        typeUrl: string;
                        value: _160.MsgCreateGroupPolicy;
                    };
                    createGroupWithPolicy(value: _160.MsgCreateGroupWithPolicy): {
                        typeUrl: string;
                        value: _160.MsgCreateGroupWithPolicy;
                    };
                    updateGroupPolicyAdmin(value: _160.MsgUpdateGroupPolicyAdmin): {
                        typeUrl: string;
                        value: _160.MsgUpdateGroupPolicyAdmin;
                    };
                    updateGroupPolicyDecisionPolicy(value: _160.MsgUpdateGroupPolicyDecisionPolicy): {
                        typeUrl: string;
                        value: _160.MsgUpdateGroupPolicyDecisionPolicy;
                    };
                    updateGroupPolicyMetadata(value: _160.MsgUpdateGroupPolicyMetadata): {
                        typeUrl: string;
                        value: _160.MsgUpdateGroupPolicyMetadata;
                    };
                    submitProposal(value: _160.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _160.MsgSubmitProposal;
                    };
                    withdrawProposal(value: _160.MsgWithdrawProposal): {
                        typeUrl: string;
                        value: _160.MsgWithdrawProposal;
                    };
                    vote(value: _160.MsgVote): {
                        typeUrl: string;
                        value: _160.MsgVote;
                    };
                    exec(value: _160.MsgExec): {
                        typeUrl: string;
                        value: _160.MsgExec;
                    };
                    leaveGroup(value: _160.MsgLeaveGroup): {
                        typeUrl: string;
                        value: _160.MsgLeaveGroup;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.group.v1.MsgCreateGroup": {
                    aminoType: string;
                    toAmino: ({ admin, members, metadata }: _160.MsgCreateGroup) => {
                        admin: string;
                        members: {
                            address: string;
                            weight: string;
                            metadata: string;
                        }[];
                        metadata: string;
                    };
                    fromAmino: ({ admin, members, metadata }: {
                        admin: string;
                        members: {
                            address: string;
                            weight: string;
                            metadata: string;
                        }[];
                        metadata: string;
                    }) => _160.MsgCreateGroup;
                };
                "/cosmos.group.v1.MsgUpdateGroupMembers": {
                    aminoType: string;
                    toAmino: ({ admin, groupId, memberUpdates }: _160.MsgUpdateGroupMembers) => {
                        admin: string;
                        group_id: string;
                        member_updates: {
                            address: string;
                            weight: string;
                            metadata: string;
                        }[];
                    };
                    fromAmino: ({ admin, group_id, member_updates }: {
                        admin: string;
                        group_id: string;
                        member_updates: {
                            address: string;
                            weight: string;
                            metadata: string;
                        }[];
                    }) => _160.MsgUpdateGroupMembers;
                };
                "/cosmos.group.v1.MsgUpdateGroupAdmin": {
                    aminoType: string;
                    toAmino: ({ admin, groupId, newAdmin }: _160.MsgUpdateGroupAdmin) => {
                        admin: string;
                        group_id: string;
                        new_admin: string;
                    };
                    fromAmino: ({ admin, group_id, new_admin }: {
                        admin: string;
                        group_id: string;
                        new_admin: string;
                    }) => _160.MsgUpdateGroupAdmin;
                };
                "/cosmos.group.v1.MsgUpdateGroupMetadata": {
                    aminoType: string;
                    toAmino: ({ admin, groupId, metadata }: _160.MsgUpdateGroupMetadata) => {
                        admin: string;
                        group_id: string;
                        metadata: string;
                    };
                    fromAmino: ({ admin, group_id, metadata }: {
                        admin: string;
                        group_id: string;
                        metadata: string;
                    }) => _160.MsgUpdateGroupMetadata;
                };
                "/cosmos.group.v1.MsgCreateGroupPolicy": {
                    aminoType: string;
                    toAmino: ({ admin, groupId, metadata, decisionPolicy }: _160.MsgCreateGroupPolicy) => {
                        admin: string;
                        group_id: string;
                        metadata: string;
                        decision_policy: {
                            type_url: string;
                            value: Uint8Array;
                        };
                    };
                    fromAmino: ({ admin, group_id, metadata, decision_policy }: {
                        admin: string;
                        group_id: string;
                        metadata: string;
                        decision_policy: {
                            type_url: string;
                            value: Uint8Array;
                        };
                    }) => _160.MsgCreateGroupPolicy;
                };
                "/cosmos.group.v1.MsgCreateGroupWithPolicy": {
                    aminoType: string;
                    toAmino: ({ admin, members, groupMetadata, groupPolicyMetadata, groupPolicyAsAdmin, decisionPolicy }: _160.MsgCreateGroupWithPolicy) => {
                        admin: string;
                        members: {
                            address: string;
                            weight: string;
                            metadata: string;
                        }[];
                        group_metadata: string;
                        group_policy_metadata: string;
                        group_policy_as_admin: boolean;
                        decision_policy: {
                            type_url: string;
                            value: Uint8Array;
                        };
                    };
                    fromAmino: ({ admin, members, group_metadata, group_policy_metadata, group_policy_as_admin, decision_policy }: {
                        admin: string;
                        members: {
                            address: string;
                            weight: string;
                            metadata: string;
                        }[];
                        group_metadata: string;
                        group_policy_metadata: string;
                        group_policy_as_admin: boolean;
                        decision_policy: {
                            type_url: string;
                            value: Uint8Array;
                        };
                    }) => _160.MsgCreateGroupWithPolicy;
                };
                "/cosmos.group.v1.MsgUpdateGroupPolicyAdmin": {
                    aminoType: string;
                    toAmino: ({ admin, groupPolicyAddress, newAdmin }: _160.MsgUpdateGroupPolicyAdmin) => {
                        admin: string;
                        group_policy_address: string;
                        new_admin: string;
                    };
                    fromAmino: ({ admin, group_policy_address, new_admin }: {
                        admin: string;
                        group_policy_address: string;
                        new_admin: string;
                    }) => _160.MsgUpdateGroupPolicyAdmin;
                };
                "/cosmos.group.v1.MsgUpdateGroupPolicyDecisionPolicy": {
                    aminoType: string;
                    toAmino: ({ admin, groupPolicyAddress, decisionPolicy }: _160.MsgUpdateGroupPolicyDecisionPolicy) => {
                        admin: string;
                        group_policy_address: string;
                        decision_policy: {
                            type_url: string;
                            value: Uint8Array;
                        };
                    };
                    fromAmino: ({ admin, group_policy_address, decision_policy }: {
                        admin: string;
                        group_policy_address: string;
                        decision_policy: {
                            type_url: string;
                            value: Uint8Array;
                        };
                    }) => _160.MsgUpdateGroupPolicyDecisionPolicy;
                };
                "/cosmos.group.v1.MsgUpdateGroupPolicyMetadata": {
                    aminoType: string;
                    toAmino: ({ admin, groupPolicyAddress, metadata }: _160.MsgUpdateGroupPolicyMetadata) => {
                        admin: string;
                        group_policy_address: string;
                        metadata: string;
                    };
                    fromAmino: ({ admin, group_policy_address, metadata }: {
                        admin: string;
                        group_policy_address: string;
                        metadata: string;
                    }) => _160.MsgUpdateGroupPolicyMetadata;
                };
                "/cosmos.group.v1.MsgSubmitProposal": {
                    aminoType: string;
                    toAmino: ({ groupPolicyAddress, proposers, metadata, messages, exec, title, summary }: _160.MsgSubmitProposal) => {
                        group_policy_address: string;
                        proposers: string[];
                        metadata: string;
                        messages: {
                            type_url: string;
                            value: Uint8Array;
                        }[];
                        exec: number;
                        title: string;
                        summary: string;
                    };
                    fromAmino: ({ group_policy_address, proposers, metadata, messages, exec, title, summary }: {
                        group_policy_address: string;
                        proposers: string[];
                        metadata: string;
                        messages: {
                            type_url: string;
                            value: Uint8Array;
                        }[];
                        exec: number;
                        title: string;
                        summary: string;
                    }) => _160.MsgSubmitProposal;
                };
                "/cosmos.group.v1.MsgWithdrawProposal": {
                    aminoType: string;
                    toAmino: ({ proposalId, address }: _160.MsgWithdrawProposal) => {
                        proposal_id: string;
                        address: string;
                    };
                    fromAmino: ({ proposal_id, address }: {
                        proposal_id: string;
                        address: string;
                    }) => _160.MsgWithdrawProposal;
                };
                "/cosmos.group.v1.MsgVote": {
                    aminoType: string;
                    toAmino: ({ proposalId, voter, option, metadata, exec }: _160.MsgVote) => {
                        proposal_id: string;
                        voter: string;
                        option: number;
                        metadata: string;
                        exec: number;
                    };
                    fromAmino: ({ proposal_id, voter, option, metadata, exec }: {
                        proposal_id: string;
                        voter: string;
                        option: number;
                        metadata: string;
                        exec: number;
                    }) => _160.MsgVote;
                };
                "/cosmos.group.v1.MsgExec": {
                    aminoType: string;
                    toAmino: ({ proposalId, executor }: _160.MsgExec) => {
                        proposal_id: string;
                        executor: string;
                    };
                    fromAmino: ({ proposal_id, executor }: {
                        proposal_id: string;
                        executor: string;
                    }) => _160.MsgExec;
                };
                "/cosmos.group.v1.MsgLeaveGroup": {
                    aminoType: string;
                    toAmino: ({ address, groupId }: _160.MsgLeaveGroup) => {
                        address: string;
                        group_id: string;
                    };
                    fromAmino: ({ address, group_id }: {
                        address: string;
                        group_id: string;
                    }) => _160.MsgLeaveGroup;
                };
            };
            voteOptionFromJSON(object: any): _161.VoteOption;
            voteOptionToJSON(object: _161.VoteOption): string;
            proposalStatusFromJSON(object: any): _161.ProposalStatus;
            proposalStatusToJSON(object: _161.ProposalStatus): string;
            proposalExecutorResultFromJSON(object: any): _161.ProposalExecutorResult;
            proposalExecutorResultToJSON(object: _161.ProposalExecutorResult): string;
            VoteOption: typeof _161.VoteOption;
            VoteOptionSDKType: typeof _161.VoteOptionSDKType;
            ProposalStatus: typeof _161.ProposalStatus;
            ProposalStatusSDKType: typeof _161.ProposalStatusSDKType;
            ProposalExecutorResult: typeof _161.ProposalExecutorResult;
            ProposalExecutorResultSDKType: typeof _161.ProposalExecutorResultSDKType;
            Member: {
                encode(message: _161.Member, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _161.Member;
                fromJSON(object: any): _161.Member;
                toJSON(message: _161.Member): unknown;
                fromPartial(object: Partial<_161.Member>): _161.Member;
            };
            MemberRequest: {
                encode(message: _161.MemberRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _161.MemberRequest;
                fromJSON(object: any): _161.MemberRequest;
                toJSON(message: _161.MemberRequest): unknown;
                fromPartial(object: Partial<_161.MemberRequest>): _161.MemberRequest;
            };
            ThresholdDecisionPolicy: {
                encode(message: _161.ThresholdDecisionPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _161.ThresholdDecisionPolicy;
                fromJSON(object: any): _161.ThresholdDecisionPolicy;
                toJSON(message: _161.ThresholdDecisionPolicy): unknown;
                fromPartial(object: Partial<_161.ThresholdDecisionPolicy>): _161.ThresholdDecisionPolicy;
            };
            PercentageDecisionPolicy: {
                encode(message: _161.PercentageDecisionPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _161.PercentageDecisionPolicy;
                fromJSON(object: any): _161.PercentageDecisionPolicy;
                toJSON(message: _161.PercentageDecisionPolicy): unknown;
                fromPartial(object: Partial<_161.PercentageDecisionPolicy>): _161.PercentageDecisionPolicy;
            };
            DecisionPolicyWindows: {
                encode(message: _161.DecisionPolicyWindows, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _161.DecisionPolicyWindows;
                fromJSON(object: any): _161.DecisionPolicyWindows;
                toJSON(message: _161.DecisionPolicyWindows): unknown;
                fromPartial(object: Partial<_161.DecisionPolicyWindows>): _161.DecisionPolicyWindows;
            };
            GroupInfo: {
                encode(message: _161.GroupInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _161.GroupInfo;
                fromJSON(object: any): _161.GroupInfo;
                toJSON(message: _161.GroupInfo): unknown;
                fromPartial(object: Partial<_161.GroupInfo>): _161.GroupInfo;
            };
            GroupMember: {
                encode(message: _161.GroupMember, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _161.GroupMember;
                fromJSON(object: any): _161.GroupMember;
                toJSON(message: _161.GroupMember): unknown;
                fromPartial(object: Partial<_161.GroupMember>): _161.GroupMember;
            };
            GroupPolicyInfo: {
                encode(message: _161.GroupPolicyInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _161.GroupPolicyInfo;
                fromJSON(object: any): _161.GroupPolicyInfo;
                toJSON(message: _161.GroupPolicyInfo): unknown;
                fromPartial(object: Partial<_161.GroupPolicyInfo>): _161.GroupPolicyInfo;
            };
            Proposal: {
                encode(message: _161.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _161.Proposal;
                fromJSON(object: any): _161.Proposal;
                toJSON(message: _161.Proposal): unknown;
                fromPartial(object: Partial<_161.Proposal>): _161.Proposal;
            };
            TallyResult: {
                encode(message: _161.TallyResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _161.TallyResult;
                fromJSON(object: any): _161.TallyResult;
                toJSON(message: _161.TallyResult): unknown;
                fromPartial(object: Partial<_161.TallyResult>): _161.TallyResult;
            };
            Vote: {
                encode(message: _161.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _161.Vote;
                fromJSON(object: any): _161.Vote;
                toJSON(message: _161.Vote): unknown;
                fromPartial(object: Partial<_161.Vote>): _161.Vote;
            };
            execFromJSON(object: any): _160.Exec;
            execToJSON(object: _160.Exec): string;
            Exec: typeof _160.Exec;
            ExecSDKType: typeof _160.ExecSDKType;
            MsgCreateGroup: {
                encode(message: _160.MsgCreateGroup, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _160.MsgCreateGroup;
                fromJSON(object: any): _160.MsgCreateGroup;
                toJSON(message: _160.MsgCreateGroup): unknown;
                fromPartial(object: Partial<_160.MsgCreateGroup>): _160.MsgCreateGroup;
            };
            MsgCreateGroupResponse: {
                encode(message: _160.MsgCreateGroupResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _160.MsgCreateGroupResponse;
                fromJSON(object: any): _160.MsgCreateGroupResponse;
                toJSON(message: _160.MsgCreateGroupResponse): unknown;
                fromPartial(object: Partial<_160.MsgCreateGroupResponse>): _160.MsgCreateGroupResponse;
            };
            MsgUpdateGroupMembers: {
                encode(message: _160.MsgUpdateGroupMembers, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _160.MsgUpdateGroupMembers;
                fromJSON(object: any): _160.MsgUpdateGroupMembers;
                toJSON(message: _160.MsgUpdateGroupMembers): unknown;
                fromPartial(object: Partial<_160.MsgUpdateGroupMembers>): _160.MsgUpdateGroupMembers;
            };
            MsgUpdateGroupMembersResponse: {
                encode(_: _160.MsgUpdateGroupMembersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _160.MsgUpdateGroupMembersResponse;
                fromJSON(_: any): _160.MsgUpdateGroupMembersResponse;
                toJSON(_: _160.MsgUpdateGroupMembersResponse): unknown;
                fromPartial(_: Partial<_160.MsgUpdateGroupMembersResponse>): _160.MsgUpdateGroupMembersResponse;
            };
            MsgUpdateGroupAdmin: {
                encode(message: _160.MsgUpdateGroupAdmin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _160.MsgUpdateGroupAdmin;
                fromJSON(object: any): _160.MsgUpdateGroupAdmin;
                toJSON(message: _160.MsgUpdateGroupAdmin): unknown;
                fromPartial(object: Partial<_160.MsgUpdateGroupAdmin>): _160.MsgUpdateGroupAdmin;
            };
            MsgUpdateGroupAdminResponse: {
                encode(_: _160.MsgUpdateGroupAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _160.MsgUpdateGroupAdminResponse;
                fromJSON(_: any): _160.MsgUpdateGroupAdminResponse;
                toJSON(_: _160.MsgUpdateGroupAdminResponse): unknown;
                fromPartial(_: Partial<_160.MsgUpdateGroupAdminResponse>): _160.MsgUpdateGroupAdminResponse;
            };
            MsgUpdateGroupMetadata: {
                encode(message: _160.MsgUpdateGroupMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _160.MsgUpdateGroupMetadata;
                fromJSON(object: any): _160.MsgUpdateGroupMetadata;
                toJSON(message: _160.MsgUpdateGroupMetadata): unknown;
                fromPartial(object: Partial<_160.MsgUpdateGroupMetadata>): _160.MsgUpdateGroupMetadata;
            };
            MsgUpdateGroupMetadataResponse: {
                encode(_: _160.MsgUpdateGroupMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _160.MsgUpdateGroupMetadataResponse;
                fromJSON(_: any): _160.MsgUpdateGroupMetadataResponse;
                toJSON(_: _160.MsgUpdateGroupMetadataResponse): unknown;
                fromPartial(_: Partial<_160.MsgUpdateGroupMetadataResponse>): _160.MsgUpdateGroupMetadataResponse;
            };
            MsgCreateGroupPolicy: {
                encode(message: _160.MsgCreateGroupPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _160.MsgCreateGroupPolicy;
                fromJSON(object: any): _160.MsgCreateGroupPolicy;
                toJSON(message: _160.MsgCreateGroupPolicy): unknown;
                fromPartial(object: Partial<_160.MsgCreateGroupPolicy>): _160.MsgCreateGroupPolicy;
            };
            MsgCreateGroupPolicyResponse: {
                encode(message: _160.MsgCreateGroupPolicyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _160.MsgCreateGroupPolicyResponse;
                fromJSON(object: any): _160.MsgCreateGroupPolicyResponse;
                toJSON(message: _160.MsgCreateGroupPolicyResponse): unknown;
                fromPartial(object: Partial<_160.MsgCreateGroupPolicyResponse>): _160.MsgCreateGroupPolicyResponse;
            };
            MsgUpdateGroupPolicyAdmin: {
                encode(message: _160.MsgUpdateGroupPolicyAdmin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _160.MsgUpdateGroupPolicyAdmin;
                fromJSON(object: any): _160.MsgUpdateGroupPolicyAdmin;
                toJSON(message: _160.MsgUpdateGroupPolicyAdmin): unknown;
                fromPartial(object: Partial<_160.MsgUpdateGroupPolicyAdmin>): _160.MsgUpdateGroupPolicyAdmin;
            };
            MsgUpdateGroupPolicyAdminResponse: {
                encode(_: _160.MsgUpdateGroupPolicyAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _160.MsgUpdateGroupPolicyAdminResponse;
                fromJSON(_: any): _160.MsgUpdateGroupPolicyAdminResponse;
                toJSON(_: _160.MsgUpdateGroupPolicyAdminResponse): unknown;
                fromPartial(_: Partial<_160.MsgUpdateGroupPolicyAdminResponse>): _160.MsgUpdateGroupPolicyAdminResponse;
            };
            MsgCreateGroupWithPolicy: {
                encode(message: _160.MsgCreateGroupWithPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _160.MsgCreateGroupWithPolicy;
                fromJSON(object: any): _160.MsgCreateGroupWithPolicy;
                toJSON(message: _160.MsgCreateGroupWithPolicy): unknown;
                fromPartial(object: Partial<_160.MsgCreateGroupWithPolicy>): _160.MsgCreateGroupWithPolicy;
            };
            MsgCreateGroupWithPolicyResponse: {
                encode(message: _160.MsgCreateGroupWithPolicyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _160.MsgCreateGroupWithPolicyResponse;
                fromJSON(object: any): _160.MsgCreateGroupWithPolicyResponse;
                toJSON(message: _160.MsgCreateGroupWithPolicyResponse): unknown;
                fromPartial(object: Partial<_160.MsgCreateGroupWithPolicyResponse>): _160.MsgCreateGroupWithPolicyResponse;
            };
            MsgUpdateGroupPolicyDecisionPolicy: {
                encode(message: _160.MsgUpdateGroupPolicyDecisionPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _160.MsgUpdateGroupPolicyDecisionPolicy;
                fromJSON(object: any): _160.MsgUpdateGroupPolicyDecisionPolicy;
                toJSON(message: _160.MsgUpdateGroupPolicyDecisionPolicy): unknown;
                fromPartial(object: Partial<_160.MsgUpdateGroupPolicyDecisionPolicy>): _160.MsgUpdateGroupPolicyDecisionPolicy;
            };
            MsgUpdateGroupPolicyDecisionPolicyResponse: {
                encode(_: _160.MsgUpdateGroupPolicyDecisionPolicyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _160.MsgUpdateGroupPolicyDecisionPolicyResponse;
                fromJSON(_: any): _160.MsgUpdateGroupPolicyDecisionPolicyResponse;
                toJSON(_: _160.MsgUpdateGroupPolicyDecisionPolicyResponse): unknown;
                fromPartial(_: Partial<_160.MsgUpdateGroupPolicyDecisionPolicyResponse>): _160.MsgUpdateGroupPolicyDecisionPolicyResponse;
            };
            MsgUpdateGroupPolicyMetadata: {
                encode(message: _160.MsgUpdateGroupPolicyMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _160.MsgUpdateGroupPolicyMetadata;
                fromJSON(object: any): _160.MsgUpdateGroupPolicyMetadata;
                toJSON(message: _160.MsgUpdateGroupPolicyMetadata): unknown;
                fromPartial(object: Partial<_160.MsgUpdateGroupPolicyMetadata>): _160.MsgUpdateGroupPolicyMetadata;
            };
            MsgUpdateGroupPolicyMetadataResponse: {
                encode(_: _160.MsgUpdateGroupPolicyMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _160.MsgUpdateGroupPolicyMetadataResponse;
                fromJSON(_: any): _160.MsgUpdateGroupPolicyMetadataResponse;
                toJSON(_: _160.MsgUpdateGroupPolicyMetadataResponse): unknown;
                fromPartial(_: Partial<_160.MsgUpdateGroupPolicyMetadataResponse>): _160.MsgUpdateGroupPolicyMetadataResponse;
            };
            MsgSubmitProposal: {
                encode(message: _160.MsgSubmitProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _160.MsgSubmitProposal;
                fromJSON(object: any): _160.MsgSubmitProposal;
                toJSON(message: _160.MsgSubmitProposal): unknown;
                fromPartial(object: Partial<_160.MsgSubmitProposal>): _160.MsgSubmitProposal;
            };
            MsgSubmitProposalResponse: {
                encode(message: _160.MsgSubmitProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _160.MsgSubmitProposalResponse;
                fromJSON(object: any): _160.MsgSubmitProposalResponse;
                toJSON(message: _160.MsgSubmitProposalResponse): unknown;
                fromPartial(object: Partial<_160.MsgSubmitProposalResponse>): _160.MsgSubmitProposalResponse;
            };
            MsgWithdrawProposal: {
                encode(message: _160.MsgWithdrawProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _160.MsgWithdrawProposal;
                fromJSON(object: any): _160.MsgWithdrawProposal;
                toJSON(message: _160.MsgWithdrawProposal): unknown;
                fromPartial(object: Partial<_160.MsgWithdrawProposal>): _160.MsgWithdrawProposal;
            };
            MsgWithdrawProposalResponse: {
                encode(_: _160.MsgWithdrawProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _160.MsgWithdrawProposalResponse;
                fromJSON(_: any): _160.MsgWithdrawProposalResponse;
                toJSON(_: _160.MsgWithdrawProposalResponse): unknown;
                fromPartial(_: Partial<_160.MsgWithdrawProposalResponse>): _160.MsgWithdrawProposalResponse;
            };
            MsgVote: {
                encode(message: _160.MsgVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _160.MsgVote;
                fromJSON(object: any): _160.MsgVote;
                toJSON(message: _160.MsgVote): unknown;
                fromPartial(object: Partial<_160.MsgVote>): _160.MsgVote;
            };
            MsgVoteResponse: {
                encode(_: _160.MsgVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _160.MsgVoteResponse;
                fromJSON(_: any): _160.MsgVoteResponse;
                toJSON(_: _160.MsgVoteResponse): unknown;
                fromPartial(_: Partial<_160.MsgVoteResponse>): _160.MsgVoteResponse;
            };
            MsgExec: {
                encode(message: _160.MsgExec, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _160.MsgExec;
                fromJSON(object: any): _160.MsgExec;
                toJSON(message: _160.MsgExec): unknown;
                fromPartial(object: Partial<_160.MsgExec>): _160.MsgExec;
            };
            MsgExecResponse: {
                encode(message: _160.MsgExecResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _160.MsgExecResponse;
                fromJSON(object: any): _160.MsgExecResponse;
                toJSON(message: _160.MsgExecResponse): unknown;
                fromPartial(object: Partial<_160.MsgExecResponse>): _160.MsgExecResponse;
            };
            MsgLeaveGroup: {
                encode(message: _160.MsgLeaveGroup, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _160.MsgLeaveGroup;
                fromJSON(object: any): _160.MsgLeaveGroup;
                toJSON(message: _160.MsgLeaveGroup): unknown;
                fromPartial(object: Partial<_160.MsgLeaveGroup>): _160.MsgLeaveGroup;
            };
            MsgLeaveGroupResponse: {
                encode(_: _160.MsgLeaveGroupResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _160.MsgLeaveGroupResponse;
                fromJSON(_: any): _160.MsgLeaveGroupResponse;
                toJSON(_: _160.MsgLeaveGroupResponse): unknown;
                fromPartial(_: Partial<_160.MsgLeaveGroupResponse>): _160.MsgLeaveGroupResponse;
            };
            QueryGroupInfoRequest: {
                encode(message: _159.QueryGroupInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _159.QueryGroupInfoRequest;
                fromJSON(object: any): _159.QueryGroupInfoRequest;
                toJSON(message: _159.QueryGroupInfoRequest): unknown;
                fromPartial(object: Partial<_159.QueryGroupInfoRequest>): _159.QueryGroupInfoRequest;
            };
            QueryGroupInfoResponse: {
                encode(message: _159.QueryGroupInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _159.QueryGroupInfoResponse;
                fromJSON(object: any): _159.QueryGroupInfoResponse;
                toJSON(message: _159.QueryGroupInfoResponse): unknown;
                fromPartial(object: Partial<_159.QueryGroupInfoResponse>): _159.QueryGroupInfoResponse;
            };
            QueryGroupPolicyInfoRequest: {
                encode(message: _159.QueryGroupPolicyInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _159.QueryGroupPolicyInfoRequest;
                fromJSON(object: any): _159.QueryGroupPolicyInfoRequest;
                toJSON(message: _159.QueryGroupPolicyInfoRequest): unknown;
                fromPartial(object: Partial<_159.QueryGroupPolicyInfoRequest>): _159.QueryGroupPolicyInfoRequest;
            };
            QueryGroupPolicyInfoResponse: {
                encode(message: _159.QueryGroupPolicyInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _159.QueryGroupPolicyInfoResponse;
                fromJSON(object: any): _159.QueryGroupPolicyInfoResponse;
                toJSON(message: _159.QueryGroupPolicyInfoResponse): unknown;
                fromPartial(object: Partial<_159.QueryGroupPolicyInfoResponse>): _159.QueryGroupPolicyInfoResponse;
            };
            QueryGroupMembersRequest: {
                encode(message: _159.QueryGroupMembersRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _159.QueryGroupMembersRequest;
                fromJSON(object: any): _159.QueryGroupMembersRequest;
                toJSON(message: _159.QueryGroupMembersRequest): unknown;
                fromPartial(object: Partial<_159.QueryGroupMembersRequest>): _159.QueryGroupMembersRequest;
            };
            QueryGroupMembersResponse: {
                encode(message: _159.QueryGroupMembersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _159.QueryGroupMembersResponse;
                fromJSON(object: any): _159.QueryGroupMembersResponse;
                toJSON(message: _159.QueryGroupMembersResponse): unknown;
                fromPartial(object: Partial<_159.QueryGroupMembersResponse>): _159.QueryGroupMembersResponse;
            };
            QueryGroupsByAdminRequest: {
                encode(message: _159.QueryGroupsByAdminRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _159.QueryGroupsByAdminRequest;
                fromJSON(object: any): _159.QueryGroupsByAdminRequest;
                toJSON(message: _159.QueryGroupsByAdminRequest): unknown;
                fromPartial(object: Partial<_159.QueryGroupsByAdminRequest>): _159.QueryGroupsByAdminRequest;
            };
            QueryGroupsByAdminResponse: {
                encode(message: _159.QueryGroupsByAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _159.QueryGroupsByAdminResponse;
                fromJSON(object: any): _159.QueryGroupsByAdminResponse;
                toJSON(message: _159.QueryGroupsByAdminResponse): unknown;
                fromPartial(object: Partial<_159.QueryGroupsByAdminResponse>): _159.QueryGroupsByAdminResponse;
            };
            QueryGroupPoliciesByGroupRequest: {
                encode(message: _159.QueryGroupPoliciesByGroupRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _159.QueryGroupPoliciesByGroupRequest;
                fromJSON(object: any): _159.QueryGroupPoliciesByGroupRequest;
                toJSON(message: _159.QueryGroupPoliciesByGroupRequest): unknown;
                fromPartial(object: Partial<_159.QueryGroupPoliciesByGroupRequest>): _159.QueryGroupPoliciesByGroupRequest;
            };
            QueryGroupPoliciesByGroupResponse: {
                encode(message: _159.QueryGroupPoliciesByGroupResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _159.QueryGroupPoliciesByGroupResponse;
                fromJSON(object: any): _159.QueryGroupPoliciesByGroupResponse;
                toJSON(message: _159.QueryGroupPoliciesByGroupResponse): unknown;
                fromPartial(object: Partial<_159.QueryGroupPoliciesByGroupResponse>): _159.QueryGroupPoliciesByGroupResponse;
            };
            QueryGroupPoliciesByAdminRequest: {
                encode(message: _159.QueryGroupPoliciesByAdminRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _159.QueryGroupPoliciesByAdminRequest;
                fromJSON(object: any): _159.QueryGroupPoliciesByAdminRequest;
                toJSON(message: _159.QueryGroupPoliciesByAdminRequest): unknown;
                fromPartial(object: Partial<_159.QueryGroupPoliciesByAdminRequest>): _159.QueryGroupPoliciesByAdminRequest;
            };
            QueryGroupPoliciesByAdminResponse: {
                encode(message: _159.QueryGroupPoliciesByAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _159.QueryGroupPoliciesByAdminResponse;
                fromJSON(object: any): _159.QueryGroupPoliciesByAdminResponse;
                toJSON(message: _159.QueryGroupPoliciesByAdminResponse): unknown;
                fromPartial(object: Partial<_159.QueryGroupPoliciesByAdminResponse>): _159.QueryGroupPoliciesByAdminResponse;
            };
            QueryProposalRequest: {
                encode(message: _159.QueryProposalRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _159.QueryProposalRequest;
                fromJSON(object: any): _159.QueryProposalRequest;
                toJSON(message: _159.QueryProposalRequest): unknown;
                fromPartial(object: Partial<_159.QueryProposalRequest>): _159.QueryProposalRequest;
            };
            QueryProposalResponse: {
                encode(message: _159.QueryProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _159.QueryProposalResponse;
                fromJSON(object: any): _159.QueryProposalResponse;
                toJSON(message: _159.QueryProposalResponse): unknown;
                fromPartial(object: Partial<_159.QueryProposalResponse>): _159.QueryProposalResponse;
            };
            QueryProposalsByGroupPolicyRequest: {
                encode(message: _159.QueryProposalsByGroupPolicyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _159.QueryProposalsByGroupPolicyRequest;
                fromJSON(object: any): _159.QueryProposalsByGroupPolicyRequest;
                toJSON(message: _159.QueryProposalsByGroupPolicyRequest): unknown;
                fromPartial(object: Partial<_159.QueryProposalsByGroupPolicyRequest>): _159.QueryProposalsByGroupPolicyRequest;
            };
            QueryProposalsByGroupPolicyResponse: {
                encode(message: _159.QueryProposalsByGroupPolicyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _159.QueryProposalsByGroupPolicyResponse;
                fromJSON(object: any): _159.QueryProposalsByGroupPolicyResponse;
                toJSON(message: _159.QueryProposalsByGroupPolicyResponse): unknown;
                fromPartial(object: Partial<_159.QueryProposalsByGroupPolicyResponse>): _159.QueryProposalsByGroupPolicyResponse;
            };
            QueryVoteByProposalVoterRequest: {
                encode(message: _159.QueryVoteByProposalVoterRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _159.QueryVoteByProposalVoterRequest;
                fromJSON(object: any): _159.QueryVoteByProposalVoterRequest;
                toJSON(message: _159.QueryVoteByProposalVoterRequest): unknown;
                fromPartial(object: Partial<_159.QueryVoteByProposalVoterRequest>): _159.QueryVoteByProposalVoterRequest;
            };
            QueryVoteByProposalVoterResponse: {
                encode(message: _159.QueryVoteByProposalVoterResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _159.QueryVoteByProposalVoterResponse;
                fromJSON(object: any): _159.QueryVoteByProposalVoterResponse;
                toJSON(message: _159.QueryVoteByProposalVoterResponse): unknown;
                fromPartial(object: Partial<_159.QueryVoteByProposalVoterResponse>): _159.QueryVoteByProposalVoterResponse;
            };
            QueryVotesByProposalRequest: {
                encode(message: _159.QueryVotesByProposalRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _159.QueryVotesByProposalRequest;
                fromJSON(object: any): _159.QueryVotesByProposalRequest;
                toJSON(message: _159.QueryVotesByProposalRequest): unknown;
                fromPartial(object: Partial<_159.QueryVotesByProposalRequest>): _159.QueryVotesByProposalRequest;
            };
            QueryVotesByProposalResponse: {
                encode(message: _159.QueryVotesByProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _159.QueryVotesByProposalResponse;
                fromJSON(object: any): _159.QueryVotesByProposalResponse;
                toJSON(message: _159.QueryVotesByProposalResponse): unknown;
                fromPartial(object: Partial<_159.QueryVotesByProposalResponse>): _159.QueryVotesByProposalResponse;
            };
            QueryVotesByVoterRequest: {
                encode(message: _159.QueryVotesByVoterRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _159.QueryVotesByVoterRequest;
                fromJSON(object: any): _159.QueryVotesByVoterRequest;
                toJSON(message: _159.QueryVotesByVoterRequest): unknown;
                fromPartial(object: Partial<_159.QueryVotesByVoterRequest>): _159.QueryVotesByVoterRequest;
            };
            QueryVotesByVoterResponse: {
                encode(message: _159.QueryVotesByVoterResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _159.QueryVotesByVoterResponse;
                fromJSON(object: any): _159.QueryVotesByVoterResponse;
                toJSON(message: _159.QueryVotesByVoterResponse): unknown;
                fromPartial(object: Partial<_159.QueryVotesByVoterResponse>): _159.QueryVotesByVoterResponse;
            };
            QueryGroupsByMemberRequest: {
                encode(message: _159.QueryGroupsByMemberRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _159.QueryGroupsByMemberRequest;
                fromJSON(object: any): _159.QueryGroupsByMemberRequest;
                toJSON(message: _159.QueryGroupsByMemberRequest): unknown;
                fromPartial(object: Partial<_159.QueryGroupsByMemberRequest>): _159.QueryGroupsByMemberRequest;
            };
            QueryGroupsByMemberResponse: {
                encode(message: _159.QueryGroupsByMemberResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _159.QueryGroupsByMemberResponse;
                fromJSON(object: any): _159.QueryGroupsByMemberResponse;
                toJSON(message: _159.QueryGroupsByMemberResponse): unknown;
                fromPartial(object: Partial<_159.QueryGroupsByMemberResponse>): _159.QueryGroupsByMemberResponse;
            };
            QueryTallyResultRequest: {
                encode(message: _159.QueryTallyResultRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _159.QueryTallyResultRequest;
                fromJSON(object: any): _159.QueryTallyResultRequest;
                toJSON(message: _159.QueryTallyResultRequest): unknown;
                fromPartial(object: Partial<_159.QueryTallyResultRequest>): _159.QueryTallyResultRequest;
            };
            QueryTallyResultResponse: {
                encode(message: _159.QueryTallyResultResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _159.QueryTallyResultResponse;
                fromJSON(object: any): _159.QueryTallyResultResponse;
                toJSON(message: _159.QueryTallyResultResponse): unknown;
                fromPartial(object: Partial<_159.QueryTallyResultResponse>): _159.QueryTallyResultResponse;
            };
            QueryGroupsRequest: {
                encode(message: _159.QueryGroupsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _159.QueryGroupsRequest;
                fromJSON(object: any): _159.QueryGroupsRequest;
                toJSON(message: _159.QueryGroupsRequest): unknown;
                fromPartial(object: Partial<_159.QueryGroupsRequest>): _159.QueryGroupsRequest;
            };
            QueryGroupsResponse: {
                encode(message: _159.QueryGroupsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _159.QueryGroupsResponse;
                fromJSON(object: any): _159.QueryGroupsResponse;
                toJSON(message: _159.QueryGroupsResponse): unknown;
                fromPartial(object: Partial<_159.QueryGroupsResponse>): _159.QueryGroupsResponse;
            };
            GenesisState: {
                encode(message: _158.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _158.GenesisState;
                fromJSON(object: any): _158.GenesisState;
                toJSON(message: _158.GenesisState): unknown;
                fromPartial(object: Partial<_158.GenesisState>): _158.GenesisState;
            };
            EventCreateGroup: {
                encode(message: _157.EventCreateGroup, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _157.EventCreateGroup;
                fromJSON(object: any): _157.EventCreateGroup;
                toJSON(message: _157.EventCreateGroup): unknown;
                fromPartial(object: Partial<_157.EventCreateGroup>): _157.EventCreateGroup;
            };
            EventUpdateGroup: {
                encode(message: _157.EventUpdateGroup, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _157.EventUpdateGroup;
                fromJSON(object: any): _157.EventUpdateGroup;
                toJSON(message: _157.EventUpdateGroup): unknown;
                fromPartial(object: Partial<_157.EventUpdateGroup>): _157.EventUpdateGroup;
            };
            EventCreateGroupPolicy: {
                encode(message: _157.EventCreateGroupPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _157.EventCreateGroupPolicy;
                fromJSON(object: any): _157.EventCreateGroupPolicy;
                toJSON(message: _157.EventCreateGroupPolicy): unknown;
                fromPartial(object: Partial<_157.EventCreateGroupPolicy>): _157.EventCreateGroupPolicy;
            };
            EventUpdateGroupPolicy: {
                encode(message: _157.EventUpdateGroupPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _157.EventUpdateGroupPolicy;
                fromJSON(object: any): _157.EventUpdateGroupPolicy;
                toJSON(message: _157.EventUpdateGroupPolicy): unknown;
                fromPartial(object: Partial<_157.EventUpdateGroupPolicy>): _157.EventUpdateGroupPolicy;
            };
            EventSubmitProposal: {
                encode(message: _157.EventSubmitProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _157.EventSubmitProposal;
                fromJSON(object: any): _157.EventSubmitProposal;
                toJSON(message: _157.EventSubmitProposal): unknown;
                fromPartial(object: Partial<_157.EventSubmitProposal>): _157.EventSubmitProposal;
            };
            EventWithdrawProposal: {
                encode(message: _157.EventWithdrawProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _157.EventWithdrawProposal;
                fromJSON(object: any): _157.EventWithdrawProposal;
                toJSON(message: _157.EventWithdrawProposal): unknown;
                fromPartial(object: Partial<_157.EventWithdrawProposal>): _157.EventWithdrawProposal;
            };
            EventVote: {
                encode(message: _157.EventVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _157.EventVote;
                fromJSON(object: any): _157.EventVote;
                toJSON(message: _157.EventVote): unknown;
                fromPartial(object: Partial<_157.EventVote>): _157.EventVote;
            };
            EventExec: {
                encode(message: _157.EventExec, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _157.EventExec;
                fromJSON(object: any): _157.EventExec;
                toJSON(message: _157.EventExec): unknown;
                fromPartial(object: Partial<_157.EventExec>): _157.EventExec;
            };
            EventLeaveGroup: {
                encode(message: _157.EventLeaveGroup, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _157.EventLeaveGroup;
                fromJSON(object: any): _157.EventLeaveGroup;
                toJSON(message: _157.EventLeaveGroup): unknown;
                fromPartial(object: Partial<_157.EventLeaveGroup>): _157.EventLeaveGroup;
            };
        };
    }
    namespace mint {
        namespace module {
            const v1: {
                Module: {
                    encode(message: _163.Module, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _163.Module;
                    fromJSON(object: any): _163.Module;
                    toJSON(message: _163.Module): unknown;
                    fromPartial(object: Partial<_163.Module>): _163.Module;
                };
            };
        }
        const v1beta1: {
            LCDQueryClient: typeof _397.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    updateParams(value: _171.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    updateParams(value: _171.MsgUpdateParams): {
                        typeUrl: string;
                        value: _171.MsgUpdateParams;
                    };
                };
                toJSON: {
                    updateParams(value: _171.MsgUpdateParams): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    updateParams(value: any): {
                        typeUrl: string;
                        value: _171.MsgUpdateParams;
                    };
                };
                fromPartial: {
                    updateParams(value: _171.MsgUpdateParams): {
                        typeUrl: string;
                        value: _171.MsgUpdateParams;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.mint.v1beta1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: ({ authority, params }: _171.MsgUpdateParams) => {
                        authority: string;
                        params: {
                            mint_denom: string;
                            inflation_rate_change: string;
                            inflation_max: string;
                            inflation_min: string;
                            goal_bonded: string;
                            blocks_per_year: string;
                        };
                    };
                    fromAmino: ({ authority, params }: {
                        authority: string;
                        params: {
                            mint_denom: string;
                            inflation_rate_change: string;
                            inflation_max: string;
                            inflation_min: string;
                            goal_bonded: string;
                            blocks_per_year: string;
                        };
                    }) => _171.MsgUpdateParams;
                };
            };
            MsgUpdateParams: {
                encode(message: _171.MsgUpdateParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _171.MsgUpdateParams;
                fromJSON(object: any): _171.MsgUpdateParams;
                toJSON(message: _171.MsgUpdateParams): unknown;
                fromPartial(object: Partial<_171.MsgUpdateParams>): _171.MsgUpdateParams;
            };
            MsgUpdateParamsResponse: {
                encode(_: _171.MsgUpdateParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _171.MsgUpdateParamsResponse;
                fromJSON(_: any): _171.MsgUpdateParamsResponse;
                toJSON(_: _171.MsgUpdateParamsResponse): unknown;
                fromPartial(_: Partial<_171.MsgUpdateParamsResponse>): _171.MsgUpdateParamsResponse;
            };
            QueryParamsRequest: {
                encode(_: _170.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _170.QueryParamsRequest;
                fromJSON(_: any): _170.QueryParamsRequest;
                toJSON(_: _170.QueryParamsRequest): unknown;
                fromPartial(_: Partial<_170.QueryParamsRequest>): _170.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _170.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _170.QueryParamsResponse;
                fromJSON(object: any): _170.QueryParamsResponse;
                toJSON(message: _170.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_170.QueryParamsResponse>): _170.QueryParamsResponse;
            };
            QueryInflationRequest: {
                encode(_: _170.QueryInflationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _170.QueryInflationRequest;
                fromJSON(_: any): _170.QueryInflationRequest;
                toJSON(_: _170.QueryInflationRequest): unknown;
                fromPartial(_: Partial<_170.QueryInflationRequest>): _170.QueryInflationRequest;
            };
            QueryInflationResponse: {
                encode(message: _170.QueryInflationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _170.QueryInflationResponse;
                fromJSON(object: any): _170.QueryInflationResponse;
                toJSON(message: _170.QueryInflationResponse): unknown;
                fromPartial(object: Partial<_170.QueryInflationResponse>): _170.QueryInflationResponse;
            };
            QueryAnnualProvisionsRequest: {
                encode(_: _170.QueryAnnualProvisionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _170.QueryAnnualProvisionsRequest;
                fromJSON(_: any): _170.QueryAnnualProvisionsRequest;
                toJSON(_: _170.QueryAnnualProvisionsRequest): unknown;
                fromPartial(_: Partial<_170.QueryAnnualProvisionsRequest>): _170.QueryAnnualProvisionsRequest;
            };
            QueryAnnualProvisionsResponse: {
                encode(message: _170.QueryAnnualProvisionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _170.QueryAnnualProvisionsResponse;
                fromJSON(object: any): _170.QueryAnnualProvisionsResponse;
                toJSON(message: _170.QueryAnnualProvisionsResponse): unknown;
                fromPartial(object: Partial<_170.QueryAnnualProvisionsResponse>): _170.QueryAnnualProvisionsResponse;
            };
            Minter: {
                encode(message: _169.Minter, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _169.Minter;
                fromJSON(object: any): _169.Minter;
                toJSON(message: _169.Minter): unknown;
                fromPartial(object: Partial<_169.Minter>): _169.Minter;
            };
            Params: {
                encode(message: _169.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _169.Params;
                fromJSON(object: any): _169.Params;
                toJSON(message: _169.Params): unknown;
                fromPartial(object: Partial<_169.Params>): _169.Params;
            };
            GenesisState: {
                encode(message: _168.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _168.GenesisState;
                fromJSON(object: any): _168.GenesisState;
                toJSON(message: _168.GenesisState): unknown;
                fromPartial(object: Partial<_168.GenesisState>): _168.GenesisState;
            };
        };
    }
    namespace msg {
        namespace textual {
            const v1: {};
        }
        const v1: {};
    }
    namespace nft {
        namespace module {
            const v1: {
                Module: {
                    encode(_: _177.Module, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _177.Module;
                    fromJSON(_: any): _177.Module;
                    toJSON(_: _177.Module): unknown;
                    fromPartial(_: Partial<_177.Module>): _177.Module;
                };
            };
        }
        const v1beta1: {
            LCDQueryClient: typeof _398.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    send(value: _187.MsgSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    send(value: _187.MsgSend): {
                        typeUrl: string;
                        value: _187.MsgSend;
                    };
                };
                toJSON: {
                    send(value: _187.MsgSend): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    send(value: any): {
                        typeUrl: string;
                        value: _187.MsgSend;
                    };
                };
                fromPartial: {
                    send(value: _187.MsgSend): {
                        typeUrl: string;
                        value: _187.MsgSend;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.nft.v1beta1.MsgSend": {
                    aminoType: string;
                    toAmino: ({ classId, id, sender, receiver }: _187.MsgSend) => {
                        class_id: string;
                        id: string;
                        sender: string;
                        receiver: string;
                    };
                    fromAmino: ({ class_id, id, sender, receiver }: {
                        class_id: string;
                        id: string;
                        sender: string;
                        receiver: string;
                    }) => _187.MsgSend;
                };
            };
            MsgSend: {
                encode(message: _187.MsgSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _187.MsgSend;
                fromJSON(object: any): _187.MsgSend;
                toJSON(message: _187.MsgSend): unknown;
                fromPartial(object: Partial<_187.MsgSend>): _187.MsgSend;
            };
            MsgSendResponse: {
                encode(_: _187.MsgSendResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _187.MsgSendResponse;
                fromJSON(_: any): _187.MsgSendResponse;
                toJSON(_: _187.MsgSendResponse): unknown;
                fromPartial(_: Partial<_187.MsgSendResponse>): _187.MsgSendResponse;
            };
            QueryBalanceRequest: {
                encode(message: _186.QueryBalanceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _186.QueryBalanceRequest;
                fromJSON(object: any): _186.QueryBalanceRequest;
                toJSON(message: _186.QueryBalanceRequest): unknown;
                fromPartial(object: Partial<_186.QueryBalanceRequest>): _186.QueryBalanceRequest;
            };
            QueryBalanceResponse: {
                encode(message: _186.QueryBalanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _186.QueryBalanceResponse;
                fromJSON(object: any): _186.QueryBalanceResponse;
                toJSON(message: _186.QueryBalanceResponse): unknown;
                fromPartial(object: Partial<_186.QueryBalanceResponse>): _186.QueryBalanceResponse;
            };
            QueryOwnerRequest: {
                encode(message: _186.QueryOwnerRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _186.QueryOwnerRequest;
                fromJSON(object: any): _186.QueryOwnerRequest;
                toJSON(message: _186.QueryOwnerRequest): unknown;
                fromPartial(object: Partial<_186.QueryOwnerRequest>): _186.QueryOwnerRequest;
            };
            QueryOwnerResponse: {
                encode(message: _186.QueryOwnerResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _186.QueryOwnerResponse;
                fromJSON(object: any): _186.QueryOwnerResponse;
                toJSON(message: _186.QueryOwnerResponse): unknown;
                fromPartial(object: Partial<_186.QueryOwnerResponse>): _186.QueryOwnerResponse;
            };
            QuerySupplyRequest: {
                encode(message: _186.QuerySupplyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _186.QuerySupplyRequest;
                fromJSON(object: any): _186.QuerySupplyRequest;
                toJSON(message: _186.QuerySupplyRequest): unknown;
                fromPartial(object: Partial<_186.QuerySupplyRequest>): _186.QuerySupplyRequest;
            };
            QuerySupplyResponse: {
                encode(message: _186.QuerySupplyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _186.QuerySupplyResponse;
                fromJSON(object: any): _186.QuerySupplyResponse;
                toJSON(message: _186.QuerySupplyResponse): unknown;
                fromPartial(object: Partial<_186.QuerySupplyResponse>): _186.QuerySupplyResponse;
            };
            QueryNFTsRequest: {
                encode(message: _186.QueryNFTsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _186.QueryNFTsRequest;
                fromJSON(object: any): _186.QueryNFTsRequest;
                toJSON(message: _186.QueryNFTsRequest): unknown;
                fromPartial(object: Partial<_186.QueryNFTsRequest>): _186.QueryNFTsRequest;
            };
            QueryNFTsResponse: {
                encode(message: _186.QueryNFTsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _186.QueryNFTsResponse;
                fromJSON(object: any): _186.QueryNFTsResponse;
                toJSON(message: _186.QueryNFTsResponse): unknown;
                fromPartial(object: Partial<_186.QueryNFTsResponse>): _186.QueryNFTsResponse;
            };
            QueryNFTRequest: {
                encode(message: _186.QueryNFTRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _186.QueryNFTRequest;
                fromJSON(object: any): _186.QueryNFTRequest;
                toJSON(message: _186.QueryNFTRequest): unknown;
                fromPartial(object: Partial<_186.QueryNFTRequest>): _186.QueryNFTRequest;
            };
            QueryNFTResponse: {
                encode(message: _186.QueryNFTResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _186.QueryNFTResponse;
                fromJSON(object: any): _186.QueryNFTResponse;
                toJSON(message: _186.QueryNFTResponse): unknown;
                fromPartial(object: Partial<_186.QueryNFTResponse>): _186.QueryNFTResponse;
            };
            QueryClassRequest: {
                encode(message: _186.QueryClassRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _186.QueryClassRequest;
                fromJSON(object: any): _186.QueryClassRequest;
                toJSON(message: _186.QueryClassRequest): unknown;
                fromPartial(object: Partial<_186.QueryClassRequest>): _186.QueryClassRequest;
            };
            QueryClassResponse: {
                encode(message: _186.QueryClassResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _186.QueryClassResponse;
                fromJSON(object: any): _186.QueryClassResponse;
                toJSON(message: _186.QueryClassResponse): unknown;
                fromPartial(object: Partial<_186.QueryClassResponse>): _186.QueryClassResponse;
            };
            QueryClassesRequest: {
                encode(message: _186.QueryClassesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _186.QueryClassesRequest;
                fromJSON(object: any): _186.QueryClassesRequest;
                toJSON(message: _186.QueryClassesRequest): unknown;
                fromPartial(object: Partial<_186.QueryClassesRequest>): _186.QueryClassesRequest;
            };
            QueryClassesResponse: {
                encode(message: _186.QueryClassesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _186.QueryClassesResponse;
                fromJSON(object: any): _186.QueryClassesResponse;
                toJSON(message: _186.QueryClassesResponse): unknown;
                fromPartial(object: Partial<_186.QueryClassesResponse>): _186.QueryClassesResponse;
            };
            Class: {
                encode(message: _185.Class, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _185.Class;
                fromJSON(object: any): _185.Class;
                toJSON(message: _185.Class): unknown;
                fromPartial(object: Partial<_185.Class>): _185.Class;
            };
            NFT: {
                encode(message: _185.NFT, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _185.NFT;
                fromJSON(object: any): _185.NFT;
                toJSON(message: _185.NFT): unknown;
                fromPartial(object: Partial<_185.NFT>): _185.NFT;
            };
            GenesisState: {
                encode(message: _184.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _184.GenesisState;
                fromJSON(object: any): _184.GenesisState;
                toJSON(message: _184.GenesisState): unknown;
                fromPartial(object: Partial<_184.GenesisState>): _184.GenesisState;
            };
            Entry: {
                encode(message: _184.Entry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _184.Entry;
                fromJSON(object: any): _184.Entry;
                toJSON(message: _184.Entry): unknown;
                fromPartial(object: Partial<_184.Entry>): _184.Entry;
            };
            EventSend: {
                encode(message: _183.EventSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _183.EventSend;
                fromJSON(object: any): _183.EventSend;
                toJSON(message: _183.EventSend): unknown;
                fromPartial(object: Partial<_183.EventSend>): _183.EventSend;
            };
            EventMint: {
                encode(message: _183.EventMint, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _183.EventMint;
                fromJSON(object: any): _183.EventMint;
                toJSON(message: _183.EventMint): unknown;
                fromPartial(object: Partial<_183.EventMint>): _183.EventMint;
            };
            EventBurn: {
                encode(message: _183.EventBurn, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _183.EventBurn;
                fromJSON(object: any): _183.EventBurn;
                toJSON(message: _183.EventBurn): unknown;
                fromPartial(object: Partial<_183.EventBurn>): _183.EventBurn;
            };
        };
    }
    namespace orm {
        namespace module {
            const v1alpha1: {
                Module: {
                    encode(_: _189.Module, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _189.Module;
                    fromJSON(_: any): _189.Module;
                    toJSON(_: _189.Module): unknown;
                    fromPartial(_: Partial<_189.Module>): _189.Module;
                };
            };
        }
        namespace query {
            const v1alpha1: {
                GetRequest: {
                    encode(message: _191.GetRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _191.GetRequest;
                    fromJSON(object: any): _191.GetRequest;
                    toJSON(message: _191.GetRequest): unknown;
                    fromPartial(object: Partial<_191.GetRequest>): _191.GetRequest;
                };
                GetResponse: {
                    encode(message: _191.GetResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _191.GetResponse;
                    fromJSON(object: any): _191.GetResponse;
                    toJSON(message: _191.GetResponse): unknown;
                    fromPartial(object: Partial<_191.GetResponse>): _191.GetResponse;
                };
                ListRequest: {
                    encode(message: _191.ListRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _191.ListRequest;
                    fromJSON(object: any): _191.ListRequest;
                    toJSON(message: _191.ListRequest): unknown;
                    fromPartial(object: Partial<_191.ListRequest>): _191.ListRequest;
                };
                ListRequest_Prefix: {
                    encode(message: _191.ListRequest_Prefix, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _191.ListRequest_Prefix;
                    fromJSON(object: any): _191.ListRequest_Prefix;
                    toJSON(message: _191.ListRequest_Prefix): unknown;
                    fromPartial(object: Partial<_191.ListRequest_Prefix>): _191.ListRequest_Prefix;
                };
                ListRequest_Range: {
                    encode(message: _191.ListRequest_Range, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _191.ListRequest_Range;
                    fromJSON(object: any): _191.ListRequest_Range;
                    toJSON(message: _191.ListRequest_Range): unknown;
                    fromPartial(object: Partial<_191.ListRequest_Range>): _191.ListRequest_Range;
                };
                ListResponse: {
                    encode(message: _191.ListResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _191.ListResponse;
                    fromJSON(object: any): _191.ListResponse;
                    toJSON(message: _191.ListResponse): unknown;
                    fromPartial(object: Partial<_191.ListResponse>): _191.ListResponse;
                };
                IndexValue: {
                    encode(message: _191.IndexValue, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _191.IndexValue;
                    fromJSON(object: any): _191.IndexValue;
                    toJSON(message: _191.IndexValue): unknown;
                    fromPartial(object: Partial<_191.IndexValue>): _191.IndexValue;
                };
            };
        }
        const v1: {
            TableDescriptor: {
                encode(message: _193.TableDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _193.TableDescriptor;
                fromJSON(object: any): _193.TableDescriptor;
                toJSON(message: _193.TableDescriptor): unknown;
                fromPartial(object: Partial<_193.TableDescriptor>): _193.TableDescriptor;
            };
            PrimaryKeyDescriptor: {
                encode(message: _193.PrimaryKeyDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _193.PrimaryKeyDescriptor;
                fromJSON(object: any): _193.PrimaryKeyDescriptor;
                toJSON(message: _193.PrimaryKeyDescriptor): unknown;
                fromPartial(object: Partial<_193.PrimaryKeyDescriptor>): _193.PrimaryKeyDescriptor;
            };
            SecondaryIndexDescriptor: {
                encode(message: _193.SecondaryIndexDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _193.SecondaryIndexDescriptor;
                fromJSON(object: any): _193.SecondaryIndexDescriptor;
                toJSON(message: _193.SecondaryIndexDescriptor): unknown;
                fromPartial(object: Partial<_193.SecondaryIndexDescriptor>): _193.SecondaryIndexDescriptor;
            };
            SingletonDescriptor: {
                encode(message: _193.SingletonDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _193.SingletonDescriptor;
                fromJSON(object: any): _193.SingletonDescriptor;
                toJSON(message: _193.SingletonDescriptor): unknown;
                fromPartial(object: Partial<_193.SingletonDescriptor>): _193.SingletonDescriptor;
            };
        };
        const v1alpha1: {
            storageTypeFromJSON(object: any): _195.StorageType;
            storageTypeToJSON(object: _195.StorageType): string;
            StorageType: typeof _195.StorageType;
            StorageTypeSDKType: typeof _195.StorageTypeSDKType;
            ModuleSchemaDescriptor: {
                encode(message: _195.ModuleSchemaDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _195.ModuleSchemaDescriptor;
                fromJSON(object: any): _195.ModuleSchemaDescriptor;
                toJSON(message: _195.ModuleSchemaDescriptor): unknown;
                fromPartial(object: Partial<_195.ModuleSchemaDescriptor>): _195.ModuleSchemaDescriptor;
            };
            ModuleSchemaDescriptor_FileEntry: {
                encode(message: _195.ModuleSchemaDescriptor_FileEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _195.ModuleSchemaDescriptor_FileEntry;
                fromJSON(object: any): _195.ModuleSchemaDescriptor_FileEntry;
                toJSON(message: _195.ModuleSchemaDescriptor_FileEntry): unknown;
                fromPartial(object: Partial<_195.ModuleSchemaDescriptor_FileEntry>): _195.ModuleSchemaDescriptor_FileEntry;
            };
        };
    }
    namespace params {
        namespace module {
            const v1: {
                Module: {
                    encode(_: _197.Module, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _197.Module;
                    fromJSON(_: any): _197.Module;
                    toJSON(_: _197.Module): unknown;
                    fromPartial(_: Partial<_197.Module>): _197.Module;
                };
            };
        }
        const v1beta1: {
            LCDQueryClient: typeof _399.LCDQueryClient;
            QueryParamsRequest: {
                encode(message: _201.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _201.QueryParamsRequest;
                fromJSON(object: any): _201.QueryParamsRequest;
                toJSON(message: _201.QueryParamsRequest): unknown;
                fromPartial(object: Partial<_201.QueryParamsRequest>): _201.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _201.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _201.QueryParamsResponse;
                fromJSON(object: any): _201.QueryParamsResponse;
                toJSON(message: _201.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_201.QueryParamsResponse>): _201.QueryParamsResponse;
            };
            QuerySubspacesRequest: {
                encode(_: _201.QuerySubspacesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _201.QuerySubspacesRequest;
                fromJSON(_: any): _201.QuerySubspacesRequest;
                toJSON(_: _201.QuerySubspacesRequest): unknown;
                fromPartial(_: Partial<_201.QuerySubspacesRequest>): _201.QuerySubspacesRequest;
            };
            QuerySubspacesResponse: {
                encode(message: _201.QuerySubspacesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _201.QuerySubspacesResponse;
                fromJSON(object: any): _201.QuerySubspacesResponse;
                toJSON(message: _201.QuerySubspacesResponse): unknown;
                fromPartial(object: Partial<_201.QuerySubspacesResponse>): _201.QuerySubspacesResponse;
            };
            Subspace: {
                encode(message: _201.Subspace, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _201.Subspace;
                fromJSON(object: any): _201.Subspace;
                toJSON(message: _201.Subspace): unknown;
                fromPartial(object: Partial<_201.Subspace>): _201.Subspace;
            };
            ParameterChangeProposal: {
                encode(message: _200.ParameterChangeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _200.ParameterChangeProposal;
                fromJSON(object: any): _200.ParameterChangeProposal;
                toJSON(message: _200.ParameterChangeProposal): unknown;
                fromPartial(object: Partial<_200.ParameterChangeProposal>): _200.ParameterChangeProposal;
            };
            ParamChange: {
                encode(message: _200.ParamChange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _200.ParamChange;
                fromJSON(object: any): _200.ParamChange;
                toJSON(message: _200.ParamChange): unknown;
                fromPartial(object: Partial<_200.ParamChange>): _200.ParamChange;
            };
        };
    }
    namespace query {
        const v1: {};
    }
    namespace reflection {
        const v1: {
            FileDescriptorsRequest: {
                encode(_: _205.FileDescriptorsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _205.FileDescriptorsRequest;
                fromJSON(_: any): _205.FileDescriptorsRequest;
                toJSON(_: _205.FileDescriptorsRequest): unknown;
                fromPartial(_: Partial<_205.FileDescriptorsRequest>): _205.FileDescriptorsRequest;
            };
            FileDescriptorsResponse: {
                encode(message: _205.FileDescriptorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _205.FileDescriptorsResponse;
                fromJSON(object: any): _205.FileDescriptorsResponse;
                toJSON(message: _205.FileDescriptorsResponse): unknown;
                fromPartial(object: Partial<_205.FileDescriptorsResponse>): _205.FileDescriptorsResponse;
            };
        };
    }
    namespace slashing {
        namespace module {
            const v1: {
                Module: {
                    encode(message: _207.Module, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _207.Module;
                    fromJSON(object: any): _207.Module;
                    toJSON(message: _207.Module): unknown;
                    fromPartial(object: Partial<_207.Module>): _207.Module;
                };
            };
        }
        const v1beta1: {
            LCDQueryClient: typeof _400.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    unjail(value: _215.MsgUnjail): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateParams(value: _215.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    unjail(value: _215.MsgUnjail): {
                        typeUrl: string;
                        value: _215.MsgUnjail;
                    };
                    updateParams(value: _215.MsgUpdateParams): {
                        typeUrl: string;
                        value: _215.MsgUpdateParams;
                    };
                };
                toJSON: {
                    unjail(value: _215.MsgUnjail): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateParams(value: _215.MsgUpdateParams): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    unjail(value: any): {
                        typeUrl: string;
                        value: _215.MsgUnjail;
                    };
                    updateParams(value: any): {
                        typeUrl: string;
                        value: _215.MsgUpdateParams;
                    };
                };
                fromPartial: {
                    unjail(value: _215.MsgUnjail): {
                        typeUrl: string;
                        value: _215.MsgUnjail;
                    };
                    updateParams(value: _215.MsgUpdateParams): {
                        typeUrl: string;
                        value: _215.MsgUpdateParams;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.slashing.v1beta1.MsgUnjail": {
                    aminoType: string;
                    toAmino: ({ validatorAddr }: _215.MsgUnjail) => {
                        validator_addr: string;
                    };
                    fromAmino: ({ validator_addr }: {
                        validator_addr: string;
                    }) => _215.MsgUnjail;
                };
                "/cosmos.slashing.v1beta1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: ({ authority, params }: _215.MsgUpdateParams) => {
                        authority: string;
                        params: {
                            signed_blocks_window: string;
                            min_signed_per_window: Uint8Array;
                            downtime_jail_duration: {
                                seconds: string;
                                nanos: number;
                            };
                            slash_fraction_double_sign: Uint8Array;
                            slash_fraction_downtime: Uint8Array;
                        };
                    };
                    fromAmino: ({ authority, params }: {
                        authority: string;
                        params: {
                            signed_blocks_window: string;
                            min_signed_per_window: Uint8Array;
                            downtime_jail_duration: {
                                seconds: string;
                                nanos: number;
                            };
                            slash_fraction_double_sign: Uint8Array;
                            slash_fraction_downtime: Uint8Array;
                        };
                    }) => _215.MsgUpdateParams;
                };
            };
            MsgUnjail: {
                encode(message: _215.MsgUnjail, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _215.MsgUnjail;
                fromJSON(object: any): _215.MsgUnjail;
                toJSON(message: _215.MsgUnjail): unknown;
                fromPartial(object: Partial<_215.MsgUnjail>): _215.MsgUnjail;
            };
            MsgUnjailResponse: {
                encode(_: _215.MsgUnjailResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _215.MsgUnjailResponse;
                fromJSON(_: any): _215.MsgUnjailResponse;
                toJSON(_: _215.MsgUnjailResponse): unknown;
                fromPartial(_: Partial<_215.MsgUnjailResponse>): _215.MsgUnjailResponse;
            };
            MsgUpdateParams: {
                encode(message: _215.MsgUpdateParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _215.MsgUpdateParams;
                fromJSON(object: any): _215.MsgUpdateParams;
                toJSON(message: _215.MsgUpdateParams): unknown;
                fromPartial(object: Partial<_215.MsgUpdateParams>): _215.MsgUpdateParams;
            };
            MsgUpdateParamsResponse: {
                encode(_: _215.MsgUpdateParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _215.MsgUpdateParamsResponse;
                fromJSON(_: any): _215.MsgUpdateParamsResponse;
                toJSON(_: _215.MsgUpdateParamsResponse): unknown;
                fromPartial(_: Partial<_215.MsgUpdateParamsResponse>): _215.MsgUpdateParamsResponse;
            };
            ValidatorSigningInfo: {
                encode(message: _214.ValidatorSigningInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _214.ValidatorSigningInfo;
                fromJSON(object: any): _214.ValidatorSigningInfo;
                toJSON(message: _214.ValidatorSigningInfo): unknown;
                fromPartial(object: Partial<_214.ValidatorSigningInfo>): _214.ValidatorSigningInfo;
            };
            Params: {
                encode(message: _214.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _214.Params;
                fromJSON(object: any): _214.Params;
                toJSON(message: _214.Params): unknown;
                fromPartial(object: Partial<_214.Params>): _214.Params;
            };
            QueryParamsRequest: {
                encode(_: _213.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _213.QueryParamsRequest;
                fromJSON(_: any): _213.QueryParamsRequest;
                toJSON(_: _213.QueryParamsRequest): unknown;
                fromPartial(_: Partial<_213.QueryParamsRequest>): _213.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _213.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _213.QueryParamsResponse;
                fromJSON(object: any): _213.QueryParamsResponse;
                toJSON(message: _213.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_213.QueryParamsResponse>): _213.QueryParamsResponse;
            };
            QuerySigningInfoRequest: {
                encode(message: _213.QuerySigningInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _213.QuerySigningInfoRequest;
                fromJSON(object: any): _213.QuerySigningInfoRequest;
                toJSON(message: _213.QuerySigningInfoRequest): unknown;
                fromPartial(object: Partial<_213.QuerySigningInfoRequest>): _213.QuerySigningInfoRequest;
            };
            QuerySigningInfoResponse: {
                encode(message: _213.QuerySigningInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _213.QuerySigningInfoResponse;
                fromJSON(object: any): _213.QuerySigningInfoResponse;
                toJSON(message: _213.QuerySigningInfoResponse): unknown;
                fromPartial(object: Partial<_213.QuerySigningInfoResponse>): _213.QuerySigningInfoResponse;
            };
            QuerySigningInfosRequest: {
                encode(message: _213.QuerySigningInfosRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _213.QuerySigningInfosRequest;
                fromJSON(object: any): _213.QuerySigningInfosRequest;
                toJSON(message: _213.QuerySigningInfosRequest): unknown;
                fromPartial(object: Partial<_213.QuerySigningInfosRequest>): _213.QuerySigningInfosRequest;
            };
            QuerySigningInfosResponse: {
                encode(message: _213.QuerySigningInfosResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _213.QuerySigningInfosResponse;
                fromJSON(object: any): _213.QuerySigningInfosResponse;
                toJSON(message: _213.QuerySigningInfosResponse): unknown;
                fromPartial(object: Partial<_213.QuerySigningInfosResponse>): _213.QuerySigningInfosResponse;
            };
            GenesisState: {
                encode(message: _212.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _212.GenesisState;
                fromJSON(object: any): _212.GenesisState;
                toJSON(message: _212.GenesisState): unknown;
                fromPartial(object: Partial<_212.GenesisState>): _212.GenesisState;
            };
            SigningInfo: {
                encode(message: _212.SigningInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _212.SigningInfo;
                fromJSON(object: any): _212.SigningInfo;
                toJSON(message: _212.SigningInfo): unknown;
                fromPartial(object: Partial<_212.SigningInfo>): _212.SigningInfo;
            };
            ValidatorMissedBlocks: {
                encode(message: _212.ValidatorMissedBlocks, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _212.ValidatorMissedBlocks;
                fromJSON(object: any): _212.ValidatorMissedBlocks;
                toJSON(message: _212.ValidatorMissedBlocks): unknown;
                fromPartial(object: Partial<_212.ValidatorMissedBlocks>): _212.ValidatorMissedBlocks;
            };
            MissedBlock: {
                encode(message: _212.MissedBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _212.MissedBlock;
                fromJSON(object: any): _212.MissedBlock;
                toJSON(message: _212.MissedBlock): unknown;
                fromPartial(object: Partial<_212.MissedBlock>): _212.MissedBlock;
            };
        };
    }
    namespace staking {
        namespace module {
            const v1: {
                Module: {
                    encode(message: _217.Module, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _217.Module;
                    fromJSON(object: any): _217.Module;
                    toJSON(message: _217.Module): unknown;
                    fromPartial(object: Partial<_217.Module>): _217.Module;
                };
            };
        }
        const v1beta1: {
            LCDQueryClient: typeof _401.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createValidator(value: _227.MsgCreateValidator): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    editValidator(value: _227.MsgEditValidator): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    delegate(value: _227.MsgDelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    beginRedelegate(value: _227.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    undelegate(value: _227.MsgUndelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    cancelUnbondingDelegation(value: _227.MsgCancelUnbondingDelegation): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateParams(value: _227.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createValidator(value: _227.MsgCreateValidator): {
                        typeUrl: string;
                        value: _227.MsgCreateValidator;
                    };
                    editValidator(value: _227.MsgEditValidator): {
                        typeUrl: string;
                        value: _227.MsgEditValidator;
                    };
                    delegate(value: _227.MsgDelegate): {
                        typeUrl: string;
                        value: _227.MsgDelegate;
                    };
                    beginRedelegate(value: _227.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: _227.MsgBeginRedelegate;
                    };
                    undelegate(value: _227.MsgUndelegate): {
                        typeUrl: string;
                        value: _227.MsgUndelegate;
                    };
                    cancelUnbondingDelegation(value: _227.MsgCancelUnbondingDelegation): {
                        typeUrl: string;
                        value: _227.MsgCancelUnbondingDelegation;
                    };
                    updateParams(value: _227.MsgUpdateParams): {
                        typeUrl: string;
                        value: _227.MsgUpdateParams;
                    };
                };
                toJSON: {
                    createValidator(value: _227.MsgCreateValidator): {
                        typeUrl: string;
                        value: unknown;
                    };
                    editValidator(value: _227.MsgEditValidator): {
                        typeUrl: string;
                        value: unknown;
                    };
                    delegate(value: _227.MsgDelegate): {
                        typeUrl: string;
                        value: unknown;
                    };
                    beginRedelegate(value: _227.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: unknown;
                    };
                    undelegate(value: _227.MsgUndelegate): {
                        typeUrl: string;
                        value: unknown;
                    };
                    cancelUnbondingDelegation(value: _227.MsgCancelUnbondingDelegation): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateParams(value: _227.MsgUpdateParams): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    createValidator(value: any): {
                        typeUrl: string;
                        value: _227.MsgCreateValidator;
                    };
                    editValidator(value: any): {
                        typeUrl: string;
                        value: _227.MsgEditValidator;
                    };
                    delegate(value: any): {
                        typeUrl: string;
                        value: _227.MsgDelegate;
                    };
                    beginRedelegate(value: any): {
                        typeUrl: string;
                        value: _227.MsgBeginRedelegate;
                    };
                    undelegate(value: any): {
                        typeUrl: string;
                        value: _227.MsgUndelegate;
                    };
                    cancelUnbondingDelegation(value: any): {
                        typeUrl: string;
                        value: _227.MsgCancelUnbondingDelegation;
                    };
                    updateParams(value: any): {
                        typeUrl: string;
                        value: _227.MsgUpdateParams;
                    };
                };
                fromPartial: {
                    createValidator(value: _227.MsgCreateValidator): {
                        typeUrl: string;
                        value: _227.MsgCreateValidator;
                    };
                    editValidator(value: _227.MsgEditValidator): {
                        typeUrl: string;
                        value: _227.MsgEditValidator;
                    };
                    delegate(value: _227.MsgDelegate): {
                        typeUrl: string;
                        value: _227.MsgDelegate;
                    };
                    beginRedelegate(value: _227.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: _227.MsgBeginRedelegate;
                    };
                    undelegate(value: _227.MsgUndelegate): {
                        typeUrl: string;
                        value: _227.MsgUndelegate;
                    };
                    cancelUnbondingDelegation(value: _227.MsgCancelUnbondingDelegation): {
                        typeUrl: string;
                        value: _227.MsgCancelUnbondingDelegation;
                    };
                    updateParams(value: _227.MsgUpdateParams): {
                        typeUrl: string;
                        value: _227.MsgUpdateParams;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.staking.v1beta1.MsgCreateValidator": {
                    aminoType: string;
                    toAmino: ({ description, commission, minSelfDelegation, delegatorAddress, validatorAddress, pubkey, value }: _227.MsgCreateValidator) => {
                        description: {
                            moniker: string;
                            identity: string;
                            website: string;
                            security_contact: string;
                            details: string;
                        };
                        commission: {
                            rate: string;
                            max_rate: string;
                            max_change_rate: string;
                        };
                        min_self_delegation: string;
                        delegator_address: string;
                        validator_address: string;
                        pubkey: {
                            type_url: string;
                            value: Uint8Array;
                        };
                        value: {
                            denom: string;
                            amount: string;
                        };
                    };
                    fromAmino: ({ description, commission, min_self_delegation, delegator_address, validator_address, pubkey, value }: {
                        description: {
                            moniker: string;
                            identity: string;
                            website: string;
                            security_contact: string;
                            details: string;
                        };
                        commission: {
                            rate: string;
                            max_rate: string;
                            max_change_rate: string;
                        };
                        min_self_delegation: string;
                        delegator_address: string;
                        validator_address: string;
                        pubkey: {
                            type_url: string;
                            value: Uint8Array;
                        };
                        value: {
                            denom: string;
                            amount: string;
                        };
                    }) => _227.MsgCreateValidator;
                };
                "/cosmos.staking.v1beta1.MsgEditValidator": {
                    aminoType: string;
                    toAmino: ({ description, validatorAddress, commissionRate, minSelfDelegation }: _227.MsgEditValidator) => {
                        description: {
                            moniker: string;
                            identity: string;
                            website: string;
                            security_contact: string;
                            details: string;
                        };
                        validator_address: string;
                        commission_rate: string;
                        min_self_delegation: string;
                    };
                    fromAmino: ({ description, validator_address, commission_rate, min_self_delegation }: {
                        description: {
                            moniker: string;
                            identity: string;
                            website: string;
                            security_contact: string;
                            details: string;
                        };
                        validator_address: string;
                        commission_rate: string;
                        min_self_delegation: string;
                    }) => _227.MsgEditValidator;
                };
                "/cosmos.staking.v1beta1.MsgDelegate": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, validatorAddress, amount }: _227.MsgDelegate) => {
                        delegator_address: string;
                        validator_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        };
                    };
                    fromAmino: ({ delegator_address, validator_address, amount }: {
                        delegator_address: string;
                        validator_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        };
                    }) => _227.MsgDelegate;
                };
                "/cosmos.staking.v1beta1.MsgBeginRedelegate": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, validatorSrcAddress, validatorDstAddress, amount }: _227.MsgBeginRedelegate) => {
                        delegator_address: string;
                        validator_src_address: string;
                        validator_dst_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        };
                    };
                    fromAmino: ({ delegator_address, validator_src_address, validator_dst_address, amount }: {
                        delegator_address: string;
                        validator_src_address: string;
                        validator_dst_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        };
                    }) => _227.MsgBeginRedelegate;
                };
                "/cosmos.staking.v1beta1.MsgUndelegate": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, validatorAddress, amount }: _227.MsgUndelegate) => {
                        delegator_address: string;
                        validator_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        };
                    };
                    fromAmino: ({ delegator_address, validator_address, amount }: {
                        delegator_address: string;
                        validator_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        };
                    }) => _227.MsgUndelegate;
                };
                "/cosmos.staking.v1beta1.MsgCancelUnbondingDelegation": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, validatorAddress, amount, creationHeight }: _227.MsgCancelUnbondingDelegation) => {
                        delegator_address: string;
                        validator_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        };
                        creation_height: string;
                    };
                    fromAmino: ({ delegator_address, validator_address, amount, creation_height }: {
                        delegator_address: string;
                        validator_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        };
                        creation_height: string;
                    }) => _227.MsgCancelUnbondingDelegation;
                };
                "/cosmos.staking.v1beta1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: ({ authority, params }: _227.MsgUpdateParams) => {
                        authority: string;
                        params: {
                            unbonding_time: {
                                seconds: string;
                                nanos: number;
                            };
                            max_validators: number;
                            max_entries: number;
                            historical_entries: number;
                            bond_denom: string;
                            min_commission_rate: string;
                        };
                    };
                    fromAmino: ({ authority, params }: {
                        authority: string;
                        params: {
                            unbonding_time: {
                                seconds: string;
                                nanos: number;
                            };
                            max_validators: number;
                            max_entries: number;
                            historical_entries: number;
                            bond_denom: string;
                            min_commission_rate: string;
                        };
                    }) => _227.MsgUpdateParams;
                };
            };
            MsgCreateValidator: {
                encode(message: _227.MsgCreateValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _227.MsgCreateValidator;
                fromJSON(object: any): _227.MsgCreateValidator;
                toJSON(message: _227.MsgCreateValidator): unknown;
                fromPartial(object: Partial<_227.MsgCreateValidator>): _227.MsgCreateValidator;
            };
            MsgCreateValidatorResponse: {
                encode(_: _227.MsgCreateValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _227.MsgCreateValidatorResponse;
                fromJSON(_: any): _227.MsgCreateValidatorResponse;
                toJSON(_: _227.MsgCreateValidatorResponse): unknown;
                fromPartial(_: Partial<_227.MsgCreateValidatorResponse>): _227.MsgCreateValidatorResponse;
            };
            MsgEditValidator: {
                encode(message: _227.MsgEditValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _227.MsgEditValidator;
                fromJSON(object: any): _227.MsgEditValidator;
                toJSON(message: _227.MsgEditValidator): unknown;
                fromPartial(object: Partial<_227.MsgEditValidator>): _227.MsgEditValidator;
            };
            MsgEditValidatorResponse: {
                encode(_: _227.MsgEditValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _227.MsgEditValidatorResponse;
                fromJSON(_: any): _227.MsgEditValidatorResponse;
                toJSON(_: _227.MsgEditValidatorResponse): unknown;
                fromPartial(_: Partial<_227.MsgEditValidatorResponse>): _227.MsgEditValidatorResponse;
            };
            MsgDelegate: {
                encode(message: _227.MsgDelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _227.MsgDelegate;
                fromJSON(object: any): _227.MsgDelegate;
                toJSON(message: _227.MsgDelegate): unknown;
                fromPartial(object: Partial<_227.MsgDelegate>): _227.MsgDelegate;
            };
            MsgDelegateResponse: {
                encode(_: _227.MsgDelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _227.MsgDelegateResponse;
                fromJSON(_: any): _227.MsgDelegateResponse;
                toJSON(_: _227.MsgDelegateResponse): unknown;
                fromPartial(_: Partial<_227.MsgDelegateResponse>): _227.MsgDelegateResponse;
            };
            MsgBeginRedelegate: {
                encode(message: _227.MsgBeginRedelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _227.MsgBeginRedelegate;
                fromJSON(object: any): _227.MsgBeginRedelegate;
                toJSON(message: _227.MsgBeginRedelegate): unknown;
                fromPartial(object: Partial<_227.MsgBeginRedelegate>): _227.MsgBeginRedelegate;
            };
            MsgBeginRedelegateResponse: {
                encode(message: _227.MsgBeginRedelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _227.MsgBeginRedelegateResponse;
                fromJSON(object: any): _227.MsgBeginRedelegateResponse;
                toJSON(message: _227.MsgBeginRedelegateResponse): unknown;
                fromPartial(object: Partial<_227.MsgBeginRedelegateResponse>): _227.MsgBeginRedelegateResponse;
            };
            MsgUndelegate: {
                encode(message: _227.MsgUndelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _227.MsgUndelegate;
                fromJSON(object: any): _227.MsgUndelegate;
                toJSON(message: _227.MsgUndelegate): unknown;
                fromPartial(object: Partial<_227.MsgUndelegate>): _227.MsgUndelegate;
            };
            MsgUndelegateResponse: {
                encode(message: _227.MsgUndelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _227.MsgUndelegateResponse;
                fromJSON(object: any): _227.MsgUndelegateResponse;
                toJSON(message: _227.MsgUndelegateResponse): unknown;
                fromPartial(object: Partial<_227.MsgUndelegateResponse>): _227.MsgUndelegateResponse;
            };
            MsgCancelUnbondingDelegation: {
                encode(message: _227.MsgCancelUnbondingDelegation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _227.MsgCancelUnbondingDelegation;
                fromJSON(object: any): _227.MsgCancelUnbondingDelegation;
                toJSON(message: _227.MsgCancelUnbondingDelegation): unknown;
                fromPartial(object: Partial<_227.MsgCancelUnbondingDelegation>): _227.MsgCancelUnbondingDelegation;
            };
            MsgCancelUnbondingDelegationResponse: {
                encode(_: _227.MsgCancelUnbondingDelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _227.MsgCancelUnbondingDelegationResponse;
                fromJSON(_: any): _227.MsgCancelUnbondingDelegationResponse;
                toJSON(_: _227.MsgCancelUnbondingDelegationResponse): unknown;
                fromPartial(_: Partial<_227.MsgCancelUnbondingDelegationResponse>): _227.MsgCancelUnbondingDelegationResponse;
            };
            MsgUpdateParams: {
                encode(message: _227.MsgUpdateParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _227.MsgUpdateParams;
                fromJSON(object: any): _227.MsgUpdateParams;
                toJSON(message: _227.MsgUpdateParams): unknown;
                fromPartial(object: Partial<_227.MsgUpdateParams>): _227.MsgUpdateParams;
            };
            MsgUpdateParamsResponse: {
                encode(_: _227.MsgUpdateParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _227.MsgUpdateParamsResponse;
                fromJSON(_: any): _227.MsgUpdateParamsResponse;
                toJSON(_: _227.MsgUpdateParamsResponse): unknown;
                fromPartial(_: Partial<_227.MsgUpdateParamsResponse>): _227.MsgUpdateParamsResponse;
            };
            bondStatusFromJSON(object: any): _226.BondStatus;
            bondStatusToJSON(object: _226.BondStatus): string;
            infractionFromJSON(object: any): _226.Infraction;
            infractionToJSON(object: _226.Infraction): string;
            BondStatus: typeof _226.BondStatus;
            BondStatusSDKType: typeof _226.BondStatusSDKType;
            Infraction: typeof _226.Infraction;
            InfractionSDKType: typeof _226.InfractionSDKType;
            HistoricalInfo: {
                encode(message: _226.HistoricalInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _226.HistoricalInfo;
                fromJSON(object: any): _226.HistoricalInfo;
                toJSON(message: _226.HistoricalInfo): unknown;
                fromPartial(object: Partial<_226.HistoricalInfo>): _226.HistoricalInfo;
            };
            CommissionRates: {
                encode(message: _226.CommissionRates, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _226.CommissionRates;
                fromJSON(object: any): _226.CommissionRates;
                toJSON(message: _226.CommissionRates): unknown;
                fromPartial(object: Partial<_226.CommissionRates>): _226.CommissionRates;
            };
            Commission: {
                encode(message: _226.Commission, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _226.Commission;
                fromJSON(object: any): _226.Commission;
                toJSON(message: _226.Commission): unknown;
                fromPartial(object: Partial<_226.Commission>): _226.Commission;
            };
            Description: {
                encode(message: _226.Description, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _226.Description;
                fromJSON(object: any): _226.Description;
                toJSON(message: _226.Description): unknown;
                fromPartial(object: Partial<_226.Description>): _226.Description;
            };
            Validator: {
                encode(message: _226.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _226.Validator;
                fromJSON(object: any): _226.Validator;
                toJSON(message: _226.Validator): unknown;
                fromPartial(object: Partial<_226.Validator>): _226.Validator;
            };
            ValAddresses: {
                encode(message: _226.ValAddresses, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _226.ValAddresses;
                fromJSON(object: any): _226.ValAddresses;
                toJSON(message: _226.ValAddresses): unknown;
                fromPartial(object: Partial<_226.ValAddresses>): _226.ValAddresses;
            };
            DVPair: {
                encode(message: _226.DVPair, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _226.DVPair;
                fromJSON(object: any): _226.DVPair;
                toJSON(message: _226.DVPair): unknown;
                fromPartial(object: Partial<_226.DVPair>): _226.DVPair;
            };
            DVPairs: {
                encode(message: _226.DVPairs, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _226.DVPairs;
                fromJSON(object: any): _226.DVPairs;
                toJSON(message: _226.DVPairs): unknown;
                fromPartial(object: Partial<_226.DVPairs>): _226.DVPairs;
            };
            DVVTriplet: {
                encode(message: _226.DVVTriplet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _226.DVVTriplet;
                fromJSON(object: any): _226.DVVTriplet;
                toJSON(message: _226.DVVTriplet): unknown;
                fromPartial(object: Partial<_226.DVVTriplet>): _226.DVVTriplet;
            };
            DVVTriplets: {
                encode(message: _226.DVVTriplets, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _226.DVVTriplets;
                fromJSON(object: any): _226.DVVTriplets;
                toJSON(message: _226.DVVTriplets): unknown;
                fromPartial(object: Partial<_226.DVVTriplets>): _226.DVVTriplets;
            };
            Delegation: {
                encode(message: _226.Delegation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _226.Delegation;
                fromJSON(object: any): _226.Delegation;
                toJSON(message: _226.Delegation): unknown;
                fromPartial(object: Partial<_226.Delegation>): _226.Delegation;
            };
            UnbondingDelegation: {
                encode(message: _226.UnbondingDelegation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _226.UnbondingDelegation;
                fromJSON(object: any): _226.UnbondingDelegation;
                toJSON(message: _226.UnbondingDelegation): unknown;
                fromPartial(object: Partial<_226.UnbondingDelegation>): _226.UnbondingDelegation;
            };
            UnbondingDelegationEntry: {
                encode(message: _226.UnbondingDelegationEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _226.UnbondingDelegationEntry;
                fromJSON(object: any): _226.UnbondingDelegationEntry;
                toJSON(message: _226.UnbondingDelegationEntry): unknown;
                fromPartial(object: Partial<_226.UnbondingDelegationEntry>): _226.UnbondingDelegationEntry;
            };
            RedelegationEntry: {
                encode(message: _226.RedelegationEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _226.RedelegationEntry;
                fromJSON(object: any): _226.RedelegationEntry;
                toJSON(message: _226.RedelegationEntry): unknown;
                fromPartial(object: Partial<_226.RedelegationEntry>): _226.RedelegationEntry;
            };
            Redelegation: {
                encode(message: _226.Redelegation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _226.Redelegation;
                fromJSON(object: any): _226.Redelegation;
                toJSON(message: _226.Redelegation): unknown;
                fromPartial(object: Partial<_226.Redelegation>): _226.Redelegation;
            };
            Params: {
                encode(message: _226.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _226.Params;
                fromJSON(object: any): _226.Params;
                toJSON(message: _226.Params): unknown;
                fromPartial(object: Partial<_226.Params>): _226.Params;
            };
            DelegationResponse: {
                encode(message: _226.DelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _226.DelegationResponse;
                fromJSON(object: any): _226.DelegationResponse;
                toJSON(message: _226.DelegationResponse): unknown;
                fromPartial(object: Partial<_226.DelegationResponse>): _226.DelegationResponse;
            };
            RedelegationEntryResponse: {
                encode(message: _226.RedelegationEntryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _226.RedelegationEntryResponse;
                fromJSON(object: any): _226.RedelegationEntryResponse;
                toJSON(message: _226.RedelegationEntryResponse): unknown;
                fromPartial(object: Partial<_226.RedelegationEntryResponse>): _226.RedelegationEntryResponse;
            };
            RedelegationResponse: {
                encode(message: _226.RedelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _226.RedelegationResponse;
                fromJSON(object: any): _226.RedelegationResponse;
                toJSON(message: _226.RedelegationResponse): unknown;
                fromPartial(object: Partial<_226.RedelegationResponse>): _226.RedelegationResponse;
            };
            Pool: {
                encode(message: _226.Pool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _226.Pool;
                fromJSON(object: any): _226.Pool;
                toJSON(message: _226.Pool): unknown;
                fromPartial(object: Partial<_226.Pool>): _226.Pool;
            };
            ValidatorUpdates: {
                encode(message: _226.ValidatorUpdates, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _226.ValidatorUpdates;
                fromJSON(object: any): _226.ValidatorUpdates;
                toJSON(message: _226.ValidatorUpdates): unknown;
                fromPartial(object: Partial<_226.ValidatorUpdates>): _226.ValidatorUpdates;
            };
            QueryValidatorsRequest: {
                encode(message: _225.QueryValidatorsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _225.QueryValidatorsRequest;
                fromJSON(object: any): _225.QueryValidatorsRequest;
                toJSON(message: _225.QueryValidatorsRequest): unknown;
                fromPartial(object: Partial<_225.QueryValidatorsRequest>): _225.QueryValidatorsRequest;
            };
            QueryValidatorsResponse: {
                encode(message: _225.QueryValidatorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _225.QueryValidatorsResponse;
                fromJSON(object: any): _225.QueryValidatorsResponse;
                toJSON(message: _225.QueryValidatorsResponse): unknown;
                fromPartial(object: Partial<_225.QueryValidatorsResponse>): _225.QueryValidatorsResponse;
            };
            QueryValidatorRequest: {
                encode(message: _225.QueryValidatorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _225.QueryValidatorRequest;
                fromJSON(object: any): _225.QueryValidatorRequest;
                toJSON(message: _225.QueryValidatorRequest): unknown;
                fromPartial(object: Partial<_225.QueryValidatorRequest>): _225.QueryValidatorRequest;
            };
            QueryValidatorResponse: {
                encode(message: _225.QueryValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _225.QueryValidatorResponse;
                fromJSON(object: any): _225.QueryValidatorResponse;
                toJSON(message: _225.QueryValidatorResponse): unknown;
                fromPartial(object: Partial<_225.QueryValidatorResponse>): _225.QueryValidatorResponse;
            };
            QueryValidatorDelegationsRequest: {
                encode(message: _225.QueryValidatorDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _225.QueryValidatorDelegationsRequest;
                fromJSON(object: any): _225.QueryValidatorDelegationsRequest;
                toJSON(message: _225.QueryValidatorDelegationsRequest): unknown;
                fromPartial(object: Partial<_225.QueryValidatorDelegationsRequest>): _225.QueryValidatorDelegationsRequest;
            };
            QueryValidatorDelegationsResponse: {
                encode(message: _225.QueryValidatorDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _225.QueryValidatorDelegationsResponse;
                fromJSON(object: any): _225.QueryValidatorDelegationsResponse;
                toJSON(message: _225.QueryValidatorDelegationsResponse): unknown;
                fromPartial(object: Partial<_225.QueryValidatorDelegationsResponse>): _225.QueryValidatorDelegationsResponse;
            };
            QueryValidatorUnbondingDelegationsRequest: {
                encode(message: _225.QueryValidatorUnbondingDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _225.QueryValidatorUnbondingDelegationsRequest;
                fromJSON(object: any): _225.QueryValidatorUnbondingDelegationsRequest;
                toJSON(message: _225.QueryValidatorUnbondingDelegationsRequest): unknown;
                fromPartial(object: Partial<_225.QueryValidatorUnbondingDelegationsRequest>): _225.QueryValidatorUnbondingDelegationsRequest;
            };
            QueryValidatorUnbondingDelegationsResponse: {
                encode(message: _225.QueryValidatorUnbondingDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _225.QueryValidatorUnbondingDelegationsResponse;
                fromJSON(object: any): _225.QueryValidatorUnbondingDelegationsResponse;
                toJSON(message: _225.QueryValidatorUnbondingDelegationsResponse): unknown;
                fromPartial(object: Partial<_225.QueryValidatorUnbondingDelegationsResponse>): _225.QueryValidatorUnbondingDelegationsResponse;
            };
            QueryDelegationRequest: {
                encode(message: _225.QueryDelegationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _225.QueryDelegationRequest;
                fromJSON(object: any): _225.QueryDelegationRequest;
                toJSON(message: _225.QueryDelegationRequest): unknown;
                fromPartial(object: Partial<_225.QueryDelegationRequest>): _225.QueryDelegationRequest;
            };
            QueryDelegationResponse: {
                encode(message: _225.QueryDelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _225.QueryDelegationResponse;
                fromJSON(object: any): _225.QueryDelegationResponse;
                toJSON(message: _225.QueryDelegationResponse): unknown;
                fromPartial(object: Partial<_225.QueryDelegationResponse>): _225.QueryDelegationResponse;
            };
            QueryUnbondingDelegationRequest: {
                encode(message: _225.QueryUnbondingDelegationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _225.QueryUnbondingDelegationRequest;
                fromJSON(object: any): _225.QueryUnbondingDelegationRequest;
                toJSON(message: _225.QueryUnbondingDelegationRequest): unknown;
                fromPartial(object: Partial<_225.QueryUnbondingDelegationRequest>): _225.QueryUnbondingDelegationRequest;
            };
            QueryUnbondingDelegationResponse: {
                encode(message: _225.QueryUnbondingDelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _225.QueryUnbondingDelegationResponse;
                fromJSON(object: any): _225.QueryUnbondingDelegationResponse;
                toJSON(message: _225.QueryUnbondingDelegationResponse): unknown;
                fromPartial(object: Partial<_225.QueryUnbondingDelegationResponse>): _225.QueryUnbondingDelegationResponse;
            };
            QueryDelegatorDelegationsRequest: {
                encode(message: _225.QueryDelegatorDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _225.QueryDelegatorDelegationsRequest;
                fromJSON(object: any): _225.QueryDelegatorDelegationsRequest;
                toJSON(message: _225.QueryDelegatorDelegationsRequest): unknown;
                fromPartial(object: Partial<_225.QueryDelegatorDelegationsRequest>): _225.QueryDelegatorDelegationsRequest;
            };
            QueryDelegatorDelegationsResponse: {
                encode(message: _225.QueryDelegatorDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _225.QueryDelegatorDelegationsResponse;
                fromJSON(object: any): _225.QueryDelegatorDelegationsResponse;
                toJSON(message: _225.QueryDelegatorDelegationsResponse): unknown;
                fromPartial(object: Partial<_225.QueryDelegatorDelegationsResponse>): _225.QueryDelegatorDelegationsResponse;
            };
            QueryDelegatorUnbondingDelegationsRequest: {
                encode(message: _225.QueryDelegatorUnbondingDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _225.QueryDelegatorUnbondingDelegationsRequest;
                fromJSON(object: any): _225.QueryDelegatorUnbondingDelegationsRequest;
                toJSON(message: _225.QueryDelegatorUnbondingDelegationsRequest): unknown;
                fromPartial(object: Partial<_225.QueryDelegatorUnbondingDelegationsRequest>): _225.QueryDelegatorUnbondingDelegationsRequest;
            };
            QueryDelegatorUnbondingDelegationsResponse: {
                encode(message: _225.QueryDelegatorUnbondingDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _225.QueryDelegatorUnbondingDelegationsResponse;
                fromJSON(object: any): _225.QueryDelegatorUnbondingDelegationsResponse;
                toJSON(message: _225.QueryDelegatorUnbondingDelegationsResponse): unknown;
                fromPartial(object: Partial<_225.QueryDelegatorUnbondingDelegationsResponse>): _225.QueryDelegatorUnbondingDelegationsResponse;
            };
            QueryRedelegationsRequest: {
                encode(message: _225.QueryRedelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _225.QueryRedelegationsRequest;
                fromJSON(object: any): _225.QueryRedelegationsRequest;
                toJSON(message: _225.QueryRedelegationsRequest): unknown;
                fromPartial(object: Partial<_225.QueryRedelegationsRequest>): _225.QueryRedelegationsRequest;
            };
            QueryRedelegationsResponse: {
                encode(message: _225.QueryRedelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _225.QueryRedelegationsResponse;
                fromJSON(object: any): _225.QueryRedelegationsResponse;
                toJSON(message: _225.QueryRedelegationsResponse): unknown;
                fromPartial(object: Partial<_225.QueryRedelegationsResponse>): _225.QueryRedelegationsResponse;
            };
            QueryDelegatorValidatorsRequest: {
                encode(message: _225.QueryDelegatorValidatorsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _225.QueryDelegatorValidatorsRequest;
                fromJSON(object: any): _225.QueryDelegatorValidatorsRequest;
                toJSON(message: _225.QueryDelegatorValidatorsRequest): unknown;
                fromPartial(object: Partial<_225.QueryDelegatorValidatorsRequest>): _225.QueryDelegatorValidatorsRequest;
            };
            QueryDelegatorValidatorsResponse: {
                encode(message: _225.QueryDelegatorValidatorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _225.QueryDelegatorValidatorsResponse;
                fromJSON(object: any): _225.QueryDelegatorValidatorsResponse;
                toJSON(message: _225.QueryDelegatorValidatorsResponse): unknown;
                fromPartial(object: Partial<_225.QueryDelegatorValidatorsResponse>): _225.QueryDelegatorValidatorsResponse;
            };
            QueryDelegatorValidatorRequest: {
                encode(message: _225.QueryDelegatorValidatorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _225.QueryDelegatorValidatorRequest;
                fromJSON(object: any): _225.QueryDelegatorValidatorRequest;
                toJSON(message: _225.QueryDelegatorValidatorRequest): unknown;
                fromPartial(object: Partial<_225.QueryDelegatorValidatorRequest>): _225.QueryDelegatorValidatorRequest;
            };
            QueryDelegatorValidatorResponse: {
                encode(message: _225.QueryDelegatorValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _225.QueryDelegatorValidatorResponse;
                fromJSON(object: any): _225.QueryDelegatorValidatorResponse;
                toJSON(message: _225.QueryDelegatorValidatorResponse): unknown;
                fromPartial(object: Partial<_225.QueryDelegatorValidatorResponse>): _225.QueryDelegatorValidatorResponse;
            };
            QueryHistoricalInfoRequest: {
                encode(message: _225.QueryHistoricalInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _225.QueryHistoricalInfoRequest;
                fromJSON(object: any): _225.QueryHistoricalInfoRequest;
                toJSON(message: _225.QueryHistoricalInfoRequest): unknown;
                fromPartial(object: Partial<_225.QueryHistoricalInfoRequest>): _225.QueryHistoricalInfoRequest;
            };
            QueryHistoricalInfoResponse: {
                encode(message: _225.QueryHistoricalInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _225.QueryHistoricalInfoResponse;
                fromJSON(object: any): _225.QueryHistoricalInfoResponse;
                toJSON(message: _225.QueryHistoricalInfoResponse): unknown;
                fromPartial(object: Partial<_225.QueryHistoricalInfoResponse>): _225.QueryHistoricalInfoResponse;
            };
            QueryPoolRequest: {
                encode(_: _225.QueryPoolRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _225.QueryPoolRequest;
                fromJSON(_: any): _225.QueryPoolRequest;
                toJSON(_: _225.QueryPoolRequest): unknown;
                fromPartial(_: Partial<_225.QueryPoolRequest>): _225.QueryPoolRequest;
            };
            QueryPoolResponse: {
                encode(message: _225.QueryPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _225.QueryPoolResponse;
                fromJSON(object: any): _225.QueryPoolResponse;
                toJSON(message: _225.QueryPoolResponse): unknown;
                fromPartial(object: Partial<_225.QueryPoolResponse>): _225.QueryPoolResponse;
            };
            QueryParamsRequest: {
                encode(_: _225.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _225.QueryParamsRequest;
                fromJSON(_: any): _225.QueryParamsRequest;
                toJSON(_: _225.QueryParamsRequest): unknown;
                fromPartial(_: Partial<_225.QueryParamsRequest>): _225.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _225.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _225.QueryParamsResponse;
                fromJSON(object: any): _225.QueryParamsResponse;
                toJSON(message: _225.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_225.QueryParamsResponse>): _225.QueryParamsResponse;
            };
            GenesisState: {
                encode(message: _224.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _224.GenesisState;
                fromJSON(object: any): _224.GenesisState;
                toJSON(message: _224.GenesisState): unknown;
                fromPartial(object: Partial<_224.GenesisState>): _224.GenesisState;
            };
            LastValidatorPower: {
                encode(message: _224.LastValidatorPower, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _224.LastValidatorPower;
                fromJSON(object: any): _224.LastValidatorPower;
                toJSON(message: _224.LastValidatorPower): unknown;
                fromPartial(object: Partial<_224.LastValidatorPower>): _224.LastValidatorPower;
            };
            authorizationTypeFromJSON(object: any): _223.AuthorizationType;
            authorizationTypeToJSON(object: _223.AuthorizationType): string;
            AuthorizationType: typeof _223.AuthorizationType;
            AuthorizationTypeSDKType: typeof _223.AuthorizationTypeSDKType;
            StakeAuthorization: {
                encode(message: _223.StakeAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _223.StakeAuthorization;
                fromJSON(object: any): _223.StakeAuthorization;
                toJSON(message: _223.StakeAuthorization): unknown;
                fromPartial(object: Partial<_223.StakeAuthorization>): _223.StakeAuthorization;
            };
            StakeAuthorization_Validators: {
                encode(message: _223.StakeAuthorization_Validators, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _223.StakeAuthorization_Validators;
                fromJSON(object: any): _223.StakeAuthorization_Validators;
                toJSON(message: _223.StakeAuthorization_Validators): unknown;
                fromPartial(object: Partial<_223.StakeAuthorization_Validators>): _223.StakeAuthorization_Validators;
            };
        };
    }
    namespace store {
        namespace internal {
            namespace kv {
                const v1beta1: {
                    Pairs: {
                        encode(message: _229.Pairs, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _229.Pairs;
                        fromJSON(object: any): _229.Pairs;
                        toJSON(message: _229.Pairs): unknown;
                        fromPartial(object: Partial<_229.Pairs>): _229.Pairs;
                    };
                    Pair: {
                        encode(message: _229.Pair, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _229.Pair;
                        fromJSON(object: any): _229.Pair;
                        toJSON(message: _229.Pair): unknown;
                        fromPartial(object: Partial<_229.Pair>): _229.Pair;
                    };
                };
            }
        }
        namespace snapshots {
            const v1: {
                Snapshot: {
                    encode(message: _231.Snapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _231.Snapshot;
                    fromJSON(object: any): _231.Snapshot;
                    toJSON(message: _231.Snapshot): unknown;
                    fromPartial(object: Partial<_231.Snapshot>): _231.Snapshot;
                };
                Metadata: {
                    encode(message: _231.Metadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _231.Metadata;
                    fromJSON(object: any): _231.Metadata;
                    toJSON(message: _231.Metadata): unknown;
                    fromPartial(object: Partial<_231.Metadata>): _231.Metadata;
                };
                SnapshotItem: {
                    encode(message: _231.SnapshotItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _231.SnapshotItem;
                    fromJSON(object: any): _231.SnapshotItem;
                    toJSON(message: _231.SnapshotItem): unknown;
                    fromPartial(object: Partial<_231.SnapshotItem>): _231.SnapshotItem;
                };
                SnapshotStoreItem: {
                    encode(message: _231.SnapshotStoreItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _231.SnapshotStoreItem;
                    fromJSON(object: any): _231.SnapshotStoreItem;
                    toJSON(message: _231.SnapshotStoreItem): unknown;
                    fromPartial(object: Partial<_231.SnapshotStoreItem>): _231.SnapshotStoreItem;
                };
                SnapshotIAVLItem: {
                    encode(message: _231.SnapshotIAVLItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _231.SnapshotIAVLItem;
                    fromJSON(object: any): _231.SnapshotIAVLItem;
                    toJSON(message: _231.SnapshotIAVLItem): unknown;
                    fromPartial(object: Partial<_231.SnapshotIAVLItem>): _231.SnapshotIAVLItem;
                };
                SnapshotExtensionMeta: {
                    encode(message: _231.SnapshotExtensionMeta, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _231.SnapshotExtensionMeta;
                    fromJSON(object: any): _231.SnapshotExtensionMeta;
                    toJSON(message: _231.SnapshotExtensionMeta): unknown;
                    fromPartial(object: Partial<_231.SnapshotExtensionMeta>): _231.SnapshotExtensionMeta;
                };
                SnapshotExtensionPayload: {
                    encode(message: _231.SnapshotExtensionPayload, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _231.SnapshotExtensionPayload;
                    fromJSON(object: any): _231.SnapshotExtensionPayload;
                    toJSON(message: _231.SnapshotExtensionPayload): unknown;
                    fromPartial(object: Partial<_231.SnapshotExtensionPayload>): _231.SnapshotExtensionPayload;
                };
            };
        }
        namespace streaming {
            const abci: {
                ListenBeginBlockRequest: {
                    encode(message: _233.ListenBeginBlockRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _233.ListenBeginBlockRequest;
                    fromJSON(object: any): _233.ListenBeginBlockRequest;
                    toJSON(message: _233.ListenBeginBlockRequest): unknown;
                    fromPartial(object: Partial<_233.ListenBeginBlockRequest>): _233.ListenBeginBlockRequest;
                };
                ListenBeginBlockResponse: {
                    encode(_: _233.ListenBeginBlockResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _233.ListenBeginBlockResponse;
                    fromJSON(_: any): _233.ListenBeginBlockResponse;
                    toJSON(_: _233.ListenBeginBlockResponse): unknown;
                    fromPartial(_: Partial<_233.ListenBeginBlockResponse>): _233.ListenBeginBlockResponse;
                };
                ListenEndBlockRequest: {
                    encode(message: _233.ListenEndBlockRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _233.ListenEndBlockRequest;
                    fromJSON(object: any): _233.ListenEndBlockRequest;
                    toJSON(message: _233.ListenEndBlockRequest): unknown;
                    fromPartial(object: Partial<_233.ListenEndBlockRequest>): _233.ListenEndBlockRequest;
                };
                ListenEndBlockResponse: {
                    encode(_: _233.ListenEndBlockResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _233.ListenEndBlockResponse;
                    fromJSON(_: any): _233.ListenEndBlockResponse;
                    toJSON(_: _233.ListenEndBlockResponse): unknown;
                    fromPartial(_: Partial<_233.ListenEndBlockResponse>): _233.ListenEndBlockResponse;
                };
                ListenDeliverTxRequest: {
                    encode(message: _233.ListenDeliverTxRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _233.ListenDeliverTxRequest;
                    fromJSON(object: any): _233.ListenDeliverTxRequest;
                    toJSON(message: _233.ListenDeliverTxRequest): unknown;
                    fromPartial(object: Partial<_233.ListenDeliverTxRequest>): _233.ListenDeliverTxRequest;
                };
                ListenDeliverTxResponse: {
                    encode(_: _233.ListenDeliverTxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _233.ListenDeliverTxResponse;
                    fromJSON(_: any): _233.ListenDeliverTxResponse;
                    toJSON(_: _233.ListenDeliverTxResponse): unknown;
                    fromPartial(_: Partial<_233.ListenDeliverTxResponse>): _233.ListenDeliverTxResponse;
                };
                ListenCommitRequest: {
                    encode(message: _233.ListenCommitRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _233.ListenCommitRequest;
                    fromJSON(object: any): _233.ListenCommitRequest;
                    toJSON(message: _233.ListenCommitRequest): unknown;
                    fromPartial(object: Partial<_233.ListenCommitRequest>): _233.ListenCommitRequest;
                };
                ListenCommitResponse: {
                    encode(_: _233.ListenCommitResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _233.ListenCommitResponse;
                    fromJSON(_: any): _233.ListenCommitResponse;
                    toJSON(_: _233.ListenCommitResponse): unknown;
                    fromPartial(_: Partial<_233.ListenCommitResponse>): _233.ListenCommitResponse;
                };
            };
        }
        const v1beta1: {
            StoreKVPair: {
                encode(message: _237.StoreKVPair, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _237.StoreKVPair;
                fromJSON(object: any): _237.StoreKVPair;
                toJSON(message: _237.StoreKVPair): unknown;
                fromPartial(object: Partial<_237.StoreKVPair>): _237.StoreKVPair;
            };
            BlockMetadata: {
                encode(message: _237.BlockMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _237.BlockMetadata;
                fromJSON(object: any): _237.BlockMetadata;
                toJSON(message: _237.BlockMetadata): unknown;
                fromPartial(object: Partial<_237.BlockMetadata>): _237.BlockMetadata;
            };
            BlockMetadata_DeliverTx: {
                encode(message: _237.BlockMetadata_DeliverTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _237.BlockMetadata_DeliverTx;
                fromJSON(object: any): _237.BlockMetadata_DeliverTx;
                toJSON(message: _237.BlockMetadata_DeliverTx): unknown;
                fromPartial(object: Partial<_237.BlockMetadata_DeliverTx>): _237.BlockMetadata_DeliverTx;
            };
            CommitInfo: {
                encode(message: _236.CommitInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _236.CommitInfo;
                fromJSON(object: any): _236.CommitInfo;
                toJSON(message: _236.CommitInfo): unknown;
                fromPartial(object: Partial<_236.CommitInfo>): _236.CommitInfo;
            };
            StoreInfo: {
                encode(message: _236.StoreInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _236.StoreInfo;
                fromJSON(object: any): _236.StoreInfo;
                toJSON(message: _236.StoreInfo): unknown;
                fromPartial(object: Partial<_236.StoreInfo>): _236.StoreInfo;
            };
            CommitID: {
                encode(message: _236.CommitID, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _236.CommitID;
                fromJSON(object: any): _236.CommitID;
                toJSON(message: _236.CommitID): unknown;
                fromPartial(object: Partial<_236.CommitID>): _236.CommitID;
            };
        };
    }
    namespace tx {
        namespace config {
            const v1: {
                Config: {
                    encode(message: _239.Config, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _239.Config;
                    fromJSON(object: any): _239.Config;
                    toJSON(message: _239.Config): unknown;
                    fromPartial(object: Partial<_239.Config>): _239.Config;
                };
            };
        }
        namespace signing {
            const v1beta1: {
                signModeFromJSON(object: any): _241.SignMode;
                signModeToJSON(object: _241.SignMode): string;
                SignMode: typeof _241.SignMode;
                SignModeSDKType: typeof _241.SignModeSDKType;
                SignatureDescriptors: {
                    encode(message: _241.SignatureDescriptors, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _241.SignatureDescriptors;
                    fromJSON(object: any): _241.SignatureDescriptors;
                    toJSON(message: _241.SignatureDescriptors): unknown;
                    fromPartial(object: Partial<_241.SignatureDescriptors>): _241.SignatureDescriptors;
                };
                SignatureDescriptor: {
                    encode(message: _241.SignatureDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _241.SignatureDescriptor;
                    fromJSON(object: any): _241.SignatureDescriptor;
                    toJSON(message: _241.SignatureDescriptor): unknown;
                    fromPartial(object: Partial<_241.SignatureDescriptor>): _241.SignatureDescriptor;
                };
                SignatureDescriptor_Data: {
                    encode(message: _241.SignatureDescriptor_Data, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _241.SignatureDescriptor_Data;
                    fromJSON(object: any): _241.SignatureDescriptor_Data;
                    toJSON(message: _241.SignatureDescriptor_Data): unknown;
                    fromPartial(object: Partial<_241.SignatureDescriptor_Data>): _241.SignatureDescriptor_Data;
                };
                SignatureDescriptor_Data_Single: {
                    encode(message: _241.SignatureDescriptor_Data_Single, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _241.SignatureDescriptor_Data_Single;
                    fromJSON(object: any): _241.SignatureDescriptor_Data_Single;
                    toJSON(message: _241.SignatureDescriptor_Data_Single): unknown;
                    fromPartial(object: Partial<_241.SignatureDescriptor_Data_Single>): _241.SignatureDescriptor_Data_Single;
                };
                SignatureDescriptor_Data_Multi: {
                    encode(message: _241.SignatureDescriptor_Data_Multi, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _241.SignatureDescriptor_Data_Multi;
                    fromJSON(object: any): _241.SignatureDescriptor_Data_Multi;
                    toJSON(message: _241.SignatureDescriptor_Data_Multi): unknown;
                    fromPartial(object: Partial<_241.SignatureDescriptor_Data_Multi>): _241.SignatureDescriptor_Data_Multi;
                };
            };
        }
        const v1beta1: {
            LCDQueryClient: typeof _402.LCDQueryClient;
            Tx: {
                encode(message: _245.Tx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _245.Tx;
                fromJSON(object: any): _245.Tx;
                toJSON(message: _245.Tx): unknown;
                fromPartial(object: Partial<_245.Tx>): _245.Tx;
            };
            TxRaw: {
                encode(message: _245.TxRaw, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _245.TxRaw;
                fromJSON(object: any): _245.TxRaw;
                toJSON(message: _245.TxRaw): unknown;
                fromPartial(object: Partial<_245.TxRaw>): _245.TxRaw;
            };
            SignDoc: {
                encode(message: _245.SignDoc, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _245.SignDoc;
                fromJSON(object: any): _245.SignDoc;
                toJSON(message: _245.SignDoc): unknown;
                fromPartial(object: Partial<_245.SignDoc>): _245.SignDoc;
            };
            SignDocDirectAux: {
                encode(message: _245.SignDocDirectAux, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _245.SignDocDirectAux;
                fromJSON(object: any): _245.SignDocDirectAux;
                toJSON(message: _245.SignDocDirectAux): unknown;
                fromPartial(object: Partial<_245.SignDocDirectAux>): _245.SignDocDirectAux;
            };
            TxBody: {
                encode(message: _245.TxBody, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _245.TxBody;
                fromJSON(object: any): _245.TxBody;
                toJSON(message: _245.TxBody): unknown;
                fromPartial(object: Partial<_245.TxBody>): _245.TxBody;
            };
            AuthInfo: {
                encode(message: _245.AuthInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _245.AuthInfo;
                fromJSON(object: any): _245.AuthInfo;
                toJSON(message: _245.AuthInfo): unknown;
                fromPartial(object: Partial<_245.AuthInfo>): _245.AuthInfo;
            };
            SignerInfo: {
                encode(message: _245.SignerInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _245.SignerInfo;
                fromJSON(object: any): _245.SignerInfo;
                toJSON(message: _245.SignerInfo): unknown;
                fromPartial(object: Partial<_245.SignerInfo>): _245.SignerInfo;
            };
            ModeInfo: {
                encode(message: _245.ModeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _245.ModeInfo;
                fromJSON(object: any): _245.ModeInfo;
                toJSON(message: _245.ModeInfo): unknown;
                fromPartial(object: Partial<_245.ModeInfo>): _245.ModeInfo;
            };
            ModeInfo_Single: {
                encode(message: _245.ModeInfo_Single, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _245.ModeInfo_Single;
                fromJSON(object: any): _245.ModeInfo_Single;
                toJSON(message: _245.ModeInfo_Single): unknown;
                fromPartial(object: Partial<_245.ModeInfo_Single>): _245.ModeInfo_Single;
            };
            ModeInfo_Multi: {
                encode(message: _245.ModeInfo_Multi, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _245.ModeInfo_Multi;
                fromJSON(object: any): _245.ModeInfo_Multi;
                toJSON(message: _245.ModeInfo_Multi): unknown;
                fromPartial(object: Partial<_245.ModeInfo_Multi>): _245.ModeInfo_Multi;
            };
            Fee: {
                encode(message: _245.Fee, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _245.Fee;
                fromJSON(object: any): _245.Fee;
                toJSON(message: _245.Fee): unknown;
                fromPartial(object: Partial<_245.Fee>): _245.Fee;
            };
            Tip: {
                encode(message: _245.Tip, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _245.Tip;
                fromJSON(object: any): _245.Tip;
                toJSON(message: _245.Tip): unknown;
                fromPartial(object: Partial<_245.Tip>): _245.Tip;
            };
            AuxSignerData: {
                encode(message: _245.AuxSignerData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _245.AuxSignerData;
                fromJSON(object: any): _245.AuxSignerData;
                toJSON(message: _245.AuxSignerData): unknown;
                fromPartial(object: Partial<_245.AuxSignerData>): _245.AuxSignerData;
            };
            orderByFromJSON(object: any): _244.OrderBy;
            orderByToJSON(object: _244.OrderBy): string;
            broadcastModeFromJSON(object: any): _244.BroadcastMode;
            broadcastModeToJSON(object: _244.BroadcastMode): string;
            OrderBy: typeof _244.OrderBy;
            OrderBySDKType: typeof _244.OrderBySDKType;
            BroadcastMode: typeof _244.BroadcastMode;
            BroadcastModeSDKType: typeof _244.BroadcastModeSDKType;
            GetTxsEventRequest: {
                encode(message: _244.GetTxsEventRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _244.GetTxsEventRequest;
                fromJSON(object: any): _244.GetTxsEventRequest;
                toJSON(message: _244.GetTxsEventRequest): unknown;
                fromPartial(object: Partial<_244.GetTxsEventRequest>): _244.GetTxsEventRequest;
            };
            GetTxsEventResponse: {
                encode(message: _244.GetTxsEventResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _244.GetTxsEventResponse;
                fromJSON(object: any): _244.GetTxsEventResponse;
                toJSON(message: _244.GetTxsEventResponse): unknown;
                fromPartial(object: Partial<_244.GetTxsEventResponse>): _244.GetTxsEventResponse;
            };
            BroadcastTxRequest: {
                encode(message: _244.BroadcastTxRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _244.BroadcastTxRequest;
                fromJSON(object: any): _244.BroadcastTxRequest;
                toJSON(message: _244.BroadcastTxRequest): unknown;
                fromPartial(object: Partial<_244.BroadcastTxRequest>): _244.BroadcastTxRequest;
            };
            BroadcastTxResponse: {
                encode(message: _244.BroadcastTxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _244.BroadcastTxResponse;
                fromJSON(object: any): _244.BroadcastTxResponse;
                toJSON(message: _244.BroadcastTxResponse): unknown;
                fromPartial(object: Partial<_244.BroadcastTxResponse>): _244.BroadcastTxResponse;
            };
            SimulateRequest: {
                encode(message: _244.SimulateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _244.SimulateRequest;
                fromJSON(object: any): _244.SimulateRequest;
                toJSON(message: _244.SimulateRequest): unknown;
                fromPartial(object: Partial<_244.SimulateRequest>): _244.SimulateRequest;
            };
            SimulateResponse: {
                encode(message: _244.SimulateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _244.SimulateResponse;
                fromJSON(object: any): _244.SimulateResponse;
                toJSON(message: _244.SimulateResponse): unknown;
                fromPartial(object: Partial<_244.SimulateResponse>): _244.SimulateResponse;
            };
            GetTxRequest: {
                encode(message: _244.GetTxRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _244.GetTxRequest;
                fromJSON(object: any): _244.GetTxRequest;
                toJSON(message: _244.GetTxRequest): unknown;
                fromPartial(object: Partial<_244.GetTxRequest>): _244.GetTxRequest;
            };
            GetTxResponse: {
                encode(message: _244.GetTxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _244.GetTxResponse;
                fromJSON(object: any): _244.GetTxResponse;
                toJSON(message: _244.GetTxResponse): unknown;
                fromPartial(object: Partial<_244.GetTxResponse>): _244.GetTxResponse;
            };
            GetBlockWithTxsRequest: {
                encode(message: _244.GetBlockWithTxsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _244.GetBlockWithTxsRequest;
                fromJSON(object: any): _244.GetBlockWithTxsRequest;
                toJSON(message: _244.GetBlockWithTxsRequest): unknown;
                fromPartial(object: Partial<_244.GetBlockWithTxsRequest>): _244.GetBlockWithTxsRequest;
            };
            GetBlockWithTxsResponse: {
                encode(message: _244.GetBlockWithTxsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _244.GetBlockWithTxsResponse;
                fromJSON(object: any): _244.GetBlockWithTxsResponse;
                toJSON(message: _244.GetBlockWithTxsResponse): unknown;
                fromPartial(object: Partial<_244.GetBlockWithTxsResponse>): _244.GetBlockWithTxsResponse;
            };
            TxDecodeRequest: {
                encode(message: _244.TxDecodeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _244.TxDecodeRequest;
                fromJSON(object: any): _244.TxDecodeRequest;
                toJSON(message: _244.TxDecodeRequest): unknown;
                fromPartial(object: Partial<_244.TxDecodeRequest>): _244.TxDecodeRequest;
            };
            TxDecodeResponse: {
                encode(message: _244.TxDecodeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _244.TxDecodeResponse;
                fromJSON(object: any): _244.TxDecodeResponse;
                toJSON(message: _244.TxDecodeResponse): unknown;
                fromPartial(object: Partial<_244.TxDecodeResponse>): _244.TxDecodeResponse;
            };
            TxEncodeRequest: {
                encode(message: _244.TxEncodeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _244.TxEncodeRequest;
                fromJSON(object: any): _244.TxEncodeRequest;
                toJSON(message: _244.TxEncodeRequest): unknown;
                fromPartial(object: Partial<_244.TxEncodeRequest>): _244.TxEncodeRequest;
            };
            TxEncodeResponse: {
                encode(message: _244.TxEncodeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _244.TxEncodeResponse;
                fromJSON(object: any): _244.TxEncodeResponse;
                toJSON(message: _244.TxEncodeResponse): unknown;
                fromPartial(object: Partial<_244.TxEncodeResponse>): _244.TxEncodeResponse;
            };
            TxEncodeAminoRequest: {
                encode(message: _244.TxEncodeAminoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _244.TxEncodeAminoRequest;
                fromJSON(object: any): _244.TxEncodeAminoRequest;
                toJSON(message: _244.TxEncodeAminoRequest): unknown;
                fromPartial(object: Partial<_244.TxEncodeAminoRequest>): _244.TxEncodeAminoRequest;
            };
            TxEncodeAminoResponse: {
                encode(message: _244.TxEncodeAminoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _244.TxEncodeAminoResponse;
                fromJSON(object: any): _244.TxEncodeAminoResponse;
                toJSON(message: _244.TxEncodeAminoResponse): unknown;
                fromPartial(object: Partial<_244.TxEncodeAminoResponse>): _244.TxEncodeAminoResponse;
            };
            TxDecodeAminoRequest: {
                encode(message: _244.TxDecodeAminoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _244.TxDecodeAminoRequest;
                fromJSON(object: any): _244.TxDecodeAminoRequest;
                toJSON(message: _244.TxDecodeAminoRequest): unknown;
                fromPartial(object: Partial<_244.TxDecodeAminoRequest>): _244.TxDecodeAminoRequest;
            };
            TxDecodeAminoResponse: {
                encode(message: _244.TxDecodeAminoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _244.TxDecodeAminoResponse;
                fromJSON(object: any): _244.TxDecodeAminoResponse;
                toJSON(message: _244.TxDecodeAminoResponse): unknown;
                fromPartial(object: Partial<_244.TxDecodeAminoResponse>): _244.TxDecodeAminoResponse;
            };
        };
    }
    namespace upgrade {
        namespace module {
            const v1: {
                Module: {
                    encode(message: _247.Module, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _247.Module;
                    fromJSON(object: any): _247.Module;
                    toJSON(message: _247.Module): unknown;
                    fromPartial(object: Partial<_247.Module>): _247.Module;
                };
            };
        }
        const v1beta1: {
            LCDQueryClient: typeof _403.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    softwareUpgrade(value: _252.MsgSoftwareUpgrade): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    cancelUpgrade(value: _252.MsgCancelUpgrade): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    softwareUpgrade(value: _252.MsgSoftwareUpgrade): {
                        typeUrl: string;
                        value: _252.MsgSoftwareUpgrade;
                    };
                    cancelUpgrade(value: _252.MsgCancelUpgrade): {
                        typeUrl: string;
                        value: _252.MsgCancelUpgrade;
                    };
                };
                toJSON: {
                    softwareUpgrade(value: _252.MsgSoftwareUpgrade): {
                        typeUrl: string;
                        value: unknown;
                    };
                    cancelUpgrade(value: _252.MsgCancelUpgrade): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    softwareUpgrade(value: any): {
                        typeUrl: string;
                        value: _252.MsgSoftwareUpgrade;
                    };
                    cancelUpgrade(value: any): {
                        typeUrl: string;
                        value: _252.MsgCancelUpgrade;
                    };
                };
                fromPartial: {
                    softwareUpgrade(value: _252.MsgSoftwareUpgrade): {
                        typeUrl: string;
                        value: _252.MsgSoftwareUpgrade;
                    };
                    cancelUpgrade(value: _252.MsgCancelUpgrade): {
                        typeUrl: string;
                        value: _252.MsgCancelUpgrade;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.upgrade.v1beta1.MsgSoftwareUpgrade": {
                    aminoType: string;
                    toAmino: ({ authority, plan }: _252.MsgSoftwareUpgrade) => {
                        authority: string;
                        plan: {
                            name: string;
                            time: {
                                seconds: string;
                                nanos: number;
                            };
                            height: string;
                            info: string;
                            upgraded_client_state: {
                                type_url: string;
                                value: Uint8Array;
                            };
                        };
                    };
                    fromAmino: ({ authority, plan }: {
                        authority: string;
                        plan: {
                            name: string;
                            time: {
                                seconds: string;
                                nanos: number;
                            };
                            height: string;
                            info: string;
                            upgraded_client_state: {
                                type_url: string;
                                value: Uint8Array;
                            };
                        };
                    }) => _252.MsgSoftwareUpgrade;
                };
                "/cosmos.upgrade.v1beta1.MsgCancelUpgrade": {
                    aminoType: string;
                    toAmino: ({ authority }: _252.MsgCancelUpgrade) => {
                        authority: string;
                    };
                    fromAmino: ({ authority }: {
                        authority: string;
                    }) => _252.MsgCancelUpgrade;
                };
            };
            Plan: {
                encode(message: _253.Plan, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _253.Plan;
                fromJSON(object: any): _253.Plan;
                toJSON(message: _253.Plan): unknown;
                fromPartial(object: Partial<_253.Plan>): _253.Plan;
            };
            SoftwareUpgradeProposal: {
                encode(message: _253.SoftwareUpgradeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _253.SoftwareUpgradeProposal;
                fromJSON(object: any): _253.SoftwareUpgradeProposal;
                toJSON(message: _253.SoftwareUpgradeProposal): unknown;
                fromPartial(object: Partial<_253.SoftwareUpgradeProposal>): _253.SoftwareUpgradeProposal;
            };
            CancelSoftwareUpgradeProposal: {
                encode(message: _253.CancelSoftwareUpgradeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _253.CancelSoftwareUpgradeProposal;
                fromJSON(object: any): _253.CancelSoftwareUpgradeProposal;
                toJSON(message: _253.CancelSoftwareUpgradeProposal): unknown;
                fromPartial(object: Partial<_253.CancelSoftwareUpgradeProposal>): _253.CancelSoftwareUpgradeProposal;
            };
            ModuleVersion: {
                encode(message: _253.ModuleVersion, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _253.ModuleVersion;
                fromJSON(object: any): _253.ModuleVersion;
                toJSON(message: _253.ModuleVersion): unknown;
                fromPartial(object: Partial<_253.ModuleVersion>): _253.ModuleVersion;
            };
            MsgSoftwareUpgrade: {
                encode(message: _252.MsgSoftwareUpgrade, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _252.MsgSoftwareUpgrade;
                fromJSON(object: any): _252.MsgSoftwareUpgrade;
                toJSON(message: _252.MsgSoftwareUpgrade): unknown;
                fromPartial(object: Partial<_252.MsgSoftwareUpgrade>): _252.MsgSoftwareUpgrade;
            };
            MsgSoftwareUpgradeResponse: {
                encode(_: _252.MsgSoftwareUpgradeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _252.MsgSoftwareUpgradeResponse;
                fromJSON(_: any): _252.MsgSoftwareUpgradeResponse;
                toJSON(_: _252.MsgSoftwareUpgradeResponse): unknown;
                fromPartial(_: Partial<_252.MsgSoftwareUpgradeResponse>): _252.MsgSoftwareUpgradeResponse;
            };
            MsgCancelUpgrade: {
                encode(message: _252.MsgCancelUpgrade, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _252.MsgCancelUpgrade;
                fromJSON(object: any): _252.MsgCancelUpgrade;
                toJSON(message: _252.MsgCancelUpgrade): unknown;
                fromPartial(object: Partial<_252.MsgCancelUpgrade>): _252.MsgCancelUpgrade;
            };
            MsgCancelUpgradeResponse: {
                encode(_: _252.MsgCancelUpgradeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _252.MsgCancelUpgradeResponse;
                fromJSON(_: any): _252.MsgCancelUpgradeResponse;
                toJSON(_: _252.MsgCancelUpgradeResponse): unknown;
                fromPartial(_: Partial<_252.MsgCancelUpgradeResponse>): _252.MsgCancelUpgradeResponse;
            };
            QueryCurrentPlanRequest: {
                encode(_: _251.QueryCurrentPlanRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _251.QueryCurrentPlanRequest;
                fromJSON(_: any): _251.QueryCurrentPlanRequest;
                toJSON(_: _251.QueryCurrentPlanRequest): unknown;
                fromPartial(_: Partial<_251.QueryCurrentPlanRequest>): _251.QueryCurrentPlanRequest;
            };
            QueryCurrentPlanResponse: {
                encode(message: _251.QueryCurrentPlanResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _251.QueryCurrentPlanResponse;
                fromJSON(object: any): _251.QueryCurrentPlanResponse;
                toJSON(message: _251.QueryCurrentPlanResponse): unknown;
                fromPartial(object: Partial<_251.QueryCurrentPlanResponse>): _251.QueryCurrentPlanResponse;
            };
            QueryAppliedPlanRequest: {
                encode(message: _251.QueryAppliedPlanRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _251.QueryAppliedPlanRequest;
                fromJSON(object: any): _251.QueryAppliedPlanRequest;
                toJSON(message: _251.QueryAppliedPlanRequest): unknown;
                fromPartial(object: Partial<_251.QueryAppliedPlanRequest>): _251.QueryAppliedPlanRequest;
            };
            QueryAppliedPlanResponse: {
                encode(message: _251.QueryAppliedPlanResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _251.QueryAppliedPlanResponse;
                fromJSON(object: any): _251.QueryAppliedPlanResponse;
                toJSON(message: _251.QueryAppliedPlanResponse): unknown;
                fromPartial(object: Partial<_251.QueryAppliedPlanResponse>): _251.QueryAppliedPlanResponse;
            };
            QueryUpgradedConsensusStateRequest: {
                encode(message: _251.QueryUpgradedConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _251.QueryUpgradedConsensusStateRequest;
                fromJSON(object: any): _251.QueryUpgradedConsensusStateRequest;
                toJSON(message: _251.QueryUpgradedConsensusStateRequest): unknown;
                fromPartial(object: Partial<_251.QueryUpgradedConsensusStateRequest>): _251.QueryUpgradedConsensusStateRequest;
            };
            QueryUpgradedConsensusStateResponse: {
                encode(message: _251.QueryUpgradedConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _251.QueryUpgradedConsensusStateResponse;
                fromJSON(object: any): _251.QueryUpgradedConsensusStateResponse;
                toJSON(message: _251.QueryUpgradedConsensusStateResponse): unknown;
                fromPartial(object: Partial<_251.QueryUpgradedConsensusStateResponse>): _251.QueryUpgradedConsensusStateResponse;
            };
            QueryModuleVersionsRequest: {
                encode(message: _251.QueryModuleVersionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _251.QueryModuleVersionsRequest;
                fromJSON(object: any): _251.QueryModuleVersionsRequest;
                toJSON(message: _251.QueryModuleVersionsRequest): unknown;
                fromPartial(object: Partial<_251.QueryModuleVersionsRequest>): _251.QueryModuleVersionsRequest;
            };
            QueryModuleVersionsResponse: {
                encode(message: _251.QueryModuleVersionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _251.QueryModuleVersionsResponse;
                fromJSON(object: any): _251.QueryModuleVersionsResponse;
                toJSON(message: _251.QueryModuleVersionsResponse): unknown;
                fromPartial(object: Partial<_251.QueryModuleVersionsResponse>): _251.QueryModuleVersionsResponse;
            };
            QueryAuthorityRequest: {
                encode(_: _251.QueryAuthorityRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _251.QueryAuthorityRequest;
                fromJSON(_: any): _251.QueryAuthorityRequest;
                toJSON(_: _251.QueryAuthorityRequest): unknown;
                fromPartial(_: Partial<_251.QueryAuthorityRequest>): _251.QueryAuthorityRequest;
            };
            QueryAuthorityResponse: {
                encode(message: _251.QueryAuthorityResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _251.QueryAuthorityResponse;
                fromJSON(object: any): _251.QueryAuthorityResponse;
                toJSON(message: _251.QueryAuthorityResponse): unknown;
                fromPartial(object: Partial<_251.QueryAuthorityResponse>): _251.QueryAuthorityResponse;
            };
        };
    }
    namespace vesting {
        namespace module {
            const v1: {
                Module: {
                    encode(_: _255.Module, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _255.Module;
                    fromJSON(_: any): _255.Module;
                    toJSON(_: _255.Module): unknown;
                    fromPartial(_: Partial<_255.Module>): _255.Module;
                };
            };
        }
        const v1beta1: {
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createVestingAccount(value: _258.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createPermanentLockedAccount(value: _258.MsgCreatePermanentLockedAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createPeriodicVestingAccount(value: _258.MsgCreatePeriodicVestingAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createVestingAccount(value: _258.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: _258.MsgCreateVestingAccount;
                    };
                    createPermanentLockedAccount(value: _258.MsgCreatePermanentLockedAccount): {
                        typeUrl: string;
                        value: _258.MsgCreatePermanentLockedAccount;
                    };
                    createPeriodicVestingAccount(value: _258.MsgCreatePeriodicVestingAccount): {
                        typeUrl: string;
                        value: _258.MsgCreatePeriodicVestingAccount;
                    };
                };
                toJSON: {
                    createVestingAccount(value: _258.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: unknown;
                    };
                    createPermanentLockedAccount(value: _258.MsgCreatePermanentLockedAccount): {
                        typeUrl: string;
                        value: unknown;
                    };
                    createPeriodicVestingAccount(value: _258.MsgCreatePeriodicVestingAccount): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    createVestingAccount(value: any): {
                        typeUrl: string;
                        value: _258.MsgCreateVestingAccount;
                    };
                    createPermanentLockedAccount(value: any): {
                        typeUrl: string;
                        value: _258.MsgCreatePermanentLockedAccount;
                    };
                    createPeriodicVestingAccount(value: any): {
                        typeUrl: string;
                        value: _258.MsgCreatePeriodicVestingAccount;
                    };
                };
                fromPartial: {
                    createVestingAccount(value: _258.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: _258.MsgCreateVestingAccount;
                    };
                    createPermanentLockedAccount(value: _258.MsgCreatePermanentLockedAccount): {
                        typeUrl: string;
                        value: _258.MsgCreatePermanentLockedAccount;
                    };
                    createPeriodicVestingAccount(value: _258.MsgCreatePeriodicVestingAccount): {
                        typeUrl: string;
                        value: _258.MsgCreatePeriodicVestingAccount;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.vesting.v1beta1.MsgCreateVestingAccount": {
                    aminoType: string;
                    toAmino: ({ fromAddress, toAddress, amount, endTime, delayed }: _258.MsgCreateVestingAccount) => {
                        from_address: string;
                        to_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                        end_time: string;
                        delayed: boolean;
                    };
                    fromAmino: ({ from_address, to_address, amount, end_time, delayed }: {
                        from_address: string;
                        to_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                        end_time: string;
                        delayed: boolean;
                    }) => _258.MsgCreateVestingAccount;
                };
                "/cosmos.vesting.v1beta1.MsgCreatePermanentLockedAccount": {
                    aminoType: string;
                    toAmino: ({ fromAddress, toAddress, amount }: _258.MsgCreatePermanentLockedAccount) => {
                        from_address: string;
                        to_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                    };
                    fromAmino: ({ from_address, to_address, amount }: {
                        from_address: string;
                        to_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                    }) => _258.MsgCreatePermanentLockedAccount;
                };
                "/cosmos.vesting.v1beta1.MsgCreatePeriodicVestingAccount": {
                    aminoType: string;
                    toAmino: ({ fromAddress, toAddress, startTime, vestingPeriods }: _258.MsgCreatePeriodicVestingAccount) => {
                        from_address: string;
                        to_address: string;
                        start_time: string;
                        vesting_periods: {
                            length: string;
                            amount: {
                                denom: string;
                                amount: string;
                            }[];
                        }[];
                    };
                    fromAmino: ({ from_address, to_address, start_time, vesting_periods }: {
                        from_address: string;
                        to_address: string;
                        start_time: string;
                        vesting_periods: {
                            length: string;
                            amount: {
                                denom: string;
                                amount: string;
                            }[];
                        }[];
                    }) => _258.MsgCreatePeriodicVestingAccount;
                };
            };
            BaseVestingAccount: {
                encode(message: _259.BaseVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _259.BaseVestingAccount;
                fromJSON(object: any): _259.BaseVestingAccount;
                toJSON(message: _259.BaseVestingAccount): unknown;
                fromPartial(object: Partial<_259.BaseVestingAccount>): _259.BaseVestingAccount;
            };
            ContinuousVestingAccount: {
                encode(message: _259.ContinuousVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _259.ContinuousVestingAccount;
                fromJSON(object: any): _259.ContinuousVestingAccount;
                toJSON(message: _259.ContinuousVestingAccount): unknown;
                fromPartial(object: Partial<_259.ContinuousVestingAccount>): _259.ContinuousVestingAccount;
            };
            DelayedVestingAccount: {
                encode(message: _259.DelayedVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _259.DelayedVestingAccount;
                fromJSON(object: any): _259.DelayedVestingAccount;
                toJSON(message: _259.DelayedVestingAccount): unknown;
                fromPartial(object: Partial<_259.DelayedVestingAccount>): _259.DelayedVestingAccount;
            };
            Period: {
                encode(message: _259.Period, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _259.Period;
                fromJSON(object: any): _259.Period;
                toJSON(message: _259.Period): unknown;
                fromPartial(object: Partial<_259.Period>): _259.Period;
            };
            PeriodicVestingAccount: {
                encode(message: _259.PeriodicVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _259.PeriodicVestingAccount;
                fromJSON(object: any): _259.PeriodicVestingAccount;
                toJSON(message: _259.PeriodicVestingAccount): unknown;
                fromPartial(object: Partial<_259.PeriodicVestingAccount>): _259.PeriodicVestingAccount;
            };
            PermanentLockedAccount: {
                encode(message: _259.PermanentLockedAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _259.PermanentLockedAccount;
                fromJSON(object: any): _259.PermanentLockedAccount;
                toJSON(message: _259.PermanentLockedAccount): unknown;
                fromPartial(object: Partial<_259.PermanentLockedAccount>): _259.PermanentLockedAccount;
            };
            MsgCreateVestingAccount: {
                encode(message: _258.MsgCreateVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _258.MsgCreateVestingAccount;
                fromJSON(object: any): _258.MsgCreateVestingAccount;
                toJSON(message: _258.MsgCreateVestingAccount): unknown;
                fromPartial(object: Partial<_258.MsgCreateVestingAccount>): _258.MsgCreateVestingAccount;
            };
            MsgCreateVestingAccountResponse: {
                encode(_: _258.MsgCreateVestingAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _258.MsgCreateVestingAccountResponse;
                fromJSON(_: any): _258.MsgCreateVestingAccountResponse;
                toJSON(_: _258.MsgCreateVestingAccountResponse): unknown;
                fromPartial(_: Partial<_258.MsgCreateVestingAccountResponse>): _258.MsgCreateVestingAccountResponse;
            };
            MsgCreatePermanentLockedAccount: {
                encode(message: _258.MsgCreatePermanentLockedAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _258.MsgCreatePermanentLockedAccount;
                fromJSON(object: any): _258.MsgCreatePermanentLockedAccount;
                toJSON(message: _258.MsgCreatePermanentLockedAccount): unknown;
                fromPartial(object: Partial<_258.MsgCreatePermanentLockedAccount>): _258.MsgCreatePermanentLockedAccount;
            };
            MsgCreatePermanentLockedAccountResponse: {
                encode(_: _258.MsgCreatePermanentLockedAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _258.MsgCreatePermanentLockedAccountResponse;
                fromJSON(_: any): _258.MsgCreatePermanentLockedAccountResponse;
                toJSON(_: _258.MsgCreatePermanentLockedAccountResponse): unknown;
                fromPartial(_: Partial<_258.MsgCreatePermanentLockedAccountResponse>): _258.MsgCreatePermanentLockedAccountResponse;
            };
            MsgCreatePeriodicVestingAccount: {
                encode(message: _258.MsgCreatePeriodicVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _258.MsgCreatePeriodicVestingAccount;
                fromJSON(object: any): _258.MsgCreatePeriodicVestingAccount;
                toJSON(message: _258.MsgCreatePeriodicVestingAccount): unknown;
                fromPartial(object: Partial<_258.MsgCreatePeriodicVestingAccount>): _258.MsgCreatePeriodicVestingAccount;
            };
            MsgCreatePeriodicVestingAccountResponse: {
                encode(_: _258.MsgCreatePeriodicVestingAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _258.MsgCreatePeriodicVestingAccountResponse;
                fromJSON(_: any): _258.MsgCreatePeriodicVestingAccountResponse;
                toJSON(_: _258.MsgCreatePeriodicVestingAccountResponse): unknown;
                fromPartial(_: Partial<_258.MsgCreatePeriodicVestingAccountResponse>): _258.MsgCreatePeriodicVestingAccountResponse;
            };
        };
    }
    const ClientFactory: {
        createLCDClient: ({ restEndpoint }: {
            restEndpoint: string;
        }) => Promise<{
            cosmos: {
                auth: {
                    v1beta1: _371.LCDQueryClient;
                };
                authz: {
                    v1beta1: _372.LCDQueryClient;
                };
                bank: {
                    v1beta1: _373.LCDQueryClient;
                };
                base: {
                    node: {
                        v1beta1: _374.LCDQueryClient;
                    };
                    tendermint: {
                        v1beta1: _375.LCDQueryClient;
                    };
                };
                circuit: {
                    v1: _376.LCDQueryClient;
                };
                consensus: {
                    v1: _377.LCDQueryClient;
                };
                distribution: {
                    v1beta1: _391.LCDQueryClient;
                };
                evidence: {
                    v1beta1: _392.LCDQueryClient;
                };
                feegrant: {
                    v1beta1: _393.LCDQueryClient;
                };
                gov: {
                    v1: _394.LCDQueryClient;
                    v1beta1: _395.LCDQueryClient;
                };
                group: {
                    v1: _396.LCDQueryClient;
                };
                mint: {
                    v1beta1: _397.LCDQueryClient;
                };
                nft: {
                    v1beta1: _398.LCDQueryClient;
                };
                params: {
                    v1beta1: _399.LCDQueryClient;
                };
                slashing: {
                    v1beta1: _400.LCDQueryClient;
                };
                staking: {
                    v1beta1: _401.LCDQueryClient;
                };
                tx: {
                    v1beta1: _402.LCDQueryClient;
                };
                upgrade: {
                    v1beta1: _403.LCDQueryClient;
                };
            };
        }>;
    };
}
