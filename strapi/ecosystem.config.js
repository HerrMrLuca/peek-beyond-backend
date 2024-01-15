module.exports = {
  apps : [{
    name: 'strapi',
      script: 'npm',
      args: 'start',
      instances: 1,
      autorestart: true,
      watch: false,
  }]
}
