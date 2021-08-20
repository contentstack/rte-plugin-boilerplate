import React, { ReactElement } from "react";
import { RTEPlugin } from "./index";
export declare interface IRteParam {
    [key: string]: any;
}
export declare type IOnFunction = {
    exec: () => {};
    normalize: (rte: IRteParam) => {};
    insertBreak: (rte: IRteParam) => {};
    deleteBackward: (rte: IRteParam) => {};
    deleteForward: (rte: IRteParam) => {};
    beforeRender: (rte: IRteParam) => {};
    beforeChildRender: () => {};
    copy: (rte: IRteParam) => void;
};
export declare type IOnType = "exec" | "normalize" | "deleteBackwards" | "deleteForwards" | "insertBreak" | "beforeRender" | "beforeChildRender" | "copy" | "paste";
export declare type IDisplayOnOptions = "toolbar" | "hoveringToolbar";
export declare type IElementTypeOptions = "inline" | "void" | "block" | "text";
export declare interface IDnd {
    disable: boolean;
    hideSelectionBackground: boolean;
    icon?: React.ReactElement;
    className: string;
    droppableContainer: (elementType: string, path: number[]) => string;
    disableColumnLayout: boolean;
}
export declare interface IConfig {
    iconName: React.ReactElement;
    displayOn: IDisplayOnOptions | IDisplayOnOptions[];
    elementType: IElementTypeOptions | IElementTypeOptions[];
    dnd: IDnd;
    Component?: (...params: any) => ReactElement;
}
export declare interface IRegistryDnd {
    DisableDND: boolean;
    DisableSelectionHalo: boolean;
    CustomDndIcon: React.ReactElement;
    ContainerClassName: "scrte-table-row-dnd-container";
    getDroppableContainer: (elementType: string, path: number[]) => string;
    DisableGridDnd: boolean;
}
export declare interface IRegistry {
    title: string;
    iconName?: React.ReactElement;
    category?: string;
    toolbar: {
        inMainToolbar: boolean;
        inHoveringToolbar: boolean;
    };
    dndOptions: Partial<IRegistryDnd>;
    isContentstackElement: boolean;
    beforeChildrenRender?: (...params: any) => any;
    beforeElementRender?: (...params: any) => any;
    handleMouseDown?: (...params: any) => any;
    Component?: (element: React.ReactElement, attrs: {
        [key: string]: any;
    }, path: number[], rte: IRteParam) => React.ReactElement;
}
export declare interface IMeta {
    id: string;
    elementType: null | IElementTypeOptions | IElementTypeOptions[];
    editorCallbacks: {
        [key: string]: any;
    };
    isDependent: boolean;
}
export declare interface IPluginMetaData {
    registry: IRegistry;
    meta: IMeta;
}
export declare interface IContainerRegistry {
    id: string;
    title: string;
    rootCategory: false;
    toolbar: {
        inMainToolbar: boolean;
        inHoveringToolbar: boolean;
    };
}
export declare interface IContainerMeta {
    id: string;
    dependentPlugins: RTEPlugin[];
}
export declare interface IContainerMetaData {
    registry: IContainerRegistry;
    meta: IContainerMeta;
}
//# sourceMappingURL=types.d.ts.map