var t = `{
	"$schema": "vscode://schemas/color-theme",
	"name": "Dark (Visual Studio)",
	"colors": {
		"checkbox.border": "#6B6B6B",
		"editor.background": "#1E1E1E",
		"editor.foreground": "#D4D4D4",
		"editor.inactiveSelectionBackground": "#3A3D41",
		"editorIndentGuide.background": "#404040",
		"editorIndentGuide.activeBackground": "#707070",
		"editor.selectionHighlightBackground": "#ADD6FF26",
		"list.dropBackground": "#383B3D",
		"activityBarBadge.background": "#007ACC",
		"sideBarTitle.foreground": "#BBBBBB",
		"input.placeholderForeground": "#A6A6A6",
		"menu.background": "#252526",
		"menu.foreground": "#CCCCCC",
		"menu.separatorBackground": "#454545",
		"menu.border": "#454545",
		"statusBarItem.remoteForeground": "#FFF",
		"statusBarItem.remoteBackground": "#16825D",
		"ports.iconRunningProcessForeground": "#369432",
		"sideBarSectionHeader.background": "#0000",
		"sideBarSectionHeader.border": "#ccc3",
		"tab.lastPinnedBorder": "#ccc3",
		"list.activeSelectionIconForeground": "#FFF",
		"terminal.inactiveSelectionBackground": "#3A3D41",
		"widget.border": "#303031",
	},
	"tokenColors": [
		{
			"scope": [
				"meta.embedded",
				"source.groovy.embedded",
				"string meta.image.inline.markdown",
			],
			"settings": {
				"foreground": "#D4D4D4"
			}
		},
		{
			"scope": "emphasis",
			"settings": {
				"fontStyle": "italic"
			}
		},
		{
			"scope": "strong",
			"settings": {
				"fontStyle": "bold"
			}
		},
		{
			"scope": "header",
			"settings": {
				"foreground": "#000080"
			}
		},
		{
			"scope": "comment",
			"settings": {
				"foreground": "#6A9955"
			}
		},
		{
			"scope": "constant.language",
			"settings": {
				"foreground": "#569cd6"
			}
		},
		{
			"scope": [
				"constant.numeric",
				"variable.other.enummember",
				"keyword.operator.plus.exponent",
				"keyword.operator.minus.exponent"
			],
			"settings": {
				"foreground": "#b5cea8"
			}
		},
		{
			"scope": "constant.regexp",
			"settings": {
				"foreground": "#646695"
			}
		},
		{
			"scope": "entity.name.tag",
			"settings": {
				"foreground": "#569cd6"
			}
		},
		{
			"scope": "entity.name.tag.css",
			"settings": {
				"foreground": "#d7ba7d"
			}
		},
		{
			"scope": "entity.other.attribute-name",
			"settings": {
				"foreground": "#9cdcfe"
			}
		},
		{
			"scope": [
				"entity.other.attribute-name.class.css",
				"entity.other.attribute-name.class.mixin.css",
				"entity.other.attribute-name.id.css",
				"entity.other.attribute-name.parent-selector.css",
				"entity.other.attribute-name.pseudo-class.css",
				"entity.other.attribute-name.pseudo-element.css",
				"source.css.less entity.other.attribute-name.id",
				"entity.other.attribute-name.scss"
			],
			"settings": {
				"foreground": "#d7ba7d"
			}
		},
		{
			"scope": "invalid",
			"settings": {
				"foreground": "#f44747"
			}
		},
		{
			"scope": "markup.underline",
			"settings": {
				"fontStyle": "underline"
			}
		},
		{
			"scope": "markup.bold",
			"settings": {
				"fontStyle": "bold",
				"foreground": "#569cd6"
			}
		},
		{
			"scope": "markup.heading",
			"settings": {
				"fontStyle": "bold",
				"foreground": "#569cd6"
			}
		},
		{
			"scope": "markup.italic",
			"settings": {
				"fontStyle": "italic"
			}
		},
		{
			"scope": "markup.strikethrough",
			"settings": {
				"fontStyle": "strikethrough"
			}
		},
		{
			"scope": "markup.inserted",
			"settings": {
				"foreground": "#b5cea8"
			}
		},
		{
			"scope": "markup.deleted",
			"settings": {
				"foreground": "#ce9178"
			}
		},
		{
			"scope": "markup.changed",
			"settings": {
				"foreground": "#569cd6"
			}
		},
		{
			"scope": "punctuation.definition.quote.begin.markdown",
			"settings": {
				"foreground": "#6A9955"
			}
		},
		{
			"scope": "punctuation.definition.list.begin.markdown",
			"settings": {
				"foreground": "#6796e6"
			}
		},
		{
			"scope": "markup.inline.raw",
			"settings": {
				"foreground": "#ce9178"
			}
		},
		{
			"name": "brackets of XML/HTML tags",
			"scope": "punctuation.definition.tag",
			"settings": {
				"foreground": "#808080"
			}
		},
		{
			"scope": [
				"meta.preprocessor",
				"entity.name.function.preprocessor"
			],
			"settings": {
				"foreground": "#569cd6"
			}
		},
		{
			"scope": "meta.preprocessor.string",
			"settings": {
				"foreground": "#ce9178"
			}
		},
		{
			"scope": "meta.preprocessor.numeric",
			"settings": {
				"foreground": "#b5cea8"
			}
		},
		{
			"scope": "meta.structure.dictionary.key.python",
			"settings": {
				"foreground": "#9cdcfe"
			}
		},
		{
			"scope": "meta.diff.header",
			"settings": {
				"foreground": "#569cd6"
			}
		},
		{
			"scope": "storage",
			"settings": {
				"foreground": "#569cd6"
			}
		},
		{
			"scope": "storage.type",
			"settings": {
				"foreground": "#569cd6"
			}
		},
		{
			"scope": [
				"storage.modifier",
				"keyword.operator.noexcept"
			],
			"settings": {
				"foreground": "#569cd6"
			}
		},
		{
			"scope": [
				"string",
				"meta.embedded.assembly"
			],
			"settings": {
				"foreground": "#ce9178"
			}
		},
		{
			"scope": "string.tag",
			"settings": {
				"foreground": "#ce9178"
			}
		},
		{
			"scope": "string.value",
			"settings": {
				"foreground": "#ce9178"
			}
		},
		{
			"scope": "string.regexp",
			"settings": {
				"foreground": "#d16969"
			}
		},
		{
			"name": "String interpolation",
			"scope": [
				"punctuation.definition.template-expression.begin",
				"punctuation.definition.template-expression.end",
				"punctuation.section.embedded"
			],
			"settings": {
				"foreground": "#569cd6"
			}
		},
		{
			"name": "Reset JavaScript string interpolation expression",
			"scope": [
				"meta.template.expression"
			],
			"settings": {
				"foreground": "#d4d4d4"
			}
		},
		{
			"scope": [
				"support.type.vendored.property-name",
				"support.type.property-name",
				"variable.css",
				"variable.scss",
				"variable.other.less",
				"source.coffee.embedded"
			],
			"settings": {
				"foreground": "#9cdcfe"
			}
		},
		{
			"scope": "keyword",
			"settings": {
				"foreground": "#569cd6"
			}
		},
		{
			"scope": "keyword.control",
			"settings": {
				"foreground": "#569cd6"
			}
		},
		{
			"scope": "keyword.operator",
			"settings": {
				"foreground": "#d4d4d4"
			}
		},
		{
			"scope": [
				"keyword.operator.new",
				"keyword.operator.expression",
				"keyword.operator.cast",
				"keyword.operator.sizeof",
				"keyword.operator.alignof",
				"keyword.operator.typeid",
				"keyword.operator.alignas",
				"keyword.operator.instanceof",
				"keyword.operator.logical.python",
				"keyword.operator.wordlike"
			],
			"settings": {
				"foreground": "#569cd6"
			}
		},
		{
			"scope": "keyword.other.unit",
			"settings": {
				"foreground": "#b5cea8"
			}
		},
		{
			"scope": [
				"punctuation.section.embedded.begin.php",
				"punctuation.section.embedded.end.php"
			],
			"settings": {
				"foreground": "#569cd6"
			}
		},
		{
			"scope": "support.function.git-rebase",
			"settings": {
				"foreground": "#9cdcfe"
			}
		},
		{
			"scope": "constant.sha.git-rebase",
			"settings": {
				"foreground": "#b5cea8"
			}
		},
		{
			"name": "coloring of the Java import and package identifiers",
			"scope": [
				"storage.modifier.import.java",
				"variable.language.wildcard.java",
				"storage.modifier.package.java"
			],
			"settings": {
				"foreground": "#d4d4d4"
			}
		},
		{
			"name": "this.self",
			"scope": "variable.language",
			"settings": {
				"foreground": "#569cd6"
			}
		}
	],
	"semanticHighlighting": true,
	"semanticTokenColors": {
		"newOperator": "#d4d4d4",
		"stringLiteral": "#ce9178",
		"customLiteral": "#D4D4D4",
		"numberLiteral": "#b5cea8",
	}
}
`;
export {
  t as default
};
