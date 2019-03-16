# AngularApp

This is [my Angular Website](https://simon-lammes.github.io/angular-app/) hosted on GitHub.

## How to collaborate

1. Take a copy of my master branch.
1. Test your changes locally.
1. Make a pull request.
1. I should then be able to test your changes locally and deploy them.

## How to prepare an Angular application for deployment

1. Install [node.js](https://nodejs.org/en/) as it comes with npm.
1. Run **npm install -g angular-cli-ghpages**. This will enable you to run the **ngh** command later.
1. Inside your project inside angular.json set the outputPath to "dist/".
1. Connect your local repository to the remote GitHub repository from where you want your repository to be hosted.

## How I deploy this Angular application on GitHub

After I have once prepared my Angular application for deployment, I run the following commands inside the terminal whenever I want to deploy local changes. The terminal should of course be directed to the Angular application root directory.

1. **ng build --prod --base-href "https://simon-lammes.github.io/angular-app/"** This creates a deployable application inside the dist folder of the project.
1. **ngh** This pushes the deployable application inside the dist folder to the remote repository inside the gh-pages branch from where the site is hosted.

