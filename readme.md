# sitetopdf

`sitetopdf` is a versatile command-line utility that allows you to convert a webpage into a PDF or an image. It offers various customization options for the output, including page format, margins, and headers and footers for PDFs, as well as format-specific viewport sizing for images.

## Installation

Install `sitetopdf` using npm:

```bash
npm install -g sitetopdf
```

## Usage

To convert a website to PDF:

```bash
sitetopdf -u https://example.com -o output.pdf
```

To convert a website to an image:

```bash
sitetopdf -u https://example.com -i -p output.png
```

## Options

| Option                  | Alias | Description                                                                   | Default      |
| ----------------------- | ----- | ----------------------------------------------------------------------------- | ------------ |
| --url                   | -u    | URL of the website to convert                                                 |              |
| --output                | -o    | Output PDF file path                                                          | 'output.pdf' |
| --image                 | -i    | Generate an image instead of a PDF                                            |              |
| --image-output          | -p    | Output image file path (required for image)                                   | 'output.png' |
| --format                | -f    | Paper format ('A4', 'Letter', etc.)                                           | 'A4'         |
| --landscape             | -l    | Whether to set the PDF in landscape mode                                      | false        |
| --scale                 | -s    | Scale of the webpage rendering                                                | '1'          |
| --margin-top            | -m    | Top margin of the PDF file                                                    | '0'          |
| --margin-bottom         | -b    | Bottom margin of the PDF file                                                 | '0'          |
| --margin-right          | -r    | Right margin of the PDF file                                                  | '0'          |
| --margin-left           | -e    | Left margin of the PDF file                                                   | '0'          |
| --header-template       | -h    | HTML template for the header of the PDF file                                  |              |
| --footer-template       | -t    | HTML template for the footer of the PDF file                                  |              |
| --display-header-footer | -n    | Whether to display the header and footer of the PDF file                      | false        |
| --prefer-css-page-size  | -c    | Whether to prefer the CSS page size over the viewport size                    | false        |
| --page-ranges           | -d    | Page ranges to print, e.g., '1-5, 8, 11-13'                                   |              |
| --ignore-http-errors    | -a    | Whether to ignore any HTTP errors that occur during the navigation            | false        |
| --wait-until            | -g    | When to consider the navigation succeeded, e.g., 'networkidle0', 'load', etc. | 'load'       |
| --timeout               | -k    | Maximum navigation time in milliseconds                                       | '30000'      |
| --verbose               | -v    | Display detailed information during execution                                 |              |
| --content               | -x    | HTML content to set on the page                                               |              |
| --content-type          |       | Type of content ('string' or 'file')                                          | 'string'     |

## Examples

Convert a website to a PDF in landscape mode:

```bash
sitetopdf -u https://example.com -o output.pdf -l
```

Convert a website to a PDF with custom margins:

```bash
sitetopdf -u https://example.com -o output.pdf -m 1cm -b 1cm -r 1cm -e 1cm
```

Convert a website to a PDF with a custom header and footer:

```bash
sitetopdf -u https://example.com -o output.pdf -h "<div>Header</div>" -t "<div>Footer</div>" -n
```

Convert a website to an image with A4 viewport size:

```bash
sitetopdf -u https://example.com -i -p output.png -f A4
```

Set HTML content from a string and convert to an image:

```bash
sitetopdf -x '<html><body>Hello, world!</body></html>' -i -p output.png
```

Set HTML content from a string and convert to a PDF:

```bash
sitetopdf -x '<html><body>Hello, world!</body></html>' -o output.pdf
```

Set HTML content from a file and convert to a PDF:

```bash
sitetopdf -x "./path/to/file.html" --content-type file -o output.pdf
```

## Show your support

Give a ⭐️ if this project helped you!
