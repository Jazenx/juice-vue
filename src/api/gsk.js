import fetch from 'utils/fetch';

export function getBenefit(disease) {
  return fetch({
    url: '/gsk/benefit',
    method: 'post',
    params: {
      disease
    }
  });
}

export function getTitile(category) {
  return fetch({
    url: '/gsk/title/' + category,
    method: 'get'
  });
}

export function getDisease(category) {
  return fetch({
    url: '/gsk/disease/' + category,
    method: 'get'
  });
}


export function getTable(category, disease, benefit, channel, foodmed) {
  return fetch({
    url: '/gsk/getTable',
    method: 'post',
    params: {
      category,
      disease,
      benefit,
      channel,
      foodmed
    }
  });
}
