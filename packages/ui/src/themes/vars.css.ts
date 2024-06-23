import { createThemeContract } from "@vanilla-extract/css";

import { makeVanillaTheme } from "./male_vanilla_theme.ts";
import tokens from "./base_tokens/tokens.ts";

export const vars = createThemeContract(makeVanillaTheme(tokens));
