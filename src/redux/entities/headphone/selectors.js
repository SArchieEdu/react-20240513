export const selectHeadphoneModule = (state) => state.headphone;

export const selectHeadphoneById = (state, id) =>
  selectHeadphoneModule(state).entities[id];

export const selectHeadphoneIds = (state) => selectHeadphoneModule(state).ids;

export const selectHeadphoneCodecIds = (state, id) =>
  selectHeadphoneById(state, id)?.codecs;
