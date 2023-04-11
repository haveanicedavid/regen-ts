import { AminoMsg } from "@cosmjs/amino";
import { MsgSetWithdrawAddress, MsgWithdrawDelegatorReward, MsgWithdrawValidatorCommission, MsgFundCommunityPool, MsgUpdateParams, MsgCommunityPoolSpend, MsgDepositValidatorRewardsPool } from "./tx";
export interface AminoMsgSetWithdrawAddress extends AminoMsg {
  type: "cosmos-sdk/MsgModifyWithdrawAddress";
  value: {
    delegator_address: string;
    withdraw_address: string;
  };
}
export interface AminoMsgWithdrawDelegatorReward extends AminoMsg {
  type: "cosmos-sdk/MsgWithdrawDelegationReward";
  value: {
    delegator_address: string;
    validator_address: string;
  };
}
export interface AminoMsgWithdrawValidatorCommission extends AminoMsg {
  type: "cosmos-sdk/MsgWithdrawValidatorCommission";
  value: {
    validator_address: string;
  };
}
export interface AminoMsgFundCommunityPool extends AminoMsg {
  type: "cosmos-sdk/MsgFundCommunityPool";
  value: {
    amount: {
      denom: string;
      amount: string;
    }[];
    depositor: string;
  };
}
export interface AminoMsgUpdateParams extends AminoMsg {
  type: "cosmos-sdk/MsgUpdateParams";
  value: {
    authority: string;
    params: {
      community_tax: string;
      base_proposer_reward: string;
      bonus_proposer_reward: string;
      withdraw_addr_enabled: boolean;
    };
  };
}
export interface AminoMsgCommunityPoolSpend extends AminoMsg {
  type: "cosmos-sdk/MsgCommunityPoolSpend";
  value: {
    authority: string;
    recipient: string;
    amount: {
      denom: string;
      amount: string;
    }[];
  };
}
export interface AminoMsgDepositValidatorRewardsPool extends AminoMsg {
  type: "cosmos-sdk/MsgDepositValidatorRewardsPool";
  value: {
    depositor: string;
    validator_address: string;
    amount: {
      denom: string;
      amount: string;
    }[];
  };
}
export const AminoConverter = {
  "/cosmos.distribution.v1beta1.MsgSetWithdrawAddress": {
    aminoType: "cosmos-sdk/MsgModifyWithdrawAddress",
    toAmino: ({
      delegatorAddress,
      withdrawAddress
    }: MsgSetWithdrawAddress): AminoMsgSetWithdrawAddress["value"] => {
      return {
        delegator_address: delegatorAddress,
        withdraw_address: withdrawAddress
      };
    },
    fromAmino: ({
      delegator_address,
      withdraw_address
    }: AminoMsgSetWithdrawAddress["value"]): MsgSetWithdrawAddress => {
      return {
        delegatorAddress: delegator_address,
        withdrawAddress: withdraw_address
      };
    }
  },
  "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward": {
    aminoType: "cosmos-sdk/MsgWithdrawDelegationReward",
    toAmino: ({
      delegatorAddress,
      validatorAddress
    }: MsgWithdrawDelegatorReward): AminoMsgWithdrawDelegatorReward["value"] => {
      return {
        delegator_address: delegatorAddress,
        validator_address: validatorAddress
      };
    },
    fromAmino: ({
      delegator_address,
      validator_address
    }: AminoMsgWithdrawDelegatorReward["value"]): MsgWithdrawDelegatorReward => {
      return {
        delegatorAddress: delegator_address,
        validatorAddress: validator_address
      };
    }
  },
  "/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission": {
    aminoType: "cosmos-sdk/MsgWithdrawValidatorCommission",
    toAmino: ({
      validatorAddress
    }: MsgWithdrawValidatorCommission): AminoMsgWithdrawValidatorCommission["value"] => {
      return {
        validator_address: validatorAddress
      };
    },
    fromAmino: ({
      validator_address
    }: AminoMsgWithdrawValidatorCommission["value"]): MsgWithdrawValidatorCommission => {
      return {
        validatorAddress: validator_address
      };
    }
  },
  "/cosmos.distribution.v1beta1.MsgFundCommunityPool": {
    aminoType: "cosmos-sdk/MsgFundCommunityPool",
    toAmino: ({
      amount,
      depositor
    }: MsgFundCommunityPool): AminoMsgFundCommunityPool["value"] => {
      return {
        amount: amount.map(el0 => ({
          denom: el0.denom,
          amount: el0.amount
        })),
        depositor
      };
    },
    fromAmino: ({
      amount,
      depositor
    }: AminoMsgFundCommunityPool["value"]): MsgFundCommunityPool => {
      return {
        amount: amount.map(el0 => ({
          denom: el0.denom,
          amount: el0.amount
        })),
        depositor
      };
    }
  },
  "/cosmos.distribution.v1beta1.MsgUpdateParams": {
    aminoType: "cosmos-sdk/MsgUpdateParams",
    toAmino: ({
      authority,
      params
    }: MsgUpdateParams): AminoMsgUpdateParams["value"] => {
      return {
        authority,
        params: {
          community_tax: params.communityTax,
          base_proposer_reward: params.baseProposerReward,
          bonus_proposer_reward: params.bonusProposerReward,
          withdraw_addr_enabled: params.withdrawAddrEnabled
        }
      };
    },
    fromAmino: ({
      authority,
      params
    }: AminoMsgUpdateParams["value"]): MsgUpdateParams => {
      return {
        authority,
        params: {
          communityTax: params.community_tax,
          baseProposerReward: params.base_proposer_reward,
          bonusProposerReward: params.bonus_proposer_reward,
          withdrawAddrEnabled: params.withdraw_addr_enabled
        }
      };
    }
  },
  "/cosmos.distribution.v1beta1.MsgCommunityPoolSpend": {
    aminoType: "cosmos-sdk/MsgCommunityPoolSpend",
    toAmino: ({
      authority,
      recipient,
      amount
    }: MsgCommunityPoolSpend): AminoMsgCommunityPoolSpend["value"] => {
      return {
        authority,
        recipient,
        amount: amount.map(el0 => ({
          denom: el0.denom,
          amount: el0.amount
        }))
      };
    },
    fromAmino: ({
      authority,
      recipient,
      amount
    }: AminoMsgCommunityPoolSpend["value"]): MsgCommunityPoolSpend => {
      return {
        authority,
        recipient,
        amount: amount.map(el0 => ({
          denom: el0.denom,
          amount: el0.amount
        }))
      };
    }
  },
  "/cosmos.distribution.v1beta1.MsgDepositValidatorRewardsPool": {
    aminoType: "cosmos-sdk/MsgDepositValidatorRewardsPool",
    toAmino: ({
      depositor,
      validatorAddress,
      amount
    }: MsgDepositValidatorRewardsPool): AminoMsgDepositValidatorRewardsPool["value"] => {
      return {
        depositor,
        validator_address: validatorAddress,
        amount: amount.map(el0 => ({
          denom: el0.denom,
          amount: el0.amount
        }))
      };
    },
    fromAmino: ({
      depositor,
      validator_address,
      amount
    }: AminoMsgDepositValidatorRewardsPool["value"]): MsgDepositValidatorRewardsPool => {
      return {
        depositor,
        validatorAddress: validator_address,
        amount: amount.map(el0 => ({
          denom: el0.denom,
          amount: el0.amount
        }))
      };
    }
  }
};