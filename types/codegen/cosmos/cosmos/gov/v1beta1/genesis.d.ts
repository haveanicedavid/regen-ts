import { Deposit, DepositSDKType, Vote, VoteSDKType, Proposal, ProposalSDKType, DepositParams, DepositParamsSDKType, VotingParams, VotingParamsSDKType, TallyParams, TallyParamsSDKType } from "../../../gov/v1beta1/gov";
import * as _m0 from "protobufjs/minimal";
import { Long } from "../../../../helpers";
/** GenesisState defines the gov module's genesis state. */
export interface GenesisState {
    /** starting_proposal_id is the ID of the starting proposal. */
    startingProposalId: Long;
    /** deposits defines all the deposits present at genesis. */
    deposits: Deposit[];
    /** votes defines all the votes present at genesis. */
    votes: Vote[];
    /** proposals defines all the proposals present at genesis. */
    proposals: Proposal[];
    /** params defines all the parameters of related to deposit. */
    depositParams?: DepositParams;
    /** params defines all the parameters of related to voting. */
    votingParams?: VotingParams;
    /** params defines all the parameters of related to tally. */
    tallyParams?: TallyParams;
}
/** GenesisState defines the gov module's genesis state. */
export interface GenesisStateSDKType {
    /** starting_proposal_id is the ID of the starting proposal. */
    starting_proposal_id: Long;
    /** deposits defines all the deposits present at genesis. */
    deposits: DepositSDKType[];
    /** votes defines all the votes present at genesis. */
    votes: VoteSDKType[];
    /** proposals defines all the proposals present at genesis. */
    proposals: ProposalSDKType[];
    /** params defines all the parameters of related to deposit. */
    deposit_params?: DepositParamsSDKType;
    /** params defines all the parameters of related to voting. */
    voting_params?: VotingParamsSDKType;
    /** params defines all the parameters of related to tally. */
    tally_params?: TallyParamsSDKType;
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): unknown;
    fromPartial(object: Partial<GenesisState>): GenesisState;
};