/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Icon } from '@contentstack/venus-components';
import ContentstackSDK from "@contentstack/app-sdk";
import { Button, handleButtonModal } from "./Button";

export default ContentstackSDK.init().then(async (sdk) => {
    const extensionObj = await sdk["location"];
    const RTE = (await extensionObj["RTEPlugin"])!;

    //1. Creating Button Plugin
    const ButtonPlugin = RTE('btn', () => {
        return {
            // Basic Info
            title: 'Add Button',
            icon: <Icon icon='KeyboardShortcut'/>,
            display: 'toolbar', // show on toolbar
            elementType: 'inline', // make inline element
            render: Button // Button component to render
        }
    });

    //2. Listen to toolbar button click
    ButtonPlugin.on('exec', (rte) => {
        handleButtonModal(rte);
    })

    ButtonPlugin['pluginMetaData']['registry']['dndOptions'] = { // disabling dnd for inline element
        DisableDND: true,
        DisableSelectionHalo: true
    };

    return {
        ButtonPlugin
    };
});
