/* eslint-disable */
import * as Long from "long";
import { util, configure, Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "apitracking.apitracking";

export interface Apirequest {
  id: number;
  requestor: string;
  uri: string;
  datetime: string;
  creator: string;
}

const baseApirequest: object = {
  id: 0,
  requestor: "",
  uri: "",
  datetime: "",
  creator: "",
};

export const Apirequest = {
  encode(message: Apirequest, writer: Writer = Writer.create()): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
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
    if (message.creator !== "") {
      writer.uint32(42).string(message.creator);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Apirequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseApirequest } as Apirequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
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
        case 5:
          message.creator = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Apirequest {
    const message = { ...baseApirequest } as Apirequest;
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
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    return message;
  },

  toJSON(message: Apirequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.requestor !== undefined && (obj.requestor = message.requestor);
    message.uri !== undefined && (obj.uri = message.uri);
    message.datetime !== undefined && (obj.datetime = message.datetime);
    message.creator !== undefined && (obj.creator = message.creator);
    return obj;
  },

  fromPartial(object: DeepPartial<Apirequest>): Apirequest {
    const message = { ...baseApirequest } as Apirequest;
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
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    return message;
  },
};

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
