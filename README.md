# Steps Housing Guide

This guided content tool is focused on helping low-income users who are struggling to make rent payments. The Steps team decided to build a guide around this topic after observing the results of a survey placed on NerdWallet.com in which people identified housing as the bill they struggle with most.

Through a quick selection of statement cards, the guide leads people to personalized, tangible action items—including some which provide access to appropriate local and national resources. Our team developed the content and design of the guide internally while collaborating with Phuong Luong at Compass Working Capital to define the experience and logic. We are now providing this guide as an open source framework which can be adapted by any organization to assist their clients. The guide can be viewed at https://steps.ideo.org/housing-guide.

## Getting Started

#### Including the guide into your own website
1. Go to the [/dist](/dist) folder. You should see three files with the extension .html, .js, .css.
2. If you'd like this housing guide on a separate page by itself, simply copy the three files into the same folder. Then open the index.html page with your favorite browser.
3. If you'd like this housing guide embedded inside of your own website template, include the following snippet of code into the section of the html file where you wish to display the guide: `<div id="steps-guided-content-tool"></div>`
4. Then right before the end `</body>` tag (after all other code), insert this `<script type="text/javascript" src="main.c02ab41617811adab211.js"></script>`
5. Right before the end `</head>` tag (after all other stylesheets), insert this `<link href="main.a9bcb82c74a102506c4c96f8af330c2c.css" rel="stylesheet">`

#### Running the code on your own local environment
1. `git clone https://github.com/IDEOorg/steps-guide-housing`
2. `cd steps-guide-housing`
3. `npm install`
4. Running the code on your server:
  * **To run the development build:**
  `npm run start` then go to http://localhost:3000
  * **To run the production build**
  `npm run build` then go to http://localhost:4000. The production files will be in the [/dist](/dist) folder.

## Contribution and Submitting Bugs

We welcome all contributions to this code base, as well as bug reports. To suggest a contribution please open a pull request against this repository. It is likely a good idea to get in touch before doing any work so we can coordinate.

Please submit any bug reports via GitHub issues. Click on the Issues tab at the top of this page.

## License

This project is licensed under the MIT license. The license can be read [here](LICENSE).

## Other Open Source Licenses

Much of the project directory structure and build scripts are adapted from [react-slingshot](https://github.com/coryhouse/react-slingshot). Its license can be read [here](PARTNER-LICENSES)
