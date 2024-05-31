---
title: "All about HTML"
subtitle: "HTML need to know"
date: "2023-09-22"
---


# HTML (HyperText Markup Language)

## Table of Contents
1. [Introduction to HTML](#introduction-to-html)
2. [Basic Structure of an HTML Document](#basic-structure-of-an-html-document)
3. [Common HTML Elements](#common-html-elements)
4. [Attributes in HTML](#attributes-in-html)
5. [Forms in HTML](#forms-in-html)
6. [Semantic HTML](#semantic-html)
7. [HTML Example](#html-example)

## Introduction to HTML

HTML is the standard markup language used to create web pages. It describes the structure of a web page and its content. HTML elements form the building blocks of all websites. 

### Key Points
- HTML stands for HyperText Markup Language.
- HTML is used to create the structure and content of a web page.
- HTML elements are represented by tags.

## Basic Structure of an HTML Document

An HTML document is a text file that contains HTML elements. The basic structure includes:

1. `<!DOCTYPE html>`: Defines the document type and version of HTML.
2. `<html>`: The root element that encompasses all other HTML elements.
3. `<head>`: Contains meta-information about the document, such as its title and links to stylesheets.
4. `<body>`: Contains the content of the document, such as text, images, and links.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My First Web Page</title>
</head>
<body>
    <h1>Welcome to My Web Page</h1>
    <p>This is a paragraph of text.</p>
</body>
</html>
```

## Common HTML Elements

### Headings
Headings are defined with `<h1>` to `<h6>` tags.

```html
<h1>This is an H1 heading</h1>
<h2>This is an H2 heading</h2>
<h3>This is an H3 heading</h3>
```

### Paragraphs
Paragraphs are defined with the `<p>` tag.

```html
<p>This is a paragraph of text.</p>
```

### Links
Links are defined with the `<a>` tag.

```html
<a href="https://www.example.com">Visit Example.com</a>
```

### Images
Images are defined with the `<img>` tag.

```html
<img src="image.jpg" alt="Description of image">
```

### Lists
Unordered lists are defined with the `<ul>` tag and list items with the `<li>` tag.

```html
<ul>
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
</ul>
```

Ordered lists are defined with the `<ol>` tag and list items with the `<li>` tag.

```html
<ol>
    <li>First item</li>
    <li>Second item</li>
    <li>Third item</li>
</ol>
```

## Attributes in HTML

Attributes provide additional information about HTML elements. They are always included in the opening tag and usually come in name/value pairs like `name="value"`.

### Example of Attributes
```html
<a href="https://www.example.com" target="_blank">Visit Example.com</a>
<img src="image.jpg" alt="Description of image" width="500" height="600">
```

## Forms in HTML

Forms are used to collect user input. The `<form>` element wraps the entire form, and various input elements are used to collect different types of data.

### Example of a Simple Form
```html
<form action="/submit-form" method="post">
    <label for="name">Name:</label>
    <input type="text" id="name" name="name">
    
    <label for="email">Email:</label>
    <input type="email" id="email" name="email">
    
    <input type="submit" value="Submit">
</form>
```

## Semantic HTML

Semantic HTML introduces meaning to the web page rather than just presentation. It helps with accessibility and SEO.

### Common Semantic Elements
- `<header>`: Represents a container for introductory content or navigational links.
- `<nav>`: Defines a set of navigation links.
- `<main>`: Specifies the main content of a document.
- `<section>`: Defines a section in a document.
- `<article>`: Represents a self-contained piece of content.
- `<footer>`: Defines a footer for a document or section.

```html
<header>
    <h1>My Website</h1>
    <nav>
        <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
    </nav>
</header>
<main>
    <section>
        <h2>About Us</h2>
        <p>This section contains information about us.</p>
    </section>
    <article>
        <h2>Latest News</h2>
        <p>This article contains the latest news.</p>
    </article>
</main>
<footer>
    <p>&copy; 2024 My Website</p>
</footer>
```

## HTML Example

Here is a complete example combining various HTML elements.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My First Web Page</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f0f0f0;
            margin: 0;
            padding: 20px;
        }
        header, footer {
            background-color: #333;
            color: white;
            padding: 10px 0;
            text-align: center;
        }
        nav ul {
            list-style-type: none;
            padding: 0;
        }
        nav ul li {
            display: inline;
            margin: 0 10px;
        }
        main {
            margin: 20px 0;
        }
        section, article {
            background-color: white;
            padding: 10px;
            margin-bottom: 20px;
            border-radius: 5px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
    </style>
</head>
<body>
    <header>
        <h1>My Website</h1>
        <nav>
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    </header>
    <main>
        <section id="about">
            <h2>About Us</h2>
            <p>This section contains information about us.</p>
        </section>
        <article id="news">
            <h2>Latest News</h2>
            <p>This article contains the latest news.</p>
        </article>
    </main>
    <footer>
        <p>&copy; 2024 My Website</p>
    </footer>
</body>
</html>
```

