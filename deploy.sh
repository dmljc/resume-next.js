#!/bin/bash
# ===========================================
# Next.js 项目部署脚本
# 部署目标：阿里云 ECS + CDN
# ===========================================

# 加载 nvm 环境（解决 Cursor 终端找不到 node 的问题）
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"

# 服务器配置
SERVER_IP="8.149.129.226"
SERVER_USER="root"
REMOTE_PATH="/var/www/resume-next"

echo "🚀 开始部署..."

# 步骤1：本地构建 Next.js 项目
echo "📦 构建项目..."
pnpm build

# 检查构建是否成功
if [ $? -ne 0 ]; then
    echo "❌ 构建失败，终止部署"
    exit 1
fi

# 步骤2：上传构建产物到服务器
# --delete 选项会删除服务器上多余的文件，保持同步
echo "📤 上传 .next 构建产物..."
rsync -avz --delete .next/ ${SERVER_USER}@${SERVER_IP}:${REMOTE_PATH}/.next/

# 步骤3：上传静态资源文件夹
echo "📤 上传 public 静态资源..."
rsync -avz public/ ${SERVER_USER}@${SERVER_IP}:${REMOTE_PATH}/public/

# 步骤4：更新 Nginx 配置
echo "⚙️ 更新 Nginx 配置..."
scp nginx-zhangfc.cn.conf ${SERVER_USER}@${SERVER_IP}:/etc/nginx/sites-available/zhangfc.cn

# 步骤5：测试并重载 Nginx
echo "🔧 测试 Nginx 配置..."
ssh ${SERVER_USER}@${SERVER_IP} "nginx -t && systemctl reload nginx"

# 步骤6：重启 PM2 应用
echo "🔄 重启服务..."
ssh ${SERVER_USER}@${SERVER_IP} "cd ${REMOTE_PATH} && pm2 restart resume-next"

# 部署完成
echo "✅ 部署完成！"
echo "📅 时间：$(date '+%Y-%m-%d %H:%M:%S')"
echo "🌐 访问：https://zhangfc.cn"