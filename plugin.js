"use strict";
var plugins = (() => {
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

  // plugin.js
  var plugin_exports = {};
  __export(plugin_exports, {
    Plugin: () => Plugin
  });

  // ../../shared/settings-ui/tokens.css
  var tokens_default = "/*\n * Thymer Plugin Settings UI \u2014 Design Tokens\n *\n * Canonical CSS custom properties for the plugin settings panel system.\n * Plugins consume this verbatim; component CSS reads from these vars.\n *\n * See shared/settings-ui/DESIGN.md for rationale.\n *\n * Thymer var names verified against library/css-tokens/ (ripped from shipped CSS).\n * Fallbacks use color-mix(currentColor) so panels work when a token is absent.\n */\n\n.tps-panel {\n  /* \u2500\u2500 Color: text \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */\n  --tps-text:           var(--text-default,   currentColor);\n  --tps-text-muted:     var(--text-muted,     color-mix(in srgb, currentColor 62%, transparent));\n  --tps-text-faint:     var(--text-subtle,    color-mix(in srgb, currentColor 48%, transparent));\n  --tps-text-whisper:   var(--text-disabled,  color-mix(in srgb, currentColor 34%, transparent));\n\n  /* \u2500\u2500 Color: surfaces \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */\n  --tps-bg-input:       var(--input-bg-color,\n                        color-mix(in srgb, currentColor 6%, transparent));\n  --tps-bg-hover:       var(--hover-subtle,\n                        var(--sidebar-bg-hover,\n                        color-mix(in srgb, currentColor 8%, transparent)));\n  --tps-bg-active:      var(--active-bg-color,\n                        color-mix(in srgb, currentColor 12%, transparent));\n\n  /* \u2500\u2500 Color: borders / dividers \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */\n  --tps-divider:        var(--divider-color,\n                        var(--thin-divider-color,\n                        color-mix(in srgb, currentColor 14%, transparent)));\n  --tps-border:         var(--input-border-color,\n                        var(--divider-color,\n                        color-mix(in srgb, currentColor 22%, transparent)));\n  --tps-border-strong:  var(--titlebar-border-color,\n                        var(--selection-border,\n                        color-mix(in srgb, currentColor 32%, transparent)));\n\n  /* \u2500\u2500 Color: accent (Thymer uses --logo-color) \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */\n  --tps-accent:         var(--logo-color, currentColor);\n  --tps-accent-soft:    color-mix(in srgb, var(--tps-accent) 15%, transparent);\n  --tps-accent-strong:  color-mix(in srgb, var(--tps-accent) 80%, var(--tps-text));\n\n  /* \u2500\u2500 Color: semantic \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */\n  --tps-danger:         var(--enum-red-fg, #ef4444);\n  --tps-danger-soft:    color-mix(in srgb, var(--tps-danger) 15%, transparent);\n  --tps-warning:        var(--text-warning,\n                        var(--enum-yellow-fg, #f59e0b));\n  --tps-success:        var(--enum-green-fg, #10b981);\n  --tps-success-soft:   color-mix(in srgb, var(--tps-success) 12%, transparent);\n\n  --tps-on-accent:      var(--text-on-accent, light-dark(#111111, #fafafa));\n\n  /* Panel chrome */\n  --tps-panel-bg:       var(--panel-bg-color, transparent);\n  --tps-swatch-inset:   color-mix(in srgb, var(--tps-text) 8%, transparent);\n\n  /* \u2500\u2500 Typography \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */\n  /* Font is INHERITED from Thymer's panel chrome (see components.css). */\n\n  --tps-fs-title:       18px;\n  --tps-fs-lede:        13px;\n  --tps-fs-section:     11px;\n  --tps-fs-hint:        12px;\n  --tps-fs-label:       13px;\n  --tps-fs-desc:        12px;\n  --tps-fs-body:        13px;\n  --tps-fs-value:       12px;\n  --tps-fs-button:      12px;\n  --tps-fs-list-header: 10px;\n\n  --tps-lh-tight:       1;\n  --tps-lh-snug:        1.2;\n  --tps-lh-base:        1.4;\n  --tps-lh-loose:       1.5;\n\n  --tps-fw-regular:     400;\n  --tps-fw-medium:      500;\n  --tps-fw-semibold:    600;\n  --tps-fw-bold:        700;\n\n  --tps-ls-section:     0.06em;\n  --tps-ls-list:        0.08em;\n  --tps-ls-title:       0;\n\n  /* \u2500\u2500 Spacing (8px scale) \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */\n  --tps-space-1:        4px;\n  --tps-space-2:        8px;\n  --tps-space-3:        12px;\n  --tps-space-4:        16px;\n  --tps-space-5:        24px;\n  --tps-space-6:        32px;\n  --tps-space-7:        48px;\n\n  /* \u2500\u2500 Radii \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */\n  --tps-radius-sm:      4px;\n  --tps-radius-md:      6px;\n  --tps-radius-lg:      8px;\n  --tps-radius-pill:    999px;\n  --tps-radius-circle:  50%;\n\n  /* \u2500\u2500 Motion \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */\n  --tps-ease-out:       cubic-bezier(0.2, 0.6, 0.2, 1);\n  --tps-ease-in-out:    cubic-bezier(0.4, 0, 0.2, 1);\n  --tps-dur-fast:       80ms;\n  --tps-dur-base:       160ms;\n\n  --tps-shadow-thumb:   0 1px 3px color-mix(in srgb, var(--tps-text) 28%, transparent);\n\n  /* \u2500\u2500 Component dimensions \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */\n  --tps-control-h-sm:   28px;\n  --tps-control-h-md:   32px;\n  --tps-input-w:        64px;\n  --tps-num-step-w:     28px;\n  --tps-swatch-size:    22px;\n  --tps-thumb-size:     16px;\n  --tps-track-h:        6px;\n\n  --tps-slider-track:   color-mix(in srgb, var(--tps-text) 22%, transparent);\n  --tps-slider-thumb-border: color-mix(in srgb, var(--tps-text) 28%, transparent);\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .tps-panel {\n    --tps-dur-fast:     1ms;\n    --tps-dur-base:     1ms;\n  }\n}\n";

  // ../../shared/settings-ui/components.css
  var components_default = `/*
 * Thymer Plugin Panel \u2014 Component Primitives
 *
 * All primitives scope under .tps-panel. Plugin-specific styles live elsewhere.
 * Reads tokens from tokens.css.
 */

/* \u2500\u2500 Panel root \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

/* Inherit Thymer's font + sizing \u2014 DO NOT override. plugin-collection-icons
   demonstrates the right approach: simply \`font-family: inherit\`. Forcing a
   custom var fights both Thymer's body font AND the .ti icon font. */
.tps-panel {
  font-family: inherit;
  font-size: var(--tps-fs-body);
  line-height: var(--tps-lh-base);
  color: var(--tps-text);
  padding: 0 var(--tps-space-5) var(--tps-space-7);
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  overflow: auto;
}

.tps-panel *,
.tps-panel *::before,
.tps-panel *::after {
  box-sizing: border-box;
}

/* Mono opt-ins are explicit per-element, never via a panel-wide override. */
.tps-panel .tps-num-input,
.tps-panel .tps-slider-value,
.tps-panel .tps-mono,
.tps-panel .tps-mono * {
  font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, "Courier New", monospace;
}

/* \u2500\u2500 Title block \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

.tps-title {
  font-size: var(--tps-fs-title);
  line-height: var(--tps-lh-snug);
  font-weight: var(--tps-fw-semibold);
  letter-spacing: var(--tps-ls-title);
  color: var(--tps-text);
  margin: 0 0 var(--tps-space-1);
}

.tps-lede {
  font-size: var(--tps-fs-lede);
  line-height: var(--tps-lh-loose);
  color: var(--tps-text-muted);
  margin: 0 0 var(--tps-space-3);
}

/* \u2500\u2500 Canonical plugin header \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

.tps-plugin-header {
  position: relative;
  margin: var(--tps-space-5) 0 var(--tps-space-5);
  padding: 18px var(--tps-space-4);
  overflow: hidden;
  background:
    linear-gradient(to right,
      #f26548  8%, #f26548 28%,
      #fbac56 28%, #fbac56 48%,
      #fff460 48%, #fff460 68%,
      #f067a6 68%, #f067a6 88%,
      #03bdf2 88%
    ) top left / 100% 1px no-repeat,
    linear-gradient(to right,
      #f26548  0%, #f26548 12%,
      #fbac56 12%, #fbac56 32%,
      #fff460 32%, #fff460 52%,
      #f067a6 52%, #f067a6 72%,
      #03bdf2 72%, #03bdf2 92%
    ) bottom left / 100% 1px no-repeat,
    var(--tps-panel-bg, var(--panel-bg-color, var(--plg-ci-theme-bg, transparent)));
  border-left: 1px solid #f26548;
  border-right: 1px solid #03bdf2;
}

.tps-plugin-header-logo {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: var(--tps-space-2, 8px);
  margin: 0 0 var(--tps-space-3, 12px);
  background: var(--tps-bg-hover);
  border-radius: var(--tps-radius-md, 6px);
}

.tps-plugin-header-logo-icon {
  flex: 0 0 auto;
  font-size: 34px;
  line-height: 1;
  color: var(--tps-text, currentColor);
}

.tps-plugin-header-title {
  font-size: 22px;
  line-height: var(--tps-lh-snug, 1.2);
  font-weight: var(--tps-fw-semibold, 600);
  letter-spacing: 0;
  color: var(--tps-text, var(--text-default, currentColor));
  margin: 0 0 var(--tps-space-3, 12px);
}

.tps-plugin-header-version {
  display: inline-flex;
  flex: 0 0 auto;
  align-items: baseline;
  align-self: baseline;
  font-size: 11px;
  line-height: inherit;
  font-weight: var(--tps-fw-medium, 500);
  letter-spacing: 0;
  color: var(--tps-text-faint) !important;
  white-space: nowrap;
}

.tps-plugin-header-lede {
  font-size: 14px;
  line-height: var(--tps-lh-base, 1.4);
  color: var(--tps-text-muted);
  margin: 0 0 var(--tps-space-3, 12px);
}

.tps-plugin-header-helper-wrap {
  margin: 0 0 var(--tps-space-3, 12px);
}

.tps-plugin-header-helper-toggle {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 0;
  margin: 0;
  border: 0;
  background: transparent;
  color: inherit;
  opacity: 0.28;
  font: inherit;
  font-size: var(--tps-fs-section, 11px);
  font-weight: var(--tps-fw-semibold, 600);
  line-height: var(--tps-lh-tight, 1);
  letter-spacing: var(--tps-ls-section, 0.06em);
  text-transform: uppercase;
  cursor: pointer;
  transition: opacity var(--tps-dur-fast, 80ms) var(--tps-ease-out, ease-out);
}

.tps-plugin-header-helper-toggle:hover {
  opacity: 0.72;
}

.tps-plugin-header-helper-toggle:focus-visible {
  outline: 1px solid color-mix(in srgb, var(--tps-accent, currentColor) 45%, transparent);
  outline-offset: 2px;
}

.tps-plugin-header-helper-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 auto;
  width: 13px;
  height: 13px;
  font-size: 13px;
  line-height: 1;
  color: inherit;
}

.tps-plugin-header-helper-wrap[data-open="true"] .tps-plugin-header-helper-toggle {
  opacity: 0.72;
}

.tps-plugin-header-helper-wrap[data-open="true"] .tps-plugin-header-helper-toggle:hover {
  opacity: 1;
}

.tps-plugin-header-helper-body {
  display: none;
  margin: 8px 0 0;
  padding-left: 18px;
}

.tps-plugin-header-helper-wrap[data-open="true"] .tps-plugin-header-helper-body {
  display: block;
  cursor: pointer;
}

.tps-plugin-header-helper-line {
  margin: 0;
  font-size: var(--tps-fs-hint, 12px);
  line-height: var(--tps-lh-base, 1.4);
  color: inherit;
  opacity: 0.72;
  transition: opacity var(--tps-dur-fast, 80ms) var(--tps-ease-out, ease-out);
}

.tps-plugin-header-helper-wrap[data-open="true"] .tps-plugin-header-helper-body:hover .tps-plugin-header-helper-line {
  opacity: 1;
}

.tps-plugin-header-attr {
  position: relative;
  display: flex;
  align-items: baseline;
  flex-wrap: wrap;
  gap: 0;
  width: 100%;
  font-size: 11.5px;
  line-height: var(--tps-lh-base, 1.4);
  color: var(--tps-text-muted);
  margin: var(--tps-space-3, 12px) 0 0;
  padding-top: var(--tps-space-3, 12px);
  border-top: 0;
}

.tps-plugin-header-attr::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: clamp(40%, 50%, 55%);
  height: 1px;
  background: var(--tps-bg-hover);
}

.tps-plugin-header-link-group + .tps-plugin-header-link-group {
  margin-left: var(--tps-space-3, 12px);
  padding-left: var(--tps-space-3, 12px);
  border-left: 1px solid var(--tps-bg-hover);
}

.tps-plugin-header-icon,
.tps-plugin-header-attr .ti {
  display: inline-flex;
  flex: 0 0 auto;
  align-items: center;
  justify-content: center;
  width: 12px;
  height: 12px;
  font-size: 12px;
  line-height: 1;
  color: var(--tps-text-muted);
  transform: translateY(2px);
  margin-right: var(--tps-space-1, 4px);
}

.tps-plugin-header-iconify {
  background-color: currentColor;
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  -webkit-mask-size: 100% 100%;
  mask-size: 100% 100%;
}

.tps-plugin-header-iconify-github {
  --tps-iconify-github: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='black' d='M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.418-1.305.762-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12'/%3E%3C/svg%3E");
  -webkit-mask-image: var(--tps-iconify-github);
  mask-image: var(--tps-iconify-github);
}

.tps-plugin-header-link {
  color: inherit;
  text-decoration: underline;
  text-decoration-color: color-mix(in srgb, currentColor 42%, transparent);
  transition: color var(--tps-dur-fast, 80ms) var(--tps-ease-out, ease-out),
              text-decoration-color var(--tps-dur-fast, 80ms) var(--tps-ease-out, ease-out),
              filter var(--tps-dur-fast, 80ms) var(--tps-ease-out, ease-out);
}

.tps-plugin-header-link--blue,
.tps-plugin-header-link--blue:hover {
  color: #03bdf2;
  text-decoration-color: #03bdf2;
}

.tps-plugin-header-link--pink,
.tps-plugin-header-link--pink:hover {
  color: #f067a6;
  text-decoration-color: #f067a6;
}

.tps-plugin-header-link--muted,
.tps-plugin-header-link--muted:hover {
  color: var(--tps-text-faint) !important;
  text-decoration-color: color-mix(in srgb, currentColor 42%, transparent);
}

.tps-plugin-header-link:hover {
  text-decoration: none;
  text-decoration-color: transparent;
  filter: brightness(1.2);
}

/* \u2500\u2500 Section \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

.tps-section {
  padding: 0;
}

.tps-section + .tps-section {
  border-top: 1px solid var(--tps-divider);
  margin-top: var(--tps-space-4);
  padding-top: var(--tps-space-4);
}

.tps-section-label {
  display: block;
  font-size: var(--tps-fs-section);
  line-height: var(--tps-lh-tight);
  font-weight: var(--tps-fw-semibold);
  letter-spacing: var(--tps-ls-section);
  text-transform: uppercase;
  color: var(--tps-text-muted);
  margin: 0 0 var(--tps-space-2);
}

.tps-section-hint {
  font-size: var(--tps-fs-hint);
  line-height: var(--tps-lh-base);
  color: var(--tps-text-muted);
  margin: 0 0 var(--tps-space-3);
}

.tps-section-body {
  display: flex;
  flex-direction: column;
  gap: var(--tps-space-3);
  margin-top: var(--tps-space-2);
}

.tps-section-body:first-child {
  margin-top: 0;
}

/* When the body is full of list rows (mode rows), drop the gap and the top
   margin entirely so the first row's hover background sits flush under the
   section label and adjacent rows tile with no dead space between them. */
.tps-section-body:has(> .tps-list-row),
.tps-section-body:has(> .tps-opt) {
  margin-top: 0;
  gap: 0;
}

/* Collapsible variant: header is a button, body is hidden when closed */

.tps-section--collapsible > .tps-section-header {
  display: flex;
  align-items: center;
  gap: var(--tps-space-2);
  width: 100%;
  min-height: 34px;
  padding: 0;
  margin: 0 0 var(--tps-space-2);
  background: transparent;
  border: 0;
  color: inherit;
  font: inherit;
  text-align: left;
  cursor: pointer;
}

.tps-section--collapsible > .tps-section-header:hover .tps-section-label {
  color: var(--tps-text);
}

.tps-section--collapsible > .tps-section-header .tps-section-label {
  margin: 0;
}

.tps-section-chev {
  display: inline-block;
  width: 10px;
  font-size: 10px;
  line-height: 1;
  color: var(--tps-text-faint);
  transition: transform var(--tps-dur-base) var(--tps-ease-out);
}

.tps-section--collapsible[data-open="true"] .tps-section-chev {
  transform: rotate(90deg);
}

.tps-section-summary {
  margin-left: auto;
  min-width: 0;
  min-height: 18px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  font-size: var(--tps-fs-hint);
  color: var(--tps-text-muted);
  font-weight: var(--tps-fw-regular);
  letter-spacing: 0;
  text-transform: none;
}

/* Reserve header height when expanded; summary text only shows collapsed */
.tps-section--collapsible[data-open="true"] .tps-section-summary {
  visibility: hidden;
}

.tps-section--collapsible[data-open="false"] > .tps-section-body {
  display: none;
}

/* \u2500\u2500 Option row (checkbox / radio + label + desc) \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

.tps-opt {
  display: grid;
  grid-template-columns: 18px 1fr;
  column-gap: var(--tps-space-3);
  row-gap: 0;
  align-items: start;
  padding: 6px 10px;
  margin: 0 -10px;
  border-radius: var(--tps-radius-md);
  cursor: pointer;
  transition: background-color var(--tps-dur-fast) var(--tps-ease-out);
}

/* Stack option rows tight so the hover background of one meets the next
   without a visible gap above. Outer section gap is handled by the section
   itself, not by spacing between opts. */
.tps-section-body > .tps-opt + .tps-opt {
  margin-top: 0;
}
.tps-section-body:has(> .tps-opt) {
  gap: 0;
}

.tps-opt:hover {
  background: var(--tps-bg-hover);
}

.tps-opt > input[type="checkbox"],
.tps-opt > input[type="radio"] {
  grid-column: 1;
  grid-row: 1;
  align-self: center;
  width: 16px;
  height: 16px;
  margin: 0;
  accent-color: var(--tps-accent);
  cursor: pointer;
}

.tps-opt > .tps-opt-label {
  grid-column: 2;
  grid-row: 1;
  font-size: var(--tps-fs-label);
  line-height: var(--tps-lh-base);
  font-weight: var(--tps-fw-medium);
  color: var(--tps-text);
  cursor: pointer;
  transition: color var(--tps-dur-fast) var(--tps-ease-out);
}

.tps-opt > .tps-opt-desc {
  grid-column: 2;
  grid-row: 2;
  margin-top: 1px;
  font-size: var(--tps-fs-desc);
  line-height: var(--tps-lh-base);
  color: var(--tps-text-muted);
  cursor: pointer;
}

.tps-section-body > .tps-opt-note {
  margin: var(--tps-space-2) -10px 0;
  padding: 0 10px 0 calc(10px + 18px + var(--tps-space-3));
  font-size: var(--tps-fs-desc);
  line-height: var(--tps-lh-base);
  color: var(--tps-text-muted);
}

.tps-opt > input:checked ~ .tps-opt-label {
  color: var(--tps-accent);
}

/* Checkbox option + nested number row (e.g. tuned value under a toggle) */
.tps-section-body:has(> .tps-opt-group) {
  margin-top: 0;
  gap: 0;
}

.tps-opt-group {
  display: flex;
  flex-direction: column;
}

.tps-opt-group + .tps-opt-group {
  margin-top: 0;
}

.tps-opt-group .tps-opt-group__value,
.tps-opt-group > .tps-num {
  margin-left: calc(18px + var(--tps-space-3));
  margin-top: var(--tps-space-1);
  margin-bottom: var(--tps-space-3);
  padding-right: 10px;
  max-width: 100%;
  box-sizing: border-box;
}

.tps-opt-group .tps-num-grid {
  margin-left: calc(18px + var(--tps-space-3));
  margin-top: var(--tps-space-1);
  margin-bottom: var(--tps-space-3);
  grid-template-columns: minmax(0, 1fr);
}

/* \u2500\u2500 Numeric stepper \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

.tps-num {
  display: flex;
  align-items: center;
  gap: var(--tps-space-1);
}

.tps-num-label {
  flex: 0 0 auto;
  min-width: 0;
  font-size: var(--tps-fs-label);
  color: var(--tps-text);
  margin-right: var(--tps-space-2);
}

.tps-num-step,
.tps-num-input,
.tps-num-reset {
  font-family: inherit;
  font-size: var(--tps-fs-button);
  height: var(--tps-control-h-sm);
  border: 1px solid var(--tps-divider);
  border-radius: var(--tps-radius-sm);
  background: transparent;
  color: var(--tps-text);
  transition: border-color var(--tps-dur-fast) var(--tps-ease-out),
              background-color var(--tps-dur-fast) var(--tps-ease-out),
              color var(--tps-dur-fast) var(--tps-ease-out);
}

.tps-num-step {
  width: var(--tps-num-step-w);
  font-size: 14px;
  line-height: 1;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.tps-num-step:hover {
  border-color: var(--tps-border);
  background: var(--tps-bg-hover);
}

.tps-num-step:active {
  background: var(--tps-bg-active);
}

.tps-num-input {
  width: var(--tps-input-w);
  padding: 0 var(--tps-space-2);
  background: var(--tps-bg-input);
  text-align: center;
  font-variant-numeric: tabular-nums;
  -moz-appearance: textfield;
}

.tps-num-input::-webkit-outer-spin-button,
.tps-num-input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

.tps-num-input:focus {
  outline: none;
  border-color: var(--tps-accent);
}

.tps-num-unit {
  font-size: var(--tps-fs-hint);
  color: var(--tps-text-muted);
  margin: 0 var(--tps-space-2);
}

.tps-num-reset {
  font-size: 11px;
  color: var(--tps-text-muted);
  padding: 0 var(--tps-space-2);
  cursor: pointer;
}

.tps-num-reset:hover {
  color: var(--tps-text);
  border-color: var(--tps-border);
}

.tps-num-reset[hidden] {
  display: none !important;
}

/* Stacked layout: label / control row in a 200px / 1fr grid */

.tps-num-grid {
  display: grid;
  grid-template-columns: 200px 1fr;
  align-items: center;
  column-gap: var(--tps-space-3);
  row-gap: var(--tps-space-2);
}

.tps-num-grid > .tps-num-label {
  margin: 0;
  text-align: left;
}

.tps-num-grid > .tps-num {
  justify-self: start;
}

/* \u2500\u2500 Slider row \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

/* Shared range styling for sliderRow and any other range input in a panel.
   Exclude hue pickers that paint their own gradient track. */
.tps-panel input[type="range"]:not(.plg-collection-colors__hue) {
  width: 100%;
  height: 22px;
  appearance: none;
  -webkit-appearance: none;
  background: transparent;
  outline: none;
  cursor: pointer;
  touch-action: pan-y;
}

.tps-panel input[type="range"]:not(.plg-collection-colors__hue)::-webkit-slider-runnable-track {
  height: var(--tps-track-h);
  border-radius: 3px;
  background: var(--tps-slider-track);
}

.tps-panel input[type="range"]:not(.plg-collection-colors__hue)::-moz-range-track {
  height: var(--tps-track-h);
  border-radius: 3px;
  background: var(--tps-slider-track);
}

.tps-panel input[type="range"]:not(.plg-collection-colors__hue)::-webkit-slider-thumb {
  -webkit-appearance: none;
  width: var(--tps-thumb-size);
  height: var(--tps-thumb-size);
  border-radius: var(--tps-radius-circle);
  background: var(--tps-accent);
  border: 2px solid var(--tps-slider-thumb-border);
  box-shadow: var(--tps-shadow-thumb);
  cursor: grab;
  margin-top: -5px;
}

.tps-panel input[type="range"]:not(.plg-collection-colors__hue)::-moz-range-thumb {
  width: var(--tps-thumb-size);
  height: var(--tps-thumb-size);
  border-radius: var(--tps-radius-circle);
  background: var(--tps-accent);
  border: 2px solid var(--tps-slider-thumb-border);
  box-shadow: var(--tps-shadow-thumb);
  cursor: grab;
}

.tps-panel input[type="range"]:not(.plg-collection-colors__hue):active::-webkit-slider-thumb {
  cursor: grabbing;
}

.tps-slider {
  display: grid;
  grid-template-columns: 90px 1fr 56px auto;
  align-items: center;
  gap: var(--tps-space-3);
}

.tps-slider-label {
  font-size: var(--tps-fs-section);
  font-weight: var(--tps-fw-semibold);
  letter-spacing: var(--tps-ls-section);
  text-transform: uppercase;
  color: var(--tps-text-muted);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.tps-slider-input {
  width: 100%;
  height: 22px;
  appearance: none;
  -webkit-appearance: none;
  background: transparent;
  outline: none;
  cursor: pointer;
  touch-action: pan-y;
}

.tps-slider-input::-webkit-slider-runnable-track {
  height: var(--tps-track-h);
  border-radius: 3px;
  background: var(--tps-slider-track);
}

.tps-slider-input::-moz-range-track {
  height: var(--tps-track-h);
  border-radius: 3px;
  background: var(--tps-slider-track);
}

.tps-slider-input::-webkit-slider-thumb {
  -webkit-appearance: none;
  width: var(--tps-thumb-size);
  height: var(--tps-thumb-size);
  border-radius: var(--tps-radius-circle);
  background: var(--tps-accent);
  border: 2px solid var(--tps-slider-thumb-border);
  box-shadow: var(--tps-shadow-thumb);
  cursor: grab;
  margin-top: -5px;
}

.tps-slider-input::-moz-range-thumb {
  width: var(--tps-thumb-size);
  height: var(--tps-thumb-size);
  border-radius: var(--tps-radius-circle);
  background: var(--tps-accent);
  border: 2px solid var(--tps-slider-thumb-border);
  box-shadow: var(--tps-shadow-thumb);
  cursor: grab;
}

.tps-slider-input:active::-webkit-slider-thumb {
  cursor: grabbing;
}

/* Hue picker keeps its gradient track; only style the thumb. */
.tps-panel input[type="range"].plg-collection-colors__hue {
  width: 100%;
  height: 10px;
  appearance: none;
  -webkit-appearance: none;
  outline: none;
  cursor: pointer;
}

.tps-panel input[type="range"].plg-collection-colors__hue::-webkit-slider-thumb {
  -webkit-appearance: none;
  width: 14px;
  height: 14px;
  border-radius: var(--tps-radius-circle);
  background: var(--panel-bg-color, var(--tps-panel-bg, currentColor));
  border: 2px solid var(--tps-slider-thumb-border);
  box-shadow: var(--tps-shadow-thumb);
  cursor: grab;
}

.tps-panel input[type="range"].plg-collection-colors__hue::-moz-range-thumb {
  width: 14px;
  height: 14px;
  border-radius: var(--tps-radius-circle);
  background: var(--panel-bg-color, var(--tps-panel-bg, currentColor));
  border: 2px solid var(--tps-slider-thumb-border);
  box-shadow: var(--tps-shadow-thumb);
  cursor: grab;
}

.tps-slider-value {
  font-family: var(--tps-font-mono);
  font-size: var(--tps-fs-value);
  color: var(--tps-text);
  text-align: right;
  font-variant-numeric: tabular-nums;
}

/* \u2500\u2500 Swatch + grid \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

.tps-swatch-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, var(--tps-swatch-size));
  gap: var(--tps-space-2) 6px;
}

.tps-swatch {
  width: var(--tps-swatch-size);
  height: var(--tps-swatch-size);
  border-radius: var(--tps-radius-circle);
  border: 0;
  padding: 0;
  cursor: pointer;
  outline: none;
  box-shadow: inset 0 0 0 1px var(--tps-swatch-inset);
  transition: transform var(--tps-dur-fast) var(--tps-ease-out),
              box-shadow var(--tps-dur-fast) var(--tps-ease-out);
}

.tps-swatch:hover {
  transform: scale(1.1);
}

.tps-swatch[aria-pressed="true"] {
  box-shadow: 0 0 0 2px var(--tps-accent);
}

/* \u2500\u2500 List rows \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

.tps-list {
  display: flex;
  flex-direction: column;
}

.tps-list-header {
  display: grid;
  grid-template-columns: 18px 1fr auto;
  align-items: center;
  gap: var(--tps-space-3);
  padding: var(--tps-space-2) var(--tps-space-3);
  border-bottom: 1px solid var(--tps-divider);
  font-size: var(--tps-fs-list-header);
  font-weight: var(--tps-fw-bold);
  letter-spacing: var(--tps-ls-list);
  text-transform: uppercase;
  color: var(--tps-text-faint);
}

.tps-list-row {
  display: grid;
  grid-template-columns: 18px 1fr auto;
  align-items: center;
  gap: var(--tps-space-3);
  padding: var(--tps-space-2) var(--tps-space-3);
  border-bottom: 1px solid var(--tps-divider);
  transition: background-color var(--tps-dur-fast) var(--tps-ease-out);
}

.tps-list-row:last-child {
  border-bottom: 0;
}

.tps-list-row:hover {
  background: var(--tps-bg-hover);
}

.tps-list-name {
  font-size: var(--tps-fs-label);
  color: var(--tps-text);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

/* \u2500\u2500 Tabs / segmented control \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

.tps-tabs {
  display: inline-flex;
  align-items: center;
  gap: var(--tps-space-1);
  padding: 0;
}

.tps-tab {
  height: var(--tps-control-h-sm);
  padding: 0 var(--tps-space-2);
  font-family: inherit;
  font-size: var(--tps-fs-button);
  font-weight: var(--tps-fw-medium);
  color: var(--tps-text-muted);
  background: transparent;
  border: 1px solid transparent;
  border-radius: var(--tps-radius-sm);
  cursor: pointer;
  transition: background-color var(--tps-dur-fast) var(--tps-ease-out),
              border-color var(--tps-dur-fast) var(--tps-ease-out),
              color var(--tps-dur-fast) var(--tps-ease-out);
}

.tps-tab:hover {
  background: var(--tps-bg-hover);
  color: var(--tps-text);
}

.tps-tab[aria-pressed="true"],
.tps-tab[aria-selected="true"] {
  background: var(--tps-accent-soft);
  color: var(--tps-accent);
  border-color: color-mix(in srgb, var(--tps-accent) 50%, transparent);
}

/* \u2500\u2500 Buttons \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

.tps-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--tps-space-1);
  height: var(--tps-control-h-sm);
  padding: 0 var(--tps-space-3);
  font-family: inherit;
  font-size: var(--tps-fs-button);
  font-weight: var(--tps-fw-medium);
  border-radius: var(--tps-radius-sm);
  border: 1px solid transparent;
  cursor: pointer;
  transition: background-color var(--tps-dur-fast) var(--tps-ease-out),
              border-color var(--tps-dur-fast) var(--tps-ease-out),
              color var(--tps-dur-fast) var(--tps-ease-out);
}

.tps-button--md { height: var(--tps-control-h-md); padding: 0 var(--tps-space-4); }

.tps-button--primary {
  background: var(--tps-accent);
  color: var(--tps-on-accent);
}

.tps-button--primary:hover {
  filter: brightness(1.08);
}

.tps-button--ghost {
  background: transparent;
  border-color: var(--tps-divider);
  color: var(--tps-text);
}

.tps-button--ghost:hover {
  background: var(--tps-bg-hover);
  border-color: var(--tps-border);
}

.tps-button--danger {
  background: transparent;
  border-color: var(--tps-divider);
  color: var(--tps-text-muted);
}

.tps-button--danger:hover {
  background: var(--tps-danger-soft);
  border-color: color-mix(in srgb, var(--tps-danger) 40%, transparent);
  color: var(--tps-danger);
}

/* \u2500\u2500 Focus rings (custom controls only \u2014 native inputs use accent-color) \u2500 */

.tps-tab:focus-visible,
.tps-button:focus-visible,
.tps-num-step:focus-visible,
.tps-num-reset:focus-visible,
.tps-swatch:focus-visible {
  outline: 2px solid var(--tps-accent);
  outline-offset: 2px;
}

/* \u2500\u2500 Inset card variant (rare \u2014 for palette-picker body, etc.) \u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

.tps-card {
  padding: var(--tps-space-3);
  border-radius: var(--tps-radius-lg);
  background: var(--tps-bg-input);
  border: 1px solid var(--tps-divider);
}
`;

  // ../../shared/settings-ui/color-field.css
  var color_field_default = `/*
 * colorField \u2014 shared color picker (Theme | Tailwind | Custom).
 * Scoped under .tps-panel .tps-color-field; styled through --tps-* tokens.
 * Every selectable swatch is the same .tps-cf-dot across all three tabs.
 */

.tps-panel .tps-color-field { display: block; }

/* \u2500\u2500 Tabs \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.tps-panel .tps-cf-tabs {
  display: grid; grid-auto-flow: column; grid-auto-columns: 1fr; gap: 4px;
  background: var(--tps-bg-input, rgba(127,127,127,0.06));
  border: 1px solid var(--tps-border, rgba(127,127,127,0.14));
  border-radius: var(--tps-radius-md, 8px);
  padding: 4px; margin-bottom: var(--tps-space-3, 12px);
}
.tps-panel .tps-cf-tab {
  cursor: pointer; border: 0; background: transparent;
  border-radius: var(--tps-radius-sm, 6px); padding: 8px 10px; font: inherit;
  font-size: var(--tps-fs-body, 13px); font-weight: var(--tps-fw-semibold, 600);
  color: var(--tps-text-muted, rgba(127,127,127,0.75));
  transition: background var(--tps-dur-fast, 80ms) var(--tps-ease-out, ease),
              color var(--tps-dur-fast, 80ms) var(--tps-ease-out, ease);
}
.tps-panel .tps-cf-tab:hover { color: var(--tps-text, inherit); }
.tps-panel .tps-cf-tab.is-active {
  background: var(--tps-panel-bg, var(--bg-default, #fff));
  color: var(--tps-text, inherit); box-shadow: 0 1px 2px rgba(0,0,0,0.12);
}

/* \u2500\u2500 Panes \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.tps-panel .tps-cf-pane { display: none; }
.tps-panel .tps-cf-pane.is-active { display: block; }

/* \u2500\u2500 Featured theme picks \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.tps-panel .tps-cf-featured {
  display: grid; grid-template-columns: 1fr 1fr; gap: 8px;
  margin-bottom: var(--tps-space-3, 12px);
}
.tps-panel .tps-cf-tile {
  display: flex; align-items: center; gap: 10px; width: 100%; text-align: left; cursor: pointer;
  background: var(--tps-bg-hover, rgba(127,127,127,0.04));
  border: 1px solid var(--tps-border, rgba(127,127,127,0.14));
  border-radius: var(--tps-radius-md, 8px); padding: 10px 12px; color: var(--tps-text, inherit);
  transition: border-color var(--tps-dur-fast, 80ms) var(--tps-ease-out, ease),
              background var(--tps-dur-fast, 80ms) var(--tps-ease-out, ease);
}
.tps-panel .tps-cf-tile:hover { border-color: var(--tps-border-strong, rgba(127,127,127,0.28)); }
.tps-panel .tps-cf-tile.is-sel {
  border-color: var(--tps-accent, currentColor);
  background: var(--tps-accent-soft, rgba(127,127,127,0.08));
}
.tps-panel .tps-cf-tile-dot {
  width: 22px; height: 22px; flex: 0 0 auto; border-radius: var(--tps-radius-sm, 6px);
  box-shadow: inset 0 0 0 1px var(--tps-swatch-inset, rgba(127,127,127,0.18));
}
.tps-panel .tps-cf-tile-label {
  font-size: var(--tps-fs-body, 13px); font-weight: var(--tps-fw-semibold, 600);
  white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
}

/* \u2500\u2500 Groups + the universal swatch dot \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.tps-panel .tps-cf-group { margin-bottom: var(--tps-space-3, 12px); }
.tps-panel .tps-cf-group-head { display: flex; align-items: baseline; gap: 8px; margin-bottom: var(--tps-space-2, 8px); }
.tps-panel .tps-cf-group-label {
  font-size: var(--tps-fs-section, 11px); letter-spacing: 0.06em; text-transform: uppercase;
  color: var(--tps-text-faint, var(--tps-text-muted, rgba(127,127,127,0.6))); font-weight: var(--tps-fw-semibold, 600);
}
.tps-panel .tps-cf-group-hint { font-size: var(--tps-fs-section, 11px); color: var(--tps-text-faint, rgba(127,127,127,0.5)); }

/* \u2500\u2500 Swatches: square dots that fill the row width (22 across in the Tailwind
 *    hue row); every swatch elsewhere matches that width. \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.tps-panel .tps-cf-dots {
  display: grid; grid-template-columns: repeat(22, minmax(0, 1fr)); gap: 5px;
  /* explicit resets so a stale accumulated .tps-cf-dots rule (old edge-to-edge
   * build injected an inset-ring outline) can't linger after a plugin reload. */
  border: 0; border-radius: 0; overflow: visible; box-shadow: none; background: none; padding: 0;
}
.tps-panel .tps-cf-dot {
  aspect-ratio: 1 / 1; min-width: 0; width: 100%; height: auto; border: 0; padding: 0; margin: 0;
  cursor: pointer; position: relative;
  border-radius: var(--tps-radius-sm, 6px);
  box-shadow: inset 0 0 0 1px var(--tps-swatch-inset, rgba(127,127,127,0.18));
  transition: transform var(--tps-dur-fast, 80ms) var(--tps-ease-out, ease),
              box-shadow var(--tps-dur-fast, 80ms) var(--tps-ease-out, ease);
}
.tps-panel .tps-cf-dot:hover { transform: scale(1.12); z-index: 3; }
.tps-panel .tps-cf-dot:focus-visible,
.tps-panel .tps-cf-dot.is-sel,
.tps-panel .tps-cf-dot.is-active {
  outline: none; z-index: 4;
  box-shadow: inset 0 0 0 1px var(--tps-swatch-inset, rgba(127,127,127,0.18)),
              0 0 0 2px var(--tps-panel-bg, #fff), 0 0 0 4px var(--tps-accent, currentColor);
}

/* \u2500\u2500 Lightness "tints": full-width ramp, shade number inside (do not touch) \u2500 */
.tps-panel .tps-cf-ramp {
  display: grid; grid-template-columns: repeat(11, minmax(0, 1fr));
  border-radius: var(--tps-radius-md, 8px); overflow: hidden;
  box-shadow: inset 0 0 0 1px var(--tps-border, rgba(127,127,127,0.14));
}
.tps-panel .tps-cf-ramp-cell {
  border: 0; padding: 0; cursor: pointer; height: 30px; position: relative;
  display: flex; align-items: center; justify-content: center;
  font-size: 9px; font-weight: var(--tps-fw-semibold, 600); font-variant-numeric: tabular-nums; letter-spacing: -0.02em;
  transition: box-shadow var(--tps-dur-fast, 80ms) var(--tps-ease-out, ease);
}
.tps-panel .tps-cf-ramp-cell:hover { z-index: 3; box-shadow: inset 0 0 0 2px color-mix(in srgb, var(--tps-panel-bg, #fff) 60%, transparent); }
.tps-panel .tps-cf-ramp-cell:focus-visible,
.tps-panel .tps-cf-ramp-cell.is-sel {
  outline: none; z-index: 4;
  box-shadow: inset 0 0 0 2px var(--tps-panel-bg, #fff), inset 0 0 0 4px var(--tps-accent, currentColor);
}
/* Faint secondary ring on the inverted ("invert lightness") mirror shade \u2014
   present alongside the prominent ring on the actually-selected shade. */
.tps-panel .tps-cf-ramp-cell.is-sel-mirror {
  z-index: 3;
  box-shadow: inset 0 0 0 2px var(--tps-panel-bg, #fff),
              inset 0 0 0 3px color-mix(in srgb, var(--tps-accent, currentColor) 42%, transparent);
}

/* \u2500\u2500 Invert-lightness toggle \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.tps-panel .tps-cf-invert {
  display: flex; align-items: center; gap: 8px; margin-top: var(--tps-space-3, 12px);
  cursor: pointer; font-size: var(--tps-fs-hint, 12px); color: var(--tps-text, inherit); font-weight: var(--tps-fw-medium, 500);
}
.tps-panel .tps-cf-invert-cb { margin: 0; cursor: pointer; accent-color: var(--tps-accent, currentColor); }
.tps-panel .tps-cf-invert-hint { color: var(--tps-text-faint, rgba(127,127,127,0.5)); font-weight: var(--tps-fw-regular, 400); }
/* Dimmed + non-interactive until a real, non-500 shade is picked (500 mirrors
   to itself, so inverting it is a no-op). */
.tps-panel .tps-cf-invert.is-disabled { opacity: 0.42; cursor: default; }
.tps-panel .tps-cf-invert.is-disabled .tps-cf-invert-cb { cursor: default; }

/* \u2500\u2500 Custom palette \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.tps-panel .tps-cf-custom-row { min-height: 30px; margin-bottom: var(--tps-space-3, 12px); }
.tps-panel .tps-cf-custom-empty {
  grid-column: 1 / -1; display: flex; align-items: center; padding: 0 10px; min-height: 30px;
  font-size: var(--tps-fs-hint, 12px); font-weight: var(--tps-fw-regular, 400); letter-spacing: 0;
  color: var(--tps-text-faint, rgba(127,127,127,0.55));
}
.tps-panel .tps-cf-custom-dot { cursor: grab; }
.tps-panel .tps-cf-custom-dot.is-dragging { opacity: 0.4; cursor: grabbing; }

.tps-panel .tps-cf-addrow { display: flex; align-items: center; gap: 8px; }
.tps-panel .tps-cf-remove {
  cursor: pointer; border: 1px solid var(--tps-border, rgba(127,127,127,0.14));
  background: var(--tps-bg-input, rgba(127,127,127,0.06)); color: var(--tps-text-muted, rgba(127,127,127,0.75));
  border-radius: var(--tps-radius-md, 8px); height: 32px; padding: 0 14px; font: inherit;
  font-size: var(--tps-fs-hint, 12px); font-weight: var(--tps-fw-medium, 500);
}
.tps-panel .tps-cf-remove[hidden] { display: none; }
.tps-panel .tps-cf-remove:hover { border-color: var(--tps-border-strong, rgba(127,127,127,0.28)); color: var(--tps-text, inherit); }
.tps-panel .tps-cf-add {
  cursor: pointer; border: 1px solid var(--tps-border, rgba(127,127,127,0.14));
  background: var(--tps-bg-input, rgba(127,127,127,0.06)); color: var(--tps-text, inherit);
  border-radius: var(--tps-radius-md, 8px); height: 32px; padding: 0 14px; font: inherit;
  font-size: var(--tps-fs-hint, 12px); font-weight: var(--tps-fw-semibold, 600);
}
.tps-panel .tps-cf-add:hover { border-color: var(--tps-border-strong, rgba(127,127,127,0.28)); }
.tps-panel .tps-cf-custom-count {
  margin-left: auto; font-size: var(--tps-fs-section, 11px);
  color: var(--tps-text-faint, rgba(127,127,127,0.5)); font-variant-numeric: tabular-nums;
}

/* \u2500\u2500 Hex input \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.tps-panel .tps-cf-hexbox {
  display: inline-flex; align-items: center; gap: 8px; box-sizing: border-box; height: 32px;
  background: var(--tps-bg-input, rgba(127,127,127,0.06));
  border: 1px solid var(--tps-border, rgba(127,127,127,0.14));
  border-radius: var(--tps-radius-md, 8px); padding: 0 8px 0 10px;
}
.tps-panel .tps-cf-hex-dot {
  width: 15px; height: 15px; border-radius: var(--tps-radius-sm, 5px);
  box-shadow: inset 0 0 0 1px var(--tps-swatch-inset, rgba(127,127,127,0.22));
}
.tps-panel .tps-cf-hex-input {
  border: 0; background: transparent; outline: none;
  font-family: var(--tps-font-mono, ui-monospace, monospace);
  font-size: var(--tps-fs-hint, 12px); color: var(--tps-text, inherit); width: 84px;
  font-variant-numeric: tabular-nums;
}
.tps-panel .tps-cf-hex-input::placeholder { color: var(--tps-text-faint, rgba(127,127,127,0.5)); }

/* \u2500\u2500 Universal: No color \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.tps-panel .tps-cf-divider {
  height: 1px; margin: var(--tps-space-3, 12px) 0; background: var(--tps-divider, rgba(127,127,127,0.12));
}
.tps-panel .tps-cf-universal { display: flex; align-items: center; gap: 10px; flex-wrap: wrap; }
.tps-panel .tps-cf-none {
  display: inline-flex; align-items: center; gap: 7px; cursor: pointer; box-sizing: border-box; height: 32px;
  background: var(--tps-bg-input, rgba(127,127,127,0.06));
  border: 1px solid var(--tps-border, rgba(127,127,127,0.14));
  border-radius: var(--tps-radius-md, 8px); padding: 0 12px; font: inherit;
  font-size: var(--tps-fs-hint, 12px); font-weight: var(--tps-fw-medium, 500);
  color: var(--tps-text-muted, rgba(127,127,127,0.7));
}
.tps-panel .tps-cf-none:hover { border-color: var(--tps-border-strong, rgba(127,127,127,0.28)); color: var(--tps-text, inherit); }
.tps-panel .tps-cf-none.is-sel { border-color: var(--tps-accent, currentColor); color: var(--tps-text, inherit); }
.tps-panel .tps-cf-none-sw {
  width: 15px; height: 15px; border-radius: 50%; position: relative; overflow: hidden;
  box-shadow: inset 0 0 0 1px var(--tps-border-strong, rgba(127,127,127,0.3));
}
.tps-panel .tps-cf-none-sw::after {
  content: ""; position: absolute; left: 50%; top: -3px; width: 1.5px; height: 21px;
  background: var(--tps-danger, #e2555f); transform: rotate(45deg);
}

/* \u2500\u2500 Instant tooltip (drawn by the component, not native title delay) \u2500\u2500\u2500 */
.tps-panel .tps-cf-tip {
  position: fixed; z-index: 2147483000; transform: translate(-50%, calc(-100% - 8px));
  padding: 3px 8px; border-radius: var(--tps-radius-sm, 5px);
  background: var(--tps-text, #1a1a1a); color: var(--tps-panel-bg, #fff);
  font-size: var(--tps-fs-section, 11px); font-weight: var(--tps-fw-medium, 500);
  line-height: 1.3; white-space: nowrap; pointer-events: none; opacity: 0;
  box-shadow: 0 2px 8px rgba(0,0,0,0.35);
}
.tps-panel .tps-cf-tip.is-visible { opacity: 1; }

@media (prefers-reduced-motion: reduce) {
  .tps-panel .tps-cf-dot,
  .tps-panel .tps-cf-tab,
  .tps-panel .tps-cf-tile,
  .tps-panel .tps-cf-remove { transition: none; }
}
`;

  // ../../shared/settings-ui/helpers.js
  var PANEL_CSS = tokens_default + "\n" + components_default + "\n" + color_field_default;
  function h(tag, props, ...children) {
    const el = document.createElement(tag);
    const dom = (
      /** @type {any} */
      el
    );
    if (props) {
      for (const k in props) {
        const v = props[k];
        if (v == null || v === false) continue;
        if (k === "class" || k === "className") {
          el.className = v;
        } else if (k === "style" && typeof v === "object") {
          Object.assign(el.style, v);
        } else if (k === "dataset" && typeof v === "object") {
          for (const dk in v) el.dataset[dk] = v[dk];
        } else if (k.startsWith("on") && typeof v === "function") {
          el.addEventListener(k.slice(2).toLowerCase(), v);
        } else if (k in dom && typeof dom[k] !== "function") {
          try {
            dom[k] = v;
          } catch {
            el.setAttribute(k, v);
          }
        } else {
          el.setAttribute(k, v === true ? "" : String(v));
        }
      }
    }
    appendChildren(el, children);
    return el;
  }
  __name(h, "h");
  function appendChildren(parent, children) {
    for (const c of children) {
      if (c == null || c === false) continue;
      if (Array.isArray(c)) {
        appendChildren(parent, c);
        continue;
      }
      parent.appendChild(c instanceof Node ? c : document.createTextNode(String(c)));
    }
  }
  __name(appendChildren, "appendChildren");
  function panel({ pluginClass } = {}, children = []) {
    const cls = ["tps-panel", pluginClass].filter(Boolean).join(" ");
    return h("div", { class: cls }, ...children);
  }
  __name(panel, "panel");
  function pluginHeader({
    title: heading,
    lede: ledeText,
    helper,
    helperOpen,
    helperDefaultOpen = false,
    onHelperToggle,
    icon = "",
    version = "1.0",
    author = "@akaready",
    homepage = "https://akaready.com",
    repository = "https://github.com/akaready",
    coffee = "https://buymeacoffee.com/akaready"
  }) {
    const iconClass2 = icon ? icon.startsWith("ti-") ? icon : `ti-${icon}` : "";
    const helperLines = normalizeHelperLines(helper);
    const children = [
      iconClass2 ? h(
        "div",
        { class: "tps-plugin-header-logo", "aria-hidden": "true" },
        h("i", { class: `ti ${iconClass2} tps-plugin-header-logo-icon`, "aria-hidden": "true" })
      ) : null,
      h("h1", { class: "tps-plugin-header-title" }, heading),
      ledeText ? h("p", { class: "tps-plugin-header-lede" }, ledeText) : null,
      helperLines.length ? renderPluginHeaderHelper({
        lines: helperLines,
        defaultOpen: helperDefaultOpen,
        open: helperOpen,
        onToggle: onHelperToggle
      }) : null,
      h(
        "p",
        { class: "tps-plugin-header-attr" },
        h(
          "span",
          { class: "tps-plugin-header-link-group" },
          h("i", { class: "ti ti-link tps-plugin-header-icon", "aria-hidden": "true" }),
          h("a", {
            class: "tps-plugin-header-link tps-plugin-header-link--blue",
            href: homepage,
            target: "_blank",
            rel: "noopener noreferrer"
          }, author)
        ),
        h(
          "span",
          { class: "tps-plugin-header-link-group" },
          h("i", { class: "ti ti-coffee tps-plugin-header-icon", "aria-hidden": "true" }),
          h("a", {
            class: "tps-plugin-header-link tps-plugin-header-link--pink",
            href: coffee,
            target: "_blank",
            rel: "noopener noreferrer"
          }, "buy me a coffee")
        ),
        version ? h(
          "span",
          { class: "tps-plugin-header-link-group" },
          h("span", { class: "tps-plugin-header-icon tps-plugin-header-iconify tps-plugin-header-iconify-github", "aria-hidden": "true" }),
          h("a", { class: "tps-plugin-header-link tps-plugin-header-link--muted tps-plugin-header-version", href: repository, target: "_blank", rel: "noopener noreferrer" }, `v${version}`)
        ) : null
      )
    ];
    return h("div", { class: "tps-plugin-header" }, ...children);
  }
  __name(pluginHeader, "pluginHeader");
  function normalizeHelperLines(helper) {
    if (!helper) return [];
    if (typeof helper === "string") {
      const text = helper.trim();
      return text ? [text] : [];
    }
    if (Array.isArray(helper)) {
      return helper.map((line) => String(line).trim()).filter(Boolean);
    }
    return [];
  }
  __name(normalizeHelperLines, "normalizeHelperLines");
  function renderPluginHeaderHelper({ lines, defaultOpen = false, open, onToggle }) {
    const initialOpen = open == null ? !!defaultOpen : !!open;
    const wrap = h("div", {
      class: "tps-plugin-header-helper-wrap",
      dataset: { open: String(initialOpen) }
    });
    const icon = h("i", { class: "ti ti-info-circle tps-plugin-header-helper-icon", "aria-hidden": "true" });
    const toggle = h("button", {
      type: "button",
      class: "tps-plugin-header-helper-toggle",
      "aria-expanded": String(initialOpen)
    }, icon, h("span", { class: "tps-plugin-header-helper-toggle-label" }, "Instructions"));
    const body = h(
      "div",
      { class: "tps-plugin-header-helper-body" },
      h("p", { class: "tps-plugin-header-helper-line" }, lines.join(" "))
    );
    const setOpen = /* @__PURE__ */ __name((nextOpen) => {
      wrap.dataset.open = String(nextOpen);
      toggle.setAttribute("aria-expanded", String(nextOpen));
      if (onToggle) onToggle(nextOpen);
    }, "setOpen");
    toggle.addEventListener("click", () => {
      setOpen(wrap.dataset.open !== "true");
    });
    body.addEventListener("click", () => {
      if (wrap.dataset.open === "true") setOpen(false);
    });
    wrap.appendChild(toggle);
    wrap.appendChild(body);
    return wrap;
  }
  __name(renderPluginHeaderHelper, "renderPluginHeaderHelper");
  function pluginHeaderFromConfig(conf, { version, helper, helperOpen, helperDefaultOpen, onHelperToggle } = {}) {
    const resolvedHelper = helper ?? conf.instructions;
    return pluginHeader({
      title: conf.name || "",
      lede: conf.description,
      helper: resolvedHelper,
      helperOpen,
      helperDefaultOpen,
      onHelperToggle,
      icon: conf.icon,
      version: version ?? conf.version,
      author: conf.author,
      homepage: conf.homepage,
      repository: conf.repository,
      coffee: conf.coffee
    });
  }
  __name(pluginHeaderFromConfig, "pluginHeaderFromConfig");
  function optionRow({ type = "checkbox", name, value, label, desc, checked, onChange }) {
    const input = h("input", {
      type,
      name,
      value,
      checked: !!checked,
      onChange: onChange ? (e) => onChange(e) : null
    });
    const labelEl = h("span", { class: "tps-opt-label" }, label);
    const descEl = desc ? h("span", { class: "tps-opt-desc" }, desc) : null;
    return h("label", { class: "tps-opt" }, input, labelEl, descEl);
  }
  __name(optionRow, "optionRow");
  function button({ label, variant = "ghost", size = "sm", onClick, disabled }) {
    const cls = ["tps-button", `tps-button--${variant}`];
    if (size === "md") cls.push("tps-button--md");
    return h("button", {
      type: "button",
      class: cls.join(" "),
      disabled: !!disabled,
      onClick
    }, label);
  }
  __name(button, "button");

  // ../../shared/settings-ui/tooltip.js
  var TIP_SELECTOR = "[data-tps-tip],[data-cf-tip]";
  var STYLE_ID = "tps-tip-css";
  var WIN_FLAG = "__tpsInstantTooltip";
  function installInstantTooltip() {
    if (typeof document === "undefined") return;
    if (typeof window !== "undefined" && window[WIN_FLAG]) return;
    if (typeof window !== "undefined") window[WIN_FLAG] = true;
    injectTooltipCss();
    const tip = document.createElement("div");
    tip.className = "tps-tip";
    tip.setAttribute("aria-hidden", "true");
    (document.body || document.documentElement).appendChild(tip);
    const hide = /* @__PURE__ */ __name(() => tip.classList.remove("is-visible"), "hide");
    const label = /* @__PURE__ */ __name((el) => el.getAttribute("data-tps-tip") || el.getAttribute("data-cf-tip") || "", "label");
    document.addEventListener("mouseover", (e) => {
      const t = e.target instanceof Element ? e.target.closest(TIP_SELECTOR) : null;
      if (!t) {
        hide();
        return;
      }
      const text = label(t);
      if (!text) {
        hide();
        return;
      }
      tip.textContent = text;
      const r = t.getBoundingClientRect();
      tip.style.left = `${r.left + r.width / 2}px`;
      tip.style.top = `${r.top}px`;
      tip.classList.add("is-visible");
    }, true);
    document.addEventListener("mouseout", (e) => {
      const t = e.target instanceof Element ? e.target.closest(TIP_SELECTOR) : null;
      const to = e.relatedTarget instanceof Element ? e.relatedTarget : null;
      if (t && (!to || !t.contains(to))) hide();
    }, true);
    window.addEventListener("scroll", hide, true);
    window.addEventListener("blur", hide);
  }
  __name(installInstantTooltip, "installInstantTooltip");
  function injectTooltipCss() {
    if (document.getElementById(STYLE_ID)) return;
    const style = document.createElement("style");
    style.id = STYLE_ID;
    style.textContent = [
      ".tps-tip{position:fixed;z-index:2147483000;transform:translate(-50%,calc(-100% - 8px));",
      "padding:3px 8px;border-radius:var(--tps-radius-sm,5px);background:var(--tps-text,#1a1a1a);",
      "color:var(--tps-panel-bg,#fff);font-size:11px;font-weight:500;line-height:1.3;white-space:nowrap;",
      "pointer-events:none;opacity:0;box-shadow:0 2px 8px rgba(0,0,0,.35)}",
      ".tps-tip.is-visible{opacity:1}"
    ].join("");
    (document.head || document.documentElement).appendChild(style);
  }
  __name(injectTooltipCss, "injectTooltipCss");

  // plugin.js
  var PLUGIN_VERSION = "1.0.1";
  var ROOT_CLASS = "plg-build-title-from-properties";
  var PANEL_TYPE = "build-title-from-properties-settings";
  var CONFIG_KEY = "buildTitle";
  var MANAGED_START = "/* Build Title from Properties: managed collection hook - begin */";
  var MANAGED_END = "/* Build Title from Properties: managed collection hook - end */";
  var DEFAULT_BUILD_TITLE = Object.freeze({
    version: 1,
    enabled: true,
    template: "{name}",
    omitEmpty: true,
    normalizeWhitespace: true,
    multiValueSeparator: ", ",
    dateFormat: "YYYY-MM-DD",
    dateTimeFormat: "YYYY-MM-DDTHH:mm:ss",
    fieldFormats: {}
  });
  var UNSUPPORTED_FIELD_TYPES = /* @__PURE__ */ new Set(["file", "image", "banner"]);
  var FMT_BOLD_CLASS = "btp-fmt-bold";
  var FMT_ITALIC_CLASS = "btp-fmt-italic";
  var FMT_FADED_CLASS = "btp-fmt-faded";
  var TITLE_DECORATOR_BLOCK_SELECTOR = [
    `.${ROOT_CLASS}-panel`,
    ".tps-panel",
    ".editor-panel",
    ".lineitem-ref",
    ".lineitem-ref-title",
    ".lineitem-lineref",
    ".line-div",
    ".listitem",
    "input",
    "textarea",
    "pre",
    "code",
    "script",
    "style",
    "[contenteditable]",
    "[data-btp-skip]"
  ].join(",");
  var TITLE_FMT_CSS = `
	.${FMT_BOLD_CLASS} { font-weight: 650; }
	.${FMT_ITALIC_CLASS} { font-style: italic; }
	.${FMT_FADED_CLASS} { opacity: 0.5; }

	/* Inside a clickable inline reference, our injected format spans must be
	   click-transparent. Thymer's click-to-open handler hangs off the ref's own
	   .clickable elements (.lineitem-ref / .lineitem-ref-title); when a format
	   span is the event target it swallows the click and navigation dies \u2014 the
	   ref becomes clickable only on its trailing arrow. Refs are atomic links,
	   not caret-editable text, so pointer-events:none is safe here; editable
	   titles and body text are NOT matched, keeping caret placement intact. */
	.lineitem-ref .${FMT_BOLD_CLASS},
	.lineitem-ref .${FMT_ITALIC_CLASS},
	.lineitem-ref .${FMT_FADED_CLASS} {
		pointer-events: none;
	}
`;
  function parseInlineFormat(text) {
    const runs = [];
    let bold = false, italic = false, faded = false, buf = "";
    const flush = /* @__PURE__ */ __name(() => {
      if (buf) {
        runs.push({ text: buf, bold, italic, faded });
        buf = "";
      }
    }, "flush");
    const s = String(text || "");
    for (let i = 0; i < s.length; i++) {
      const c = s[i];
      if (c === "\\" && i + 1 < s.length && "*%\\".includes(s[i + 1])) {
        buf += s[i + 1];
        i++;
        continue;
      }
      if (c === "*") {
        flush();
        if (s[i + 1] === "*") {
          bold = !bold;
          i++;
        } else {
          italic = !italic;
        }
        continue;
      }
      if (c === "%") {
        flush();
        faded = !faded;
        continue;
      }
      buf += c;
    }
    flush();
    return runs;
  }
  __name(parseInlineFormat, "parseInlineFormat");
  function hasFormatMarks(v) {
    const s = String(v || "");
    return /\*\*[\s\S]+?\*\*/.test(s) || /%[^%]+%/.test(s) || /(?:^|[^*])\*[^*\s][\s\S]*?\*(?:[^*]|$)/.test(s);
  }
  __name(hasFormatMarks, "hasFormatMarks");
  function decorateTextNode(textNode) {
    const runs = parseInlineFormat(textNode.nodeValue);
    if (!runs.some((r) => r.bold || r.italic || r.faded)) return;
    const frag = document.createDocumentFragment();
    for (const r of runs) {
      if (!r.bold && !r.italic && !r.faded) {
        frag.appendChild(document.createTextNode(r.text));
        continue;
      }
      const span = document.createElement("span");
      span.textContent = r.text;
      if (r.bold) span.classList.add(FMT_BOLD_CLASS);
      if (r.italic) span.classList.add(FMT_ITALIC_CLASS);
      if (r.faded) span.classList.add(FMT_FADED_CLASS);
      frag.appendChild(span);
    }
    if (textNode.parentNode) textNode.parentNode.replaceChild(frag, textNode);
  }
  __name(decorateTextNode, "decorateTextNode");
  var TELEMETRY_ENDPOINT = "https://thymer-plugins.goatcounter.com/count";
  var TELEMETRY_SCRIPT_SRC = "https://gc.zgo.at/count.js";
  var _telemetryScriptPromise = null;
  function _loadGoatCounter() {
    if (_telemetryScriptPromise) return _telemetryScriptPromise;
    _telemetryScriptPromise = new Promise((resolve) => {
      window.goatcounter = window.goatcounter || {};
      window.goatcounter.no_onload = true;
      window.goatcounter.allow_local = false;
      if (typeof window.goatcounter.count === "function") {
        resolve();
        return;
      }
      const s = document.createElement("script");
      s.async = true;
      s.src = TELEMETRY_SCRIPT_SRC;
      s.setAttribute("data-goatcounter", TELEMETRY_ENDPOINT);
      s.setAttribute("data-goatcounter-settings", '{"no_onload": true}');
      s.onload = () => resolve();
      s.onerror = () => resolve();
      document.head.appendChild(s);
    });
    return _telemetryScriptPromise;
  }
  __name(_loadGoatCounter, "_loadGoatCounter");
  function _fireTelemetry(path) {
    _loadGoatCounter().then(() => {
      try {
        window.goatcounter.count({ path, title: "", event: false });
      } catch (_) {
      }
    });
  }
  __name(_fireTelemetry, "_fireTelemetry");
  function _telemetryBlocked() {
    try {
      if (navigator.doNotTrack === "1") return true;
      if (localStorage.getItem("tps-telemetry-opt-out") === "1") return true;
    } catch (_) {
      return true;
    }
    return false;
  }
  __name(_telemetryBlocked, "_telemetryBlocked");
  function pingInstall(slug) {
    try {
      if (_telemetryBlocked()) return;
      const key = "tps-tcm-" + slug;
      if (localStorage.getItem(key) === "1") return;
      localStorage.setItem(key, "1");
      _fireTelemetry("thymer-" + slug);
    } catch (_) {
    }
  }
  __name(pingInstall, "pingInstall");
  function pingActive(slug) {
    try {
      if (_telemetryBlocked()) return;
      const today = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
      const key = "tps-act-" + slug;
      if (localStorage.getItem(key) === today) return;
      localStorage.setItem(key, today);
      _fireTelemetry("thymer-" + slug + "/active");
    } catch (_) {
    }
  }
  __name(pingActive, "pingActive");
  var Plugin = class extends AppPlugin {
    static {
      __name(this, "Plugin");
    }
    onLoad() {
      pingInstall("build-title-from-properties");
      pingActive("build-title-from-properties");
      this._handlerIds = [];
      this._panelEls = /* @__PURE__ */ new Set();
      this._commandItem = null;
      this._mode = "list";
      this._collections = [];
      this._selectedGuid = null;
      this._selectedRecords = [];
      this._collectionColors = {};
      this._collectionSearch = "";
      this._collectionFilters = { active: true, inactive: true, disabled: true };
      this._paletteQuery = "";
      this._activeFormatFieldId = null;
      this._datePopoverFieldId = null;
      this._editorTemplate = "";
      this._draft = cloneBuildTitleConfig(null);
      this._loading = false;
      this._saving = false;
      this._message = "";
      this.ui.injectCSS(PANEL_CSS);
      this.ui.injectCSS(this._css());
      this.ui.injectCSS(TITLE_FMT_CSS);
      installInstantTooltip();
      this._startTitleDecorator();
      void this._migrateManagedHooksInBackground();
      this._commandItem = this.ui.addCommandPaletteCommand({
        label: "Plugin: Build Title from Properties",
        icon: "file-text",
        onSelected: /* @__PURE__ */ __name(() => this._openPanel(), "onSelected")
      });
      this.ui.registerCustomPanelType(PANEL_TYPE, (pluginPanel) => {
        try {
          pluginPanel.setTitle("Build Title from Properties Settings");
        } catch {
        }
        const root = pluginPanel.getElement();
        if (!root) return;
        this._prunePanels();
        this._panelEls.add(root);
        this._renderInto(root);
        void this._refreshCollections();
      });
      this._installGlobalClick();
      this._renderPanel();
      if (this._connectedRoots().length && !this._collections.length) void this._refreshCollections();
    }
    _installGlobalClick() {
      if (window.__btpGlobalClick) {
        try {
          document.removeEventListener("click", window.__btpGlobalClick, true);
        } catch {
        }
      }
      const handler = /* @__PURE__ */ __name((e) => this._onGlobalClick(e), "handler");
      window.__btpGlobalClick = handler;
      document.addEventListener("click", handler, true);
    }
    /* ── Live title formatting: **bold** *italic* %faded% → styled spans ── */
    _startTitleDecorator() {
      this._unwrapUnsafeTitleDecorations(document.body);
      this._titleObserver = new MutationObserver((mutations) => this._onTitleMutations(mutations));
      this._titleObserver.observe(document.body, { childList: true, subtree: true, characterData: true });
      this._decorateTitles();
    }
    _onTitleMutations(mutations) {
      const active = document.activeElement;
      const targets = [];
      const collect = /* @__PURE__ */ __name((node) => {
        if (!node) return;
        if (node.nodeType === 3) {
          if (this._shouldDecorate(node, active)) targets.push(node);
          return;
        }
        if (node.nodeType !== 1) return;
        if (this._isTitleDecoratorBlockedElement(node)) return;
        let walker;
        try {
          walker = document.createTreeWalker(node, NodeFilter.SHOW_TEXT, null);
        } catch {
          return;
        }
        let n;
        while (n = walker.nextNode()) if (this._shouldDecorate(n, active)) targets.push(n);
      }, "collect");
      for (const m of mutations) {
        if (m.type === "characterData") collect(m.target);
        else if (m.type === "childList") for (const added of m.addedNodes) collect(added);
      }
      for (const textNode of targets) decorateTextNode(textNode);
    }
    /** Whether a text node is a title-ish surface we should format (not our panel,
     *  not an input/code block, not the title being actively edited). */
    _shouldDecorate(textNode, active) {
      if (!hasFormatMarks(textNode.nodeValue)) return false;
      const p = textNode.parentElement;
      if (!p) return false;
      if (this._isTitleDecoratorBlockedElement(p)) return false;
      if (active && p.contains(active)) return false;
      return true;
    }
    _isTitleDecoratorBlockedElement(element) {
      if (!(element instanceof Element)) return true;
      if (element.closest(TITLE_DECORATOR_BLOCK_SELECTOR)) return true;
      try {
        if (element instanceof HTMLElement && element.isContentEditable) return true;
      } catch {
      }
      return false;
    }
    _unwrapUnsafeTitleDecorations(root = document.body) {
      if (!root || typeof root.querySelectorAll !== "function") return;
      const classes = [FMT_BOLD_CLASS, FMT_ITALIC_CLASS, FMT_FADED_CLASS].map((cls) => `.${cls}`).join(",");
      const unsafeSelectors = [
        `.editor-panel ${classes}`,
        `.lineitem-ref ${classes}`,
        `.lineitem-ref-title ${classes}`,
        `[contenteditable] ${classes}`
      ].join(",");
      const nodes = Array.from(root.querySelectorAll(unsafeSelectors));
      for (const node of nodes) {
        if (!(node instanceof HTMLElement)) continue;
        const parent = node.parentNode;
        if (!parent) continue;
        while (node.firstChild) parent.insertBefore(node.firstChild, node);
        parent.removeChild(node);
        try {
          parent.normalize();
        } catch {
        }
      }
    }
    _decorateTitles() {
      const active = document.activeElement;
      let walker;
      try {
        walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
          acceptNode: /* @__PURE__ */ __name((n) => this._shouldDecorate(n, active) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT, "acceptNode")
        });
      } catch {
        return;
      }
      const targets = [];
      let node;
      while (node = walker.nextNode()) targets.push(node);
      for (const textNode of targets) decorateTextNode(textNode);
    }
    _onGlobalClick(e) {
      try {
        const t = e.target;
        if (!t || !t.closest) return;
        if (!t.closest(`.${ROOT_CLASS}-panel`)) return;
        const insEl = t.closest("[data-tps-insert]");
        const gearEl = insEl ? null : t.closest("[data-tps-gear]");
        if (insEl) {
          this._datePopoverFieldId = null;
          this._insertToken(insEl.getAttribute("data-tps-insert"), { currentTarget: insEl });
        } else if (gearEl) {
          const fid = gearEl.getAttribute("data-tps-gear");
          this._datePopoverFieldId = this._datePopoverFieldId === fid ? null : fid;
          this._renderPanel();
        }
      } catch (err) {
        this._toast("Build Title error", err && err.message ? err.message : String(err));
      }
    }
    onUnload() {
      for (const id of this._handlerIds || []) this.events.off(id);
      this._handlerIds = [];
      if (window.__btpGlobalClick) {
        try {
          document.removeEventListener("click", window.__btpGlobalClick, true);
        } catch {
        }
        window.__btpGlobalClick = null;
      }
      if (this._titleObserver) {
        try {
          this._titleObserver.disconnect();
        } catch {
        }
        this._titleObserver = null;
      }
      if (this._commandItem) {
        this._commandItem.remove();
        this._commandItem = null;
      }
    }
    async _openPanel() {
      if (this._connectedRoots().length) return;
      const active = this.ui.getActivePanel && this.ui.getActivePanel();
      const next = await this.ui.createPanel(active ? { afterPanel: active } : void 0);
      if (next) next.navigateToCustomType(PANEL_TYPE);
    }
    _prunePanels() {
      for (const root of [...this._panelEls]) {
        if (!root || !document.contains(root)) this._panelEls.delete(root);
      }
    }
    _connectedRoots() {
      this._prunePanels();
      const hosts = /* @__PURE__ */ new Set([...this._panelEls]);
      for (const content of document.querySelectorAll(`.${ROOT_CLASS}-panel`)) {
        const host = content.parentElement;
        if (host) {
          hosts.add(host);
          this._panelEls.add(host);
        }
      }
      return [...hosts].filter((h2) => document.contains(h2));
    }
    /** Resolve the panel content root that an interaction happened inside. */
    _rootFromEvent(ev) {
      const el = ev && (ev.currentTarget || ev.target);
      return el && el.closest ? el.closest(`.${ROOT_CLASS}-panel`) : null;
    }
    /** Query a selector within the interacting panel, then anywhere in the document. */
    _queryLive(selector, ev) {
      const scoped = this._rootFromEvent(ev);
      if (scoped) {
        const hit = scoped.querySelector(selector);
        if (hit) return hit;
      }
      return document.querySelector(`.${ROOT_CLASS}-panel ${selector}`);
    }
    _eachLive(selector, cb) {
      for (const node of document.querySelectorAll(`.${ROOT_CLASS}-panel ${selector}`)) cb(node);
    }
    async _refreshCollections() {
      this._loading = true;
      this._message = "Loading collections...";
      this._renderPanel();
      try {
        this._collectionColors = await this._loadCollectionColors();
        const collections = await this.data.getAllCollections();
        const states = [];
        for (const collection of collections) {
          const state = await this._loadCollectionState(collection);
          states.push(state);
        }
        states.sort((a, b) => a.name.localeCompare(b.name));
        this._collections = states;
        if (this._selectedGuid && !states.some((s) => s.guid === this._selectedGuid)) {
          this._selectedGuid = null;
          this._mode = "list";
        }
        if (this._mode === "edit" && this._selectedGuid) {
          this._syncDraftFromSelected();
          await this._loadSelectedRecords();
        }
        this._message = states.length ? "" : "No collections found.";
      } catch (err) {
        this._message = `Unable to load collections: ${err && err.message ? err.message : String(err)}`;
      } finally {
        this._loading = false;
        this._renderPanel();
        if (this._mode === "list") void this._loadSampleRecords();
      }
    }
    /** Load one sample record per collection for the list-mode preview line. */
    async _loadSampleRecords() {
      const pending = this._collections.filter((state) => state.sampleRecord === void 0);
      if (!pending.length) return;
      for (const state of pending) {
        try {
          const records = await state.collection.getAllRecords();
          state.sampleRecord = Array.isArray(records) && records.length ? records[0] : null;
        } catch {
          state.sampleRecord = null;
        }
      }
      if (this._mode === "list") this._renderListRowsIntoPanel();
    }
    async _loadCollectionState(collection) {
      let existing = null;
      try {
        existing = await collection.getExistingCodeAndConfig();
      } catch {
      }
      const json = existing && existing.json ? existing.json : collection.getConfiguration ? collection.getConfiguration() : {};
      const code = existing && typeof existing.code === "string" ? existing.code : "";
      const fields = Array.isArray(json.fields) ? json.fields.filter(isUsableField).filter(isSelectableTitleField) : [];
      return {
        collection,
        guid: collection.getGuid(),
        name: collection.getName(),
        code,
        json,
        fields,
        collectionColor: this._collectionColors[collection.getGuid()] || null,
        status: classifyCode(code),
        config: cloneBuildTitleConfig(json.custom && json.custom[CONFIG_KEY])
      };
    }
    async _loadCollectionColors() {
      const out = {};
      try {
        const plugins = await this.data.getAllGlobalPlugins();
        const colorsPlugin = plugins.find((p) => p && p.getName && p.getName() === "Collection Colors");
        const conf = colorsPlugin && colorsPlugin.getConfiguration ? colorsPlugin.getConfiguration() : null;
        const custom = conf && conf.custom && typeof conf.custom === "object" ? conf.custom : {};
        const colors = custom.colors && typeof custom.colors === "object" ? custom.colors : {};
        for (const guid of Object.keys(colors)) {
          const color = colors[guid] && typeof colors[guid].color === "string" ? colors[guid].color : null;
          if (color) out[guid] = color;
        }
      } catch {
      }
      try {
        const raw = JSON.parse(localStorage.getItem(`collection-colors/${this.getWorkspaceGuid()}/colors`) || "{}") || {};
        for (const guid of Object.keys(raw)) {
          const color = raw[guid] && typeof raw[guid].color === "string" ? raw[guid].color : null;
          if (color) out[guid] = color;
        }
        return out;
      } catch {
        return out;
      }
    }
    _syncDraftFromSelected() {
      const state = this._selectedState();
      this._draft = cloneBuildTitleConfig(state ? state.config : null);
      this._editorTemplate = displayTemplateFromConfig(this._draft.template, state);
      this._activeFormatFieldId = findFirstTemplateDateField(this._draft.template, state);
    }
    async _loadSelectedRecords() {
      const state = this._selectedState();
      this._selectedRecords = [];
      if (!state) return;
      try {
        const records = await state.collection.getAllRecords();
        this._selectedRecords = Array.isArray(records) ? records.slice(0, 5) : [];
      } catch {
        this._selectedRecords = [];
      }
    }
    async _refreshPreviewRecords() {
      const state = this._selectedState();
      this._selectedRecords = [];
      if (!state) return;
      try {
        const records = await state.collection.getAllRecords();
        const shuffled = shuffle(Array.isArray(records) ? records.slice() : []);
        this._selectedRecords = shuffled.slice(0, 5);
      } catch {
        this._selectedRecords = [];
      }
      this._renderPanel();
    }
    _selectedState() {
      return this._collections.find((c) => c.guid === this._selectedGuid) || null;
    }
    _filteredCollections() {
      const query = this._collectionSearch.trim().toLowerCase();
      return this._collections.filter((state) => {
        const kind = collectionFilterKind(state);
        const filterMatch = kind === "review" || this._collectionFilters[kind] !== false;
        const searchMatch = !query || state.name.toLowerCase().includes(query);
        return filterMatch && searchMatch;
      });
    }
    _toggleCollectionFilter(kind) {
      this._collectionFilters = {
        ...this._collectionFilters,
        [kind]: !this._collectionFilters[kind]
      };
      this._renderPanel();
    }
    async _enterEdit(guid) {
      this._selectedGuid = guid;
      this._mode = "edit";
      this._paletteQuery = "";
      this._datePopoverFieldId = null;
      this._message = "";
      this._syncDraftFromSelected();
      this._renderPanel();
      await this._loadSelectedRecords();
      this._renderPanel();
      this._migrateStaleManaged();
    }
    /**
     * Re-inject the current managed hook if this collection is running an older
     * build (e.g. one that stripped %faded% at render time). Silent, on-demand,
     * only when the injected block actually differs — no manual re-save needed.
     */
    _migrateStaleManaged() {
      const state = this._selectedState();
      if (!state || state.status !== "managed") return;
      const refreshed = replaceManagedBlock(state.code, makeManagedCollectionCode());
      if (refreshed !== state.code) void this._commitSave(this._draft.enabled !== false);
    }
    async _migrateManagedHooksInBackground() {
      if (this._managedMigrationPromise) return this._managedMigrationPromise;
      this._managedMigrationPromise = (async () => {
        let collections;
        try {
          collections = await this.data.getAllCollections();
        } catch {
          return;
        }
        const managedCode = makeManagedCollectionCode();
        for (const collection of collections || []) {
          try {
            const existing = await collection.getExistingCodeAndConfig();
            const code = existing && typeof existing.code === "string" ? existing.code : "";
            if (classifyCode(code) !== "managed") continue;
            const nextCode = replaceManagedBlock(code, managedCode);
            if (nextCode === code) continue;
            const json = existing && existing.json ? existing.json : collection.getConfiguration ? collection.getConfiguration() : {};
            const ok = await collection.savePlugin(json, nextCode);
            if (!ok) continue;
            const state = this._collections.find((s) => s.guid === collection.getGuid());
            if (state) {
              state.code = nextCode;
              state.status = "managed";
            }
          } catch {
          }
        }
      })();
      try {
        await this._managedMigrationPromise;
      } finally {
        this._managedMigrationPromise = null;
      }
    }
    _exitEdit() {
      if (this._autosaveTimer) {
        clearTimeout(this._autosaveTimer);
        this._autosaveTimer = null;
        void this._commitSave(this._draft.enabled !== false);
      }
      this._mode = "list";
      this._datePopoverFieldId = null;
      this._message = "";
      this._renderPanel();
      if (this._collections.some((s) => s.sampleRecord === void 0)) void this._loadSampleRecords();
    }
    _patchDraft(patch) {
      this._draft = cloneBuildTitleConfig({ ...this._draft, ...patch });
      this._renderPreviewIntoPanel();
      this._scheduleAutosave();
    }
    /** Debounced persistence — the panel autosaves silently; there is no Save button. */
    _scheduleAutosave() {
      const state = this._selectedState();
      if (!state || state.status === "conflict") return;
      if (this._autosaveTimer) clearTimeout(this._autosaveTimer);
      this._autosaveTimer = setTimeout(() => {
        this._autosaveTimer = null;
        void this._commitSave(this._draft.enabled !== false);
      }, 700);
    }
    async _toggleEnabled() {
      if (this._autosaveTimer) {
        clearTimeout(this._autosaveTimer);
        this._autosaveTimer = null;
      }
      const next = !(this._draft.enabled !== false);
      this._draft = cloneBuildTitleConfig({ ...this._draft, enabled: next });
      this._renderPanel();
      await this._commitSave(next);
    }
    _insertToken(token, ev) {
      const editor = this._queryLive(`.${ROOT_CLASS}__template-input`, ev);
      const state = this._selectedState();
      if (editor && state) {
        const displayToken2 = displayTokenForRawToken(token, state, this._draft);
        const hasEditorFocus = document.activeElement === editor;
        const sourceValue = editor.value;
        const start = hasEditorFocus && Number.isFinite(editor.selectionStart) ? editor.selectionStart : sourceValue.length;
        const end = hasEditorFocus && Number.isFinite(editor.selectionEnd) ? editor.selectionEnd : start;
        const before = sourceValue.slice(0, start);
        const after = sourceValue.slice(end);
        const spacer2 = needsInsertionSpace(before, displayToken2) ? " " : "";
        const next = `${before}${spacer2}${displayToken2}${after}`;
        const cursor = before.length + spacer2.length + displayToken2.length;
        editor.value = next;
        editor.focus();
        try {
          editor.setSelectionRange(cursor, cursor);
        } catch {
        }
        this._patchEditorTemplate(next, false);
        return;
      }
      const displayToken = displayTokenForRawToken(token, state, this._draft);
      const spacer = needsInsertionSpace(this._editorTemplate, displayToken) ? " " : "";
      this._patchEditorTemplate(`${this._editorTemplate || ""}${spacer}${displayToken}`, true);
    }
    _templateTextarea(ev) {
      return this._queryLive(`.${ROOT_CLASS}__template-input`, ev);
    }
    _patchEditorTemplate(displayTemplate, rerender = false) {
      const state = this._selectedState();
      this._editorTemplate = displayTemplate;
      this._draft = cloneBuildTitleConfig({
        ...this._draft,
        template: compileDisplayTemplate(displayTemplate, state),
        fieldFormats: {
          ...this._draft.fieldFormats || {},
          ...collectFieldFormatsFromDisplayTemplate(displayTemplate, state)
        }
      });
      if (rerender) this._renderPanel();
      else this._renderPreviewIntoPanel();
      this._scheduleAutosave();
    }
    _syncTemplateBeforeSave() {
      const editor = this._templateTextarea();
      if (editor) this._draft = cloneBuildTitleConfig({
        ...this._draft,
        template: compileDisplayTemplate(editor.value, this._selectedState()),
        fieldFormats: {
          ...this._draft.fieldFormats || {},
          ...collectFieldFormatsFromDisplayTemplate(editor.value, this._selectedState())
        }
      });
    }
    _syncCollectionStateFromDraft(state) {
      if (!state) return;
      state.config = cloneBuildTitleConfig(this._draft);
      this._renderPreviewIntoPanel();
    }
    _patchFieldFormat(fieldId, format) {
      const fieldFormats = { ...this._draft.fieldFormats || {} };
      if (format) fieldFormats[fieldId] = format;
      else delete fieldFormats[fieldId];
      this._draft = cloneBuildTitleConfig({ ...this._draft, fieldFormats });
      this._editorTemplate = updateDisplayTemplateFormat(this._editorTemplate, this._selectedState(), fieldId, format || this._defaultFormatForField(fieldId));
      this._renderPanel();
      this._scheduleAutosave();
    }
    _patchFieldFormatPreview(fieldId, format) {
      const fieldFormats = { ...this._draft.fieldFormats || {} };
      if (format) fieldFormats[fieldId] = format;
      else delete fieldFormats[fieldId];
      this._draft = cloneBuildTitleConfig({ ...this._draft, fieldFormats });
      this._editorTemplate = updateDisplayTemplateFormat(this._editorTemplate, this._selectedState(), fieldId, format || this._defaultFormatForField(fieldId));
      const editor = this._templateTextarea();
      if (editor) editor.value = this._editorTemplate;
      this._renderDatePreviewIntoPanel(fieldId, format || this._defaultFormatForField(fieldId));
      this._renderPreviewIntoPanel();
    }
    _renderDatePreviewIntoPanel(fieldId, format) {
      const field = findFieldForFormat(this._selectedState(), fieldId);
      if (!field) return;
      this._eachLive(`.${ROOT_CLASS}__date-preview`, (target) => {
        target.textContent = this._formatPreviewForField(field, format);
      });
    }
    _defaultFormatForField(fieldId) {
      const field = findFieldForFormat(this._selectedState(), fieldId);
      return isDateOnlyField(field) ? this._draft.dateFormat : this._draft.dateTimeFormat;
    }
    /**
     * Persist the current draft (template + settings + enabled flag) into the
     * collection's managed hook. Called by the debounced autosave and the
     * Enable/Disable toggle — there is no explicit Save button.
     */
    async _commitSave(enabled = true) {
      const state = this._selectedState();
      if (!state || state.status === "conflict") return;
      this._syncTemplateBeforeSave();
      this._saving = true;
      try {
        const nextConfig = cloneBuildTitleConfig({ ...this._draft, enabled });
        const nextJson = cloneJson(state.json);
        nextJson.custom = nextJson.custom && typeof nextJson.custom === "object" ? nextJson.custom : {};
        nextJson.custom[CONFIG_KEY] = nextConfig;
        const managedCode = makeManagedCollectionCode();
        const nextCode = state.status === "managed" ? replaceManagedBlock(state.code, managedCode) : managedCode;
        const ok = await state.collection.savePlugin(nextJson, nextCode);
        if (!ok) throw new Error("Thymer rejected the save.");
        const wasStatus = state.status;
        state.json = nextJson;
        state.code = nextCode;
        state.config = cloneBuildTitleConfig(nextJson.custom[CONFIG_KEY]);
        state.status = "managed";
        this._saving = false;
        if (wasStatus !== "managed") this._renderPanel();
      } catch (err) {
        this._saving = false;
        this._toast("Couldn't save", err && err.message ? err.message : String(err));
      }
    }
    _renderPanel() {
      const roots = this._connectedRoots();
      for (const root of roots) this._renderInto(root);
    }
    _renderInto(root) {
      const state = this._selectedState();
      const inEdit = this._mode === "edit" && !!state;
      root.replaceChildren(panel({ pluginClass: `${ROOT_CLASS}-panel` }, [
        pluginHeaderFromConfig(this.getConfiguration(), { version: PLUGIN_VERSION }),
        inEdit ? this._renderBuilder(state) : this._renderListView()
      ]));
    }
    /* ── List mode ─────────────────────────────────────────────── */
    _renderListView() {
      const filtered = this._filteredCollections();
      return h(
        "div",
        { class: `${ROOT_CLASS}__list-view` },
        h(
          "div",
          { class: `${ROOT_CLASS}__list-toolbar` },
          h("input", {
            type: "search",
            class: `${ROOT_CLASS}__collection-search`,
            placeholder: "Search collections",
            value: this._collectionSearch,
            onInput: /* @__PURE__ */ __name((e) => {
              this._collectionSearch = e.target.value;
              this._renderListRowsIntoPanel();
            }, "onInput")
          }),
          h(
            "div",
            { class: `${ROOT_CLASS}__filter-row` },
            this._renderFilterToggle("active", "Active"),
            this._renderFilterToggle("inactive", "Inactive"),
            this._renderFilterToggle("disabled", "Disabled")
          ),
          iconButton({ icon: "ti-refresh", label: "Refresh collections", onClick: /* @__PURE__ */ __name(() => void this._refreshCollections(), "onClick"), disabled: this._loading })
        ),
        this._message ? h("div", { class: `${ROOT_CLASS}__notice` }, this._message) : null,
        h(
          "div",
          { class: `${ROOT_CLASS}__collection-list` },
          ...filtered.length ? filtered.map((state) => this._renderCollectionRow(state)) : [h("div", { class: `${ROOT_CLASS}__empty-list` }, this._loading ? "Loading collections\u2026" : "No matching collections.")]
        )
      );
    }
    _renderListRowsIntoPanel() {
      const filtered = this._filteredCollections();
      this._eachLive(`.${ROOT_CLASS}__collection-list`, (target) => {
        target.replaceChildren(...filtered.length ? filtered.map((state) => this._renderCollectionRow(state)) : [h("div", { class: `${ROOT_CLASS}__empty-list` }, this._loading ? "Loading collections\u2026" : "No matching collections.")]);
      });
    }
    _renderFilterToggle(kind, label) {
      const pressed = this._collectionFilters[kind] !== false;
      return h("button", {
        type: "button",
        class: [
          `${ROOT_CLASS}__filter-toggle`,
          pressed ? `${ROOT_CLASS}__filter-toggle--active` : ""
        ].filter(Boolean).join(" "),
        "aria-pressed": String(pressed),
        onClick: /* @__PURE__ */ __name(() => this._toggleCollectionFilter(kind), "onClick")
      }, label);
    }
    _renderCollectionRow(state) {
      const enabled = state.config && state.config.enabled !== false;
      const filterKind = collectionFilterKind(state);
      const color = state.collectionColor || null;
      return h(
        "div",
        {
          class: [
            `${ROOT_CLASS}__row`,
            filterKind === "disabled" ? `${ROOT_CLASS}__row--disabled` : ""
          ].filter(Boolean).join(" "),
          role: "button",
          tabindex: "0",
          onClick: /* @__PURE__ */ __name(() => void this._enterEdit(state.guid), "onClick"),
          onKeydown: /* @__PURE__ */ __name((e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              void this._enterEdit(state.guid);
            }
          }, "onKeydown")
        },
        h("span", {
          class: `${iconClass(state.json.icon || "file-text")} ${ROOT_CLASS}__row-icon`,
          style: color ? { color } : null,
          "aria-hidden": "true"
        }),
        h(
          "div",
          { class: `${ROOT_CLASS}__row-main` },
          h(
            "div",
            { class: `${ROOT_CLASS}__row-head` },
            h("span", { class: `${ROOT_CLASS}__row-name`, style: color ? { color } : null }, state.name),
            h("span", { class: `${ROOT_CLASS}__status ${ROOT_CLASS}__status--${filterKind}` }, statusShortLabel(state.status, enabled))
          ),
          this._renderRowSample(state)
        ),
        h(
          "span",
          { class: `${ROOT_CLASS}__row-edit`, "aria-hidden": "true" },
          "Edit",
          h("span", { class: "ti ti-chevron-right" })
        )
      );
    }
    _renderRowSample(state) {
      if (state.sampleRecord === void 0) {
        return h("div", { class: `${ROOT_CLASS}__row-sample ${ROOT_CLASS}__row-sample--muted` }, "Loading sample\u2026");
      }
      if (!state.sampleRecord) {
        return h("div", { class: `${ROOT_CLASS}__row-sample ${ROOT_CLASS}__row-sample--muted` }, "No records yet");
      }
      const original = safeRecordName(state.sampleRecord);
      const config = cloneBuildTitleConfig({ ...state.config || {}, enabled: true });
      const built = renderTitle(state.sampleRecord, config);
      const managed = state.status === "managed" && state.config && state.config.enabled !== false;
      if (managed && built && built !== original) {
        return h(
          "div",
          { class: `${ROOT_CLASS}__row-sample` },
          h("span", { class: `${ROOT_CLASS}__row-sample-old` }, original),
          h("span", { class: "ti ti-arrow-right", "aria-hidden": "true" }),
          h("span", { class: `${ROOT_CLASS}__row-sample-new` }, built)
        );
      }
      return h("div", { class: `${ROOT_CLASS}__row-sample ${ROOT_CLASS}__row-sample--muted` }, original);
    }
    /* ── Builder mode ──────────────────────────────────────────── */
    _renderBuilder(state) {
      const color = state.collectionColor || null;
      const conflict = state.status === "conflict";
      const isEnabled = this._draft.enabled !== false;
      const locked = conflict;
      const dimmed = conflict || !isEnabled;
      const statusKind = conflict ? "review" : isEnabled ? "active" : "disabled";
      const statusLabel = conflict ? "Review" : isEnabled ? "Enabled" : "Disabled";
      return h(
        "div",
        { class: `${ROOT_CLASS}__builder` },
        h(
          "div",
          { class: `${ROOT_CLASS}__builder-bar` },
          h("button", {
            type: "button",
            class: `${ROOT_CLASS}__back-btn`,
            onClick: /* @__PURE__ */ __name(() => this._exitEdit(), "onClick")
          }, h("span", { class: "ti ti-arrow-left", "aria-hidden": "true" }), "Collections"),
          h(
            "div",
            { class: `${ROOT_CLASS}__builder-title` },
            h("span", {
              class: `${iconClass(state.json.icon || "file-text")} ${ROOT_CLASS}__builder-title-icon`,
              style: color ? { color } : null,
              "aria-hidden": "true"
            }),
            h("span", { class: `${ROOT_CLASS}__builder-title-name`, style: color ? { color } : null }, state.name),
            h("span", { class: `${ROOT_CLASS}__status ${ROOT_CLASS}__status--${statusKind}` }, statusLabel)
          ),
          h(
            "div",
            { class: `${ROOT_CLASS}__builder-actions` },
            conflict ? null : button({
              label: isEnabled ? "Disable" : "Enable",
              variant: isEnabled ? "danger" : "primary",
              onClick: /* @__PURE__ */ __name(() => void this._toggleEnabled(), "onClick"),
              disabled: this._saving
            })
          )
        ),
        conflict ? h("div", { class: `${ROOT_CLASS}__notice ${ROOT_CLASS}__notice--danger` }, "Build Title can\u2019t manage this collection \u2014 it already has custom code.") : null,
        h(
          "div",
          {
            class: [`${ROOT_CLASS}__builder-body`, dimmed ? `${ROOT_CLASS}__builder-body--dimmed` : "", locked ? `${ROOT_CLASS}__builder-body--locked` : ""].filter(Boolean).join(" "),
            "aria-disabled": dimmed ? "true" : null
          },
          // The field we're editing sits at the top, full width and single-line.
          this._renderTemplateInput(state, locked),
          // Filter + separators on one row directly under the template input.
          this._renderToolsRow(state),
          // All property chips.
          this._renderPalette(state),
          // Preview sits below all the chips.
          this._renderPreviewBlock(),
          h(
            "div",
            { class: `${ROOT_CLASS}__settings-row` },
            h(
              "label",
              { class: `${ROOT_CLASS}__field-row` },
              h("span", null, "Multi-value separator"),
              h("input", {
                type: "text",
                value: this._draft.multiValueSeparator,
                onInput: /* @__PURE__ */ __name((e) => this._patchDraft({ multiValueSeparator: e.target.value }), "onInput")
              })
            ),
            optionRow({
              type: "checkbox",
              name: "normalizeWhitespace",
              label: "Collapse extra spaces",
              desc: "Merge repeated spaces into one and trim the ends \u2014 stops empty fields or optional groups from leaving double spaces.",
              checked: !!this._draft.normalizeWhitespace,
              onChange: /* @__PURE__ */ __name((e) => this._patchDraft({ normalizeWhitespace: !!e.target.checked }), "onChange")
            })
          )
        )
      );
    }
    _renderToolsRow(state) {
      const seps = [
        { token: " - ", label: "-", title: "Insert a dash separator" },
        { token: " \xB7 ", label: "\xB7", title: "Insert a middot separator" },
        { token: " \u2022 ", label: "\u2022", title: "Insert a bullet separator" },
        { token: " / ", label: "/", title: "Insert a slash separator" },
        { token: " | ", label: "|", title: "Insert a pipe separator" },
        { token: ": ", label: ":", title: "Insert a colon separator" },
        { token: "?{}", label: "?{\u2026}", title: "Insert optional group" }
      ];
      return h(
        "div",
        { class: `${ROOT_CLASS}__tools-row` },
        h("input", {
          type: "search",
          class: `${ROOT_CLASS}__palette-search`,
          placeholder: "Filter properties\u2026",
          value: this._paletteQuery,
          onInput: /* @__PURE__ */ __name((e) => {
            this._paletteQuery = e.target.value;
            this._renderPaletteIntoPanel();
          }, "onInput")
        }),
        h(
          "div",
          { class: `${ROOT_CLASS}__quick-row` },
          ...seps.map((s) => h("button", {
            type: "button",
            class: "tps-button tps-button--ghost",
            "data-tps-tip": s.title,
            "data-tps-insert": s.token
          }, s.label))
        )
      );
    }
    _renderPreviewBlock() {
      return h(
        "div",
        { class: `${ROOT_CLASS}__preview-block` },
        h(
          "div",
          { class: `${ROOT_CLASS}__preview-head` },
          h("span", { class: `${ROOT_CLASS}__preview-caption` }, "Preview"),
          iconButton({ icon: "ti-refresh", label: "Shuffle preview records", onClick: /* @__PURE__ */ __name(() => void this._refreshPreviewRecords(), "onClick") })
        ),
        this._renderPreview()
      );
    }
    _renderPalette(state) {
      const open = !!this._datePopoverFieldId;
      return h(
        "div",
        { class: [`${ROOT_CLASS}__palette`, open ? `${ROOT_CLASS}__palette--open` : ""].filter(Boolean).join(" ") },
        h("div", { class: `${ROOT_CLASS}__palette-scroll` }, ...this._paletteScrollContent(state)),
        open ? this._renderDatePopover(state) : null
      );
    }
    _paletteScrollContent(state) {
      const query = this._paletteQuery.trim().toLowerCase();
      const matches = /* @__PURE__ */ __name((label) => !query || String(label || "").toLowerCase().includes(query), "matches");
      const common = [];
      const more = [];
      for (const field of state.fields) {
        (isAdvancedField(field) ? more : common).push(field);
      }
      const nameVisible = matches("name");
      const commonVisible = common.filter((f) => matches(f.label));
      const moreVisible = more.filter((f) => matches(f.label));
      if (!nameVisible && !commonVisible.length && !moreVisible.length) {
        return [h("div", { class: `${ROOT_CLASS}__empty-list` }, "No properties match your filter.")];
      }
      const out = [];
      if (nameVisible || commonVisible.length) {
        out.push(h("div", { class: `${ROOT_CLASS}__palette-group-label` }, "Common"));
        out.push(h(
          "div",
          { class: `${ROOT_CLASS}__palette-grid` },
          nameVisible ? this._renderNameToken(state) : null,
          ...commonVisible.map((field) => this._renderFieldToken(field))
        ));
      }
      if (moreVisible.length) {
        out.push(h("div", { class: `${ROOT_CLASS}__palette-group-label` }, "More properties"));
        out.push(h("div", { class: `${ROOT_CLASS}__palette-grid` }, ...moreVisible.map((field) => this._renderFieldToken(field))));
      }
      return out;
    }
    _renderPaletteIntoPanel() {
      const state = this._selectedState();
      if (!state) return;
      this._eachLive(`.${ROOT_CLASS}__palette-scroll`, (node) => node.replaceChildren(...this._paletteScrollContent(state)));
    }
    _renderNameToken(state) {
      return h("button", {
        type: "button",
        class: `${ROOT_CLASS}__token`,
        title: "Record name",
        "data-tps-insert": "{name}",
        style: state.collectionColor ? { color: state.collectionColor, borderColor: state.collectionColor } : null
      }, h("span", { class: "ti ti-abc", style: state.collectionColor ? { color: state.collectionColor } : null, "aria-hidden": "true" }), "Name");
    }
    _renderFieldToken(field) {
      if (!isDateLikeField(field)) {
        return h(
          "button",
          {
            type: "button",
            class: `${ROOT_CLASS}__token`,
            title: field.id,
            "data-tps-insert": `{field:${field.id}}`
          },
          h("span", { class: iconClass(field.icon), "aria-hidden": "true" }),
          h("span", { class: `${ROOT_CLASS}__token-label` }, field.label || "Field")
        );
      }
      const active = this._datePopoverFieldId === field.id;
      return h(
        "div",
        {
          class: [`${ROOT_CLASS}__token`, `${ROOT_CLASS}__token--date`, active ? `${ROOT_CLASS}__token--date-active` : ""].filter(Boolean).join(" "),
          title: field.id
        },
        h(
          "button",
          {
            type: "button",
            class: `${ROOT_CLASS}__token-date-main`,
            "data-tps-insert": `{field:${field.id}}`
          },
          h("span", { class: iconClass(field.icon || "ti-calendar"), "aria-hidden": "true" }),
          h("span", { class: `${ROOT_CLASS}__token-label` }, field.label || "Field")
        ),
        h("button", {
          type: "button",
          class: `${ROOT_CLASS}__token-gear`,
          "data-tps-tip": `Format ${field.label || "date field"}`,
          "aria-label": `Format ${field.label || "date field"}`,
          "aria-pressed": String(active),
          "data-tps-gear": field.id
        }, h("span", { class: "ti ti-settings", "aria-hidden": "true" }))
      );
    }
    _renderTemplateInput(state, locked) {
      return h(
        "div",
        { class: `${ROOT_CLASS}__template` },
        h("span", { class: `${ROOT_CLASS}__template-caption` }, "Title template"),
        h("input", {
          type: "text",
          class: `${ROOT_CLASS}__template-input`,
          spellcheck: "false",
          autocomplete: "off",
          readonly: locked ? "readonly" : null,
          placeholder: "Type text and click properties + separators below",
          value: this._editorTemplate,
          onInput: /* @__PURE__ */ __name((e) => this._patchEditorTemplate(e.currentTarget.value, false), "onInput"),
          onBlur: /* @__PURE__ */ __name((e) => this._patchEditorTemplate(e.currentTarget.value, false), "onBlur")
        }),
        h(
          "div",
          { class: `${ROOT_CLASS}__template-help` },
          h(
            "span",
            { class: `${ROOT_CLASS}__template-help-line` },
            h("b", { class: `${ROOT_CLASS}__hl-bold` }, "**bold**"),
            " \xB7 ",
            h("i", { class: `${ROOT_CLASS}__hl-italic` }, "*italic*"),
            " \xB7 ",
            h("span", { class: `${ROOT_CLASS}__hl-faded` }, "%faded%")
          ),
          h(
            "span",
            { class: `${ROOT_CLASS}__template-help-line ${ROOT_CLASS}__template-help-line--para` },
            h("code", { class: `${ROOT_CLASS}__hl-code` }, "?{ \u2026 }"),
            " \u2014 contents shown only if a property inside has a value, otherwise hidden. Useful for adding formatting only when a property is filled, e.g. ",
            h("code", { class: `${ROOT_CLASS}__hl-code` }, "{Name}?{ \u2022 {Status}}"),
            " adds a space and \u2022 after the name, but only if a status is filled."
          )
        )
      );
    }
    _renderDatePopover(state) {
      const field = findFieldForFormat(state, this._datePopoverFieldId);
      if (!field) {
        return null;
      }
      const defaultFormat = isDateOnlyField(field) ? this._draft.dateFormat : this._draft.dateTimeFormat;
      const value = this._draft.fieldFormats[field.id] || defaultFormat;
      const presets = isDateOnlyField(field) ? ["YYYY-MM-DD", "YYYY/MM/DD", "MM/DD/YYYY", "DD/MM/YYYY"] : ["YYYY-MM-DDTHH:mm:ss", "YYYY-MM-DD HH:mm", "YYYY-MM-DDTHH:mm", "MM/DD/YYYY HH:mm"];
      return h(
        "div",
        { class: `${ROOT_CLASS}__date-popover` },
        h(
          "div",
          { class: `${ROOT_CLASS}__date-popover-head` },
          h("div", { class: `${ROOT_CLASS}__date-format-title` }, `Format \xB7 ${field.label || "Date field"}`),
          iconButton({ icon: "ti-x", label: "Close date format options", onClick: /* @__PURE__ */ __name(() => {
            this._datePopoverFieldId = null;
            this._renderPanel();
          }, "onClick") })
        ),
        h("div", { class: `${ROOT_CLASS}__date-preview` }, this._formatPreviewForField(field, value)),
        h(
          "div",
          { class: `${ROOT_CLASS}__format-buttons` },
          ...presets.map((format) => button({ label: format, onClick: /* @__PURE__ */ __name(() => this._patchFieldFormat(field.id, format), "onClick") })),
          button({ label: "Default", onClick: /* @__PURE__ */ __name(() => this._patchFieldFormat(field.id, ""), "onClick") })
        ),
        h("input", {
          type: "text",
          class: `${ROOT_CLASS}__date-input`,
          value,
          placeholder: defaultFormat,
          onInput: /* @__PURE__ */ __name((e) => this._patchFieldFormatPreview(field.id, e.target.value), "onInput"),
          onChange: /* @__PURE__ */ __name((e) => this._patchFieldFormat(field.id, e.target.value), "onChange")
        }),
        h(
          "div",
          { class: `${ROOT_CLASS}__date-hud` },
          h("span", null, "YYYY/YY year"),
          h("span", null, "MMMM/MMM month"),
          h("span", null, "MM/M month"),
          h("span", null, "DD/D day"),
          h("span", null, "dddd/ddd weekday"),
          h("span", null, "HH/H or hh/h hour"),
          h("span", null, "mm/m minute"),
          h("span", null, "ss/s second"),
          h("span", null, "SSS ms"),
          h("span", null, "A/a ampm"),
          h("span", null, "Z/ZZ offset"),
          h("span", null, "[text] literal")
        )
      );
    }
    _formatPreviewForField(field, format) {
      const sample = new Date(2026, 4, 4, 13, 45, 30);
      return isDateOnlyField(field) ? formatDate(sample, format) : formatDateTime(sample, format);
    }
    _renderPreviewIntoPanel() {
      this._eachLive(`.${ROOT_CLASS}__preview`, (target) => {
        target.replaceChildren(...this._previewRows());
      });
    }
    _renderPreview() {
      const longest = this._selectedRecords.reduce((max, record) => Math.max(max, safeRecordName(record).length), 8);
      return h("div", {
        class: `${ROOT_CLASS}__preview`,
        style: { "--btp-preview-left": `${Math.min(Math.max(longest, 4), 24)}ch` }
      }, ...this._previewRows());
    }
    _previewRows() {
      if (!this._selectedRecords.length) {
        return [h("div", { class: `${ROOT_CLASS}__empty-preview` }, "No records to preview yet.")];
      }
      return this._selectedRecords.map((record) => {
        const original = safeRecordName(record);
        const previewConfig = cloneBuildTitleConfig({ ...this._draft, enabled: true });
        const built = renderTitle(record, previewConfig);
        const builtNode = h(
          "span",
          { class: `${ROOT_CLASS}__preview-built` },
          ...renderTitleParts(record, previewConfig, this._selectedState()?.collectionColor || null)
        );
        return h(
          "div",
          { class: `${ROOT_CLASS}__preview-row` },
          h("span", { class: `${ROOT_CLASS}__preview-original` }, original),
          h("span", { class: "ti ti-arrow-right", "aria-hidden": "true" }),
          builtNode.textContent ? builtNode : h("span", { class: `${ROOT_CLASS}__preview-built` }, built || original)
        );
      });
    }
    _toast(title, message) {
      try {
        this.ui.addToaster({ title, message, dismissible: true, autoDestroyTime: 3500 });
      } catch {
      }
    }
    _css() {
      return `
			.${ROOT_CLASS}-panel .tps-button--primary {
				background: transparent;
				border-color: var(--tps-divider);
				color: var(--tps-text-muted);
			}
			.${ROOT_CLASS}-panel .tps-button--primary:hover:not(:disabled) {
				background: var(--tps-success-soft);
				border-color: var(--tps-success);
				color: var(--tps-success);
			}
			.${ROOT_CLASS}-panel .tps-button--ghost {
				border-color: var(--tps-divider);
				color: var(--tps-text);
			}
			.${ROOT_CLASS}-panel .tps-button--danger {
				border-color: var(--tps-divider);
				color: var(--tps-text-muted);
			}
			.${ROOT_CLASS}-panel .tps-button--danger:hover:not(:disabled) {
				background: var(--tps-danger-soft);
				color: var(--tps-danger);
			}
			.${ROOT_CLASS}-panel .${ROOT_CLASS}__notice {
				padding: var(--tps-space-2) var(--tps-space-3);
				margin: 0 0 var(--tps-space-3);
				border: 1px solid var(--tps-divider);
				border-radius: var(--tps-radius-md);
				background: var(--tps-bg-input);
				color: var(--tps-text-muted);
				font-size: var(--tps-fs-hint);
			}
			.${ROOT_CLASS}-panel .${ROOT_CLASS}__notice--danger {
				border-color: color-mix(in srgb, var(--tps-danger) 55%, transparent);
				background: var(--tps-danger-soft, color-mix(in srgb, var(--tps-danger) 12%, transparent));
				color: var(--tps-danger);
			}
			.${ROOT_CLASS}-panel .${ROOT_CLASS}__icon-button {
				display: inline-flex;
				align-items: center;
				justify-content: center;
				flex: 0 0 auto;
				width: 28px;
				height: 28px;
				border: 1px solid var(--tps-divider);
				border-radius: var(--tps-radius-sm);
				background: transparent;
				color: var(--tps-text-muted);
				cursor: pointer;
			}
			.${ROOT_CLASS}-panel .${ROOT_CLASS}__icon-button:hover {
				background: var(--tps-bg-hover);
				color: var(--tps-text);
				border-color: var(--tps-border);
			}
			.${ROOT_CLASS}-panel .${ROOT_CLASS}__icon-button:disabled {
				opacity: 0.45;
				cursor: not-allowed;
			}
			.${ROOT_CLASS}-panel .${ROOT_CLASS}__status {
				flex: 0 0 auto;
				font-size: 10px;
				color: var(--tps-text-muted);
				border: 1px solid var(--tps-divider);
				border-radius: var(--tps-radius-pill);
				padding: 1px 7px;
			}
			.${ROOT_CLASS}-panel .${ROOT_CLASS}__status--active {
				color: var(--tps-accent);
				border-color: color-mix(in srgb, var(--tps-accent) 50%, transparent);
			}
			.${ROOT_CLASS}-panel .${ROOT_CLASS}__status--review {
				color: var(--tps-warning);
				border-color: color-mix(in srgb, var(--tps-warning) 45%, transparent);
			}
			.${ROOT_CLASS}-panel .${ROOT_CLASS}__status--disabled {
				color: var(--tps-danger);
				border-color: color-mix(in srgb, var(--tps-danger) 45%, transparent);
			}
			.${ROOT_CLASS}-panel .${ROOT_CLASS}__empty-list {
				padding: var(--tps-space-3);
				color: var(--tps-text-muted);
				font-size: var(--tps-fs-hint);
			}

			/* \u2500\u2500 List mode \u2500\u2500 */
			.${ROOT_CLASS}-panel .${ROOT_CLASS}__list-view {
				display: flex;
				flex-direction: column;
				gap: var(--tps-space-3);
				min-height: 0;
			}
			.${ROOT_CLASS}-panel .${ROOT_CLASS}__list-toolbar {
				display: flex;
				align-items: center;
				gap: var(--tps-space-2);
				flex-wrap: wrap;
			}
			.${ROOT_CLASS}-panel .${ROOT_CLASS}__collection-search {
				flex: 1 1 220px;
				min-width: 180px;
			}
			.${ROOT_CLASS}-panel .${ROOT_CLASS}__filter-row {
				display: flex;
				flex-wrap: wrap;
				gap: var(--tps-space-1);
			}
			.${ROOT_CLASS}-panel .${ROOT_CLASS}__filter-toggle {
				height: 26px;
				padding: 0 var(--tps-space-2);
				border: 1px solid var(--tps-divider);
				border-radius: var(--tps-radius-sm);
				background: transparent;
				color: var(--tps-text-muted);
				font: inherit;
				font-size: 11px;
				cursor: pointer;
			}
			.${ROOT_CLASS}-panel .${ROOT_CLASS}__filter-toggle:hover {
				background: var(--tps-bg-hover);
				color: var(--tps-text);
			}
			.${ROOT_CLASS}-panel .${ROOT_CLASS}__filter-toggle--active {
				background: var(--tps-accent-soft);
				color: var(--tps-accent);
				border-color: color-mix(in srgb, var(--tps-accent) 45%, transparent);
			}
			.${ROOT_CLASS}-panel .${ROOT_CLASS}__collection-list {
				display: flex;
				flex-direction: column;
				gap: var(--tps-space-1);
				min-height: 0;
			}
			.${ROOT_CLASS}-panel .${ROOT_CLASS}__row {
				display: grid;
				grid-template-columns: 22px minmax(0, 1fr) auto;
				align-items: center;
				gap: var(--tps-space-3);
				padding: var(--tps-space-2) var(--tps-space-3);
				border: 1px solid var(--tps-divider);
				border-radius: var(--tps-radius-md);
				background: var(--tps-bg-input);
				cursor: pointer;
			}
			.${ROOT_CLASS}-panel .${ROOT_CLASS}__row:hover,
			.${ROOT_CLASS}-panel .${ROOT_CLASS}__row:focus-visible {
				background: var(--tps-bg-hover);
				border-color: var(--tps-border);
				outline: none;
			}
			.${ROOT_CLASS}-panel .${ROOT_CLASS}__row:focus-visible {
				box-shadow: 0 0 0 1px var(--tps-accent) inset;
			}
			.${ROOT_CLASS}-panel .${ROOT_CLASS}__row-edit {
				display: inline-flex;
				align-items: center;
				gap: 2px;
				color: var(--tps-text-muted);
				font-size: var(--tps-fs-button);
				opacity: 0;
				transition: opacity var(--tps-dur-fast, 120ms) ease;
			}
			.${ROOT_CLASS}-panel .${ROOT_CLASS}__row:hover .${ROOT_CLASS}__row-edit,
			.${ROOT_CLASS}-panel .${ROOT_CLASS}__row:focus-visible .${ROOT_CLASS}__row-edit {
				opacity: 1;
			}
			.${ROOT_CLASS}-panel .${ROOT_CLASS}__row--disabled {
				opacity: 0.55;
			}
			.${ROOT_CLASS}-panel .${ROOT_CLASS}__row-icon {
				color: var(--tps-text-muted);
				font-size: 16px;
			}
			.${ROOT_CLASS}-panel .${ROOT_CLASS}__row-main {
				min-width: 0;
				display: flex;
				flex-direction: column;
				gap: 2px;
			}
			.${ROOT_CLASS}-panel .${ROOT_CLASS}__row-head {
				display: flex;
				align-items: center;
				gap: var(--tps-space-2);
				min-width: 0;
			}
			.${ROOT_CLASS}-panel .${ROOT_CLASS}__row-name {
				font-weight: var(--tps-fw-semibold);
				color: var(--tps-text);
				overflow: hidden;
				white-space: nowrap;
				text-overflow: ellipsis;
			}
			.${ROOT_CLASS}-panel .${ROOT_CLASS}__row-sample {
				display: flex;
				align-items: center;
				gap: var(--tps-space-2);
				min-width: 0;
				font-size: var(--tps-fs-hint);
				color: var(--tps-text);
			}
			.${ROOT_CLASS}-panel .${ROOT_CLASS}__row-sample .ti {
				color: var(--tps-text-muted);
				font-size: 13px;
			}
			.${ROOT_CLASS}-panel .${ROOT_CLASS}__row-sample--muted {
				color: var(--tps-text-muted);
				font-style: italic;
			}
			.${ROOT_CLASS}-panel .${ROOT_CLASS}__row-sample-old {
				color: var(--tps-text-muted);
				overflow: hidden;
				white-space: nowrap;
				text-overflow: ellipsis;
				max-width: 40%;
			}
			.${ROOT_CLASS}-panel .${ROOT_CLASS}__row-sample-new {
				color: var(--tps-accent);
				overflow: hidden;
				white-space: nowrap;
				text-overflow: ellipsis;
			}

			/* \u2500\u2500 Builder mode \u2500\u2500 */
			.${ROOT_CLASS}-panel .${ROOT_CLASS}__builder {
				display: flex;
				flex-direction: column;
				gap: var(--tps-space-3);
				min-width: 0;
			}
			.${ROOT_CLASS}-panel .${ROOT_CLASS}__builder-bar {
				display: flex;
				align-items: center;
				gap: var(--tps-space-3);
				flex-wrap: wrap;
				padding-bottom: var(--tps-space-3);
				border-bottom: 1px solid var(--tps-divider);
			}
			.${ROOT_CLASS}-panel .${ROOT_CLASS}__back-btn {
				display: inline-flex;
				align-items: center;
				gap: var(--tps-space-1);
				flex: 0 0 auto;
				height: var(--tps-control-h-md);
				padding: 0 var(--tps-space-3);
				border: 1px solid var(--tps-border);
				border-radius: var(--tps-radius-sm);
				background: var(--tps-bg-input);
				color: var(--tps-text);
				font: inherit;
				font-size: var(--tps-fs-button);
				font-weight: var(--tps-fw-medium);
				cursor: pointer;
			}
			.${ROOT_CLASS}-panel .${ROOT_CLASS}__back-btn:hover {
				background: var(--tps-bg-hover);
				border-color: var(--tps-border-strong, var(--tps-border));
				color: var(--tps-text);
			}
			.${ROOT_CLASS}-panel .${ROOT_CLASS}__back-btn .ti {
				font-size: 15px;
			}
			.${ROOT_CLASS}-panel .${ROOT_CLASS}__builder-title {
				display: inline-flex;
				align-items: center;
				gap: var(--tps-space-2);
				min-width: 0;
				flex: 1 1 auto;
				font-size: 16px;
				font-weight: var(--tps-fw-semibold);
				color: var(--tps-text);
			}
			.${ROOT_CLASS}-panel .${ROOT_CLASS}__builder-title-name {
				overflow: hidden;
				white-space: nowrap;
				text-overflow: ellipsis;
			}
			.${ROOT_CLASS}-panel .${ROOT_CLASS}__builder-title-icon {
				flex: 0 0 auto;
			}
			.${ROOT_CLASS}-panel .${ROOT_CLASS}__builder-actions {
				display: flex;
				align-items: center;
				gap: var(--tps-space-2);
				flex: 0 0 auto;
			}

			/* \u2500\u2500 Preview \u2500\u2500 */
			.${ROOT_CLASS}-panel .${ROOT_CLASS}__preview-block {
				display: flex;
				flex-direction: column;
				gap: var(--tps-space-1);
				padding: var(--tps-space-3);
				border: 1px solid var(--tps-divider);
				border-radius: var(--tps-radius-md);
				background: var(--tps-bg-input);
			}
			.${ROOT_CLASS}-panel .${ROOT_CLASS}__preview-head {
				display: flex;
				align-items: center;
				justify-content: space-between;
				gap: var(--tps-space-2);
			}
			.${ROOT_CLASS}-panel .${ROOT_CLASS}__preview-caption,
			.${ROOT_CLASS}-panel .${ROOT_CLASS}__palette-caption {
				font-size: var(--tps-fs-section);
				font-weight: var(--tps-fw-semibold);
				letter-spacing: var(--tps-ls-section);
				text-transform: uppercase;
				color: var(--tps-text-muted);
			}
			.${ROOT_CLASS}-panel .${ROOT_CLASS}__preview {
				display: flex;
				flex-direction: column;
			}
			.${ROOT_CLASS}-panel .${ROOT_CLASS}__preview-row {
				display: grid;
				grid-template-columns: var(--btp-preview-left, max-content) 16px minmax(0, 1fr);
				align-items: center;
				column-gap: var(--tps-space-3);
			}
			.${ROOT_CLASS}-panel .${ROOT_CLASS}__preview-row > * {
				padding: 3px 0;
			}
			.${ROOT_CLASS}-panel .${ROOT_CLASS}__preview-row .ti {
				color: var(--tps-text-muted);
			}
			.${ROOT_CLASS}-panel .${ROOT_CLASS}__preview-original,
			.${ROOT_CLASS}-panel .${ROOT_CLASS}__preview-built {
				overflow: hidden;
				white-space: nowrap;
				text-overflow: ellipsis;
			}
			.${ROOT_CLASS}-panel .${ROOT_CLASS}__preview-original {
				color: var(--tps-text-muted);
			}
			.${ROOT_CLASS}-panel .${ROOT_CLASS}__empty-preview {
				color: var(--tps-text-muted);
				font-size: var(--tps-fs-hint);
			}

			/* \u2500\u2500 Palette \u2500\u2500 */
			.${ROOT_CLASS}-panel .${ROOT_CLASS}__palette {
				display: flex;
				flex-direction: column;
				gap: var(--tps-space-2);
				position: relative;
			}
			/* When the date-format panel is open, join it seamlessly to the chip
			   grid: no gap, shared background, and the chip grid's original bottom
			   border becomes the single 1px divider between the two areas. */
			.${ROOT_CLASS}-panel .${ROOT_CLASS}__palette--open {
				gap: 0;
			}
			.${ROOT_CLASS}-panel .${ROOT_CLASS}__palette--open .${ROOT_CLASS}__palette-scroll {
				border-bottom-left-radius: 0;
				border-bottom-right-radius: 0;
			}
			.${ROOT_CLASS}-panel .${ROOT_CLASS}__palette-head {
				display: flex;
				align-items: center;
				gap: var(--tps-space-3);
				flex-wrap: wrap;
			}
			.${ROOT_CLASS}-panel .${ROOT_CLASS}__palette-search {
				flex: 1 1 200px;
				min-width: 160px;
			}
			.${ROOT_CLASS}-panel .${ROOT_CLASS}__palette-scroll {
				max-height: 240px;
				overflow-y: auto;
				display: flex;
				flex-direction: column;
				gap: var(--tps-space-2);
				padding: var(--tps-space-3);
				border: 1px solid var(--tps-divider);
				border-radius: var(--tps-radius-md);
				background: var(--tps-bg-input);
			}
			.${ROOT_CLASS}-panel .${ROOT_CLASS}__palette-group-label {
				font-size: 10px;
				font-weight: var(--tps-fw-semibold);
				letter-spacing: var(--tps-ls-section);
				text-transform: uppercase;
				color: var(--tps-text-muted);
				padding: 0 0 2px;
			}
			.${ROOT_CLASS}-panel .${ROOT_CLASS}__palette-grid {
				display: grid;
				grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
				gap: var(--tps-space-1);
			}
			.${ROOT_CLASS}-panel .${ROOT_CLASS}__token {
				display: inline-flex;
				align-items: center;
				gap: var(--tps-space-1);
				height: var(--tps-control-h-sm);
				padding: 0 var(--tps-space-2);
				border: 1px solid var(--tps-divider);
				border-radius: var(--tps-radius-sm);
				background: transparent;
				color: var(--tps-text);
				font: inherit;
				font-size: var(--tps-fs-button);
				cursor: pointer;
				overflow: hidden;
			}
			.${ROOT_CLASS}-panel button.${ROOT_CLASS}__token:hover {
				background: var(--tps-bg-hover);
				border-color: var(--tps-border);
			}
			.${ROOT_CLASS}-panel .${ROOT_CLASS}__token .ti {
				flex: 0 0 auto;
				color: var(--tps-text-muted);
			}
			.${ROOT_CLASS}-panel .${ROOT_CLASS}__token-label {
				overflow: hidden;
				white-space: nowrap;
				text-overflow: ellipsis;
			}
			.${ROOT_CLASS}-panel .${ROOT_CLASS}__token--date {
				padding: 0;
			}
			.${ROOT_CLASS}-panel .${ROOT_CLASS}__token--date-active {
				border-color: var(--tps-accent);
				box-shadow: 0 0 0 1px var(--tps-accent) inset;
			}
			.${ROOT_CLASS}-panel .${ROOT_CLASS}__token-date-main {
				display: inline-flex;
				align-items: center;
				gap: var(--tps-space-1);
				flex: 1 1 auto;
				min-width: 0;
				height: 100%;
				padding: 0 var(--tps-space-2);
				border: 0;
				background: transparent;
				color: inherit;
				font: inherit;
				cursor: pointer;
			}
			.${ROOT_CLASS}-panel .${ROOT_CLASS}__token-date-main:hover {
				background: var(--tps-bg-hover);
			}
			.${ROOT_CLASS}-panel .${ROOT_CLASS}__token-gear {
				display: inline-flex;
				align-items: center;
				justify-content: center;
				flex: 0 0 auto;
				width: 28px;
				height: 100%;
				border: 0;
				border-left: 1px solid var(--tps-divider);
				background: transparent;
				color: var(--tps-text-muted);
				font: inherit;
				cursor: pointer;
			}
			.${ROOT_CLASS}-panel .${ROOT_CLASS}__token-gear:hover {
				background: var(--tps-bg-hover);
				color: var(--tps-text);
			}
			.${ROOT_CLASS}-panel .${ROOT_CLASS}__token--date-active .${ROOT_CLASS}__token-gear {
				color: var(--tps-accent);
				border-left-color: color-mix(in srgb, var(--tps-accent) 45%, transparent);
			}

			/* \u2500\u2500 Date format panel \u2014 seamlessly attached under the chip grid \u2500\u2500 */
			.${ROOT_CLASS}-panel .${ROOT_CLASS}__date-popover {
				display: grid;
				gap: var(--tps-space-2);
				padding: var(--tps-space-3);
				border: 1px solid var(--tps-divider);
				border-top: 0;
				border-radius: 0 0 var(--tps-radius-md) var(--tps-radius-md);
				background: var(--tps-bg-input);
			}
			.${ROOT_CLASS}-panel .${ROOT_CLASS}__date-popover-head {
				display: flex;
				align-items: center;
				justify-content: space-between;
				gap: var(--tps-space-2);
			}
			.${ROOT_CLASS}-panel .${ROOT_CLASS}__date-format-title {
				color: var(--tps-text);
				font-size: var(--tps-fs-label);
				font-weight: var(--tps-fw-medium);
			}
			.${ROOT_CLASS}-panel .${ROOT_CLASS}__date-preview {
				padding: var(--tps-space-2);
				border-radius: var(--tps-radius-sm);
				background: var(--tps-bg-input);
				color: var(--tps-accent);
				font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, "Courier New", monospace;
			}
			.${ROOT_CLASS}-panel .${ROOT_CLASS}__format-buttons {
				display: flex;
				flex-wrap: wrap;
				gap: var(--tps-space-1);
			}
			.${ROOT_CLASS}-panel .${ROOT_CLASS}__date-input {
				font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, "Courier New", monospace;
			}
			.${ROOT_CLASS}-panel .${ROOT_CLASS}__date-hud {
				display: flex;
				flex-wrap: wrap;
				gap: var(--tps-space-1) var(--tps-space-2);
				color: var(--tps-text-muted);
				font-size: 11px;
			}

			/* \u2500\u2500 Themed native inputs (shared CSS only styles number/range) \u2500\u2500 */
			.${ROOT_CLASS}-panel input[type="text"],
			.${ROOT_CLASS}-panel input[type="search"] {
				appearance: none;
				-webkit-appearance: none;
				height: var(--tps-control-h-md);
				padding: 0 var(--tps-space-2);
				background: var(--tps-bg-input);
				color: var(--tps-text);
				border: 1px solid var(--tps-border);
				border-radius: var(--tps-radius-sm);
				font: inherit;
				font-size: var(--tps-fs-base, 13px);
			}
			.${ROOT_CLASS}-panel input[type="text"]::placeholder,
			.${ROOT_CLASS}-panel input[type="search"]::placeholder {
				color: var(--tps-text-muted);
			}
			.${ROOT_CLASS}-panel input[type="text"]:focus,
			.${ROOT_CLASS}-panel input[type="search"]:focus {
				outline: none;
				border-color: var(--tps-accent);
				box-shadow: 0 0 0 1px var(--tps-accent) inset;
			}
			.${ROOT_CLASS}-panel input[type="search"]::-webkit-search-cancel-button {
				-webkit-appearance: none;
				appearance: none;
			}

			/* \u2500\u2500 Title template (top, full width, single line) \u2500\u2500 */
			.${ROOT_CLASS}-panel .${ROOT_CLASS}__template {
				display: flex;
				flex-direction: column;
				gap: var(--tps-space-2);
				padding: var(--tps-space-3) var(--tps-space-3) var(--tps-space-4);
				border: 1px solid var(--tps-border);
				border-radius: var(--tps-radius-md);
				background: var(--tps-bg-hover);
			}
			.${ROOT_CLASS}-panel .${ROOT_CLASS}__template-caption {
				font-size: var(--tps-fs-section);
				font-weight: var(--tps-fw-semibold);
				letter-spacing: var(--tps-ls-section);
				text-transform: uppercase;
				color: var(--tps-accent);
			}
			.${ROOT_CLASS}-panel .${ROOT_CLASS}__template-input {
				width: 100%;
				height: 48px;
				padding: 0 var(--tps-space-3);
				font-size: 16px;
				font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, "Courier New", monospace;
				border-width: 2px;
			}
			.${ROOT_CLASS}-panel .${ROOT_CLASS}__template-help {
				display: flex;
				flex-direction: column;
				gap: 3px;
				font-size: var(--tps-fs-hint);
				color: var(--tps-text-muted);
			}
			.${ROOT_CLASS}-panel .${ROOT_CLASS}__template-help-line {
				display: flex;
				flex-wrap: wrap;
				align-items: baseline;
				gap: 0 6px;
			}
			.${ROOT_CLASS}-panel .${ROOT_CLASS}__template-help-line--para {
				display: block;
				margin-top: var(--tps-space-3);
				line-height: 1.5;
			}
			.${ROOT_CLASS}-panel .${ROOT_CLASS}__template-help-line--para .${ROOT_CLASS}__hl-code {
				margin: 0 2px;
			}
			.${ROOT_CLASS}-panel .${ROOT_CLASS}__template-help-line .${ROOT_CLASS}__hl-bold,
			.${ROOT_CLASS}-panel .${ROOT_CLASS}__template-help-line .${ROOT_CLASS}__hl-italic,
			.${ROOT_CLASS}-panel .${ROOT_CLASS}__template-help-line .${ROOT_CLASS}__hl-faded {
				font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
				color: var(--tps-text);
			}
			.${ROOT_CLASS}-panel .${ROOT_CLASS}__hl-bold { font-weight: 650; }
			.${ROOT_CLASS}-panel .${ROOT_CLASS}__hl-italic { font-style: italic; }
			.${ROOT_CLASS}-panel .${ROOT_CLASS}__hl-faded { opacity: 0.5; }
			.${ROOT_CLASS}-panel .${ROOT_CLASS}__hl-code {
				font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
				color: var(--tps-text);
				background: var(--tps-bg-input);
				border: 1px solid var(--tps-divider);
				border-radius: var(--tps-radius-sm);
				padding: 0 4px;
			}

			/* \u2500\u2500 Dimmed body when disabled \u2500\u2500 */
			.${ROOT_CLASS}-panel .${ROOT_CLASS}__builder-body {
				display: flex;
				flex-direction: column;
				gap: var(--tps-space-3);
				transition: opacity var(--tps-dur-fast, 120ms) ease;
			}
			.${ROOT_CLASS}-panel .${ROOT_CLASS}__builder-body--dimmed {
				opacity: 0.45;
			}
			.${ROOT_CLASS}-panel .${ROOT_CLASS}__builder-body--locked {
				pointer-events: none;
				user-select: none;
			}

			/* \u2500\u2500 Separators + settings \u2500\u2500 */
			.${ROOT_CLASS}-panel .${ROOT_CLASS}__tools-row {
				display: flex;
				align-items: center;
				gap: var(--tps-space-3);
				flex-wrap: wrap;
			}
			.${ROOT_CLASS}-panel .${ROOT_CLASS}__tools-row .${ROOT_CLASS}__palette-search {
				flex: 1 1 220px;
				min-width: 160px;
			}
			.${ROOT_CLASS}-panel .${ROOT_CLASS}__quick-row {
				display: flex;
				align-items: center;
				gap: var(--tps-space-1);
				flex-wrap: wrap;
				flex: 0 0 auto;
			}
			.${ROOT_CLASS}-panel .${ROOT_CLASS}__quick-row .tps-button {
				min-width: 36px;
			}
			.${ROOT_CLASS}-panel .${ROOT_CLASS}__settings-row {
				display: flex;
				flex-wrap: wrap;
				align-items: center;
				gap: var(--tps-space-4);
			}
			.${ROOT_CLASS}-panel .${ROOT_CLASS}__field-row {
				display: flex;
				align-items: center;
				gap: var(--tps-space-2);
			}
			.${ROOT_CLASS}-panel .${ROOT_CLASS}__field-row input {
				width: 88px;
			}
			.${ROOT_CLASS}-panel .${ROOT_CLASS}__action-status {
				color: var(--tps-text-muted);
				font-size: var(--tps-fs-hint);
				min-height: 1em;
			}

			@media (max-width: 560px) {
				.${ROOT_CLASS}-panel .${ROOT_CLASS}__palette-grid {
					grid-template-columns: 1fr;
				}
				.${ROOT_CLASS}-panel .${ROOT_CLASS}__builder-title {
					order: 3;
					flex-basis: 100%;
				}
			}
		`;
    }
  };
  function iconButton({ icon, label, onClick, disabled }) {
    return h("button", {
      type: "button",
      class: `${ROOT_CLASS}__icon-button`,
      title: label,
      "aria-label": label,
      disabled: !!disabled,
      onClick
    }, h("span", { class: iconClass(icon), "aria-hidden": "true" }));
  }
  __name(iconButton, "iconButton");
  function classifyCode(code) {
    const text = String(code || "");
    if (text.includes(MANAGED_START) && text.includes(MANAGED_END)) return "managed";
    if (!text.trim()) return "blank";
    if (isSafeToReplaceCollectionCode(text)) return "blank";
    return "conflict";
  }
  __name(classifyCode, "classifyCode");
  function isSafeToReplaceCollectionCode(code) {
    const text = stripCommentsAndStrings(code);
    const customSignals = [
      "customizeRecordTitle",
      "customizeSidebarItems",
      "setSidebarWidget",
      "addCollectionNavigationButton",
      "this.properties",
      "this.views",
      "this.collection",
      "this.events",
      "this.data",
      "this.ws",
      "localStorage",
      "fetch",
      "savePlugin",
      "saveConfiguration",
      "previewPlugin",
      "insertFromMarkdown",
      "createRecord",
      "createLineItem",
      "prop(",
      "setName"
    ];
    return !customSignals.some((signal) => text.includes(signal));
  }
  __name(isSafeToReplaceCollectionCode, "isSafeToReplaceCollectionCode");
  function stripCommentsAndStrings(code) {
    return String(code || "").replace(/\/\*[\s\S]*?\*\//g, "").replace(/\/\/.*$/gm, "").replace(/(['"`])(?:\\[\s\S]|(?!\1)[\s\S])*?\1/g, "");
  }
  __name(stripCommentsAndStrings, "stripCommentsAndStrings");
  function replaceManagedBlock(code, block) {
    const text = String(code || "");
    const start = text.indexOf(MANAGED_START);
    const end = text.indexOf(MANAGED_END);
    if (start < 0 || end < start) return block;
    return `${text.slice(0, start)}${block}${text.slice(end + MANAGED_END.length)}`;
  }
  __name(replaceManagedBlock, "replaceManagedBlock");
  function makeManagedCollectionCode() {
    return String.raw`${MANAGED_START}
class Plugin extends CollectionPlugin {
	onLoad() {
		this.customizeRecordTitle(({record}) => {
			const conf = this.getConfiguration();
			const custom = conf && conf.custom ? conf.custom : {};
			return buildTitleFromProperties(record, custom.buildTitle);
		});
	}

	onUnload() {}
}

function buildTitleFromProperties(record, rawConfig) {
	const config = normalizeBuildTitleConfig(rawConfig);
	if (!config.enabled) return null;
	try {
		const built = renderBuildTitleTemplate(record, config.template, config);
		return built || null;
	} catch {
		return null;
	}
}

function normalizeBuildTitleConfig(raw) {
	const fieldFormats = raw && raw.fieldFormats && typeof raw.fieldFormats === 'object' ? raw.fieldFormats : {};
	return {
		version: 1,
		enabled: raw && raw.enabled === false ? false : true,
		template: raw && typeof raw.template === 'string' ? raw.template : '{name}',
		omitEmpty: raw && raw.omitEmpty === false ? false : true,
		normalizeWhitespace: raw && raw.normalizeWhitespace === false ? false : true,
		multiValueSeparator: raw && typeof raw.multiValueSeparator === 'string' ? raw.multiValueSeparator : ', ',
		dateFormat: raw && typeof raw.dateFormat === 'string' ? raw.dateFormat : 'YYYY-MM-DD',
		dateTimeFormat: raw && typeof raw.dateTimeFormat === 'string' ? raw.dateTimeFormat : 'YYYY-MM-DDTHH:mm:ss',
		fieldFormats,
	};
}

function renderBuildTitleTemplate(record, template, config) {
	const result = renderBuildTitleChunk(record, String(template || ''), config, 0, null);
	let text = stripBuildTitleInlineMarks(result.text);
	if (config.normalizeWhitespace) {
		text = text.replace(/\s+/g, ' ');
		if (!config.preserveEdgeWhitespace) text = text.trim();
	}
	return text;
}

function stripBuildTitleInlineMarks(text) {
	return String(text || '')
		.replace(/\*\*([\s\S]*?)\*\*/g, '$1')
		.replace(/\*([\s\S]*?)\*/g, '$1')
		.replace(/%([\s\S]*?)%/g, '$1');
}

function renderBuildTitleChunk(record, template, config, start, stopChar) {
	let text = '';
	let hasValue = false;
	let i = start;
	while (i < template.length) {
		const ch = template[i];
		if (stopChar && ch === stopChar) return { text, hasValue, index: i + 1 };
		if (ch === '\\' && i + 1 < template.length) {
			const next = template[i + 1];
			if ('{}[]\\'.includes(next)) {
				text += next;
				i += 2;
				continue;
			}
		}
		if (ch === '?' && template[i + 1] === '{') {
			const groupEnd = findBuildTitleGroupClose(template, i + 1);
			if (groupEnd >= 0) {
				const group = renderBuildTitleChunk(record, template.slice(i + 2, groupEnd), config, 0, null);
				if (group.hasValue) text += group.text;
				hasValue = hasValue || group.hasValue;
				i = groupEnd + 1;
				continue;
			}
		}
		if (ch === '[') {
			const group = renderBuildTitleChunk(record, template, config, i + 1, ']');
			if (group.hasValue) text += group.text;
			hasValue = hasValue || group.hasValue;
			i = group.index;
			continue;
		}
		if (ch === '{') {
			const close = findBuildTitleClose(template, i + 1, '}');
			if (close >= 0) {
				const token = template.slice(i + 1, close).trim();
				const value = resolveBuildTitleToken(record, token, config);
				if (value) {
					text += value;
					hasValue = true;
				}
				i = close + 1;
				continue;
			}
		}
		text += ch;
		i += 1;
	}
	return { text, hasValue, index: i };
}

function findBuildTitleClose(template, start, closeChar) {
	for (let i = start; i < template.length; i += 1) {
		if (template[i] === '\\') {
			i += 1;
			continue;
		}
		if (template[i] === closeChar) return i;
	}
	return -1;
}

function findBuildTitleGroupClose(template, openIndex) {
	let depth = 0;
	for (let i = openIndex; i < template.length; i += 1) {
		if (template[i] === '\\') {
			i += 1;
			continue;
		}
		if (template[i] === '{') depth += 1;
		else if (template[i] === '}') {
			depth -= 1;
			if (depth === 0) return i;
		}
	}
	return -1;
}

function resolveBuildTitleToken(record, token, config) {
	if (token === 'name' || token === 'title') return safeBuildTitleRecordName(record);
	if (!token.startsWith('field:')) return '';
	const fieldId = token.slice(6).trim();
	if (!fieldId) return '';
	const meta = resolveBuildTitleMetaField(record, fieldId, config);
	if (meta) return meta;
	try {
		const prop = record.prop(fieldId);
		if (!prop) return '';
		return propertyToBuildTitleText(prop, config, fieldId);
	} catch {
		return '';
	}
}

function templateHasBuildTitleNameToken(template) {
	return /(^|[^\\])\{\s*(name|title)\s*\}/.test(String(template || ''));
}

function resolveBuildTitleMetaField(record, fieldId, config) {
	try {
		if (fieldId === 'created_at' || fieldId === 'created') {
			const date = record.getCreatedAt && record.getCreatedAt();
			return date ? formatBuildTitleDateTime(date, buildTitleFieldFormat(config, fieldId, config.dateTimeFormat)) : '';
		}
		if (fieldId === 'updated_at' || fieldId === 'modified_at' || fieldId === 'modified') {
			const date = record.getUpdatedAt && record.getUpdatedAt();
			return date ? formatBuildTitleDateTime(date, buildTitleFieldFormat(config, fieldId, config.dateTimeFormat)) : '';
		}
	} catch {}
	return '';
}

function safeBuildTitleRecordName(record) {
	const readers = [
		() => record.text && record.text('Title'),
		() => record.text && record.text('Name'),
	];
	for (const read of readers) {
		try {
			const value = read();
			if (value != null && String(value).trim() !== '') return String(value);
		} catch {}
	}
	return '';
}

function propertyToBuildTitleText(prop, config, fieldId) {
	const join = (values) => values.filter(v => v != null && String(v).trim() !== '').map(v => String(v)).join(config.multiValueSeparator);
	try {
		const choices = prop.selectedChoiceLabels && prop.selectedChoiceLabels();
		if (choices && choices.length) return join(choices);
	} catch {}
	try {
		const users = prop.users && prop.users();
		if (users && users.length) return join(users.map(u => u && u.getDisplayName ? u.getDisplayName() : ''));
	} catch {}
	try {
		const records = prop.linkedRecords && prop.linkedRecords();
		if (records && records.length) return join(records.map(r => r && r.getName ? r.getName() : ''));
	} catch {}
	try {
		const dates = prop.datetimes && prop.datetimes();
		if (dates && dates.length) return join(dates.map(value => formatBuildTitleDateTime(value, buildTitleFieldFormat(config, fieldId, config.dateTimeFormat))));
	} catch {}
	try {
		const dateValues = prop.dates && prop.dates();
		if (dateValues && dateValues.length) return join(dateValues.map(value => formatBuildTitleDate(value, buildTitleFieldFormat(config, fieldId, config.dateFormat))));
	} catch {}
	try {
		const texts = prop.texts && prop.texts();
		if (texts && texts.length) return join(texts);
	} catch {}
	try {
		const numbers = prop.numbers && prop.numbers();
		if (numbers && numbers.length) return join(numbers);
	} catch {}
	try {
		const choice = prop.choiceLabel && prop.choiceLabel();
		if (choice) return String(choice);
	} catch {}
	try {
		const text = prop.text && prop.text();
		if (text) return String(text);
	} catch {}
	try {
		const number = prop.number && prop.number();
		if (number != null) return String(number);
	} catch {}
	try {
		const user = prop.user && prop.user();
		if (user && user.getDisplayName) return String(user.getDisplayName() || '');
	} catch {}
	try {
		const linked = prop.linkedRecord && prop.linkedRecord();
		if (linked && linked.getName) return String(linked.getName() || '');
	} catch {}
	return '';
}

function buildTitleFieldFormat(config, fieldId, fallback) {
	return config && config.fieldFormats && typeof config.fieldFormats[fieldId] === 'string'
		? config.fieldFormats[fieldId]
		: fallback;
}

function formatBuildTitleDateTime(value, pattern) {
	try {
		const date = value && value.toDate ? value.toDate() : value;
		if (date instanceof Date && !Number.isNaN(date.getTime())) return formatBuildTitleDatePattern(date, pattern || 'YYYY-MM-DDTHH:mm:ss');
	} catch {}
	return value == null ? '' : String(value);
}

function formatBuildTitleDate(value, pattern) {
	try {
		if (value instanceof Date && !Number.isNaN(value.getTime())) return formatBuildTitleDatePattern(value, pattern || 'YYYY-MM-DD');
	} catch {}
	return value == null ? '' : String(value);
}

function formatBuildTitleDatePattern(date, pattern) {
	const pad = (n) => String(n).padStart(2, '0');
	const pad3 = (n) => String(n).padStart(3, '0');
	const ordinal = (n) => {
		const mod10 = n % 10;
		const mod100 = n % 100;
		if (mod10 === 1 && mod100 !== 11) return String(n) + 'st';
		if (mod10 === 2 && mod100 !== 12) return String(n) + 'nd';
		if (mod10 === 3 && mod100 !== 13) return String(n) + 'rd';
		return String(n) + 'th';
	};
	const dayOfYear = (value) => {
		const start = new Date(value.getFullYear(), 0, 1);
		return Math.floor((new Date(value.getFullYear(), value.getMonth(), value.getDate()) - start) / 86400000) + 1;
	};
	const isoWeekInfo = (value) => {
		const d = new Date(Date.UTC(value.getFullYear(), value.getMonth(), value.getDate()));
		const day = d.getUTCDay() || 7;
		d.setUTCDate(d.getUTCDate() + 4 - day);
		const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
		const week = Math.ceil((((d - yearStart) / 86400000) + 1) / 7);
		return { year: d.getUTCFullYear(), week, day };
	};
	const offset = (colon) => {
		const total = -date.getTimezoneOffset();
		const sign = total >= 0 ? '+' : '-';
		const abs = Math.abs(total);
		const hours = pad(Math.floor(abs / 60));
		const minutes = pad(abs % 60);
		return colon ? sign + hours + ':' + minutes : sign + hours + minutes;
	};
	const fullYear = String(date.getFullYear());
	const month = date.getMonth() + 1;
	const day = date.getDate();
	const hours = date.getHours();
	const hours12 = hours % 12 || 12;
	const doy = dayOfYear(date);
	const iso = isoWeekInfo(date);
	const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
	const monthShortNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
	const weekdayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
	const weekdayShortNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
	const values = {
		GGGG: String(iso.year),
		GG: String(iso.year).slice(-2),
		YYYY: fullYear,
		YY: fullYear.slice(-2),
		Y: fullYear,
		MMMM: monthNames[date.getMonth()],
		MMM: monthShortNames[date.getMonth()],
		MM: pad(month),
		M: String(month),
		DDDD: pad3(doy),
		DDD: String(doy),
		Do: ordinal(day),
		DD: pad(day),
		D: String(day),
		dddd: weekdayNames[date.getDay()],
		ddd: weekdayShortNames[date.getDay()],
		WW: pad(iso.week),
		W: String(iso.week),
		E: String(iso.day),
		HH: pad(hours),
		H: String(hours),
		hh: pad(hours12),
		h: String(hours12),
		mm: pad(date.getMinutes()),
		m: String(date.getMinutes()),
		ss: pad(date.getSeconds()),
		s: String(date.getSeconds()),
		SSS: pad3(date.getMilliseconds()),
		SS: String(Math.floor(date.getMilliseconds() / 10)).padStart(2, '0'),
		S: String(Math.floor(date.getMilliseconds() / 100)),
		A: hours < 12 ? 'AM' : 'PM',
		a: hours < 12 ? 'am' : 'pm',
		ZZ: offset(false),
		Z: offset(true),
		X: String(Math.floor(date.getTime() / 1000)),
		x: String(date.getTime()),
	};
	const literals = [];
	const masked = String(pattern || 'YYYY-MM-DD').replace(/\[([^\]]*)\]/g, (_match, literal) => {
		const index = literals.push(literal) - 1;
		return '\u0000' + index + '\u0000';
	});
	return masked
		.replace(/GGGG|YYYY|MMMM|DDDD|dddd|MMM|DDD|ddd|GG|YY|Do|MM|DD|WW|HH|hh|mm|ss|SSS|ZZ|Y|M|D|W|E|H|h|m|s|SS|S|A|a|Z|X|x/g, token => values[token] ?? token)
		.replace(/\u0000(\d+)\u0000/g, (_match, index) => literals[Number(index)] || '');
}
${MANAGED_END}
`;
  }
  __name(makeManagedCollectionCode, "makeManagedCollectionCode");
  function cloneBuildTitleConfig(raw) {
    const source = raw && typeof raw === "object" ? raw : {};
    const fieldFormats = source.fieldFormats && typeof source.fieldFormats === "object" ? source.fieldFormats : {};
    return {
      version: 1,
      enabled: source.enabled === false ? false : true,
      template: typeof source.template === "string" ? source.template : DEFAULT_BUILD_TITLE.template,
      omitEmpty: source.omitEmpty === false ? false : true,
      normalizeWhitespace: source.normalizeWhitespace === false ? false : true,
      multiValueSeparator: typeof source.multiValueSeparator === "string" ? source.multiValueSeparator : DEFAULT_BUILD_TITLE.multiValueSeparator,
      dateFormat: typeof source.dateFormat === "string" ? source.dateFormat : DEFAULT_BUILD_TITLE.dateFormat,
      dateTimeFormat: typeof source.dateTimeFormat === "string" ? source.dateTimeFormat : DEFAULT_BUILD_TITLE.dateTimeFormat,
      fieldFormats: Object.fromEntries(Object.entries(fieldFormats).filter(([key, value]) => key && typeof value === "string"))
    };
  }
  __name(cloneBuildTitleConfig, "cloneBuildTitleConfig");
  function cloneJson(value) {
    try {
      return structuredClone(value);
    } catch {
    }
    return JSON.parse(JSON.stringify(value || {}));
  }
  __name(cloneJson, "cloneJson");
  function shuffle(items) {
    for (let i = items.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [items[i], items[j]] = [items[j], items[i]];
    }
    return items;
  }
  __name(shuffle, "shuffle");
  function isUsableField(field) {
    if (!field || field.active === false) return false;
    if (UNSUPPORTED_FIELD_TYPES.has(String(field.type || ""))) return false;
    return !!field.id;
  }
  __name(isUsableField, "isUsableField");
  function isAdvancedField(field) {
    const label = String(field && field.label || "");
    const id = String(field && field.id || "");
    const type = String(field && field.type || "").toLowerCase();
    if (type === "json" || type === "url") return true;
    return /json|\bid\b|id$|uid|etag|url|link|fingerprint|sequence|e-?mail|token|html/i.test(label) || /json|_id$|uid|etag|url|link|fingerprint|sequence|email|token|html/i.test(id);
  }
  __name(isAdvancedField, "isAdvancedField");
  function isSelectableTitleField(field) {
    const id = normalizeTokenLabel(field && field.id);
    const type = normalizeTokenLabel(field && field.type);
    const role = normalizeTokenLabel(field && (field.role || field.kind || field.systemType));
    return id !== "name" && id !== "title" && type !== "name" && type !== "title" && role !== "name" && role !== "title";
  }
  __name(isSelectableTitleField, "isSelectableTitleField");
  function displayTemplateFromConfig(template, state) {
    const fields = new Map((state && state.fields ? state.fields : []).map((field) => [String(field.id), field]));
    return String(template || "").replace(/\{\s*(name|title)\s*\}/g, "{Name}").replace(/\{field:([^}]+)\}/g, (_match, id) => {
      const fieldId = String(id).trim();
      const field = fields.get(fieldId) || metaField(fieldId);
      return displayTokenForField(field, state && state.config, fieldId);
    });
  }
  __name(displayTemplateFromConfig, "displayTemplateFromConfig");
  function compileDisplayTemplate(template, state) {
    return String(template || "").replace(/\{([^{}]+)\}/g, (match, rawToken) => {
      const token = displayTokenLabel(rawToken);
      if (!token) return match;
      if (token.toLowerCase() === "name") return "{name}";
      if (token.startsWith("field:")) return `{field:${token.slice(6).trim()}}`;
      const field = findFieldByDisplayToken(state, token);
      return field ? `{field:${field.id}}` : match;
    });
  }
  __name(compileDisplayTemplate, "compileDisplayTemplate");
  function displayTokenForRawToken(token, state, config) {
    if (token === "{name}" || token === "{title}") return "{Name}";
    const match = String(token || "").match(/^\{field:([^}]+)\}$/);
    if (!match) return token;
    const fieldId = match[1].trim();
    const field = findFieldById(state, fieldId) || metaField(fieldId);
    return displayTokenForField(field, config || state && state.config, fieldId);
  }
  __name(displayTokenForRawToken, "displayTokenForRawToken");
  function displayTokenForField(field, config, fieldId) {
    const label = field && field.label ? field.label : "Field";
    if (field && isDateLikeField(field)) {
      const fallback = isDateOnlyField(field) ? config && config.dateFormat || DEFAULT_BUILD_TITLE.dateFormat : config && config.dateTimeFormat || DEFAULT_BUILD_TITLE.dateTimeFormat;
      const format = config && config.fieldFormats && config.fieldFormats[field.id || fieldId] ? config.fieldFormats[field.id || fieldId] : fallback;
      return `{${label}|${format}}`;
    }
    return `{${label}}`;
  }
  __name(displayTokenForField, "displayTokenForField");
  function needsInsertionSpace(before, token) {
    const b = String(before || "");
    const t = String(token || "");
    if (!b || !t) return false;
    if (/\s$/.test(b) || /^\s/.test(t)) return false;
    return /^[{?]/.test(t);
  }
  __name(needsInsertionSpace, "needsInsertionSpace");
  function displayTokenLabel(rawToken) {
    return String(rawToken || "").split("|")[0].trim();
  }
  __name(displayTokenLabel, "displayTokenLabel");
  function displayTokenFormat(rawToken) {
    const parts = String(rawToken || "").split("|");
    return parts.length > 1 ? parts.slice(1).join("|").trim() : "";
  }
  __name(displayTokenFormat, "displayTokenFormat");
  function collectFieldFormatsFromDisplayTemplate(template, state) {
    const formats = {};
    String(template || "").replace(/\{([^{}]+)\}/g, (_match, rawToken) => {
      const label = displayTokenLabel(rawToken);
      const format = displayTokenFormat(rawToken);
      if (!label || !format || label.toLowerCase() === "name") return "";
      const field = findFieldByDisplayToken(state, label);
      if (field && isDateLikeField(field)) formats[field.id] = format;
      return "";
    });
    return formats;
  }
  __name(collectFieldFormatsFromDisplayTemplate, "collectFieldFormatsFromDisplayTemplate");
  function updateDisplayTemplateFormat(template, state, fieldId, format) {
    const field = findFieldById(state, fieldId) || metaField(fieldId);
    if (!field) return template;
    const target = normalizeTokenLabel(field.label || "");
    return String(template || "").replace(/\{([^{}]+)\}/g, (match, rawToken) => {
      const label = displayTokenLabel(rawToken);
      if (normalizeTokenLabel(label) !== target) return match;
      return `{${label}|${format}}`;
    });
  }
  __name(updateDisplayTemplateFormat, "updateDisplayTemplateFormat");
  function findFieldByDisplayToken(state, token) {
    const normalized = normalizeTokenLabel(displayTokenLabel(token));
    return (state && state.fields ? state.fields : []).find((field) => normalizeTokenLabel(field.label || "") === normalized) || metaFieldByLabel(token);
  }
  __name(findFieldByDisplayToken, "findFieldByDisplayToken");
  function findFieldById(state, fieldId) {
    const id = String(fieldId || "");
    return (state && state.fields ? state.fields : []).find((field) => String(field.id) === id) || null;
  }
  __name(findFieldById, "findFieldById");
  function normalizeTokenLabel(value) {
    return String(value || "").trim().toLowerCase();
  }
  __name(normalizeTokenLabel, "normalizeTokenLabel");
  function metaFieldByLabel(label) {
    const normalized = normalizeTokenLabel(displayTokenLabel(label));
    if (normalized === "created") return { id: "created_at", label: "Created", type: "datetime" };
    if (normalized === "modified" || normalized === "updated") return { id: "updated_at", label: "Modified", type: "datetime" };
    return null;
  }
  __name(metaFieldByLabel, "metaFieldByLabel");
  function findFirstTemplateDateField(template, state) {
    if (!state) return null;
    const re = /\{field:([^}]+)\}/g;
    let match;
    while (match = re.exec(String(template || ""))) {
      const field = findFieldForFormat(state, match[1].trim());
      if (field) return field.id;
    }
    return null;
  }
  __name(findFirstTemplateDateField, "findFirstTemplateDateField");
  function findFieldForFormat(state, fieldId) {
    if (!state || !fieldId) return null;
    const id = String(fieldId);
    const field = (state.fields || []).find((candidate) => String(candidate.id) === id);
    if (field && isDateLikeField(field)) return field;
    const meta = metaField(id);
    return meta && isDateLikeField(meta) ? meta : null;
  }
  __name(findFieldForFormat, "findFieldForFormat");
  function metaField(fieldId) {
    if (fieldId === "created_at" || fieldId === "created") return { id: fieldId, label: "Created", type: "datetime" };
    if (fieldId === "updated_at" || fieldId === "modified_at" || fieldId === "modified") return { id: fieldId, label: "Modified", type: "datetime" };
    return null;
  }
  __name(metaField, "metaField");
  function isDateLikeField(field) {
    const type = String(field && field.type || "").toLowerCase();
    return type.includes("date") || type.includes("time");
  }
  __name(isDateLikeField, "isDateLikeField");
  function isDateOnlyField(field) {
    const type = String(field && field.type || "").toLowerCase();
    return type === "date" || type.includes("date") && !type.includes("time");
  }
  __name(isDateOnlyField, "isDateOnlyField");
  function collectionFilterKind(state) {
    if (!state || state.status === "conflict") return "review";
    if (state.status !== "managed") return "inactive";
    return state.config && state.config.enabled === false ? "disabled" : "active";
  }
  __name(collectionFilterKind, "collectionFilterKind");
  function statusShortLabel(status, enabled) {
    if (status === "managed") return enabled ? "Enabled" : "Disabled";
    if (status === "blank") return "Inactive";
    return "Review";
  }
  __name(statusShortLabel, "statusShortLabel");
  function iconClass(icon) {
    const raw = String(icon || "ti-tag");
    return raw.startsWith("ti ") ? raw : `ti ${raw.startsWith("ti-") ? raw : `ti-${raw}`}`;
  }
  __name(iconClass, "iconClass");
  function safeRecordName(record) {
    const readers = [
      () => record.text && record.text("Title"),
      () => record.text && record.text("Name"),
      () => record.getName && record.getName()
    ];
    for (const read of readers) {
      try {
        const value = read();
        if (value != null && String(value).trim() !== "") return String(value);
      } catch {
      }
    }
    return "Untitled";
  }
  __name(safeRecordName, "safeRecordName");
  function renderTitle(record, config) {
    if (!config.enabled) return safeRecordName(record);
    let text = renderTemplate(record, config.template, config);
    text = stripInlineMarks(text);
    if (config.normalizeWhitespace) text = text.replace(/\s+/g, " ").trim();
    return text || safeRecordName(record);
  }
  __name(renderTitle, "renderTitle");
  function stripInlineMarks(text) {
    return String(text || "").replace(/\*\*([\s\S]*?)\*\*/g, "$1").replace(/\*([\s\S]*?)\*/g, "$1").replace(/%([\s\S]*?)%/g, "$1");
  }
  __name(stripInlineMarks, "stripInlineMarks");
  function renderTitleParts(record, config, nameColor) {
    if (!config.enabled) {
      return [h("span", nameColor ? { style: { color: nameColor } } : null, safeRecordName(record))];
    }
    const parsed = renderPartsChunk(record, String(config.template || ""), config, 0, null, nameColor, { bold: false, italic: false, faded: false });
    if (!parsed.parts.length) return [h("span", nameColor ? { style: { color: nameColor } } : null, safeRecordName(record))];
    return parsed.parts.map((part) => renderPartSpan(part));
  }
  __name(renderTitleParts, "renderTitleParts");
  function renderPartSpan(part) {
    const style = {};
    if (part.color) style.color = part.color;
    if (part.bold) style.fontWeight = "650";
    if (part.italic) style.fontStyle = "italic";
    if (part.faded) style.opacity = "0.5";
    return h("span", Object.keys(style).length ? { style } : null, part.text);
  }
  __name(renderPartSpan, "renderPartSpan");
  function renderPartsChunk(record, template, config, start, stopChar, nameColor, fmt) {
    const parts = [];
    let hasValue = false;
    let i = start;
    while (i < template.length) {
      const ch = template[i];
      if (stopChar && ch === stopChar) return { parts, hasValue, index: i + 1 };
      if (ch === "\\" && i + 1 < template.length) {
        const next = template[i + 1];
        if ("{}[]\\*%".includes(next)) {
          pushPart(parts, next, null, fmt);
          i += 2;
          continue;
        }
      }
      if (ch === "*") {
        if (template[i + 1] === "*") {
          fmt = { ...fmt, bold: !fmt.bold };
          i += 2;
        } else {
          fmt = { ...fmt, italic: !fmt.italic };
          i += 1;
        }
        continue;
      }
      if (ch === "%") {
        fmt = { ...fmt, faded: !fmt.faded };
        i += 1;
        continue;
      }
      if (ch === "?" && template[i + 1] === "{") {
        const groupEnd = findGroupClose(template, i + 1);
        if (groupEnd >= 0) {
          const group = renderPartsChunk(record, template.slice(i + 2, groupEnd), config, 0, null, nameColor, { ...fmt });
          if (group.hasValue) parts.push(...group.parts);
          hasValue = hasValue || group.hasValue;
          i = groupEnd + 1;
          continue;
        }
      }
      if (ch === "[") {
        const group = renderPartsChunk(record, template, config, i + 1, "]", nameColor, { ...fmt });
        if (group.hasValue) parts.push(...group.parts);
        hasValue = hasValue || group.hasValue;
        i = group.index;
        continue;
      }
      if (ch === "{") {
        const close = findClose(template, i + 1, "}");
        if (close >= 0) {
          const token = template.slice(i + 1, close).trim();
          const value = resolveToken(record, token, config);
          if (value) {
            pushPart(parts, value, token === "name" || token === "title" ? nameColor : null, fmt);
            hasValue = true;
          }
          i = close + 1;
          continue;
        }
      }
      pushPart(parts, ch, null, fmt);
      i += 1;
    }
    return { parts, hasValue, index: i };
  }
  __name(renderPartsChunk, "renderPartsChunk");
  function pushPart(parts, text, color, fmt) {
    if (!text) return;
    const bold = !!(fmt && fmt.bold), italic = !!(fmt && fmt.italic), faded = !!(fmt && fmt.faded);
    const last = parts[parts.length - 1];
    if (last && last.color === color && last.bold === bold && last.italic === italic && last.faded === faded) {
      last.text += text;
    } else {
      parts.push({ text, color, bold, italic, faded });
    }
  }
  __name(pushPart, "pushPart");
  function renderTemplate(record, template, config) {
    return renderChunk(record, String(template || ""), config, 0, null).text;
  }
  __name(renderTemplate, "renderTemplate");
  function renderChunk(record, template, config, start, stopChar) {
    let text = "";
    let hasValue = false;
    let i = start;
    while (i < template.length) {
      const ch = template[i];
      if (stopChar && ch === stopChar) return { text, hasValue, index: i + 1 };
      if (ch === "\\" && i + 1 < template.length) {
        const next = template[i + 1];
        if ("{}[]\\".includes(next)) {
          text += next;
          i += 2;
          continue;
        }
      }
      if (ch === "?" && template[i + 1] === "{") {
        const groupEnd = findGroupClose(template, i + 1);
        if (groupEnd >= 0) {
          const group = renderChunk(record, template.slice(i + 2, groupEnd), config, 0, null);
          if (group.hasValue) text += group.text;
          hasValue = hasValue || group.hasValue;
          i = groupEnd + 1;
          continue;
        }
      }
      if (ch === "[") {
        const group = renderChunk(record, template, config, i + 1, "]");
        if (group.hasValue) text += group.text;
        hasValue = hasValue || group.hasValue;
        i = group.index;
        continue;
      }
      if (ch === "{") {
        const close = findClose(template, i + 1, "}");
        if (close >= 0) {
          const value = resolveToken(record, template.slice(i + 1, close).trim(), config);
          if (value) {
            text += value;
            hasValue = true;
          }
          i = close + 1;
          continue;
        }
      }
      text += ch;
      i += 1;
    }
    return { text, hasValue, index: i };
  }
  __name(renderChunk, "renderChunk");
  function findClose(template, start, closeChar) {
    for (let i = start; i < template.length; i += 1) {
      if (template[i] === "\\") {
        i += 1;
        continue;
      }
      if (template[i] === closeChar) return i;
    }
    return -1;
  }
  __name(findClose, "findClose");
  function findGroupClose(template, openIndex) {
    let depth = 0;
    for (let i = openIndex; i < template.length; i += 1) {
      if (template[i] === "\\") {
        i += 1;
        continue;
      }
      if (template[i] === "{") depth += 1;
      else if (template[i] === "}") {
        depth -= 1;
        if (depth === 0) return i;
      }
    }
    return -1;
  }
  __name(findGroupClose, "findGroupClose");
  function resolveToken(record, token, config) {
    if (token === "name" || token === "title") return safeRecordName(record);
    if (!token.startsWith("field:")) return "";
    const fieldId = token.slice(6).trim();
    if (!fieldId) return "";
    try {
      const meta = resolveMetaField(record, fieldId, config);
      if (meta) return meta;
      const prop = record.prop(fieldId);
      return prop ? propertyToText(prop, config, fieldId) : "";
    } catch {
      return "";
    }
  }
  __name(resolveToken, "resolveToken");
  function resolveMetaField(record, fieldId, config) {
    try {
      if (fieldId === "created_at" || fieldId === "created") {
        const date = record.getCreatedAt && record.getCreatedAt();
        return date ? formatDateTime(date, fieldFormat(config, fieldId, config.dateTimeFormat)) : "";
      }
      if (fieldId === "updated_at" || fieldId === "modified_at" || fieldId === "modified") {
        const date = record.getUpdatedAt && record.getUpdatedAt();
        return date ? formatDateTime(date, fieldFormat(config, fieldId, config.dateTimeFormat)) : "";
      }
    } catch {
    }
    return "";
  }
  __name(resolveMetaField, "resolveMetaField");
  function propertyToText(prop, config, fieldId) {
    const join = /* @__PURE__ */ __name((values) => values.filter((v) => v != null && String(v).trim() !== "").map((v) => String(v)).join(config.multiValueSeparator), "join");
    try {
      const choices = prop.selectedChoiceLabels && prop.selectedChoiceLabels();
      if (choices && choices.length) return join(choices);
    } catch {
    }
    try {
      const users = prop.users && prop.users();
      if (users && users.length) return join(users.map((u) => u && u.getDisplayName ? u.getDisplayName() : ""));
    } catch {
    }
    try {
      const linkedRecords = prop.linkedRecords && prop.linkedRecords();
      if (linkedRecords && linkedRecords.length) return join(linkedRecords.map((r) => r && r.getName ? r.getName() : ""));
    } catch {
    }
    try {
      const dateTimes = prop.datetimes && prop.datetimes();
      if (dateTimes && dateTimes.length) return join(dateTimes.map((value) => formatDateTime(value, fieldFormat(config, fieldId, config.dateTimeFormat))));
    } catch {
    }
    try {
      const dates = prop.dates && prop.dates();
      if (dates && dates.length) return join(dates.map((value) => formatDate(value, fieldFormat(config, fieldId, config.dateFormat))));
    } catch {
    }
    try {
      const texts = prop.texts && prop.texts();
      if (texts && texts.length) return join(texts);
    } catch {
    }
    try {
      const numbers = prop.numbers && prop.numbers();
      if (numbers && numbers.length) return join(numbers);
    } catch {
    }
    try {
      const choice = prop.choiceLabel && prop.choiceLabel();
      if (choice) return String(choice);
    } catch {
    }
    try {
      const text = prop.text && prop.text();
      if (text) return String(text);
    } catch {
    }
    try {
      const number = prop.number && prop.number();
      if (number != null) return String(number);
    } catch {
    }
    try {
      const user = prop.user && prop.user();
      if (user && user.getDisplayName) return String(user.getDisplayName() || "");
    } catch {
    }
    try {
      const linked = prop.linkedRecord && prop.linkedRecord();
      if (linked && linked.getName) return String(linked.getName() || "");
    } catch {
    }
    return "";
  }
  __name(propertyToText, "propertyToText");
  function fieldFormat(config, fieldId, fallback) {
    return config && config.fieldFormats && typeof config.fieldFormats[fieldId] === "string" ? config.fieldFormats[fieldId] : fallback;
  }
  __name(fieldFormat, "fieldFormat");
  function formatDateTime(value, pattern) {
    try {
      const date = value && value.toDate ? value.toDate() : value;
      if (date instanceof Date && !Number.isNaN(date.getTime())) return formatDatePattern(date, pattern || DEFAULT_BUILD_TITLE.dateTimeFormat);
    } catch {
    }
    return value == null ? "" : String(value);
  }
  __name(formatDateTime, "formatDateTime");
  function formatDate(value, pattern) {
    try {
      if (value instanceof Date && !Number.isNaN(value.getTime())) return formatDatePattern(value, pattern || DEFAULT_BUILD_TITLE.dateFormat);
    } catch {
    }
    return value == null ? "" : String(value);
  }
  __name(formatDate, "formatDate");
  function formatDatePattern(date, pattern) {
    const pad = /* @__PURE__ */ __name((value) => String(value).padStart(2, "0"), "pad");
    const pad3 = /* @__PURE__ */ __name((value) => String(value).padStart(3, "0"), "pad3");
    const ordinal = /* @__PURE__ */ __name((value) => {
      const mod10 = value % 10;
      const mod100 = value % 100;
      if (mod10 === 1 && mod100 !== 11) return `${value}st`;
      if (mod10 === 2 && mod100 !== 12) return `${value}nd`;
      if (mod10 === 3 && mod100 !== 13) return `${value}rd`;
      return `${value}th`;
    }, "ordinal");
    const dayOfYear = /* @__PURE__ */ __name((value) => {
      const start = new Date(value.getFullYear(), 0, 1);
      return Math.floor((new Date(value.getFullYear(), value.getMonth(), value.getDate()) - start) / 864e5) + 1;
    }, "dayOfYear");
    const isoWeekInfo = /* @__PURE__ */ __name((value) => {
      const d = new Date(Date.UTC(value.getFullYear(), value.getMonth(), value.getDate()));
      const day2 = d.getUTCDay() || 7;
      d.setUTCDate(d.getUTCDate() + 4 - day2);
      const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
      const week = Math.ceil(((d - yearStart) / 864e5 + 1) / 7);
      return { year: d.getUTCFullYear(), week, day: day2 };
    }, "isoWeekInfo");
    const offset = /* @__PURE__ */ __name((colon) => {
      const total = -date.getTimezoneOffset();
      const sign = total >= 0 ? "+" : "-";
      const abs = Math.abs(total);
      const hours2 = pad(Math.floor(abs / 60));
      const minutes = pad(abs % 60);
      return colon ? `${sign}${hours2}:${minutes}` : `${sign}${hours2}${minutes}`;
    }, "offset");
    const fullYear = String(date.getFullYear());
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const hours = date.getHours();
    const hours12 = hours % 12 || 12;
    const doy = dayOfYear(date);
    const iso = isoWeekInfo(date);
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const monthShortNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const weekdayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const weekdayShortNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const values = {
      GGGG: String(iso.year),
      GG: String(iso.year).slice(-2),
      YYYY: fullYear,
      YY: fullYear.slice(-2),
      Y: fullYear,
      MMMM: monthNames[date.getMonth()],
      MMM: monthShortNames[date.getMonth()],
      MM: pad(month),
      M: String(month),
      DDDD: pad3(doy),
      DDD: String(doy),
      Do: ordinal(day),
      DD: pad(day),
      D: String(day),
      dddd: weekdayNames[date.getDay()],
      ddd: weekdayShortNames[date.getDay()],
      WW: pad(iso.week),
      W: String(iso.week),
      E: String(iso.day),
      HH: pad(hours),
      H: String(hours),
      hh: pad(hours12),
      h: String(hours12),
      mm: pad(date.getMinutes()),
      m: String(date.getMinutes()),
      ss: pad(date.getSeconds()),
      s: String(date.getSeconds()),
      SSS: pad3(date.getMilliseconds()),
      SS: String(Math.floor(date.getMilliseconds() / 10)).padStart(2, "0"),
      S: String(Math.floor(date.getMilliseconds() / 100)),
      A: hours < 12 ? "AM" : "PM",
      a: hours < 12 ? "am" : "pm",
      ZZ: offset(false),
      Z: offset(true),
      X: String(Math.floor(date.getTime() / 1e3)),
      x: String(date.getTime())
    };
    const literals = [];
    const masked = String(pattern || DEFAULT_BUILD_TITLE.dateFormat).replace(/\[([^\]]*)\]/g, (_match, literal) => {
      const index = literals.push(literal) - 1;
      return `\0${index}\0`;
    });
    return masked.replace(/GGGG|YYYY|MMMM|DDDD|dddd|MMM|DDD|ddd|GG|YY|Do|MM|DD|WW|HH|hh|mm|ss|SSS|ZZ|Y|M|D|W|E|H|h|m|s|SS|S|A|a|Z|X|x/g, (token) => values[token] ?? token).replace(/\u0000(\d+)\u0000/g, (_match, index) => literals[Number(index)] || "");
  }
  __name(formatDatePattern, "formatDatePattern");
  return __toCommonJS(plugin_exports);
})();
var Plugin = plugins.Plugin;
