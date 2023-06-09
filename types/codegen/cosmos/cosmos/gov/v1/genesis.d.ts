import { Deposit, DepositSDKType, Vote, VoteSDKType, Proposal, ProposalSDKType, DepositParams, DepositParamsSDKType, VotingParams, VotingParamsSDKType, TallyParams, TallyParamsSDKType, Params, ParamsSDKType } from "../../../gov/v1/gov";
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
    /**
     * Deprecated: Prefer to use `params` instead.
     * deposit_params defines all the paramaters of related to deposit.
     */
    /** @deprecated */
    depositParams?: DepositParams;
    /**
     * Deprecated: Prefer to use `params` instead.
     * voting_params defines all the paramaters of related to voting.
     */
    /** @deprecated */
    votingParams?: VotingParams;
    /**
     * Deprecated: Prefer to use `params` instead.
     * tally_params defines all the paramaters of related to tally.
     */
    /** @deprecated */
    tallyParams?: TallyParams;
    /**
     * params defines all the paramaters of x/gov module.
     *
     * Since: cosmos-sdk 0.47
     */
    params?: Params;
    /**
     * The constitution allows builders to lay a foundation and define purpose.
     * This is an immutable string set in genesis.
     * There are no amendments, to go outside of scope, just fork.
     * constitution is an immutable string in genesis for a chain builder to lay out their vision, ideas and ideals.
     *
     * Since: cosmos-sdk 0.48
     */
    constitution: string;
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
    /**
     * Deprecated: Prefer to use `params` instead.
     * deposit_params defines all the paramaters of related to deposit.
     */
    /** @deprecated */
    deposit_params?: DepositParamsSDKType;
    /**
     * Deprecated: Prefer to use `params` instead.
     * voting_params defines all the paramaters of related to voting.
     */
    /** @deprecated */
    voting_params?: VotingParamsSDKType;
    /**
     * Deprecated: Prefer to use `params` instead.
     * tally_params defines all the paramaters of related to tally.
     */
    /** @deprecated */
    tally_params?: TallyParamsSDKType;
    /**
     * params defines all the paramaters of x/gov module.
     *
     * Since: cosmos-sdk 0.47
     */
    params?: ParamsSDKType;
    /**
     * The constitution allows builders to lay a foundation and define purpose.
     * This is an immutable string set in genesis.
     * There are no amendments, to go outside of scope, just fork.
     * constitution is an immutable string in genesis for a chain builder to lay out their vision, ideas and ideals.
     *
     * Since: cosmos-sdk 0.48
     */
    constitution: string;
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): unknown;
    fromPartial(object: Partial<GenesisState>): GenesisState;
};
