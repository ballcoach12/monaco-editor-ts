import { d3 as v, N as e, _ as L, a as c, da as S, p as _, dF as I, bx as E, iZ as A, as as d, i_ as j, i$ as C, j0 as k } from "./verifyPrepare-e26a1ce7.js";
const l = v.registerExtensionPoint({
  extensionPoint: "languages",
  jsonSchema: {
    description: e(
      "vscode.extension.contributes.languages",
      "Contributes language declarations."
    ),
    type: "array",
    items: {
      type: "object",
      defaultSnippets: [{ body: { id: "${1:languageId}", aliases: ["${2:label}"], extensions: ["${3:extension}"], configuration: "./language-configuration.json" } }],
      properties: {
        id: {
          description: e("vscode.extension.contributes.languages.id", "ID of the language."),
          type: "string"
        },
        aliases: {
          description: e(
            "vscode.extension.contributes.languages.aliases",
            "Name aliases for the language."
          ),
          type: "array",
          items: {
            type: "string"
          }
        },
        extensions: {
          description: e(
            "vscode.extension.contributes.languages.extensions",
            "File extensions associated to the language."
          ),
          default: [".foo"],
          type: "array",
          items: {
            type: "string"
          }
        },
        filenames: {
          description: e(
            "vscode.extension.contributes.languages.filenames",
            "File names associated to the language."
          ),
          type: "array",
          items: {
            type: "string"
          }
        },
        filenamePatterns: {
          description: e(
            "vscode.extension.contributes.languages.filenamePatterns",
            "File name glob patterns associated to the language."
          ),
          type: "array",
          items: {
            type: "string"
          }
        },
        mimetypes: {
          description: e(
            "vscode.extension.contributes.languages.mimetypes",
            "Mime types associated to the language."
          ),
          type: "array",
          items: {
            type: "string"
          }
        },
        firstLine: {
          description: e(
            "vscode.extension.contributes.languages.firstLine",
            "A regular expression matching the first line of a file of the language."
          ),
          type: "string"
        },
        configuration: {
          description: e(
            "vscode.extension.contributes.languages.configuration",
            "A relative path to a file containing configuration options for the language."
          ),
          type: "string",
          default: "./language-configuration.json"
        },
        icon: {
          type: "object",
          description: e(
            "vscode.extension.contributes.languages.icon",
            "A icon to use as file icon, if no icon theme provides one for the language."
          ),
          properties: {
            light: {
              description: e(
                "vscode.extension.contributes.languages.icon.light",
                "Icon path when a light theme is used"
              ),
              type: "string"
            },
            dark: {
              description: e(
                "vscode.extension.contributes.languages.icon.dark",
                "Icon path when a dark theme is used"
              ),
              type: "string"
            }
          }
        }
      }
    }
  },
  activationEventsGenerator: (i, s) => {
    for (const t of i)
      t.id && s.push(`onLanguage:${t.id}`);
  }
});
let h = class extends A {
  constructor(s, t, r, g) {
    super(r.verbose || r.isExtensionDevelopment || !r.isBuilt), this.logService = g, this._configurationService = t, this._extensionService = s, l.setHandler((a) => {
      const y = [];
      for (let u = 0, x = a.length; u < x; u++) {
        const o = a[u];
        if (!Array.isArray(o.value)) {
          o.collector.error(e(
            "invalid",
            "Invalid `contributes.{0}`. Expected an array.",
            l.name
          ));
          continue;
        }
        for (let p = 0, b = o.value.length; p < b; p++) {
          const n = o.value[p];
          if (P(n, o.description, o.collector)) {
            let m;
            n.configuration && (m = d(o.description.extensionLocation, n.configuration)), y.push({
              id: n.id,
              extensions: n.extensions,
              filenames: n.filenames,
              filenamePatterns: n.filenamePatterns,
              firstLine: n.firstLine,
              aliases: n.aliases,
              mimetypes: n.mimetypes,
              configuration: m,
              icon: n.icon && {
                light: d(o.description.extensionLocation, n.icon.light),
                dark: d(o.description.extensionLocation, n.icon.dark)
              }
            });
          }
        }
      }
      this._registry.setDynamicLanguages(y);
    }), this.updateMime(), this._configurationService.onDidChangeConfiguration((a) => {
      a.affectsConfiguration(j) && this.updateMime();
    }), this._extensionService.whenInstalledExtensionsRegistered().then(() => {
      this.updateMime();
    }), this._register(this.onDidRequestRichLanguageFeatures((a) => {
      this._extensionService.activateByEvent(`onLanguage:${a}`), this._extensionService.activateByEvent("onLanguage");
    }));
  }
  updateMime() {
    var t;
    const s = this._configurationService.getValue();
    C(), (t = s.files) != null && t.associations && Object.keys(s.files.associations).forEach((r) => {
      const g = s.files.associations[r];
      if (typeof g != "string") {
        this.logService.warn(`Ignoring configured 'files.associations' for '${r}' because its type is not a string but '${typeof g}'`);
        return;
      }
      const a = this.getMimeType(g) || `text/x-${g}`;
      k({ id: g, mime: a, filepattern: r });
    }), this._onDidChange.fire();
  }
};
h = L([
  c(0, S),
  c(1, _),
  c(2, I),
  c(3, E)
], h);
function f(i) {
  return typeof i > "u" ? !0 : Array.isArray(i) ? i.every((s) => typeof s == "string") : !1;
}
function P(i, s, t) {
  return i ? typeof i.id != "string" ? (t.error(e(
    "require.id",
    "property `{0}` is mandatory and must be of type `string`",
    "id"
  )), !1) : f(i.extensions) ? f(i.filenames) ? typeof i.firstLine < "u" && typeof i.firstLine != "string" ? (t.error(e(
    "opt.firstLine",
    "property `{0}` can be omitted and must be of type `string`",
    "firstLine"
  )), !1) : typeof i.configuration < "u" && typeof i.configuration != "string" ? (t.error(e(
    "opt.configuration",
    "property `{0}` can be omitted and must be of type `string`",
    "configuration"
  )), !1) : f(i.aliases) ? f(i.mimetypes) ? typeof i.icon < "u" && (typeof i.icon != "object" || typeof i.icon.light != "string" || typeof i.icon.dark != "string") ? (t.error(e(
    "opt.icon",
    "property `{0}` can be omitted and must be of type `object` with properties `{1}` and `{2}` of type `string`",
    "icon",
    "light",
    "dark"
  )), !1) : !0 : (t.error(e(
    "opt.mimetypes",
    "property `{0}` can be omitted and must be of type `string[]`",
    "mimetypes"
  )), !1) : (t.error(e(
    "opt.aliases",
    "property `{0}` can be omitted and must be of type `string[]`",
    "aliases"
  )), !1) : (t.error(e(
    "opt.filenames",
    "property `{0}` can be omitted and must be of type `string[]`",
    "filenames"
  )), !1) : (t.error(e(
    "opt.extensions",
    "property `{0}` can be omitted and must be of type `string[]`",
    "extensions"
  )), !1) : (t.error(e(
    "invalid.empty",
    "Empty value for `contributes.{0}`",
    l.name
  )), !1);
}
export {
  h as W,
  l
};
