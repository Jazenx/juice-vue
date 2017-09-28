import fetch from 'utils/fetch';

export function getBenefit() {
  return fetch({
    url: '/gsk/benefit',
    method: 'get'
  });
}



export function getTitile(category) {
  return fetch({
    url: '/gsk/title/' + category,
    method: 'get'
  });
}
