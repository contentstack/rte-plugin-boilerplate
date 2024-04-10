/** @jsx jsx */
import { jsx } from "@emotion/core";
import { IRTEPluginInitializer } from "@contentstack/app-sdk/dist/src/RTE/types";

const InfoType = 'info' as const;

export const createInfoPlugin = (RTE: IRTEPluginInitializer) => {
  const info = RTE(InfoType, () => {
    return {
      title: 'Info Panel',
      icon: <span>Info</span>,
      elementType: 'block',
      disableDND: true,
      render: ({ attributes, children }) => (
        <div {...attributes} style={{background: 'rgba(0, 0, 0, .1)'}}>
          {children}
        </div>
      )
    }
  });

  info.on('exec', (rte) => {
    const isInfoPanel = rte.isNodeOfType(InfoType);
    if (isInfoPanel) {
      rte.unWrapNode({
        match: (node: any) => node?.type === InfoType,
      });
    } else {
      const infoNode = {
        type: InfoType,
        children: [],
      };
      rte.wrapNode(infoNode);
    }
  });
  return info
}