// @ts-nocheck
/**
 * Build Title from Properties — Build collection item display titles from selected property values.
 *
 * AppPlugin (global). Manages a small collection-side hook for each selected
 * collection because Thymer's native title hook is CollectionPlugin-only.
 */

const ROOT_CLASS = 'plg-build-title-from-properties';
const PANEL_TYPE = 'build-title-from-properties-settings';
const CONFIG_KEY = 'buildTitle';
const MANAGED_START = '/* Build Title from Properties: managed collection hook - begin */';
const MANAGED_END = '/* Build Title from Properties: managed collection hook - end */';

const DEFAULT_BUILD_TITLE = Object.freeze({
	version: 1,
	enabled: true,
	template: '{name}',
	omitEmpty: true,
	normalizeWhitespace: true,
	multiValueSeparator: ', ',
	dateFormat: 'YYYY-MM-DD',
	dateTimeFormat: 'YYYY-MM-DDTHH:mm:ss',
	fieldFormats: {},
});

const UNSUPPORTED_FIELD_TYPES = new Set(['file', 'image', 'banner']);

const PANEL_CSS = `
	.tps-panel {
		--tps-text: var(--text-default, #e8e8e8);
		--tps-text-muted: var(--text-muted, #9a9a9a);
		--tps-text-faint: var(--text-subtle, #888);
		--tps-bg-input: var(--input-bg, rgba(127,127,127,0.06));
		--tps-bg-hover: var(--bg-hover, rgba(127,127,127,0.06));
		--tps-divider: var(--border-subtle, rgba(255,255,255,0.10));
		--tps-border: var(--border-default, rgba(255,255,255,0.16));
		--tps-accent: var(--accent-color, var(--color-accent, var(--theme-accent, var(--color-primary, currentColor))));
		--tps-accent-soft: color-mix(in srgb, var(--tps-accent) 15%, transparent);
		--tps-warning: #f59e0b;
		--tps-danger: #ef4444;
		--tps-danger-soft: rgba(239, 68, 68, 0.15);
		--tps-fs-title: 18px;
		--tps-fs-lede: 13px;
		--tps-fs-section: 11px;
		--tps-fs-hint: 12px;
		--tps-fs-label: 13px;
		--tps-fs-body: 13px;
		--tps-fs-button: 12px;
		--tps-fw-medium: 500;
		--tps-fw-semibold: 600;
		--tps-ls-section: 0.06em;
		--tps-space-1: 4px;
		--tps-space-2: 8px;
		--tps-space-3: 12px;
		--tps-space-4: 16px;
		--tps-space-5: 24px;
		--tps-space-6: 32px;
		--tps-space-7: 48px;
		--tps-radius-sm: 4px;
		--tps-radius-md: 6px;
		--tps-radius-pill: 999px;
		width: 100%;
		height: 100%;
		box-sizing: border-box;
		overflow: auto;
		padding: 0 var(--tps-space-5) var(--tps-space-7);
		color: var(--tps-text);
		font-family: inherit;
		font-size: var(--tps-fs-body);
		line-height: 1.4;
	}
	.tps-panel *,
	.tps-panel *::before,
	.tps-panel *::after { box-sizing: border-box; }
	.tps-plugin-header {
		margin: var(--tps-space-5) 0;
		padding: 18px var(--tps-space-4);
		background:
			linear-gradient(to right, #f26548 8%, #f26548 28%, #fbac56 28%, #fbac56 48%, #fff460 48%, #fff460 68%, #f067a6 68%, #f067a6 88%, #03bdf2 88%) top left / 100% 1px no-repeat,
			linear-gradient(to right, #f26548 0%, #f26548 12%, #fbac56 12%, #fbac56 32%, #fff460 32%, #fff460 52%, #f067a6 52%, #f067a6 72%, #03bdf2 72%, #03bdf2 92%) bottom left / 100% 1px no-repeat,
			var(--bg-default, transparent);
		border-left: 1px solid #f26548;
		border-right: 1px solid #03bdf2;
	}
	.tps-plugin-header-logo { margin: 0 0 var(--tps-space-2); }
	.tps-plugin-header-logo-icon { font-size: 30px; color: var(--tps-accent); }
	.tps-plugin-header-title {
		margin: 0 0 var(--tps-space-3);
		font-size: 22px;
		line-height: 1.2;
		font-weight: var(--tps-fw-semibold);
		color: var(--tps-text);
	}
	.tps-plugin-header-lede {
		margin: 0 0 var(--tps-space-4);
		color: var(--tps-text-muted);
		font-size: 14px;
	}
	.tps-plugin-header-attr {
		display: flex;
		flex-wrap: wrap;
		gap: var(--tps-space-3);
		margin: 0;
		color: var(--tps-text-muted);
		font-size: 11.5px;
	}
	.tps-plugin-header-link-group { display: inline-flex; gap: 4px; align-items: baseline; }
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
		color: var(--tps-text-muted, var(--text-muted, #888));
		transform: translateY(2px);
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
	.tps-plugin-header-link { color: inherit; text-decoration: underline; }
	.tps-plugin-header-link--blue { color: #03bdf2; }
	.tps-plugin-header-link--pink { color: #f067a6; }
	.tps-plugin-header-link--muted { color: var(--tps-text-faint); }
	.tps-section { padding: var(--tps-space-6) 0 0; }
	.tps-section:first-of-type { padding-top: 0; }
	.tps-section + .tps-section { border-top: 1px solid var(--tps-divider); }
	.tps-section-label {
		margin: 0 0 var(--tps-space-2);
		color: var(--tps-text-muted);
		font-size: var(--tps-fs-section);
		font-weight: var(--tps-fw-semibold);
		letter-spacing: var(--tps-ls-section);
		text-transform: uppercase;
	}
	.tps-section-hint {
		margin: 0 0 var(--tps-space-3);
		color: var(--tps-text-muted);
		font-size: var(--tps-fs-hint);
	}
	.tps-section-body { display: flex; flex-direction: column; gap: var(--tps-space-3); }
	.tps-section-header {
		display: flex;
		align-items: center;
		gap: var(--tps-space-2);
		width: 100%;
		padding: 0;
		margin: 0 0 var(--tps-space-2);
		background: transparent;
		border: 0;
		color: inherit;
		font: inherit;
		text-align: left;
		cursor: pointer;
	}
	.tps-section--collapsible[data-open="false"] > .tps-section-body { display: none; }
	.tps-section-chev { color: var(--tps-text-faint); font-size: 10px; }
	.tps-section--collapsible[data-open="true"] .tps-section-chev { transform: rotate(90deg); }
	.tps-opt {
		display: grid;
		grid-template-columns: 18px 1fr;
		column-gap: var(--tps-space-3);
		row-gap: 2px;
		align-items: start;
		padding: 6px 10px;
		margin: 0 -10px;
		border-radius: var(--tps-radius-md);
		cursor: pointer;
	}
	.tps-opt:hover { background: var(--tps-bg-hover); }
	.tps-opt input { margin: 1px 0 0; accent-color: var(--tps-accent); }
	.tps-opt-label { color: var(--tps-text); font-weight: var(--tps-fw-medium); }
	.tps-opt-desc { grid-column: 2; color: var(--tps-text-muted); font-size: var(--tps-fs-hint); }
	.tps-tabs { display: inline-flex; align-items: center; gap: var(--tps-space-1); }
	.tps-tab,
	.tps-button {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		height: 28px;
		padding: 0 var(--tps-space-3);
		border: 1px solid transparent;
		border-radius: var(--tps-radius-sm);
		background: transparent;
		color: var(--tps-text-muted);
		font: inherit;
		font-size: var(--tps-fs-button);
		font-weight: var(--tps-fw-medium);
		cursor: pointer;
	}
	.tps-tab:hover,
	.tps-button--ghost:hover { background: var(--tps-bg-hover); color: var(--tps-text); border-color: var(--tps-border); }
	.tps-tab[aria-pressed="true"] { background: var(--tps-accent-soft); color: var(--tps-accent); border-color: color-mix(in srgb, var(--tps-accent) 50%, transparent); }
	.tps-button--primary { background: transparent; border-color: var(--tps-divider); color: var(--tps-text-muted); }
	.tps-button--primary:hover { background: rgba(16, 185, 129, 0.15); border-color: #10b981; color: #10b981; }
	.tps-button--ghost { border-color: var(--tps-divider); color: var(--tps-text); }
	.tps-button--danger { border-color: var(--tps-divider); color: var(--tps-text-muted); }
	.tps-button--danger:hover { background: var(--tps-danger-soft); color: var(--tps-danger); }
	.tps-button:disabled,
	.tps-tab:disabled { opacity: 0.45; cursor: not-allowed; }
`;
class Plugin extends AppPlugin {

