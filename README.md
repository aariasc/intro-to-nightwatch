# Intro to Nightwatch

This repo contains some basic examples on how to use [Nightwatchjs](http://nightwatchjs.org/).

This is the sample code of a presentation done during the [Big Mountain Dev & Data Conference](https://www.utahgeekevents.com/) in SLC on 11/11/2017.

## Docker
This repo contains a `docker-compose` file with a basic Wordpress installation, used as a target of the automated tests.

To boot up the site, just run
```
docker-compose up
```
This will pull the MariaDB and Wordpress image, and set everything up.

## Running Chrome in a Docker container
To avoid having to install `Java` in your local workstation, you can use the Chrome docker container available in the [Docker Hub](https://hub.docker.com/r/selenium/standalone-chrome-debug/)

To run the Chrome container:
```
docker run -d -p 4444:4444 -p 59000:5900 selenium/standalone-chrome-debug:latest
```
you can change the ports to whatever you want.  Be sure that the ports match your Nighwatch configuration

## To run the Nightwatch Tests

Run all tests
```
node .\node_modules\nightwatch\bin\nightwatch -c .\nightwatch.js
```

Run a specific test
```
node .\node_modules\nightwatch\bin\nightwatch -c .\nightwatch.js -t .\tests\01_basic.js
```

Run a specific tag
```
node .\node_modules\nightwatch\bin\nightwatch -c .\nightwatch.js -t basic
```

Run on a local Chrome (not using the container)
```
node .\node_modules\nightwatch\bin\nightwatch -c .\nightwatch.js -e local_chrome
```

Happy testing!
