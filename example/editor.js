import { basicSetup, } from 'codemirror'
import { EditorView, keymap, } from '@codemirror/view'
import { javascript, } from '@codemirror/lang-javascript'
import { indentWithTab, } from '@codemirror/commands'
import { example } from '../dist'

const doc = `if (true) {
    console.log("okay");
} else {
    console.log("oh no");
}`

new EditorView({
  doc,
  extensions: [
    basicSetup, 
    keymap.of([indentWithTab,]), 
    javascript(), 
    example(),
  ],
  parent: document.querySelector('#editor'),
})
