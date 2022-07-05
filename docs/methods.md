## Plugin
```ts
Plugin(plugin_id, configCallback: (rte: IRteParam) => IConfig) => IRtePlugin
```
<span class='sm-text'>
References: [IRteParam](#rte), [IConfig](#iconfig), [configCallback](#config-object), [IRtePlugin](#IRtePlugin)
</span>

This method allows you to create a JSON RTE plugin instance for the JSON Rich Text Editor field.

**Parameters**:

|**Name**|**Description**| **Type**|
|--------|---------------|---------|
|`plugin_id`|Unique ID of the plugin|string|
| [`configCallback`](#config-object)|This function receives an [RTE instance](#rte) as argument and it expects you to return a [config object](#config-object) that includes details like title, icon, render, etc.|(rte: IRteParam) => IConfig |

!!! example
```ts
const locations = await sdk["location"];
const RTEPlugin = locations["RTEPlugin"]!;

const Plugin = RTEPlugin('plugin_uid', () => {
    return {
        title: 'Font Color',
        icon: <Icon />,
        display: ['toolbar'],
        elementType: ['text']
    }
});
```
<span id='config-object'></span>
#### `configCallback`
```ts
configCallback: (rte: IRteParam) => IConfig
```
<span class='sm-text'>
References: [IRteParam](#rte), [IConfig](#iconfig)
</span>

<span id='iconfig'></span>
**IConfig** : This user defined object will have all the essential metadata for the plugin.

The following table contains properties of IConfig: 

| **Key** | **Description**                                                  | **Type**  |
| ------------- | --------- | ---------------------------------------------------------------- |
| `title`       | Identifier for the toolbar button                                |string    |
| `icon`        | ReactNode | Icon used for buttons                              |
| `display`     |  Location of the plugin                  |(‘toolbar’ \| ‘hoveringToolbar’)[]  |
| `elementType` |  Render type                              |(‘inline’ \| ‘void’ \| ‘block’)[]  |
| `render`      |  Component to be rendered within the editor when corresponding plugin_uid appears in JSON.   |ReactNode |

## RTE Instance
<span id="rte">**rte**</span> : An instance which has all the essential functions required to interact with the JSON Rich Text Editor.

Following are a list of helpful properties and methods of the JSON RTE instance.

### Properties

**rte.ref:** Returns the HTML reference of the JSON RTE.

**rte.fieldConfig**: Contains metadata about the JSON RTE field which can be specified in the content type builder page.

| **Key**          | **Description**                 | **Type**                   |
| ---------------- | ------------------------------- | -------------------------- |
| `rich_text_type` | Type of JSON RTE                | 'basic' \| 'advance' \| 'custom' |
| `reference_to`   | List of content type UID's used in JSON RTE references. | string[]                   |
| `options`        | Array of selected toolbar buttons  ( available if rich_text_type is ‘custom’ )                   | string[]                     |
| `title`          | Title of the field              | string                     |
| `uid`            | Unique ID for the field         | string                     |

**`rte.getConfig: () => Object`**

Provides configuration defined while creating or selecting a plugin in the content type builder page.

For example, suppose your plugin requires API Key or any other config parameters. In that case, you can specify these configurations while creating a new plugin or specify field-specific configurations from the content type builder page while selecting the plugin. You can access these configurations through the ```getConfig() ```method.


### Methods
These methods are part of the RTE instance and can be accessed as rte.methodName().

| **Method**       | **Description**                          | **Type**                                            |
| ------------------ | ---------------------------------------- | --------------------------------------------------- |
| `getPath`          | Retrieves the path of the node           | (node:Node) => Path                                 |
| `setAttrs`         | Sets attributes for the node.  <br/> For example, these attributes can be <br/> href for anchor plugin <br/>width, src for image plugin.             | (attrs:Object, options:Option) => void </br>  Option: [NodeOptions](#node-options)      |
| `isNodeOfType`     | Retrieves a boolean value, whether the node at the current selection is of input type       | (type:string) => boolean                               |
| `getNode`          | Retrieves node at given location       | (location:Location) => Node                         |
| `getNodes`         | Retrieves a [generator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Generator) of nodes which includes the location specified in options `at` default at current selection   | (options:Option) => Node[] </br>  Option: [NodeOptions](#node-options)                         |
| `string`           | String value of JSON in a given path       | (location:Location) => string                       |
| `addMark`          | Adds mark to the text                    | (key:string, val:any) => void                       |
| `removeMark`       | Removes mark from the text               | (key:string) => void                                |
| `hasMark`          | Checks if the selected text has a mark   | (key:string) => boolean                             |
| `insertText`       | Inserts text at a given location         | (text:string, location: Location) => void           |
| `getText`          | Gets text from a given location          | () => string                                        |
| `deleteText`       | Deletes text from a selected range         | () => void                                          |
| `updateNode`       | Updates nodes based on provided options             | (type:string,attrs:Object, options: Option) => void </br>  Option: [NodeOptions](#node-options) |
| `unsetNode`        | Converts a node to a standard paragraph based on provided options    | (options: Option) => void </br>  Option: [NodeOptions](#node-options)                        |
| `insertNode`       | Inserts a node at a given location. Having ```select``` option true will select the node after insertion       | (node:Node, options?: Option) => void </br>  Option: [NodeOptions](#node-options)``` & { select?: boolean }```             |
| `deleteNode`       | Deletes a node at a given location       | (options: Option) => void </br>  Option: ```{at?: Location, distance?: number, unit?: 'character' | 'word' | 'line' | 'block'} ```                  |
| `wrapNode`         | Wraps node based on provided options with given node     | (node:Node, options: Option) => void </br>  Option: [NodeOptions](#node-options)              |
| `unWrapNode`       | Unwraps node based on provided options  from the parent node      | (options: Option) => void </br>  Option: [NodeOptions](#node-options)                       |
| `mergeNodes`       | Merges nodes based on provided options        | (options: Option) => void </br>  Option: [NodeOptions](#node-options)                        |
| `getEmbeddedItems` | Gets details of embedded items JSON RTE. | () => Object                                        |
| `getVariable`      | Gets local variable                      | (name: string) => any                               |
| `setVariable`      | Sets a local variable                    | (name: string, val:any) => void                     |

**rte.selection:** It contains a set of functions to perform selection-related tasks.

| **Function**   | **Description**                                           | **Type**                                          |
| -------------- | --------------------------------------------------------- | ------------------------------------------------- |
| `get`          | Retrieves current selection                               | () => Range                                   |
| `set`          | Sets the selection to a given location                    | (location: Location) => void                      |
| `isSelected`   | A React hook which returns ```true``` when the current node is selected.            | () => boolean                                     |
| `isFocused`    | A React hook which returns ```true``` when the current node is focused             | () => boolean                                     |
| `getEnd`       | Retrieves the end location of the editor                  | () => Path                                        |
| `before`       | Retrieves the prior location before current selection     | (location: Location, options: Option) => Location </br>  Option: ```{distance?: number, unit?: 'offset' | 'character' | 'word' | 'line' | 'block'}``` |
| `after`        | Retrieves the subsequent location after current selection | (location: Location, options: Option) => Location </br>  Option: ```{distance?: number, unit?: 'offset' | 'character' | 'word' | 'line' | 'block'}```|
| `isPointEqual` | Checks if two points are equal                            | (point1: Point, point2: Point) => boolean         |

<span id='node-options' />

### Node Options

Transform or change functions have an `options` parameter which includes transform options and general `NodeOptions` to specify which Nodes you should apply to the transform function in the document.


```ts
interface NodeOptions {
  at?: Location
  match?: (node: Node, path: Location) => boolean
}
```




* The `at `option selects a `Location `in the editor. It defaults to the user's current selection
* The `match `option filters the set of Nodes with a custom function.
## State of Editor

| **Method**   | **Description**                | **Arguments** |
| ------------ | ------------------------------ | ------------- |
| `isFocused`  | Check if the editor is focused | () => boolean |
| `focus`      | Focuses the editor             | () => boolean |
| `blur`       | Blurs the editor               | () => boolean |
