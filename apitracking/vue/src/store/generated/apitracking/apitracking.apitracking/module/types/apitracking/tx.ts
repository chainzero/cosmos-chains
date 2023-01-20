/* eslint-disable */
import { Reader, util, configure, Writer } from "protobufjs/minimal";
import * as Long from "long";

export const protobufPackage = "apitracking.apitracking";

export interface MsgCreateApirequest {
  creator: string;
  requestor: string;
  uri: string;
  datetime: string;
}

export interface MsgCreateApirequestResponse {
  id: number;
}

export interface MsgUpdateApirequest {
  creator: string;
  id: number;
  requestor: string;
  uri: string;
  datetime: string;
}

export interface MsgUpdateApirequestResponse {}

export interface MsgDeleteApirequest {
  creator: string;
  id: number;
}

export interface MsgDeleteApirequestResponse {}

export interface MsgApiRequest {
  creator: string;
  requestor: string;
  uri: string;
  datetime: string;
}

export interface MsgApiRequestResponse {}

const baseMsgCreateApirequest: object = {
  creator: "",
  requestor: "",
  uri: "",
  datetime: "",
};

export const MsgCreateApirequest = {
  encode(
    message: MsgCreateApirequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.requestor !== "") {
      writer.uint32(18).string(message.requestor);
    }
    if (message.uri !== "") {
      writer.uint32(26).string(message.uri);
    }
    if (message.datetime !== "") {
      writer.uint32(34).string(message.datetime);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateApirequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateApirequest } as MsgCreateApirequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.requestor = reader.string();
          break;
        case 3:
          message.uri = reader.string();
          break;
        case 4:
          message.datetime = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateApirequest {
    const message = { ...baseMsgCreateApirequest } as MsgCreateApirequest;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.requestor !== undefined && object.requestor !== null) {
      message.requestor = String(object.requestor);
    } else {
      message.requestor = "";
    }
    if (object.uri !== undefined && object.uri !== null) {
      message.uri = String(object.uri);
    } else {
      message.uri = "";
    }
    if (object.datetime !== undefined && object.datetime !== null) {
      message.datetime = String(object.datetime);
    } else {
      message.datetime = "";
    }
    return message;
  },

  toJSON(message: MsgCreateApirequest): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.requestor !== undefined && (obj.requestor = message.requestor);
    message.uri !== undefined && (obj.uri = message.uri);
    message.datetime !== undefined && (obj.datetime = message.datetime);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreateApirequest>): MsgCreateApirequest {
    const message = { ...baseMsgCreateApirequest } as MsgCreateApirequest;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.requestor !== undefined && object.requestor !== null) {
      message.requestor = object.requestor;
    } else {
      message.requestor = "";
    }
    if (object.uri !== undefined && object.uri !== null) {
      message.uri = object.uri;
    } else {
      message.uri = "";
    }
    if (object.datetime !== undefined && object.datetime !== null) {
      message.datetime = object.datetime;
    } else {
      message.datetime = "";
    }
    return message;
  },
};

const baseMsgCreateApirequestResponse: object = { id: 0 };

