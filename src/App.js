
import './App.css';
import Button from "./components/button";
function App() {
  return (

      <>
      <header>
        <h1>Simple, traffic-based pricing</h1>
        <p>
          sign-up for 30 days trial, no credit card required!
        </p>
      </header>

      <section>
        <article>
            <h4>100K pageviews</h4>
            <h1>$16,00 <span class="monthlyYearly">/ monthly</span></h1>
        </article>

        <article>
            <input type="range"></input>
        </article>

        <article>
            <span>monthly</span> 
            <label class="switch">
              <input type="checkbox"></input>
              <span class="slider round"></span>
            </label>
            <span>yearly</span>
            <span id="discount">25% discount</span>
        </article>

        <article>
            <ul>
              <li>Unlimited websites</li>
              <li>100% data ownership</li>
              <li>Email reports</li>
            </ul>

            <Button value="start my trial"/>
        </article>
        </section>
      </>
  );
}

export default App;
