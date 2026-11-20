# Zapato AI

Type a prompt, get a 2D shoe design and an interactive, downloadable 3D model.

**Pipeline:** prompt -> Stability *Stable Image Core/Ultra* (2D) -> Stability *Stable Point Aware 3D* (.glb) -> three.js viewer.

## Run it in VS Code

1. Install Node.js 18.18+ (20 or 22 recommended).
2. Open this folder in VS Code, then open the terminal (Ctrl + `).
3. Copy `.env.example` to `.env.local` and put your key in it:
   ```
   STABILITY_API_KEY=sk-...
   ```
   Get a key at https://platform.stability.ai/account/keys
4. Install and start:
   ```bash
   npm install
   npm run dev
   ```
5. Open http://localhost:3000, click **Get Started**, describe a shoe, press **Generate Shoe**.

Restart `npm run dev` any time you change `.env.local`.

## Notes

- The dashboard shows a bundled sample shoe (`public/demo/`) until you generate your own, so you can check the 3D viewer without an API key.
- Generation is stateless: images and models are returned to the browser and downloaded from there. Nothing is written to `public/`.
- Each generation spends Stability credits (one image + one 3D model).
- Login / Sign up pages are still UI-only placeholders.
