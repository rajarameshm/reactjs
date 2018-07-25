Training: ReactJS
Name: Satyanarayana
email: satyamtd@gmail.com

Project Dependencies:
Java Project: Maven
Dot.Net Project: NuGet
JS Project: NPM

NPM packages can be installed: local or global
Various commands of NPM are: install, uninistall, update, init, list, run etc

Package.json is a project configuration file used by NPM.

>node -v
>npm -v
>npm init
will generate the package.json
>npm init -y
package.json generated
>npm install bootstrap -S
bootstrap package installed
>npm uninstall bootstrap
bootstrap package uninstalled
>npm i -S bootstrap@3.3.7
a specific version of bootstrap installed

NPM as Task Runner
two types of task: 1. built-in task 2. custom task

Java Script ES 6 features:
block scoped variable: "let"
constant variable: const
arrow functions: =>
Object oriented features: Classes
Modules: each file is a module
export and import

A set of classes, modules etc., can be grouped into Module
React class names should be pascal (first letter is capital)

>npm i -g create-react-app
install create-react-app
>create-react-app --version
to verify the installation
>create-react-app reactproject
creates a reactjs project environment with zero configuration
>cd reactproject
>npm start
will open the page in browser: localhost:3000/


React uses vertual dom
React API: 1. react 2. react-dom
React file needs a index file: index.html, startup file: index.js

There are two types of exports: 1. Default 2. Named
Default members should not be enclosed with braces
Default export can have only one member

React componts can be created in two ways: 1. Fuction 2. Class
Functional Component:
ex: 
let MyTag = () => {return <h1>this is functional Component</h1>}

Spread Operator (Push not supported by react in earlier releases)






References:

https://kruschecompany.com/blog/post/angular-6versus-react-16.3