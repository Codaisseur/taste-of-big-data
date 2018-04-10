# Convert data into Javascript

It's nice that we have a big CSV file.

But you know what? CSV is **incompatible with Javascript**. Before we can use the data from that CSV file; we must convert (or parse) it into something that the browser understands.

Whatever the source of your data; you'll always have to make sure you can work with it in your programming environment.

## Let's not convert it (all) ourself

Luckily for us, there is a Javascript library that converts CSV into Javascript.

It is called PapaParse (you can find it [here](https://github.com/mholt/PapaParse), not that you need to look into its details).

Since it is written in Javascript, you can incorporate it into your HTML page.

In your HTML file, make sure to load the `PapaParse` library. To do that, update the `<head>` section of your HTML file, where you previously loaded the `movies.js` file:
```HTML
  <head>
    <meta charset="utf-8">
    <title>Movie Recommendations</title>

    <link href="styles.css" type="text/css" rel="stylesheet" />

    <script src="https://cdnjs.cloudflare.com/ajax/libs/PapaParse/4.3.7/papaparse.min.js"></script>
    <script src="movies.js"></script>
  </head>
```

In the code above we see that you can use Javascript files from the internet (`PapaParse`), just as easy as you can use Javascript from your own project (`movies.js`)

### Time to convert

PapaParse is now loaded in our browser (if we reload it). It can convert CSV rows into Javascript.

You know about the Javascript `String`, `Number` and `Array`.
Would a movie fit in any of those? Maybe, but maybe not...

Well, according to our CSV file, a movie has some properties. The most important properties from the perspective of our app:
- release_date,
- title,
- vote_average,
- vote_count,
- genres

In javascript there is a fourth basic building block, next to number, string and array, to accommodate this shape. It is called the `object`.

### Objects

So... PapaParse converts CSV into javascript `object`s.

Lets have a look at what an object is.

You see objects all around you. You sit on a chair object, and you use a table object. Maybe there even is a teacher object around.

#### Characteristics

All these objects have characteristics, or properties.

* A chair might have a blue color.
* A table might have 4 legs
* A teacher might have the name 'Arno', and be not at all funny.

> 🤓 **Note**:
>
> The chair and table object have only one property (the chair has color, the table has legs)
>
> The teacher has two properties (the name and the funniness).

These objects might have more characteristics, but you (as a seasoned developer) can chose which properties you want to express in your code, and what properties you want to leave out.

You can declare your objects in Javascript. Here is what the 3 objects from above would look like:
```javascript
var chair = { color: 'blue' }
var table = { legs: 4 }
var teacher = { name: 'Arno', funny: 'Not at all' }
```

> 🙄 Properties are very much like variables; just like a variable, a property has a name and a value.
>
> The difference is
> 1. how you write them, and
> 2. that properties can only be used in objects, and variables cannot.

After you've declared these objects, you can read their properties again:

```javascript
var chair = { color: 'blue' }

// lets write the color of the chair to the log
console.log('The color of the chair is:', chair.color)
```

#### Behavior

Objects are very powerful. Not only can they describe properties, but they can have behavior.

In Javascript, behavior is expressed as a `function`.

* A function of a chair might be, if you pull a lever, it moves up or down.
* A function of a teacher can be, if you ask him, that he will make an unfunny joke.

Lets change the teacher object from above. The code below has some newlines, for readability. After we declare the teacher object, we immediately tell it to use its `joke` behavior:

```javascript
var teacher = {
  name: 'Arno',
  funny: 'Not at all',
  joke: function() {
    console.log ('I hate Russian dolls, they’re so full of themselves.')
  }
}

teacher.joke() // this writes the not at all funny joke to the console
```

#### Recap: Javascript things you've learned

After all you've already learnt, you also added the object with its properties and their functions.

Important Javascript building blocks:
* numbers
* strings
* arrays
* objects
  + properties
  + functions

> 🤓 **Functions vs Properties**:
>
> Although properties can only be used in objects, functions can also be used outside of objects. Later today we will do that. Just wait for it!

Well. That was a giant side-step. Lets continue our journey to convert movie-data, shall we?

## Parse the movies

PapaParse will convert the rows in the CSV file into Javascript objects.

The movie objects that will be created by PapaParse will only have properties, no functions.

Since parsing CSV is different for every CSV file and use-case, PapaParse needs to be configured on how to do its work.

And of course, we will use a javascript object to configure it - with **properties AND functions**.

### Our configuration

To find names for the properties, it will use the `header` line in our CSV file. That is one property we need to configure.

Also, we want to treat numbers in the CSV as numbers in javascript, not strings. For that to work we have to configure something called `dynamicTyping`.

It should parse our CSV file that lives on our localhost, it needs to `download` that file in order to convert it.

And since we want to get a feel for the data, we want a `preview` of just 1 movie.

And there is one function of key importance: If the parsing process is `complete`, we want to see the first result in our console.


```javascript
var papaParseConfiguration = {
	header: true,
  dynamicTyping: true,
  download: true,
  preview: 1,
  complete: function(results) {
    console.log(results.data[0]);
  }
}
```
That is the object we need (for now) to configure PapaParse. Copy it into the console of your browser.

Then, use the library and your custom made configuration to parse the first movie in the CSV file. Run the next line in your terminal.
```javascript
Papa.parse('http://localhost:3000/tmdb_5000_movies.csv', papaParseConfiguration)
```

If all went well, your log will have output that looks like the following entry:
```javascript
{budget: 237000000, genres: "[{"id": 28, "name": "Action"}, {"id": 12, "name": …antasy"}, {"id": 878, "name": "Science Fiction"}]", homepage: "http://www.avatarmovie.com/", id: 19995, keywords: "[{"id": 1463, "name": "culture clash"}, {"id": 296…: "mind and soul"}, {"id": 209714, "name": "3d"}]", …}
```

# Exercises

1. ✍️  In your console create a variable `papaParseConfiguration` that holds an object with the configuration as mentioned above.
2. ✍️  Convert the rows in the CSV file, and check in your console if the output resembles the above example.
