import EventEmitter from 'wolfy87-eventemitter';
import Field from './field';
import { ICurrentContentType, IFieldInitData, ISidebarInitData } from './types';
/** Class representing an entry from Contentstack UI. Not available for Dashboard Widget extension.  */
declare class Entry {
    /**
     * @hideconstructor
     */
    content_type: ICurrentContentType;
    _data: {
        [key: string]: any;
    };
    locale: string;
    _connection: any;
    _emitter: EventEmitter;
    _changedData?: {
        [key: string]: any;
    };
    constructor(initializationData: IFieldInitData | ISidebarInitData, connection: any, emitter: EventEmitter);
    /**
     * Gets data of the current entry.
     * @return {Object} Returns entry data.
    */
    getData(): {
        [key: string]: any;
    };
    /**
     * Gets the field object which allows you to interact with the field.
     * This object will have all the same methods and properties of extension.field.
     * Note: For fields initialized using the getFields function, the setData function currently works only for the following fields: as single_line, multi_line, RTE, markdown, select, number, boolean, date, link, and extension of data type text, number, boolean, and date.
     * @example
     * var field = entry.getField('field_uid');
     * var fieldSchema = field.schema;
     * var fieldUid = field.uid;
     * var fieldData = field.getData();
     * @param {string} uid Unique ID of the field
     * @return {Object} Field object
    */
    getField(uid: string): Field;
    /**
     * This function executes the callback function every time an entry is saved.
     * @param {function} callback The function to be called when an entry is saved.
     */
    onSave(callback: (arg0: any) => void): void;
    /**
     * The field.onChange() function is called when another extension programmatically changes the data of the current extension field using the field.setData() function. This function is only available for extension fields that support the following data types: text, number, boolean, or date.
     * @param {function} callback The function to be called when an entry is edited/changed.
     */
    onChange(callback: (arg0: any) => void): void;
    /**
     * The onPublish() function executes the callback function every time an entry has been published with the respective payload.
     * @param {function} callback The function to be called when an entry is published.
     */
    onPublish(callback: (arg0: any) => void): void;
    /**
     * The onUnPublish() function executes the callback function every time an entry has been unpublished with the respective payload.
     * @param {function} callback The function to be called when an entry is un published.
     */
    onUnPublish(callback: (arg0: any) => void): void;
}
export default Entry;
//# sourceMappingURL=entry.d.ts.map