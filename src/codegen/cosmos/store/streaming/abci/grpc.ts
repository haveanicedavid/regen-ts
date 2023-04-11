import { RequestBeginBlock, RequestBeginBlockSDKType, ResponseBeginBlock, ResponseBeginBlockSDKType, RequestEndBlock, RequestEndBlockSDKType, ResponseEndBlock, ResponseEndBlockSDKType, RequestDeliverTx, RequestDeliverTxSDKType, ResponseDeliverTx, ResponseDeliverTxSDKType, ResponseCommit, ResponseCommitSDKType } from "../../../../tendermint/abci/types";
import { StoreKVPair, StoreKVPairSDKType } from "../../v1beta1/listening";
import * as _m0 from "protobufjs/minimal";
import { isSet, Long } from "../../../../helpers";
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

export interface ListenBeginBlockResponse {}
/** ListenBeginBlockResponse is the response type for the ListenBeginBlock RPC method */

export interface ListenBeginBlockResponseSDKType {}
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

export interface ListenEndBlockResponse {}
/** ListenEndBlockResponse is the response type for the ListenEndBlock RPC method */

export interface ListenEndBlockResponseSDKType {}
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

export interface ListenDeliverTxResponse {}
/** ListenDeliverTxResponse is the response type for the ListenDeliverTx RPC method */

export interface ListenDeliverTxResponseSDKType {}
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

export interface ListenCommitResponse {}
/** ListenCommitResponse is the response type for the ListenCommit RPC method */

export interface ListenCommitResponseSDKType {}

function createBaseListenBeginBlockRequest(): ListenBeginBlockRequest {
  return {
    req: undefined,
    res: undefined
  };
}

