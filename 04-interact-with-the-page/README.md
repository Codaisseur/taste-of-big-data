# Interact with the page

Although it is nice to fiddle with the console, most developers use Javascript to interact with the webpage. Interaction might be displaying some information somewhere, or responding to a user that clicks on an element in your page.

In short: The console is nice for playing around, but having an interactive webpage is the expected result.

## Make your page interactive

Time to display a handful of genres in our webpage.
To do that, you will need to do a couple of things.
1. Add an empty element to your webpage (HTML that is).
2. Find that element with Javascript, and assign it to a variable.
3. Manipulate the HTML element from Javascript to fill it with the contents of your `genres` variable.

Lets start with part 1, gradually adding complexity until you reach step 3

### 1: Add an element to your page
In your editor, open the `index.html` file.

At the bottom of the file, just above the line that starts with `<footer>`, add an element that Javascript will interact with.

Change your file so it looks like this:

```html
    <div id="most-popular-by-genre" class="movie-table"></div>
    <footer>Made with &hearts; at Taste of Big Data</footer>
```
> **NOTE:** Only add the first line from the block of code above, do not remove any contents. And also, one line that holds a `footer` is enough.

The thing you added is a `division` (aptly abbreviated to `div`). You can think of a division as a paragraph in a text document. Lets side-step into HTML briefly...

#### HTML in a nutshell
An HTML element opens with the name of the element between pointy parentheses:
```html
<div>
```
An HTML element should also be closed. It looks almost the same, except that an extra slash character (that is '`/`') is added after the first pointy parenthesis.

Opening and closing a div element in HTML Looks like this:
```html
<div></div>
```
In the example above, the div has no contents. It opens and immediately it closes again. Like an empty box, or an empty shopping bag. We keep this element empty in the HTML file, since Javascript will fill it with contents.

An HTML element can have attributes. These attributes have a name and a value.
This element should be styled like a movie table. This can be achieved with the attribute with the name `class`. If you give the class attribute the value of "movie-table", it will be styled accordingly.
Making that specific addition to your opening div tag, it would look like this:
```html
<div class="movie-table"></div>
```

Now we're almost there. In order to target (or pin-point) this element from Javascript, we can give elements an `id` attribute. This attribute is supposed to be unique in your page. Think about your passport (your ID, that is). It is unique, so officials can find you, if they know which id to look for.

Since your app is about popular movies, and this division is for genres, you could use the unique name `"most-popular-by-genre"`.

That brings us to the end result:
```html
  <div id="most-popular-by-genre" class="movie-table"></div>
```

With that thing added to your page, and explained what it does, time to save your file, and reload the page in your browser. If you do that, chances are you won't notice many changes. That is OK for now. Time to fill it from Javascript!

## 2: Find that element with Javascript

The html part is now done. Lets see if you can reach the just added element from Javascript.
In your browser, go to your console so you can test if you can interact with the page.

First we need to get our element by its `id`. That element is in our html-document. With that background information, the next line reads almost like prose...
```javascript
document.getElementById('most-popular-by-genre')
```
Type (or copy-paste) that line in your console. It should greet you with this response:
```HTML
<div id="most-popular-by-genre" class="movie-table"></div>
```
That is that div that we put in there! Hurray!

Knowing the `id` of an element allows us to get it from the document.

Although the thing in the console looks like HTML, it is actually a Javascript object that points to that HTML element.

Because it is a Javascript thing, we can assign it to a variable:

```javascript
let mostPopularByGenre = document.getElementById('most-popular-by-genre')
```

Not only can you target specific elements; you can change the contents of your elements. Lets do it!

## 3: Manipulate the element from Javascript

There are two parts that you will glue together: your
- `mostPopularByGenre` variable that points to the element on your page
-  `movieGenres` variable with a collection of your genres.

### When to interact?

There is just a small problem... Browsers and computers are so blazing fast that sometimes you have to inform your code to actually wait for your browser to allow for interaction, before manipulating elements.

If you don't allow your browser to display the page, the element that you want to alter might not be present.

So the document in your browser goes through a number of states. At a certain time it gets into the state called `'interactive'`. That is the moment we can ~~fiddle~~ interact with it.

In code, that would look like this:

```javascript
document.onreadystatechange = function () {
  if (document.readyState == 'interactive') {
    // the code you want to run when the time is right
  }
}
```

### How to interact?

The variable `mostPopularByGenre` is pointing to an empty HTML element. What we want to do is add the words that are captured in `movieGenres`.

Are you interested in the simplest thing that could work? Well, how about you change the inner text of that element?

Happily enough, Javascript and HTML allow us to do just that:

In your console, try running these lines

```javascript
mostPopularByGenre.innerText = movieGenres
```

# Exercise
> ✍️ Time to go over all steps.

Make changes to your project so you:
1. Add a `div`-element with the id `'most-popular-by-genre'
2. Get the element with that id, and assign it to a variable with the name `mostPopularByGenre`
3. Change the inner text of the element to the contents of your `movieGenres` array.
