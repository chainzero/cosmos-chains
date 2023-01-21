/* eslint-disable */
import { Reader, util, configure, Writer } from "protobufjs/minimal";
import * as Long from "long";
import { Params } from "../apitracking/params";
import { Apitracking } from "../apitracking/apitracking";
import {
  PageRequest,
  PageResponse,
} from "../cosmos/base/query/v1beta1/pagination";

export const protobufPackage = "apitracking.apitracking";

/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}

/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params: Params | undefined;
}

export interface QueryGetApitrackingRequest {
  id: number;
}

export interface QueryGetApitrackingResponse {
  Apitracking: Apitracking | undefined;
}

export interface QueryAllApitrackingRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllApitrackingResponse {
  Apitracking: Apitracking[];
  pagination: PageResponse | undefined;
}

const baseQueryParamsRequest: object = {};

export const QueryParamsRequest = {
  encode(_: QueryParamsRequest, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
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

  fromJSON(_: any): QueryParamsRequest {
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
    return message;
  },

  toJSON(_: QueryParamsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest {
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
    return message;
  },
};

const baseQueryParamsResponse: object = {};

export const QueryParamsResponse = {
  encode(
    message: QueryParamsResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryParamsResponse {
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromJSON(object.params);
    } else {
      message.params = undefined;
    }
    return message;
  },

  toJSON(message: QueryParamsResponse): unknown {
    const obj: any = {};
    message.params !== undefined &&
      (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse {
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    } else {
      message.params = undefined;
    }
    return message;
  },
};

const baseQueryGetApitrackingRequest: object = { id: 0 };

export const QueryGetApitrackingRequest = {
  encode(
    message: QueryGetApitrackingRequest,
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
  ): QueryGetApitrackingRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetApitrackingRequest,
    } as QueryGetApitrackingRequest;
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

  fromJSON(object: any): QueryGetApitrackingRequest {
    const message = {
      ...baseQueryGetApitrackingRequest,
    } as QueryGetApitrackingRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: QueryGetApitrackingRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetApitrackingRequest>
  ): QueryGetApitrackingRequest {
    const message = {
      ...baseQueryGetApitrackingRequest,
    } as QueryGetApitrackingRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseQueryGetApitrackingResponse: object = {};

export const QueryGetApitrackingResponse = {
  encode(
    message: QueryGetApitrackingResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.Apitracking !== undefined) {
      Apitracking.encode(
        message.Apitracking,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetApitrackingResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetApitrackingResponse,
    } as QueryGetApitrackingResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Apitracking = Apitracking.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetApitrackingResponse {
    const message = {
      ...baseQueryGetApitrackingResponse,
    } as QueryGetApitrackingResponse;
    if (object.Apitracking !== undefined && object.Apitracking !== null) {
      message.Apitracking = Apitracking.fromJSON(object.Apitracking);
    } else {
      message.Apitracking = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetApitrackingResponse): unknown {
    const obj: any = {};
    message.Apitracking !== undefined &&
      (obj.Apitracking = message.Apitracking
        ? Apitracking.toJSON(message.Apitracking)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetApitrackingResponse>
  ): QueryGetApitrackingResponse {
    const message = {
      ...baseQueryGetApitrackingResponse,
    } as QueryGetApitrackingResponse;
    if (object.Apitracking !== undefined && object.Apitracking !== null) {
      message.Apitracking = Apitracking.fromPartial(object.Apitracking);
    } else {
      message.Apitracking = undefined;
    }
    return message;
  },
};

const baseQueryAllApitrackingRequest: object = {};

export const QueryAllApitrackingRequest = {
  encode(
    message: QueryAllApitrackingRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllApitrackingRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllApitrackingRequest,
    } as QueryAllApitrackingRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllApitrackingRequest {
    const message = {
      ...baseQueryAllApitrackingRequest,
    } as QueryAllApitrackingRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllApitrackingRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllApitrackingRequest>
  ): QueryAllApitrackingRequest {
    const message = {
      ...baseQueryAllApitrackingRequest,
    } as QueryAllApitrackingRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllApitrackingResponse: object = {};

export const QueryAllApitrackingResponse = {
  encode(
    message: QueryAllApitrackingResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.Apitracking) {
      Apitracking.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllApitrackingResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllApitrackingResponse,
    } as QueryAllApitrackingResponse;
    message.Apitracking = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Apitracking.push(Apitracking.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllApitrackingResponse {
    const message = {
      ...baseQueryAllApitrackingResponse,
    } as QueryAllApitrackingResponse;
    message.Apitracking = [];
    if (object.Apitracking !== undefined && object.Apitracking !== null) {
      for (const e of object.Apitracking) {
        message.Apitracking.push(Apitracking.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllApitrackingResponse): unknown {
    const obj: any = {};
    if (message.Apitracking) {
      obj.Apitracking = message.Apitracking.map((e) =>
        e ? Apitracking.toJSON(e) : undefined
      );
    } else {
      obj.Apitracking = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllApitrackingResponse>
  ): QueryAllApitrackingResponse {
    const message = {
      ...baseQueryAllApitrackingResponse,
    } as QueryAllApitrackingResponse;
    message.Apitracking = [];
    if (object.Apitracking !== undefined && object.Apitracking !== null) {
      for (const e of object.Apitracking) {
        message.Apitracking.push(Apitracking.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** Parameters queries the parameters of the module. */
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Queries a Apitracking by id. */
  Apitracking(
    request: QueryGetApitrackingRequest
  ): Promise<QueryGetApitrackingResponse>;
  /** Queries a list of Apitracking items. */
  ApitrackingAll(
    request: QueryAllApitrackingRequest
  ): Promise<QueryAllApitrackingResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "apitracking.apitracking.Query",
      "Params",
      data
    );
    return promise.then((data) => QueryParamsResponse.decode(new Reader(data)));
  }

  Apitracking(
    request: QueryGetApitrackingRequest
  ): Promise<QueryGetApitrackingResponse> {
    const data = QueryGetApitrackingRequest.encode(request).finish();
    const promise = this.rpc.request(
      "apitracking.apitracking.Query",
      "Apitracking",
      data
    );
    return promise.then((data) =>
      QueryGetApitrackingResponse.decode(new Reader(data))
    );
  }

  ApitrackingAll(
    request: QueryAllApitrackingRequest
  ): Promise<QueryAllApitrackingResponse> {
    const data = QueryAllApitrackingRequest.encode(request).finish();
    const promise = this.rpc.request(
      "apitracking.apitracking.Query",
      "ApitrackingAll",
      data
    );
    return promise.then((data) =>
      QueryAllApitrackingResponse.decode(new Reader(data))
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
