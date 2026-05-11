# Build Title from Properties

Global Thymer plugin that manages per-collection title builders.

## What It Does

- Adds one settings panel for all collections.
- Reads each collection's properties from the SDK and lets the user build a title
  template in a GUI.
- Installs a small managed collection-side hook when requested.
- The collection-side hook uses Thymer's native `customizeRecordTitle()` API, so
  record names are display-only and reversible.

## How It Works

This is an `AppPlugin`. It cannot directly call collection-only APIs such as
`customizeRecordTitle()` for every collection, so it acts as a manager:

- blank or already-managed collections can be installed/updated automatically;
- collections with unrelated custom code are marked as needing review and are not
  overwritten;
- per-collection settings live in `plugin.json` at `custom.buildTitle`.

Supported template syntax:

- `{name}` inserts the record's normal editable name.
- `{field:FIELD_ID}` inserts a property value.
- `?{ ... }` optional groups render only when at least one field inside has a value.
- `\{` and `\}` escape literal braces.

Only `{name}` corresponds to the record name users should edit in Thymer's editor.
Property tokens are display-only title parts; edit the source properties in their
normal property fields.

Example: `?{- {field:title}}` renders `- Sailor` when `title` has a value and
renders nothing when it is blank.

## Build

```bash
npm run build
# writes dist/plugin.js
```

Ship:

- `dist/plugin.js`
- `plugin.json`