	onLoad() {
		this._handlerIds = [];
		this._panelEl = null;
		this._commandItem = null;
		this._collections = [];
		this._selectedGuid = null;
		this._selectedRecords = [];
		this._collectionColors = {};
		this._collectionSearch = '';
		this._collectionFilters = { active: true, inactive: true, disabled: true };
		this._activeFormatFieldId = null;
		this._datePopoverFieldId = null;
		this._editorTemplate = '';
		this._draft = cloneBuildTitleConfig(null);
		this._loading = false;
		this._saving = false;
		this._message = '';

		this.ui.injectCSS(PANEL_CSS);
		this.ui.injectCSS(this._css());

		this._commandItem = this.ui.addCommandPaletteCommand({
			label: 'Plugin: Build Title from Properties',
			icon: 'file-text',
			onSelected: () => this._openPanel(),
		});

		this.ui.registerCustomPanelType(PANEL_TYPE, (pluginPanel) => {
			try { pluginPanel.setTitle('Build Title from Properties Settings'); } catch {}
			const root = pluginPanel.getElement();
			if (!root) return;
			this._panelEl = root;
			this._renderPanel();
			void this._refreshCollections();
		});
	}

	onUnload() {
		for (const id of (this._handlerIds || [])) this.events.off(id);
		this._handlerIds = [];
		if (this._commandItem) { this._commandItem.remove(); this._commandItem = null; }
	}

	async _openPanel() {
		if (this._panelEl && document.contains(this._panelEl)) return;
		const active = this.ui.getActivePanel && this.ui.getActivePanel();
		const next = await this.ui.createPanel(active ? { afterPanel: active } : undefined);
		if (next) next.navigateToCustomType(PANEL_TYPE);
	}

