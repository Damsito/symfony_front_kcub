function getPage(string) {
  let url = string ? new URLSearchParams(string.replace("?", "&")) : null;
  return url ? parseInt(url.get("page")) : null;
}
export function handlePages(hydra_view = null) {
  let firstPage = 1;
  let nextPage = null;
  let lastPage = 1;
  let previousPage = null;
  let currentPage = 1;
  if (hydra_view) {
    let first = hydra_view["hydra:first"] || null;
    let previous = hydra_view["hydra:previous"] || null;
    let last = hydra_view["hydra:last"] || null;
    let next = hydra_view["hydra:next"] || null;
    firstPage = getPage(first) || 1;
    nextPage = getPage(next);
    lastPage = getPage(last) || 1;
    previousPage = getPage(previous);
    currentPage = !previous ? firstPage : previousPage + 1;
  }
  return {
    firstPage,
    previousPage,
    currentPage,
    nextPage,
    lastPage,
  };
}
export function getPages(array, page, numberOfItems = null) {
  let pages = {};
  pages.currentPage = parseInt(page);
  pages.firstPage = 1;
  pages.lastPage =
    Math.ceil(
      array.length /
        (numberOfItems ? numberOfItems : process.env.VUE_APP_PAGE_NUMBER)
    ) || 1;
  pages.previousPage =
    pages.currentPage == 1 ? null : parseInt(pages.currentPage) - 1;
  pages.nextPage =
    pages.currentPage == pages.lastPage
      ? null
      : parseInt(pages.currentPage) + 1;
  return pages;
}

export function getSliced(array, page, numberOfItems = null) {
  return array.slice(
    (page - 1) *
      (numberOfItems ? numberOfItems : process.env.VUE_APP_PAGE_NUMBER),
    page * (numberOfItems ? numberOfItems : process.env.VUE_APP_PAGE_NUMBER)
  );
}
export function decrementPage(changePage = false, page = 1) {
  if (changePage && parseInt(page) !== 1) {
    return page - 1;
  }
  return page;
}
export function sendEmail(checkboxes, array, property) {
  if (!checkboxes.length || !array.length || !property) {
    return;
  }
  let contactToSend = array.filter((c) => {
    return checkboxes.includes(c[property]);
  });
  let emails = contactToSend.map((c) => c.email).toString();
  window.location.href = "mailto:" + emails;
}
