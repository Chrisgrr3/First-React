let word = "Hello"

ReactDOM.render(<h1>{word}, everyone!!</h1>, document.getElementById("root"));
// Since we brought in the React DOM CDN in our HTML file, we
// now have access to the 'ReactDOM' global variable. The
// 'render' method allows us to render something that looks
// like HTML.

// After including the JSX, we must also specify where we would
// like to render, which we do using the ID specified for the
// div tag in the HTML file.

ReactDOM.render(
    <ul>
        <li>Dog</li>
        <li>Cat</li>
    </ul>,
    document.getElementById("list")
);