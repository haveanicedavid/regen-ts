import * as _265 from "./api/http";
import * as _266 from "./protobuf/descriptor";
import * as _267 from "./protobuf/any";
import * as _268 from "./protobuf/timestamp";
import * as _269 from "./protobuf/duration";
export declare namespace google {
    const api: {
        Http: {
            encode(message: _265.Http, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _265.Http;
            fromJSON(object: any): _265.Http;
            toJSON(message: _265.Http): unknown;
            fromPartial(object: Partial<_265.Http>): _265.Http;
        };
        HttpRule: {
            encode(message: _265.HttpRule, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _265.HttpRule;
            fromJSON(object: any): _265.HttpRule;
            toJSON(message: _265.HttpRule): unknown;
            fromPartial(object: Partial<_265.HttpRule>): _265.HttpRule;
        };
        CustomHttpPattern: {
            encode(message: _265.CustomHttpPattern, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _265.CustomHttpPattern;
            fromJSON(object: any): _265.CustomHttpPattern;
            toJSON(message: _265.CustomHttpPattern): unknown;
            fromPartial(object: Partial<_265.CustomHttpPattern>): _265.CustomHttpPattern;
        };
    };
    const protobuf: {
        Duration: {
            encode(message: _269.Duration, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _269.Duration;
            fromJSON(object: any): _269.Duration;
            toJSON(message: _269.Duration): unknown;
            fromPartial(object: Partial<_269.Duration>): _269.Duration;
        };
        Timestamp: {
            encode(message: _268.Timestamp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _268.Timestamp;
            fromJSON(object: any): _268.Timestamp;
            toJSON(message: _268.Timestamp): unknown;
            fromPartial(object: Partial<_268.Timestamp>): _268.Timestamp;
        };
        Any: {
            encode(message: _267.Any, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _267.Any;
            fromJSON(object: any): _267.Any;
            toJSON(message: _267.Any): unknown;
            fromPartial(object: Partial<_267.Any>): _267.Any;
        };
        fieldDescriptorProto_TypeFromJSON(object: any): _266.FieldDescriptorProto_Type;
        fieldDescriptorProto_TypeToJSON(object: _266.FieldDescriptorProto_Type): string;
        fieldDescriptorProto_LabelFromJSON(object: any): _266.FieldDescriptorProto_Label;
        fieldDescriptorProto_LabelToJSON(object: _266.FieldDescriptorProto_Label): string;
        fileOptions_OptimizeModeFromJSON(object: any): _266.FileOptions_OptimizeMode;
        fileOptions_OptimizeModeToJSON(object: _266.FileOptions_OptimizeMode): string;
        fieldOptions_CTypeFromJSON(object: any): _266.FieldOptions_CType;
        fieldOptions_CTypeToJSON(object: _266.FieldOptions_CType): string;
        fieldOptions_JSTypeFromJSON(object: any): _266.FieldOptions_JSType;
        fieldOptions_JSTypeToJSON(object: _266.FieldOptions_JSType): string;
        methodOptions_IdempotencyLevelFromJSON(object: any): _266.MethodOptions_IdempotencyLevel;
        methodOptions_IdempotencyLevelToJSON(object: _266.MethodOptions_IdempotencyLevel): string;
        FieldDescriptorProto_Type: typeof _266.FieldDescriptorProto_Type;
        FieldDescriptorProto_TypeSDKType: typeof _266.FieldDescriptorProto_TypeSDKType;
        FieldDescriptorProto_Label: typeof _266.FieldDescriptorProto_Label;
        FieldDescriptorProto_LabelSDKType: typeof _266.FieldDescriptorProto_LabelSDKType;
        FileOptions_OptimizeMode: typeof _266.FileOptions_OptimizeMode;
        FileOptions_OptimizeModeSDKType: typeof _266.FileOptions_OptimizeModeSDKType;
        FieldOptions_CType: typeof _266.FieldOptions_CType;
        FieldOptions_CTypeSDKType: typeof _266.FieldOptions_CTypeSDKType;
        FieldOptions_JSType: typeof _266.FieldOptions_JSType;
        FieldOptions_JSTypeSDKType: typeof _266.FieldOptions_JSTypeSDKType;
        MethodOptions_IdempotencyLevel: typeof _266.MethodOptions_IdempotencyLevel;
        MethodOptions_IdempotencyLevelSDKType: typeof _266.MethodOptions_IdempotencyLevelSDKType;
        FileDescriptorSet: {
            encode(message: _266.FileDescriptorSet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _266.FileDescriptorSet;
            fromJSON(object: any): _266.FileDescriptorSet;
            toJSON(message: _266.FileDescriptorSet): unknown;
            fromPartial(object: Partial<_266.FileDescriptorSet>): _266.FileDescriptorSet;
        };
        FileDescriptorProto: {
            encode(message: _266.FileDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _266.FileDescriptorProto;
            fromJSON(object: any): _266.FileDescriptorProto;
            toJSON(message: _266.FileDescriptorProto): unknown;
            fromPartial(object: Partial<_266.FileDescriptorProto>): _266.FileDescriptorProto;
        };
        DescriptorProto: {
            encode(message: _266.DescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _266.DescriptorProto;
            fromJSON(object: any): _266.DescriptorProto;
            toJSON(message: _266.DescriptorProto): unknown;
            fromPartial(object: Partial<_266.DescriptorProto>): _266.DescriptorProto;
        };
        DescriptorProto_ExtensionRange: {
            encode(message: _266.DescriptorProto_ExtensionRange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _266.DescriptorProto_ExtensionRange;
            fromJSON(object: any): _266.DescriptorProto_ExtensionRange;
            toJSON(message: _266.DescriptorProto_ExtensionRange): unknown;
            fromPartial(object: Partial<_266.DescriptorProto_ExtensionRange>): _266.DescriptorProto_ExtensionRange;
        };
        DescriptorProto_ReservedRange: {
            encode(message: _266.DescriptorProto_ReservedRange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _266.DescriptorProto_ReservedRange;
            fromJSON(object: any): _266.DescriptorProto_ReservedRange;
            toJSON(message: _266.DescriptorProto_ReservedRange): unknown;
            fromPartial(object: Partial<_266.DescriptorProto_ReservedRange>): _266.DescriptorProto_ReservedRange;
        };
        ExtensionRangeOptions: {
            encode(message: _266.ExtensionRangeOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _266.ExtensionRangeOptions;
            fromJSON(object: any): _266.ExtensionRangeOptions;
            toJSON(message: _266.ExtensionRangeOptions): unknown;
            fromPartial(object: Partial<_266.ExtensionRangeOptions>): _266.ExtensionRangeOptions;
        };
        FieldDescriptorProto: {
            encode(message: _266.FieldDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _266.FieldDescriptorProto;
            fromJSON(object: any): _266.FieldDescriptorProto;
            toJSON(message: _266.FieldDescriptorProto): unknown;
            fromPartial(object: Partial<_266.FieldDescriptorProto>): _266.FieldDescriptorProto;
        };
        OneofDescriptorProto: {
            encode(message: _266.OneofDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _266.OneofDescriptorProto;
            fromJSON(object: any): _266.OneofDescriptorProto;
            toJSON(message: _266.OneofDescriptorProto): unknown;
            fromPartial(object: Partial<_266.OneofDescriptorProto>): _266.OneofDescriptorProto;
        };
        EnumDescriptorProto: {
            encode(message: _266.EnumDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _266.EnumDescriptorProto;
            fromJSON(object: any): _266.EnumDescriptorProto;
            toJSON(message: _266.EnumDescriptorProto): unknown;
            fromPartial(object: Partial<_266.EnumDescriptorProto>): _266.EnumDescriptorProto;
        };
        EnumDescriptorProto_EnumReservedRange: {
            encode(message: _266.EnumDescriptorProto_EnumReservedRange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _266.EnumDescriptorProto_EnumReservedRange;
            fromJSON(object: any): _266.EnumDescriptorProto_EnumReservedRange;
            toJSON(message: _266.EnumDescriptorProto_EnumReservedRange): unknown;
            fromPartial(object: Partial<_266.EnumDescriptorProto_EnumReservedRange>): _266.EnumDescriptorProto_EnumReservedRange;
        };
        EnumValueDescriptorProto: {
            encode(message: _266.EnumValueDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _266.EnumValueDescriptorProto;
            fromJSON(object: any): _266.EnumValueDescriptorProto;
            toJSON(message: _266.EnumValueDescriptorProto): unknown;
            fromPartial(object: Partial<_266.EnumValueDescriptorProto>): _266.EnumValueDescriptorProto;
        };
        ServiceDescriptorProto: {
            encode(message: _266.ServiceDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _266.ServiceDescriptorProto;
            fromJSON(object: any): _266.ServiceDescriptorProto;
            toJSON(message: _266.ServiceDescriptorProto): unknown;
            fromPartial(object: Partial<_266.ServiceDescriptorProto>): _266.ServiceDescriptorProto;
        };
        MethodDescriptorProto: {
            encode(message: _266.MethodDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _266.MethodDescriptorProto;
            fromJSON(object: any): _266.MethodDescriptorProto;
            toJSON(message: _266.MethodDescriptorProto): unknown;
            fromPartial(object: Partial<_266.MethodDescriptorProto>): _266.MethodDescriptorProto;
        };
        FileOptions: {
            encode(message: _266.FileOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _266.FileOptions;
            fromJSON(object: any): _266.FileOptions;
            toJSON(message: _266.FileOptions): unknown;
            fromPartial(object: Partial<_266.FileOptions>): _266.FileOptions;
        };
        MessageOptions: {
            encode(message: _266.MessageOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _266.MessageOptions;
            fromJSON(object: any): _266.MessageOptions;
            toJSON(message: _266.MessageOptions): unknown;
            fromPartial(object: Partial<_266.MessageOptions>): _266.MessageOptions;
        };
        FieldOptions: {
            encode(message: _266.FieldOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _266.FieldOptions;
            fromJSON(object: any): _266.FieldOptions;
            toJSON(message: _266.FieldOptions): unknown;
            fromPartial(object: Partial<_266.FieldOptions>): _266.FieldOptions;
        };
        OneofOptions: {
            encode(message: _266.OneofOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _266.OneofOptions;
            fromJSON(object: any): _266.OneofOptions;
            toJSON(message: _266.OneofOptions): unknown;
            fromPartial(object: Partial<_266.OneofOptions>): _266.OneofOptions;
        };
        EnumOptions: {
            encode(message: _266.EnumOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _266.EnumOptions;
            fromJSON(object: any): _266.EnumOptions;
            toJSON(message: _266.EnumOptions): unknown;
            fromPartial(object: Partial<_266.EnumOptions>): _266.EnumOptions;
        };
        EnumValueOptions: {
            encode(message: _266.EnumValueOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _266.EnumValueOptions;
            fromJSON(object: any): _266.EnumValueOptions;
            toJSON(message: _266.EnumValueOptions): unknown;
            fromPartial(object: Partial<_266.EnumValueOptions>): _266.EnumValueOptions;
        };
        ServiceOptions: {
            encode(message: _266.ServiceOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _266.ServiceOptions;
            fromJSON(object: any): _266.ServiceOptions;
            toJSON(message: _266.ServiceOptions): unknown;
            fromPartial(object: Partial<_266.ServiceOptions>): _266.ServiceOptions;
        };
        MethodOptions: {
            encode(message: _266.MethodOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _266.MethodOptions;
            fromJSON(object: any): _266.MethodOptions;
            toJSON(message: _266.MethodOptions): unknown;
            fromPartial(object: Partial<_266.MethodOptions>): _266.MethodOptions;
        };
        UninterpretedOption: {
            encode(message: _266.UninterpretedOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _266.UninterpretedOption;
            fromJSON(object: any): _266.UninterpretedOption;
            toJSON(message: _266.UninterpretedOption): unknown;
            fromPartial(object: Partial<_266.UninterpretedOption>): _266.UninterpretedOption;
        };
        UninterpretedOption_NamePart: {
            encode(message: _266.UninterpretedOption_NamePart, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _266.UninterpretedOption_NamePart;
            fromJSON(object: any): _266.UninterpretedOption_NamePart;
            toJSON(message: _266.UninterpretedOption_NamePart): unknown;
            fromPartial(object: Partial<_266.UninterpretedOption_NamePart>): _266.UninterpretedOption_NamePart;
        };
        SourceCodeInfo: {
            encode(message: _266.SourceCodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _266.SourceCodeInfo;
            fromJSON(object: any): _266.SourceCodeInfo;
            toJSON(message: _266.SourceCodeInfo): unknown;
            fromPartial(object: Partial<_266.SourceCodeInfo>): _266.SourceCodeInfo;
        };
        SourceCodeInfo_Location: {
            encode(message: _266.SourceCodeInfo_Location, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _266.SourceCodeInfo_Location;
            fromJSON(object: any): _266.SourceCodeInfo_Location;
            toJSON(message: _266.SourceCodeInfo_Location): unknown;
            fromPartial(object: Partial<_266.SourceCodeInfo_Location>): _266.SourceCodeInfo_Location;
        };
        GeneratedCodeInfo: {
            encode(message: _266.GeneratedCodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _266.GeneratedCodeInfo;
            fromJSON(object: any): _266.GeneratedCodeInfo;
            toJSON(message: _266.GeneratedCodeInfo): unknown;
            fromPartial(object: Partial<_266.GeneratedCodeInfo>): _266.GeneratedCodeInfo;
        };
        GeneratedCodeInfo_Annotation: {
            encode(message: _266.GeneratedCodeInfo_Annotation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _266.GeneratedCodeInfo_Annotation;
            fromJSON(object: any): _266.GeneratedCodeInfo_Annotation;
            toJSON(message: _266.GeneratedCodeInfo_Annotation): unknown;
            fromPartial(object: Partial<_266.GeneratedCodeInfo_Annotation>): _266.GeneratedCodeInfo_Annotation;
        };
    };
}
