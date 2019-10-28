![Thiago Marinho](https://pbs.twimg.com/profile_banners/41742474/1490016588/1500x500)

# Meetapp Mobile (React Native)

In this challenge was built the mobile app with React Native of Meetapp that use the API developed in this [repository](https://github.com/tgmarinho/meetapp-api).

Created an application from scratch using React Native CLI and configured linting tools, [Reactotron](https://github.com/infinitered/reactotron), [Redux](https://www.github.com/reduxjs/redux) and [Redux Saga](https://github.com/redux-saga/redux-saga).

This application is used by meetup subscribers and do not have meetup organization features.

This application is part of the final [bootcamp](https://rocketseat.com.br/bootcamp) challenge used for finalization and certification.

The project layout is attached to assets-challenge folder in this repository.

## SignIn / SignUp

- [x] The user must be able to create account and authenticate using email and password.
* Login

![](https://raw.githubusercontent.com/tgmarinho/meetapp/master/screenshots/sign-mobile.png) 

* Creating Account

![](https://raw.githubusercontent.com/tgmarinho/meetapp/master/screenshots/signup-mobile.png)

### Dashboard

- [x] User must be able to browse meetups by date.
- [x] Use infinite scroll on this page.
- [x] From this screen the user must be able to sign up for a Meetup.

![](https://raw.githubusercontent.com/tgmarinho/meetapp/master/screenshots/meetups-mobile.png)

### Registration

- [x] The user must be able to view their meetup registration.
- [x] In this screen the user can unsubscribe.

![](https://github.com/tgmarinho/meetapp/blob/master/screenshots/inscricoes-mobile.png)

### Profile

- [x] The user must be able to edit their personal data.
- [x] Use validation in the fields.

![](https://github.com/tgmarinho/meetapp/blob/master/screenshots/profile-mobile.png?raw=true)

### Infine Scroll (Meetup Screen)

![](https://raw.githubusercontent.com/tgmarinho/meetapp/master/screenshots/sroll-mobile.png)


## How to setup

### Prerequisites

The project is built with React Native CLI. The instructions are a bit different depending on your operating system, and whether you want to run for iOS or Android. If you want to run on both iOS and Android, that's fine - you just have to pick one to start with, since the setup is a bit different.

For setup your workstation follow this steps: https://docs.rocketseat.dev/

**React Native CLI** is the command line tools that ship with react-native in form of the @react-native-community/cli package. [Download React Native CLI](https://facebook.github.io/react-native/docs/getting-started)

### Installing

To download the project follow the instructions bellow.

Download, install dependencies and start the API server:

```
1. git clone https://github.com/tgmarinho/meetapp-api.git
2. cd meetapp-api
3. yarn install
4. yarn run dev
```

Then download, install dependencies and run the project:

```
5. git clone https://github.com/tgmarinho/meetappRN.git
6. cd meetappRN
7. yarn install
8. react-native run-ios
```


## Authors

| ![Thiago Marinho](https://avatars2.githubusercontent.com/u/380327?s=150&v=3)|
|:---------------------:|
|  [Thiago Marinho](https://github.com/tgmarinho/)   |


Thanks!
