import { IRteParam } from "@contentstack/app-sdk/dist/src/RTE/types";
import { ModalProps, ReturnCbModalProps } from "@contentstack/venus-components/build/components/Modal/Modal";

export type BtnProps = {

} 

export interface EmbedButtonModalProps extends ModalProps, ReturnCbModalProps {
    rte: IRteParam,
    savedSelection: any
}