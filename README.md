# MMM-TouchURL

`MMM-TouchURL` is a custom MagicMirror² module that allows users to open a specific URL when a button is touched or clicked. It is designed for touch screen setups, but also works with regular mouse clicks. Additionally, you can set a timeout after which the MagicMirror² interface will reload.

## Features
- Open a specified URL in a new tab or window when a button is touched/clicked.
- Optionally, automatically reload the MagicMirror² interface after a set time.
- Customizable button text, URL, and reload timeout.

## Installation


To install this module, clone the repository into your MagicMirror² `modules` folder.

```bash
cd ~/MagicMirror/modules
git clone https://github.com/nylonheart/MMM-TouchURL.git
```

# Configuration

```
To use this module, add it to the modules array in your MagicMirror² config.js file. Below is an example configuration:
{
    module: "MMM-TouchURL",
    position: "bottom_center", // You can choose any position
    config: {
        url: "https://www.example.com", // The URL to open when touched
        buttonText: "Open URL", // The text displayed on the button
        reloadTimeout: 10000 // Time in milliseconds before the MagicMirror reloads (set to 0 for no reload)
    }
}
```


### Configuration Options

| Option         | Type     | Description                                                                                     | Default                    |
|----------------|----------|-------------------------------------------------------------------------------------------------|----------------------------|
| `url`          | `string` | The URL to open when the button is touched/clicked                                               | `https://www.example.com`   |
| `buttonText`   | `string` | The text displayed on the button                                                                 | `Open URL`                 |
| `reloadTimeout`| `number` | The time in milliseconds before MagicMirror² reloads. Set to `0` to disable reloading.           | `10000` (10 seconds)        |


# Example Usage

This module is perfect for setups where you want users to interact with your MagicMirror² installation via a touch interface. For example, you can configure it to open a weather forecast page, a calendar, or any web application directly from your MagicMirror.

# License

This project is licensed under the MIT License. 
See the LICENSE file for details.