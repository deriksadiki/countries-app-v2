# Welcome to the Countries List App 🚀🔥

This repository contains the countriesApp code.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Before we get started, we're going to need to make sure we have a few things installed and available on our machine.

#### Node >= 18

##### MacOS

```bash
curl "https://nodejs.org/dist/latest/node-${VERSION:-$(wget -qO- https://nodejs.org/dist/latest/ | sed -nE 's|.*>node-(.*)\.pkg</a>.*|\1|p')}.pkg" > "$HOME/Downloads/node-latest.pkg" && sudo installer -store -pkg "$HOME/Downloads/node-latest.pkg" -target "/"
```

##### Other

See the installation guides available @ nodejs.org:

https://nodejs.org/en/download/package-manager/

#### Yarn

```bash
npm i -g yarn
```

#### XCode

In order to run iOS simulators on a Mac you will need XCode installed. You can download it here:

https://apps.apple.com/us/app/xcode/id497799835?mt=12

#### expo-cli

Using your preferred package manager, globally install the latest version of the expo-cli

```bash
yarn global add expo-cli
```

or

```bash
npm i -g expo-cli
```

### Installing

Below is a series of step by step instructions that tell you how to get a development env running.

Install the projects dependencies

```bash
yarn
```

Start the projects development server

```bash
yarn start
```

Expo should open a tab in your browser, where you will be able to choose whether you want to run the project on an Android or iOS simulator.

## Next Steps

- Download expo go app onto your mobile device
- Scan the QR code above with Expo Go (Android) or the Camera app (iOS)

That's it, you're good to go!

## Running the tests
```bash
npm run test
```

## Built With

Details of the tech stack that has been used.

- [React Native](https://reactnative.dev/) - Framework
- [Expo](https://docs.expo.io/) - Tooling

## Architecture

A basic architecture diagram or description of the chosen architecture should be detailed here.
[Coming Soon!]

## Authors

- **Derik Sadiki** <deriksadiki@gmail.com>

## Troubleshooting

Below are a few common issues users experience - including an overview of their possible cause and solutions.
[Coming Soon!]
