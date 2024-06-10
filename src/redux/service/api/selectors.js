export const selectHeadphoneFromResult = (headphoneId) => (result) => ({
  ...result,
  data: result.data?.find(({ id }) => id === headphoneId),
});
