module.exports = {
  apps: [
    {
      name: 'PEDROMAGALHAES',
      script: './server/index.js',
      env: {
        NODE_ENV: 'development'
      },
      env_production: {
        NODE_ENV: 'production',
        autorestart: true,
        vizion: false
      }
    }
  ]
}
