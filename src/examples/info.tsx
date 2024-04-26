/** @jsx jsx */
//@ts-nocheck
import { jsx } from "@emotion/core";
import { Icon } from '@contentstack/venus-components'
import { IRTEPluginInitializer } from "@contentstack/app-sdk/dist/src/RTE/types";
import isHotkey from 'is-hotkey';
import './style.css';


const InfoType = 'info' as const;
const paragraphNode = { type: 'p', children: [{ text: '' }] }
let paragraphPath = [];


export const createInfoPlugin = (RTE: IRTEPluginInitializer) => {
  const info = RTE('info', () => ({
    title: 'Info',
    icon: <Icon className='p-x-6' icon="InfoCircle" size="original" />,
    render: (props:any) => {
        return (
            <p {...props.attrs} className='info'>
                <div contentEditable="false" className='p-t-1'>
                    <Icon className='p-x-6' icon="InfoCircleWhite" size="original" />
                </div>
                <div className='info__content'>
                    {props.children}
                </div>
            </p>
        )
    },
    display: ['toolbar'],
    elementType: ['block']
  }));;

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

  info.on('keydown', ({event, rte}) => {
    if(isHotkey('shift+enter', event)) {
      event.preventDefault();
      const isInfoPanel = rte.isNodeOfType(InfoType);
      if (isInfoPanel) {
        //match will be an array with node at [0] and path at [1]
        let [match] = rte.getNodes({
          match: (n:any) => n.type === InfoType
        });
        if(!match) return
        //path of info panel
        let infoPath = match[1]
        let infoPathLength = infoPath.length
        //path for next sibling
        let siblingPath = [...infoPath.slice(0, infoPathLength - 1), infoPath[infoPathLength - 1] + 1];
        //insert a new paragraph at siblingPath
        rte.insertNode(paragraphNode, { at: siblingPath, select: true })
        paragraphPath = siblingPath
      }
  }
  })

  info.on('change', ({rte, preventDefault}): any => {
    if(paragraphPath.length){
      let node = rte.getNode(paragraphPath)
      if (node && node[0]?.['children'][0]?.text && node[0]?.['children'][0].text === '\n') {
        rte._adv.editor.deleteBackward();
      }
    }
    paragraphPath = [];
  })

  return info
}