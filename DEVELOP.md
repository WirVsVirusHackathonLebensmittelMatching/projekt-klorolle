# Getting started on development

If you just want to run the application, you can simply clone from this
repository. If you wish to contribute, you should 
[fork it on Github](https://github.com/WirVsVirusHackathonLebensmittelMatching/projekt-klorolle/fork), 
commit the changes into a branch in your fork, and then create a pull
request.

## Setting up the project

To build the project locally, you will need 
[node.js](https://nodejs.org/en/) and [yarn](https://yarnpkg.com/). After cloning the repository, download
the dependencies for ther backend by running

    cd backend/
    yarn

## Running the server locally

To run the server, use yarn's watch goal in the backend folder:

    yarn watch

The server will be available on http://localhost:3000. Changes you make will be reloaded directly.

## Using Docker

We have provided a Dockerfile to run the server using [Docker](https://www.docker.com/). To build
the image, run (note the trailing dot!)

    docker build -t projekt-klorolle:master .

Once the build is complete, you can run it with

    docker run --rm -p 3000:3000 projekt-klorolle:master

The server will be available on http://localhost:3000. If you wish to mount your local development
into the docker image, you can mount the following directories:

| Local Directory | Docker directory      |
| --------------- | --------------------- |
| `backend`       | `/usr/src/app`        |
| `frontend`      | `/usr/src/app/public` |

Full command line:

    docker run --rm -p 3000:3000 -v backend:/usr/src/app -v frontend:/usr/src/app/public projekt-klorolle:master