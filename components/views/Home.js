b; //Using this as an example when for my API
const kelvinToFahrenheit = kelvinTemp =>
  Math.round((kelvinTemp - 273.15) * (9 / 5) + 32);
import html from "html-literal";

export default st => html`
  <section id="jumbotron">
    <h2>Click Below To Book An Appointment</h2>
    <a href="./Book">Book Now</a>
  </section>
  <section id="home">
    <content class="responsive flex">
      <div class="main-content">
        <br />
        <h2>Benefits Of Using In A Snip</h2>
        <br />
        <div class="row-container">
          <div class="row-item">Image 1</div>
          <div class="row-item">Image 2</div>
          <div class="row-item">Image 3</div>
          <div class="row-item">Benefit 1</div>
          <div class="row-item">Benefit 2</div>
          <div class="row-item">Benefit 3</div>
        </div>


        <p>
          This is going to contain more information than you ever cared to know.
        </p>

        <p>
          You can see my
          <a
            href="https://matchboxdesigngroup.com/team-member/james-mcminn-senior-digital-strategist/"
            >profile</a
          >
          at
          <a href="https://matchboxdesigngroup.com">Matchbox Design Group</a>.
        </p>
        <img
          src="https://matchboxdesigngroup.com/app/uploads/2021/06/James-McMinn-personality-pic-3.jpg"
          alt="Image"
        /><br /><br />

      <p></p>

      <div class="row-container-bottom">
        <div class="row-item-bottom">Services</div>
        <div class="row-item-bottom">Stylists</div>
        <div class="row-item-bottom">Book Now</div>

        <br /><br />
      </div>
    </content>
    </div>
  </section>
  <!-- Using this as an example when for my API -->
  <h2>
    Weather in ${st.weather.city} ${kelvinToFahrenheit(st.weather.temp)}F, feels
    like ${kelvinToFahrenheit(st.weather.feelsLike)}F
  </h2>
`;
