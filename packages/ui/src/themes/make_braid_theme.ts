import { createTheme } from "@vanilla-extract/css";

import { vars } from "./vars.css.ts";
import { makeVanillaTheme } from "./male_vanilla_theme.ts";
import { makeRuntimeTokens } from "./make_runtime_tokens.js";
import type { BraidTokens } from "./token_type.js";

export const makeBraidTheme = (tokens: BraidTokens) => ({
    ...makeRuntimeTokens(tokens),
    vanillaTheme: createTheme(vars, makeVanillaTheme(tokens), tokens.name),
});

export type BraidTheme = ReturnType<typeof makeBraidTheme>;
