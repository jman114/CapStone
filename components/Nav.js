import html from "html-literal";

export default links => html`
  <nav>
    <i class="fas fa-ellipsis-h"></i>
    <ul class="hidden--mobile nav-links">
      ${links.map(
        el =>
          `<li><a href="/${el.title}" title="${el.title}" data-navigo>${el.text}</a></li>`
      )}
    </ul>
  </nav>
`;
