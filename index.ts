#!/usr/bin/env node

import { program } from "commander";
import puppeteer, { PDFOptions } from "puppeteer";
import path from "path";

// .option("-p, --path <path>", "File path to save the PDF file", "")

program
  .version("1.0.0")
  .description("Convert a website to PDF")
  .requiredOption("-u, --url <url>", "URL of the website to convert")
  .requiredOption("-o, --output <output>", "Output PDF file path")
  .option("-f, --format <format>", "Paper format ('A4', 'Letter', etc.)", "A4")
  .option("-l, --landscape", "Whether to set the PDF in landscape mode")
  .option("-s, --scale <scale>", "Scale of the webpage rendering", "1")
  .option("-m, --margin-top <margin-top>", "Top margin of the PDF file", "0")
  .option(
    "-b, --margin-bottom <margin-bottom>",
    "Bottom margin of the PDF file",
    "0"
  )
  .option(
    "-r, --margin-right <margin-right>",
    "Right margin of the PDF file",
    "0"
  )
  .option("-e, --margin-left <margin-left>", "Left margin of the PDF file", "0")
  .option(
    "-h, --header-template <header-template>",
    "HTML template for the header of the PDF file"
  )
  .option(
    "-t, --footer-template <footer-template>",
    "HTML template for the footer of the PDF file"
  )
  .option(
    "-n, --display-header-footer",
    "Whether to display the header and footer of the PDF file"
  )
  //   .option(
  //     "-pb, --print-background",
  //     "Whether to print the background graphics of the PDF file"
  //   )
  .option(
    "-c, --prefer-css-page-size",
    "Whether to prefer the CSS page size over the viewport size"
  )
  .option(
    "-d, --page-ranges <page-ranges>",
    "Page ranges to print, e.g., '1-5, 8, 11-13'"
  )
  .option(
    "-a, --ignore-http-errors",
    "Whether to ignore any HTTP errors that occur during the navigation"
  )
  .option(
    "-g, --wait-until <wait-until>",
    "When to consider the navigation succeeded, e.g., 'networkidle0', 'load', etc.",
    "networkidle0"
  )
  .option(
    "-k, --timeout <timeout>",
    "Maximum navigation time in milliseconds",
    "30000"
  );

program.parse(process.argv);

(async () => {
  const options = program.opts();
  const pdfOptions: PDFOptions = {
    format: options.format,
    path: path.isAbsolute(options.output)
      ? options.output
      : path.join(process.cwd(), options.output),
    landscape: options.landscape,
    scale: +options.scale,
    margin: {
      top: options.marginTop,
      bottom: options.marginBottom,
      left: options.marginLeft,
      right: options.marginRight,
    },
    displayHeaderFooter: options.displayHeaderFooter,
    headerTemplate: options.headerTemplate,
    footerTemplate: options.footerTemplate,
    printBackground: true,
    preferCSSPageSize: options.preferCssPageSize,
    pageRanges: options.pageRanges,
  };

  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(options.url, {
    waitUntil: options.waitUntil,
    timeout: +options.timeout,
  });
  await page.emulateMediaType("screen");
  await page.pdf(pdfOptions);
  await browser.close();
})();
