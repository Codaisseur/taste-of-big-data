# Data in Javascript

It's nice that we have a big CSV file. But you know what: it is incompatible with Javascript. Before we can use the data from that file in Javascript; we must have an idea about the available data types.

You are already familiar with variables. They can hold a single value, like a string or a number. But there are actualy more values, being more complex than numbers and strings.


In our app, we will want to display our genres. We could use something like this to store all genres in variables:
```javascript
  genre1 = "Romance"
  genre2 = "Action"
  genre3 = "War"
  // et cetera
```

Or you'd might be tempted to write something like this:
```javascript
  romance = "Romance"
  action = "Action"
  war = "War"
  // et cetera
```

But now you have 1 variable per genre, but you'd like to have 1 variable with all genres.

## The Array

The solution for this an `Array`. If you think of a variable as a container, you can think of an array as if it is a collection of containers.

It can hold as many values as you'd like; we could easily put all the genres we have in 1 array.

An array that holds the genres `"Romance"` and `"Comedy"` would look like this in Javascript:
```javascript
["Romance", "Comedy"]
```

You open your Array with the opening block-parenthesis (`[`) character.

Each value in that array is separated by a comma (`,`).

At the end, you close your array with the closing block-parenthesis (`]`) character.

That array is nice and handy, but it would make sense to reference that array by a variable with a friendly name. It is a collection of genres, right? So lets call it `genres` then:

```javascript
genres = ["Romance", "Comedy"]
```

You could have an array of numbers:

```javascript
numbersArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
```

Or just put anything in there:

```javascript
mixedArray = [0, "one", 2, "three and a half", 4.5, "et", "cetera..."]
```

You could be working in your Javascript console; but you will start in a javascript file in your editor.

## `movies.js`

All the code for our app will be in Javascript, and our code will reside in it's own file.

In your editor (Visual Studio Code) you can create files.
Right click on your `taste-of-big-data` directory and select `New File`.
![Create a file  in your editor](http://cd.sseu.re/CreateMoviesJSfileInCode.png)

You can now type the name of the file. Please call it `movies.js`. Again, no capitals, spaces et cetera:
![new file with the name movies.js](http://cd.sseu.re/moviesJsFileAboutToBeCreated.png)

Although it is still empty; now is a nice moment to save the file.

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

You're just adding that line, without removing anything.

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
Think of the console as the captains logbook. You can make entries in your logbook with `console.log()`. Between the parenthesis (that are the `(` and `)` characters), you can put anything that needs to show up in the log.

Go to your browser, reload your page, and check if the message is in your console (a.k.a. the logbook)

![your console that logged 'Greetings from movies.js'](https://cd.sseu.re/greetingsFromJavascriptInTheConsole.png)

If you cannot see your greeting (but maybe some errors), and you're stuck: Make sure your neighbour helps you out, or call one of the coaches.

# Exercise

1. In your movies.js file, make an array with the variable name `movieGenres`. Let that variable contain an array with a value for each of the following genre names:
    - "Action"
    - "Adventure"
    - "Fantasy"
    - "Science Fiction"
    - "Crime
    - "Drama"
    - "Thriller"
    - "Animation"
    - "Family"
    - "Western
    - "Comedy"
    - "Romance"
    - "Horror"
    - "Mystery"
    - "History"
    - "War
    - "Music"
    - "Documentary"
    - "Foreign"
    - "TV Movie"
2. Console log that array, and make sure it shows up in your logbook like so:
![Logging an array with genres](https://cd.sseu.re/loggingAnArrayWithGenres.png)

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

<details>
  <summary>Spoiler alert, click here if you're stuck.</summary>
  <p>Open the <pre>movies.js</pre> file in your editor and paste in these lines:
  <pre>
  movieGenres = [
    "Action", "Adventure", "Fantasy", "Science Fiction", "Crime", "Drama",
    "Thriller", "Animation", "Family", "Western", "Comedy", "Romance", "Horror",
    "Mystery", "History", "War", "Music", "Documentary", "Foreign", "TV Movie"
  ]
  console.log(movieGenres)
  </pre>
</details>
