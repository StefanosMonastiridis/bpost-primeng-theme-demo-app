# PrimeNg BPOST Theme demo
The goal of this demo app is to showcase the bpost theme for Prime NG applications. 

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) 
Based on Sakai template https://www.primefaces.org/sakai-free-angular-admin-template/

## Install
This project will be updating in regular basis. Clone the repo instead of downloading to keep it up to date. 

## Dependencies
* Angular CLI with SCSS
* PrimeNG
* PrimeIcons
* PrimeFlex

## Using the BPOST theme in other projects

In order to use the bpost theme in other projects, you will have to copy and paste the bpost theme folder and link the main theme stylesheet in styles.scss of your app:
`@import "assets/themes/bpost/theme.scss";`

## PrimeNG and PrimeFlex style dependencies

Additionanlly you will have to link the PrimeNG and PrimeFlex stylesheets:
```
@import "~primeng/resources/primeng.min.css";
@import "./node_modules/primeflex/primeflex.scss";
@import "~primeicons/primeicons.css";
```

## What does the theme offer

- SCSS variables for colors, spacing, sizing and border radii
- Styles for native PrimeNG components
- BPOST icons

## Developing custom components
- When deveveloping custom components use the provided variables instead of raw values. This will ensure that any changes in the BPOST Design System will be propagated in your components.
- For spacing and sizing outside of the supported scale, use **relative** units instead of absolute ones, to ensure that you develop responsive and accessible interfaces.  When developing custom components the Design System team can help you in the conversion from absolute ones. Related resources:
    - https://www.freecodecamp.org/news/absolute-and-relative-css-units/
    - https://joseewouters.nl/blog/the-magic-of-relative-units/
    - https://www.w3.org/WAI/WCAG21/quickref/?versions=2.0#resize-text

## Bug reports and requests

You can report bugs or request theme extensions in the following ways:
- Post in the [Design System MS Teams channel](https://teams.microsoft.com/l/team/19%3abONqqlg_PCZWnebQDw-qJfLwG6AqRBtaUEaMsXriBt41%40thread.tacv2/conversations?groupId=a0ed4017-c709-4c89-8778-d263274fbca9&tenantId=1183410f-6cf0-4d82-976e-994c1ce4cfce)
- Write at stefanos.monastiridis.ext@bpost.be
- Create a bug in your Jira environment and assign it to Stefanos Monastiridis
   