# My own personal portfolio web-app
### Made Using: [My React Boilerplate](https://github.com/iBoB-Code/react-skeleton-app)
-----
### Run in HMR for development
`make dev` will start a webpack-dev-server on localhost:3000
Note that FOUC problems can apper : this is normal and will no longer be here in production.

------
### Run in production mode

`make prod` will:
1) Clear the `/dist` folder
2) Build, concat, and optimize the `webpack` bundle for production
3) Start production server on `localhost:3000`

------
### Prepare a production Docker image and push it

`make d-build` to just build the docker image
`make d-start` to run the container locally
`make d-push` to build and push the image on your docker hub
