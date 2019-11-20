# Article listing

This is a front-end only challenge with the following requirements:
1. Given this data structure: [{ src: 'https://placebear.com/50/50', title: 'Some Title', desc: 'The description', favorite: false }, ...]; (that contain 5 of the same objects in that array), list out each of them vertically into the document body using raw JavaScript (no libraries).  Each item needs an image on the left, a title to the right, and immediately below the title, the description (which is also to the right of the image).  While building everything in only JavaScript is preferred, you may write HTML and CSS separately.

 

2. Adding on to the previous example, add a "heart" (https://www.fileformat.info/info/unicode/char/2764/index.htm) 25px to the left of each item, and have it be toggled red/black each time the user clicks anywhere on the entire item (as well as on the heart itself) as a way of visually "favoriting" an item.  As part of that, set the `favorite` property accordingly in the original data array.