import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const PackEditorApi = createApi({
  reducerPath: 'pack-editor/api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://myowlgame.loc/api/packedit'
  }),
  tagTypes: ['Pack', 'Round', 'Theme', 'Question'],
  endpoints: build => ({
    getPack: build.query<TPack, number>({
      query: (packId: number) => `pack/${packId}`,
      providesTags: result => ['Pack']
    }),
    getRounds: build.query<TRound[], number>({
      query: (packId: number) => `pack/${packId}/rounds`,
      providesTags: result => ['Round']
    }),
    addRound: build.mutation<TRound, { packId: number, round: Partial<TRound> }>({
      query: ({ packId, round }) => (
        {
          url: `pack/${packId}/rounds`,
          method: 'PUT',
          body: round
        }
      ),
      invalidatesTags: result => ['Round']
    }),
    deleteRound: build.mutation<void, number>({
      query: (roundId) => (
        {
          url: `round/${roundId}`,
          method: 'DELETE'
        }
      ),
      invalidatesTags: result => ['Round']
    }),
    getThemes: build.query<TTheme[], number>({
      query: (roundId: number) => `round/${roundId}/themes`,
      providesTags: result => ['Theme']
    }),
  }),
});

export const { useGetPackQuery, useGetRoundsQuery, useAddRoundMutation, useDeleteRoundMutation, useGetThemesQuery } = PackEditorApi;