# Javascript Basics

Javascript is the programming language that makes all webpages interactive. You can use it to solve problems using code. Your web browser includes Javascript, so you don't have to install anything to use its magic.

You'd might be thinking what you can you use it for?
Lets answer that question with some small building blocks: numbers and text.

## Numbers

All the things you've learned in math (in high school that is) are possible in Javascript. Or, in other words, Javascript is an impressive calculator. Lets play with numbers:

```javascript
1     // this returns just the number 1
2 + 4 // this returns 6 (the sum of 2 and 4)
2 * 8 // this returns 16 (the product of 2 times 8)
3 / 2 // this returns 1.5 (dividing 3 by 2)
```

If you have any numerical values in your application and want to do calculations with them, Javascript is here to help!

## Strings

Sometimes numbers are not what you need though. Think of movie titles. That aren't numbers (except for the movie [9](https://www.themoviedb.org/movie/12244-9) that is...) Usually movies have titles like "The Shawshank Redemption", "The Godfather", or "The Dark Knight". Movie titles are strings of characters, or `String` in short.
You let Javascript know that it is dealing with strings by placing them within (single or double) quotes.

Strings are really helpful to work with text.
```javascript
`The Dark Knight`               // this returns the string "The Dark Knight" itself
```
You can even make changes to the strings with Javascript, just like you can do calculations with numbers:

```js
`The Dark Knight`.toUpperCase() // this returns "THE DARK KNIGHT", all capitalized
`Liar `.repeat(2);              // this returns "Liar Liar "
```

## (Re-)usability:  Variables

It is handy to have strings and numbers if you need them, but sometimes you have a value that you want to use in multiple places. In order to not repeat the same thing over and over, you can work with variables.
Variables have a name, and contains a value, or in other words
A variable is like a container: it can hold any value. And by referring to the name of the variable, you have access to its contents.

You have to let Javascript know you will be using a variable in your program. You *declare* that variable to Javascript
After you've formally introduced each other, you can then use your variable

An example makes this clear(er). We want to have the title in a variable, so we can use it multiple times, or on multiple places.

```javascript
// A formal variable declaration, this makes it possible to use the variable movieTitle later
var movieTitle  // This returns 'undefined' - declaring a variable has no noteworthy return value

// Assign your favorite movie title to your variable
movieTitle = `Beauty and the Beast` // this returns "Beauty and the Beast", the value of your variable

// this returns "BEAUTY AND THE BEAST", but doesn't change the value of the variable itself.
movieTitle.toUpperCase()

// this returns "Beauty and the Beast", to prove that the toUpperCase function didn't change the variable.
movieTitle
```

### Boooooring....

In Chrome you can access an environment that knows how to handle Javascript. That thing is called your console. Let's use the console to play around with strings and numbers.

## Console

Open Chrome, just where we left of. `localhost:3000` that was. Go ahead and open your console on that page:

- If you're on Windows or Linux, use the key combo `CTRL` + `SHIFT` + `J`
- If you're on MacOS, use the key combo `CMD` + `ALT` + `J`

If all went well, you should see something like this:
![an empty developer console below the chrome browser](https://cd.sseu.re/Chrome_with_an_empty_console.png)

Maybe your console opened to the right of the screen, maybe the left, maybe in its own window. Most important is that you have it.

Now that is a nice empty Javascript Console, time to fill it with something that we know.

# Exercises

1. ✍️  In your console make some calculations:
    * calculate the sum of 2 and 3
    * calculate the difference of 6 and 4 (6 minus 4 that is)
    * divide 3 by 2.
2. ✍️  In your console play with strings:
    * create a string with the contents `Taste of Big Data`
    * convert it to all lowercase characters with the `toLowerCase()` function.
3. ✍️  In your console play with variables:
    * With `var`, declare the variable `movieTitle`
    * Assign your name of your favorite movie to that variable
    * Convert your movieTitle to uppercase, and to lowercase.

<details>
  <summary>Spoiler alert, click here if you're stuck.</summary>
  <pre>
    // On numbers
    2 + 3
    6 - 4
    3 / 2
  </pre>
  <pre>
    // On strings
    `Taste of Big Data`
    `Taste of Big Data`.toLowerCase()
  </pre>
  <pre>
    // On variables
    var movieTitle
    movieTitle = `Mister Nobody`
    movieTitle.toUpperCase()
    movieTitle.toLowerCase()
  </pre>
</details>
