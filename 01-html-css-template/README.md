# 1: HTML and CSS template

During the Taste of Big Data, you need a way to display your work. For this app, it will be the browser. Since today is not about understanding the intricies of HTML and CSS, you can copy our webpage and style sheet.

But before you can do that, you need to have a place where all your files can live.
1. Open your file browser (explorer in Windows, finder in MacOS) and navigate to your desktop folder.
    * Create a folder in your desktop folder, called `taste-of-big-data`. **Note:** Please don't use spaces in that name.
2. Open Visual Studio Code (your editor)

Add the newly created folder to your workspace:

![add a folder to a workspace](http://cd.sseu.re/Add-folder-to-workspace-code.png)

Navigate to your desktop and select your new folder:

![Add the taste of big data folder to code](http://cd.sseu.re/Add-taste-of-big-data-to-code.png)

This is how VS code would look like now. You might have a dark color scheme, but your sidebar includes the `taste-of-big-data` directory:

![what a proper setup vs code would look like](http://cd.sseu.re/Code-resulting-view-no-documents-open.png)

Now, in your 'taste of big data' workspace, you're gonna create the HTLM and CSS files. You will just create empty files, and then copy-paste contents in there.

Go to the menu of your editor and create a new file.
![create a file in vs code](http://cd.sseu.re/code-create-a-new-file.png)

Without adding any content to it, you will save the file, using the same menu, but now clicking on the `Save` button instead.

Make sure you name the file `index.html` - no capitals, no spaces - exactly that.

So, you've saved this file, let's add content to it. Please copy the following snippet and paste it into your `index.html` file you have open in your editor.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Movie Recommendations</title>
    <link href="styles.css" type="text/css" rel="stylesheet" />
  </head>

  <body>
    <h1>Movie recommendations</h1>

    <div id="most-popular" class="movie-table">
      <h3>Most popular movies</h3>

      <span class="movie-list header-line title">title</span>
      <span class="movie-list header-line year">year</span>
      <span class="movie-list header-line score">score</span>
      <span class="movie-list header-line votes">votes</span>
    </div>
    <footer>Made with &hearts; at Taste of Big Data</footer>
  </body>
</html>
```
Don't forget to (again) save the file after you add these contents.

This is all the HTML (also known as structure and contents of the webpage) that you need to get te basic page for your app working.

Nice! But... How do I check what it looks like? Since it is a webpage, the browser (Chrome) would be the best bet. But before you will do that, you have to start a webserver on your computer. Although it isn't required at this time, later you need it anyway, so let's start it up now.

In your editor (VS Code), running a webserver in your project is quite easy. Move your mouse so it hovers over the `taste-of-big-data` workspace, right click on it, and select `Open in Terminal`:
![open a terminal from VS Code](http://cd.sseu.re/open-terminal-from-vs-code.png)

Now you have a new panel in your editor; a terminal screen! You will use this terminal screen to start the webserver. Please enter this command in that panel:
```terminal
python -m http.server 3000
```

> **Note**, all the characters are lowercase. Also, the terminal is REALLY pick about spaces, dots and all. So best to just copy-paste that line straight into your terminal panel. (or be very careful to type it verbatim)

If all went well, you should be greeted by this output:
![a running python webserver from within vs code](http://cd.sseu.re/python-webserver-from-within-vs-code.png)

Ask help if it looks differently and you cannot get it to work

### Look at that page
Time to start Chrome. That will be the main browser for this day. Go to the address bar and enter this URL: [localhost:3000](http://localhost:3000)

The result should look somewhat like this:
![taste of big data without styles](http://cd.sseu.re/taste-of-big-data-without-styles.png)

Functional, but not at all pretty.

Why don't you spice it up with some styles?

In your editor, create a new file. This time, name the file `styles.css`.
If you're no King-Or-Queen-of-Style, feel free to opy-paste the following snippet into it:
```css
body {
  font-family: Arial, Helvetica, sans-serif;
  background-color: #eee;
  padding-left: 10px;
  padding-right: 10px;
  padding-bottom: 10px;
}

h1 {
  text-align: center;
}

.movie-table {
  box-shadow: 0 2px 6px 0 rgba(0,0,0,0.2);
  background-color: #f8f8f8;
  border-radius: 5px;
  padding: 0.5em;
}

.movie-table h3 {
  text-align: center;
  grid-column: span 4
}

.movie-table {
  display: grid;
  grid-template-areas: "title year score votes";
  grid-template-columns: 4fr 1fr 1fr 1fr;
}

.movie-table {
  text-align: right;
}

.movie-table .title {
  text-align: left;
}

.header-line {
  font-weight: bold;
  background-color: #fff;
  font-size:  110%;
}

.movie-list {
  border-right: 1px solid rgba(0,0,0,0.1);
  border-left: 1px solid rgba(0,0,0,0.1);
}

footer {
  position: fixed;
  background-color: #f8f8f8;
  bottom: 0.2em;
  box-shadow: 0 2px 6px 0 rgba(0,0,0,0.2);
  padding-top: 1em;
  padding-bottom: 0.4em;
  left: 30%;
  right: 30%;
  width: 40%;
  text-align: center;
}

```
Please save your `styles.css` file.

If you go to Chrome, and reload the page, it looks like this now:
![Taste of Big Data with Style](http://cd.sseu.re/Taste-of-Big-Data-with-style.png)
