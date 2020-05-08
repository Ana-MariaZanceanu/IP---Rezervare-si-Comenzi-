# Favorites API

## Response structure

The structure of the API responses' body is as follows:

-   for successful responses, a JSON object containing the properties:
    -   `success`: `true`
    -   `data`: An object, structure detailed for each route below.
-   for unsuccessful responses, a JSON object containing the
    properties:
    -   `success`: `false`
    -   `error`: An object containing a `message` property, and
        sometimes additional helpful properties.

## /api/v1/favorites

### GET

Get the all user's favorite foods from the db.

**Return codes**:

-   200 - OK
-   400 - There was a problem fetching data

**Usage example**:  
 `localhost:3000/api/v1/favorites`

**Returned data example**:

```JSON
{
    "success": true,
    "data": {
        "favorites": [
            {
                "items": [
                    "5eb173d3d6fb9132c43218a3",
                    "5eb173d3d6fb9132c43218a4"
                ],
                "_id": "5eb520e6d1246b2dbf215508",
                "userId": "5eb16fdf4afbf654966cb68d",
                "__v": 1
            },
            {
                "items": [
                    "5eb173d3d6fb9132c43218a2"
                ],
                "_id": "5eb535f9c42ef832818b415f",
                "userId": "5eb175539dff1b3844a84ab8",
                "__v": 2
            }
        ]
    }
}
```

## /api/v1/favorites/:idUser

### GET

Get a specific list of favorite foods by an userId

**Return codes**:

-   200 - OK
-   400 - There was a problem fetching data

**Usage example**:  
 `localhost:3000/api/v1/favorites/5eb16fdf4afbf654966cb68d`

**Returned data example**:

```JSON
{
    "success": true,
    "data": {
        "favorites": [
            {
                "items": [
                    "5eb173d3d6fb9132c43218a3",
                    "5eb173d3d6fb9132c43218a4"
                ],
                "_id": "5eb520e6d1246b2dbf215508",
                "userId": "5eb16fdf4afbf654966cb68d",
                "__v": 1
            }
        ]
    }
}
```
## /api/v1/favorites/add-product/:idProduct

### POST

Post a favorite food in a list for an user to Favorites Database

**Body example**

`userId` is required
```JSON
{
 "userId":"5eb175539dff1b3844a84ab8"
}
```

**Return codes**:

-   201 - CREATED
-   400 - Bad Request

**Usage example**:  
 `localhost:3000/api/v1/favorites/add-product/5eb173d3d6fb9132c43218a3`

**Returned data example**:

```JSON
{
    "success": true,
    "data": {
        "userExists": {
            "items": [
                "5eb173d3d6fb9132c43218a2",
                "5eb173d3d6fb9132c43218a3"
            ],
            "_id": "5eb535f9c42ef832818b415f",
            "userId": "5eb175539dff1b3844a84ab8",
            "__v": 2
        }
    }
}
```

## /api/v1/favorites/delete-product/:idProduct

### DELETE

Delete a favorite product from an user's list from Favorite database

**Body example**

`userId` is required
```JSON
{
 "userId":"5eb175539dff1b3844a84ab8"
}
```

**Return codes**:

-   200 - OK
-   400 - Bad request

**Usage example**:  
 `localhost:3000/api/v1/favorites/delete-product/5eb173d3d6fb9132c43218a3`

**Returned data example**:

```JSON
{
    "success": true,
    "data": {
        "userExists": {
            "items": [
                "5eb173d3d6fb9132c43218a2"
            ],
            "_id": "5eb535f9c42ef832818b415f",
            "userId": "5eb175539dff1b3844a84ab8",
            "__v": 3
        }
    }
}
```
## /api/v1/favorites/all

### DELETE

Delete all favorite products lists from Favorite database

**Return codes**:
-   200 - OK
-   400 - Bad request

**Usage example**:  
 `localhost:3000/api/v1/favorites/all/