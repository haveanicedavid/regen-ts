import * as _105 from "./abci/types";
import * as _106 from "./crypto/keys";
import * as _107 from "./crypto/proof";
import * as _108 from "./libs/bits/types";
import * as _109 from "./p2p/types";
import * as _110 from "./types/block";
import * as _111 from "./types/evidence";
import * as _112 from "./types/params";
import * as _113 from "./types/types";
import * as _114 from "./types/validator";
import * as _115 from "./version/types";
export declare namespace tendermint {
    const abci: {
        checkTxTypeFromJSON(object: any): _105.CheckTxType;
        checkTxTypeToJSON(object: _105.CheckTxType): string;
        responseOfferSnapshot_ResultFromJSON(object: any): _105.ResponseOfferSnapshot_Result;
        responseOfferSnapshot_ResultToJSON(object: _105.ResponseOfferSnapshot_Result): string;
        responseApplySnapshotChunk_ResultFromJSON(object: any): _105.ResponseApplySnapshotChunk_Result;
        responseApplySnapshotChunk_ResultToJSON(object: _105.ResponseApplySnapshotChunk_Result): string;
        evidenceTypeFromJSON(object: any): _105.EvidenceType;
        evidenceTypeToJSON(object: _105.EvidenceType): string;
        CheckTxType: typeof _105.CheckTxType;
        CheckTxTypeSDKType: typeof _105.CheckTxTypeSDKType;
        ResponseOfferSnapshot_Result: typeof _105.ResponseOfferSnapshot_Result;
        ResponseOfferSnapshot_ResultSDKType: typeof _105.ResponseOfferSnapshot_ResultSDKType;
        ResponseApplySnapshotChunk_Result: typeof _105.ResponseApplySnapshotChunk_Result;
        ResponseApplySnapshotChunk_ResultSDKType: typeof _105.ResponseApplySnapshotChunk_ResultSDKType;
        EvidenceType: typeof _105.EvidenceType;
        EvidenceTypeSDKType: typeof _105.EvidenceTypeSDKType;
        Request: {
            encode(message: _105.Request, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _105.Request;
            fromJSON(object: any): _105.Request;
            toJSON(message: _105.Request): unknown;
            fromPartial(object: Partial<_105.Request>): _105.Request;
        };
        RequestEcho: {
            encode(message: _105.RequestEcho, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _105.RequestEcho;
            fromJSON(object: any): _105.RequestEcho;
            toJSON(message: _105.RequestEcho): unknown;
            fromPartial(object: Partial<_105.RequestEcho>): _105.RequestEcho;
        };
        RequestFlush: {
            encode(_: _105.RequestFlush, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _105.RequestFlush;
            fromJSON(_: any): _105.RequestFlush;
            toJSON(_: _105.RequestFlush): unknown;
            fromPartial(_: Partial<_105.RequestFlush>): _105.RequestFlush;
        };
        RequestInfo: {
            encode(message: _105.RequestInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _105.RequestInfo;
            fromJSON(object: any): _105.RequestInfo;
            toJSON(message: _105.RequestInfo): unknown;
            fromPartial(object: Partial<_105.RequestInfo>): _105.RequestInfo;
        };
        RequestSetOption: {
            encode(message: _105.RequestSetOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _105.RequestSetOption;
            fromJSON(object: any): _105.RequestSetOption;
            toJSON(message: _105.RequestSetOption): unknown;
            fromPartial(object: Partial<_105.RequestSetOption>): _105.RequestSetOption;
        };
        RequestInitChain: {
            encode(message: _105.RequestInitChain, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _105.RequestInitChain;
            fromJSON(object: any): _105.RequestInitChain;
            toJSON(message: _105.RequestInitChain): unknown;
            fromPartial(object: Partial<_105.RequestInitChain>): _105.RequestInitChain;
        };
        RequestQuery: {
            encode(message: _105.RequestQuery, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _105.RequestQuery;
            fromJSON(object: any): _105.RequestQuery;
            toJSON(message: _105.RequestQuery): unknown;
            fromPartial(object: Partial<_105.RequestQuery>): _105.RequestQuery;
        };
        RequestBeginBlock: {
            encode(message: _105.RequestBeginBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _105.RequestBeginBlock;
            fromJSON(object: any): _105.RequestBeginBlock;
            toJSON(message: _105.RequestBeginBlock): unknown;
            fromPartial(object: Partial<_105.RequestBeginBlock>): _105.RequestBeginBlock;
        };
        RequestCheckTx: {
            encode(message: _105.RequestCheckTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _105.RequestCheckTx;
            fromJSON(object: any): _105.RequestCheckTx;
            toJSON(message: _105.RequestCheckTx): unknown;
            fromPartial(object: Partial<_105.RequestCheckTx>): _105.RequestCheckTx;
        };
        RequestDeliverTx: {
            encode(message: _105.RequestDeliverTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _105.RequestDeliverTx;
            fromJSON(object: any): _105.RequestDeliverTx;
            toJSON(message: _105.RequestDeliverTx): unknown;
            fromPartial(object: Partial<_105.RequestDeliverTx>): _105.RequestDeliverTx;
        };
        RequestEndBlock: {
            encode(message: _105.RequestEndBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _105.RequestEndBlock;
            fromJSON(object: any): _105.RequestEndBlock;
            toJSON(message: _105.RequestEndBlock): unknown;
            fromPartial(object: Partial<_105.RequestEndBlock>): _105.RequestEndBlock;
        };
        RequestCommit: {
            encode(_: _105.RequestCommit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _105.RequestCommit;
            fromJSON(_: any): _105.RequestCommit;
            toJSON(_: _105.RequestCommit): unknown;
            fromPartial(_: Partial<_105.RequestCommit>): _105.RequestCommit;
        };
        RequestListSnapshots: {
            encode(_: _105.RequestListSnapshots, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _105.RequestListSnapshots;
            fromJSON(_: any): _105.RequestListSnapshots;
            toJSON(_: _105.RequestListSnapshots): unknown;
            fromPartial(_: Partial<_105.RequestListSnapshots>): _105.RequestListSnapshots;
        };
        RequestOfferSnapshot: {
            encode(message: _105.RequestOfferSnapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _105.RequestOfferSnapshot;
            fromJSON(object: any): _105.RequestOfferSnapshot;
            toJSON(message: _105.RequestOfferSnapshot): unknown;
            fromPartial(object: Partial<_105.RequestOfferSnapshot>): _105.RequestOfferSnapshot;
        };
        RequestLoadSnapshotChunk: {
            encode(message: _105.RequestLoadSnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _105.RequestLoadSnapshotChunk;
            fromJSON(object: any): _105.RequestLoadSnapshotChunk;
            toJSON(message: _105.RequestLoadSnapshotChunk): unknown;
            fromPartial(object: Partial<_105.RequestLoadSnapshotChunk>): _105.RequestLoadSnapshotChunk;
        };
        RequestApplySnapshotChunk: {
            encode(message: _105.RequestApplySnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _105.RequestApplySnapshotChunk;
            fromJSON(object: any): _105.RequestApplySnapshotChunk;
            toJSON(message: _105.RequestApplySnapshotChunk): unknown;
            fromPartial(object: Partial<_105.RequestApplySnapshotChunk>): _105.RequestApplySnapshotChunk;
        };
        Response: {
            encode(message: _105.Response, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _105.Response;
            fromJSON(object: any): _105.Response;
            toJSON(message: _105.Response): unknown;
            fromPartial(object: Partial<_105.Response>): _105.Response;
        };
        ResponseException: {
            encode(message: _105.ResponseException, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _105.ResponseException;
            fromJSON(object: any): _105.ResponseException;
            toJSON(message: _105.ResponseException): unknown;
            fromPartial(object: Partial<_105.ResponseException>): _105.ResponseException;
        };
        ResponseEcho: {
            encode(message: _105.ResponseEcho, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _105.ResponseEcho;
            fromJSON(object: any): _105.ResponseEcho;
            toJSON(message: _105.ResponseEcho): unknown;
            fromPartial(object: Partial<_105.ResponseEcho>): _105.ResponseEcho;
        };
        ResponseFlush: {
            encode(_: _105.ResponseFlush, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _105.ResponseFlush;
            fromJSON(_: any): _105.ResponseFlush;
            toJSON(_: _105.ResponseFlush): unknown;
            fromPartial(_: Partial<_105.ResponseFlush>): _105.ResponseFlush;
        };
        ResponseInfo: {
            encode(message: _105.ResponseInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _105.ResponseInfo;
            fromJSON(object: any): _105.ResponseInfo;
            toJSON(message: _105.ResponseInfo): unknown;
            fromPartial(object: Partial<_105.ResponseInfo>): _105.ResponseInfo;
        };
        ResponseSetOption: {
            encode(message: _105.ResponseSetOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _105.ResponseSetOption;
            fromJSON(object: any): _105.ResponseSetOption;
            toJSON(message: _105.ResponseSetOption): unknown;
            fromPartial(object: Partial<_105.ResponseSetOption>): _105.ResponseSetOption;
        };
        ResponseInitChain: {
            encode(message: _105.ResponseInitChain, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _105.ResponseInitChain;
            fromJSON(object: any): _105.ResponseInitChain;
            toJSON(message: _105.ResponseInitChain): unknown;
            fromPartial(object: Partial<_105.ResponseInitChain>): _105.ResponseInitChain;
        };
        ResponseQuery: {
            encode(message: _105.ResponseQuery, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _105.ResponseQuery;
            fromJSON(object: any): _105.ResponseQuery;
            toJSON(message: _105.ResponseQuery): unknown;
            fromPartial(object: Partial<_105.ResponseQuery>): _105.ResponseQuery;
        };
        ResponseBeginBlock: {
            encode(message: _105.ResponseBeginBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _105.ResponseBeginBlock;
            fromJSON(object: any): _105.ResponseBeginBlock;
            toJSON(message: _105.ResponseBeginBlock): unknown;
            fromPartial(object: Partial<_105.ResponseBeginBlock>): _105.ResponseBeginBlock;
        };
        ResponseCheckTx: {
            encode(message: _105.ResponseCheckTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _105.ResponseCheckTx;
            fromJSON(object: any): _105.ResponseCheckTx;
            toJSON(message: _105.ResponseCheckTx): unknown;
            fromPartial(object: Partial<_105.ResponseCheckTx>): _105.ResponseCheckTx;
        };
        ResponseDeliverTx: {
            encode(message: _105.ResponseDeliverTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _105.ResponseDeliverTx;
            fromJSON(object: any): _105.ResponseDeliverTx;
            toJSON(message: _105.ResponseDeliverTx): unknown;
            fromPartial(object: Partial<_105.ResponseDeliverTx>): _105.ResponseDeliverTx;
        };
        ResponseEndBlock: {
            encode(message: _105.ResponseEndBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _105.ResponseEndBlock;
            fromJSON(object: any): _105.ResponseEndBlock;
            toJSON(message: _105.ResponseEndBlock): unknown;
            fromPartial(object: Partial<_105.ResponseEndBlock>): _105.ResponseEndBlock;
        };
        ResponseCommit: {
            encode(message: _105.ResponseCommit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _105.ResponseCommit;
            fromJSON(object: any): _105.ResponseCommit;
            toJSON(message: _105.ResponseCommit): unknown;
            fromPartial(object: Partial<_105.ResponseCommit>): _105.ResponseCommit;
        };
        ResponseListSnapshots: {
            encode(message: _105.ResponseListSnapshots, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _105.ResponseListSnapshots;
            fromJSON(object: any): _105.ResponseListSnapshots;
            toJSON(message: _105.ResponseListSnapshots): unknown;
            fromPartial(object: Partial<_105.ResponseListSnapshots>): _105.ResponseListSnapshots;
        };
        ResponseOfferSnapshot: {
            encode(message: _105.ResponseOfferSnapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _105.ResponseOfferSnapshot;
            fromJSON(object: any): _105.ResponseOfferSnapshot;
            toJSON(message: _105.ResponseOfferSnapshot): unknown;
            fromPartial(object: Partial<_105.ResponseOfferSnapshot>): _105.ResponseOfferSnapshot;
        };
        ResponseLoadSnapshotChunk: {
            encode(message: _105.ResponseLoadSnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _105.ResponseLoadSnapshotChunk;
            fromJSON(object: any): _105.ResponseLoadSnapshotChunk;
            toJSON(message: _105.ResponseLoadSnapshotChunk): unknown;
            fromPartial(object: Partial<_105.ResponseLoadSnapshotChunk>): _105.ResponseLoadSnapshotChunk;
        };
        ResponseApplySnapshotChunk: {
            encode(message: _105.ResponseApplySnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _105.ResponseApplySnapshotChunk;
            fromJSON(object: any): _105.ResponseApplySnapshotChunk;
            toJSON(message: _105.ResponseApplySnapshotChunk): unknown;
            fromPartial(object: Partial<_105.ResponseApplySnapshotChunk>): _105.ResponseApplySnapshotChunk;
        };
        ConsensusParams: {
            encode(message: _105.ConsensusParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _105.ConsensusParams;
            fromJSON(object: any): _105.ConsensusParams;
            toJSON(message: _105.ConsensusParams): unknown;
            fromPartial(object: Partial<_105.ConsensusParams>): _105.ConsensusParams;
        };
        BlockParams: {
            encode(message: _105.BlockParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _105.BlockParams;
            fromJSON(object: any): _105.BlockParams;
            toJSON(message: _105.BlockParams): unknown;
            fromPartial(object: Partial<_105.BlockParams>): _105.BlockParams;
        };
        LastCommitInfo: {
            encode(message: _105.LastCommitInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _105.LastCommitInfo;
            fromJSON(object: any): _105.LastCommitInfo;
            toJSON(message: _105.LastCommitInfo): unknown;
            fromPartial(object: Partial<_105.LastCommitInfo>): _105.LastCommitInfo;
        };
        Event: {
            encode(message: _105.Event, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _105.Event;
            fromJSON(object: any): _105.Event;
            toJSON(message: _105.Event): unknown;
            fromPartial(object: Partial<_105.Event>): _105.Event;
        };
        EventAttribute: {
            encode(message: _105.EventAttribute, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _105.EventAttribute;
            fromJSON(object: any): _105.EventAttribute;
            toJSON(message: _105.EventAttribute): unknown;
            fromPartial(object: Partial<_105.EventAttribute>): _105.EventAttribute;
        };
        TxResult: {
            encode(message: _105.TxResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _105.TxResult;
            fromJSON(object: any): _105.TxResult;
            toJSON(message: _105.TxResult): unknown;
            fromPartial(object: Partial<_105.TxResult>): _105.TxResult;
        };
        Validator: {
            encode(message: _105.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _105.Validator;
            fromJSON(object: any): _105.Validator;
            toJSON(message: _105.Validator): unknown;
            fromPartial(object: Partial<_105.Validator>): _105.Validator;
        };
        ValidatorUpdate: {
            encode(message: _105.ValidatorUpdate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _105.ValidatorUpdate;
            fromJSON(object: any): _105.ValidatorUpdate;
            toJSON(message: _105.ValidatorUpdate): unknown;
            fromPartial(object: Partial<_105.ValidatorUpdate>): _105.ValidatorUpdate;
        };
        VoteInfo: {
            encode(message: _105.VoteInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _105.VoteInfo;
            fromJSON(object: any): _105.VoteInfo;
            toJSON(message: _105.VoteInfo): unknown;
            fromPartial(object: Partial<_105.VoteInfo>): _105.VoteInfo;
        };
        Evidence: {
            encode(message: _105.Evidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _105.Evidence;
            fromJSON(object: any): _105.Evidence;
            toJSON(message: _105.Evidence): unknown;
            fromPartial(object: Partial<_105.Evidence>): _105.Evidence;
        };
        Snapshot: {
            encode(message: _105.Snapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _105.Snapshot;
            fromJSON(object: any): _105.Snapshot;
            toJSON(message: _105.Snapshot): unknown;
            fromPartial(object: Partial<_105.Snapshot>): _105.Snapshot;
        };
    };
    const crypto: {
        Proof: {
            encode(message: _107.Proof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _107.Proof;
            fromJSON(object: any): _107.Proof;
            toJSON(message: _107.Proof): unknown;
            fromPartial(object: Partial<_107.Proof>): _107.Proof;
        };
        ValueOp: {
            encode(message: _107.ValueOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _107.ValueOp;
            fromJSON(object: any): _107.ValueOp;
            toJSON(message: _107.ValueOp): unknown;
            fromPartial(object: Partial<_107.ValueOp>): _107.ValueOp;
        };
        DominoOp: {
            encode(message: _107.DominoOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _107.DominoOp;
            fromJSON(object: any): _107.DominoOp;
            toJSON(message: _107.DominoOp): unknown;
            fromPartial(object: Partial<_107.DominoOp>): _107.DominoOp;
        };
        ProofOp: {
            encode(message: _107.ProofOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _107.ProofOp;
            fromJSON(object: any): _107.ProofOp;
            toJSON(message: _107.ProofOp): unknown;
            fromPartial(object: Partial<_107.ProofOp>): _107.ProofOp;
        };
        ProofOps: {
            encode(message: _107.ProofOps, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _107.ProofOps;
            fromJSON(object: any): _107.ProofOps;
            toJSON(message: _107.ProofOps): unknown;
            fromPartial(object: Partial<_107.ProofOps>): _107.ProofOps;
        };
        PublicKey: {
            encode(message: _106.PublicKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _106.PublicKey;
            fromJSON(object: any): _106.PublicKey;
            toJSON(message: _106.PublicKey): unknown;
            fromPartial(object: Partial<_106.PublicKey>): _106.PublicKey;
        };
    };
    namespace libs {
        const bits: {
            BitArray: {
                encode(message: _108.BitArray, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _108.BitArray;
                fromJSON(object: any): _108.BitArray;
                toJSON(message: _108.BitArray): unknown;
                fromPartial(object: Partial<_108.BitArray>): _108.BitArray;
            };
        };
    }
    const p2p: {
        NetAddress: {
            encode(message: _109.NetAddress, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _109.NetAddress;
            fromJSON(object: any): _109.NetAddress;
            toJSON(message: _109.NetAddress): unknown;
            fromPartial(object: Partial<_109.NetAddress>): _109.NetAddress;
        };
        ProtocolVersion: {
            encode(message: _109.ProtocolVersion, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _109.ProtocolVersion;
            fromJSON(object: any): _109.ProtocolVersion;
            toJSON(message: _109.ProtocolVersion): unknown;
            fromPartial(object: Partial<_109.ProtocolVersion>): _109.ProtocolVersion;
        };
        DefaultNodeInfo: {
            encode(message: _109.DefaultNodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _109.DefaultNodeInfo;
            fromJSON(object: any): _109.DefaultNodeInfo;
            toJSON(message: _109.DefaultNodeInfo): unknown;
            fromPartial(object: Partial<_109.DefaultNodeInfo>): _109.DefaultNodeInfo;
        };
        DefaultNodeInfoOther: {
            encode(message: _109.DefaultNodeInfoOther, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _109.DefaultNodeInfoOther;
            fromJSON(object: any): _109.DefaultNodeInfoOther;
            toJSON(message: _109.DefaultNodeInfoOther): unknown;
            fromPartial(object: Partial<_109.DefaultNodeInfoOther>): _109.DefaultNodeInfoOther;
        };
    };
    const types: {
        ValidatorSet: {
            encode(message: _114.ValidatorSet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _114.ValidatorSet;
            fromJSON(object: any): _114.ValidatorSet;
            toJSON(message: _114.ValidatorSet): unknown;
            fromPartial(object: Partial<_114.ValidatorSet>): _114.ValidatorSet;
        };
        Validator: {
            encode(message: _114.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _114.Validator;
            fromJSON(object: any): _114.Validator;
            toJSON(message: _114.Validator): unknown;
            fromPartial(object: Partial<_114.Validator>): _114.Validator;
        };
        SimpleValidator: {
            encode(message: _114.SimpleValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _114.SimpleValidator;
            fromJSON(object: any): _114.SimpleValidator;
            toJSON(message: _114.SimpleValidator): unknown;
            fromPartial(object: Partial<_114.SimpleValidator>): _114.SimpleValidator;
        };
        blockIDFlagFromJSON(object: any): _113.BlockIDFlag;
        blockIDFlagToJSON(object: _113.BlockIDFlag): string;
        signedMsgTypeFromJSON(object: any): _113.SignedMsgType;
        signedMsgTypeToJSON(object: _113.SignedMsgType): string;
        BlockIDFlag: typeof _113.BlockIDFlag;
        BlockIDFlagSDKType: typeof _113.BlockIDFlagSDKType;
        SignedMsgType: typeof _113.SignedMsgType;
        SignedMsgTypeSDKType: typeof _113.SignedMsgTypeSDKType;
        PartSetHeader: {
            encode(message: _113.PartSetHeader, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _113.PartSetHeader;
            fromJSON(object: any): _113.PartSetHeader;
            toJSON(message: _113.PartSetHeader): unknown;
            fromPartial(object: Partial<_113.PartSetHeader>): _113.PartSetHeader;
        };
        Part: {
            encode(message: _113.Part, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _113.Part;
            fromJSON(object: any): _113.Part;
            toJSON(message: _113.Part): unknown;
            fromPartial(object: Partial<_113.Part>): _113.Part;
        };
        BlockID: {
            encode(message: _113.BlockID, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _113.BlockID;
            fromJSON(object: any): _113.BlockID;
            toJSON(message: _113.BlockID): unknown;
            fromPartial(object: Partial<_113.BlockID>): _113.BlockID;
        };
        Header: {
            encode(message: _113.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _113.Header;
            fromJSON(object: any): _113.Header;
            toJSON(message: _113.Header): unknown;
            fromPartial(object: Partial<_113.Header>): _113.Header;
        };
        Data: {
            encode(message: _113.Data, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _113.Data;
            fromJSON(object: any): _113.Data;
            toJSON(message: _113.Data): unknown;
            fromPartial(object: Partial<_113.Data>): _113.Data;
        };
        Vote: {
            encode(message: _113.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _113.Vote;
            fromJSON(object: any): _113.Vote;
            toJSON(message: _113.Vote): unknown;
            fromPartial(object: Partial<_113.Vote>): _113.Vote;
        };
        Commit: {
            encode(message: _113.Commit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _113.Commit;
            fromJSON(object: any): _113.Commit;
            toJSON(message: _113.Commit): unknown;
            fromPartial(object: Partial<_113.Commit>): _113.Commit;
        };
        CommitSig: {
            encode(message: _113.CommitSig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _113.CommitSig;
            fromJSON(object: any): _113.CommitSig;
            toJSON(message: _113.CommitSig): unknown;
            fromPartial(object: Partial<_113.CommitSig>): _113.CommitSig;
        };
        Proposal: {
            encode(message: _113.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _113.Proposal;
            fromJSON(object: any): _113.Proposal;
            toJSON(message: _113.Proposal): unknown;
            fromPartial(object: Partial<_113.Proposal>): _113.Proposal;
        };
        SignedHeader: {
            encode(message: _113.SignedHeader, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _113.SignedHeader;
            fromJSON(object: any): _113.SignedHeader;
            toJSON(message: _113.SignedHeader): unknown;
            fromPartial(object: Partial<_113.SignedHeader>): _113.SignedHeader;
        };
        LightBlock: {
            encode(message: _113.LightBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _113.LightBlock;
            fromJSON(object: any): _113.LightBlock;
            toJSON(message: _113.LightBlock): unknown;
            fromPartial(object: Partial<_113.LightBlock>): _113.LightBlock;
        };
        BlockMeta: {
            encode(message: _113.BlockMeta, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _113.BlockMeta;
            fromJSON(object: any): _113.BlockMeta;
            toJSON(message: _113.BlockMeta): unknown;
            fromPartial(object: Partial<_113.BlockMeta>): _113.BlockMeta;
        };
        TxProof: {
            encode(message: _113.TxProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _113.TxProof;
            fromJSON(object: any): _113.TxProof;
            toJSON(message: _113.TxProof): unknown;
            fromPartial(object: Partial<_113.TxProof>): _113.TxProof;
        };
        ConsensusParams: {
            encode(message: _112.ConsensusParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _112.ConsensusParams;
            fromJSON(object: any): _112.ConsensusParams;
            toJSON(message: _112.ConsensusParams): unknown;
            fromPartial(object: Partial<_112.ConsensusParams>): _112.ConsensusParams;
        };
        BlockParams: {
            encode(message: _112.BlockParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _112.BlockParams;
            fromJSON(object: any): _112.BlockParams;
            toJSON(message: _112.BlockParams): unknown;
            fromPartial(object: Partial<_112.BlockParams>): _112.BlockParams;
        };
        EvidenceParams: {
            encode(message: _112.EvidenceParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _112.EvidenceParams;
            fromJSON(object: any): _112.EvidenceParams;
            toJSON(message: _112.EvidenceParams): unknown;
            fromPartial(object: Partial<_112.EvidenceParams>): _112.EvidenceParams;
        };
        ValidatorParams: {
            encode(message: _112.ValidatorParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _112.ValidatorParams;
            fromJSON(object: any): _112.ValidatorParams;
            toJSON(message: _112.ValidatorParams): unknown;
            fromPartial(object: Partial<_112.ValidatorParams>): _112.ValidatorParams;
        };
        VersionParams: {
            encode(message: _112.VersionParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _112.VersionParams;
            fromJSON(object: any): _112.VersionParams;
            toJSON(message: _112.VersionParams): unknown;
            fromPartial(object: Partial<_112.VersionParams>): _112.VersionParams;
        };
        HashedParams: {
            encode(message: _112.HashedParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _112.HashedParams;
            fromJSON(object: any): _112.HashedParams;
            toJSON(message: _112.HashedParams): unknown;
            fromPartial(object: Partial<_112.HashedParams>): _112.HashedParams;
        };
        Evidence: {
            encode(message: _111.Evidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _111.Evidence;
            fromJSON(object: any): _111.Evidence;
            toJSON(message: _111.Evidence): unknown;
            fromPartial(object: Partial<_111.Evidence>): _111.Evidence;
        };
        DuplicateVoteEvidence: {
            encode(message: _111.DuplicateVoteEvidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _111.DuplicateVoteEvidence;
            fromJSON(object: any): _111.DuplicateVoteEvidence;
            toJSON(message: _111.DuplicateVoteEvidence): unknown;
            fromPartial(object: Partial<_111.DuplicateVoteEvidence>): _111.DuplicateVoteEvidence;
        };
        LightClientAttackEvidence: {
            encode(message: _111.LightClientAttackEvidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _111.LightClientAttackEvidence;
            fromJSON(object: any): _111.LightClientAttackEvidence;
            toJSON(message: _111.LightClientAttackEvidence): unknown;
            fromPartial(object: Partial<_111.LightClientAttackEvidence>): _111.LightClientAttackEvidence;
        };
        EvidenceList: {
            encode(message: _111.EvidenceList, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _111.EvidenceList;
            fromJSON(object: any): _111.EvidenceList;
            toJSON(message: _111.EvidenceList): unknown;
            fromPartial(object: Partial<_111.EvidenceList>): _111.EvidenceList;
        };
        Block: {
            encode(message: _110.Block, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _110.Block;
            fromJSON(object: any): _110.Block;
            toJSON(message: _110.Block): unknown;
            fromPartial(object: Partial<_110.Block>): _110.Block;
        };
    };
    const version: {
        App: {
            encode(message: _115.App, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _115.App;
            fromJSON(object: any): _115.App;
            toJSON(message: _115.App): unknown;
            fromPartial(object: Partial<_115.App>): _115.App;
        };
        Consensus: {
            encode(message: _115.Consensus, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _115.Consensus;
            fromJSON(object: any): _115.Consensus;
            toJSON(message: _115.Consensus): unknown;
            fromPartial(object: Partial<_115.Consensus>): _115.Consensus;
        };
    };
}
