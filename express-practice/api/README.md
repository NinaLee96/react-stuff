If Database doesn't work

-check if the cluster is running on mongo

-check if IP is added to the networks

Run scripts by using "npm run {scriptName}"
To run client and server together use concurrently
in server package.json, can use --prefix without having to use 'cd /foldername'

---Connecting to Heroku----

--client--
Make sure to add proxy to client package.json to connect to backend

--api/server--
Make sure the server package.json is starting the client correctly using the correct paths

In heroku you need to configure the Vars with MongoDB access key (go to heroku website)
In MongoDB you need to whitelist 0.0.0.0/0 so any client can connect to it with their IP address (go to mongodb website)
Refer to this for more info:
https://dev.to/cpclark360/how-to-host-a-restful-node-js-server-with-mongodb-atlas-database-on-heroku-1opl

-----Connecting to Openshift------

- create backend using dockerfile
  oc new-app {dockerfile} --name {insert name here}

- expose the app for outside access
  oc expose svc/{app name}

- create frontend using dockerfile and connect to backend
  oc new-app {dockerfile} --name {insert name} -e COMPONENT_BACKEND_HOST={app name for backend} -e COMPONENT_BACKEND_PORT={port exposed on backend}

* Make sure to whitelist ports on mongodb
* create MongoDB instance on openshift:
  oc new-app --template=mongodb-ephemeral
* set the environment variables to backend
  oc set env dc/{backend app name} MONGODB_URL=mongodb://{generated username}:{generated password}@mongodb/{db name}
* Expose MongoDb ports on openshift
  oc expose svc/mongodb
