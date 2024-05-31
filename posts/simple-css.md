---
title: "Style with CSS"
subtitle: "Simple CSS"
date: "2023-06-22"
---

# CSS (Cascading Style Sheets)

## Table of Contents
1. [Introduction to CSS](#introduction-to-css)
2. [Basic Syntax and Selectors](#basic-syntax-and-selectors)
3. [Box Model](#box-model)
4. [CSS Layout](#css-layout)
5. [Styling Text](#styling-text)
6. [Styling Backgrounds](#styling-backgrounds)
7. [Responsive Design](#responsive-design)
8. [CSS Example](#css-example)

## Introduction to CSS

CSS (Cascading Style Sheets) is a stylesheet language used for describing the presentation of a document written in HTML. CSS defines how HTML elements should be displayed.

### Key Points
- **Separation of Concerns**: CSS separates the content (HTML) from its presentation (CSS).
- **Cascading**: CSS rules cascade down from top to bottom, and the last rule applied has the highest priority.
- **Selectors**: CSS selectors are used to target HTML elements.

## Basic Syntax and Selectors

### Syntax
CSS consists of rulesets. Each ruleset contains a selector and a declaration block.

```css
selector {
    property: value;
}
```

### Selectors
1. **Element Selector**: Targets HTML elements directly.

```css
p {
    color: blue;
}
```

2. **Class Selector**: Targets elements with a specific class attribute. Classes are denoted with a period (`.`).

```css
.intro {
    font-size: 20px;
}
```

3. **ID Selector**: Targets an element with a specific id attribute. IDs are denoted with a hash (`#`).

```css
#header {
    background-color: #f0f0f0;
}
```

4. **Attribute Selector**: Targets elements with a specific attribute.

```css
a[target="_blank"] {
    color: red;
}
```

5. **Descendant Selector**: Targets elements nested within other elements.

```css
div p {
    color: green;
}
```

## Box Model

The CSS box model describes the rectangular boxes generated for elements in the document tree and consists of:

1. **Content**: The actual content of the box, where text and images appear.
2. **Padding**: Clears an area around the content; inside of the border.
3. **Border**: A border surrounding the padding (if any) and content.
4. **Margin**: Clears an area outside the border; the margin is transparent.

```css
div {
    width: 300px;
    padding: 20px;
    border: 5px solid black;
    margin: 10px;
}
```

## CSS Layout

### Flexbox
Flexbox is a layout model that allows elements to align and distribute space within a container.

```css
.container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}
```

### Grid
CSS Grid Layout is a two-dimensional layout system for the web.

```css
.container {
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    gap: 10px;
}
```

## Styling Text

### Font
```css
p {
    font-family: 'Arial', sans-serif;
    font-size: 16px;
    font-weight: bold;
    color: #333;
}
```

### Text Alignment
```css
h1 {
    text-align: center;
}
```

### Text Decoration
```css
a {
    text-decoration: none;
    color: blue;
}
```

## Styling Backgrounds

### Background Color
```css
body {
    background-color: #f0f0f0;
}
```

### Background Image
```css
div {
    background-image: url('background.jpg');
    background-size: cover;
    background-position: center;
}
```

## Responsive Design

Responsive design ensures that web pages look good on all devices (desktops, tablets, and phones).

### Media Queries
Media queries are used to apply different styles for different devices or screen sizes.

```css
@media (max-width: 600px) {
    .container {
        flex-direction: column;
    }
}
```

### Flexible Units
Using relative units like percentages, `em`, and `rem` instead of fixed units like pixels.

```css
.container {
    width: 80%;
    padding: 1em;
}
```

## CSS Example

Here is a complete example combining various CSS properties.

### HTML

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS Example</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header>
        <h1>Welcome to My Website</h1>
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

### CSS (styles.css)

```css
/* General Styles */
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

/* Responsive Design */
@media (max-width: 600px) {
    nav ul li {
        display: block;
        margin: 10px 0;
    }

    main {
        padding: 0 10px;
    }
}
```



