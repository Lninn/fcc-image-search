function request(url) {
  return fetch(url).then((res) => res.json());
}

export function queryTopics() {
  const url = "https://cnodejs.org/api/v1/topics";
  return request(url);
}

export function queryAuth() {
  return new Promise((resolve) => {
    resolve({
      status: true,
      data: null,
    });
  });
}

export function queryRankingScore() {
  return new Promise((resolve) => {
    const list = [
      {
        id: 1,
        name: "sltondfe",
        score: 34903,
      },
      {
        id: 2,
        name: "sltfjuone",
        score: 5583,
      },
      {
        id: 3,
        name: "slr4tone",
        score: 42375,
      },
      {
        id: 4,
        name: "slt23one",
        score: 12324,
      },
      {
        id: 5,
        name: "slton343e",
        score: 83732,
      },
    ];

    resolve(list);
  });
}
