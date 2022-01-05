# Contentstack JSON RTE Plugins SDK API Reference

This document describes the API requests that a JSON RTE plugin can use to communicate with Contentstack.

## Inclusion in your project

For JSON RTE Plugins, you will need to install `@contentstack/app-sdk` in your react project. You will also need to clone the [boilerplate](https://github.com/Deepak-Kharah/contentstack-rte-plugin-boilerplate) GitHub repository that contains the template needed to create a JSON RTE plugin.

For other extensions you will need to include the contentstack-extension-sdk library in your HTML5 app:

```html
<script src="https://unpkg.com/@contentstack/app-sdk@1.0.0/dist/index.js"></script>
```

## Classes

### `RTEPlugin(plugin_id, callback)`

This method allows you to create a JSON RTE plugin instance for the JSON Rich Text Editor field.

**Kind:** instance property of JSON RTE plugin

**Returns** : Object - Plugin Object

| **Parameter**    | **Type**                    | **Description**                                                                                                                                                                           |
| ---------------- | --------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `plugin_id`      | string                      | Unique ID of the plugin                                                                                                                                                                   |
| `configCallback` | (rte: IRteParam) => IConfig | This function receives an [RTE instance](#rte) as argument which has all the essential functions to change the JSON RTE state and return details like title, icon, render, etc as output. |

### `RTEPlugin callback: (rte) => IConfig`

**IConfig** : This user defined callback will have all the essential details required to display the JSON RTE component in the JSON Rich Text Editor.

The following table displays the details of various keys:

| **Key**       | **Type**  | **Description**                                                  | **Possible Values**        |
| ------------- | --------- | ---------------------------------------------------------------- | -------------------------- |
| `title`       | string    | Identifier for the toolbar button                                | -                          |
| `icon`        | ReactNode | Icon which will be used for buttons                              | -                          |
| `display`     | string[]  | Location of the plugin                                           | toolbar \| hoveringToolbar |
| `elementType` | string[]  | Render type                                                      | inline \| void \| block    |
| `dnd`         | Object    | Dnd options for components                                       | -                          |
| `render`      | ReactNode | Component to be rendered when corresponding `plugin_uid` appears | -                          |

<span id="rte">**rte**</span> : An argument for your callback which has all essential functions to change the JSON RTE state.

Following are a list of helpful functions and properties for a JSON RTE instance.

### Properties:

**rte.ref :** Returns the HTML reference of the JSON RTE Component.

**rte.fieldConfig** : Gives an object details as follows:

| **Key**          | **Description**                 | **Type**                   |
| ---------------- | ------------------------------- | -------------------------- |
| `rich_text_type` | Type of JSON RTE                | basic \| advance \| custom |
| `reference_to`   | List of content type references | string[]                   |
| `options`        | Field options                   | Object                     |
| `title`          | Title of the field              | string                     |
| `uid`            | Unique ID for the field         | string                     |

### `rte.getConfig: () => Object`

Provides the configuration while creating the JSON RTE plugin. It also provides field level configuration for the plugin.

### Functions:

| **Function**       | **Description**                          | **Type**                                            |
| ------------------ | ---------------------------------------- | --------------------------------------------------- |
| `getPath`          | Retrieves the path of the node           | (node:Node) => Path                                 |
| `setAttrs`         | Sets attributes for the node             | (attrs:Object, options:Option) => void              |
| `isNodeOfType`     | Sets the type of the selected node       | (type:string) => void                               |
| `getNode`          | Retrieves nodes at given selection       | (location:Location) => Node                         |
| `getNodes`         | Generators of nodes at given selection   | (options:Option) => Node[]                          |
| `string`           | String value of JSON in given path       | (location:Location) => string                       |
| `addMark`          | Adds mark to the text                    | (key:string, val:any) => void                       |
| `removeMark`       | Removes mark from the text               | (key:string) => void                                |
| `hasMark`          | Checks if the selected text has a mark   | (key:string) => boolean                             |
| `insertText`       | Inserts text at a given location         | (text:string, location: Location) => void           |
| `getText`          | Gets text from a given location          | () => string                                        |
| `deleteText`       | Deletes text from selected range         | () => void                                          |
| `updateNode`       | Updates nodes at given range             | (type:string,attrs:Object, options: Option) => void |
| `unsetNode`        | Converts a node to a normal paragraph    | (options: Option) => void                           |
| `insertNode`       | Inserts a node at a given location       | (node:Node, options?: Option) => void               |
| `deleteNode`       | Deletes a node at a given location       | (options: Option) => void                           |
| `wrapNode`         | Wraps a node with another given node     | (node:Node, options: Option) => void                |
| `unWrapNode`       | Unwraps a node from the parent node      | (options: Option) => void                           |
| `mergeNodes`       | Merges a node to a given location        | (options: Option) => void                           |
| `getEmbeddedItems` | Gets details of embedded items JSON RTE. | () => Object                                        |
| `getVariable`      | Gets local variable                      | (name: string) => any                               |
| `setVariable`      | Sets a local variable                    | (name: string, val:any) => void                     |

**rte.selection:** Contains a set of functions to perform selection related tasks.

| **Function**   | **Description**                                           | **Type**                                          |
| -------------- | --------------------------------------------------------- | ------------------------------------------------- |
| `get`          | Retrieves current selection                               | () => Selection                                   |
| `set`          | Sets the selection to a given location                    | (location: Location) => void                      |
| `isSelected`   | Returns true when the current node is selected            | () => boolean                                     |
| `isFocused`    | Returns true when the current node is focused             | () => boolean                                     |
| `getEnd`       | Retrieves the end location of the editor                  | () => Path                                        |
| `before`       | Retrieves the prior location before current selection     | (location: Location, options: Option) => Location |
| `after`        | Retrieves the subsequent location after current selection | (location: Location, options: Option) => Location |
| `isPointEqual` | Checks if two points are equal                            | (point1: Point, point2: Point) => boolean         |

### Events function

| **Function** | **Description**                | **Arguments** |
| ------------ | ------------------------------ | ------------- |
| `isFocused`  | Check if the editor is focused | () => boolean |
| `focus`      | Focuses the editor             | () => boolean |
| `blur`       | Blurs the editor               | () => boolean |

## Plugin:

## Editor Events

### `Plugin.on: (event_type, callback) => void`

| **event_type**   | **Description**                            | **Callback Arguments**                                                                                    |
| ---------------- | ------------------------------------------ | --------------------------------------------------------------------------------------------------------- |
| `keydown`        | When keydown is performed                  | ({event: KeyboardEvent, rte: RTE}) => void                                                                |
| `exec`           | When a button is clicked or triggered      | (rte: RTE) => void                                                                                        |
| `deleteBackward` | When backward deletion occurs              | ({rte: RTE, preventDefault: Function, ...args:[unit:"character" \| "word" \| "line" \| "block"]}) => void |
| `deleteForward`  | When forward deletion occurs               | ({rte: RTE, preventDefault: Function, ...args:[unit:"character" \| "word" \| "line" \| "block"]}) => void |
| `normalize`      | Normalizes any dirty objects in the editor | ({rte: RTE, preventDefault: Function, ...args:[[node:Node, path:Path]]}) => void                          |
| `insertText`     | Inserts text in the current selection      | ({rte: RTE, preventDefault: Function, ...args:[string]}) => void                                          |
| `change`         | When there is a change in the editor       | ({rte: RTE, , preventDefault: Function}) => void                                                          |
| `insertBreak`    | When the enter key is pressed              | ({rte: RTE, preventDefault: Function}) => void                                                            |

## Dropdown plugin

### Plugin.addPlugins: (...Plugin) => void
