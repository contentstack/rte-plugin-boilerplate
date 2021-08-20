import EventEmitter from "wolfy87-eventemitter";
import { IFieldInitData } from "./types";
/** Class representing a field from Contentstack UI. Only available for Custom Field extension */
declare class Field {
    /**
     * @hideconstructor
     */
    uid: string;
    data_type: string;
    schema: {
        [key: string]: any;
    };
    _emitter: EventEmitter;
    _data: {
        [key: string]: any;
    };
    _resolvedData: {
        [key: string]: any;
    };
    _self: any;
    _connection: any;
    constructor(fieldDataObject: IFieldInitData, connection: any, emitter: EventEmitter);
    /**
     * Sets the data for the current field.
     * @param {Object|string|number} data Data to be set on the field
     * @return {external:Promise} A promise object which is resolved when data is set for a field. Note: The data set by this function will only be saved when user saves the entry.
     */
    setData(data: {
        [key: string]: any;
    }): any;
    /**
      * Gets the data of the current field
      * @param  {Object} options Options object for get Data method.
      * @param  {boolean} options.resolved If the resolved parameter is set to true for the File field, then the method will return a resolved asset object along with all the field metadata, e.g. 'field.getData({resolved:true})'.
      * @return {Object|string|number} Returns the field data.
      */
    getData({ resolved }?: {
        resolved?: boolean | undefined;
    }): {
        [key: string]: any;
    };
    /**
     * Sets the focus for a field when an extension is being used. This method shows user presence and highlights the extension field that the user is currently accessing in Contentstack UI.
     * @return {Object} A promise object which is resolved when Contentstack UI returns an acknowledgement of the focused state.
     */
    setFocus(): any;
    /**
     * This function is called when another extension programmatically changes data of this field using field.setData() function, only available for extension field, only support extensions of data type text, number, boolean or date.
     * @param {function} callback The function to be called when an entry is published.
     */
    onChange?(callback: (data: any) => any): void;
}
export default Field;
//# sourceMappingURL=field.d.ts.map