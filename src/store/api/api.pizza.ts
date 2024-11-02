import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IPizza } from '../../types/IPizza';
import { ICategories } from '../../types/ICategories';

export const pizzaApi = createApi({
    reducerPath: 'pizzaApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://671bc37d2c842d92c3813953.mockapi.io/' }),
    endpoints: (builder) => ({
        fetchPizza: builder.query<IPizza[], number>({
            query: (page: number = 1, limit: number = 6) => ({
                url: '/pizza',
                params: {
                    page: page,
                    limit: limit
                }
            })
        }),
        fetchCategories: builder.query<ICategories[], undefined>({
            query: () => ({
                url: '/categories'
            })
        })
    })
})

export const { useFetchCategoriesQuery, useFetchPizzaQuery } = pizzaApi