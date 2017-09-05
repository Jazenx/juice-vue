import fetch from 'utils/fetch';

export function getMainAjaxData() {
  return fetch({
    url: '/capture/getWebCrawlProject/',
    method: 'get'
  })
}
