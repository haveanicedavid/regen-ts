import { ProposalStatus, ProposalStatusSDKType, Proposal, ProposalSDKType, Vote, VoteSDKType, VotingParams, VotingParamsSDKType, DepositParams, DepositParamsSDKType, TallyParams, TallyParamsSDKType, Params, ParamsSDKType, Deposit, DepositSDKType, TallyResult, TallyResultSDKType } from "../../../gov/v1/gov";
import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../../base/query/v1beta1/pagination";
import * as _m0 from "protobufjs/minimal";
import { Long } from "../../../../helpers";
/** QueryConstitutionRequest is the request type for the Query/Constitution RPC method */
export interface QueryConstitutionRequest {
}
/** QueryConstitutionRequest is the request type for the Query/Constitution RPC method */
export interface QueryConstitutionRequestSDKType {
}
/** QueryConstitutionResponse is the response type for the Query/Constitution RPC method */
export interface QueryConstitutionResponse {
    constitution: string;
}
/** QueryConstitutionResponse is the response type for the Query/Constitution RPC method */
export interface QueryConstitutionResponseSDKType {
    constitution: string;
}
/** QueryProposalRequest is the request type for the Query/Proposal RPC method. */
export interface QueryProposalRequest {
    /** proposal_id defines the unique id of the proposal. */
    proposalId: Long;
}
/** QueryProposalRequest is the request type for the Query/Proposal RPC method. */
export interface QueryProposalRequestSDKType {
    /** proposal_id defines the unique id of the proposal. */
    proposal_id: Long;
}
/** QueryProposalResponse is the response type for the Query/Proposal RPC method. */
export interface QueryProposalResponse {
    /** proposal is the requested governance proposal. */
    proposal?: Proposal;
}
/** QueryProposalResponse is the response type for the Query/Proposal RPC method. */
export interface QueryProposalResponseSDKType {
    /** proposal is the requested governance proposal. */
    proposal?: ProposalSDKType;
}
/** QueryProposalsRequest is the request type for the Query/Proposals RPC method. */
export interface QueryProposalsRequest {
    /** proposal_status defines the status of the proposals. */
    proposalStatus: ProposalStatus;
    /** voter defines the voter address for the proposals. */
    voter: string;
    /** depositor defines the deposit addresses from the proposals. */
    depositor: string;
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequest;
}
/** QueryProposalsRequest is the request type for the Query/Proposals RPC method. */
export interface QueryProposalsRequestSDKType {
    /** proposal_status defines the status of the proposals. */
    proposal_status: ProposalStatusSDKType;
    /** voter defines the voter address for the proposals. */
    voter: string;
    /** depositor defines the deposit addresses from the proposals. */
    depositor: string;
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequestSDKType;
}
/**
 * QueryProposalsResponse is the response type for the Query/Proposals RPC
 * method.
 */
