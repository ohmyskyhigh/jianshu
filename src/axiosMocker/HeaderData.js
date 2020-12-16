import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';

export const hotSearch = ()=>{
  var mock = new MockAdapter(axios);
  mock.onGet('/hotsearch').reply(200,
  ['教育', '阿囧', 'go', '我是谁', 'tantan', 'omg', 'mama', 'gogogo', 'ggwp'])
  return mock;
}
