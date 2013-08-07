# Rough: NavToggle
Component for easy, togglable (is that a word?) navigation.
For smaller screens you might want to hide your navigation behind a "Menu" button. This will help you.

## Installation
* [Bower](http://bower.io/): `bower install --save rough-navtoggle`
* Download: [zip](https://github.com/oskarrough/rough-navtoggle/zipball/master)
* Git: `git clone https://github.com/oskarrough/rough-navtoggle.git`

## Get started
1. Reference jQuery and `<script src="rough-navtoggle.js"></script>`
2. Reference `<link rel="stylesheet" href="rough-navtoggle.css">`
3. You will need a container with the class: `NavToggle`
4. Call the plugin using using `$('.Nav--togglable').roughNavToggle();`

## How does it work?
The script will automatically insert a styled button (to toggle the navigation) just before the navigation it self.
When the screen is small enough (decided by a mediaquery in the CSS) the nav will hide and the button will appear.

## Tips
* Compile the scss using `sass --watch rough-navtoggle.scss:rough-navtoggle.css`
* Browser support from IE9 and up (you don't need a navigation toggle for browsers without mediaquery support anyway)
