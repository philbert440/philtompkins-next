# philtompkins.com

Phil Tompkins' personal portfolio website.

## Tech Stack

- **Next.js 16** with App Router
- **React 19**
- **TypeScript**
- **Tailwind CSS 4**
- **Framer Motion** for animations
- **Lucide React** for icons

## Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3002](http://localhost:3002).

## Environment Variables

Copy `.env.example` to `.env.local`:

```bash
cp .env.example .env.local
```

| Variable | Description | Default |
|----------|-------------|---------|
| `PORT` | Server port | `3002` |
| `NODE_ENV` | Environment | `development` |

## Deployment

The site runs on an Azure VM (AdapifyProd2) with Apache reverse proxy + PM2.

### Automatic deploys

Pushes to `main` trigger `.github/workflows/deploy.yml`, which SSHs into the VM, pulls, builds, and restarts PM2.

**Required GitHub Secrets:** `DEPLOY_HOST`, `DEPLOY_USER`, `DEPLOY_KEY`

### Config files

- `deploy/apache-philtompkins.conf` — Apache HTTP redirect
- `deploy/apache-philtompkins-le-ssl.conf` — Apache SSL reverse proxy config
- `deploy/setup-apache.sh` — one-time Apache setup script
- `.github/workflows/deploy.yml` — CI/CD pipeline
