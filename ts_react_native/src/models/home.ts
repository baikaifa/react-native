import { Model, Effect } from 'dva-core-ts'
import { Reducer } from 'redux'
import axios from '@/config/http'
// export interface HomeState {
//   num: number,
//   loading: boolean
// }

const CAROUSEL_URL = '/mock/11/carousel'

export interface ICarousel {
  id: string;
  image: string;
  colors: [string, string]
}
export interface HomeState {
  carousels: ICarousel[]
}
interface HomeModel extends Model {
  namespace: 'home';
  state: HomeState;
  reducers: {
    setState: Reducer<HomeState>
  };
  effects: {
    fetchCarousels: Effect;
  };
  // subscriptions?: SubscriptionsMapObject;
}
const initialState = {
  carousels: []
}


const homeModel: HomeModel = {
  namespace: 'home',
  state: initialState,
  reducers: {
    setState(state = initialState, { payload }) {
      return {
        ...state,
        ...payload
      }
    }
  },
  effects: {
    *fetchCarousels(_, { call, put }) {
   
      fetch('http://127.0.0.1:3003/mock/11/carousel').then((data) => {
        console.log(data)
      })
      // const { data } = yield call(axios.get, CAROUSEL_URL)
      // yield put({
      //   type: 'setState',
      //   payload: {
      //     carousels: data
      //   }
      // })
    }
  }
}

export default homeModel