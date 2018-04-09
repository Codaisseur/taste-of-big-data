# Data in Javascript

If we want to work with big chunks of data, we need to have the data in our app.
Luckily we can create as many variables as we need.

In our app, we will want to display our genres. We could use something like this to store all genres in variables:
```javascript
let genre1 = "Romance"
let genre2 = "Action"
let genre3 = "War"
// et cetera
```

Or you'd might be tempted to write something like this:
```javascript
let romance = "Romance"
let action = "Action"
let war = "War"
// et cetera
```

Either way, we get a busload of variables.

We're getting so many variables since in the code, we're missing the concept of a collection. It would be so much nicer if we had a variable for the concept 'genres', that holds a collection of **all** our genres.

To store collections, Javascript has the `array`; it is a data structure that can hold **many** things.

## The Array

Where a variable is a container for one value, an array is like a container for collections.
It can hold as many values as you like; we could easily put all the genres we have in one single array.

An array that holds the genres `"Romance"`, `"Action"` and `"War"` would look like this in Javascript:
```javascript
["Romance", "Action", "War"]
```

Things to note:
1. You open your Array with the opening block-parenthesis (`[`) character.
2. Each value in the array is separated from the other values by a comma (`,`).
3. At the end, you close your array with the closing block-parenthesis (`]`) character.

That array is nice and handy, but it would make sense to reference that array by a variable with a friendly name.

The array holds a collection of genres, right? So lets assign it to the variable with the name `genres`.

```javascript
let genres = ["Romance", "Action", "War"]
```

This gives us a nice `genres` collection, that has elements for our genres. One variable with all the values that are related.

### Arrays can store anything
Not that it is very useful for our Most Popular Movie app, but arrays can hold values of *whatever* that is a valid javascript value.

You could have an array of numbers:
```javascript
let numbersArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
```

Or we can mix and match anything in an array:

```javascript
let mixedArray = [0, "one", 2, "three and a half", 4.5, "et", "cetera..."]
```

### Recap: values in Javascript

The 3 kinds of values you've learned are **numbers**, **strings**, and **arrays**. These values can be assigned to variables:
```javascript
let number = 3
let string = "Hello there!"
let array = ["I am just an Array", "with some elements", 1, 2, 4.5]
```

That's all the bare bones Javascript values you need to know. Now lets work with a specific file for our code for our movies app.

## A file for `movies.js`

All the code for our app will be in Javascript, and that code will reside in its own file.

In your editor create a file.
Right click on your `taste-of-big-data` directory and select `New File`.
![Create a file  in your editor](https://cd.sseu.re/CreateMoviesJSfileInCode.png)

You can now type the name of the file. Please call it `movies.js`. Again, no capitals, spaces et cetera:
![new file with the name movies.js](https://cd.sseu.re/moviesJsFileAboutToBeCreated.png)

Although still empty; now is a nice moment to save the file.

In your app, there are 3 files now: The `index.html`, `styles.css`, and your empty `movies.js`.

The webpage of your app (index.html, that is), has no idea about your new javascript file. Time to tell it to use it.

Open index.html in your editor and inform it to use the (still empty) javascript file.

At the top of the file, there is a part that looks like this:
```html
  <head>
    <meta charset="utf-8">
    <title>Movie Recommendations</title>
    <link href="styles.css" type="text/css" rel="stylesheet" />
  </head>
```

Just above the line that reads `</head>`, you are going to insert this line:
```html
    <script src="movies.js"></script>
```

You're just **adding** that line, do not remove anything.

That means the end result should look like this:
```html
  <head>
    <meta charset="utf-8">
    <title>Movie Recommendations</title>
    <link href="styles.css" type="text/css" rel="stylesheet" />
    <script src="movies.js"></script>
  </head>
```

Go ahead and save this file.

Now, open your newly created Javascript file (movies.js) and add this content in there:
```javascript
console.log("Greetings from movies.js")
```
This line informs tells your Javascript console to log the message `"Greetings from movies.js"`.
Think of the console as the captains logbook. You can make entries in your logbook with `console.log()`. Between the parentheses (that are the `(` and `)` characters), you can put anything that needs to show up in the log.

Go to your browser, reload your page, and check if the message appears in your console (a.k.a. the logbook)

![your console that logged 'Greetings from movies.js'](https://cd.sseu.re/greetingsFromJavascriptInTheConsole.png)

# Exercise
> ✍️ Time to tie everything together. Make changes to your project so you have a javascript file, that is read from your index.html file.

- Add a line in your index.html file that loads your movies.js file

- In your movies.js file:
  1. Add a line that logs the message `"Greetings from movies.js"` to your console.
  2. Make an array with the variable name `movieGenres`. Let that variable contain an array with a value for each of the following genre names:
      - "Action"
      - "Adventure"
      - "Fantasy"
      - "Science Fiction"
  3. Log that array to your console , and make sure it shows up in your log.

Need some help?
* An array looks like this:
```javascript
["all values", "are separated", "from each other", "with commas"]
```
* You can create the variable `emptyArray` like so: `emptyArray = []`
* You can log variables like so:
```javascript
emptyArray = []
console.log(emptyArray)
```
The end result should look somewhat like this:

![Logging an array](https://cd.sseu.re/ConsoleLoggingAnArray.png)

If you click the small triangle in the console before the word `Array(4)`, it will show the contents of the array, like so:
![Display the inner workings of an array in the console](https://cd.sseu.re/DisplayTheContentsOfAConsoleLoggedArray.png)

<details>
  <summary>Spoiler alert, click here if you're stuck.</summary>
  <p>add a line in your html file, just before the line that reads
    <pre>  &lt;/head&gt;</pre>
    Make sure it looks like this:
    <pre>    &lt;script src="movies.js"&gt;&lt;/script&gt;
  &lt;/head&gt;</pre>
  </p>
  <p>Open the <b>movies.js</b> file in your editor and paste in these lines:
  <pre>
console.log("Greetings from movies.js")
let movieGenres = ["Action", "Adventure", "Fantasy", "Science Fiction"]
console.log(movieGenres)</pre>
  </p>
</details>
