import nextConfig from "eslint-config-next"

/**
 * @type {import("eslint").Linter.FlatConfig}
 */
export default [
  {
    extends: nextConfig.extends,
    plugins: nextConfig.plugins,
    rules: nextConfig.rules,
    settings: nextConfig.settings,
    ignores: [".next/.cache/*"],
    files: ["app/**/*.tsx", "app/**/*.ts"],
  },
]
