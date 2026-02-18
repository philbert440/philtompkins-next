#!/bin/bash
set -e

echo "=== Phil Tompkins Portfolio - One-Time Setup ==="
echo ""

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
PROJECT_DIR="$(dirname "$SCRIPT_DIR")"

# --- Nginx ---
echo "📦 Setting up Nginx..."
sudo cp "$SCRIPT_DIR/nginx.conf" /etc/nginx/sites-available/philtompkins.com
sudo ln -sf /etc/nginx/sites-available/philtompkins.com /etc/nginx/sites-enabled/
sudo rm -f /etc/nginx/sites-enabled/default
echo "✅ Nginx config installed"

echo "🔍 Testing Nginx config..."
sudo nginx -t
sudo systemctl reload nginx
echo "✅ Nginx reloaded"

# --- SSL ---
echo ""
echo "🔒 Setting up SSL with Let's Encrypt..."
sudo apt-get update -qq
sudo apt-get install -y -qq certbot python3-certbot-nginx
echo "Getting certificate (Nginx will be temporarily stopped)..."
sudo certbot --nginx -d philtompkins.com -d www.philtompkins.com --non-interactive --agree-tos --email philbert440@gmail.com
echo "✅ SSL certificate obtained"

# --- Systemd ---
echo ""
echo "⚙️  Setting up systemd user service..."
mkdir -p ~/.config/systemd/user
cp "$SCRIPT_DIR/philtompkins.service" ~/.config/systemd/user/philtompkins.service
systemctl --user daemon-reload
systemctl --user enable philtompkins
echo "✅ Systemd service installed and enabled"

# --- Build & Start ---
echo ""
echo "🔨 Building Next.js app..."
cd "$PROJECT_DIR"
npm ci
npm run build
echo "✅ Build complete"

echo ""
echo "🚀 Starting the app..."
systemctl --user start philtompkins
echo "✅ App started"

# --- Linger (keep user services running after logout) ---
echo ""
echo "🔧 Enabling lingering for user services..."
sudo loginctl enable-linger "$USER"

# --- Status ---
echo ""
echo "=== Status ==="
systemctl --user status philtompkins --no-pager
echo ""
echo "🎉 All done! philtompkins.com should be live."
echo "   Check: curl -I https://philtompkins.com"
