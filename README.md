# React + Vite
# RudraVeer NGO website
# Transforming Communities with Love and Support

Introduction

Welcome to our organization, where compassion meets action. We are dedicated to providing essential support to those in need, ensuring that everyone in our community has access to the basic necessities of life. Through our various initiatives, we offer clothing, nutritious food, and other vital items to individuals and families facing difficult times. Join us in our mission to uplift lives, spread kindness, and build a stronger, more caring community. Together, we can make a difference.


## Website Objectives
- Raise Awareness: Inform visitors about the organization’s mission and services.
- Facilitate Donations: Make it easy for visitors to contribute through donations.
- Recruit Volunteers: Encourage volunteer participation.
- Provide Information: Offer resources and information for those in need and their families.
- Showcase Impact: Highlight success stories and impact metrics.

## Target Audience
- Individuals and Families in Need: Those looking for assistance with basic necessities.
- Donors: Individuals or organizations willing to donate items or funds.
- Volunteers: People interested in volunteering their time and skills.
- Partners and Sponsors: Businesses and organizations interested in collaboration.
- Community Members: General public seeking information about the organization and its impact.

## Tech stack
Projects to work properly:

- [ReactJS] - HTML enhanced for web apps!
- [VS Editor] - awesome text editor
- [node.js] - evented I/O for the backend

## Installation

RudraVeer website requires [Node.js](https://nodejs.org/) v10+ to run.

Install the dependencies and devDependencies and start the server.

```sh
cd ngo-website
npm i
node app
```

For production environments...

```sh
npm install --production
NODE_ENV=production node app
```

## Plugins

RudraVeer website is currently extended with the following plugins.
Instructions on how to use them in your own application are linked below.

| Plugin | README |
| ------ | ------ |
| React Router DOM | [https://www.npmjs.com/package/react-router-dom][PlDb] |
| react-icons| [https://www.npmjs.com/package/react-icons][PlGh] |
| react-scroll | [https://www.npmjs.com/package/react-scroll][PlGd] |

## Development

How to run project ? Great!

Open your favorite Terminal and run these commands.

First Tab:

```sh
cd ngo-website
```

Second Tab:

```sh
npm install
```

Third Tab:

```sh
npm run dev
```

#### Deploy project

For production release:

```sh
npm run build
```

Generating pre-built zip archives for distribution:

```sh
gh-pages -d dist
```

Currently, two official plugins are available:
- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


