# CSV - character separated values

So you want to play with data? And you have a page, some knowledge about javascript? But no data?
Hmm, lets fix that.

Data is the raw material by processing it, you get information. In a sense, it is like iron ore. In order to get iron from ore; you need to process it.

There are different variants of data. Sometimes you'll have to work with excel files. Or a database that lives somewhere in the cloud, or some files delivered in your mailbox. In our case: A CSV file that has all the above characteristics.

## Character Separated Values

CSV is an abbreviations of 'Character Separated Values' - or to use our new Javascript knowledge:
We have a file full with strings and numbers, and you can tell them apart by a special character.

We will be using a kinda large dataset from kaggle.com, but let me start with a much smaller CSV file to introduce the topic to you.

### Movies, movies, movies

Our app will show the de

<!-- faking highlighting in Ruby; since CSV is not supported -->

```ruby
"title","vote_average","vote_count"
"Avatar",7.2,11800
"Spectre",6.3,4466
"The Dark Knight Rises",7.6,9106
"John Carter",6.1,2124
"Spider-Man 3",5.9,3576
"Tangled",7.4,3330
"Avengers: Age of Ultron",7.3,6767
"Superman Returns",5.4,1400
"Quantum of Solace",6.1,2965
"The Lone Ranger",5.9,2311
"Man of Steel",6.5,6359
"Men in Black 3",6.2,4160
```


# Exercise

1. In your console make some calculations:
    * calculate the sum of 2 and 3
    * calculate the difference of 6 and 4 (6 minus 4 that is)
    * divide 3 by 2.
2. In your console play with strings:
    * create a string with the contents `Taste of Big Data`
    * convert it to all lowercase characters with the `toLowerCase()` function.
3. And with variables:
    * With `let`, declare the variable `movieTitle`
    * Assign your favorite movie title tot that variable
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
    "Taste of Big Data"
    "Taste of Big Data".toLowerCase()
  </pre>
  <pre>
    // On variables
    let movieTitle
    movieTitle = "Mister Nobody"
    movieTitle.toUpperCase()
    movieTitle.toLowerCase()
  </pre>
</details>
