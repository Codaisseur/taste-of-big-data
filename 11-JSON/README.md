# Genres

Sure, 'The Godfather' is in the top 10, just as 'Pulp Fiction'.

But it aren't movies you'd enjoy during the family weekend with your 8 year old niece...

Lets make top 10 lists per genre, so you can have movie recommendations that are tailored to your mood.

If you look in the CSV file, each and every movie has genres. The genres are in there, but they look kinda strange.

For the movie 'The Godfather' it looks like this:
```js
"[{""id"": 18, ""name"": ""Drama""}, {""id"": 80, ""name"": ""Crime""}]"
```

You as a human can probably spot in seconds what the genres of this movie are. The computer will have a hard time finding that info; since it doesn't know how it is structured.

It looks so strange, since a  developer tried to put some javascript objects (with properties for `id` and `name`) inside an array, and store that as a string inside CSV.

Below you find a representation of what PapaParse tries to make of it:

```js
' [ {"id": 18, "name": "Drama"} , {"id": 80, "name": "Crime"} ] '
```
That is already structured better. But still, it is stinky... It looks like a javascript array, with in there 2 objects, but actually it is just a string with characters.

> 🙄 There even is a name for this way of representing Javascript data in textual form:
>
> Javascript Object Notation, or `json` in short

Lets dissect that string of characters:
```Java
|-> a json string opens
|
| |-> an array opens
| |
| | |-> an object for genre opens
| | |
| | |  |-> a property with the name 'id'
| | |  |
| | |  |    |-> the value of the property 'id'
| | |  |    |
| | |  |    |    |-> a property with a name of 'name'
| | |  |    |    |
| | |  |    |    |       |-> the value of the propert 'name'
| | |  |    |    |       |
| | |  |    |    |       |      | -> the genre object closes
| | |  |    |    |       |      |
| | |  |    |    |       |      | |-> a comma, a new element in the array comes up
| | |  |    |    |       |      | |
| | |  |    |    |       |      | | |-> a second genre object
| | |  |    |    |       |      | | |
| | |  |    |    |       |      | | |                           |-> the second genre closes
| | |  |    |    |       |      | | |                           |
| | |  |    |    |       |      | | |                           | |-> the array closes
| | |  |    |    |       |      | | |                           | |
| | |  |    |    |       |      | | |                           | | |-> the json string closes
| | |  |    |    |       |      | | |                           | | |
' [ { "id": 18, "name": "Drama" } , { "id": 80, "name": "Crime" } ] '
```

Now, Javascript being handy for working with Javascript; it can convert a string with JSON into actual Javascript objects.

We need a different parser for it, but it is a parser that lives inside Javascript; nothing you need to install. 😉

## JSON

To convert JSON into actual Javascript objects; you can parse it:

```js
console.log(JSON.parse('[{"id": 18, "name": "Drama"},{"id": 80, "name": "Crime"}]'))
```
![Parsing JSON](https://cd.sseu.re/parsing-json.png)

Nice. We have an array with actual Javascript objects to work with.

```js
{ id: 18, name: "Drama" }
```

We aren't interested in the `id` of the genre, but the `name`, that looks like information we can use 😊

Now that we know what the actual Javascript object look like, we can build an idea how to work with genres...

But first, get familiar with JSON.

# Exercise
