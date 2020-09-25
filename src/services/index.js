function request(url) {
  return fetch(url).then(res => res.json());
}

export function queryTopics() {
  const url = 'https://cnodejs.org/api/v1/topics';
  return request(url);
}