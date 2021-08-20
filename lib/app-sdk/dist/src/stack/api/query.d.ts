/**
 * Creates an instance of the query
 * @version 2.2.0
 * @hideconstructor
 */
declare class Query {
    constructor(connection: any, module: any, contentTypeUid: any);
    /**
     * @function
     * @name Query#includeReference
     * @description This method is used to include referenced entries from other content types. Note: This method is only valid for querying {@link Stack#ContentType#Entry}.
     * @example
     * <caption> .includeReference with reference_field_uids as array </caption>
     * stack.ContentType('contenttype_uid').Entry.Query().includeReference(['category', 'author']).find()
     * @example
     * <caption> .includeReference with reference_field_uids </caption>
     * stack.ContentType('contenttype_uid').Entry.Query().includeReference('category', 'author').find()
     * @returns {Query}
     */
    /**
     * @function
     * @name Query#includeSchema
     * @description This method is used to include the schema of the current contenttype in result set along with the entry/entries. Note: This method is only valid for querying {@link Stack#ContentType#Entry}.
     * @example extension.stack.ContentType('contenttype_uid').Entry.Query().includeSchema().find()
     * @returns {Query}
     */
    /**
     * @function
     * @name Query#language
     * @description This method is used to set the language code of which you want to retrieve the data. Note: This method is only valid for querying {@link Stack#ContentType#Entry}.
     * @param {String} languageCode - Language code, for e.g. 'en-us', 'ja-jp', and so on
     * @example extension.stack.ContentType('contenttype_uid').Entry.Query().language('en-us').find()
     * @returns {Query}
     */
    /**
     * @function
     * @name Query#includeContentType
     * @description This method is used to include the current content type in the result set along with the entry(ies). Note: This method is only valid for querying {@link Stack#ContentType#Entry}.
     * @example extension.stack.ContentType('contenttype_uid').Entry.Query().includeContentType().find()
     * @returns {Query}
     */
    /**
     * @function
     * @name Query#includeOwner
     * @description This method is used to include the owner of the entry(ies) in the result set. Note: This method is only valid for querying {@link Stack#ContentType#Entry}.
     * @example extension.stack.ContentType('contenttype_uid').Entry.Query().includeOwner().find()
     * @returns {Query}
     */
    /**
     * @function
     * @name Query#environment
     * @description This method is used to set the environment name of which you want to retrieve the data.
     * @param {String} environment_uid - UID/Name of environment
     * @example extension.stack.ContentType('contenttype_uid').Entry.Query().environment('development').find()
     * @returns {Query}
     */
    /**
       * @description This method provides only the entries containing field values matching the specified condition.
       * @param {String} key - UID of the field
       * @param {*} value - The value used to match or compare
       * @example extension.stack.ContentType('blog').where('title','Demo')
       * @returns {Query}
       */
    equalTo(key: any, value: any): this;
    where(key: any, value: any): this;
    /**
       * @description This method provides only the number of entries matching the specified filters.
       * @example extension.stack.ContentType('blog').count()
       * @returns {Query}
       */
    count(): any;
    /**
       * @description This method is used to set raw queries on the Query instance.
       * @param {object} query -  Raw{json} queries to filter the entries in the result set.
       * @returns {Query}
       */
    query(query: any): this;
    /**
       * @description The ’tags’ parameter allows you to specify an array of tags to search for objects.
       * @param {Array} values - Tags
       * @example extension.stack.ContentType('blog').tags(['technology', 'business'])
       * @returns {Query}
       */
    tags(values: any): this;
    /**
       * @description This method also includes the total number of entries returned in the response.
       * @example extension.stack.ContentType('blog').includeCount()
       * @returns {Query}
       */
    includeCount(): this;
    /**
       * @summary returns Returns the raw query which can be used for further calls (.and/.or).
       * @description This method provides raw{json} queries based on the filters applied on the Query object.
       * @example extension.stack.ContentType('blog').where('title','Demo').getQuery()
       * @returns {Query}
       */
    getQuery(): any;
    /**
       * @description This method provides only the entries matching the regular expression for the specified field.
       * @param {String} key - UID of the field
       * @param {*} value - The value used to match or compare
       * @param {String} [options] - Match or compare a value in the entry
       * @example
       * <caption> .regex without options</caption>
       * let blogQuery = extension.stack.ContentType('blog').regex('title','^Demo')
       * @example
       * <caption> .regex with options</caption>
       * let blogQuery = extension.stack.ContentType('blog').regex('title','^Demo', 'i')
       * @returns {Query}
       */
    regex(key: any, value: any, options: any): this;
    /**
       * @description This method is used to search data in entries.
       * @param {string} value - Value to search in the entries.
       * @example extension.stack.ContentType('blog').search('Welcome to demo')
       * @returns {Query}
       */
    search(value: any): this;
    /**
       * @description This method provides all the entries which satisfy the specified query.
       * @example
       * let blogQuery = extension.stack.ContentType('blog').find()
       */
    find(): any;
    /**
       * @description This method provides a single entry from the result set.
       * @example
       * let blogQuery = extension.stack.ContentType('blog').findOne()
       */
    findOne(): any;
}
export default Query;
//# sourceMappingURL=query.d.ts.map