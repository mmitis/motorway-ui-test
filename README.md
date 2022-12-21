
# Motorway UI Test


Welcome to the Motorway UI technical test. This test focuses on user experience, and your skills with HTML, CSS, a11y and leveraging browser APIs.


## Set up

This repo is a slightly modified Create React App and an Express server which serves a JSON feed of images.

- Clone the repo and run `npm install`

- `npm run serve` will run the server

- in another terminal window `npm run start` will start CRA

After this, CRA will open a tab with the app running, usually `localhost:3000`. If you look in `src/App.js` you'll see the API call to the server is already made and will console log out the results.

#### Note

- The server and CRA are watching the relevant files and will hot reload if any changes are made.

- Feel free to modify or install whatever code you feel is necessary. If installing packages which are wrappers for native browsers APIs please leave a comment explaining why.


## Tasks

### 1. UI development

Create a responsive UI to display the images returned by the API.

The aim is to demonstrate your experience and knowledge of HTML, CSS, JS and React features; and demonstrate creative thinking in how images can be presented and manipulated.

Images aren't optimised and their dimensions are varied, there are .jpg and .webp versions on s3, so you will need to take this into account.

#### Inspiration:

https://twitter.com/andybarefoot/status/1251844621262602242

http://www.artist-developer.com/

#### Some ideas to get you started:

Resizable thumbnails

Modal to review full size images

Image effects or filters

### Ad: 
- added just tailwind lib to maintain it easily
- all tailwind libraries matches css modifiers so the css code would be the same

### 2. Performance

The API that is returning images is rather slow. Show how it can be speed up, and show how you would measure the improvement in performance.


### Ad: 

- how to measure? 
    - Could add From FE perspective: just lighthouse and all its metrics that describes speed of contentful paint etc. It will show how it really impact end users. Lighhouse offers results from public users that uses Chrome

    From BE perspecive: add tracker / any analicts library that gathers time of each request and calculates average in a certain period of time . i would gather info about latency, response time and availability ( needs larger group of user ). If not external tracker / library - it's enough to just calculate time in / time out of the request, do the sub and save :) 

- how to speed up? 
    - SSR with preloaded first page of the image, cache them ie. via Service Worker for some time, to boost second load. 
    - server may serve src maps with smaller images to boost image loading ( not API iteself). Lazy load to not load more images than its needed. 
    - cache Database results

- what i did:
 - i've added placeholders and lazy loading to hide issue the long time of loading

### 3. Forms

One of the oldest yet trickiest parts of web development is forms, so we’d like to see how you handle them.

Add a form to your app with the following fields. The form doesn't need to submit to anywhere, but must validate on the client.

- [ ] Name
- [ ] Email
- [ ] Date of birth
- [ ] Favourite colour
- [ ] Salary (using a range input)


## Time allowed

We appreciate that your time is valuable and recommend you not spend more than 2 hours on these tasks.


## Notes

The goal of the test is to prove your understanding of the concepts of modern HTML/CSS/JS, but not to produce something production ready or pixel perfect.
Your work will be tested in the browser of your choice, so please specify this when submitting. This can include pre-release browsers such as Chrome Canary or Safari Technology Preview if you want to work with experimental features.