export const MsgCreateApirequestResponse = {
  encode(
    message: MsgCreateApirequestResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgCreateApirequestResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCreateApirequestResponse,
    } as MsgCreateApirequestResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateApirequestResponse {
    const message = {
      ...baseMsgCreateApirequestResponse,
    } as MsgCreateApirequestResponse;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: MsgCreateApirequestResponse): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgCreateApirequestResponse>
  ): MsgCreateApirequestResponse {
    const message = {
      ...baseMsgCreateApirequestResponse,
    } as MsgCreateApirequestResponse;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseMsgUpdateApirequest: object = {
  creator: "",
  id: 0,
  requestor: "",
  uri: "",
  datetime: "",
};

export const MsgUpdateApirequest = {
  encode(
    message: MsgUpdateApirequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id);
    }
    if (message.requestor !== "") {
      writer.uint32(26).string(message.requestor);
    }
    if (message.uri !== "") {
      writer.uint32(34).string(message.uri);
    }
    if (message.datetime !== "") {
      writer.uint32(42).string(message.datetime);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateApirequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUpdateApirequest } as MsgUpdateApirequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.requestor = reader.string();
          break;
        case 4:
          message.uri = reader.string();
          break;
        case 5:
          message.datetime = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateApirequest {
    const message = { ...baseMsgUpdateApirequest } as MsgUpdateApirequest;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    if (object.requestor !== undefined && object.requestor !== null) {
      message.requestor = String(object.requestor);
    } else {
      message.requestor = "";
    }
    if (object.uri !== undefined && object.uri !== null) {
      message.uri = String(object.uri);
    } else {
      message.uri = "";
    }
    if (object.datetime !== undefined && object.datetime !== null) {
      message.datetime = String(object.datetime);
    } else {
      message.datetime = "";
    }
    return message;
  },

  toJSON(message: MsgUpdateApirequest): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = message.id);
    message.requestor !== undefined && (obj.requestor = message.requestor);
    message.uri !== undefined && (obj.uri = message.uri);
    message.datetime !== undefined && (obj.datetime = message.datetime);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgUpdateApirequest>): MsgUpdateApirequest {
    const message = { ...baseMsgUpdateApirequest } as MsgUpdateApirequest;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    if (object.requestor !== undefined && object.requestor !== null) {
      message.requestor = object.requestor;
    } else {
      message.requestor = "";
    }
    if (object.uri !== undefined && object.uri !== null) {
      message.uri = object.uri;
    } else {
      message.uri = "";
    }
    if (object.datetime !== undefined && object.datetime !== null) {
      message.datetime = object.datetime;
    } else {
      message.datetime = "";
    }
    return message;
  },
};

const baseMsgUpdateApirequestResponse: object = {};

export const MsgUpdateApirequestResponse = {
  encode(
    _: MsgUpdateApirequestResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgUpdateApirequestResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdateApirequestResponse,
    } as MsgUpdateApirequestResponse;
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

  fromJSON(_: any): MsgUpdateApirequestResponse {
    const message = {
      ...baseMsgUpdateApirequestResponse,
    } as MsgUpdateApirequestResponse;
    return message;
  },

  toJSON(_: MsgUpdateApirequestResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgUpdateApirequestResponse>
  ): MsgUpdateApirequestResponse {
    const message = {
      ...baseMsgUpdateApirequestResponse,
    } as MsgUpdateApirequestResponse;
    return message;
  },
};

const baseMsgDeleteApirequest: object = { creator: "", id: 0 };

export const MsgDeleteApirequest = {
  encode(
    message: MsgDeleteApirequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteApirequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgDeleteApirequest } as MsgDeleteApirequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDeleteApirequest {
    const message = { ...baseMsgDeleteApirequest } as MsgDeleteApirequest;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: MsgDeleteApirequest): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgDeleteApirequest>): MsgDeleteApirequest {
    const message = { ...baseMsgDeleteApirequest } as MsgDeleteApirequest;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseMsgDeleteApirequestResponse: object = {};

export const MsgDeleteApirequestResponse = {
  encode(
    _: MsgDeleteApirequestResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgDeleteApirequestResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgDeleteApirequestResponse,
    } as MsgDeleteApirequestResponse;
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

  fromJSON(_: any): MsgDeleteApirequestResponse {
    const message = {
      ...baseMsgDeleteApirequestResponse,
    } as MsgDeleteApirequestResponse;
    return message;
  },

  toJSON(_: MsgDeleteApirequestResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgDeleteApirequestResponse>
  ): MsgDeleteApirequestResponse {
    const message = {
      ...baseMsgDeleteApirequestResponse,
    } as MsgDeleteApirequestResponse;
    return message;
  },
};

const baseMsgApiRequest: object = {
  creator: "",
  requestor: "",
  uri: "",
  datetime: "",
};

export const MsgApiRequest = {
  encode(message: MsgApiRequest, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.requestor !== "") {
      writer.uint32(18).string(message.requestor);
    }
    if (message.uri !== "") {
      writer.uint32(26).string(message.uri);
    }
    if (message.datetime !== "") {
      writer.uint32(34).string(message.datetime);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgApiRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgApiRequest } as MsgApiRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.requestor = reader.string();
          break;
        case 3:
          message.uri = reader.string();
          break;
        case 4:
          message.datetime = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgApiRequest {
    const message = { ...baseMsgApiRequest } as MsgApiRequest;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.requestor !== undefined && object.requestor !== null) {
      message.requestor = String(object.requestor);
    } else {
      message.requestor = "";
    }
    if (object.uri !== undefined && object.uri !== null) {
      message.uri = String(object.uri);
    } else {
      message.uri = "";
    }
    if (object.datetime !== undefined && object.datetime !== null) {
      message.datetime = String(object.datetime);
    } else {
      message.datetime = "";
    }
    return message;
  },

  toJSON(message: MsgApiRequest): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.requestor !== undefined && (obj.requestor = message.requestor);
    message.uri !== undefined && (obj.uri = message.uri);
    message.datetime !== undefined && (obj.datetime = message.datetime);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgApiRequest>): MsgApiRequest {
    const message = { ...baseMsgApiRequest } as MsgApiRequest;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.requestor !== undefined && object.requestor !== null) {
      message.requestor = object.requestor;
    } else {
      message.requestor = "";
    }
    if (object.uri !== undefined && object.uri !== null) {
      message.uri = object.uri;
    } else {
      message.uri = "";
    }
    if (object.datetime !== undefined && object.datetime !== null) {
      message.datetime = object.datetime;
    } else {
      message.datetime = "";
    }
    return message;
  },
};

