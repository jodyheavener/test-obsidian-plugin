import { Notice, Plugin } from "obsidian";
import { greet } from "example_wasm/dist/example_wasm";

export default class WasmPlugin extends Plugin {
	async onload() {
		this.addRibbonIcon(
			"bot",
			"Call WebAssembly function",
			(evt: MouseEvent) => {
				new Notice(greet("Obsidian"));
			}
		);
	}

	onunload() {}
}
