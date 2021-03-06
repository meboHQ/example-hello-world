<p align="center">
  <img src="https://mebohq.github.io/docs/data/logo.png"/>
</p>

## Hello World Example
This example prints out Hello World.

## Requirements
- Node 8 or greater

## Running example:
```bash
git clone https://github.com/meboHQ/example-hello-world.git
cd example-hello-world
npm install
```

#### Command-line
Running through the command-line:

```bash
node . --help
node . hello --help
node . hello "Ola Mundo!"
node . hello --repeat=5 "Ola Mundo!"
```

#### Web
Running through the web:

```bash
node .
```

```
GET: http://localhost:8080/hello?help
GET: http://localhost:8080/hello
GET: http://localhost:8080/hello?message=Ola%20Mundo
GET: http://localhost:8080/hello?message=Ola%20Mundo&repeat=5
```


## Licensing
Mebo is free software; you can redistribute it and/or modify it under the terms of the MIT License
