import html from "html-literal";

export default st =>
  html`
    <section id="jumbotron">
      <h2>Click Below To Book An Appointment</h2>
      <a href="./Book">Book Now</a>
    </section>
    <table id="services">
      <tr>
        <th>Men's Hair Cut</th>
        <th>Women's Hair Cut</th>
        <th>Men's Shave</th>
        <th>Coloring</th>
      </tr>
      <!-- Using as an example for when I implement my API ${st.services
        .map(services => {
          return `<tr><td>${services.crust}</td><td>${
            services.cheese
          }</td><td>${services.sauce}</td><td>${services.toppings.join(
            " & "
          )}</td><td>${services.customer}</td></tr>`;
        })
        .join("")} -->
    </table>
  `;
