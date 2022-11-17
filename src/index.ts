import { parser } from './syntax.grammar'
import { LRLanguage, LanguageSupport, indentNodeProp, foldNodeProp, foldInside, delimitedIndent } from '@codemirror/language'
import { styleTags, tags as t } from '@lezer/highlight'
import {completeFromList} from "@codemirror/autocomplete"

let parserWithMetadata = parser.configure({
  props: [
    styleTags({
      Identifier: t.variableName,
      Boolean: t.bool,
      String: t.string,
      LineComment: t.lineComment,
      "( )": t.paren
    }),
    indentNodeProp.add({
      Application: delimitedIndent({closing: ")", align: false})
    }),
    foldNodeProp.add({
      Application: foldInside
    })
  ]
})

export const exampleLanguage = LRLanguage.define({
  parser: parserWithMetadata,
  languageData: {
    commentTokens: {line: ";"}
  }
})

export const exampleCompletion = exampleLanguage.data.of({
  autocomplete: completeFromList([
    {label: "defun", type: "keyword"},
    {label: "defvar", type: "keyword"},
    {label: "let", type: "keyword"},
    {label: "cons", type: "function"},
    {label: "car", type: "function"},
    {label: "cdr", type: "function"}
  ])
})

export function example(): LanguageSupport {
  return new LanguageSupport(exampleLanguage, [exampleCompletion])
}
