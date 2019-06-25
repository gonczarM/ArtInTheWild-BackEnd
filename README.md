# ArtInTheWild API

This API can create users that can view information about murals pulled from a third party API. Users can then upload images for users to view of specific murals

## Getting Started

This back end uses Node.js and NPM, simply install all dependencies.

## Routes

### User

| Method | Path | Action|
|--------|------|-------|
| GET | /logout | logs out user kills session |
| GET | /user/:id | displayes murals and images uploaded by user |
| POST | / | creates user, starts sesssion |
| POST | /user/login | logs in user, starts session |
| DELETE | /user/:id | delete specific user and associated posts |

### Mural

| Method | Path | Action|
|--------|------|-------|
| GET | /home | list of murals |
| GET | /:property/:term | search specific mural list by term |
| PUT | /mural/:id | update mural user created |
| POST | / | add mural to the list |
| DELETE | /mural?:id | Delete mural user as created |
