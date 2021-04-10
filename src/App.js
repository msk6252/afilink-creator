import './App.css'

function App() {
  function createHTML() {
    const image = document.getElementById("image").value
    const name = document.getElementById("name").value
    const desc = document.getElementById("desc").value
    const amazon = document.getElementById("amazon").value
    const rakuten = document.getElementById("rakuten").value
    const yahoo = document.getElementById("yahoo").value
    var template = `<div class="af-box">
  <div class="af-imgbox">
    ${image}
  </div>
  <div class="af-textbox">
    <div class="af-title">
      ${name}
    </div>
  <div class="af-desc">
    ${desc}
  </div>
  <br/ >
  <div class="af-kobox af-amazon">
    <a href="${amazon}" target="_blank" class="aflink" rel="noopener noreferrer">Amazon</a>
  </div>
  <div class="af-kobox af-rakuten">
    <a href="${rakuten}" target="_blank" class="aflink" rel="noopener noreferrer">楽天</a>
  </div>
  <div class="af-kobox af-yahoo">
    <a href="${yahoo}" target="_blank" class="aflink" rel="noopener noreferrer">Yahoo!</a>
  </div>
 </div>
 <div class="clear"></div>
</div>`
    return template
  }

  function createLink() {
    document.getElementById("result").value = createHTML();
    console.log(createHTML());
  }

  return (
    <div className="App">
      <header className="App-header">
        Affiliate Link Generator
      </header>
      <div className="container">
        画像：<input id="image"></input>
      </div>
      <div className="container">
        商品名：<input id="name"></input>
      </div>
      <div className="container">
        商品説明：<input id="desc"></input>
      </div>
      <div className="container">
        Amazon：<input id="amazon"></input>
      </div>
      <div className="container">
        楽天：<input id="rakuten"></input>
      </div>
      <div className="container">
        Yahoo：<input id="yahoo"></input>
      </div>
      <div className="container">
        <button onClick={createLink}>リンク生成</button>
      </div>
      <div className="container">
        出力：<textarea cols="50" rows="30" id="result"></textarea>
      </div>
    </div>
  );
}

export default App;
