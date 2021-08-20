import EventEmitter from "wolfy87-eventemitter";
/**
 * Class representing an iframe window from Contentstack UI. Not available for Custom Widgets.
 */
declare class Window {
    /**
     * @hideconstructor
     */
    _connection: any;
    _autoResizingEnabled: boolean;
    _resizingEnabled: boolean;
    type: 'DASHBOARD' | 'FIELD';
    _emitter: EventEmitter;
    state: 'half_width' | 'full_width';
    _height?: number;
    constructor(connection: any, type: 'DASHBOARD' | 'FIELD', emitter: EventEmitter, state?: 'half_width' | 'full_width');
    /**
     * This method activates the resize button that gives you the provision to resize the window size of your Dashboard Widget.
     * @return {external:Promise}  A promise object which will resolve when a resize button is visible on the Dashboard Widget.
     */
    enableResizing(): any;
    /**
     * This function executes the callback function whenever a Dashboard Widget extension is maximized or minimized. Only applicable on Dashboard Widget extensions.
     * @param {function} callback Function to be called when a Dashboard Widget extension is maximized or minimized
     * @return {boolean} Will return true
     */
    onDashboardResize(callback: (event: any) => void): boolean;
    /**
     * This method updates the extension height on Contentstack UI.
     * If the ‘height’ argument is not passed, it will calculate the scroll height and set the height of extension window accordingly.
     * @param {string|number} height Desired height of the iframe window
     * @return {external:Promise}  A promise object which will be resolved when Contentstack UI sends an acknowledgement stating that the height has been updated.
     */
    updateHeight(height: number): any;
    /**
     * This method enables auto resizing of the extension height.
     * @return {Window}.
     */
    enableAutoResizing(): this;
    /**
     * This method disables auto resizing of the extension height.
     * @return {Window}.
     */
    disableAutoResizing(): this;
}
export default Window;
//# sourceMappingURL=window.d.ts.map