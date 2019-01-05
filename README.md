[![license](http://img.shields.io/badge/license-MIT-red.svg?style=flat)](https://github.com/spatialcurrent/coconut/blob/master/LICENSE) 

# coconut

## Description

Coconut is a modern open-source website built in [React](https://reactjs.org/) with [OpenLayers](http://openlayers.org/) to enable flexible user-driven geographic search over very large datasets, e.g., [OpenStreetMap](https://www.openstreetmap.org/).  Coconut provides a user interface for a [Railgun](https://github.com/spatialcurrent/railgun) server.

## Installation

To install the website, simply run:

```
npm install
```

## Development

After installation, to start a development server run:

```
npm run start
```

The default port is 8081, but you can override the port as needed with:

```
PORT=8082 npm run start
```

You can override the location of the [Railgun](https://github.com/spatialcurrent/railgun) API with:

```
API_URL=https://railgun.spatialcurrent.io npm run start
```

You can override the base layer using the `BASELAYER_URL` environment variable.  For example, using the Humanitarian OpenStreetMap basemap with:

```
BASELAYER_URL=https://tile-{a-c}.openstreetmap.fr/hot/{z}/{x}/{y}.png npm run start
```

## Deployment

After installation, to build artifacts for production, simply run:

```
npm run build
```

This command will create a `bundle.js`, `bundle.js.map`, and `index.html` in the `dist` folder.  Take a look at the [CircleCI](https://circleci.com/) config in `.circleci/config.yml` for a full CI/CD workflow.

## Contributing

[Spatial Current, Inc.](https://spatialcurrent.io) is currently accepting pull requests for this repository.  We'd love to have your contributions!  Please see [Contributing.md](https://github.com/spatialcurrent/coconut/blob/master/CONTRIBUTING.md) for how to get started.

## License

This work is distributed under the **MIT License**.  See **LICENSE** file.
