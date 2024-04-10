/** @jsx jsx */
import { jsx } from "@emotion/core";
import ContentstackSDK from "@contentstack/app-sdk";
import { createInfoPlugin } from "./examples/info";

export default ContentstackSDK.init().then(async (sdk) => {
    const extensionObj = await sdk["location"];
    const RTE = await extensionObj["RTEPlugin"]!;

    const InfoPanel = createInfoPlugin(RTE);

    return {
        InfoPanel
    };
});
