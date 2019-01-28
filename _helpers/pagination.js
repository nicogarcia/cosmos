"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pageInputWidth = pageInputWidth;
exports.pagesFromItems = pagesFromItems;
exports.changePageIfAppropiate = changePageIfAppropiate;
exports.totals = totals;
exports.getPaginationSlice = getPaginationSlice;

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/**
 * Calculates the page input width based on the characters
 * it contains.
 * @param {number} page
 */
function pageInputWidth(page) {
  var charWidth = 8;
  var baseWidth = 50;

  var pageAsString = page.toString();
  var pageCharLength = pageAsString.length;

  return pageCharLength * charWidth + baseWidth;
}

/**
 * Calculates the number of pages required given
 * the total number of items and the desired items
 * per page.
 * @param {number} items
 * @param {number} perPage
 */
function pagesFromItems(items, perPage) {
  return Math.ceil(items / perPage);
}

/**
 * Determines if the page should change based on the
 * expected next page and the number of pages.
 * @param {number | string} rawNextPage
 * @param {number} total
 * @param {number} perPage
 * @param {function} handlerFn
 */
function changePageIfAppropiate(rawNextPage, total, perPage, handlerFn) {
  var nextPage = parseInt(rawNextPage);
  var pageCount = pagesFromItems(total, perPage);
  var nextPageExists = nextPage > 0 && nextPage <= pageCount;

  if (nextPageExists) handlerFn(nextPage);
}

/**
 * Calculates the totals for the current page
 * @param {number} page
 * @param {number} perPage
 * @param {number} items
 */
function totals(page, perPage, items) {
  var toRecord = page * perPage;
  var fromRecord = toRecord - perPage + 1;

  if (items > 0 && toRecord > items) toRecord = items;

  var result = "Showing " + fromRecord + " - " + toRecord;
  if (items > 0) result += " of " + items;

  return result;
}

/**
 * Calculates the pagintion slice range for a given page.
 *
 * Example:
 *  Given the page 77 with a pages-per-slice value of 10,
 *  we would obtain the following range:
 *
 *    70, 71, 72, [[73]], 74, 75, 76, 77, 78, 79
 *
 *  with the format:
 *    { label: number | string, selected: boolean }.
 *
 * @param {number} page
 * @param {number} items
 * @param {number} itemsPerPage
 * @param {number} pagesPerSlice
 */
function getPaginationSlice(page, items, itemsPerPage) {
  var pagesPerSlice = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 5;

  var actualPage = page - 1;
  var minPage = actualPage - actualPage % pagesPerSlice;
  var maxPage = pagesFromItems(items, itemsPerPage);

  var range = [].concat(_toConsumableArray(Array(pagesPerSlice).keys())).map(function (i) {
    var pageNumber = i + minPage + 1; // Avoid starting at 0
    var selected = page === pageNumber;
    return { label: pageNumber, selected: selected };
  }).filter(function (i) {
    return i.label <= maxPage;
  });

  return range;
}