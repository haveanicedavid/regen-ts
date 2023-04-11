import { RequestBeginBlock, RequestBeginBlockSDKType, ResponseBeginBlock, ResponseBeginBlockSDKType, RequestEndBlock, RequestEndBlockSDKType, ResponseEndBlock, ResponseEndBlockSDKType, RequestDeliverTx, RequestDeliverTxSDKType, ResponseDeliverTx, ResponseDeliverTxSDKType, ResponseCommit, ResponseCommitSDKType } from "../../../../tendermint/abci/types";
import { StoreKVPair, StoreKVPairSDKType } from "../../v1beta1/listening";
import * as _m0 from "protobufjs/minimal";
import { Long } from "../../../../helpers";
/** ListenBeginBlockRequest is the request type for the ListenBeginBlock RPC method */
export interface ListenBeginBlockRequest {
    req?: RequestBeginBlock;
    res?: ResponseBeginBlock;
}
/** ListenBeginBlockRequest is the request type for the ListenBeginBlock RPC method */
export interface ListenBeginBlockRequestSDKType {
    req?: RequestBeginBlockSDKType;
    res?: ResponseBeginBlockSDKType;
}
/** ListenBeginBlockResponse is the response type for the ListenBeginBlock RPC method */
export interface ListenBeginBlockResponse {
}
/** ListenBeginBlockResponse is the response type for the ListenBeginBlock RPC method */
export interface ListenBeginBlockResponseSDKType {
}
/** ListenEndBlockRequest is the request type for the ListenEndBlock RPC method */
export interface ListenEndBlockRequest {
    req?: RequestEndBlock;
    res?: ResponseEndBlock;
}
/** ListenEndBlockRequest is the request type for the ListenEndBlock RPC method */
export interface ListenEndBlockRequestSDKType {
    req?: RequestEndBlockSDKType;
    res?: ResponseEndBlockSDKType;
}
/** ListenEndBlockResponse is the response type for the ListenEndBlock RPC method */
export interface ListenEndBlockResponse {
}
/** ListenEndBlockResponse is the response type for the ListenEndBlock RPC method */
export interface ListenEndBlockResponseSDKType {
}
/** ListenDeliverTxRequest is the request type for the ListenDeliverTx RPC method */
export interface ListenDeliverTxRequest {
    /** explicitly pass in block height as neither RequestDeliverTx or ResponseDeliverTx contain it */
    blockHeight: Long;
    req?: RequestDeliverTx;
    res?: ResponseDeliverTx;
}
/** ListenDeliverTxRequest is the request type for the ListenDeliverTx RPC method */
export interface ListenDeliverTxRequestSDKType {
    /** explicitly pass in block height as neither RequestDeliverTx or ResponseDeliverTx contain it */
    block_height: Long;
    req?: RequestDeliverTxSDKType;
    res?: ResponseDeliverTxSDKType;
}
/** ListenDeliverTxResponse is the response type for the ListenDeliverTx RPC method */
export interface ListenDeliverTxResponse {
}
/** ListenDeliverTxResponse is the response type for the ListenDeliverTx RPC method */
export interface ListenDeliverTxResponseSDKType {
}
/** ListenCommitRequest is the request type for the ListenCommit RPC method */
export interface ListenCommitRequest {
    /** explicitly pass in block height as ResponseCommit does not contain this info */
    blockHeight: Long;
    res?: ResponseCommit;
    changeSet: StoreKVPair[];
}
/** ListenCommitRequest is the request type for the ListenCommit RPC method */
export interface ListenCommitRequestSDKType {
    /** explicitly pass in block height as ResponseCommit does not contain this info */
    block_height: Long;
    res?: ResponseCommitSDKType;
    change_set: StoreKVPairSDKType[];
}
/** ListenCommitResponse is the response type for the ListenCommit RPC method */
export interface ListenCommitResponse {
}
/** ListenCommitResponse is the response type for the ListenCommit RPC method */
export interface ListenCommitResponseSDKType {
}
export declare const ListenBeginBlockRequest: {
    encode(message: ListenBeginBlockRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListenBeginBlockRequest;
    fromJSON(object: any): ListenBeginBlockRequest;
    toJSON(message: ListenBeginBlockRequest): unknown;
    fromPartial(object: Partial<ListenBeginBlockRequest>): ListenBeginBlockRequest;
};
export declare const ListenBeginBlockResponse: {
    encode(_: ListenBeginBlockResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListenBeginBlockResponse;
    fromJSON(_: any): ListenBeginBlockResponse;
    toJSON(_: ListenBeginBlockResponse): unknown;
    fromPartial(_: Partial<ListenBeginBlockResponse>): ListenBeginBlockResponse;
};
export declare const ListenEndBlockRequest: {
    encode(message: ListenEndBlockRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListenEndBlockRequest;
    fromJSON(object: any): ListenEndBlockRequest;
    toJSON(message: ListenEndBlockRequest): unknown;
    fromPartial(object: Partial<ListenEndBlockRequest>): ListenEndBlockRequest;
};
export declare const ListenEndBlockResponse: {
    encode(_: ListenEndBlockResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListenEndBlockResponse;
    fromJSON(_: any): ListenEndBlockResponse;
    toJSON(_: ListenEndBlockResponse): unknown;
    fromPartial(_: Partial<ListenEndBlockResponse>): ListenEndBlockResponse;
};
export declare const ListenDeliverTxRequest: {
    encode(message: ListenDeliverTxRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListenDeliverTxRequest;
    fromJSON(object: any): ListenDeliverTxRequest;
    toJSON(message: ListenDeliverTxRequest): unknown;
    fromPartial(object: Partial<ListenDeliverTxRequest>): ListenDeliverTxRequest;
};
export declare const ListenDeliverTxResponse: {
    encode(_: ListenDeliverTxResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListenDeliverTxResponse;
    fromJSON(_: any): ListenDeliverTxResponse;
    toJSON(_: ListenDeliverTxResponse): unknown;
    fromPartial(_: Partial<ListenDeliverTxResponse>): ListenDeliverTxResponse;
};
export declare const ListenCommitRequest: {
    encode(message: ListenCommitRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListenCommitRequest;
    fromJSON(object: any): ListenCommitRequest;
    toJSON(message: ListenCommitRequest): unknown;
    fromPartial(object: Partial<ListenCommitRequest>): ListenCommitRequest;
};
export declare const ListenCommitResponse: {
    encode(_: ListenCommitResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListenCommitResponse;
    fromJSON(_: any): ListenCommitResponse;
    toJSON(_: ListenCommitResponse): unknown;
    fromPartial(_: Partial<ListenCommitResponse>): ListenCommitResponse;
};
