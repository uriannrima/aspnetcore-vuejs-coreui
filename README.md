# aspnetcore-vuejs-coreui
A project using AspNetCore Template of Vue.js 2 with Server Side Rendering, with CoreUI added.

# Features

- **ASP.NET Core 2.0**
  - Web API
- **VueJS 2**
  - Vuex (State Store)
- **Webpack**
  - HMR (Hot Module Replacement/Reloading)
- **Bootstrap 4**

# Prerequisites:
 * [.Net Core 2](https://www.microsoft.com/net/download/windows)
 * [NodeJS](https://nodejs.org/) >= 8.9.4
 * [VSCode](https://code.visualstudio.com/) (ideally), or VS2017
 
 # Getting Started:
 * Clone the repo
 * Restore packages (dotnet restore)
 * Install packakge.json dependencies (npm install or yarn install)

## Start the application:
You have two choices when it come at how your preffer to run it. You can either use the command line or the build-in run command.

### 1. Using the command line
Run the application using `dotnet run` or `npm run dev`
- note `dotnet run` should be run in `Development` environment for hot reloading. This setting can be set either within the command line or via the `launchSettings.json` available in the `Properties` folder.
 
### 2. Using the built-in run command
Run the application in VSCode or Visual Studio 2017 by hitting `F5`.

## View your application running
Browse to [http://localhost:5000](http://localhost:5000)

# Recommended plugin for debugging VueJS

- Get Chrome DevTools for VueJS [here](https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd)

----

# License

[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg?style=flat)](/content/LICENSE)

----

### Special Thanks

Many thanks go out to Mark Pieszak who made [this nice template](https://github.com/MarkPieszak/aspnetcore-Vue-starter), which I just copied and made it work with Bootstrap 4 and CoreUI. All hails goes to him.
