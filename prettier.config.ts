import { type Config } from "prettier";
import * as tailwindConfig from "prettier-plugin-tailwindcss";

export default {
  plugins: [tailwindConfig],
  tailwindFunctions: ["classNames"],
  tabWidth: 2,
  semi: true,
} satisfies Config;
