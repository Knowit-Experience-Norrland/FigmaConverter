// Generated by https://quicktype.io

export interface Figma {
    document: Document;
    components: { [key: string]: Component };
    schemaVersion: number;
    styles: { [key: string]: Component };
    name: string;
    lastModified: string;
    thumbnailUrl: string;
    version: string;
    role: string;
}

export interface Component {
    key: string;
    name: string;
    description: string;
    styleType?: string;
}

export interface Document {
    id: string;
    name: string;
    type: string;
    children: DocumentChild[];
}

export interface DocumentChild {
    id: string;
    name: string;
    type: string;
    children: PurpleChild[];
    backgroundColor: Color;
    prototypeStartNodeID: null;
    prototypeDevice: PrototypeDevice;
}

export interface Color {
    r: number;
    g: number;
    b: number;
    a: number;
}

export interface PurpleChild {
    id: string;
    name: string;
    type: string;
    blendMode: ChildBlendMode;
    children?: PurpleChild[];
    absoluteBoundingBox: AbsoluteBoundingBox;
    constraints: Constraints;
    clipsContent?: boolean;
    background?: Background[];
    fills: Background[];
    strokes: any[];
    cornerRadius?: number;
    rectangleCornerRadii?: number[];
    strokeWeight: number;
    strokeAlign: StrokeAlign;
    backgroundColor?: Color;
    layoutGrids?: any[];
    layoutMode?: string;
    counterAxisSizingMode?: string;
    itemSpacing?: number;
    primaryAxisSizingMode?: string;
    counterAxisAlignItems?: string;
    primaryAxisAlignItems?: string;
    paddingLeft?: number;
    paddingRight?: number;
    paddingTop?: number;
    paddingBottom?: number;
    effects: any[];
    characters?: string;
    style?: Style;
    characterStyleOverrides?: any[];
    styleOverrideTable?: StyleOverrideTable;
    styles?: Styles;
    preserveRatio?: boolean;
}

export interface AbsoluteBoundingBox {
    x: number;
    y: number;
    width: number;
    height: number;
}

export interface Background {
    blendMode: BackgroundBlendMode;
    type: Type;
    color: Color;
    opacity?: number;
}

export enum BackgroundBlendMode {
    Normal = 'NORMAL',
}

export enum Type {
    Solid = 'SOLID',
}

export enum ChildBlendMode {
    PassThrough = 'PASS_THROUGH',
}

export interface FluffyChild {
    id: string;
    name: string;
    type: string;
    blendMode: ChildBlendMode;
    children?: TentacledChild[];
    absoluteBoundingBox: AbsoluteBoundingBox;
    constraints: Constraints;
    layoutAlign?: string;
    layoutGrow?: number;
    clipsContent?: boolean;
    background?: Background[];
    fills: Background[];
    strokes: any[];
    strokeWeight: number;
    strokeAlign: StrokeAlign;
    backgroundColor?: Color;
    layoutGrids?: any[];
    layoutMode?: string;
    itemSpacing?: number;
    effects: any[];
    cornerRadius?: number;
    rectangleCornerRadii?: number[];
    characters?: string;
    style?: Style;
    characterStyleOverrides?: any[];
    styleOverrideTable?: StyleOverrideTable;
    styles?: Styles;
    counterAxisSizingMode?: string;
    primaryAxisSizingMode?: string;
    counterAxisAlignItems?: string;
    primaryAxisAlignItems?: string;
    paddingLeft?: number;
    paddingRight?: number;
    paddingTop?: number;
    paddingBottom?: number;
    componentId?: string;
    preserveRatio?: boolean;
}

export interface TentacledChild {
    id: string;
    name: string;
    type: string;
    blendMode: ChildBlendMode;
    absoluteBoundingBox: AbsoluteBoundingBox;
    constraints: Constraints;
    layoutAlign: string;
    layoutGrow: number;
    fills: Background[];
    strokes: any[];
    strokeWeight: number;
    strokeAlign: StrokeAlign;
    effects: any[];
    characters?: string;
    style?: Style;
    characterStyleOverrides?: any[];
    styleOverrideTable?: StyleOverrideTable;
    children?: StickyChild[];
    clipsContent?: boolean;
    background?: any[];
    backgroundColor?: Color;
    layoutGrids?: any[];
    layoutMode?: string;
    itemSpacing?: number;
    cornerRadius?: number;
    rectangleCornerRadii?: number[];
}

export interface StickyChild {
    id: string;
    name: string;
    type: string;
    blendMode: ChildBlendMode;
    absoluteBoundingBox: AbsoluteBoundingBox;
    constraints: Constraints;
    layoutAlign: string;
    layoutGrow: number;
    fills: Background[];
    strokes: any[];
    strokeWeight: number;
    strokeAlign: StrokeAlign;
    effects: any[];
    characters: string;
    style: Style;
    characterStyleOverrides: any[];
    styleOverrideTable: StyleOverrideTable;
}

export interface Constraints {
    vertical: Vertical;
    horizontal: Horizontal;
}

export enum Horizontal {
    Left = 'LEFT',
}

export enum Vertical {
    Top = 'TOP',
}

export enum StrokeAlign {
    Inside = 'INSIDE',
    Outside = 'OUTSIDE',
}

export interface Style {
    fontFamily: FontFamily;
    fontPostScriptName: null | string;
    fontWeight: number;
    textAutoResize: TextAutoResize;
    fontSize: number;
    textAlignHorizontal: Horizontal;
    textAlignVertical: Vertical;
    letterSpacing: number;
    italic: boolean;
    lineHeightPx: number;
    lineHeightPercent: number;
    lineHeightUnit: LineHeightUnit;
}

export enum FontFamily {
    Montserrat = 'Montserrat',
    Roboto = 'Roboto',
}

export enum LineHeightUnit {
    Intrinsic = 'INTRINSIC_%',
}

export enum TextAutoResize {
    WidthAndHeight = 'WIDTH_AND_HEIGHT',
}

export interface StyleOverrideTable {}

export interface Styles {
    text?: string;
    fill?: string;
}

export interface PrototypeDevice {
    type: string;
    rotation: string;
}
