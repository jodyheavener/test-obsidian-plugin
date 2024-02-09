import { Notice, Plugin } from "obsidian";

export default class WasmPlugin extends Plugin {
	async onload() {
		this.addRibbonIcon(
			"bot",
			"Call WebAssembly function",
			(evt: MouseEvent) => {
				new Notice("This will be the response from the WASM call!");
			}
		);
	}

	onunload() {}
}
