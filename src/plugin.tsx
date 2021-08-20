/** @jsx jsx */
import { jsx } from "@emotion/core";
import ContentstackSDK from "../lib/app-sdk";

export default ContentstackSDK.init().then(async (sdk) => {
    const extensionObj = await sdk["Extension"];
    const RTE = await extensionObj["RTEPlugin"];

    return {};
});
