import tailwindcss from "@tailwindcss/vite";

export default {
  plugins: [tailwindcss()],
  server: {
    allowedHosts: ['octyn.cloud', 'www.octyn.cloud'],
  },
};
