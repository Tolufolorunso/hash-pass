## Installation

This is a hashing password project using bcrypt. Installation is done using npm
install command:

```
$ npm install

//run the app with
$ npm start

```

### HTTP POST method to test the project

```
//Endpoint is
/pass

{
    "pass": "ReskillAmericans123",
}

- Response is
- status code: 200
{
    "status": "success",
    "data": {
        "pass": "Valid pass"
    }
}
```
