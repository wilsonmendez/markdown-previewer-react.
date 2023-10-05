import "./App.scss";
import { useState } from "react";
import marked from "marked";
import Button from "./components/Button";

const placeholder = `
# This is my Markdown Previewer with React!
## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div>Hello World !</div>\`, between 2 backticks.
and here is another code sample,\` <img src="drawing.jpg" alt="drawing" width="200"/> \`, between backsticks.
\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also the [https://www.freecodecamp.org](https://www.freecodecamp.org) link, and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header? 
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
    - With different indentation levels.
      - That look like this.

			
1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![photo](https://cdn.glitch.com/0e4d1ff3-5897-47c5-9711-d026c01539b8%2Fbddfd6e4434f42662b009295c9bab86e.gif?v=1573157191712)
`;

function App() {
  const [textValue, setTextValue] = useState(placeholder);

  const handleInput = (e) => {
    setTextValue(e.target.value);
  };

  // set carriage returns to render a line break
  marked.setOptions({
    breaks: true
  });

  return (
    <div className="App">
      <div id="markdown" className="window">
        <div className="window-title">
          <Button />
          <h1 style={{ textAlign: "center" }}>~ ~Markdown~ ~</h1>
        </div>
        <div className="window-content">
          <textarea
            name="markdown-ta"
            id="editor"
            cols="62"
            rows="20"
            onChange={handleInput}
            value={textValue}
          ></textarea>
        </div>
      </div>

      <div id="preview-window" className="window">
        <div className="window-title">
          <Button />
          <h1 style={{ textAlign: "center" }}>~ ~Preview~ ~ </h1>
        </div>
        <div className="window-content">
          <div
            id="preview"
            dangerouslySetInnerHTML={{ __html: marked(textValue) }}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default App;
