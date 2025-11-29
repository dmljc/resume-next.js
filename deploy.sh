#!/bin/bash
# 本地构建
pnpm build
# 上传到服务器
rsync -avz --exclude 'node_modules' \
  --exclude '.git' \
  .next/ root@8.149.129.226:/var/www/resume-next/.next/
# 重启应用
ssh root@8.149.129.226 "cd /var/www/resume-next && pm2 restart resume-next"
echo "部署完成！"