const baseMsgApiRequestResponse: object = {};

export const MsgApiRequestResponse = {
  encode(_: MsgApiRequestResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgApiRequestResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgApiRequestResponse } as MsgApiRequestResponse;
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

  fromJSON(_: any): MsgApiRequestResponse {
    const message = { ...baseMsgApiRequestResponse } as MsgApiRequestResponse;
    return message;
  },

  toJSON(_: MsgApiRequestResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgApiRequestResponse>): MsgApiRequestResponse {
    const message = { ...baseMsgApiRequestResponse } as MsgApiRequestResponse;
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  CreateApirequest(
    request: MsgCreateApirequest
  ): Promise<MsgCreateApirequestResponse>;
  UpdateApirequest(
    request: MsgUpdateApirequest
  ): Promise<MsgUpdateApirequestResponse>;
  DeleteApirequest(
    request: MsgDeleteApirequest
  ): Promise<MsgDeleteApirequestResponse>;
  /** this line is used by starport scaffolding # proto/tx/rpc */
  ApiRequest(request: MsgApiRequest): Promise<MsgApiRequestResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  CreateApirequest(
    request: MsgCreateApirequest
  ): Promise<MsgCreateApirequestResponse> {
    const data = MsgCreateApirequest.encode(request).finish();
    const promise = this.rpc.request(
      "apitracking.apitracking.Msg",
      "CreateApirequest",
      data
    );
    return promise.then((data) =>
      MsgCreateApirequestResponse.decode(new Reader(data))
    );
  }

  UpdateApirequest(
    request: MsgUpdateApirequest
  ): Promise<MsgUpdateApirequestResponse> {
    const data = MsgUpdateApirequest.encode(request).finish();
    const promise = this.rpc.request(
      "apitracking.apitracking.Msg",
      "UpdateApirequest",
      data
    );
    return promise.then((data) =>
      MsgUpdateApirequestResponse.decode(new Reader(data))
    );
  }

  DeleteApirequest(
    request: MsgDeleteApirequest
  ): Promise<MsgDeleteApirequestResponse> {
    const data = MsgDeleteApirequest.encode(request).finish();
    const promise = this.rpc.request(
      "apitracking.apitracking.Msg",
      "DeleteApirequest",
      data
    );
    return promise.then((data) =>
      MsgDeleteApirequestResponse.decode(new Reader(data))
    );
  }

  ApiRequest(request: MsgApiRequest): Promise<MsgApiRequestResponse> {
    const data = MsgApiRequest.encode(request).finish();
    const promise = this.rpc.request(
      "apitracking.apitracking.Msg",
      "ApiRequest",
      data
    );
    return promise.then((data) =>
      MsgApiRequestResponse.decode(new Reader(data))
    );
  }
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array
  ): Promise<Uint8Array>;
}

declare var self: any | undefined;
declare var window: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") return globalThis;
  if (typeof self !== "undefined") return self;
  if (typeof window !== "undefined") return window;
  if (typeof global !== "undefined") return global;
  throw "Unable to locate global object";
})();

type Builtin = Date | Function | Uint8Array | string | number | undefined;
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (util.Long !== Long) {
  util.Long = Long as any;
  configure();
}
