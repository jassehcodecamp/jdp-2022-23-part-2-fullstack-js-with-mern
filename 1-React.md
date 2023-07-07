## Introduction To React

### What is React

React is a JavaScript Library for building Frontend Applications. It can be used for building:

- Web Applications
- Mobile Applications
- Desktop Applications
- 3D Applications with WebGL and Three.js

React is one of the most popular Frontend Frameworks out there.

It has a huge market in the industry, and it is widely used by top companies like Facebook, Uber, Amazon, Netflix, etc


### Benefits/Advantages of using React (Why React?)

- UI states are difficult to handle with Vanilla JavaScript. With React we don't have to worry about keeping our state (held in JavaScript) and our UI (in the DOM) in sync
- With React, we write code that describes what the UI should be based on the application state. React helps us write Declarative code.
- Huge Ecosystem, Active Community, and High Performance
- Huge market in the Software/Tech industry, and it is widely used by top companies like Facebook, Uber, Amazon, Netflix, etc
  

### Raw React APIs

The React Library has one core API (The React Core) and and other APIs for different renderers and platforms like Mobile, Web, Desktop, etc. In this course we are going to focus on React and its support for the Web platform. So there are two libraries we would need to build Web Applications with React

- The Core React API - this is the core React Libarary with those the magic of React. This API allows us to create React elements with the **createElements** feature.
  
  So the role of React is to create React Elements.
  
- The ReactDOM API - is to render react element on the Browser DOM. So the role of ReactDOM is to take those elements created by React and put them on the page (DOM).


Example **Hello World** in raw React

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Raw React APIs</title>

  <!-- Core React Library -->
  <script src="https://unpkg.com/react@18/umd/react.development.js"></script>  
  
  <!-- React DOM Library -->
  <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
</head>

<body>
  <div id="app">The Root</div>

  <script>
    const container = document.querySelector('#app')

    // Identify the root element where we want to render react elements
    const root = ReactDOM.createRoot(root)

    // create a React Element called p, with a prop/attribute called title with the value 'Hello React'
    // the p element has a text node of 'Hello World'
    const paragraph = React.createElement('p', { title: 'Hello React' }, 'Hello World');

    // use the render function in ReactDOM to render the paragraph element in the Browser/HTML DOM
    root.render(paragraph);
  </script>
</body>

</html>
```

### Using React with JSX

JSX which stands for JavaScript Syntax Extension, is an HTML like syntax into JavaScript. 

To use JSX with React, you can use **Babel** (A JavaScript compiler) or use a bundler like **Webpack**, **Parcel**, **Browserify**, etc.


#### Example of using JSX with React using the Babel

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Raw React APIs</title>

  <!-- Core React Library -->
  <script src="https://unpkg.com/react@18/umd/react.development.js"></script>  
  
  <!-- React DOM Library -->
  <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>


  <!-- Babel Library -->
  <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>


</head>

<body>
  <div id="app">The Root</div>

  <script type="text/babel">
    const container = document.querySelector('#app')
    const root = ReactDOM.createRoot(container)

    const app = (
      <div>
        <p>Paragraph 1</p>
        <p>Paragraph 2</p>
      </div>
    )

    root.render(app);
  </script>
</body>

</html>
```

In the previous section, we created a React Element using the raw API of React. This is okay to an extend, but you will agree with me that it's not the nicest way to create an element. In fact, we are not used to creating HTML elements this way, so it would take a good of time and 

React apps are made out of components. A component is a piece of the UI (user interface) that has its own logic and appearance. A component can be as small as a button, or as large as an entire page.

- The library for web and native user interfaces
- Created by Facebook in 2011
- Components
- React Updates the DOM