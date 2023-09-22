import "./App.css";

function App() {
  return (
    <div className="app">
      <div className="wrapper">
        <div className="box contacts">
          <h1 className="title">Co op arts</h1>
          <div className="contacts__links">
            <p>Contacts</p>
            <a
              className="contacts__link"
              href="mailto:eugeniaignatova@co-op-arts.org"
            >
              eugeniaignatova@co-op-arts.org
            </a>
          </div>
        </div>
        <div className="box text box--green">Grants</div>
        <div className="box image sea"></div>
        <div className="box text box--green">Information</div>
        <div className="box overcome">
          We help art to overcome geographic limitation
        </div>
        <div className="box image leaf"></div>
        <div className="box image tree"></div>
        <div className="box text box--green">Network</div>
      </div>
    </div>
  );
}

export default App;
