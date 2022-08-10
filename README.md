# ShoutOut App

## Description:
An anonymous platform that allows Associates and Revature employees to offer encouragement and thanks to other employees and departments.

## Resources:
### Database - Azure SQLServer database 
-   Server: shout-out-db-server.database.windows.net
-   Catalog: ShoutOutDB
-   UserId: ShoutOutAdmin

*Please contact Richard Hawkins for the database password*

### Container Registry
-   Relevent images are available on DockerHub
  - hawkinsr/shoutout.api
  - hawkinsr/shoutout.ui

## Repository Contents
-   ShoutOut.API : .NET project
  -  Models
    - User
    - ShoutOut
  - Controllers
    - UserController
    - ShoutOutController
-   ShoutOut.UI : Angular Project
