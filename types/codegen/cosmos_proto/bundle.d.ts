import * as _3 from "../cosmos/cosmos_proto/cosmos";
export declare const cosmos_proto: {
    scalarTypeFromJSON(object: any): _3.ScalarType;
    scalarTypeToJSON(object: _3.ScalarType): string;
    ScalarType: typeof _3.ScalarType;
    ScalarTypeSDKType: typeof _3.ScalarTypeSDKType;
    InterfaceDescriptor: {
        encode(message: _3.InterfaceDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _3.InterfaceDescriptor;
        fromJSON(object: any): _3.InterfaceDescriptor;
        toJSON(message: _3.InterfaceDescriptor): unknown;
        fromPartial(object: Partial<_3.InterfaceDescriptor>): _3.InterfaceDescriptor;
    };
    ScalarDescriptor: {
        encode(message: _3.ScalarDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _3.ScalarDescriptor;
        fromJSON(object: any): _3.ScalarDescriptor;
        toJSON(message: _3.ScalarDescriptor): unknown;
        fromPartial(object: Partial<_3.ScalarDescriptor>): _3.ScalarDescriptor;
    };
};
