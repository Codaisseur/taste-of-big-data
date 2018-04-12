# CSV - character separated values

So you want to play with data? And you have a HTML page, and just enough knowledge of Javascript?

But no data 😭

Hmm, lets fix that.

Data is a raw material. By processing it, you get information.

In a sense, it is like iron ore. In order to get iron from ore; you need to process it.

There are different variants of data. Sometimes you'll have to work with excel files. Or a database that lives somewhere in the cloud, or some files delivered in your mailbox. In our case: A CSV file that has all the above characteristics.

## Character Separated Values

CSV is an abbreviation of 'Character Separated Values'. If you want to understand CSV in your newly acquired Javascript terminology: You have a file full with strings and numbers, and you can tell them apart by a special character.

CSV isn't tied to any programming language; it is just a file format that can store data.

Everyone knows spreadsheets, right? CSV is what spreadsheet programs use under the hood (or at least it is really close to CSV).

### Movies, movies, movies

A spreadsheet with details for movies could look like this:
![movie data in a spreadsheet](https://cd.sseu.re/tmdb_5000_movies-cleaned-up.csv_2018-01-15_17-44-51.png)

In the above example, There is a column for the title of the movie, the score (called `vote_average`), and the amount of votes that were cast for the movie (called `vote_count`).

If you look at the csv file of this movie data, it is less pretty, but just as informative:
<!-- fake highlights in Ruby; since CSV is not supported in GFM -->
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

If you compare them, you spot that they are about the exact same data.

In CSV there are a few things that make it easier to understand the underlying data.
1. The header line, each column gets a string with a name. Although optional, it communicates clearly to the audience what kind of data we're talking about.
2. Every line in your CSV file is like a row in your spreadsheet; each movie has its own line.
3. All cells are separated by a character. In this file (and most CSV files) it is the comma (`,`)  character.
4. The values can be either strings or numbers.
    - Column 1, the title, is a string. It is good practice to put your strings in quotes.
    -  Column 2 and 3 are numbers. It is a bad idea to quote numbers - numbers should be just numbers.

Since this workshop isn't called `Taste of tiny data`, but `Taste of Big Data`, we need to have a somewhat more impressive set of data.

## Download those movies!

Well, lets not download the movies themselves, but a CSV file about the movies.

Maybe your teacher has a file prepared for you. Please download the file from the slack channel if your teacher shared it with you.

If you follow this course on your own, head over to kaggle.com, create an account there, log in, and after that download the dataset from [www.kaggle.com/tmdb/tmdb-movie-metadata/data](https://www.kaggle.com/tmdb/tmdb-movie-metadata/data).
That download includes 2 CSV files. We will be only using the file `tmdb_5000_movies.csv`.

# Exercise

Anyway, either the file arrived over slack or you downloaded it; In short: you have it in your downloads. It should go into your big data workspace directory.

Open your file navigator, and copy that file from Downloads into your desktop/taste-of-big-data project directory that is.

**NOTE:** Do not change the contents, nor the name of that file.

Open the file in VS Code. It will look like this:
![CSV file opened in VS Code](https://cd.sseu.re/5000-movies-csv-opened-in-code.png)

Please close that file again. It is kinda big (your editor might have issues with it); your laptop could heat up considerably. If you (or your neighbours') laptop makes noise as if it wants to take of, close the file. RLY.

There are a lot more fields and rows in that file than in our example. That data *is* **BIG**.