export const ListenBeginBlockRequest = {
  encode(message: ListenBeginBlockRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.req !== undefined) {
      RequestBeginBlock.encode(message.req, writer.uint32(10).fork()).ldelim();
    }

    if (message.res !== undefined) {
      ResponseBeginBlock.encode(message.res, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListenBeginBlockRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListenBeginBlockRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.req = RequestBeginBlock.decode(reader, reader.uint32());
          break;

        case 2:
          message.res = ResponseBeginBlock.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): ListenBeginBlockRequest {
    return {
      req: isSet(object.req) ? RequestBeginBlock.fromJSON(object.req) : undefined,
      res: isSet(object.res) ? ResponseBeginBlock.fromJSON(object.res) : undefined
    };
  },

  toJSON(message: ListenBeginBlockRequest): unknown {
    const obj: any = {};
    message.req !== undefined && (obj.req = message.req ? RequestBeginBlock.toJSON(message.req) : undefined);
    message.res !== undefined && (obj.res = message.res ? ResponseBeginBlock.toJSON(message.res) : undefined);
    return obj;
  },

  fromPartial(object: Partial<ListenBeginBlockRequest>): ListenBeginBlockRequest {
    const message = createBaseListenBeginBlockRequest();
    message.req = object.req !== undefined && object.req !== null ? RequestBeginBlock.fromPartial(object.req) : undefined;
    message.res = object.res !== undefined && object.res !== null ? ResponseBeginBlock.fromPartial(object.res) : undefined;
    return message;
  }

};

function createBaseListenBeginBlockResponse(): ListenBeginBlockResponse {
  return {};
}

export const ListenBeginBlockResponse = {
  encode(_: ListenBeginBlockResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListenBeginBlockResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListenBeginBlockResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(_: any): ListenBeginBlockResponse {
    return {};
  },

  toJSON(_: ListenBeginBlockResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: Partial<ListenBeginBlockResponse>): ListenBeginBlockResponse {
    const message = createBaseListenBeginBlockResponse();
    return message;
  }

};

function createBaseListenEndBlockRequest(): ListenEndBlockRequest {
  return {
    req: undefined,
    res: undefined
  };
}

export const ListenEndBlockRequest = {
  encode(message: ListenEndBlockRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.req !== undefined) {
      RequestEndBlock.encode(message.req, writer.uint32(10).fork()).ldelim();
    }

    if (message.res !== undefined) {
      ResponseEndBlock.encode(message.res, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListenEndBlockRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListenEndBlockRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.req = RequestEndBlock.decode(reader, reader.uint32());
          break;

        case 2:
          message.res = ResponseEndBlock.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): ListenEndBlockRequest {
    return {
      req: isSet(object.req) ? RequestEndBlock.fromJSON(object.req) : undefined,
      res: isSet(object.res) ? ResponseEndBlock.fromJSON(object.res) : undefined
    };
  },

  toJSON(message: ListenEndBlockRequest): unknown {
    const obj: any = {};
    message.req !== undefined && (obj.req = message.req ? RequestEndBlock.toJSON(message.req) : undefined);
    message.res !== undefined && (obj.res = message.res ? ResponseEndBlock.toJSON(message.res) : undefined);
    return obj;
  },

  fromPartial(object: Partial<ListenEndBlockRequest>): ListenEndBlockRequest {
    const message = createBaseListenEndBlockRequest();
    message.req = object.req !== undefined && object.req !== null ? RequestEndBlock.fromPartial(object.req) : undefined;
    message.res = object.res !== undefined && object.res !== null ? ResponseEndBlock.fromPartial(object.res) : undefined;
    return message;
  }

};

function createBaseListenEndBlockResponse(): ListenEndBlockResponse {
  return {};
}

export const ListenEndBlockResponse = {
  encode(_: ListenEndBlockResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListenEndBlockResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListenEndBlockResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(_: any): ListenEndBlockResponse {
    return {};
  },

  toJSON(_: ListenEndBlockResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: Partial<ListenEndBlockResponse>): ListenEndBlockResponse {
    const message = createBaseListenEndBlockResponse();
    return message;
  }

};

function createBaseListenDeliverTxRequest(): ListenDeliverTxRequest {
  return {
    blockHeight: Long.ZERO,
    req: undefined,
    res: undefined
  };
}

export const ListenDeliverTxRequest = {
  encode(message: ListenDeliverTxRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.blockHeight.isZero()) {
      writer.uint32(8).int64(message.blockHeight);
    }

    if (message.req !== undefined) {
      RequestDeliverTx.encode(message.req, writer.uint32(18).fork()).ldelim();
    }

    if (message.res !== undefined) {
      ResponseDeliverTx.encode(message.res, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListenDeliverTxRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListenDeliverTxRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.blockHeight = (reader.int64() as Long);
          break;

        case 2:
          message.req = RequestDeliverTx.decode(reader, reader.uint32());
          break;

        case 3:
          message.res = ResponseDeliverTx.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): ListenDeliverTxRequest {
    return {
      blockHeight: isSet(object.blockHeight) ? Long.fromValue(object.blockHeight) : Long.ZERO,
      req: isSet(object.req) ? RequestDeliverTx.fromJSON(object.req) : undefined,
      res: isSet(object.res) ? ResponseDeliverTx.fromJSON(object.res) : undefined
    };
  },

  toJSON(message: ListenDeliverTxRequest): unknown {
    const obj: any = {};
    message.blockHeight !== undefined && (obj.blockHeight = (message.blockHeight || Long.ZERO).toString());
    message.req !== undefined && (obj.req = message.req ? RequestDeliverTx.toJSON(message.req) : undefined);
    message.res !== undefined && (obj.res = message.res ? ResponseDeliverTx.toJSON(message.res) : undefined);
    return obj;
  },

  fromPartial(object: Partial<ListenDeliverTxRequest>): ListenDeliverTxRequest {
    const message = createBaseListenDeliverTxRequest();
    message.blockHeight = object.blockHeight !== undefined && object.blockHeight !== null ? Long.fromValue(object.blockHeight) : Long.ZERO;
    message.req = object.req !== undefined && object.req !== null ? RequestDeliverTx.fromPartial(object.req) : undefined;
    message.res = object.res !== undefined && object.res !== null ? ResponseDeliverTx.fromPartial(object.res) : undefined;
    return message;
  }

};

function createBaseListenDeliverTxResponse(): ListenDeliverTxResponse {
  return {};
}

export const ListenDeliverTxResponse = {
  encode(_: ListenDeliverTxResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListenDeliverTxResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListenDeliverTxResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(_: any): ListenDeliverTxResponse {
    return {};
  },

  toJSON(_: ListenDeliverTxResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: Partial<ListenDeliverTxResponse>): ListenDeliverTxResponse {
    const message = createBaseListenDeliverTxResponse();
    return message;
  }

};

function createBaseListenCommitRequest(): ListenCommitRequest {
  return {
    blockHeight: Long.ZERO,
    res: undefined,
    changeSet: []
  };
}

export const ListenCommitRequest = {
  encode(message: ListenCommitRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.blockHeight.isZero()) {
      writer.uint32(8).int64(message.blockHeight);
    }

    if (message.res !== undefined) {
      ResponseCommit.encode(message.res, writer.uint32(18).fork()).ldelim();
    }

    for (const v of message.changeSet) {
      StoreKVPair.encode(v!, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListenCommitRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListenCommitRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.blockHeight = (reader.int64() as Long);
          break;

        case 2:
          message.res = ResponseCommit.decode(reader, reader.uint32());
          break;

        case 3:
          message.changeSet.push(StoreKVPair.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): ListenCommitRequest {
    return {
      blockHeight: isSet(object.blockHeight) ? Long.fromValue(object.blockHeight) : Long.ZERO,
      res: isSet(object.res) ? ResponseCommit.fromJSON(object.res) : undefined,
      changeSet: Array.isArray(object?.changeSet) ? object.changeSet.map((e: any) => StoreKVPair.fromJSON(e)) : []
    };
  },

  toJSON(message: ListenCommitRequest): unknown {
    const obj: any = {};
    message.blockHeight !== undefined && (obj.blockHeight = (message.blockHeight || Long.ZERO).toString());
    message.res !== undefined && (obj.res = message.res ? ResponseCommit.toJSON(message.res) : undefined);

    if (message.changeSet) {
      obj.changeSet = message.changeSet.map(e => e ? StoreKVPair.toJSON(e) : undefined);
    } else {
      obj.changeSet = [];
    }

    return obj;
  },

  fromPartial(object: Partial<ListenCommitRequest>): ListenCommitRequest {
    const message = createBaseListenCommitRequest();
    message.blockHeight = object.blockHeight !== undefined && object.blockHeight !== null ? Long.fromValue(object.blockHeight) : Long.ZERO;
    message.res = object.res !== undefined && object.res !== null ? ResponseCommit.fromPartial(object.res) : undefined;
    message.changeSet = object.changeSet?.map(e => StoreKVPair.fromPartial(e)) || [];
    return message;
  }

};

function createBaseListenCommitResponse(): ListenCommitResponse {
  return {};
}

export const ListenCommitResponse = {
  encode(_: ListenCommitResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListenCommitResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListenCommitResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(_: any): ListenCommitResponse {
    return {};
  },

  toJSON(_: ListenCommitResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: Partial<ListenCommitResponse>): ListenCommitResponse {
    const message = createBaseListenCommitResponse();
    return message;
  }

};