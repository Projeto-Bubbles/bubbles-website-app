import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const resourceMap = {
  memberGabriel: './src/assets/members/member_gabriel.png',
  memberLaviny: './src/assets/members/member_laviny.png',
  memberPaulo: './src/assets/members/member_paulo.png',
  memberRuan: './src/assets/members/member_ruan.png',
  memberVinicius: './src/assets/members/member_vinicius.png',
  cookingImage: './src/assets/MoreBubbles/cooking.jpg',
  cyclistImage: './src/assets/MoreBubbles/cyclist.jpg',
  funImage: './src/assets/MoreBubbles/fun.jpg',
  bubblesLogoGlass: './src/assets/bubbles-logo-glass.png',
  bubblesEffect: './src/assets/bubbles-effect.png',
  outBubbles: './src/assets/out-bubbles-image.png',
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: 'resolve-assets',
      resolveId(id) {
        if (resourceMap[id]) {
          return resourceMap[id];
        }

        return null;
      },
    },
  ],
  build: {
    rollupOptions: {
      output: {
        assetFileNames: 'assets/[name][ext]',
      },
    },
  },
});
