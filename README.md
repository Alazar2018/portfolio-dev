# alazar.dev — Portfolio

Personal portfolio and freelance landing page for **Alazar Tilahun**, Senior Full Stack Engineer.

Built with **Next.js 16**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

## Quick Start

```bash
npm install
cp .env.example .env.local   # add your Web3Forms key
npm run dev                   # http://localhost:3000
```

## Environment Variables

| Variable | Description |
|---|---|
| `NEXT_PUBLIC_WEB3FORMS_KEY` | [Web3Forms](https://web3forms.com) access key for the contact form |

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Styling:** Tailwind CSS 4
- **Animations:** Framer Motion
- **Icons:** MUI Icons
- **Contact:** Web3Forms + hCaptcha
- **Deployment:** Vercel

## Deployment

Push to `main` and Vercel auto-deploys. Set `NEXT_PUBLIC_WEB3FORMS_KEY` in Vercel → Settings → Environment Variables.

## License

MIT