	async _refreshCollections() {
		this._loading = true;
		this._message = 'Loading collections...';
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
			if (!this._selectedGuid || !states.some(s => s.guid === this._selectedGuid)) {
				this._selectedGuid = states[0] ? states[0].guid : null;
			}
			this._syncDraftFromSelected();
			await this._loadSelectedRecords();
			this._message = states.length ? '' : 'No collections found.';
		} catch (err) {
			this._message = `Unable to load collections: ${err && err.message ? err.message : String(err)}`;
		} finally {
			this._loading = false;
			this._renderPanel();
		}
	}

	async _loadCollectionState(collection) {
		let existing = null;
		try { existing = await collection.getExistingCodeAndConfig(); } catch {}
		const json = existing && existing.json ? existing.json : (collection.getConfiguration ? collection.getConfiguration() : {});
		const code = existing && typeof existing.code === 'string' ? existing.code : '';
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
			config: cloneBuildTitleConfig(json.custom && json.custom[CONFIG_KEY]),
		};
	}

	async _loadCollectionColors() {
		/** @type {Record<string, string>} */
		const out = {};
		try {
			const plugins = await this.data.getAllGlobalPlugins();
			const colorsPlugin = plugins.find(p => p && p.getName && p.getName() === 'Collection Colors');
			const conf = colorsPlugin && colorsPlugin.getConfiguration ? colorsPlugin.getConfiguration() : null;
			const custom = conf && conf.custom && typeof conf.custom === 'object' ? conf.custom : {};
			const colors = custom.colors && typeof custom.colors === 'object' ? custom.colors : {};
			for (const guid of Object.keys(colors)) {
				const color = colors[guid] && typeof colors[guid].color === 'string' ? colors[guid].color : null;
				if (color) out[guid] = color;
			}
		} catch {}
		try {
			const raw = JSON.parse(localStorage.getItem(`collection-colors/${this.getWorkspaceGuid()}/colors`) || '{}') || {};
			for (const guid of Object.keys(raw)) {
				const color = raw[guid] && typeof raw[guid].color === 'string' ? raw[guid].color : null;
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
		return this._collections.find(c => c.guid === this._selectedGuid) || null;
	}

	_filteredCollections() {
		const query = this._collectionSearch.trim().toLowerCase();
		return this._collections.filter(state => {
			const kind = collectionFilterKind(state);
			const filterMatch = kind === 'review' || this._collectionFilters[kind] !== false;
			const searchMatch = !query || state.name.toLowerCase().includes(query);
			return filterMatch && searchMatch;
		});
	}

	_toggleCollectionFilter(kind) {
		this._collectionFilters = {
			...this._collectionFilters,
			[kind]: !this._collectionFilters[kind],
		};
		this._renderPanel();
	}

	async _selectCollection(guid) {
		this._selectedGuid = guid;
		this._syncDraftFromSelected();
		await this._loadSelectedRecords();
		this._renderPanel();
	}

	_patchDraft(patch) {
		this._draft = cloneBuildTitleConfig({ ...this._draft, ...patch });
		this._renderPanel();
	}

	_insertToken(token) {
		const editor = this._templateTextarea();
		const state = this._selectedState();
		if (editor && state) {
			const displayToken = displayTokenForRawToken(token, state, this._draft);
			const hasEditorFocus = document.activeElement === editor;
			const sourceValue = editor.value;
			const start = hasEditorFocus && Number.isFinite(editor.selectionStart) ? editor.selectionStart : sourceValue.length;
			const end = hasEditorFocus && Number.isFinite(editor.selectionEnd) ? editor.selectionEnd : start;
			const before = sourceValue.slice(0, start);
			const after = sourceValue.slice(end);
			const spacer = needsInsertionSpace(before, displayToken) ? ' ' : '';
			const next = `${before}${spacer}${displayToken}${after}`;
			const cursor = before.length + spacer.length + displayToken.length;
			editor.value = next;
			editor.focus();
			try { editor.setSelectionRange(cursor, cursor); } catch {}
			this._patchEditorTemplate(next, false);
			return;
		}
		const spacer = needsInsertionSpace(this._draft.template, token) ? ' ' : '';
		this._draft = cloneBuildTitleConfig({ ...this._draft, template: `${this._draft.template || ''}${spacer}${token}` });
		this._renderPanel();
	}

	_templateTextarea() {
		return this._panelEl ? this._panelEl.querySelector(`.${ROOT_CLASS}__template-textarea`) : null;
	}

	_patchEditorTemplate(displayTemplate, rerender = false) {
		const state = this._selectedState();
		this._editorTemplate = displayTemplate;
		this._draft = cloneBuildTitleConfig({
			...this._draft,
			template: compileDisplayTemplate(displayTemplate, state),
			fieldFormats: {
				...(this._draft.fieldFormats || {}),
				...collectFieldFormatsFromDisplayTemplate(displayTemplate, state),
			},
		});
		if (rerender) this._renderPanel();
		else this._renderPreviewIntoPanel();
	}

	_syncTemplateBeforeSave() {
		const editor = this._templateTextarea();
		if (editor) this._draft = cloneBuildTitleConfig({
			...this._draft,
			template: compileDisplayTemplate(editor.value, this._selectedState()),
			fieldFormats: {
				...(this._draft.fieldFormats || {}),
				...collectFieldFormatsFromDisplayTemplate(editor.value, this._selectedState()),
			},
		});
	}

	_renderActionStatus() {
		return this._message ? h('div', { class: `${ROOT_CLASS}__action-status` }, this._message) : null;
	}

	_syncCollectionStateFromDraft(state) {
		if (!state) return;
		state.config = cloneBuildTitleConfig(this._draft);
		this._renderCollectionListRowsIntoPanel();
		this._renderPreviewIntoPanel();
	}

	_patchFieldFormat(fieldId, format) {
		const fieldFormats = { ...(this._draft.fieldFormats || {}) };
		if (format) fieldFormats[fieldId] = format;
		else delete fieldFormats[fieldId];
		this._draft = cloneBuildTitleConfig({ ...this._draft, fieldFormats });
		this._editorTemplate = updateDisplayTemplateFormat(this._editorTemplate, this._selectedState(), fieldId, format || this._defaultFormatForField(fieldId));
		this._renderPanel();
	}

	_patchFieldFormatPreview(fieldId, format) {
		const fieldFormats = { ...(this._draft.fieldFormats || {}) };
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
		if (!this._panelEl) return;
		const target = this._panelEl.querySelector(`.${ROOT_CLASS}__date-preview`);
		const field = findFieldForFormat(this._selectedState(), fieldId);
		if (target && field) target.textContent = this._formatPreviewForField(field, format);
	}

	_defaultFormatForField(fieldId) {
		const field = findFieldForFormat(this._selectedState(), fieldId);
		return isDateOnlyField(field) ? this._draft.dateFormat : this._draft.dateTimeFormat;
	}

	async _saveSelected(enabled = true) {
		const state = this._selectedState();
		if (!state || this._saving) return;
		if (state.status === 'conflict') {
			this._toast('Needs review', 'This collection already has custom code. Build Title will not overwrite it automatically.');
			return;
		}
		this._syncTemplateBeforeSave();

		this._saving = true;
		this._message = `Saving ${state.name}...`;
		this._renderPanel();
		try {
			const nextConfig = cloneBuildTitleConfig({ ...this._draft, enabled });
			const nextJson = cloneJson(state.json);
			nextJson.custom = nextJson.custom && typeof nextJson.custom === 'object' ? nextJson.custom : {};
			nextJson.custom[CONFIG_KEY] = nextConfig;

			const managedCode = makeManagedCollectionCode();
			const nextCode = state.status === 'managed'
				? replaceManagedBlock(state.code, managedCode)
				: managedCode;

			const ok = await state.collection.savePlugin(nextJson, nextCode);
			if (!ok) throw new Error('Thymer rejected the save.');

			state.json = nextJson;
			state.code = nextCode;
			state.config = cloneBuildTitleConfig(nextJson.custom[CONFIG_KEY]);
			state.status = 'managed';
			this._draft = cloneBuildTitleConfig(state.config);
			this._editorTemplate = displayTemplateFromConfig(this._draft.template, state);
			this._message = enabled ? `Saved ${state.name}.` : `Disabled ${state.name}.`;
			this._toast(enabled ? 'Build Title saved' : 'Build Title disabled', enabled
				? `${state.name} is now managed by Build Title from Properties.`
				: `${state.name} now uses its normal record titles.`);
		} catch (err) {
			this._message = `Unable to save ${state.name}: ${err && err.message ? err.message : String(err)}`;
		} finally {
			this._saving = false;
			this._renderPanel();
		}
	}

	async _removeFromSelected() {
		const state = this._selectedState();
		if (!state || state.status !== 'managed' || this._saving) return;

		this._saving = true;
		this._message = `Removing from ${state.name}...`;
		this._renderPanel();
		try {
			const nextJson = cloneJson(state.json);
			if (nextJson.custom && typeof nextJson.custom === 'object') delete nextJson.custom[CONFIG_KEY];
			const nextCode = removeManagedBlock(state.code).trim();
			const ok = await state.collection.savePlugin(nextJson, nextCode);
			if (!ok) throw new Error('Thymer rejected the save.');

			state.json = nextJson;
			state.code = nextCode;
			state.config = cloneBuildTitleConfig(null);
			state.status = classifyCode(nextCode);
			this._draft = cloneBuildTitleConfig(null);
			this._message = `Removed from ${state.name}.`;
			this._toast('Build Title removed', `${state.name} now uses its normal record titles.`);
		} catch (err) {
			this._message = `Unable to remove from ${state.name}: ${err && err.message ? err.message : String(err)}`;
		} finally {
			this._saving = false;
			this._renderPanel();
		}
	}

	_renderPanel() {
		if (!this._panelEl) return;
		const state = this._selectedState();

		this._panelEl.replaceChildren(panel({ pluginClass: `${ROOT_CLASS}-panel` }, [
			pluginHeader({
				title: 'Build Title from Properties',
				lede: 'Build display titles from record properties.',
				icon: 'ti-file-text',
				version: '1.0',
			}),
			h('div', { class: `${ROOT_CLASS}__layout` },
				this._renderCollectionList(),
				state ? this._renderEditor(state) : this._renderEmpty(),
			),
		]));
	}

	_renderCollectionList() {
		const filtered = this._filteredCollections();
		return h('aside', { class: `${ROOT_CLASS}__sidebar` },
			h('div', { class: `${ROOT_CLASS}__sidebar-head` },
				h('div', { class: `${ROOT_CLASS}__sidebar-title` }, 'Collections'),
				iconButton({ icon: 'ti-refresh', label: 'Refresh collections', onClick: () => void this._refreshCollections(), disabled: this._loading }),
			),
			h('input', {
				type: 'search',
				class: `${ROOT_CLASS}__collection-search`,
				placeholder: 'Search collections',
				value: this._collectionSearch,
				onInput: (e) => { this._collectionSearch = e.target.value; this._renderCollectionListRowsIntoPanel(); },
			}),
			h('div', { class: `${ROOT_CLASS}__filter-row` },
				this._renderFilterToggle('active', 'Active'),
				this._renderFilterToggle('inactive', 'Inactive'),
				this._renderFilterToggle('disabled', 'Disabled'),
			),
			h('div', { class: `${ROOT_CLASS}__collection-list` },
				filtered.length
					? filtered.map(state => this._renderCollectionButton(state))
					: h('div', { class: `${ROOT_CLASS}__empty-list` }, 'No matching collections.'),
			),
		);
	}

	_renderCollectionListRowsIntoPanel() {
		if (!this._panelEl) return;
		const target = this._panelEl.querySelector(`.${ROOT_CLASS}__collection-list`);
		if (!target) return;
		const filtered = this._filteredCollections();
		target.replaceChildren(...(filtered.length
			? filtered.map(state => this._renderCollectionButton(state))
			: [h('div', { class: `${ROOT_CLASS}__empty-list` }, 'No matching collections.')]));
	}

	_renderFilterToggle(kind, label) {
		const pressed = this._collectionFilters[kind] !== false;
		return h('button', {
			type: 'button',
			class: [
				`${ROOT_CLASS}__filter-toggle`,
				pressed ? `${ROOT_CLASS}__filter-toggle--active` : '',
			].filter(Boolean).join(' '),
			'aria-pressed': String(pressed),
			onClick: () => this._toggleCollectionFilter(kind),
		}, label);
	}

	_renderCollectionButton(state) {
		const selected = state.guid === this._selectedGuid;
		const enabled = state.config && state.config.enabled !== false;
		const filterKind = collectionFilterKind(state);
		return h('button', {
			type: 'button',
			class: [
				`${ROOT_CLASS}__collection`,
				selected ? `${ROOT_CLASS}__collection--selected` : '',
				filterKind === 'disabled' ? `${ROOT_CLASS}__collection--disabled` : '',
			].filter(Boolean).join(' '),
			onClick: () => void this._selectCollection(state.guid),
		},
			h('span', {
				class: `${iconClass(state.json.icon || 'file-text')} ${ROOT_CLASS}__collection-icon`,
				style: state.collectionColor ? { color: state.collectionColor } : null,
				'aria-hidden': 'true',
			}),
			h('span', { class: `${ROOT_CLASS}__collection-main` },
				h('span', {
					class: `${ROOT_CLASS}__collection-name`,
					style: state.collectionColor ? { color: state.collectionColor } : null,
				}, state.name),
			),
			h('span', { class: `${ROOT_CLASS}__status ${ROOT_CLASS}__status--${filterKind}` }, statusShortLabel(state.status, enabled)),
		);
	}

	_renderEmpty() {
		return h('main', { class: `${ROOT_CLASS}__editor` },
			section({
				label: 'No Collection',
				body: [],
			}),
		);
	}

	_renderEditor(state) {
		const canSave = state.status !== 'conflict';
		return h('main', { class: `${ROOT_CLASS}__editor` },
			this._renderEditorHeader(state),
			h('div', { class: `${ROOT_CLASS}__editor-body` },
				this._renderTokenButtons(state),
				this._renderLiteralTools(),
				this._renderTemplateInput(state),
				h('div', { class: `${ROOT_CLASS}__settings-row` },
					h('div', { class: `${ROOT_CLASS}__field-row` },
						h('label', null, 'Multi-value separator'),
						h('input', {
							type: 'text',
							value: this._draft.multiValueSeparator,
							onInput: (e) => this._patchDraft({ multiValueSeparator: e.target.value }),
						}),
					),
					optionRow({
						type: 'checkbox',
						name: 'normalizeWhitespace',
						label: 'Normalize whitespace',
						checked: !!this._draft.normalizeWhitespace,
						onChange: (e) => this._patchDraft({ normalizeWhitespace: !!e.target.checked }),
					}),
				),
				h('div', { class: `${ROOT_CLASS}__action-row ${ROOT_CLASS}__action-row--bottom` },
					button({ label: 'Save', variant: 'primary', onClick: () => void this._saveSelected(true), disabled: !canSave || this._saving }),
					button({ label: 'Disable', variant: 'danger', onClick: () => void this._saveSelected(false), disabled: !canSave || this._saving || !this._draft.enabled }),
				),
				this._renderActionStatus(),
			),
		);
	}

	_renderEditorHeader(state) {
		const color = state.collectionColor || null;
		return h('div', { class: `${ROOT_CLASS}__editor-head` },
			h('div', { class: `${ROOT_CLASS}__editor-title-row` },
				h('div', { class: `${ROOT_CLASS}__editor-title` },
					h('span', {
						class: `${iconClass(state.json.icon || 'file-text')} ${ROOT_CLASS}__editor-title-icon`,
						style: color ? { color } : null,
						'aria-hidden': 'true',
					}),
					h('span', { style: color ? { color } : null }, state.name),
				),
				iconButton({ icon: 'ti-refresh', label: 'Refresh preview records', onClick: () => void this._refreshPreviewRecords() }),
			),
			this._renderPreview(),
		);
	}

	_renderTokenButtons(state) {
		return h('div', { class: `${ROOT_CLASS}__token-picker` },
			h('div', { class: `${ROOT_CLASS}__token-box` },
				h('button', {
					type: 'button',
					class: `${ROOT_CLASS}__token`,
					title: 'Record name',
					style: state.collectionColor ? { color: state.collectionColor, borderColor: state.collectionColor } : null,
					onMousedown: (e) => e.preventDefault(),
					onClick: () => {
						this._datePopoverFieldId = null;
						this._insertToken('{name}');
					},
				}, h('span', { class: 'ti ti-abc', style: state.collectionColor ? { color: state.collectionColor } : null, 'aria-hidden': 'true' }), 'Name'),
				...state.fields.map(field => {
					const isDate = isDateLikeField(field);
					if (!isDate) {
						return h('button', {
							type: 'button',
							class: `${ROOT_CLASS}__token`,
							title: field.id,
							onMousedown: (e) => e.preventDefault(),
							onClick: () => {
								this._datePopoverFieldId = null;
								this._insertToken(`{field:${field.id}}`);
							},
						},
							h('span', { class: iconClass(field.icon), 'aria-hidden': 'true' }),
							field.label || 'Field',
						);
					}
					return h('span', {
						class: [
							`${ROOT_CLASS}__token-split`,
							this._datePopoverFieldId === field.id ? `${ROOT_CLASS}__token-split--active` : '',
						].filter(Boolean).join(' '),
					},
						h('button', {
							type: 'button',
							class: `${ROOT_CLASS}__token ${ROOT_CLASS}__token--date-main`,
							title: field.id,
							onMousedown: (e) => e.preventDefault(),
							onClick: () => this._insertToken(`{field:${field.id}}`),
						}, field.label || 'Field'),
						h('button', {
							type: 'button',
							class: `${ROOT_CLASS}__token-date-icon`,
							title: `Format ${field.label || 'date field'}`,
							'aria-label': `Format ${field.label || 'date field'}`,
							onMousedown: (e) => e.preventDefault(),
							onClick: () => {
								this._datePopoverFieldId = this._datePopoverFieldId === field.id ? null : field.id;
								this._renderPanel();
							},
						}, h('span', { class: iconClass(field.icon), 'aria-hidden': 'true' })),
					);
				}),
			),
			this._renderDatePopover(state),
		);
	}

	_renderLiteralTools() {
		return h('div', { class: `${ROOT_CLASS}__quick-row` },
			button({ label: ' - ', preserveFocus: true, onClick: () => this._insertToken(' - ') }),
			button({ label: ' · ', preserveFocus: true, onClick: () => this._insertToken(' · ') }),
			button({ label: ' • ', preserveFocus: true, onClick: () => this._insertToken(' • ') }),
			button({ label: ' / ', preserveFocus: true, onClick: () => this._insertToken(' / ') }),
			button({ label: ' | ', preserveFocus: true, onClick: () => this._insertToken(' | ') }),
			button({ label: ': ', preserveFocus: true, onClick: () => this._insertToken(': ') }),
			button({ label: '?{...}', preserveFocus: true, onClick: () => this._insertToken('?{}') }),
		);
	}

	_renderTemplateInput(state) {
		return h('div', { class: `${ROOT_CLASS}__template` },
			h('textarea', {
				class: `${ROOT_CLASS}__template-textarea`,
				spellcheck: 'false',
				placeholder: 'Type text and insert fields',
				value: this._editorTemplate,
				onInput: (e) => this._patchEditorTemplate(e.currentTarget.value, false),
				onBlur: (e) => this._patchEditorTemplate(e.currentTarget.value, true),
			}),
		);
	}

	_renderDatePopover(state) {
		const field = findFieldForFormat(state, this._datePopoverFieldId);
		if (!field) {
			return null;
		}
		const defaultFormat = isDateOnlyField(field) ? this._draft.dateFormat : this._draft.dateTimeFormat;
		const value = this._draft.fieldFormats[field.id] || defaultFormat;
		const presets = isDateOnlyField(field)
			? ['YYYY-MM-DD', 'YYYY/MM/DD', 'MM/DD/YYYY', 'DD/MM/YYYY']
			: ['YYYY-MM-DDTHH:mm:ss', 'YYYY-MM-DD HH:mm', 'YYYY-MM-DDTHH:mm', 'MM/DD/YYYY HH:mm'];
		return h('div', { class: `${ROOT_CLASS}__date-popover` },
			h('div', { class: `${ROOT_CLASS}__date-popover-head` },
				h('div', { class: `${ROOT_CLASS}__date-format-title` }, field.label || 'Date field'),
				iconButton({ icon: 'ti-x', label: 'Close date format options', onClick: () => { this._datePopoverFieldId = null; this._renderPanel(); } }),
			),
			h('div', { class: `${ROOT_CLASS}__date-preview` }, this._formatPreviewForField(field, value)),
			h('div', { class: `${ROOT_CLASS}__format-buttons` },
				...presets.map(format => button({ label: format, onClick: () => this._patchFieldFormat(field.id, format) })),
				button({ label: 'Default', onClick: () => this._patchFieldFormat(field.id, '') }),
			),
			h('input', {
				type: 'text',
				value,
				placeholder: defaultFormat,
				onInput: (e) => this._patchFieldFormatPreview(field.id, e.target.value),
				onChange: (e) => this._patchFieldFormat(field.id, e.target.value),
			}),
			h('div', { class: `${ROOT_CLASS}__date-hud` },
				h('span', null, 'YYYY/YY year'),
				h('span', null, 'MMMM/MMM month'),
				h('span', null, 'MM/M month'),
				h('span', null, 'DD/D day'),
				h('span', null, 'dddd/ddd weekday'),
				h('span', null, 'HH/H or hh/h hour'),
				h('span', null, 'mm/m minute'),
				h('span', null, 'ss/s second'),
				h('span', null, 'SSS ms'),
				h('span', null, 'A/a ampm'),
				h('span', null, 'Z/ZZ offset'),
				h('span', null, '[text] literal'),
			),
		);
	}

	_formatPreviewForField(field, format) {
		const sample = new Date(2026, 4, 4, 13, 45, 30);
		return isDateOnlyField(field) ? formatDate(sample, format) : formatDateTime(sample, format);
	}

	_renderPreviewIntoPanel() {
		if (!this._panelEl) return;
		const target = this._panelEl.querySelector(`.${ROOT_CLASS}__preview`);
		if (target) target.replaceChildren(...this._previewRows());
	}

	_renderPreview() {
		const longest = this._selectedRecords.reduce((max, record) => Math.max(max, safeRecordName(record).length), 8);
		return h('div', {
			class: `${ROOT_CLASS}__preview`,
			style: { '--btp-preview-left': `${Math.min(Math.max(longest, 4), 24)}ch` },
		}, ...this._previewRows());
	}

	_previewRows() {
		if (!this._selectedRecords.length) {
			return [h('div', { class: `${ROOT_CLASS}__empty-preview` }, 'No records to preview yet.')];
		}
		return this._selectedRecords.map(record => {
			const original = safeRecordName(record);
			const previewConfig = cloneBuildTitleConfig({ ...this._draft, enabled: true });
			const built = renderTitle(record, previewConfig);
			const builtNode = h('span', { class: `${ROOT_CLASS}__preview-built` },
				...renderTitleParts(record, previewConfig, this._selectedState()?.collectionColor || null),
			);
			return h('div', { class: `${ROOT_CLASS}__preview-row` },
				h('span', { class: `${ROOT_CLASS}__preview-original` }, original),
				h('span', { class: 'ti ti-arrow-right', 'aria-hidden': 'true' }),
				builtNode.textContent ? builtNode : h('span', { class: `${ROOT_CLASS}__preview-built` }, built || original),
			);
		});
	}

	_toast(title, message) {
		try {
			this.ui.addToaster({ title, message, dismissible: true, autoDestroyTime: 3500 });
		} catch {}
	}

	_css() {
		return `
			.${ROOT_CLASS}-panel .${ROOT_CLASS}__notice {
				padding: var(--tps-space-2) var(--tps-space-3);
				margin: 0 0 var(--tps-space-4);
				border: 1px solid var(--tps-divider);
				border-radius: var(--tps-radius-md);
				background: var(--tps-bg-input);
				color: var(--tps-text-muted);
			}
			.${ROOT_CLASS}-panel .${ROOT_CLASS}__layout {
				display: grid;
				grid-template-columns: minmax(220px, 280px) minmax(0, 1fr);
				gap: var(--tps-space-4);
				align-items: start;
			}
			.${ROOT_CLASS}-panel .tps-section {
				padding-top: var(--tps-space-5);
			}
			.${ROOT_CLASS}-panel .${ROOT_CLASS}__sidebar {
				position: sticky;
				top: 0;
				min-width: 0;
				max-height: calc(100vh - var(--tps-space-6));
				display: flex;
				flex-direction: column;
			}
			.${ROOT_CLASS}-panel .${ROOT_CLASS}__sidebar-head,
			.${ROOT_CLASS}-panel .${ROOT_CLASS}__editor-title-row,
			.${ROOT_CLASS}-panel .${ROOT_CLASS}__action-row,
			.${ROOT_CLASS}-panel .${ROOT_CLASS}__quick-row {
				display: flex;
				align-items: center;
				gap: var(--tps-space-2);
				flex-wrap: wrap;
			}
			.${ROOT_CLASS}-panel .${ROOT_CLASS}__sidebar-head,
			.${ROOT_CLASS}-panel .${ROOT_CLASS}__editor-title-row {
				justify-content: space-between;
				margin: 0 0 var(--tps-space-2);
			}
			.${ROOT_CLASS}-panel .${ROOT_CLASS}__sidebar-title {
				font-size: var(--tps-fs-section);
				font-weight: var(--tps-fw-semibold);
				letter-spacing: var(--tps-ls-section);
				text-transform: uppercase;
				color: var(--tps-text-muted);
			}
			.${ROOT_CLASS}-panel .${ROOT_CLASS}__icon-button {
				display: inline-flex;
				align-items: center;
				justify-content: center;
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
			.${ROOT_CLASS}-panel .${ROOT_CLASS}__collection-search {
				margin: 0 0 var(--tps-space-2);
			}
			.${ROOT_CLASS}-panel .${ROOT_CLASS}__filter-row {
				display: flex;
				flex-wrap: wrap;
				gap: var(--tps-space-1);
				margin: 0 0 var(--tps-space-2);
			}
			.${ROOT_CLASS}-panel .${ROOT_CLASS}__filter-toggle {
				height: 24px;
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
				gap: 1px;
				min-height: 0;
				overflow: auto;
				padding-right: var(--tps-space-1);
			}
			.${ROOT_CLASS}-panel .${ROOT_CLASS}__collection {
				display: grid;
				grid-template-columns: 18px minmax(0, 1fr) auto;
				align-items: center;
				gap: var(--tps-space-2);
				width: 100%;
				padding: var(--tps-space-2);
				background: transparent;
				border: 0;
				border-radius: var(--tps-radius-md);
				color: var(--tps-text);
				text-align: left;
				cursor: pointer;
			}
			.${ROOT_CLASS}-panel .${ROOT_CLASS}__collection--disabled {
				opacity: 0.5;
			}
			.${ROOT_CLASS}-panel .${ROOT_CLASS}__collection:hover,
			.${ROOT_CLASS}-panel .${ROOT_CLASS}__collection--selected {
				background: var(--tps-bg-hover);
			}
			.${ROOT_CLASS}-panel .${ROOT_CLASS}__collection-icon {
				color: var(--tps-text-muted);
			}
			.${ROOT_CLASS}-panel .${ROOT_CLASS}__collection-main {
				min-width: 0;
				display: flex;
				flex-direction: column;
			}
			.${ROOT_CLASS}-panel .${ROOT_CLASS}__collection-name,
			.${ROOT_CLASS}-panel .${ROOT_CLASS}__preview-original,
			.${ROOT_CLASS}-panel .${ROOT_CLASS}__preview-built {
				overflow: hidden;
				white-space: nowrap;
				text-overflow: ellipsis;
			}
			.${ROOT_CLASS}-panel .${ROOT_CLASS}__status {
				font-size: 10px;
				color: var(--tps-text-muted);
				border: 1px solid var(--tps-divider);
				border-radius: var(--tps-radius-pill);
				padding: 1px 6px;
			}
			.${ROOT_CLASS}-panel .${ROOT_CLASS}__status--active {
				color: var(--tps-accent);
				border-color: color-mix(in srgb, var(--tps-accent) 50%, transparent);
			}
			.${ROOT_CLASS}-panel .${ROOT_CLASS}__status--review {
				color: var(--tps-warning);
			}
			.${ROOT_CLASS}-panel .${ROOT_CLASS}__empty-list {
				padding: var(--tps-space-2);
				color: var(--tps-text-muted);
				font-size: var(--tps-fs-hint);
			}
			.${ROOT_CLASS}-panel .${ROOT_CLASS}__editor {
				min-width: 0;
			}
			.${ROOT_CLASS}-panel .${ROOT_CLASS}__editor-head {
				padding-bottom: var(--tps-space-2);
				border-bottom: 1px solid var(--tps-divider);
			}
			.${ROOT_CLASS}-panel .${ROOT_CLASS}__editor-title {
				display: inline-flex;
				align-items: center;
				min-width: 0;
				gap: var(--tps-space-2);
				font-size: 18px;
				font-weight: var(--tps-fw-semibold);
				color: var(--tps-text);
			}
			.${ROOT_CLASS}-panel .${ROOT_CLASS}__editor-title-icon {
				flex: 0 0 auto;
			}
			.${ROOT_CLASS}-panel .${ROOT_CLASS}__editor-body {
				display: flex;
				flex-direction: column;
				gap: var(--tps-space-3);
				padding-top: var(--tps-space-3);
			}
			.${ROOT_CLASS}-panel .${ROOT_CLASS}__token-box {
				display: flex;
				flex-wrap: wrap;
				gap: var(--tps-space-2);
			}
			.${ROOT_CLASS}-panel .${ROOT_CLASS}__token-picker {
				position: relative;
			}
			.${ROOT_CLASS}-panel .${ROOT_CLASS}__token {
				display: inline-flex;
				align-items: center;
				gap: var(--tps-space-1);
				height: var(--tps-control-h-sm);
				max-width: 180px;
				padding: 0 var(--tps-space-2);
				border: 1px solid var(--tps-divider);
				border-radius: var(--tps-radius-sm);
				background: transparent;
				color: var(--tps-text);
				font: inherit;
				font-size: var(--tps-fs-button);
				cursor: pointer;
			}
			.${ROOT_CLASS}-panel .${ROOT_CLASS}__token:hover {
				background: var(--tps-bg-hover);
				border-color: var(--tps-border);
			}
			.${ROOT_CLASS}-panel .${ROOT_CLASS}__token--date {
				background: color-mix(in srgb, var(--tps-accent) 8%, transparent);
				border-color: color-mix(in srgb, var(--tps-accent) 30%, transparent);
			}
			.${ROOT_CLASS}-panel .${ROOT_CLASS}__token--active {
				color: var(--tps-accent);
				border-color: var(--tps-accent);
			}
			.${ROOT_CLASS}-panel .${ROOT_CLASS}__token-split {
				display: inline-flex;
				align-items: stretch;
				border: 1px solid var(--tps-divider);
				border-radius: var(--tps-radius-sm);
				overflow: hidden;
				background: transparent;
			}
			.${ROOT_CLASS}-panel .${ROOT_CLASS}__token-split--active {
				border-color: var(--tps-accent);
			}
			.${ROOT_CLASS}-panel .${ROOT_CLASS}__token-split .${ROOT_CLASS}__token {
				border: 0;
				border-radius: 0;
			}
			.${ROOT_CLASS}-panel .${ROOT_CLASS}__token-date-icon {
				display: inline-flex;
				align-items: center;
				justify-content: center;
				width: 30px;
				border: 0;
				border-left: 1px solid var(--tps-divider);
				background: color-mix(in srgb, var(--tps-accent) 12%, transparent);
				color: var(--tps-accent);
				font: inherit;
				cursor: pointer;
			}
			.${ROOT_CLASS}-panel .${ROOT_CLASS}__token-date-icon:hover {
				background: color-mix(in srgb, var(--tps-accent) 20%, transparent);
			}
			.${ROOT_CLASS}-panel .${ROOT_CLASS}__token .ti {
				flex: 0 0 auto;
				color: var(--tps-text-muted);
			}
			.${ROOT_CLASS}-panel .tps-button--primary {
				background: transparent;
				border-color: var(--tps-divider);
				color: var(--tps-text-muted);
				min-width: 86px;
			}
			.${ROOT_CLASS}-panel .tps-button--primary:hover {
				background: rgba(16, 185, 129, 0.15);
				border-color: #10b981;
				color: #10b981;
			}
			.${ROOT_CLASS}-panel .${ROOT_CLASS}__template,
			.${ROOT_CLASS}-panel .${ROOT_CLASS}__field-row,
			.${ROOT_CLASS}-panel .${ROOT_CLASS}__style-grid,
			.${ROOT_CLASS}-panel .${ROOT_CLASS}__settings-row {
				display: grid;
				gap: var(--tps-space-2);
			}
			.${ROOT_CLASS}-panel .${ROOT_CLASS}__field-row,
			.${ROOT_CLASS}-panel .${ROOT_CLASS}__style-grid {
				grid-template-columns: 160px minmax(0, 1fr);
				align-items: center;
			}
			.${ROOT_CLASS}-panel label {
				color: var(--tps-text);
				font-size: var(--tps-fs-label);
			}
			.${ROOT_CLASS}-panel textarea,
			.${ROOT_CLASS}-panel input[type="text"],
			.${ROOT_CLASS}-panel input[type="search"],
			.${ROOT_CLASS}-panel input[type="number"],
			.${ROOT_CLASS}-panel select {
				width: 100%;
				min-width: 0;
				border: 1px solid var(--tps-divider);
				border-radius: var(--tps-radius-sm);
				background: var(--tps-bg-input);
				color: var(--tps-text);
				font: inherit;
				font-size: var(--tps-fs-body);
				padding: var(--tps-space-2);
			}
			.${ROOT_CLASS}-panel textarea {
				min-height: 78px;
				resize: vertical;
				font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, "Courier New", monospace;
			}
			.${ROOT_CLASS}-panel .${ROOT_CLASS}__template p {
				margin: 0;
				font-size: var(--tps-fs-hint);
				color: var(--tps-text-muted);
			}
			.${ROOT_CLASS}-panel .${ROOT_CLASS}__template-textarea {
				min-height: 92px;
			}
			.${ROOT_CLASS}-panel .${ROOT_CLASS}__date-popover {
				position: absolute;
				z-index: 5;
				top: calc(100% + var(--tps-space-1));
				left: var(--tps-space-2);
				right: var(--tps-space-2);
				display: grid;
				gap: var(--tps-space-2);
				padding: var(--tps-space-3);
				border: 1px solid var(--tps-border);
				border-radius: var(--tps-radius-md);
				background: var(--bg-default, #111);
				box-shadow: 0 10px 28px rgba(0,0,0,0.35);
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
			.${ROOT_CLASS}-panel .${ROOT_CLASS}__date-hud {
				display: flex;
				flex-wrap: wrap;
				gap: var(--tps-space-1) var(--tps-space-2);
				color: var(--tps-text-muted);
				font-size: 11px;
			}
			.${ROOT_CLASS}-panel .${ROOT_CLASS}__preview {
				display: flex;
				flex-direction: column;
				padding-top: var(--tps-space-1);
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
			.${ROOT_CLASS}-panel .${ROOT_CLASS}__preview-original {
				color: var(--tps-text-muted);
			}
			.${ROOT_CLASS}-panel .${ROOT_CLASS}__action-row--bottom {
				justify-content: flex-end;
				padding-top: var(--tps-space-2);
			}
			.${ROOT_CLASS}-panel .${ROOT_CLASS}__action-status {
				color: var(--tps-text-muted);
				font-size: var(--tps-fs-hint);
				text-align: right;
			}
			.${ROOT_CLASS}-panel .${ROOT_CLASS}__empty-preview {
				color: var(--tps-text-muted);
			}
			@media (max-width: 760px) {
				.${ROOT_CLASS}-panel .${ROOT_CLASS}__layout {
					grid-template-columns: 1fr;
				}
				.${ROOT_CLASS}-panel .${ROOT_CLASS}__sidebar {
					position: static;
					max-height: none;
				}
			}
		`;
	}
}

function h(tag, props, ...children) {
	const el = document.createElement(tag);
	if (props) {
		for (const key of Object.keys(props)) {
			const value = props[key];
			if (value == null || value === false) continue;
			if (key === 'class' || key === 'className') {
				el.className = value;
			} else if (key === 'style' && typeof value === 'object') {
				Object.assign(el.style, value);
			} else if (key.startsWith('on') && typeof value === 'function') {
				el.addEventListener(key.slice(2).toLowerCase(), value);
			} else if (key in el) {
				try { el[key] = value; } catch { el.setAttribute(key, String(value)); }
			} else {
				el.setAttribute(key, value === true ? '' : String(value));
			}
		}
	}
	appendChildren(el, children);
	return el;
}

function appendChildren(parent, children) {
	for (const child of children) {
		if (child == null || child === false) continue;
		if (Array.isArray(child)) {
			appendChildren(parent, child);
			continue;
		}
		parent.appendChild(child instanceof Node ? child : document.createTextNode(String(child)));
	}
}

function panel({ pluginClass } = {}, children = []) {
	return h('div', { class: ['tps-panel', pluginClass].filter(Boolean).join(' ') }, ...children);
}

function pluginHeader({ title, lede, icon = '', version = '1.0' }) {
	const iconName = icon ? (icon.startsWith('ti-') ? icon : `ti-${icon}`) : '';
	return h('div', { class: 'tps-plugin-header' },
		iconName ? h('div', { class: 'tps-plugin-header-logo', 'aria-hidden': 'true' },
			h('i', { class: `ti ${iconName} tps-plugin-header-logo-icon`, 'aria-hidden': 'true' }),
		) : null,
		h('h1', { class: 'tps-plugin-header-title' }, title),
		lede ? h('p', { class: 'tps-plugin-header-lede' }, lede) : null,
		h('p', { class: 'tps-plugin-header-attr' },
			h('span', { class: 'tps-plugin-header-link-group' },
				h('i', { class: 'ti ti-link', 'aria-hidden': 'true' }),
				h('a', { class: 'tps-plugin-header-link tps-plugin-header-link--blue', href: 'https://akaready.com', target: '_blank', rel: 'noopener noreferrer' }, '@akaready'),
			),
			h('span', { class: 'tps-plugin-header-link-group' },
				h('i', { class: 'ti ti-coffee', 'aria-hidden': 'true' }),
				h('a', { class: 'tps-plugin-header-link tps-plugin-header-link--pink', href: 'https://buymeacoffee.com/akaready', target: '_blank', rel: 'noopener noreferrer' }, 'buy me a coffee'),
			),
			version ? h('span', { class: 'tps-plugin-header-link-group' },
				h('span', { class: 'tps-plugin-header-icon tps-plugin-header-iconify tps-plugin-header-iconify-github', 'aria-hidden': 'true' }),
				h('a', { class: 'tps-plugin-header-link tps-plugin-header-link--muted', href: 'https://github.com/akaready', target: '_blank', rel: 'noopener noreferrer' }, `v${version}`),
			) : null,
		),
	);
}

function section({ label, hint, collapsible = false, open = true, body = [] }) {
	const sectionEl = h('section', {
		class: collapsible ? 'tps-section tps-section--collapsible' : 'tps-section',
	});
	if (collapsible) {
		sectionEl.dataset.open = String(!!open);
		const header = h('button', {
			type: 'button',
			class: 'tps-section-header',
			'aria-expanded': String(!!open),
			onClick: () => {
				const next = sectionEl.dataset.open !== 'true';
				sectionEl.dataset.open = String(next);
				header.setAttribute('aria-expanded', String(next));
			},
		},
			h('span', { class: 'tps-section-chev', 'aria-hidden': 'true' }, '▸'),
			h('span', { class: 'tps-section-label' }, label),
		);
		sectionEl.appendChild(header);
	} else {
		sectionEl.appendChild(h('div', { class: 'tps-section-label' }, label));
	}
	if (hint) sectionEl.appendChild(h('p', { class: 'tps-section-hint' }, hint));
	const bodyChildren = Array.isArray(body) ? body : [body];
	sectionEl.appendChild(h('div', { class: 'tps-section-body' }, ...bodyChildren));
	return sectionEl;
}

function optionRow({ type = 'checkbox', name, value, label, desc, checked, onChange }) {
	const id = `btitle-opt-${Math.random().toString(36).slice(2, 9)}`;
	const input = h('input', { type, name, value, id, checked: !!checked, onChange });
	return h('div', { class: 'tps-opt' },
		input,
		h('label', { class: 'tps-opt-label', for: id }, label),
		desc ? h('label', { class: 'tps-opt-desc', for: id }, desc) : null,
	);
}

function tabs({ options, value, onChange }) {
	return h('div', { class: 'tps-tabs', role: 'tablist' },
		...options.map(opt => h('button', {
			type: 'button',
			class: 'tps-tab',
			role: 'tab',
			'aria-pressed': String(opt.value === value),
			onClick: () => onChange && onChange(opt.value),
		}, opt.label)),
	);
}

function button({ label, variant = 'ghost', onClick, disabled, preserveFocus = false }) {
	return h('button', {
		type: 'button',
		class: `tps-button tps-button--${variant}`,
		disabled: !!disabled,
		onMousedown: preserveFocus ? (e) => e.preventDefault() : null,
		onClick,
	}, label);
}

function iconButton({ icon, label, onClick, disabled }) {
	return h('button', {
		type: 'button',
		class: `${ROOT_CLASS}__icon-button`,
		title: label,
		'aria-label': label,
		disabled: !!disabled,
		onClick,
	}, h('span', { class: iconClass(icon), 'aria-hidden': 'true' }));
}

function classifyCode(code) {
	const text = String(code || '');
	if (text.includes(MANAGED_START) && text.includes(MANAGED_END)) return 'managed';
	if (!text.trim()) return 'blank';
	if (isSafeToReplaceCollectionCode(text)) return 'blank';
	return 'conflict';
}

function isSafeToReplaceCollectionCode(code) {
	const text = stripCommentsAndStrings(code);
	const customSignals = [
		'customizeRecordTitle',
		'customizeSidebarItems',
		'setSidebarWidget',
		'addCollectionNavigationButton',
		'this.properties',
		'this.views',
		'this.collection',
		'this.events',
		'this.data',
		'this.ws',
		'localStorage',
		'fetch',
		'savePlugin',
		'saveConfiguration',
		'previewPlugin',
		'insertFromMarkdown',
		'createRecord',
		'createLineItem',
		'prop(',
		'setName',
	];
	return !customSignals.some(signal => text.includes(signal));
}

function stripCommentsAndStrings(code) {
	return String(code || '')
		.replace(/\/\*[\s\S]*?\*\//g, '')
		.replace(/\/\/.*$/gm, '')
		.replace(/(['"`])(?:\\[\s\S]|(?!\1)[\s\S])*?\1/g, '');
}

function replaceManagedBlock(code, block) {
	const text = String(code || '');
	const start = text.indexOf(MANAGED_START);
	const end = text.indexOf(MANAGED_END);
	if (start < 0 || end < start) return block;
	return `${text.slice(0, start)}${block}${text.slice(end + MANAGED_END.length)}`;
}

function removeManagedBlock(code) {
	const text = String(code || '');
	const start = text.indexOf(MANAGED_START);
	const end = text.indexOf(MANAGED_END);
	if (start < 0 || end < start) return text;
	return `${text.slice(0, start)}${text.slice(end + MANAGED_END.length)}`;
}

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
	let text = result.text;
	if (config.normalizeWhitespace) {
		text = text.replace(/\s+/g, ' ');
		if (!config.preserveEdgeWhitespace) text = text.trim();
	}
	return text;
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

function cloneBuildTitleConfig(raw) {
	const source = raw && typeof raw === 'object' ? raw : {};
	const fieldFormats = source.fieldFormats && typeof source.fieldFormats === 'object' ? source.fieldFormats : {};
	return {
		version: 1,
		enabled: source.enabled === false ? false : true,
		template: typeof source.template === 'string' ? source.template : DEFAULT_BUILD_TITLE.template,
		omitEmpty: source.omitEmpty === false ? false : true,
		normalizeWhitespace: source.normalizeWhitespace === false ? false : true,
		multiValueSeparator: typeof source.multiValueSeparator === 'string' ? source.multiValueSeparator : DEFAULT_BUILD_TITLE.multiValueSeparator,
		dateFormat: typeof source.dateFormat === 'string' ? source.dateFormat : DEFAULT_BUILD_TITLE.dateFormat,
		dateTimeFormat: typeof source.dateTimeFormat === 'string' ? source.dateTimeFormat : DEFAULT_BUILD_TITLE.dateTimeFormat,
		fieldFormats: Object.fromEntries(Object.entries(fieldFormats).filter(([key, value]) => key && typeof value === 'string')),
	};
}

function cloneJson(value) {
	try { return structuredClone(value); } catch {}
	return JSON.parse(JSON.stringify(value || {}));
}

function shuffle(items) {
	for (let i = items.length - 1; i > 0; i -= 1) {
		const j = Math.floor(Math.random() * (i + 1));
		[items[i], items[j]] = [items[j], items[i]];
	}
	return items;
}

function isUsableField(field) {
	if (!field || field.active === false) return false;
	if (UNSUPPORTED_FIELD_TYPES.has(String(field.type || ''))) return false;
	return !!field.id;
}

function isSelectableTitleField(field) {
	const id = normalizeTokenLabel(field && field.id);
	const type = normalizeTokenLabel(field && field.type);
	const role = normalizeTokenLabel(field && (field.role || field.kind || field.systemType));
	return id !== 'name'
		&& id !== 'title'
		&& type !== 'name'
		&& type !== 'title'
		&& role !== 'name'
		&& role !== 'title';
}

function displayTemplateFromConfig(template, state) {
	const fields = new Map((state && state.fields ? state.fields : []).map(field => [String(field.id), field]));
	return String(template || '').replace(/\{\s*(name|title)\s*\}/g, '{Name}').replace(/\{field:([^}]+)\}/g, (_match, id) => {
		const fieldId = String(id).trim();
		const field = fields.get(fieldId) || metaField(fieldId);
		return displayTokenForField(field, state && state.config, fieldId);
	});
}

function compileDisplayTemplate(template, state) {
	return String(template || '').replace(/\{([^{}]+)\}/g, (match, rawToken) => {
		const token = displayTokenLabel(rawToken);
		if (!token) return match;
		if (token.toLowerCase() === 'name') return '{name}';
		if (token.startsWith('field:')) return `{field:${token.slice(6).trim()}}`;
		const field = findFieldByDisplayToken(state, token);
		return field ? `{field:${field.id}}` : match;
	});
}

function displayTokenForRawToken(token, state, config) {
	if (token === '{name}' || token === '{title}') return '{Name}';
	const match = String(token || '').match(/^\{field:([^}]+)\}$/);
	if (!match) return token;
	const fieldId = match[1].trim();
	const field = findFieldById(state, fieldId) || metaField(fieldId);
	return displayTokenForField(field, config || (state && state.config), fieldId);
}

function displayTokenForField(field, config, fieldId) {
	const label = field && field.label ? field.label : 'Field';
	if (field && isDateLikeField(field)) {
		const fallback = isDateOnlyField(field)
			? (config && config.dateFormat) || DEFAULT_BUILD_TITLE.dateFormat
			: (config && config.dateTimeFormat) || DEFAULT_BUILD_TITLE.dateTimeFormat;
		const format = config && config.fieldFormats && config.fieldFormats[field.id || fieldId] ? config.fieldFormats[field.id || fieldId] : fallback;
		return `{${label}|${format}}`;
	}
	return `{${label}}`;
}

function displayTokenLabel(rawToken) {
	return String(rawToken || '').split('|')[0].trim();
}

function displayTokenFormat(rawToken) {
	const parts = String(rawToken || '').split('|');
	return parts.length > 1 ? parts.slice(1).join('|').trim() : '';
}

function collectFieldFormatsFromDisplayTemplate(template, state) {
	const formats = {};
	String(template || '').replace(/\{([^{}]+)\}/g, (_match, rawToken) => {
		const label = displayTokenLabel(rawToken);
		const format = displayTokenFormat(rawToken);
		if (!label || !format || label.toLowerCase() === 'name') return '';
		const field = findFieldByDisplayToken(state, label);
		if (field && isDateLikeField(field)) formats[field.id] = format;
		return '';
	});
	return formats;
}

function updateDisplayTemplateFormat(template, state, fieldId, format) {
	const field = findFieldById(state, fieldId) || metaField(fieldId);
	if (!field) return template;
	const target = normalizeTokenLabel(field.label || '');
	return String(template || '').replace(/\{([^{}]+)\}/g, (match, rawToken) => {
		const label = displayTokenLabel(rawToken);
		if (normalizeTokenLabel(label) !== target) return match;
		return `{${label}|${format}}`;
	});
}

function findFieldByDisplayToken(state, token) {
	const normalized = normalizeTokenLabel(displayTokenLabel(token));
	return (state && state.fields ? state.fields : []).find(field => normalizeTokenLabel(field.label || '') === normalized) || metaFieldByLabel(token);
}

function findFieldById(state, fieldId) {
	const id = String(fieldId || '');
	return (state && state.fields ? state.fields : []).find(field => String(field.id) === id) || null;
}

function normalizeTokenLabel(value) {
	return String(value || '').trim().toLowerCase();
}

function metaFieldByLabel(label) {
	const normalized = normalizeTokenLabel(displayTokenLabel(label));
	if (normalized === 'created') return { id: 'created_at', label: 'Created', type: 'datetime' };
	if (normalized === 'modified' || normalized === 'updated') return { id: 'updated_at', label: 'Modified', type: 'datetime' };
	return null;
}

function findDateFieldAtCursor(displayTemplate, editor, state) {
	if (!editor) return null;
	const pos = editor.selectionStart || 0;
	const text = String(displayTemplate || '');
	const start = text.lastIndexOf('{', Math.max(0, pos - 1));
	const end = text.indexOf('}', start + 1);
	if (start < 0 || end < 0 || pos > end + 1) return null;
	const token = text.slice(start + 1, end).trim();
	const field = token.toLowerCase() === 'name' ? null : findFieldByDisplayToken(state, token);
	return field && isDateLikeField(field) ? field.id : null;
}

function findFirstTemplateDateField(template, state) {
	if (!state) return null;
	const re = /\{field:([^}]+)\}/g;
	let match;
	while ((match = re.exec(String(template || '')))) {
		const field = findFieldForFormat(state, match[1].trim());
		if (field) return field.id;
	}
	return null;
}

function findFieldForFormat(state, fieldId) {
	if (!state || !fieldId) return null;
	const id = String(fieldId);
	const field = (state.fields || []).find(candidate => String(candidate.id) === id);
	if (field && isDateLikeField(field)) return field;
	const meta = metaField(id);
	return meta && isDateLikeField(meta) ? meta : null;
}

function metaField(fieldId) {
	if (fieldId === 'created_at' || fieldId === 'created') return { id: fieldId, label: 'Created', type: 'datetime' };
	if (fieldId === 'updated_at' || fieldId === 'modified_at' || fieldId === 'modified') return { id: fieldId, label: 'Modified', type: 'datetime' };
	return null;
}

function isDateLikeField(field) {
	const type = String(field && field.type || '').toLowerCase();
	return type.includes('date') || type.includes('time');
}

function isDateOnlyField(field) {
	const type = String(field && field.type || '').toLowerCase();
	return type === 'date' || (type.includes('date') && !type.includes('time'));
}

function collectionFilterKind(state) {
	if (!state || state.status === 'conflict') return 'review';
	if (state.status !== 'managed') return 'inactive';
	return state.config && state.config.enabled === false ? 'disabled' : 'active';
}

function statusShortLabel(status, enabled) {
	if (status === 'managed') return enabled ? 'Active' : 'Disabled';
	if (status === 'blank') return 'Inactive';
	return 'Review';
}

function iconClass(icon) {
	const raw = String(icon || 'ti-tag');
	return raw.startsWith('ti ') ? raw : `ti ${raw.startsWith('ti-') ? raw : `ti-${raw}`}`;
}

function safeRecordName(record) {
	const readers = [
		() => record.text && record.text('Title'),
		() => record.text && record.text('Name'),
		() => record.getName && record.getName(),
	];
	for (const read of readers) {
		try {
			const value = read();
			if (value != null && String(value).trim() !== '') return String(value);
		} catch {}
	}
	return 'Untitled';
}

function renderTitle(record, config) {
	if (!config.enabled) return safeRecordName(record);
	let text = renderTemplate(record, config.template, config);
	if (config.normalizeWhitespace) text = text.replace(/\s+/g, ' ').trim();
	return text || safeRecordName(record);
}

function renderTitleParts(record, config, nameColor) {
	if (!config.enabled) {
		return [h('span', nameColor ? { style: { color: nameColor } } : null, safeRecordName(record))];
	}
	const parsed = renderPartsChunk(record, String(config.template || ''), config, 0, null, nameColor);
	if (!parsed.parts.length) return [h('span', nameColor ? { style: { color: nameColor } } : null, safeRecordName(record))];
	return parsed.parts.map(part => h('span', part.color ? { style: { color: part.color } } : null, part.text));
}

function renderPartsChunk(record, template, config, start, stopChar, nameColor) {
	const parts = [];
	let hasValue = false;
	let i = start;
	while (i < template.length) {
		const ch = template[i];
		if (stopChar && ch === stopChar) return { parts, hasValue, index: i + 1 };
		if (ch === '\\' && i + 1 < template.length) {
			const next = template[i + 1];
			if ('{}[]\\'.includes(next)) {
				pushPart(parts, next, null);
				i += 2;
				continue;
			}
		}
		if (ch === '?' && template[i + 1] === '{') {
			const groupEnd = findGroupClose(template, i + 1);
			if (groupEnd >= 0) {
				const group = renderPartsChunk(record, template.slice(i + 2, groupEnd), config, 0, null, nameColor);
				if (group.hasValue) parts.push(...group.parts);
				hasValue = hasValue || group.hasValue;
				i = groupEnd + 1;
				continue;
			}
		}
		if (ch === '[') {
			const group = renderPartsChunk(record, template, config, i + 1, ']', nameColor);
			if (group.hasValue) parts.push(...group.parts);
			hasValue = hasValue || group.hasValue;
			i = group.index;
			continue;
		}
		if (ch === '{') {
			const close = findClose(template, i + 1, '}');
			if (close >= 0) {
				const token = template.slice(i + 1, close).trim();
				const value = resolveToken(record, token, config);
				if (value) {
					pushPart(parts, value, token === 'name' || token === 'title' ? nameColor : null);
					hasValue = true;
				}
				i = close + 1;
				continue;
			}
		}
		pushPart(parts, ch, null);
		i += 1;
	}
	return { parts, hasValue, index: i };
}

function pushPart(parts, text, color) {
	if (!text) return;
	const last = parts[parts.length - 1];
	if (last && last.color === color) {
		last.text += text;
	} else {
		parts.push({ text, color });
	}
}

function renderTemplate(record, template, config) {
	return renderChunk(record, String(template || ''), config, 0, null).text;
}

function renderChunk(record, template, config, start, stopChar) {
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
			const groupEnd = findGroupClose(template, i + 1);
			if (groupEnd >= 0) {
				const group = renderChunk(record, template.slice(i + 2, groupEnd), config, 0, null);
				if (group.hasValue) text += group.text;
				hasValue = hasValue || group.hasValue;
				i = groupEnd + 1;
				continue;
			}
		}
		if (ch === '[') {
			const group = renderChunk(record, template, config, i + 1, ']');
			if (group.hasValue) text += group.text;
			hasValue = hasValue || group.hasValue;
			i = group.index;
			continue;
		}
		if (ch === '{') {
			const close = findClose(template, i + 1, '}');
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

function findClose(template, start, closeChar) {
	for (let i = start; i < template.length; i += 1) {
		if (template[i] === '\\') {
			i += 1;
			continue;
		}
		if (template[i] === closeChar) return i;
	}
	return -1;
}

function findGroupClose(template, openIndex) {
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

function resolveToken(record, token, config) {
	if (token === 'name' || token === 'title') return safeRecordName(record);
	if (!token.startsWith('field:')) return '';
	const fieldId = token.slice(6).trim();
	if (!fieldId) return '';
	try {
		const meta = resolveMetaField(record, fieldId, config);
		if (meta) return meta;
		const prop = record.prop(fieldId);
		return prop ? propertyToText(prop, config, fieldId) : '';
	} catch {
		return '';
	}
}

function resolveMetaField(record, fieldId, config) {
	try {
		if (fieldId === 'created_at' || fieldId === 'created') {
			const date = record.getCreatedAt && record.getCreatedAt();
			return date ? formatDateTime(date, fieldFormat(config, fieldId, config.dateTimeFormat)) : '';
		}
		if (fieldId === 'updated_at' || fieldId === 'modified_at' || fieldId === 'modified') {
			const date = record.getUpdatedAt && record.getUpdatedAt();
			return date ? formatDateTime(date, fieldFormat(config, fieldId, config.dateTimeFormat)) : '';
		}
	} catch {}
	return '';
}

function propertyToText(prop, config, fieldId) {
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
		const linkedRecords = prop.linkedRecords && prop.linkedRecords();
		if (linkedRecords && linkedRecords.length) return join(linkedRecords.map(r => r && r.getName ? r.getName() : ''));
	} catch {}
	try {
		const dateTimes = prop.datetimes && prop.datetimes();
		if (dateTimes && dateTimes.length) return join(dateTimes.map(value => formatDateTime(value, fieldFormat(config, fieldId, config.dateTimeFormat))));
	} catch {}
	try {
		const dates = prop.dates && prop.dates();
		if (dates && dates.length) return join(dates.map(value => formatDate(value, fieldFormat(config, fieldId, config.dateFormat))));
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

function fieldFormat(config, fieldId, fallback) {
	return config && config.fieldFormats && typeof config.fieldFormats[fieldId] === 'string'
		? config.fieldFormats[fieldId]
		: fallback;
}

function formatDateTime(value, pattern) {
	try {
		const date = value && value.toDate ? value.toDate() : value;
		if (date instanceof Date && !Number.isNaN(date.getTime())) return formatDatePattern(date, pattern || DEFAULT_BUILD_TITLE.dateTimeFormat);
	} catch {}
	return value == null ? '' : String(value);
}

function formatDate(value, pattern) {
	try {
		if (value instanceof Date && !Number.isNaN(value.getTime())) return formatDatePattern(value, pattern || DEFAULT_BUILD_TITLE.dateFormat);
	} catch {}
	return value == null ? '' : String(value);
}

function formatDatePattern(date, pattern) {
	const pad = (value) => String(value).padStart(2, '0');
	const pad3 = (value) => String(value).padStart(3, '0');
	const ordinal = (value) => {
		const mod10 = value % 10;
		const mod100 = value % 100;
		if (mod10 === 1 && mod100 !== 11) return `${value}st`;
		if (mod10 === 2 && mod100 !== 12) return `${value}nd`;
		if (mod10 === 3 && mod100 !== 13) return `${value}rd`;
		return `${value}th`;
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
		return colon ? `${sign}${hours}:${minutes}` : `${sign}${hours}${minutes}`;
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
	const masked = String(pattern || DEFAULT_BUILD_TITLE.dateFormat).replace(/\[([^\]]*)\]/g, (_match, literal) => {
		const index = literals.push(literal) - 1;
		return `\u0000${index}\u0000`;
	});
	return masked
		.replace(/GGGG|YYYY|MMMM|DDDD|dddd|MMM|DDD|ddd|GG|YY|Do|MM|DD|WW|HH|hh|mm|ss|SSS|ZZ|Y|M|D|W|E|H|h|m|s|SS|S|A|a|Z|X|x/g, token => values[token] ?? token)
		.replace(/\u0000(\d+)\u0000/g, (_match, index) => literals[Number(index)] || '');
}

function clamp(value, min, max) {
	const n = Number.isFinite(value) ? value : min;
	return Math.min(max, Math.max(min, n));
}
