import Vue from 'vue';
import axios from 'axios';

const state = Vue.observable({
  message: 'hello',
  cardItems1: [],
  cardItems2: [],
});

const colors = [
  'red',
  'pink',
  'purple',
  'deep-purple',
  'indigo',
  'blue',
  'light-blue',
  'cyan',
  'teal',
  'green',
  'light-green',
  'lime',
  'yellow',
  'amber',
  'orange',
  'deep-orange',
  'brown',
  'blue-grey',
  'grey',
];

export function getMessage() {
  return state.message;
}

export function changeMessage(v) {
  state.message = v;
}

export async function loadSampleCardItems1() {
  if (state.cardItems1 && state.cardItems1.length) {
    return;
  }
  state.cardItems1 = [
    {
      title: 'quidem molestiae enim',
      image: 'https://images.unsplash.com/photo-1618946362539-ceebdb11dea4?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjE5MDk4NzUw&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=200',
      color: 'teal darken-4',
    },
    {
      title: 'natus impedit quibusdam illo est',
      image: 'https://images.unsplash.com/photo-1618979139194-315bc2a0a462?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjE5MDk4NzUx&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=200',
      color: 'red darken-4',
    },
    {
      title: 'sunt qui excepturi placeat culpa',
      image: 'https://images.unsplash.com/photo-1618988727281-8d54f5d32932?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjE5MDk4NzUz&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=200',
      color: 'amber darken-4',
    },
    {
      title: 'eaque aut omnis a',
      image: 'https://images.unsplash.com/photo-1618972078577-80ad6b66fd72?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjE5MDk4NzU0&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=200',
      color: 'grey darken-4',
    },
    {
      title: 'distinctio laborum qui',
      image: 'https://images.unsplash.com/photo-1618961580775-4dc0ed03e434?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjE5MDk4NzU1&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=200',
      color: 'red darken-4',
    },
    {
      title: 'omnis laborum odio',
      image: 'https://images.unsplash.com/photo-1618974692192-b14a3fa46b6f?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjE5MDk4NzU3&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=200',
      color: 'yellow darken-4',
    },
    {
      title: 'quibusdam autem aliquid et et quia',
      image: 'https://images.unsplash.com/photo-1618940297480-6380da9e4c41?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjE5MDk4NzU4&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=200',
      color: 'purple darken-4',
    },
    {
      title: 'saepe unde necessitatibus rem',
      image: 'https://images.unsplash.com/photo-1618981715825-7acf69f1d38d?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjE5MDk4NzU5&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=200',
      color: 'deep-purple darken-4',
    },
    {
      title: 'non esse culpa molestiae omnis sed optio',
      image: 'https://images.unsplash.com/photo-1618961580775-4dc0ed03e434?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjE5MDk4NzYw&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=200',
      color: 'indigo darken-4',
    },
    {
      title: 'qui fuga est a eum',
      image: 'https://images.unsplash.com/photo-1618977231171-7ceabfcd198d?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjE5MDk4NzYy&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=200',
      color: 'teal darken-4',
    },
  ];
}

export async function loadSampleCardItems2() {
  if (state.cardItems2 && state.cardItems2.length) {
    return;
  }
  const usedUrls = {};
  const textDataResponse = await axios.get(
    'https://jsonplaceholder.typicode.com/albums',
  );
  await Promise.all(
    Array.from(Array(10).keys()).map(async (i) => {
      let colorDataResponse = null;
      // eslint-disable-next-line no-constant-condition
      while (true) {
        // eslint-disable-next-line no-await-in-loop
        colorDataResponse = await fetch(
          'https://source.unsplash.com/random/200x200/?nature',
        );
        if (!usedUrls[colorDataResponse.url]) {
          usedUrls[colorDataResponse.url] = true;
          break;
        }
        // eslint-disable-next-line no-await-in-loop
        await new Promise(r => setTimeout(r, 100));
      }

      let color = null;
      // eslint-disable-next-line no-constant-condition
      while (true) {
        color =
          `${colors[Math.floor(Math.random() * colors.length)]} darken-4`;
        if (state.cardItems2.length <= 1) {
          break;
        }
        if (state.cardItems2[state.cardItems2.length - 1].color !== color) {
          break;
        }
      }
      state.cardItems2.push({
        title: textDataResponse.data[i].title,
        image: colorDataResponse.url,
        color,
      });
    }),
  );
}

export function getCardItems1() {
  return state.cardItems1;
}

export function getCardItems2() {
  return state.cardItems2;
}

export default {
  getMessage,
  changeMessage,
  loadSampleCardItems1,
  loadSampleCardItems2,
  getCardItems1,
  getCardItems2,
};
