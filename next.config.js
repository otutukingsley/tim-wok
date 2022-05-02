/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig

//markdown config
const removeImports = require("next-remove-imports")()
module.exports = removeImports({})
