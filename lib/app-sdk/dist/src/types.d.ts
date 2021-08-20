export declare interface IDashboardWidget {
    [key: string]: any;
}
export declare interface ICustomField {
    [key: string]: any;
}
export declare interface ISidebarWidget {
    [key: string]: any;
}
export declare interface IRTE {
    [key: string]: any;
}
export declare interface IStackConfgWidget {
    [key: string]: any;
}
export declare interface IAppConfigWidget {
    [key: string]: any;
}
export declare interface IPageWidget {
    [key: string]: any;
}
export declare interface IUser {
}
export declare interface ICurrentStack {
    [key: string]: any;
}
export declare interface ICurrentEntry {
    [key: string]: any;
}
export declare interface ICurrentContentType {
    [key: string]: any;
}
export declare interface IConfig {
    [key: string]: any;
}
export declare interface ISchema {
    [key: string]: any;
}
export declare interface IFieldConfig {
    [key: string]: any;
}
export declare interface IDashboardInitData {
    data: {
        app_id: string;
        dashboard_width: "full_width" | "half_width";
        stack: ICurrentStack;
        type: 'DASHBOARD_WIDGET';
        user: IUser;
    };
}
export declare interface ISidebarInitData {
    data: {
        app_id: string;
        config: IConfig;
        content_type: ICurrentContentType;
        entry: ICurrentEntry;
        locale: string;
        stack: ICurrentStack;
        type: 'SIDEBAR_WIDGET';
        user: IUser;
    };
}
export declare interface IFieldInitData {
    data: {
        app_id: string;
        entry: ICurrentEntry;
        content_type: ICurrentContentType;
        locale: string;
        user: IUser;
        uid: string;
        schema: ISchema;
        config: IConfig;
        value: any;
        field_config: IFieldConfig;
        stack: ICurrentStack;
        type: 'CUSTOM_FIELD_WIDGET';
    };
}
export declare interface IRTEInitData {
    data: {
        app_id: string;
        stack: ICurrentStack;
        type: 'RTE_EXTENSION_WIDGET';
        user: IUser;
    };
}
export declare interface IStackConfigInitData {
    data: {
        app_id: string;
        stack: ICurrentStack;
        type: 'STACK_CONFIG_WIDGET';
        user: IUser;
    };
}
export declare interface IAppConfigInitData {
    data: {
        app_id: string;
        stack: ICurrentStack;
        type: 'APP_CONFIG_WIDGET';
        user: IUser;
    };
}
export declare interface IFullScreenInitData {
    data: {
        app_id: string;
        stack: ICurrentStack;
        type: 'FULL_SCREEN_WIDGET';
        user: IUser;
    };
}
export declare interface IInitializationData {
    'CUSTOM_FIELD_WIDGET': IFieldConfig;
    'SIDEBAR_WIDGET': ISidebarInitData;
    'DASHBOARD_WIDGET': IDashboardInitData;
    'RTE_EXTENSION_WIDGET': IRTEInitData;
    "STACK_CONFIG_WIDGET": IStackConfigInitData;
    "APP_CONFIG_WIDGET": IAppConfigInitData;
    "FULL_SCREEN_WIDGET": IFullScreenInitData;
}
export declare type ILocation = "RTE_EXTENSION_WIDGET" | "CUSTOM_FIELD_WIDGET" | "DASHBOARD_WIDGET" | "SIDEBAR_WIDGET" | "STACK_CONFIG_WIDGET" | "APP_CONFIG_WIDGET" | "FULL_SCREEN_WIDGET";
//# sourceMappingURL=types.d.ts.map