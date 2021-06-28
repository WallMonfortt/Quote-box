import './App.css';
import React, { useState } from "react";
import Quote from './quotes.json'
import Author from './components/Author.js'
import Quotes from './components/Quotes'



function App() {
  
  //First value to quote
  let first = Math.floor(Math.random()*101);

  const [value,setValue] = useState(first);
//Function to change quotes & colors
  const change = () => {
    setValue(Math.floor(Math.random()*101));
    let col = Math.floor(Math.random()*25);
    let col2 = Math.floor(Math.random()*25);
    //Colors
    let colors = 
    ["#b191ff","#7d8ca3","#52ffb8","#c15d61","#646881","#dc2f02",
    "#e85d04","#f48c06","#faa307","#ffba08","#005f73","#0a9396",
    "#94d2bd","#e9d8a6","#ee9b00","#ca6702","#a0c4ff","#bdb2ff",
    "#ffc6ff","#fca311","#d62828","#8a5a44","#463f3a","#f5cb5c"
    ];
    //Set backgroud colors
    let body =document.getElementById("body");
    body.style.backgroundColor = colors[col];
    let quote = document.getElementById("quote");
    quote.style.backgroundColor = colors[col2]
    
  }
//Quote & author
  const quote = Quote.quotes[value]["quote"];
  const author = Quote.quotes[value]["author"];

  return (
    <div>
      <h1 className="title">Quote Magic Box</h1>
      <div className="App">
        
        <div className="quote">
          <Quotes showQuote={quote}/>
          <Author showAuthor={author}/>
        </div>
        
      </div>
      
      <div className="test">
        <button onClick={change}>
        New Quote
        </button>
      </div>
    </div>
  );
}

export default App;
