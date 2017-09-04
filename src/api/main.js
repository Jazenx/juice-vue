import fetch from 'utils/tigerFetch';

export function getMainAjaxData() {
  return fetch({
    url: '/capture/getWebCrawlProject/',
    method: 'get'
  })
}
