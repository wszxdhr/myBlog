module.exports = {
  apps: [{
    name: 'blog',
    script: './pm2Start.sh',
    env_production: {
      NODE_ENV: 'production'
    },
    instances : 'max',
    exec_mode : 'cluster'
  }],
  deploy: {
    production: {
      user: 'root',
      ref: 'origin/master',
      host: 'example.com',
      repo: 'https://github.com/wszxdhr/myBlog.git',
      path: '/www/wwwroot/myblog',
      'post-deploy': 'rm -rf node_modules && cnpm i'
    }
  }
}
