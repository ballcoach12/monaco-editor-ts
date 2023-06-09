import { _ as w, a as m, a8 as $, dc as v, da as L, dE as S, N as t, a0 as E, d0 as M, D as j, ck as I, cX as B, cY as A, a3 as f, ev as y, e as D, by as N, dn as O, bC as V } from "./verifyPrepare-e26a1ce7.js";
import { W as z } from "./languageService-f5f48ab9.js";
import { g as q } from "./jsonErrorMessages-5a450d8c.js";
function k(c) {
  if (!Array.isArray(c))
    return !1;
  for (let e = 0, s = c.length; e < s; e++)
    if (typeof c[e] != "string")
      return !1;
  return !0;
}
function h(c) {
  return k(c) && c.length === 2;
}
let b = class extends j {
  constructor(e, s, r, i) {
    super(), this._languageService = e, this._extensionResourceLoaderService = s, this._extensionService = r, this._languageConfigurationService = i, this._done = /* @__PURE__ */ new Map(), this._register(this._languageService.onDidRequestBasicLanguageFeatures(async (n) => {
      this._extensionService.whenInstalledExtensionsRegistered().then(() => {
        this._loadConfigurationsForMode(n);
      });
    })), this._register(this._languageService.onDidChange(() => {
      for (const [n] of this._done)
        this._loadConfigurationsForMode(n);
    }));
  }
  async _loadConfigurationsForMode(e) {
    const s = this._languageService.getConfigurationFiles(e), r = I(s.map((n) => n.toString()));
    if (this._done.get(e) === r)
      return;
    this._done.set(e, r);
    const i = await Promise.all(s.map((n) => this._readConfigFile(n)));
    for (const n of i)
      this._handleConfig(e, n);
  }
  async _readConfigFile(e) {
    try {
      const s = await this._extensionResourceLoaderService.readExtensionResource(e), r = [];
      let i = B(s, r);
      return r.length && console.error(t("parseErrors", "Errors parsing {0}: {1}", e.toString(), r.map((n) => `[${n.offset}, ${n.length}] ${q(n.error)}`).join(`
`))), A(i) !== "object" && (console.error(t(
        "formatError",
        "{0}: Invalid format, JSON object expected.",
        e.toString()
      )), i = {}), i;
    } catch (s) {
      return console.error(s), {};
    }
  }
  _extractValidCommentRule(e, s) {
    const r = s.comments;
    if (typeof r > "u")
      return;
    if (!f(r)) {
      console.warn(`[${e}]: language configuration: expected \`comments\` to be an object.`);
      return;
    }
    let i;
    return typeof r.lineComment < "u" && (typeof r.lineComment != "string" ? console.warn(`[${e}]: language configuration: expected \`comments.lineComment\` to be a string.`) : (i = i || {}, i.lineComment = r.lineComment)), typeof r.blockComment < "u" && (h(r.blockComment) ? (i = i || {}, i.blockComment = r.blockComment) : console.warn(`[${e}]: language configuration: expected \`comments.blockComment\` to be an array of two strings.`)), i;
  }
  _extractValidBrackets(e, s) {
    const r = s.brackets;
    if (typeof r > "u")
      return;
    if (!Array.isArray(r)) {
      console.warn(`[${e}]: language configuration: expected \`brackets\` to be an array.`);
      return;
    }
    let i;
    for (let n = 0, a = r.length; n < a; n++) {
      const o = r[n];
      if (!h(o)) {
        console.warn(`[${e}]: language configuration: expected \`brackets[${n}]\` to be an array of two strings.`);
        continue;
      }
      i = i || [], i.push(o);
    }
    return i;
  }
  _extractValidAutoClosingPairs(e, s) {
    const r = s.autoClosingPairs;
    if (typeof r > "u")
      return;
    if (!Array.isArray(r)) {
      console.warn(`[${e}]: language configuration: expected \`autoClosingPairs\` to be an array.`);
      return;
    }
    let i;
    for (let n = 0, a = r.length; n < a; n++) {
      const o = r[n];
      if (Array.isArray(o)) {
        if (!h(o)) {
          console.warn(`[${e}]: language configuration: expected \`autoClosingPairs[${n}]\` to be an array of two strings or an object.`);
          continue;
        }
        i = i || [], i.push({ open: o[0], close: o[1] });
      } else {
        if (!f(o)) {
          console.warn(`[${e}]: language configuration: expected \`autoClosingPairs[${n}]\` to be an array of two strings or an object.`);
          continue;
        }
        if (typeof o.open != "string") {
          console.warn(`[${e}]: language configuration: expected \`autoClosingPairs[${n}].open\` to be a string.`);
          continue;
        }
        if (typeof o.close != "string") {
          console.warn(`[${e}]: language configuration: expected \`autoClosingPairs[${n}].close\` to be a string.`);
          continue;
        }
        if (typeof o.notIn < "u" && !k(o.notIn)) {
          console.warn(`[${e}]: language configuration: expected \`autoClosingPairs[${n}].notIn\` to be a string array.`);
          continue;
        }
        i = i || [], i.push({ open: o.open, close: o.close, notIn: o.notIn });
      }
    }
    return i;
  }
  _extractValidSurroundingPairs(e, s) {
    const r = s.surroundingPairs;
    if (typeof r > "u")
      return;
    if (!Array.isArray(r)) {
      console.warn(`[${e}]: language configuration: expected \`surroundingPairs\` to be an array.`);
      return;
    }
    let i;
    for (let n = 0, a = r.length; n < a; n++) {
      const o = r[n];
      if (Array.isArray(o)) {
        if (!h(o)) {
          console.warn(`[${e}]: language configuration: expected \`surroundingPairs[${n}]\` to be an array of two strings or an object.`);
          continue;
        }
        i = i || [], i.push({ open: o[0], close: o[1] });
      } else {
        if (!f(o)) {
          console.warn(`[${e}]: language configuration: expected \`surroundingPairs[${n}]\` to be an array of two strings or an object.`);
          continue;
        }
        if (typeof o.open != "string") {
          console.warn(`[${e}]: language configuration: expected \`surroundingPairs[${n}].open\` to be a string.`);
          continue;
        }
        if (typeof o.close != "string") {
          console.warn(`[${e}]: language configuration: expected \`surroundingPairs[${n}].close\` to be a string.`);
          continue;
        }
        i = i || [], i.push({ open: o.open, close: o.close });
      }
    }
    return i;
  }
  _extractValidColorizedBracketPairs(e, s) {
    const r = s.colorizedBracketPairs;
    if (typeof r > "u")
      return;
    if (!Array.isArray(r)) {
      console.warn(`[${e}]: language configuration: expected \`colorizedBracketPairs\` to be an array.`);
      return;
    }
    const i = [];
    for (let n = 0, a = r.length; n < a; n++) {
      const o = r[n];
      if (!h(o)) {
        console.warn(`[${e}]: language configuration: expected \`colorizedBracketPairs[${n}]\` to be an array of two strings.`);
        continue;
      }
      i.push([o[0], o[1]]);
    }
    return i;
  }
  _extractValidOnEnterRules(e, s) {
    const r = s.onEnterRules;
    if (typeof r > "u")
      return;
    if (!Array.isArray(r)) {
      console.warn(`[${e}]: language configuration: expected \`onEnterRules\` to be an array.`);
      return;
    }
    let i;
    for (let n = 0, a = r.length; n < a; n++) {
      const o = r[n];
      if (!f(o)) {
        console.warn(`[${e}]: language configuration: expected \`onEnterRules[${n}]\` to be an object.`);
        continue;
      }
      if (!f(o.action)) {
        console.warn(`[${e}]: language configuration: expected \`onEnterRules[${n}].action\` to be an object.`);
        continue;
      }
      let d;
      if (o.action.indent === "none")
        d = y.None;
      else if (o.action.indent === "indent")
        d = y.Indent;
      else if (o.action.indent === "indentOutdent")
        d = y.IndentOutdent;
      else if (o.action.indent === "outdent")
        d = y.Outdent;
      else {
        console.warn(`[${e}]: language configuration: expected \`onEnterRules[${n}].action.indent\` to be 'none', 'indent', 'indentOutdent' or 'outdent'.`);
        continue;
      }
      const g = { indentAction: d };
      o.action.appendText && (typeof o.action.appendText == "string" ? g.appendText = o.action.appendText : console.warn(`[${e}]: language configuration: expected \`onEnterRules[${n}].action.appendText\` to be undefined or a string.`)), o.action.removeText && (typeof o.action.removeText == "number" ? g.removeText = o.action.removeText : console.warn(`[${e}]: language configuration: expected \`onEnterRules[${n}].action.removeText\` to be undefined or a number.`));
      const x = this._parseRegex(e, `onEnterRules[${n}].beforeText`, o.beforeText);
      if (!x)
        continue;
      const l = { beforeText: x, action: g };
      if (o.afterText) {
        const u = this._parseRegex(e, `onEnterRules[${n}].afterText`, o.afterText);
        u && (l.afterText = u);
      }
      if (o.previousLineText) {
        const u = this._parseRegex(e, `onEnterRules[${n}].previousLineText`, o.previousLineText);
        u && (l.previousLineText = u);
      }
      i = i || [], i.push(l);
    }
    return i;
  }
  _handleConfig(e, s) {
    const r = this._extractValidCommentRule(e, s), i = this._extractValidBrackets(e, s), n = this._extractValidAutoClosingPairs(e, s), a = this._extractValidSurroundingPairs(e, s), o = this._extractValidColorizedBracketPairs(e, s), d = typeof s.autoCloseBefore == "string" ? s.autoCloseBefore : void 0, g = s.wordPattern ? this._parseRegex(e, "wordPattern", s.wordPattern) : void 0, x = s.indentationRules ? this._mapIndentationRules(e, s.indentationRules) : void 0;
    let l;
    if (s.folding) {
      const p = s.folding.markers, P = p && p.start ? this._parseRegex(e, "folding.markers.start", p.start) : void 0, T = p && p.end ? this._parseRegex(e, "folding.markers.end", p.end) : void 0, _ = P && T ? { start: P, end: T } : void 0;
      l = {
        offSide: s.folding.offSide,
        markers: _
      };
    }
    const u = this._extractValidOnEnterRules(e, s), C = {
      comments: r,
      brackets: i,
      wordPattern: g,
      indentationRules: x,
      onEnterRules: u,
      autoClosingPairs: n,
      surroundingPairs: a,
      colorizedBracketPairs: o,
      autoCloseBefore: d,
      folding: l,
      __electricCharacterSupport: void 0
    };
    this._languageConfigurationService.register(e, C, 50);
  }
  _parseRegex(e, s, r) {
    if (typeof r == "string")
      try {
        return new RegExp(r, "");
      } catch (i) {
        console.warn(`[${e}]: Invalid regular expression in \`${s}\`: `, i);
        return;
      }
    if (f(r)) {
      if (typeof r.pattern != "string") {
        console.warn(`[${e}]: language configuration: expected \`${s}.pattern\` to be a string.`);
        return;
      }
      if (typeof r.flags < "u" && typeof r.flags != "string") {
        console.warn(`[${e}]: language configuration: expected \`${s}.flags\` to be a string.`);
        return;
      }
      try {
        return new RegExp(r.pattern, r.flags);
      } catch (i) {
        console.warn(`[${e}]: Invalid regular expression in \`${s}\`: `, i);
        return;
      }
    }
    console.warn(`[${e}]: language configuration: expected \`${s}\` to be a string or an object.`);
  }
  _mapIndentationRules(e, s) {
    const r = this._parseRegex(e, "indentationRules.increaseIndentPattern", s.increaseIndentPattern);
    if (!r)
      return;
    const i = this._parseRegex(e, "indentationRules.decreaseIndentPattern", s.decreaseIndentPattern);
    if (!i)
      return;
    const n = {
      increaseIndentPattern: r,
      decreaseIndentPattern: i
    };
    return s.indentNextLinePattern && (n.indentNextLinePattern = this._parseRegex(e, "indentationRules.indentNextLinePattern", s.indentNextLinePattern)), s.unIndentedLinePattern && (n.unIndentedLinePattern = this._parseRegex(e, "indentationRules.unIndentedLinePattern", s.unIndentedLinePattern)), n;
  }
};
b = w([
  m(0, $),
  m(1, v),
  m(2, L),
  m(3, S)
], b);
const F = "vscode://schemas/language-configuration", W = {
  allowComments: !0,
  allowTrailingCommas: !0,
  default: {
    comments: {
      blockComment: ["/*", "*/"],
      lineComment: "//"
    },
    brackets: [["(", ")"], ["[", "]"], ["{", "}"]],
    autoClosingPairs: [["(", ")"], ["[", "]"], ["{", "}"]],
    surroundingPairs: [["(", ")"], ["[", "]"], ["{", "}"]]
  },
  definitions: {
    openBracket: {
      type: "string",
      description: t("schema.openBracket", "The opening bracket character or string sequence.")
    },
    closeBracket: {
      type: "string",
      description: t("schema.closeBracket", "The closing bracket character or string sequence.")
    },
    bracketPair: {
      type: "array",
      items: [{
        $ref: "#/definitions/openBracket"
      }, {
        $ref: "#/definitions/closeBracket"
      }]
    }
  },
  properties: {
    comments: {
      default: {
        blockComment: ["/*", "*/"],
        lineComment: "//"
      },
      description: t("schema.comments", "Defines the comment symbols"),
      type: "object",
      properties: {
        blockComment: {
          type: "array",
          description: t("schema.blockComments", "Defines how block comments are marked."),
          items: [{
            type: "string",
            description: t(
              "schema.blockComment.begin",
              "The character sequence that starts a block comment."
            )
          }, {
            type: "string",
            description: t(
              "schema.blockComment.end",
              "The character sequence that ends a block comment."
            )
          }]
        },
        lineComment: {
          type: "string",
          description: t("schema.lineComment", "The character sequence that starts a line comment.")
        }
      }
    },
    brackets: {
      default: [["(", ")"], ["[", "]"], ["{", "}"]],
      description: t(
        "schema.brackets",
        "Defines the bracket symbols that increase or decrease the indentation."
      ),
      type: "array",
      items: {
        $ref: "#/definitions/bracketPair"
      }
    },
    colorizedBracketPairs: {
      default: [["(", ")"], ["[", "]"], ["{", "}"]],
      description: t(
        "schema.colorizedBracketPairs",
        "Defines the bracket pairs that are colorized by their nesting level if bracket pair colorization is enabled."
      ),
      type: "array",
      items: {
        $ref: "#/definitions/bracketPair"
      }
    },
    autoClosingPairs: {
      default: [["(", ")"], ["[", "]"], ["{", "}"]],
      description: t(
        "schema.autoClosingPairs",
        "Defines the bracket pairs. When a opening bracket is entered, the closing bracket is inserted automatically."
      ),
      type: "array",
      items: {
        oneOf: [{
          $ref: "#/definitions/bracketPair"
        }, {
          type: "object",
          properties: {
            open: {
              $ref: "#/definitions/openBracket"
            },
            close: {
              $ref: "#/definitions/closeBracket"
            },
            notIn: {
              type: "array",
              description: t(
                "schema.autoClosingPairs.notIn",
                "Defines a list of scopes where the auto pairs are disabled."
              ),
              items: {
                enum: ["string", "comment"]
              }
            }
          }
        }]
      }
    },
    autoCloseBefore: {
      default: `;:.,=}])> 
	`,
      description: t(
        "schema.autoCloseBefore",
        "Defines what characters must be after the cursor in order for bracket or quote autoclosing to occur when using the 'languageDefined' autoclosing setting. This is typically the set of characters which can not start an expression."
      ),
      type: "string"
    },
    surroundingPairs: {
      default: [["(", ")"], ["[", "]"], ["{", "}"]],
      description: t(
        "schema.surroundingPairs",
        "Defines the bracket pairs that can be used to surround a selected string."
      ),
      type: "array",
      items: {
        oneOf: [{
          $ref: "#/definitions/bracketPair"
        }, {
          type: "object",
          properties: {
            open: {
              $ref: "#/definitions/openBracket"
            },
            close: {
              $ref: "#/definitions/closeBracket"
            }
          }
        }]
      }
    },
    wordPattern: {
      default: "",
      description: t(
        "schema.wordPattern",
        "Defines what is considered to be a word in the programming language."
      ),
      type: ["string", "object"],
      properties: {
        pattern: {
          type: "string",
          description: t("schema.wordPattern.pattern", "The RegExp pattern used to match words."),
          default: ""
        },
        flags: {
          type: "string",
          description: t("schema.wordPattern.flags", "The RegExp flags used to match words."),
          default: "g",
          pattern: "^([gimuy]+)$",
          patternErrorMessage: t(
            "schema.wordPattern.flags.errorMessage",
            "Must match the pattern `/^([gimuy]+)$/`."
          )
        }
      }
    },
    indentationRules: {
      default: {
        increaseIndentPattern: "",
        decreaseIndentPattern: ""
      },
      description: t("schema.indentationRules", "The language's indentation settings."),
      type: "object",
      properties: {
        increaseIndentPattern: {
          type: ["string", "object"],
          description: t(
            "schema.indentationRules.increaseIndentPattern",
            "If a line matches this pattern, then all the lines after it should be indented once (until another rule matches)."
          ),
          properties: {
            pattern: {
              type: "string",
              description: t(
                "schema.indentationRules.increaseIndentPattern.pattern",
                "The RegExp pattern for increaseIndentPattern."
              ),
              default: ""
            },
            flags: {
              type: "string",
              description: t(
                "schema.indentationRules.increaseIndentPattern.flags",
                "The RegExp flags for increaseIndentPattern."
              ),
              default: "",
              pattern: "^([gimuy]+)$",
              patternErrorMessage: t(
                "schema.indentationRules.increaseIndentPattern.errorMessage",
                "Must match the pattern `/^([gimuy]+)$/`."
              )
            }
          }
        },
        decreaseIndentPattern: {
          type: ["string", "object"],
          description: t(
            "schema.indentationRules.decreaseIndentPattern",
            "If a line matches this pattern, then all the lines after it should be unindented once (until another rule matches)."
          ),
          properties: {
            pattern: {
              type: "string",
              description: t(
                "schema.indentationRules.decreaseIndentPattern.pattern",
                "The RegExp pattern for decreaseIndentPattern."
              ),
              default: ""
            },
            flags: {
              type: "string",
              description: t(
                "schema.indentationRules.decreaseIndentPattern.flags",
                "The RegExp flags for decreaseIndentPattern."
              ),
              default: "",
              pattern: "^([gimuy]+)$",
              patternErrorMessage: t(
                "schema.indentationRules.decreaseIndentPattern.errorMessage",
                "Must match the pattern `/^([gimuy]+)$/`."
              )
            }
          }
        },
        indentNextLinePattern: {
          type: ["string", "object"],
          description: t(
            "schema.indentationRules.indentNextLinePattern",
            "If a line matches this pattern, then **only the next line** after it should be indented once."
          ),
          properties: {
            pattern: {
              type: "string",
              description: t(
                "schema.indentationRules.indentNextLinePattern.pattern",
                "The RegExp pattern for indentNextLinePattern."
              ),
              default: ""
            },
            flags: {
              type: "string",
              description: t(
                "schema.indentationRules.indentNextLinePattern.flags",
                "The RegExp flags for indentNextLinePattern."
              ),
              default: "",
              pattern: "^([gimuy]+)$",
              patternErrorMessage: t(
                "schema.indentationRules.indentNextLinePattern.errorMessage",
                "Must match the pattern `/^([gimuy]+)$/`."
              )
            }
          }
        },
        unIndentedLinePattern: {
          type: ["string", "object"],
          description: t(
            "schema.indentationRules.unIndentedLinePattern",
            "If a line matches this pattern, then its indentation should not be changed and it should not be evaluated against the other rules."
          ),
          properties: {
            pattern: {
              type: "string",
              description: t(
                "schema.indentationRules.unIndentedLinePattern.pattern",
                "The RegExp pattern for unIndentedLinePattern."
              ),
              default: ""
            },
            flags: {
              type: "string",
              description: t(
                "schema.indentationRules.unIndentedLinePattern.flags",
                "The RegExp flags for unIndentedLinePattern."
              ),
              default: "",
              pattern: "^([gimuy]+)$",
              patternErrorMessage: t(
                "schema.indentationRules.unIndentedLinePattern.errorMessage",
                "Must match the pattern `/^([gimuy]+)$/`."
              )
            }
          }
        }
      }
    },
    folding: {
      type: "object",
      description: t("schema.folding", "The language's folding settings."),
      properties: {
        offSide: {
          type: "boolean",
          description: t(
            "schema.folding.offSide",
            "A language adheres to the off-side rule if blocks in that language are expressed by their indentation. If set, empty lines belong to the subsequent block."
          )
        },
        markers: {
          type: "object",
          description: t(
            "schema.folding.markers",
            "Language specific folding markers such as '#region' and '#endregion'. The start and end regexes will be tested against the contents of all lines and must be designed efficiently"
          ),
          properties: {
            start: {
              type: "string",
              description: t(
                "schema.folding.markers.start",
                "The RegExp pattern for the start marker. The regexp must start with '^'."
              )
            },
            end: {
              type: "string",
              description: t(
                "schema.folding.markers.end",
                "The RegExp pattern for the end marker. The regexp must start with '^'."
              )
            }
          }
        }
      }
    },
    onEnterRules: {
      type: "array",
      description: t(
        "schema.onEnterRules",
        "The language's rules to be evaluated when pressing Enter."
      ),
      items: {
        type: "object",
        description: t(
          "schema.onEnterRules",
          "The language's rules to be evaluated when pressing Enter."
        ),
        required: ["beforeText", "action"],
        properties: {
          beforeText: {
            type: ["string", "object"],
            description: t(
              "schema.onEnterRules.beforeText",
              "This rule will only execute if the text before the cursor matches this regular expression."
            ),
            properties: {
              pattern: {
                type: "string",
                description: t(
                  "schema.onEnterRules.beforeText.pattern",
                  "The RegExp pattern for beforeText."
                ),
                default: ""
              },
              flags: {
                type: "string",
                description: t("schema.onEnterRules.beforeText.flags", "The RegExp flags for beforeText."),
                default: "",
                pattern: "^([gimuy]+)$",
                patternErrorMessage: t(
                  "schema.onEnterRules.beforeText.errorMessage",
                  "Must match the pattern `/^([gimuy]+)$/`."
                )
              }
            }
          },
          afterText: {
            type: ["string", "object"],
            description: t(
              "schema.onEnterRules.afterText",
              "This rule will only execute if the text after the cursor matches this regular expression."
            ),
            properties: {
              pattern: {
                type: "string",
                description: t(
                  "schema.onEnterRules.afterText.pattern",
                  "The RegExp pattern for afterText."
                ),
                default: ""
              },
              flags: {
                type: "string",
                description: t("schema.onEnterRules.afterText.flags", "The RegExp flags for afterText."),
                default: "",
                pattern: "^([gimuy]+)$",
                patternErrorMessage: t(
                  "schema.onEnterRules.afterText.errorMessage",
                  "Must match the pattern `/^([gimuy]+)$/`."
                )
              }
            }
          },
          previousLineText: {
            type: ["string", "object"],
            description: t(
              "schema.onEnterRules.previousLineText",
              "This rule will only execute if the text above the line matches this regular expression."
            ),
            properties: {
              pattern: {
                type: "string",
                description: t(
                  "schema.onEnterRules.previousLineText.pattern",
                  "The RegExp pattern for previousLineText."
                ),
                default: ""
              },
              flags: {
                type: "string",
                description: t(
                  "schema.onEnterRules.previousLineText.flags",
                  "The RegExp flags for previousLineText."
                ),
                default: "",
                pattern: "^([gimuy]+)$",
                patternErrorMessage: t(
                  "schema.onEnterRules.previousLineText.errorMessage",
                  "Must match the pattern `/^([gimuy]+)$/`."
                )
              }
            }
          },
          action: {
            type: ["string", "object"],
            description: t("schema.onEnterRules.action", "The action to execute."),
            required: ["indent"],
            default: { indent: "indent" },
            properties: {
              indent: {
                type: "string",
                description: t(
                  "schema.onEnterRules.action.indent",
                  "Describe what to do with the indentation"
                ),
                default: "indent",
                enum: ["none", "indent", "indentOutdent", "outdent"],
                markdownEnumDescriptions: [
                  t(
                    "schema.onEnterRules.action.indent.none",
                    "Insert new line and copy the previous line's indentation."
                  ),
                  t(
                    "schema.onEnterRules.action.indent.indent",
                    "Insert new line and indent once (relative to the previous line's indentation)."
                  ),
                  t(
                    "schema.onEnterRules.action.indent.indentOutdent",
                    `Insert two new lines:
 - the first one indented which will hold the cursor
 - the second one at the same indentation level`
                  ),
                  t(
                    "schema.onEnterRules.action.indent.outdent",
                    "Insert new line and outdent once (relative to the previous line's indentation)."
                  )
                ]
              },
              appendText: {
                type: "string",
                description: t(
                  "schema.onEnterRules.action.appendText",
                  "Describes text to be appended after the new line and after the indentation."
                ),
                default: ""
              },
              removeText: {
                type: "number",
                description: t(
                  "schema.onEnterRules.action.removeText",
                  "Describes the number of characters to remove from the new line's indentation."
                ),
                default: 0
              }
            }
          }
        }
      }
    }
  }
}, H = E.as(M.JSONContribution);
H.registerSchema(F, W);
let R = class {
  constructor(e) {
    this.instantiationService = e, this.instantiationService.createInstance(b);
  }
};
R = w([
  m(0, D)
], R);
E.as(N.Workbench).registerWorkbenchContribution(R, 1);
function Q() {
  return {
    ...O(),
    [$.toString()]: new V(z)
  };
}
export {
  R as ExtensionPoints,
  Q as default
};
