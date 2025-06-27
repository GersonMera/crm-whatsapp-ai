module.exports = {
  apps: [{
    name: 'crm-backend',
    script: 'npx',
    args: 'tsx server/index.ts',
    cwd: '/home/crm-whatsapp-a/crm-whatsapp-ai/backend',
    env: {
      NODE_ENV: 'production'
    },
    log_file: '../logs/combined.log',
    out_file: '../logs/out.log',
    error_file: '../logs/err.log',
    log_date_format: 'YYYY-MM-DD HH:mm:ss'
  }]
}