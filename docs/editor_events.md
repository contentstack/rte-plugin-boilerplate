### Registering Editor Events
You can register editor events by using the `on` method available on the plugin instance.

```ts
Plugin.on(eventName, eventCallback) => void
```


!!! example
```ts hl_lines="5 6 7"
const KeydownPlugin = RTE('plugin-id', () => {
    return {};
});

KeydownPlugin.on('keydown', (event) => {
    console.log(event);
});
```

### Events
!!! note
    All Types used defined at bottom of the page.
#### Keydown (`keydown`)
```ts
keydown: (event: RTEEvent, rte: RTE) => void
```

When keydown is performed on the editor, the `keydown` callback is triggered.

#### Click/Trigger (`exec`)
```ts
exec: (event: RTEEvent, rte: RTE) => void
```

When a button is clicked or triggered, the `exec` callback is triggered.

#### Delete Backward (`deleteBackward`)
```ts
deleteBackward: (
    event: RTEEvent, 
    rte: RTE, 
    options: {  
        unit:"character" | "word" | "line" | "block" 
    }
) => void
```

When backward deletion is performed on the editor, the `deleteBackward` callback is triggered.


#### Delete Forward (`deleteForward`)
```ts
deleteForward: (
    event: RTEEvent, 
    rte: RTE, 
    options: {  
        unit:"character" | "word" | "line" | "block" 
    }
) => void
```

When forward deletion is performed on the editor, the `deleteForward` callback is triggered.

#### Normalize (`normalize`)
```ts
normalize: (
    event: RTEEvent, 
    rte: RTE, 
    options: {  
        node: Node, path: Path
    }
) => void
```

Normalize callback is used to normalize any dirty ( unwanted structure ) objects in the editor.

#### Text Insert (`insertText`)
```ts
insertText: (
    event: RTEEvent, 
    rte: RTE, 
    options: { character: string}
) => void
```

When there is any insert text is performed on the editor, the `insertText` callback is triggered.

#### Change (`change`)
```ts
change: (event: RTEEvent, rte: RTE) => void 
```

When there is a change in the editor, the `change` callback is triggered.

#### Newline Insert (`insertBreak`)
```ts
insertBreak: (event: RTEEvent, rte: RTE) => void
```

When the enter key is pressed on the editor, the `insertBreak` callback is triggered.

----
#### Types

[RTE](/methods/#rte-instance-rte)

```ts
interface RTEEvent extends Event {
  rte: RTE
}
```