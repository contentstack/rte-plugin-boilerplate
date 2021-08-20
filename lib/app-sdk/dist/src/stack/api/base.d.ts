import Query from './query';
/**
 * This is Base class, it holds all the methods required for Modle instance,
 *  eg ContentType('uid').delete() or Asset('uid').update({...})
 *  @ignore
 */
export default class Base {
    uid: string;
    _query: {
        [key: string]: any;
    };
    only: any;
    except: any;
    addParam: any;
    static connection: any;
    static contentTypeUid: string;
    constructor(uid: string);
    static Query(): Query;
    static create(payload: {
        [key: string]: any;
    }): any;
    update(payload: {
        [key: string]: any;
    }): any;
    delete(): any;
    fetch(action: string, payload?: {
        [key: string]: any;
    }): any;
}
//# sourceMappingURL=base.d.ts.map