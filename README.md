# The Harbor website

This repo houses the assets used to build the FRANCILIENNE DE MIROITERIE website, available at https://francilienne-de-miroiterie.com.

## Tools

The website is built and developed using the [React](https://fr.reactjs.org/) framework with `create-react-app`.

Instructions for installing React can be found [here](https://fr.reactjs.org/tutorial/tutorial.html). Use the version of Hugo specified by the `react` environment variable in the [`package.json`](./package.json) configuration file.

## Website content

The content for the [FRANCILIENNE DE MIROITERIE](https://francilienne-de-miroiterie.com) is in this repo.

### CSS

The CSS for the site is built from [Sass](https://sass-lang.com) installed with [`node-sass`](https://www.npmjs.com/package/node-sass).

## Publishing the website

The Harbor website is published automatically on the [OVH](https://www.ovhcloud.com/fr/web-hosting/) platform. Whenever changes are merged, the site is re-built and re-deployed, usually within about one minute.

## Run the Harbor website locally

### Step 1: Clone project

```sh
git clone https://github.com/P4ST4S/francilienne-de-miroiterie.git
cd website
```

## Step 2: Install npm dependencies

```sh
npm i
```

## Step 3: Run with npm

```sh
npm start
```

This starts up the local Hugo server on http://localhost:3000. As you make changes, the site refreshes automatically in your browser.
