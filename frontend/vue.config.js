const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: [
    'vuetify'
  ],
  devServer: {
    proxy: {
      '/quiz/api/v1': {
        target: 'http://localhost:8081'
      }
    }
  }
})
