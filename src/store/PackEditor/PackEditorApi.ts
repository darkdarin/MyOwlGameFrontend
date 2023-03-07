import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const PackEditorApi = createApi({
  reducerPath: 'pack-editor/api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://myowlgame.loc/api/packedit'
  }),
  tagTypes: ['Pack', 'Round', 'Theme', 'Question'],
  endpoints: build => ({
    getPacks: build.query<TPack, any>({
      query: () => `pack`,
      providesTags: result => ['Pack']
    }),
    getPack: build.query<TPack, number>({
      query: (packId: number) => `pack/${packId}`,
      providesTags: result => ['Pack']
    }),
    addPack: build.mutation<TPack, Partial<TPack>>({
      query: (pack) => (
        {
          url: `pack`,
          method: 'PUT',
          body: pack
        }
      ),
      invalidatesTags: result => ['Pack']
    }),
    updatePack: build.mutation<TPack, TPack>({
      query: (pack) => (
        {
          url: `pack/${pack.id}`,
          method: 'POST',
          body: pack
        }
      ),
      invalidatesTags: result => ['Pack']
    }),
    deletePack: build.mutation<void, number>({
      query: (packId) => (
        {
          url: `pack/${packId}`,
          method: 'DELETE'
        }
      ),
      invalidatesTags: result => ['Pack']
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
    updateRound: build.mutation<TRound, TRound>({
      query: (round) => (
        {
          url: `round/${round.id}`,
          method: 'POST',
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
    addTheme: build.mutation<TTheme, { roundId: number, theme: Partial<TTheme> }>({
      query: ({ roundId, theme }) => (
        {
          url: `round/${roundId}/themes`,
          method: 'PUT',
          body: theme
        }
      ),
      invalidatesTags: result => ['Theme']
    }),
    updateTheme: build.mutation<TTheme, TTheme>({
      query: (theme) => (
        {
          url: `theme/${theme.id}`,
          method: 'POST',
          body: theme
        }
      ),
      invalidatesTags: result => ['Theme']
    }),
    deleteTheme: build.mutation<void, number>({
      query: (themeId) => (
        {
          url: `theme/${themeId}`,
          method: 'DELETE'
        }
      ),
      invalidatesTags: result => ['Theme']
    }),
    getQuestions: build.query<TQuestion[], number>({
      query: (themeId: number) => `round/${themeId}/themes`,
      providesTags: result => ['Question']
    }),
    addQuestion: build.mutation<TQuestion, { themeId: number, question: Partial<TQuestion> }>({
      query: ({ themeId, question }) => (
        {
          url: `theme/${themeId}/questions`,
          method: 'PUT',
          body: question
        }
      ),
      invalidatesTags: result => ['Question']
    }),
    updateQuestion: build.mutation<TQuestion, Partial<TQuestion>>({
      query: (question) => (
        {
          url: `question/${question.id}`,
          method: 'POST',
          body: question
        }
      ),
      invalidatesTags: result => ['Question']
    }),
    deleteQuestion: build.mutation<void, number>({
      query: (questionId) => (
        {
          url: `question/${questionId}`,
          method: 'DELETE'
        }
      ),
      invalidatesTags: result => ['Question']
    })
  })
});

export const {
  useGetPacksQuery,
  useGetPackQuery,
  useAddPackMutation,
  useUpdatePackMutation,
  useDeletePackMutation,
  useGetRoundsQuery,
  useAddRoundMutation,
  useUpdateRoundMutation,
  useDeleteRoundMutation,
  useGetThemesQuery,
  useAddThemeMutation,
  useUpdateThemeMutation,
  useDeleteThemeMutation,
  useGetQuestionsQuery,
  useAddQuestionMutation,
  useUpdateQuestionMutation,
  useDeleteQuestionMutation
} = PackEditorApi;