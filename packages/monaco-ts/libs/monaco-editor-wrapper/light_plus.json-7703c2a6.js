var t = `{
	"$schema": "vscode://schemas/color-theme",
	"name": "Light+ (default light)",
	"include": "./light_vs.json",
	"tokenColors": [ // adds rules to the light vs rules
		{
			"name": "Function declarations",
			"scope": [
				"entity.name.function",
				"support.function",
				"support.constant.handlebars",
				"source.powershell variable.other.member",
				"entity.name.operator.custom-literal" // See https://en.cppreference.com/w/cpp/language/user_literal
			],
			"settings": {
				"foreground": "#795E26"
			}
		},
		{
			"name": "Types declaration and references",
			"scope": [
				"support.class",
				"support.type",
				"entity.name.type",
				"entity.name.namespace",
				"entity.other.attribute",
				"entity.name.scope-resolution",
				"entity.name.class",
				"storage.type.numeric.go",
				"storage.type.byte.go",
				"storage.type.boolean.go",
				"storage.type.string.go",
				"storage.type.uintptr.go",
				"storage.type.error.go",
				"storage.type.rune.go",
				"storage.type.cs",
				"storage.type.generic.cs",
				"storage.type.modifier.cs",
				"storage.type.variable.cs",
				"storage.type.annotation.java",
				"storage.type.generic.java",
				"storage.type.java",
				"storage.type.object.array.java",
				"storage.type.primitive.array.java",
				"storage.type.primitive.java",
				"storage.type.token.java",
				"storage.type.groovy",
				"storage.type.annotation.groovy",
				"storage.type.parameters.groovy",
				"storage.type.generic.groovy",
				"storage.type.object.array.groovy",
				"storage.type.primitive.array.groovy",
				"storage.type.primitive.groovy"
			],
			"settings": {
				"foreground": "#267f99"
			}
		},
		{
			"name": "Types declaration and references, TS grammar specific",
			"scope": [
				"meta.type.cast.expr",
				"meta.type.new.expr",
				"support.constant.math",
				"support.constant.dom",
				"support.constant.json",
				"entity.other.inherited-class"
			],
			"settings": {
				"foreground": "#267f99"
			}
		},
		{
			"name": "Control flow / Special keywords",
			"scope": [
				"keyword.control",
				"source.cpp keyword.operator.new",
				"source.cpp keyword.operator.delete",
				"keyword.other.using",
				"keyword.other.operator",
				"entity.name.operator"
			],
			"settings": {
				"foreground": "#AF00DB"
			}
		},
		{
			"name": "Variable and parameter name",
			"scope": [
				"variable",
				"meta.definition.variable.name",
				"support.variable",
				"entity.name.variable",
				"constant.other.placeholder", // placeholders in strings

			],
			"settings": {
				"foreground": "#001080"
			}
		},
		{
			"name": "Constants and enums",
			"scope": [
				"variable.other.constant",
				"variable.other.enummember"
			],
			"settings": {
				"foreground": "#0070C1",
			}
		},
		{
			"name": "Object keys, TS grammar specific",
			"scope": [
				"meta.object-literal.key"
			],
			"settings": {
				"foreground": "#001080"
			}
		},
		{
			"name": "CSS property value",
			"scope": [
				"support.constant.property-value",
				"support.constant.font-name",
				"support.constant.media-type",
				"support.constant.media",
				"constant.other.color.rgb-value",
				"constant.other.rgb-value",
				"support.constant.color"
			],
			"settings": {
				"foreground": "#0451a5"
			}
		},
		{
			"name": "Regular expression groups",
			"scope": [
				"punctuation.definition.group.regexp",
				"punctuation.definition.group.assertion.regexp",
				"punctuation.definition.character-class.regexp",
				"punctuation.character.set.begin.regexp",
				"punctuation.character.set.end.regexp",
				"keyword.operator.negation.regexp",
				"support.other.parenthesis.regexp"
			],
			"settings": {
				"foreground": "#d16969"
			}
		},
		{
			"scope": [
				"constant.character.character-class.regexp",
				"constant.other.character-class.set.regexp",
				"constant.other.character-class.regexp",
				"constant.character.set.regexp"
			],
			"settings": {
				"foreground": "#811f3f"
			}
		},
		{
			"scope": "keyword.operator.quantifier.regexp",
			"settings": {
				"foreground": "#000000"
			}
		},
		{
			"scope": [
				"keyword.operator.or.regexp",
				"keyword.control.anchor.regexp"
			],
			"settings": {
				"foreground": "#EE0000"
			}
		},
		{
			"scope": "constant.character",
			"settings": {
				"foreground": "#0000ff"
			}
		},
		{
			"scope": "constant.character.escape",
			"settings": {
				"foreground": "#EE0000"
			}
		},
		{
			"scope": "entity.name.label",
			"settings": {
				"foreground": "#000000"
			}
		}
	],
	"semanticHighlighting": true,
	"semanticTokenColors": {
		"newOperator": "#AF00DB",
		"stringLiteral": "#a31515",
		"customLiteral": "#795E26",
		"numberLiteral": "#098658",
	}
}
`;
export {
  t as default
};
