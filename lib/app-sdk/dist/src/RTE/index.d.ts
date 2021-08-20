import { IConfig, IContainerMetaData, IOnFunction, IPluginMetaData } from "./types";
export declare class RTEPlugin {
    private pluginMetaData;
    private isContainer;
    private containerMetaData;
    constructor(pluginMetaData: IPluginMetaData);
    addPlugins: (...plugins: RTEPlugin[]) => void;
    on: <Type extends keyof IOnFunction>(type: Type, callback: IOnFunction[Type]) => void;
    get: () => IPluginMetaData | IContainerMetaData;
}
export declare const rtePluginInitializer: (id: string, title: string, config: Partial<IConfig>) => RTEPlugin;
//# sourceMappingURL=index.d.ts.map