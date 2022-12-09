export default function clickForaDoMenu(element, events, callback) {
  const html = document.documentElement;
  const clickHtml = "data-clickHtml";

  if (!element.hasAttribute(clickHtml)) {
    events.forEach((userEvent) => {
      html.addEventListener(userEvent, clickNoHtml);
    });
    element.setAttribute(clickHtml, "");
  }

  function clickNoHtml(event) {
    if (!element.contains(event.target)) {
      element.removeAttribute(clickHtml);
      events.forEach((userEvent) => {
        html.removeEventListener(userEvent, clickNoHtml);
      });
      callback();
    }
  }
}
