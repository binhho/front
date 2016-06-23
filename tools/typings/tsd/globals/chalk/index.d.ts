// Generated by typings
// Source: https://raw.githubusercontent.com/DefinitelyTyped/DefinitelyTyped/5a8fc5ee71701431e4fdbb80c506e3c13f85a9ff/chalk/chalk.d.ts
declare module Chalk {
	export interface ChalkModule extends ChalkStyle {
		enabled: boolean;
		supportsColor: boolean;
		styles: ChalkStyleMap;

		stripColor(value: string): any;
		hasColor(str:  string): boolean;
	}

	export interface ChalkChain extends ChalkStyle {
		(...text: string[]): ChalkChain;
	}

	export interface ChalkStyleElement {
		open: string;
		close: string;
	}

	export interface ChalkStyle {
		// General
		reset: ChalkChain;
		bold: ChalkChain;
		italic: ChalkChain;
		underline: ChalkChain;
		inverse: ChalkChain;
		strikethrough: ChalkChain;

		// Text colors
		black: ChalkChain;
		red: ChalkChain;
		green: ChalkChain;
		yellow: ChalkChain;
		blue: ChalkChain;
		magenta: ChalkChain;
		cyan: ChalkChain;
		white: ChalkChain;
		gray: ChalkChain;
		grey: ChalkChain;

		// Background colors
		bgBlack: ChalkChain;
		bgRed: ChalkChain;
		bgGreen: ChalkChain;
		bgYellow: ChalkChain;
		bgBlue: ChalkChain;
		bgMagenta: ChalkChain;
		bgCyan: ChalkChain;
		bgWhite: ChalkChain;
	}

	export interface ChalkStyleMap {
		// General
		reset: ChalkStyleElement;
		bold: ChalkStyleElement;
		italic: ChalkStyleElement;
		underline: ChalkStyleElement;
		inverse: ChalkStyleElement;
		strikethrough: ChalkStyleElement;

		// Text colors
		black: ChalkStyleElement;
		red: ChalkStyleElement;
		green: ChalkStyleElement;
		yellow: ChalkStyleElement;
		blue: ChalkStyleElement;
		magenta: ChalkStyleElement;
		cyan: ChalkStyleElement;
		white: ChalkStyleElement;
		gray: ChalkStyleElement;

		// Background colors
		bgBlack: ChalkStyleElement;
		bgRed: ChalkStyleElement;
		bgGreen: ChalkStyleElement;
		bgYellow: ChalkStyleElement;
		bgBlue: ChalkStyleElement;
		bgMagenta: ChalkStyleElement;
		bgCyan: ChalkStyleElement;
		bgWhite: ChalkStyleElement;
	}
}

declare module "chalk" {
	var ch: Chalk.ChalkModule;
	export = ch;
}