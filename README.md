# Starter Project.

## Table of contents

- [How to start](#how-to-start)
- [Environment file](#environment-file-env)
- [It's hacking time!](#its-hacking-time)
    - [Utility Tasks](#utility-tasks)
    - [Utility Commands](#utility-commands)

## How to start

1. clone the repo and `cd` into it

```
git clone http://gitlab.wipitalia.it/wipitalia/starter-twill-uuuf PROJECT_NAME && cd $_
```

2. copy and link `.env` and edit it accordingly ([see below](#environment-file-env) for details)

```
cp .env.compose .env.local && ln -sf .env.local .env
```

NOTE: `.env` and `.env.local` are ignored by git. Other `.env.*` files can be created and eventually committed if necessary. DO NOT commit them blindly!

3. remove `.git` directory and reitinitialize git repo

```
rm -rf .git && git init && git add -A && git commit -am "Initial commit"
```

4. [It's hacking time!](#its-hacking-time)

## Environment file (`.env`)

> Tip: you can find which variables should change by seaching `TOCHANGE`

This is a list of environment variables that should change between projects:

- `HOST_UID`: uid of your user. tipically is `501` on macos, `1000` on linux. If in doubt, check it with `id -u`. Prevents premission conflicts on bind mounts.
- `COMPOSE_PROJECT_NAME`: should match project directory name. Necessary to avoid conflicts between docker images of different projects.
    - `NGINX_FPM_HOST`: depends on `COMPOSE_PROJECT_NAME`, it is the name of the container running php
    - `DB_HOST`: depends on `COMPOSE_PROJECT_NAME`, it is the name of the container running mysql
- `NGINX_SERVERNAME`: is the hostname of the application. Usually just change the 3rd level domain
    - `APP_URL`: depens on `NGINX_SERVERNAME`, update accordingly
    - `ADMIN_APP_URL`: depens on `NGINX_SERVERNAME`, update accordingly
- `NGINX_HTUSER`, `NGXIN_HTPASSWORD`: user/password for http basic auth. leave blank to disable
- `DB_DATABASE`, `DB_USERNAME`, `DB_PASSWORD`: you might wanna change these

## It's hacking time!

> Tip: in a hurry? just `make` it!

First time you need to build docker images:

```
make build
```

Then, to run the whole setup in development mode:

```
make dev
```

This launches the setup in background and attaches to the logs. It will stop containers if they are already running. Killing (`ctrl + c`) make won't stop the containers. To stop them:

```
make down
```

If you need to reattach to all logs:

```
make logs
```

If you need to debug php, use

```
make debug
```

It will rebuild fpm image with xdebug enabled, it might take some time.

### Utility tasks

- `make superadmin`: runs `php artisan twill:superadmin` inside the container
- `make sh-fpm`: attaches a shell to php container
- `make nuke`: stop containers and deletes volumes (this means database is wiped)

### Utility commands

- `docker-compose logs -f SERVICE`: attach to single container logs
- `docker ps`: check running containers and their names

for everithing else, refer to docker-compose configurations (`docker-compose.yml`), [docker-compose documentation](https://docs.docker.com/engine/reference/commandline/compose/) and [docker documentation](https://docs.docker.com/engine/reference/commandline/cli/)