# Newport

> Newport is Sway's patient-facing website. Patients interact with the interface to learn more about pain conditions, treatment options, and find doctors who can help them with solutions.

## System Requirements

1. [NodeJS](https://nodejs.org/en/) / [NPM](https://www.npmjs.com/get-npm)
2. [Yarn](https://yarnpkg.com/lang/en/docs/install/)

## Pre-installation Process

1. Download development environment [.env.development](https://drive.google.com/file/d/1zgFdr8OwYTUHEmJxnEQfSpDzd7RAlq5l/view?usp=sharing) file and place inside the ROOT_DIR/newport/build/environment.
2. Set your Operating System Variable. Choose the instruction based on your OS. Restart your PC to take effect the changes.
> Windows OS: 
```
Open Control Panel\System and Security\System
Click Advanced Settings
Click Environment Variables
Click New… button under the User Variables for User
Put inside Variable Name, NODE_ENV
Pun inside Variable Value, development
```
> LINUX/UNIX OS:
```
Open the file something looks like “.profile” depending on your OS naming
Add the lines at the very bottom 
NODE_ENV="development"; 
EXPORT NODE_ENV
```

> MAC OS:
```
Open Terminal
Run touch ~/.bash_profile; open ~/.bash_profile
In TextEdit, add
export NODE_ENV="development"
Save the .bash_profile file and Quit (Command + Q) Text Edit.
Run source ~/.bash_profile
```

## Install

```
yarn install
```

## Usage

```
npm start
```

## Development Guidelines

https://docs.google.com/document/d/1pwtIQlWqanjy8W_3lA9KHQ_TMGMYIn1bapN3W_jV54M/edit?usp=sharing

## Deployment

> Newport is hosted in AWS S3 buckets and distributed via Cloudfront. Create a [Cloudfront invalidation](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Invalidation.html) to clear caches and make the deployment readily available.

```
yarn build
yarn deploy
```

> Note: Use `yarn build-stage` and `yarn deploy-stage` to build and deploy to the staging environment.

## Contribute

[Standard Fork & Pull Request Flow](https://gist.github.com/Chaser324/ce0505fbed06b947d962)

## License

Private use only © Sway Health Inc.
