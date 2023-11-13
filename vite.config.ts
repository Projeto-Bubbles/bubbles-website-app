import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const resourceMap = {
  memberGabriel: './assets/members/member_gabriel.png',
  memberLaviny: './assets/members/member_laviny.png',
  memberPaulo: './assets/members/member_paulo.png',
  memberRuan: './assets/members/member_ruan.png',
  memberVinicius: './assets/members/member_vinicius.png',
  cookingImage: './assets/MoreBubbles/cooking.jpg',
  cyclistImage: './assets/MoreBubbles/cyclist.jpg',
  funImage: './assets/MoreBubbles/fun.jpg',
  groupImage: './assets/MoreBubbles/group.jpg',
  bubblesLogoGlass: './assets/bubbles-logo-glass.png',
  bubblesEffect: './assets/bubbles-effect.png',
  outBubbles: './assets/out-bubbles-image.png',
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
