/** @jsx jsx */
import { IRteParam } from "@contentstack/app-sdk/dist/src/RTE/types";
import { ButtonGroup, cbModal, ModalBody, ModalFooter, ModalHeader, Button as VenusBtn, Field, TextInput } from "@contentstack/venus-components";
import { ReturnCbModalProps } from "@contentstack/venus-components/build/components/Modal/Modal";
import { jsx } from "@emotion/core";
import { Fragment, useState } from "react";
import { EmbedButtonModalProps } from "./types";

function Button({children, attributes, attrs, element}: any) {
    return <VenusBtn size='small' title={attrs.url} {...attributes}>{children}</VenusBtn>;
}

const useEmbedButton = (rte:IRteParam, savedSelection: any) => {
    const isBtn = rte.isNodeOfType('btn');
    const getBtnText = () => {
        return rte.string(savedSelection.anchor.path)
    }
    const getText = () => isBtn ? getBtnText() : rte.getText();
    const getEmbedUrl = () => {
        if(!isBtn) return '';
        const path = savedSelection.anchor.path;
        const parentPath = path.slice(0, path.length - 1);
        const [btn] = rte.getNode(parentPath) as any;
        return btn?.attrs?.url;
    }
    const [state, setState] = useState({
        displayText: getText(),
        embedUrl: getEmbedUrl()
    });

    const setUrl = (url: string) => setState(state => ({...state, embedUrl: url }));
    const setText = (text: string) => setState(state => ({ ...state, displayText: text }));
    return {
        ...state,
        setUrl,
        setText,
        isBtn
    }
}

function EmbedButtonModal({rte, savedSelection, ...props}: EmbedButtonModalProps) {
    const { displayText, embedUrl, setUrl, setText, isBtn } = useEmbedButton(rte, savedSelection);
    const handleSubmit = () => {
        if(isBtn) {
            const path = savedSelection.anchor.path;
            const btnPath = path.slice(0, path.length - 1);
            rte.selection.set(btnPath);
            rte.setAttrs({
                attrs: {
                    url: embedUrl
                }
            }, {
                match: (node: any) => node.type === 'btn'
            });
            const currSelection = rte.selection.get()!;
            //@ts-ignore
            rte.insertText(displayText, currSelection);
        } else {
            rte.wrapNode({
                type: 'btn',
                attrs: { url: embedUrl }
            } as any, { split: true });
        }
        props.closeModal();
    }
    
    return (
        <Fragment>
            <ModalHeader
                title={"Embed Button"}
                closeModal={props.closeModal}
            />
            <ModalBody>
                <form onSubmit={handleSubmit}>
                    <Field labelText="Embed URL">
                        <TextInput
                            autoFocus
                            name="embeded_url"
                            placeholder="Enter Embeded url"
                            type="url"
                            value={embedUrl}
                            onChange={(e: any) => setUrl(e.target.value)}
                        />
                    </Field>
                    <Field labelText="Display Text">
                        <TextInput
                            name="display_text"
                            placeholder="Enter Display Text"
                            type="text"
                            value={displayText}
                            onChange={(e: any) => setText(e.target.value)}
                        />
                    </Field>
                </form>
            </ModalBody>
            <ModalFooter>
                <ButtonGroup>
                    <VenusBtn
                        key="cancel"
                        buttonType="light"
                        onClick={props.closeModal}
                    >
                        Cancel
                    </VenusBtn>
                    <VenusBtn
                        key="add"
                        icon="CheckedWhite"
                        onClick={handleSubmit}
                    >
                        Add
                    </VenusBtn>
                </ButtonGroup>
            </ModalFooter>
        </Fragment>
    );
}

const handleButtonModal = (rte: IRteParam) => {
    const selection = rte.selection.get(); // saving selection before opening modal
    cbModal({
        component: (props: ReturnCbModalProps) => (
            <EmbedButtonModal rte={rte} savedSelection={selection} {...props} />
        ),
        modalProps: {
            shouldReturnFocusAfterClose: false,
        },
    });
};

export { Button, handleButtonModal };
