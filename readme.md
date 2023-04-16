# site2pdf

site2pdf is a command-line utility that allows you to convert a webpage into a PDF file. It provides various options to customize the generated PDF, such as page format, margins, headers and footers, and more.

## Installation

Install site2pdf using npm:

```bash
npm install -g site2pdf
```

## Usage

To convert a website to PDF, simply run the following command:

```bash
site2pdf -u https://example.com -o output.pdf
```

## Options

| Option                  | Alias | Description                                                                   | Default        |
| ----------------------- | ----- | ----------------------------------------------------------------------------- | -------------- |
| --url                   | -u    | URL of the website to convert (required)                                      |                |
| --output                | -o    | Output PDF file path (required)                                               |                |
| --format                | -f    | Paper format ('A4', 'Letter', etc.)                                           | 'A4'           |
| --landscape             | -l    | Whether to set the PDF in landscape mode                                      | false          |
| --scale                 | -s    | Scale of the webpage rendering                                                | '1'            |
| --margin-top            | -m    | Top margin of the PDF file                                                    | '0'            |
| --margin-bottom         | -b    | Bottom margin of the PDF file                                                 | '0'            |
| --margin-right          | -r    | Right margin of the PDF file                                                  | '0'            |
| --margin-left           | -e    | Left margin of the PDF file                                                   | '0'            |
| --header-template       | -h    | HTML template for the header of the PDF file                                  |                |
| --footer-template       | -t    | HTML template for the footer of the PDF file                                  |                |
| --display-header-footer | -n    | Whether to display the header and footer of the PDF file                      | false          |
| --prefer-css-page-size  | -c    | Whether to prefer the CSS page size over the viewport size                    | false          |
| --page-ranges           | -d    | Page ranges to print, e.g., '1-5, 8, 11-13'                                   |                |
| --ignore-http-errors    | -a    | Whether to ignore any HTTP errors that occur during the navigation            | false          |
| --wait-until            | -g    | When to consider the navigation succeeded, e.g., 'networkidle0', 'load', etc. | 'networkidle0' |
| --timeout               | -k    | Maximum navigation time in milliseconds                                       | '30000'        |

## Examples

Convert a website to a PDF in landscape mode:

```bash
site2pdf -u https://example.com -o output.pdf -l
```

Convert a website to a PDF with custom margins:

```bash
site2pdf -u https://example.com -o output.pdf -m 1cm -b 1cm -r 1cm -e 1cm
```

Convert a website to a PDF with a custom header and footer:

```bash
site2pdf -u https://example.com -o output.pdf -h "<div>Header</div>" -t "<div>Footer</div>" -n
```
