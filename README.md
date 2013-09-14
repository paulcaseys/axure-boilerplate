# Axure refined
--------------
[Axure](http://www.axure.com/) is a popular prototyping software available on OSX and PC.

These additional files will help you create cleaner wireframes that are well annotated and more flexible than previously possible.

#### Addition functionality includes;
- Cleaner sitemap design,
- A collapsable annotations side-panel,
- Correlating annotation dots that are hidden when the annotation panal is collapsed,
- The option to add custom JavaScript to your projects,
- The option to add custom CSS to your axure projects.


## Files in this repository
--------------
- `/axure-settings/` includes files to install into Axure
- `/example-project/` an example project with a collapsable annotations
- `/icon-fonts/` handy icons for your wireframes (optional)


## What you need
--------------
You will require an installed copy of [Axure 6.5]([http://www.axure.com/download)

You will also need to download this repository.

## How to download
--------------
You have two options.

Either
1. [Download the zip](https://github.com/paulcaseys/axure-boilerplate/archive/master.zip)
or
2. Open terminal and type `git clone https://github.com/paulcaseys/axure-boilerplate.git`


## Installation
-------------

##### OSX
1. Open the `/axure-settings/` directory that you just downloaded
2. Copy the  the `plugins` and `resources` directories
3. Access your Axure settings by opening your `Applications` directory
4. Right-click `Axure` and select 'Show Package Contents'
5. Go to `/Applications/Axure RP Pro 6.5.app/Contents/Resources/DefaultSettings/Prototype_Files/`
6. Paste the `plugins` and `resources` directories (agree to overwrite the existing files)
7. Install the fonts in `icon-fonts` (double-click each ttf and select Install Font)
8. Restart/Open Axure

You have now installed the default settings. Now when you generate a prototype, it will generate custom javascript and css.


## Example project
-------------
An example project is included that contains
- Annotated side-panels
- Optional extensibility using custom JavaScript and CSS files

##### files included
`wireframe_with_annotation_panel_ver01.rp` an example Axure Project
`/prototype/` an example prototype
`/prototype/proto_custom.js` customisable JavaScript file
`/prototype/proto_custom.css` customisable JavaScript file

`proto_custom.js` and `proto_custom.css` are globally embedded across all of your wireframes. You can edit these and update functionality across all pages.

To see an example of how to add a custom JavaScript file in a specific wireframe page, please refer to the `Icons, Fonts and JavaScript` page contained in the example project.


## Generating a prototype with annotated side-panels
-------------

1. Open `/example-project/wireframe_with_annotation_panel_ver01.rp`
2. `Generate prototype` and target the `/example-project/prototype` folder
3. `Page 1` in your sitemap will contain annotations


## Editing annotations
-------------
1. Open `/example-project/wireframe_with_annotation_panel_ver01.rp`
2. Select `Page 1`
3. Edit the example annotations panel provided on this page (View -> Dynamic Panel Manager in the main menu to display the pane)
4. Drag one of the annotation dots to the relevant area on your page (it must be lower on the page than 70px)
5. Generate a prototype



## Icons
--------------
Icon font-faces are included in the css, so icons will appear in the client's browser.

##### Font Awesome
http://fortawesome.github.io/Font-Awesome/cheatsheet/
(copy and paste any icon into your wireframe, and select FontAwesome as the font)

##### Modern pictograms (normal)
http://modernpictograms.com/

