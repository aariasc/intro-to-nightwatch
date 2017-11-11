module.exports = {
    src_folders: ['./tests'],
    output_folder: './results',
    live_output: true,
    // custom_commands_path: './commands',
    custom_assertions_path:'./assertions',
    // page_objects_path: './pages',

    test_settings: {
      default: {
        launch_url: 'http://localhost',
        selenium_host: '127.0.0.1',
        selenium_port: 4444,
        silent: true,
        disable_colors: false,
        screenshots: {
          enabled: true,
          path: './results/screenshots'
        },
        desiredCapabilities: {
          browserName: 'chrome',
          javascriptEnabled: true,
          acceptSslCerts: true
        },
        globals: require('./data/dev')
      },
      local_chrome:{
        selenium: {
          start_process: true,
          server_path: './node_modules/selenium-server-standalone-jar/jar/selenium-server-standalone-3.4.0.jar',
          log_path: './results',
          host: '127.0.0.1',
          port: 4444,
          cli_args: {
            'webdriver.chrome.driver': './node_modules/.bin/chromedriver'
          }
        }
      }
    }
  };
