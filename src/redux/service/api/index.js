import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiService = createApi({
  reducerPath: "api",
  tagTypes: ["Review", "Product"],
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001/api/" }),
  endpoints: (builder) => ({
    getHeadphones: builder.query({
      query: () => ({
        url: "products",
      }),
    }),
    getCodecsByProductId: builder.query({
      query: (productId) => ({
        url: "codecs",
        params: { productId },
      }),
    }),
    getReviewsByProductId: builder.query({
      query: (productId) => ({
        url: "reviews",
        params: { productId },
      }),
      providesTags: (result, _, headphoneId) =>
        result
          .map(({ id }) => ({ type: "Review", id }))
          .concat(
            { type: "Review", id: "All" },
            { type: "Product", id: headphoneId }
          ),
    }),
    createReview: builder.mutation({
      query: ({ headphoneId, newReview }) => ({
        url: `review/${headphoneId}`,
        method: "POST",
        body: newReview,
      }),
      invalidatesTags: (result, _, { headphoneId }) => [
        { type: "Review", id: headphoneId },
      ],
    }),
    updateReview: builder.mutation({
      query: ({ review }) => ({
        url: `review/${review.id}`,
        method: "PATCH",
        body: review,
      }),
      invalidatesTags: (result, _, { review }) => [
        { type: "Review", id: review.id },
      ],
    }),
  }),
});

export const {
  useGetHeadphonesQuery,
  useGetCodecsByProductIdQuery,
  useCreateReviewMutation,
  useGetReviewsByProductIdQuery,
  useUpdateReviewMutation,
} = apiService;
