#!/bin/bash
# One-time setup script for philtompkins.com on AdapifyProd2 (Apache)
# Run as weuadmin with sudo access
set -e

echo "🚀 Setting up philtompkins.com (Next.js)"

# 1. Clone repo if not exists
if [ ! -d ~/philtompkins-next ]; then
    echo "📦 Cloning repo..."
    git clone https://github.com/philbert440/philtompkins-next.git ~/philtompkins-next
fi

cd ~/philtompkins-next

# 2. Install dependencies and build
echo "📦 Installing dependencies..."
npm ci --production=false
echo "🔨 Building..."
npm run build

# 3. Create .env
if [ ! -f .env ]; then
    echo "📝 Creating .env..."
    cat > .env << 'EOF'
PORT=3002
NODE_ENV=production
# Add ANTHROPIC_API_KEY for chat widget
# ANTHROPIC_API_KEY=sk-ant-...
EOF
fi

# 4. Start with PM2
echo "🚀 Starting Next.js with PM2..."
pm2 delete philtompkins-next 2>/dev/null || true
PORT=3002 pm2 start npm --name "philtompkins-next" -- start
pm2 save

# 5. Backup current Apache configs
echo "💾 Backing up current Apache configs..."
sudo cp /etc/apache2/sites-available/philtompkins.conf /etc/apache2/sites-available/philtompkins.conf.bak
sudo cp /etc/apache2/sites-available/philtompkins-le-ssl.conf /etc/apache2/sites-available/philtompkins-le-ssl.conf.bak

# 6. Copy new Apache configs
echo "📝 Installing new Apache configs..."
sudo cp deploy/apache-philtompkins.conf /etc/apache2/sites-available/philtompkins.conf
sudo cp deploy/apache-philtompkins-le-ssl.conf /etc/apache2/sites-available/philtompkins-le-ssl.conf

# 7. Enable required Apache modules
echo "🔧 Enabling Apache modules..."
sudo a2enmod proxy proxy_http proxy_wstunnel rewrite headers deflate ssl 2>/dev/null || true

# 8. Test Apache config
echo "🧪 Testing Apache config..."
sudo apache2ctl configtest

# 9. Reload Apache
echo "🔄 Reloading Apache..."
sudo systemctl reload apache2

echo ""
echo "✅ Done! philtompkins.com should now be serving the Next.js site."
echo "   Old VitePress files are still at /home/weuadmin/phil/documate-grok/"
echo "   Apache backups at /etc/apache2/sites-available/*.bak"
echo ""
echo "🔍 Verify: curl -I https://philtompkins.com"
