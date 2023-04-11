import * as _271 from "./abci/types";
import * as _274 from "./crypto/keys";
import * as _275 from "./crypto/proof";
import * as _277 from "./libs/bits/types";
import * as _279 from "./p2p/types";
import * as _285 from "./types/block";
import * as _286 from "./types/evidence";
import * as _287 from "./types/params";
import * as _288 from "./types/types";
import * as _289 from "./types/validator";
import * as _291 from "./version/types";
export declare namespace tendermint {
    const abci: {
        checkTxTypeFromJSON(object: any): _271.CheckTxType;
        checkTxTypeToJSON(object: _271.CheckTxType): string;
        responseOfferSnapshot_ResultFromJSON(object: any): _271.ResponseOfferSnapshot_Result;
        responseOfferSnapshot_ResultToJSON(object: _271.ResponseOfferSnapshot_Result): string;
        responseApplySnapshotChunk_ResultFromJSON(object: any): _271.ResponseApplySnapshotChunk_Result;
        responseApplySnapshotChunk_ResultToJSON(object: _271.ResponseApplySnapshotChunk_Result): string;
        responseProcessProposal_ProposalStatusFromJSON(object: any): _271.ResponseProcessProposal_ProposalStatus;
        responseProcessProposal_ProposalStatusToJSON(object: _271.ResponseProcessProposal_ProposalStatus): string;
        misbehaviorTypeFromJSON(object: any): _271.MisbehaviorType;
        misbehaviorTypeToJSON(object: _271.MisbehaviorType): string;
        CheckTxType: typeof _271.CheckTxType;
        CheckTxTypeSDKType: typeof _271.CheckTxTypeSDKType;
        ResponseOfferSnapshot_Result: typeof _271.ResponseOfferSnapshot_Result;
        ResponseOfferSnapshot_ResultSDKType: typeof _271.ResponseOfferSnapshot_ResultSDKType;
        ResponseApplySnapshotChunk_Result: typeof _271.ResponseApplySnapshotChunk_Result;
        ResponseApplySnapshotChunk_ResultSDKType: typeof _271.ResponseApplySnapshotChunk_ResultSDKType;
        ResponseProcessProposal_ProposalStatus: typeof _271.ResponseProcessProposal_ProposalStatus;
        ResponseProcessProposal_ProposalStatusSDKType: typeof _271.ResponseProcessProposal_ProposalStatusSDKType;
        MisbehaviorType: typeof _271.MisbehaviorType;
        MisbehaviorTypeSDKType: typeof _271.MisbehaviorTypeSDKType;
        Request: {
            encode(message: _271.Request, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _271.Request;
            fromJSON(object: any): _271.Request;
            toJSON(message: _271.Request): unknown;
            fromPartial(object: Partial<_271.Request>): _271.Request;
        };
        RequestEcho: {
            encode(message: _271.RequestEcho, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _271.RequestEcho;
            fromJSON(object: any): _271.RequestEcho;
            toJSON(message: _271.RequestEcho): unknown;
            fromPartial(object: Partial<_271.RequestEcho>): _271.RequestEcho;
        };
        RequestFlush: {
            encode(_: _271.RequestFlush, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _271.RequestFlush;
            fromJSON(_: any): _271.RequestFlush;
            toJSON(_: _271.RequestFlush): unknown;
            fromPartial(_: Partial<_271.RequestFlush>): _271.RequestFlush;
        };
        RequestInfo: {
            encode(message: _271.RequestInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _271.RequestInfo;
            fromJSON(object: any): _271.RequestInfo;
            toJSON(message: _271.RequestInfo): unknown;
            fromPartial(object: Partial<_271.RequestInfo>): _271.RequestInfo;
        };
        RequestInitChain: {
            encode(message: _271.RequestInitChain, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _271.RequestInitChain;
            fromJSON(object: any): _271.RequestInitChain;
            toJSON(message: _271.RequestInitChain): unknown;
            fromPartial(object: Partial<_271.RequestInitChain>): _271.RequestInitChain;
        };
        RequestQuery: {
            encode(message: _271.RequestQuery, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _271.RequestQuery;
            fromJSON(object: any): _271.RequestQuery;
            toJSON(message: _271.RequestQuery): unknown;
            fromPartial(object: Partial<_271.RequestQuery>): _271.RequestQuery;
        };
        RequestBeginBlock: {
            encode(message: _271.RequestBeginBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _271.RequestBeginBlock;
            fromJSON(object: any): _271.RequestBeginBlock;
            toJSON(message: _271.RequestBeginBlock): unknown;
            fromPartial(object: Partial<_271.RequestBeginBlock>): _271.RequestBeginBlock;
        };
        RequestCheckTx: {
            encode(message: _271.RequestCheckTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _271.RequestCheckTx;
            fromJSON(object: any): _271.RequestCheckTx;
            toJSON(message: _271.RequestCheckTx): unknown;
            fromPartial(object: Partial<_271.RequestCheckTx>): _271.RequestCheckTx;
        };
        RequestDeliverTx: {
            encode(message: _271.RequestDeliverTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _271.RequestDeliverTx;
            fromJSON(object: any): _271.RequestDeliverTx;
            toJSON(message: _271.RequestDeliverTx): unknown;
            fromPartial(object: Partial<_271.RequestDeliverTx>): _271.RequestDeliverTx;
        };
        RequestEndBlock: {
            encode(message: _271.RequestEndBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _271.RequestEndBlock;
            fromJSON(object: any): _271.RequestEndBlock;
            toJSON(message: _271.RequestEndBlock): unknown;
            fromPartial(object: Partial<_271.RequestEndBlock>): _271.RequestEndBlock;
        };
        RequestCommit: {
            encode(_: _271.RequestCommit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _271.RequestCommit;
            fromJSON(_: any): _271.RequestCommit;
            toJSON(_: _271.RequestCommit): unknown;
            fromPartial(_: Partial<_271.RequestCommit>): _271.RequestCommit;
        };
        RequestListSnapshots: {
            encode(_: _271.RequestListSnapshots, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _271.RequestListSnapshots;
            fromJSON(_: any): _271.RequestListSnapshots;
            toJSON(_: _271.RequestListSnapshots): unknown;
            fromPartial(_: Partial<_271.RequestListSnapshots>): _271.RequestListSnapshots;
        };
        RequestOfferSnapshot: {
            encode(message: _271.RequestOfferSnapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _271.RequestOfferSnapshot;
            fromJSON(object: any): _271.RequestOfferSnapshot;
            toJSON(message: _271.RequestOfferSnapshot): unknown;
            fromPartial(object: Partial<_271.RequestOfferSnapshot>): _271.RequestOfferSnapshot;
        };
        RequestLoadSnapshotChunk: {
            encode(message: _271.RequestLoadSnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _271.RequestLoadSnapshotChunk;
            fromJSON(object: any): _271.RequestLoadSnapshotChunk;
            toJSON(message: _271.RequestLoadSnapshotChunk): unknown;
            fromPartial(object: Partial<_271.RequestLoadSnapshotChunk>): _271.RequestLoadSnapshotChunk;
        };
        RequestApplySnapshotChunk: {
            encode(message: _271.RequestApplySnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _271.RequestApplySnapshotChunk;
            fromJSON(object: any): _271.RequestApplySnapshotChunk;
            toJSON(message: _271.RequestApplySnapshotChunk): unknown;
            fromPartial(object: Partial<_271.RequestApplySnapshotChunk>): _271.RequestApplySnapshotChunk;
        };
        RequestPrepareProposal: {
            encode(message: _271.RequestPrepareProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _271.RequestPrepareProposal;
            fromJSON(object: any): _271.RequestPrepareProposal;
            toJSON(message: _271.RequestPrepareProposal): unknown;
            fromPartial(object: Partial<_271.RequestPrepareProposal>): _271.RequestPrepareProposal;
        };
        RequestProcessProposal: {
            encode(message: _271.RequestProcessProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _271.RequestProcessProposal;
            fromJSON(object: any): _271.RequestProcessProposal;
            toJSON(message: _271.RequestProcessProposal): unknown;
            fromPartial(object: Partial<_271.RequestProcessProposal>): _271.RequestProcessProposal;
        };
        Response: {
            encode(message: _271.Response, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _271.Response;
            fromJSON(object: any): _271.Response;
            toJSON(message: _271.Response): unknown;
            fromPartial(object: Partial<_271.Response>): _271.Response;
        };
        ResponseException: {
            encode(message: _271.ResponseException, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _271.ResponseException;
            fromJSON(object: any): _271.ResponseException;
            toJSON(message: _271.ResponseException): unknown;
            fromPartial(object: Partial<_271.ResponseException>): _271.ResponseException;
        };
        ResponseEcho: {
            encode(message: _271.ResponseEcho, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _271.ResponseEcho;
            fromJSON(object: any): _271.ResponseEcho;
            toJSON(message: _271.ResponseEcho): unknown;
            fromPartial(object: Partial<_271.ResponseEcho>): _271.ResponseEcho;
        };
        ResponseFlush: {
            encode(_: _271.ResponseFlush, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _271.ResponseFlush;
            fromJSON(_: any): _271.ResponseFlush;
            toJSON(_: _271.ResponseFlush): unknown;
            fromPartial(_: Partial<_271.ResponseFlush>): _271.ResponseFlush;
        };
        ResponseInfo: {
            encode(message: _271.ResponseInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _271.ResponseInfo;
            fromJSON(object: any): _271.ResponseInfo;
            toJSON(message: _271.ResponseInfo): unknown;
            fromPartial(object: Partial<_271.ResponseInfo>): _271.ResponseInfo;
        };
        ResponseInitChain: {
            encode(message: _271.ResponseInitChain, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _271.ResponseInitChain;
            fromJSON(object: any): _271.ResponseInitChain;
            toJSON(message: _271.ResponseInitChain): unknown;
            fromPartial(object: Partial<_271.ResponseInitChain>): _271.ResponseInitChain;
        };
        ResponseQuery: {
            encode(message: _271.ResponseQuery, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _271.ResponseQuery;
            fromJSON(object: any): _271.ResponseQuery;
            toJSON(message: _271.ResponseQuery): unknown;
            fromPartial(object: Partial<_271.ResponseQuery>): _271.ResponseQuery;
        };
        ResponseBeginBlock: {
            encode(message: _271.ResponseBeginBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _271.ResponseBeginBlock;
            fromJSON(object: any): _271.ResponseBeginBlock;
            toJSON(message: _271.ResponseBeginBlock): unknown;
            fromPartial(object: Partial<_271.ResponseBeginBlock>): _271.ResponseBeginBlock;
        };
        ResponseCheckTx: {
            encode(message: _271.ResponseCheckTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _271.ResponseCheckTx;
            fromJSON(object: any): _271.ResponseCheckTx;
            toJSON(message: _271.ResponseCheckTx): unknown;
            fromPartial(object: Partial<_271.ResponseCheckTx>): _271.ResponseCheckTx;
        };
        ResponseDeliverTx: {
            encode(message: _271.ResponseDeliverTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _271.ResponseDeliverTx;
            fromJSON(object: any): _271.ResponseDeliverTx;
            toJSON(message: _271.ResponseDeliverTx): unknown;
            fromPartial(object: Partial<_271.ResponseDeliverTx>): _271.ResponseDeliverTx;
        };
        ResponseEndBlock: {
            encode(message: _271.ResponseEndBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _271.ResponseEndBlock;
            fromJSON(object: any): _271.ResponseEndBlock;
            toJSON(message: _271.ResponseEndBlock): unknown;
            fromPartial(object: Partial<_271.ResponseEndBlock>): _271.ResponseEndBlock;
        };
        ResponseCommit: {
            encode(message: _271.ResponseCommit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _271.ResponseCommit;
            fromJSON(object: any): _271.ResponseCommit;
            toJSON(message: _271.ResponseCommit): unknown;
            fromPartial(object: Partial<_271.ResponseCommit>): _271.ResponseCommit;
        };
        ResponseListSnapshots: {
            encode(message: _271.ResponseListSnapshots, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _271.ResponseListSnapshots;
            fromJSON(object: any): _271.ResponseListSnapshots;
            toJSON(message: _271.ResponseListSnapshots): unknown;
            fromPartial(object: Partial<_271.ResponseListSnapshots>): _271.ResponseListSnapshots;
        };
        ResponseOfferSnapshot: {
            encode(message: _271.ResponseOfferSnapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _271.ResponseOfferSnapshot;
            fromJSON(object: any): _271.ResponseOfferSnapshot;
            toJSON(message: _271.ResponseOfferSnapshot): unknown;
            fromPartial(object: Partial<_271.ResponseOfferSnapshot>): _271.ResponseOfferSnapshot;
        };
        ResponseLoadSnapshotChunk: {
            encode(message: _271.ResponseLoadSnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _271.ResponseLoadSnapshotChunk;
            fromJSON(object: any): _271.ResponseLoadSnapshotChunk;
            toJSON(message: _271.ResponseLoadSnapshotChunk): unknown;
            fromPartial(object: Partial<_271.ResponseLoadSnapshotChunk>): _271.ResponseLoadSnapshotChunk;
        };
        ResponseApplySnapshotChunk: {
            encode(message: _271.ResponseApplySnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _271.ResponseApplySnapshotChunk;
            fromJSON(object: any): _271.ResponseApplySnapshotChunk;
            toJSON(message: _271.ResponseApplySnapshotChunk): unknown;
            fromPartial(object: Partial<_271.ResponseApplySnapshotChunk>): _271.ResponseApplySnapshotChunk;
        };
        ResponsePrepareProposal: {
            encode(message: _271.ResponsePrepareProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _271.ResponsePrepareProposal;
            fromJSON(object: any): _271.ResponsePrepareProposal;
            toJSON(message: _271.ResponsePrepareProposal): unknown;
            fromPartial(object: Partial<_271.ResponsePrepareProposal>): _271.ResponsePrepareProposal;
        };
        ResponseProcessProposal: {
            encode(message: _271.ResponseProcessProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _271.ResponseProcessProposal;
            fromJSON(object: any): _271.ResponseProcessProposal;
            toJSON(message: _271.ResponseProcessProposal): unknown;
            fromPartial(object: Partial<_271.ResponseProcessProposal>): _271.ResponseProcessProposal;
        };
        CommitInfo: {
            encode(message: _271.CommitInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _271.CommitInfo;
            fromJSON(object: any): _271.CommitInfo;
            toJSON(message: _271.CommitInfo): unknown;
            fromPartial(object: Partial<_271.CommitInfo>): _271.CommitInfo;
        };
        ExtendedCommitInfo: {
            encode(message: _271.ExtendedCommitInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _271.ExtendedCommitInfo;
            fromJSON(object: any): _271.ExtendedCommitInfo;
            toJSON(message: _271.ExtendedCommitInfo): unknown;
            fromPartial(object: Partial<_271.ExtendedCommitInfo>): _271.ExtendedCommitInfo;
        };
        Event: {
            encode(message: _271.Event, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _271.Event;
            fromJSON(object: any): _271.Event;
            toJSON(message: _271.Event): unknown;
            fromPartial(object: Partial<_271.Event>): _271.Event;
        };
        EventAttribute: {
            encode(message: _271.EventAttribute, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _271.EventAttribute;
            fromJSON(object: any): _271.EventAttribute;
            toJSON(message: _271.EventAttribute): unknown;
            fromPartial(object: Partial<_271.EventAttribute>): _271.EventAttribute;
        };
        TxResult: {
            encode(message: _271.TxResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _271.TxResult;
            fromJSON(object: any): _271.TxResult;
            toJSON(message: _271.TxResult): unknown;
            fromPartial(object: Partial<_271.TxResult>): _271.TxResult;
        };
        Validator: {
            encode(message: _271.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _271.Validator;
            fromJSON(object: any): _271.Validator;
            toJSON(message: _271.Validator): unknown;
            fromPartial(object: Partial<_271.Validator>): _271.Validator;
        };
        ValidatorUpdate: {
            encode(message: _271.ValidatorUpdate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _271.ValidatorUpdate;
            fromJSON(object: any): _271.ValidatorUpdate;
            toJSON(message: _271.ValidatorUpdate): unknown;
            fromPartial(object: Partial<_271.ValidatorUpdate>): _271.ValidatorUpdate;
        };
        VoteInfo: {
            encode(message: _271.VoteInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _271.VoteInfo;
            fromJSON(object: any): _271.VoteInfo;
            toJSON(message: _271.VoteInfo): unknown;
            fromPartial(object: Partial<_271.VoteInfo>): _271.VoteInfo;
        };
        ExtendedVoteInfo: {
            encode(message: _271.ExtendedVoteInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _271.ExtendedVoteInfo;
            fromJSON(object: any): _271.ExtendedVoteInfo;
            toJSON(message: _271.ExtendedVoteInfo): unknown;
            fromPartial(object: Partial<_271.ExtendedVoteInfo>): _271.ExtendedVoteInfo;
        };
        Misbehavior: {
            encode(message: _271.Misbehavior, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _271.Misbehavior;
            fromJSON(object: any): _271.Misbehavior;
            toJSON(message: _271.Misbehavior): unknown;
            fromPartial(object: Partial<_271.Misbehavior>): _271.Misbehavior;
        };
        Snapshot: {
            encode(message: _271.Snapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _271.Snapshot;
            fromJSON(object: any): _271.Snapshot;
            toJSON(message: _271.Snapshot): unknown;
            fromPartial(object: Partial<_271.Snapshot>): _271.Snapshot;
        };
    };
    const crypto: {
        Proof: {
            encode(message: _275.Proof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _275.Proof;
            fromJSON(object: any): _275.Proof;
            toJSON(message: _275.Proof): unknown;
            fromPartial(object: Partial<_275.Proof>): _275.Proof;
        };
        ValueOp: {
            encode(message: _275.ValueOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _275.ValueOp;
            fromJSON(object: any): _275.ValueOp;
            toJSON(message: _275.ValueOp): unknown;
            fromPartial(object: Partial<_275.ValueOp>): _275.ValueOp;
        };
        DominoOp: {
            encode(message: _275.DominoOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _275.DominoOp;
            fromJSON(object: any): _275.DominoOp;
            toJSON(message: _275.DominoOp): unknown;
            fromPartial(object: Partial<_275.DominoOp>): _275.DominoOp;
        };
        ProofOp: {
            encode(message: _275.ProofOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _275.ProofOp;
            fromJSON(object: any): _275.ProofOp;
            toJSON(message: _275.ProofOp): unknown;
            fromPartial(object: Partial<_275.ProofOp>): _275.ProofOp;
        };
        ProofOps: {
            encode(message: _275.ProofOps, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _275.ProofOps;
            fromJSON(object: any): _275.ProofOps;
            toJSON(message: _275.ProofOps): unknown;
            fromPartial(object: Partial<_275.ProofOps>): _275.ProofOps;
        };
        PublicKey: {
            encode(message: _274.PublicKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _274.PublicKey;
            fromJSON(object: any): _274.PublicKey;
            toJSON(message: _274.PublicKey): unknown;
            fromPartial(object: Partial<_274.PublicKey>): _274.PublicKey;
        };
    };
    namespace libs {
        const bits: {
            BitArray: {
                encode(message: _277.BitArray, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _277.BitArray;
                fromJSON(object: any): _277.BitArray;
                toJSON(message: _277.BitArray): unknown;
                fromPartial(object: Partial<_277.BitArray>): _277.BitArray;
            };
        };
    }
    const p2p: {
        NetAddress: {
            encode(message: _279.NetAddress, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _279.NetAddress;
            fromJSON(object: any): _279.NetAddress;
            toJSON(message: _279.NetAddress): unknown;
            fromPartial(object: Partial<_279.NetAddress>): _279.NetAddress;
        };
        ProtocolVersion: {
            encode(message: _279.ProtocolVersion, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _279.ProtocolVersion;
            fromJSON(object: any): _279.ProtocolVersion;
            toJSON(message: _279.ProtocolVersion): unknown;
            fromPartial(object: Partial<_279.ProtocolVersion>): _279.ProtocolVersion;
        };
        DefaultNodeInfo: {
            encode(message: _279.DefaultNodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _279.DefaultNodeInfo;
            fromJSON(object: any): _279.DefaultNodeInfo;
            toJSON(message: _279.DefaultNodeInfo): unknown;
            fromPartial(object: Partial<_279.DefaultNodeInfo>): _279.DefaultNodeInfo;
        };
        DefaultNodeInfoOther: {
            encode(message: _279.DefaultNodeInfoOther, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _279.DefaultNodeInfoOther;
            fromJSON(object: any): _279.DefaultNodeInfoOther;
            toJSON(message: _279.DefaultNodeInfoOther): unknown;
            fromPartial(object: Partial<_279.DefaultNodeInfoOther>): _279.DefaultNodeInfoOther;
        };
    };
    const types: {
        ValidatorSet: {
            encode(message: _289.ValidatorSet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _289.ValidatorSet;
            fromJSON(object: any): _289.ValidatorSet;
            toJSON(message: _289.ValidatorSet): unknown;
            fromPartial(object: Partial<_289.ValidatorSet>): _289.ValidatorSet;
        };
        Validator: {
            encode(message: _289.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _289.Validator;
            fromJSON(object: any): _289.Validator;
            toJSON(message: _289.Validator): unknown;
            fromPartial(object: Partial<_289.Validator>): _289.Validator;
        };
        SimpleValidator: {
            encode(message: _289.SimpleValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _289.SimpleValidator;
            fromJSON(object: any): _289.SimpleValidator;
            toJSON(message: _289.SimpleValidator): unknown;
            fromPartial(object: Partial<_289.SimpleValidator>): _289.SimpleValidator;
        };
        blockIDFlagFromJSON(object: any): _288.BlockIDFlag;
        blockIDFlagToJSON(object: _288.BlockIDFlag): string;
        signedMsgTypeFromJSON(object: any): _288.SignedMsgType;
        signedMsgTypeToJSON(object: _288.SignedMsgType): string;
        BlockIDFlag: typeof _288.BlockIDFlag;
        BlockIDFlagSDKType: typeof _288.BlockIDFlagSDKType;
        SignedMsgType: typeof _288.SignedMsgType;
        SignedMsgTypeSDKType: typeof _288.SignedMsgTypeSDKType;
        PartSetHeader: {
            encode(message: _288.PartSetHeader, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _288.PartSetHeader;
            fromJSON(object: any): _288.PartSetHeader;
            toJSON(message: _288.PartSetHeader): unknown;
            fromPartial(object: Partial<_288.PartSetHeader>): _288.PartSetHeader;
        };
        Part: {
            encode(message: _288.Part, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _288.Part;
            fromJSON(object: any): _288.Part;
            toJSON(message: _288.Part): unknown;
            fromPartial(object: Partial<_288.Part>): _288.Part;
        };
        BlockID: {
            encode(message: _288.BlockID, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _288.BlockID;
            fromJSON(object: any): _288.BlockID;
            toJSON(message: _288.BlockID): unknown;
            fromPartial(object: Partial<_288.BlockID>): _288.BlockID;
        };
        Header: {
            encode(message: _288.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _288.Header;
            fromJSON(object: any): _288.Header;
            toJSON(message: _288.Header): unknown;
            fromPartial(object: Partial<_288.Header>): _288.Header;
        };
        Data: {
            encode(message: _288.Data, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _288.Data;
            fromJSON(object: any): _288.Data;
            toJSON(message: _288.Data): unknown;
            fromPartial(object: Partial<_288.Data>): _288.Data;
        };
        Vote: {
            encode(message: _288.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _288.Vote;
            fromJSON(object: any): _288.Vote;
            toJSON(message: _288.Vote): unknown;
            fromPartial(object: Partial<_288.Vote>): _288.Vote;
        };
        Commit: {
            encode(message: _288.Commit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _288.Commit;
            fromJSON(object: any): _288.Commit;
            toJSON(message: _288.Commit): unknown;
            fromPartial(object: Partial<_288.Commit>): _288.Commit;
        };
        CommitSig: {
            encode(message: _288.CommitSig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _288.CommitSig;
            fromJSON(object: any): _288.CommitSig;
            toJSON(message: _288.CommitSig): unknown;
            fromPartial(object: Partial<_288.CommitSig>): _288.CommitSig;
        };
        Proposal: {
            encode(message: _288.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _288.Proposal;
            fromJSON(object: any): _288.Proposal;
            toJSON(message: _288.Proposal): unknown;
            fromPartial(object: Partial<_288.Proposal>): _288.Proposal;
        };
        SignedHeader: {
            encode(message: _288.SignedHeader, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _288.SignedHeader;
            fromJSON(object: any): _288.SignedHeader;
            toJSON(message: _288.SignedHeader): unknown;
            fromPartial(object: Partial<_288.SignedHeader>): _288.SignedHeader;
        };
        LightBlock: {
            encode(message: _288.LightBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _288.LightBlock;
            fromJSON(object: any): _288.LightBlock;
            toJSON(message: _288.LightBlock): unknown;
            fromPartial(object: Partial<_288.LightBlock>): _288.LightBlock;
        };
        BlockMeta: {
            encode(message: _288.BlockMeta, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _288.BlockMeta;
            fromJSON(object: any): _288.BlockMeta;
            toJSON(message: _288.BlockMeta): unknown;
            fromPartial(object: Partial<_288.BlockMeta>): _288.BlockMeta;
        };
        TxProof: {
            encode(message: _288.TxProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _288.TxProof;
            fromJSON(object: any): _288.TxProof;
            toJSON(message: _288.TxProof): unknown;
            fromPartial(object: Partial<_288.TxProof>): _288.TxProof;
        };
        ConsensusParams: {
            encode(message: _287.ConsensusParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _287.ConsensusParams;
            fromJSON(object: any): _287.ConsensusParams;
            toJSON(message: _287.ConsensusParams): unknown;
            fromPartial(object: Partial<_287.ConsensusParams>): _287.ConsensusParams;
        };
        BlockParams: {
            encode(message: _287.BlockParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _287.BlockParams;
            fromJSON(object: any): _287.BlockParams;
            toJSON(message: _287.BlockParams): unknown;
            fromPartial(object: Partial<_287.BlockParams>): _287.BlockParams;
        };
        EvidenceParams: {
            encode(message: _287.EvidenceParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _287.EvidenceParams;
            fromJSON(object: any): _287.EvidenceParams;
            toJSON(message: _287.EvidenceParams): unknown;
            fromPartial(object: Partial<_287.EvidenceParams>): _287.EvidenceParams;
        };
        ValidatorParams: {
            encode(message: _287.ValidatorParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _287.ValidatorParams;
            fromJSON(object: any): _287.ValidatorParams;
            toJSON(message: _287.ValidatorParams): unknown;
            fromPartial(object: Partial<_287.ValidatorParams>): _287.ValidatorParams;
        };
        VersionParams: {
            encode(message: _287.VersionParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _287.VersionParams;
            fromJSON(object: any): _287.VersionParams;
            toJSON(message: _287.VersionParams): unknown;
            fromPartial(object: Partial<_287.VersionParams>): _287.VersionParams;
        };
        HashedParams: {
            encode(message: _287.HashedParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _287.HashedParams;
            fromJSON(object: any): _287.HashedParams;
            toJSON(message: _287.HashedParams): unknown;
            fromPartial(object: Partial<_287.HashedParams>): _287.HashedParams;
        };
        Evidence: {
            encode(message: _286.Evidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _286.Evidence;
            fromJSON(object: any): _286.Evidence;
            toJSON(message: _286.Evidence): unknown;
            fromPartial(object: Partial<_286.Evidence>): _286.Evidence;
        };
        DuplicateVoteEvidence: {
            encode(message: _286.DuplicateVoteEvidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _286.DuplicateVoteEvidence;
            fromJSON(object: any): _286.DuplicateVoteEvidence;
            toJSON(message: _286.DuplicateVoteEvidence): unknown;
            fromPartial(object: Partial<_286.DuplicateVoteEvidence>): _286.DuplicateVoteEvidence;
        };
        LightClientAttackEvidence: {
            encode(message: _286.LightClientAttackEvidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _286.LightClientAttackEvidence;
            fromJSON(object: any): _286.LightClientAttackEvidence;
            toJSON(message: _286.LightClientAttackEvidence): unknown;
            fromPartial(object: Partial<_286.LightClientAttackEvidence>): _286.LightClientAttackEvidence;
        };
        EvidenceList: {
            encode(message: _286.EvidenceList, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _286.EvidenceList;
            fromJSON(object: any): _286.EvidenceList;
            toJSON(message: _286.EvidenceList): unknown;
            fromPartial(object: Partial<_286.EvidenceList>): _286.EvidenceList;
        };
        Block: {
            encode(message: _285.Block, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _285.Block;
            fromJSON(object: any): _285.Block;
            toJSON(message: _285.Block): unknown;
            fromPartial(object: Partial<_285.Block>): _285.Block;
        };
    };
    const version: {
        App: {
            encode(message: _291.App, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _291.App;
            fromJSON(object: any): _291.App;
            toJSON(message: _291.App): unknown;
            fromPartial(object: Partial<_291.App>): _291.App;
        };
        Consensus: {
            encode(message: _291.Consensus, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _291.Consensus;
            fromJSON(object: any): _291.Consensus;
            toJSON(message: _291.Consensus): unknown;
            fromPartial(object: Partial<_291.Consensus>): _291.Consensus;
        };
    };
}
