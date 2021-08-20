/**
 * Class used by an extension to store your data in {@link external:localStorage}.
 */
declare class Store {
    /**
     * @hideconstructor
     */
    _connection: any;
    constructor(connection: any);
    /**
       * Gets the value of key
       * @param  {string} key Key of the stored data
       * @example extension.store.get('key').then((value) => console.log(value)) // will log value for the given key
       * @return {external:Promise}
       */
    get(key: string): any;
    /**
       * Gets an object with all the stored key-value pairs.
       * @example extension.store.getAll().then((obj) => obj)
       * @return {external:Promise}
       */
    getAll(): any;
    /**
       * Sets the value of a key
       * @param  {string} key Key of the stored data.
       * @param {*} value Data to be stored.
       * @example extension.store.set('key', 'value').then((success) => console.log(success)) // will log ‘true’ when value is set
       * @return {external:Promise}
       */
    set(key: string, value: {
        [key: string]: any;
    }): any;
    /**
       * Removes the value of a key
       * @param  {string} key  Key of the data to be removed from the store
       * @example extension.store.remove('key').then((success) => console.log(success)) // will log ‘true’ when value is removed
       * @return {external:Promise}
       */
    remove(key: string): any;
    /**
       * Clears all the stored data of an extension
       * @example extension.store.clear().then((success) => console.log(success)) // will log ‘true’ when values are cleared
       * @return {external:Promise}
       */
    clear(): any;
}
export default Store;
//# sourceMappingURL=store.d.ts.map