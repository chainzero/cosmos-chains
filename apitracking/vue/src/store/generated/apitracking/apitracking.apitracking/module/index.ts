// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { StdFee } from "@cosmjs/launchpad";
import { SigningStargateClient } from "@cosmjs/stargate";
import { Registry, OfflineSigner, EncodeObject, DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgCreateApirequest } from "./types/apitracking/tx";
import { MsgUpdateApirequest } from "./types/apitracking/tx";
import { MsgDeleteApirequest } from "./types/apitracking/tx";
import { MsgApiRequest } from "./types/apitracking/tx";


const types = [
  ["/apitracking.apitracking.MsgCreateApirequest", MsgCreateApirequest],
  ["/apitracking.apitracking.MsgUpdateApirequest", MsgUpdateApirequest],
  ["/apitracking.apitracking.MsgDeleteApirequest", MsgDeleteApirequest],
  ["/apitracking.apitracking.MsgApiRequest", MsgApiRequest],
  
];
export const MissingWalletError = new Error("wallet is required");

export const registry = new Registry(<any>types);

const defaultFee = {
  amount: [],
  gas: "200000",
};

interface TxClientOptions {
  addr: string
}

interface SignAndBroadcastOptions {
  fee: StdFee,
  memo?: string
}

const txClient = async (wallet: OfflineSigner, { addr: addr }: TxClientOptions = { addr: "http://localhost:26657" }) => {
  if (!wallet) throw MissingWalletError;
  let client;
  if (addr) {
    client = await SigningStargateClient.connectWithSigner(addr, wallet, { registry });
  }else{
    client = await SigningStargateClient.offline( wallet, { registry });
  }
  const { address } = (await wallet.getAccounts())[0];

  return {
    signAndBroadcast: (msgs: EncodeObject[], { fee, memo }: SignAndBroadcastOptions = {fee: defaultFee, memo: ""}) => client.signAndBroadcast(address, msgs, fee,memo),
    msgCreateApirequest: (data: MsgCreateApirequest): EncodeObject => ({ typeUrl: "/apitracking.apitracking.MsgCreateApirequest", value: MsgCreateApirequest.fromPartial( data ) }),
    msgUpdateApirequest: (data: MsgUpdateApirequest): EncodeObject => ({ typeUrl: "/apitracking.apitracking.MsgUpdateApirequest", value: MsgUpdateApirequest.fromPartial( data ) }),
    msgDeleteApirequest: (data: MsgDeleteApirequest): EncodeObject => ({ typeUrl: "/apitracking.apitracking.MsgDeleteApirequest", value: MsgDeleteApirequest.fromPartial( data ) }),
    msgApiRequest: (data: MsgApiRequest): EncodeObject => ({ typeUrl: "/apitracking.apitracking.MsgApiRequest", value: MsgApiRequest.fromPartial( data ) }),
    
  };
};

interface QueryClientOptions {
  addr: string
}

const queryClient = async ({ addr: addr }: QueryClientOptions = { addr: "http://localhost:1317" }) => {
  return new Api({ baseUrl: addr });
};

export {
  txClient,
  queryClient,
};
