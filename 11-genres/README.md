# Genres

Sure, 'The Godfather' is in the top 10, just as 'Pulp Fiction'.

But maybe crime and action just isn't your genre.

Lets make top 5 lists per genre, so we can have movie recommendations that are tailored to our mood.

If you look in the CSV file, genres is in there, but it looks kinda strange.

For the movie 'The Godfather' it looks like this
```ruby
"[{""id"": 18, ""name"": ""Drama""}, {""id"": 80, ""name"": ""Crime""}]"
```

You as a human can probably spot in seconds what the genres of this movie are. The computer will have a hard time finding that info; since it doesn't know how it is structured.

It looks so strange, since some nice developer tried to put some javascript objects (with properties for `id` and `name`) inside an array, and store that as a string inside CSV.

Below you find a representation of what PapaParse tries to make of it:

```js
'[{"id": 18, "name": "Drama"},{"id": 80, "name": "Crime"}]'
```

That already makes more sense than the line above.

> 🙄 There even is a name for this way of representing Javascript data in textual form:
>
> Javascript Object Notation, or `JSON` in short

Now, Javascript being handy for working with Javascript; it can convert a string with JSON into actual Javascript objects.

We need a different parser for it, but it is a parser that lives inside Javascript; nothing you need to install. 😉

## JSON

To convert a string in JSON into actual Javascript objects; you can parse it:

```js
console.log(JSON.parse('[{"id": 18, "name": "Drama"},{"id": 80, "name": "Crime"}]'))
```

The console will now have an array, in there it has 2 objects.
