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

The site runs on an Azure VM with Nginx + systemd.

### First-time setup

```bash
bash deploy/setup.sh
```

This installs Nginx config, SSL certs, systemd service, builds the app, and starts everything.

### Automatic deploys

Pushes to `main` trigger `.github/workflows/deploy.yml`, which SSHs into the VM, pulls, builds, and restarts.

**Required GitHub Secrets:** `DEPLOY_HOST`, `DEPLOY_USER`, `DEPLOY_KEY`

### Config files

- `deploy/nginx.conf` — Nginx reverse proxy config
- `deploy/philtompkins.service` — systemd service unit
- `deploy/setup.sh` — one-time setup script
- `.github/workflows/deploy.yml` — CI/CD pipeline
