Training: ReactJS
Name: Satyanarayana
email: satyamtd@gmail.com
Day-1: 25-JUL-2018
##################

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
--------------------------

block scoped variable: "let"
constant variable: const
arrow functions: =>
Object oriented features: Classes
Modules: each file is a module
export and import

JSX is used for rendering (HTML style)

Dumb Component: Child Component
Stateful Component: App Component

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


Day-2: 26-JUL-2018
##################

>create-react-app shoppingproject
creates a reactjs project environment with zero configuration
>cd shoppingproject

>npm i bootstrap

react-router: 
BrowerRouter: Uses HTML5 history API
Route: Render UI when route path matches
Link:

>npm i react-router-dom
>npm i -S redux
will install redux in the shoppingcart project
>npm i react-redux
will install react components for redux





Redux - State Manager
---------------------

A state container for Java Script applications
It manages global data
State managed in subscription model

Store: container (plain JS Object)
Reducer: A JS function with two arguments: 1. current state 2. current action (CRUD operations)
and return updated state.
Action: A JS Object
Dispatch: A JS function, sends action to state
Subscribe: listens for a change in state


> npm init -y
will create package.json
> npm install redux
will install the redux 
> node .\reduxdemo1.js
execute the Java Script
> npm i -g nodemon
install nodemonitoring process
> nodemon .\reduxdemo1.js
will monitor the file changes



Day-3: 27-JUL-2018
##################


crateStore only allows one Reducer, two work with we need to use combineReducers() from library: "redux"

React Life Cycle methods: mounting/unmounting
componentWillMount() --before rendering
render()             --while rendering
componentDidMount()  --after rendering
componentWillUnMount()


> npm i -g json-server
install the json-server will use the lowDB (json database similar to mongodb)
> json-server -v
to check the version
> json-server -p 4000 .\myrestproject.json

> npm i -S axios


> npm run build
to build and generate the project


Jest:
-----
A testing library that can be used to test react components

> npm test

Enzyme: 
------
Another library commonly used with Jest
Mock DOM objects can be created to test
> npm i -D enzyme enzyme-adapter-react-16 jest-enzyme










References:

https://kruschecompany.com/blog/post/angular-6versus-react-16.3





# reactjs
reactjs training


import java.util.jar.*;
import java.util.Enumeration;
import java.io.*;

public class ReadJarFile
{
   
   public static void main(String args[])
   {
      ReadJarFile readJarFile = new ReadJarFile();
      readJarFile.process();
   }

   private void process()
   {
      try{   
         //JarFile jarFile = new JarFile("C:\\Program Files\\Java\\jdk-10.0.2\\lib\\deploy.jar");  
	JarFile jarFile = new JarFile("C:\\Users\\admin\\Downloads\\helloworld.war");
         Enumeration enumOfJar = jarFile.entries();   
         while (enumOfJar.hasMoreElements()) {
	 String s = enumOfJar.nextElement().toString();
//            System.out.println(s);   
//            System.out.println(s.lastIndexOf("/"));   
            System.out.println(s.substring(s.lastIndexOf("/")+1, s.length()));   
         } 
      }catch(IOException ioe)
      {
         System.out.println("IOException: " + ioe);
      }
   }
}
