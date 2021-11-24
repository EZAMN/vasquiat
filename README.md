# vasquiat test

Microservice to handle products operations

## Install 🔧

```sh
make install
```

## Build 🔧

```sh
make build
```

## start 🚀

```sh
make up
```

## Run tests ⚙️

```sh
make test 
```

## More

If you need more commands:

```sh
make help
```

## Exercice 1

To run the first exercice:

```sh
make import
```

You can check the results in the PHPadmin platform at localhost:8383. user: 'dev', password: 'dev'.

## Exercice 2

Access the swagger platform at localhost:5001 and check the Get /products endpoint.
You need a valid api key to execute this call, as it is authenticated, valid api keys are '1234' and '4321', they need to be set as a 'apikey' header.

## Exercice 3

Access the swagger platform at localhost:5001 and check the Post /product endpoint to create a new product. 
With the "Try it out" button, you can access the form to add new products.
The data is validated through Joi and the swagger schema.