import { GeneratedType, Registry, OfflineSigner } from "@cosmjs/proto-signing";
import { AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
import { HttpEndpoint } from "@cosmjs/tendermint-rpc";
import * as cosmosAuthV1beta1TxRegistry from "./auth/v1beta1/tx.registry";
import * as cosmosAuthzV1beta1TxRegistry from "./authz/v1beta1/tx.registry";
import * as cosmosBankV1beta1TxRegistry from "./bank/v1beta1/tx.registry";
import * as cosmosCircuitV1TxRegistry from "./circuit/v1/tx.registry";
import * as cosmosConsensusV1TxRegistry from "./consensus/v1/tx.registry";
import * as cosmosCosmosAuthV1beta1TxRegistry from "./cosmos/auth/v1beta1/tx.registry";
import * as cosmosCosmosAuthzV1beta1TxRegistry from "./cosmos/authz/v1beta1/tx.registry";
import * as cosmosCosmosBankV1beta1TxRegistry from "./cosmos/bank/v1beta1/tx.registry";
import * as cosmosCosmosCircuitV1TxRegistry from "./cosmos/circuit/v1/tx.registry";
import * as cosmosCosmosConsensusV1TxRegistry from "./cosmos/consensus/v1/tx.registry";
import * as cosmosCosmosCrisisV1beta1TxRegistry from "./cosmos/crisis/v1beta1/tx.registry";
import * as cosmosCosmosDistributionV1beta1TxRegistry from "./cosmos/distribution/v1beta1/tx.registry";
import * as cosmosCosmosEvidenceV1beta1TxRegistry from "./cosmos/evidence/v1beta1/tx.registry";
import * as cosmosCosmosFeegrantV1beta1TxRegistry from "./cosmos/feegrant/v1beta1/tx.registry";
import * as cosmosCosmosGovV1TxRegistry from "./cosmos/gov/v1/tx.registry";
import * as cosmosCosmosGovV1beta1TxRegistry from "./cosmos/gov/v1beta1/tx.registry";
import * as cosmosCosmosGroupV1TxRegistry from "./cosmos/group/v1/tx.registry";
import * as cosmosCosmosMintV1beta1TxRegistry from "./cosmos/mint/v1beta1/tx.registry";
import * as cosmosCosmosNftV1beta1TxRegistry from "./cosmos/nft/v1beta1/tx.registry";
import * as cosmosCosmosSlashingV1beta1TxRegistry from "./cosmos/slashing/v1beta1/tx.registry";
import * as cosmosCosmosStakingV1beta1TxRegistry from "./cosmos/staking/v1beta1/tx.registry";
import * as cosmosCosmosUpgradeV1beta1TxRegistry from "./cosmos/upgrade/v1beta1/tx.registry";
import * as cosmosCosmosVestingV1beta1TxRegistry from "./cosmos/vesting/v1beta1/tx.registry";
import * as cosmosCrisisV1beta1TxRegistry from "./crisis/v1beta1/tx.registry";
import * as cosmosDistributionV1beta1TxRegistry from "./distribution/v1beta1/tx.registry";
import * as cosmosEvidenceV1beta1TxRegistry from "./evidence/v1beta1/tx.registry";
import * as cosmosFeegrantV1beta1TxRegistry from "./feegrant/v1beta1/tx.registry";
import * as cosmosGovV1TxRegistry from "./gov/v1/tx.registry";
import * as cosmosGovV1beta1TxRegistry from "./gov/v1beta1/tx.registry";
import * as cosmosGroupV1TxRegistry from "./group/v1/tx.registry";
import * as cosmosMintV1beta1TxRegistry from "./mint/v1beta1/tx.registry";
import * as cosmosNftV1beta1TxRegistry from "./nft/v1beta1/tx.registry";
import * as cosmosSlashingV1beta1TxRegistry from "./slashing/v1beta1/tx.registry";
import * as cosmosStakingV1beta1TxRegistry from "./staking/v1beta1/tx.registry";
import * as cosmosUpgradeV1beta1TxRegistry from "./upgrade/v1beta1/tx.registry";
import * as cosmosVestingV1beta1TxRegistry from "./vesting/v1beta1/tx.registry";
import * as cosmosAuthV1beta1TxAmino from "./auth/v1beta1/tx.amino";
import * as cosmosAuthzV1beta1TxAmino from "./authz/v1beta1/tx.amino";
import * as cosmosBankV1beta1TxAmino from "./bank/v1beta1/tx.amino";
import * as cosmosCircuitV1TxAmino from "./circuit/v1/tx.amino";
import * as cosmosConsensusV1TxAmino from "./consensus/v1/tx.amino";
import * as cosmosCosmosAuthV1beta1TxAmino from "./cosmos/auth/v1beta1/tx.amino";
import * as cosmosCosmosAuthzV1beta1TxAmino from "./cosmos/authz/v1beta1/tx.amino";
import * as cosmosCosmosBankV1beta1TxAmino from "./cosmos/bank/v1beta1/tx.amino";
import * as cosmosCosmosCircuitV1TxAmino from "./cosmos/circuit/v1/tx.amino";
import * as cosmosCosmosConsensusV1TxAmino from "./cosmos/consensus/v1/tx.amino";
import * as cosmosCosmosCrisisV1beta1TxAmino from "./cosmos/crisis/v1beta1/tx.amino";
import * as cosmosCosmosDistributionV1beta1TxAmino from "./cosmos/distribution/v1beta1/tx.amino";
import * as cosmosCosmosEvidenceV1beta1TxAmino from "./cosmos/evidence/v1beta1/tx.amino";
import * as cosmosCosmosFeegrantV1beta1TxAmino from "./cosmos/feegrant/v1beta1/tx.amino";
import * as cosmosCosmosGovV1TxAmino from "./cosmos/gov/v1/tx.amino";
import * as cosmosCosmosGovV1beta1TxAmino from "./cosmos/gov/v1beta1/tx.amino";
import * as cosmosCosmosGroupV1TxAmino from "./cosmos/group/v1/tx.amino";
import * as cosmosCosmosMintV1beta1TxAmino from "./cosmos/mint/v1beta1/tx.amino";
import * as cosmosCosmosNftV1beta1TxAmino from "./cosmos/nft/v1beta1/tx.amino";
import * as cosmosCosmosSlashingV1beta1TxAmino from "./cosmos/slashing/v1beta1/tx.amino";
import * as cosmosCosmosStakingV1beta1TxAmino from "./cosmos/staking/v1beta1/tx.amino";
import * as cosmosCosmosUpgradeV1beta1TxAmino from "./cosmos/upgrade/v1beta1/tx.amino";
import * as cosmosCosmosVestingV1beta1TxAmino from "./cosmos/vesting/v1beta1/tx.amino";
import * as cosmosCrisisV1beta1TxAmino from "./crisis/v1beta1/tx.amino";
import * as cosmosDistributionV1beta1TxAmino from "./distribution/v1beta1/tx.amino";
import * as cosmosEvidenceV1beta1TxAmino from "./evidence/v1beta1/tx.amino";
import * as cosmosFeegrantV1beta1TxAmino from "./feegrant/v1beta1/tx.amino";
import * as cosmosGovV1TxAmino from "./gov/v1/tx.amino";
import * as cosmosGovV1beta1TxAmino from "./gov/v1beta1/tx.amino";
import * as cosmosGroupV1TxAmino from "./group/v1/tx.amino";
import * as cosmosMintV1beta1TxAmino from "./mint/v1beta1/tx.amino";
import * as cosmosNftV1beta1TxAmino from "./nft/v1beta1/tx.amino";
import * as cosmosSlashingV1beta1TxAmino from "./slashing/v1beta1/tx.amino";
import * as cosmosStakingV1beta1TxAmino from "./staking/v1beta1/tx.amino";
import * as cosmosUpgradeV1beta1TxAmino from "./upgrade/v1beta1/tx.amino";
import * as cosmosVestingV1beta1TxAmino from "./vesting/v1beta1/tx.amino";
export const cosmosAminoConverters = { ...cosmosAuthV1beta1TxAmino.AminoConverter,
  ...cosmosAuthzV1beta1TxAmino.AminoConverter,
  ...cosmosBankV1beta1TxAmino.AminoConverter,
  ...cosmosCircuitV1TxAmino.AminoConverter,
  ...cosmosConsensusV1TxAmino.AminoConverter,
  ...cosmosCosmosAuthV1beta1TxAmino.AminoConverter,
  ...cosmosCosmosAuthzV1beta1TxAmino.AminoConverter,
  ...cosmosCosmosBankV1beta1TxAmino.AminoConverter,
  ...cosmosCosmosCircuitV1TxAmino.AminoConverter,
  ...cosmosCosmosConsensusV1TxAmino.AminoConverter,
  ...cosmosCosmosCrisisV1beta1TxAmino.AminoConverter,
  ...cosmosCosmosDistributionV1beta1TxAmino.AminoConverter,
  ...cosmosCosmosEvidenceV1beta1TxAmino.AminoConverter,
  ...cosmosCosmosFeegrantV1beta1TxAmino.AminoConverter,
  ...cosmosCosmosGovV1TxAmino.AminoConverter,
  ...cosmosCosmosGovV1beta1TxAmino.AminoConverter,
  ...cosmosCosmosGroupV1TxAmino.AminoConverter,
  ...cosmosCosmosMintV1beta1TxAmino.AminoConverter,
  ...cosmosCosmosNftV1beta1TxAmino.AminoConverter,
  ...cosmosCosmosSlashingV1beta1TxAmino.AminoConverter,
  ...cosmosCosmosStakingV1beta1TxAmino.AminoConverter,
  ...cosmosCosmosUpgradeV1beta1TxAmino.AminoConverter,
  ...cosmosCosmosVestingV1beta1TxAmino.AminoConverter,
  ...cosmosCrisisV1beta1TxAmino.AminoConverter,
  ...cosmosDistributionV1beta1TxAmino.AminoConverter,
  ...cosmosEvidenceV1beta1TxAmino.AminoConverter,
  ...cosmosFeegrantV1beta1TxAmino.AminoConverter,
  ...cosmosGovV1TxAmino.AminoConverter,
  ...cosmosGovV1beta1TxAmino.AminoConverter,
  ...cosmosGroupV1TxAmino.AminoConverter,
  ...cosmosMintV1beta1TxAmino.AminoConverter,
  ...cosmosNftV1beta1TxAmino.AminoConverter,
  ...cosmosSlashingV1beta1TxAmino.AminoConverter,
  ...cosmosStakingV1beta1TxAmino.AminoConverter,
  ...cosmosUpgradeV1beta1TxAmino.AminoConverter,
  ...cosmosVestingV1beta1TxAmino.AminoConverter
};
export const cosmosProtoRegistry: ReadonlyArray<[string, GeneratedType]> = [...cosmosAuthV1beta1TxRegistry.registry, ...cosmosAuthzV1beta1TxRegistry.registry, ...cosmosBankV1beta1TxRegistry.registry, ...cosmosCircuitV1TxRegistry.registry, ...cosmosConsensusV1TxRegistry.registry, ...cosmosCosmosAuthV1beta1TxRegistry.registry, ...cosmosCosmosAuthzV1beta1TxRegistry.registry, ...cosmosCosmosBankV1beta1TxRegistry.registry, ...cosmosCosmosCircuitV1TxRegistry.registry, ...cosmosCosmosConsensusV1TxRegistry.registry, ...cosmosCosmosCrisisV1beta1TxRegistry.registry, ...cosmosCosmosDistributionV1beta1TxRegistry.registry, ...cosmosCosmosEvidenceV1beta1TxRegistry.registry, ...cosmosCosmosFeegrantV1beta1TxRegistry.registry, ...cosmosCosmosGovV1TxRegistry.registry, ...cosmosCosmosGovV1beta1TxRegistry.registry, ...cosmosCosmosGroupV1TxRegistry.registry, ...cosmosCosmosMintV1beta1TxRegistry.registry, ...cosmosCosmosNftV1beta1TxRegistry.registry, ...cosmosCosmosSlashingV1beta1TxRegistry.registry, ...cosmosCosmosStakingV1beta1TxRegistry.registry, ...cosmosCosmosUpgradeV1beta1TxRegistry.registry, ...cosmosCosmosVestingV1beta1TxRegistry.registry, ...cosmosCrisisV1beta1TxRegistry.registry, ...cosmosDistributionV1beta1TxRegistry.registry, ...cosmosEvidenceV1beta1TxRegistry.registry, ...cosmosFeegrantV1beta1TxRegistry.registry, ...cosmosGovV1TxRegistry.registry, ...cosmosGovV1beta1TxRegistry.registry, ...cosmosGroupV1TxRegistry.registry, ...cosmosMintV1beta1TxRegistry.registry, ...cosmosNftV1beta1TxRegistry.registry, ...cosmosSlashingV1beta1TxRegistry.registry, ...cosmosStakingV1beta1TxRegistry.registry, ...cosmosUpgradeV1beta1TxRegistry.registry, ...cosmosVestingV1beta1TxRegistry.registry];
export const getSigningCosmosClientOptions = (): {
  registry: Registry;
  aminoTypes: AminoTypes;
} => {
  const registry = new Registry([...cosmosProtoRegistry]);
  const aminoTypes = new AminoTypes({ ...cosmosAminoConverters
  });
  return {
    registry,
    aminoTypes
  };
};
export const getSigningCosmosClient = async ({
  rpcEndpoint,
  signer
}: {
  rpcEndpoint: string | HttpEndpoint;
  signer: OfflineSigner;
}) => {
  const {
    registry,
    aminoTypes
  } = getSigningCosmosClientOptions();
  const client = await SigningStargateClient.connectWithSigner(rpcEndpoint, signer, {
    registry,
    aminoTypes
  });
  return client;
};