import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {Api} from '../Utlies/constant/Api';

export const getBaseQuery = fetchBaseQuery({
  baseUrl: Api,
  prepareHeaders: (headers, {getState}) => {
    const token = getState().userSlice.accestoken;
    headers.set('Accept', 'application/json');
    if (token) {
      headers.set('Authorization', `Bearer ${token}`);
    }
    return headers;
  },
});
console.log(getBaseQuery);
export const getTrainerApis = createApi({
  baseQuery: getBaseQuery,
  endpoints: builder => ({
    contectus: builder.mutation({
      //   query: (params) => `your/endpoint?param1=${params.param1}&param2=${params.param2}`,

      //   and how we can get in UI
      //    const { data, error, isLoading } = useGetDataWithParamsQuery({ param1: 'value1', param2: 'value2' });
      query(body) {
        return {
          method: 'POST',
          url: `user/contact-admin`,
          body: body,
        };
      },
    }),
    getEquipmentdata: builder.query({
      //   query: (params) => `your/endpoint?param1=${params.param1}&param2=${params.param2}`,

      //   and how we can get in UI
      //    const { data, error, isLoading } = useGetDataWithParamsQuery({ param1: 'value1', param2: 'value2' });
      query(id) {
        return {
          method: 'GET',
          url: `user/getMe/${id}`,
        };
      },
    }),

    updateEquipmentdata: builder.mutation({
      query(id, data) {
        console.log(data, 'datamutation', '====>>>', id);

        // console.log('first', ...payload, '==>>>>', id);
        return {
          method: 'PATCH',
          url: `user/updateMe/${id}`,
          body: data,
        };
      },
    }),
    getEquipment: builder.query({
      query() {
        // console.log(data, 'datamutation', '====>>>', id);

        // console.log('==>>>>query id', id);
        return {
          method: 'GET',
          url: `admin/equipment`,
        };
      },
    }),
  }),
});

export const {
  useGetEquipmentdataQuery,
  useUpdateEquipmentdataMutation,
  useGetEquipmentQuery,
  useContectusMutation,
} = getTrainerApis;
