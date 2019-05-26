const urlm = require('url');


const addPagenoToUrl = (url, pageno, _param_name) => {
    const param_name = _param_name ? _param_name : "pageno";
    const urlObj = urlm.parse(url, true);

    urlObj.query[param_name] = pageno;

    delete urlObj.search;

    return urlm.format(urlObj);
};


// Helper function used to paginate.
// Return the HTML links used to paginate.
//
const paginate = (totalItems, itemsPerPage, currentPage, url, param_name) => {

    if (totalItems <= itemsPerPage) {
        return false;
    }

    const total = Math.ceil(totalItems / itemsPerPage);

    // Number of links to show before and after the current page.
    // In addition to these, the first, last and intermediate links are also shown
    let neighbours = 2; // items a mostrar alrededor el la pagina actuañ

    const html = [];

    // Modify neighbors to avoid having few buttons:
    //  - If there is no space for the neighbors on the left, I show more by the right.
    //  - If there is no space for the neighbors on the right, I show more by the left.
    if (currentPage - neighbours <= 2) {
        neighbours += 3 + neighbours - currentPage;
    } else if (total - currentPage - neighbours <= 1) {
        neighbours += 2 - total + currentPage + neighbours;
    }

    // First page
    if (1 < currentPage - neighbours) {
        url = addPagenoToUrl(url, 1, param_name);
        html.push('<a href="' + url + '"> ' + 1 + ' </a>');
    }

    // Previous pages: between the first page and the middle pages
    if (currentPage - neighbours > 2) {
        const n = Math.trunc(( 1 + currentPage - neighbours) / 2);
        url = addPagenoToUrl(url, n, param_name);
        html.push('<a href="' + url + '"> ' + n + ' </a>');
    }

    // Pages in the middle
    for (let i = 1; i <= total; i++) {
        if (i === currentPage) {
            html.push('<a class="active" href="#"> ' + i + ' </a>');
        } else {
            if (i >= currentPage - neighbours && i <= currentPage + neighbours) {
                url = addPagenoToUrl(url, i, param_name);
                html.push('<a href="' + url + '"> ' + i + ' </a>');
            }
        }
    }

    // Next pages: between the middle pages and the last page
    if (currentPage + neighbours < total - 1) {
        const n = Math.trunc(( total + currentPage + neighbours + 1) / 2);
        url = addPagenoToUrl(url, n, param_name);
        html.push('<a href="' + url + '">' + n + '</a>');
    }

    // Last page
    if (total > currentPage + neighbours) {
        url = addPagenoToUrl(url, total, param_name);
        html.push('<a href="' + url + '"> ' + total + ' </a>');
    }

    return html.join('');
};


exports.addPagenoToUrl = addPagenoToUrl;
exports.paginate = paginate;