export interface QueryProposalsResponse {
    /** proposals defines all the requested governance proposals. */
    proposals: Proposal[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponse;
}
/**
 * QueryProposalsResponse is the response type for the Query/Proposals RPC
 * method.
 */
export interface QueryProposalsResponseSDKType {
    /** proposals defines all the requested governance proposals. */
    proposals: ProposalSDKType[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponseSDKType;
}
/** QueryVoteRequest is the request type for the Query/Vote RPC method. */
export interface QueryVoteRequest {
    /** proposal_id defines the unique id of the proposal. */
    proposalId: Long;
    /** voter defines the voter address for the proposals. */
    voter: string;
}
/** QueryVoteRequest is the request type for the Query/Vote RPC method. */
export interface QueryVoteRequestSDKType {
    /** proposal_id defines the unique id of the proposal. */
    proposal_id: Long;
    /** voter defines the voter address for the proposals. */
    voter: string;
}
/** QueryVoteResponse is the response type for the Query/Vote RPC method. */
export interface QueryVoteResponse {
    /** vote defines the queried vote. */
    vote?: Vote;
}
/** QueryVoteResponse is the response type for the Query/Vote RPC method. */
export interface QueryVoteResponseSDKType {
    /** vote defines the queried vote. */
    vote?: VoteSDKType;
}
/** QueryVotesRequest is the request type for the Query/Votes RPC method. */
export interface QueryVotesRequest {
    /** proposal_id defines the unique id of the proposal. */
    proposalId: Long;
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequest;
}
/** QueryVotesRequest is the request type for the Query/Votes RPC method. */
export interface QueryVotesRequestSDKType {
    /** proposal_id defines the unique id of the proposal. */
    proposal_id: Long;
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequestSDKType;
}
/** QueryVotesResponse is the response type for the Query/Votes RPC method. */
export interface QueryVotesResponse {
    /** votes defines the queried votes. */
    votes: Vote[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponse;
}
/** QueryVotesResponse is the response type for the Query/Votes RPC method. */
export interface QueryVotesResponseSDKType {
    /** votes defines the queried votes. */
    votes: VoteSDKType[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponseSDKType;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
    /**
     * params_type defines which parameters to query for, can be one of "voting",
     * "tallying" or "deposit".
     */
    paramsType: string;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequestSDKType {
    /**
     * params_type defines which parameters to query for, can be one of "voting",
     * "tallying" or "deposit".
     */
    params_type: string;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
    /**
     * Deprecated: Prefer to use `params` instead.
     * voting_params defines the parameters related to voting.
     */
    /** @deprecated */
    votingParams?: VotingParams;
    /**
     * Deprecated: Prefer to use `params` instead.
     * deposit_params defines the parameters related to deposit.
     */
    /** @deprecated */
    depositParams?: DepositParams;
    /**
     * Deprecated: Prefer to use `params` instead.
     * tally_params defines the parameters related to tally.
     */
    /** @deprecated */
    tallyParams?: TallyParams;
    /**
     * params defines all the paramaters of x/gov module.
     *
     * Since: cosmos-sdk 0.47
     */
    params?: Params;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponseSDKType {
    /**
     * Deprecated: Prefer to use `params` instead.
     * voting_params defines the parameters related to voting.
     */
    /** @deprecated */
    voting_params?: VotingParamsSDKType;
    /**
     * Deprecated: Prefer to use `params` instead.
     * deposit_params defines the parameters related to deposit.
     */
    /** @deprecated */
    deposit_params?: DepositParamsSDKType;
    /**
     * Deprecated: Prefer to use `params` instead.
     * tally_params defines the parameters related to tally.
     */
    /** @deprecated */
    tally_params?: TallyParamsSDKType;
    /**
     * params defines all the paramaters of x/gov module.
     *
     * Since: cosmos-sdk 0.47
     */
    params?: ParamsSDKType;
}
/** QueryDepositRequest is the request type for the Query/Deposit RPC method. */
export interface QueryDepositRequest {
    /** proposal_id defines the unique id of the proposal. */
    proposalId: Long;
    /** depositor defines the deposit addresses from the proposals. */
    depositor: string;
}
/** QueryDepositRequest is the request type for the Query/Deposit RPC method. */
export interface QueryDepositRequestSDKType {
    /** proposal_id defines the unique id of the proposal. */
    proposal_id: Long;
    /** depositor defines the deposit addresses from the proposals. */
    depositor: string;
}
/** QueryDepositResponse is the response type for the Query/Deposit RPC method. */
export interface QueryDepositResponse {
    /** deposit defines the requested deposit. */
    deposit?: Deposit;
}
/** QueryDepositResponse is the response type for the Query/Deposit RPC method. */
export interface QueryDepositResponseSDKType {
    /** deposit defines the requested deposit. */
    deposit?: DepositSDKType;
}
/** QueryDepositsRequest is the request type for the Query/Deposits RPC method. */
export interface QueryDepositsRequest {
    /** proposal_id defines the unique id of the proposal. */
    proposalId: Long;
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequest;
}
/** QueryDepositsRequest is the request type for the Query/Deposits RPC method. */
export interface QueryDepositsRequestSDKType {
    /** proposal_id defines the unique id of the proposal. */
    proposal_id: Long;
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequestSDKType;
}
/** QueryDepositsResponse is the response type for the Query/Deposits RPC method. */
export interface QueryDepositsResponse {
    /** deposits defines the requested deposits. */
    deposits: Deposit[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponse;
}
/** QueryDepositsResponse is the response type for the Query/Deposits RPC method. */
export interface QueryDepositsResponseSDKType {
    /** deposits defines the requested deposits. */
    deposits: DepositSDKType[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponseSDKType;
}
/** QueryTallyResultRequest is the request type for the Query/Tally RPC method. */
export interface QueryTallyResultRequest {
    /** proposal_id defines the unique id of the proposal. */
    proposalId: Long;
}
/** QueryTallyResultRequest is the request type for the Query/Tally RPC method. */
export interface QueryTallyResultRequestSDKType {
    /** proposal_id defines the unique id of the proposal. */
    proposal_id: Long;
}
/** QueryTallyResultResponse is the response type for the Query/Tally RPC method. */
export interface QueryTallyResultResponse {
    /** tally defines the requested tally. */
    tally?: TallyResult;
}
/** QueryTallyResultResponse is the response type for the Query/Tally RPC method. */
export interface QueryTallyResultResponseSDKType {
    /** tally defines the requested tally. */
    tally?: TallyResultSDKType;
}
export declare const QueryConstitutionRequest: {
    encode(_: QueryConstitutionRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryConstitutionRequest;
    fromJSON(_: any): QueryConstitutionRequest;
    toJSON(_: QueryConstitutionRequest): unknown;
    fromPartial(_: Partial<QueryConstitutionRequest>): QueryConstitutionRequest;
};
export declare const QueryConstitutionResponse: {
    encode(message: QueryConstitutionResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryConstitutionResponse;
    fromJSON(object: any): QueryConstitutionResponse;
    toJSON(message: QueryConstitutionResponse): unknown;
    fromPartial(object: Partial<QueryConstitutionResponse>): QueryConstitutionResponse;
};
export declare const QueryProposalRequest: {
    encode(message: QueryProposalRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryProposalRequest;
    fromJSON(object: any): QueryProposalRequest;
    toJSON(message: QueryProposalRequest): unknown;
    fromPartial(object: Partial<QueryProposalRequest>): QueryProposalRequest;
};
export declare const QueryProposalResponse: {
    encode(message: QueryProposalResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryProposalResponse;
    fromJSON(object: any): QueryProposalResponse;
    toJSON(message: QueryProposalResponse): unknown;
    fromPartial(object: Partial<QueryProposalResponse>): QueryProposalResponse;
};
export declare const QueryProposalsRequest: {
    encode(message: QueryProposalsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryProposalsRequest;
    fromJSON(object: any): QueryProposalsRequest;
    toJSON(message: QueryProposalsRequest): unknown;
    fromPartial(object: Partial<QueryProposalsRequest>): QueryProposalsRequest;
};
export declare const QueryProposalsResponse: {
    encode(message: QueryProposalsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryProposalsResponse;
    fromJSON(object: any): QueryProposalsResponse;
    toJSON(message: QueryProposalsResponse): unknown;
    fromPartial(object: Partial<QueryProposalsResponse>): QueryProposalsResponse;
};
export declare const QueryVoteRequest: {
    encode(message: QueryVoteRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryVoteRequest;
    fromJSON(object: any): QueryVoteRequest;
    toJSON(message: QueryVoteRequest): unknown;
    fromPartial(object: Partial<QueryVoteRequest>): QueryVoteRequest;
};
export declare const QueryVoteResponse: {
    encode(message: QueryVoteResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryVoteResponse;
    fromJSON(object: any): QueryVoteResponse;
    toJSON(message: QueryVoteResponse): unknown;
    fromPartial(object: Partial<QueryVoteResponse>): QueryVoteResponse;
};
export declare const QueryVotesRequest: {
    encode(message: QueryVotesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryVotesRequest;
    fromJSON(object: any): QueryVotesRequest;
    toJSON(message: QueryVotesRequest): unknown;
    fromPartial(object: Partial<QueryVotesRequest>): QueryVotesRequest;
};
export declare const QueryVotesResponse: {
    encode(message: QueryVotesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryVotesResponse;
    fromJSON(object: any): QueryVotesResponse;
    toJSON(message: QueryVotesResponse): unknown;
    fromPartial(object: Partial<QueryVotesResponse>): QueryVotesResponse;
};
export declare const QueryParamsRequest: {
    encode(message: QueryParamsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest;
    fromJSON(object: any): QueryParamsRequest;
    toJSON(message: QueryParamsRequest): unknown;
    fromPartial(object: Partial<QueryParamsRequest>): QueryParamsRequest;
};
export declare const QueryParamsResponse: {
    encode(message: QueryParamsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsResponse;
    fromJSON(object: any): QueryParamsResponse;
    toJSON(message: QueryParamsResponse): unknown;
    fromPartial(object: Partial<QueryParamsResponse>): QueryParamsResponse;
};
export declare const QueryDepositRequest: {
    encode(message: QueryDepositRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryDepositRequest;
    fromJSON(object: any): QueryDepositRequest;
    toJSON(message: QueryDepositRequest): unknown;
    fromPartial(object: Partial<QueryDepositRequest>): QueryDepositRequest;
};
export declare const QueryDepositResponse: {
    encode(message: QueryDepositResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryDepositResponse;
    fromJSON(object: any): QueryDepositResponse;
    toJSON(message: QueryDepositResponse): unknown;
    fromPartial(object: Partial<QueryDepositResponse>): QueryDepositResponse;
};
export declare const QueryDepositsRequest: {
    encode(message: QueryDepositsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryDepositsRequest;
    fromJSON(object: any): QueryDepositsRequest;
    toJSON(message: QueryDepositsRequest): unknown;
    fromPartial(object: Partial<QueryDepositsRequest>): QueryDepositsRequest;
};
export declare const QueryDepositsResponse: {
    encode(message: QueryDepositsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryDepositsResponse;
    fromJSON(object: any): QueryDepositsResponse;
    toJSON(message: QueryDepositsResponse): unknown;
    fromPartial(object: Partial<QueryDepositsResponse>): QueryDepositsResponse;
};
export declare const QueryTallyResultRequest: {
    encode(message: QueryTallyResultRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryTallyResultRequest;
    fromJSON(object: any): QueryTallyResultRequest;
    toJSON(message: QueryTallyResultRequest): unknown;
    fromPartial(object: Partial<QueryTallyResultRequest>): QueryTallyResultRequest;
};
export declare const QueryTallyResultResponse: {
    encode(message: QueryTallyResultResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryTallyResultResponse;
    fromJSON(object: any): QueryTallyResultResponse;
    toJSON(message: QueryTallyResultResponse): unknown;
    fromPartial(object: Partial<QueryTallyResultResponse>): QueryTallyResultResponse;
};
