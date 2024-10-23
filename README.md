# FolderColors - Nextcloud App

[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)

## Overview

**FolderColors** is a Nextcloud app that allows users to change the colors of their folders within the Nextcloud web interface. It provides a simple, visually appealing way to organize and personalize folders for easier recognition and navigation.

This app is compatible with Nextcloud 30.

## Features

- Change the color of any folder with a simple click.
- Provides a variety of colors to choose from.
- Seamless integration into the Nextcloud web interface.
- Improves folder organization by allowing quick visual distinction.

## Screenshots

<!-- Add screenshots here if available -->

## Requirements

- **Nextcloud version**: 30 or higher
- **PHP version**: 7.4 or higher

## Installation

To install **FolderColors**, follow these steps:

### Manual Installation

1. Download the latest release from the [Releases](https://github.com/your-repo/foldercolors/releases) page.
2. Extract the archive and place the folder in your Nextcloud apps directory:
    ```bash
    /path/to/nextcloud/apps/
    ```
3. Navigate to your Nextcloud settings and enable the app under **Apps** > **Disabled Apps**.

### From Nextcloud App Store (if available)

1. Go to the **Apps** section in your Nextcloud instance.
2. Search for **FolderColors** in the app store.
3. Click **Download and enable**.

## Usage

Once installed and enabled:

1. Right-click on any folder in the Nextcloud web interface.
2. Select "Change folder color" from the context menu.
3. Choose your preferred color from the available options.

## Development Setup

If you are looking to contribute or test new features, follow these steps to set up a development environment:

1. Clone the repository:
    ```bash
    git clone https://github.com/your-repo/foldercolors.git
    cd foldercolors
    ```
2. Install the required dependencies:
    ```bash
    make dev-setup
    ```
3. Enable the app in your Nextcloud instance.

### Testing

To run tests, execute the following command:
```bash
make test
```

## Contributing

We welcome contributions from the community! To get started:

1. Fork the repository.
2. Create a new branch:
    ```bash
    git checkout -b feature/your-feature-name
    ```
3. Make your changes and commit them:
    ```bash
    git commit -m "Add your feature description"
    ```
4. Push the branch:
    ```bash
    git push origin feature/your-feature-name
    ```
5. Create a pull request on GitHub.

Please make sure to write tests for your features and to follow the Nextcloud [Coding Guidelines](https://docs.nextcloud.com/server/latest/developer_manual/general/codingguidelines.html).

## License

This project is licensed under the terms of the [GNU AGPL v3.0 License](LICENSE).

## Support

For support, you can create an issue on our [GitHub Issues](https://github.com/your-repo/foldercolors/issues) page.
