// eslint-disable-next-line @typescript-eslint/no-require-imports
const path = require("path");
module.exports = {
  webpack: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@/components/*": ["./src/components/*"],
      "@/pages/*": ["./src/pages/*"],
      "@/routes/*": ["./src/routes/*"],
      "@/lib/*": ["./src/lib/*"],
      "@/store/*": ["./src/store/*"],
      "@/hooks/*": ["./src/hooks/*"],
    },
  },
};
