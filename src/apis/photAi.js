import axios from 'axios';
import {ApiError} from '#utils';
import config from '#config';

const instance = axios.create({
  baseURL: config.photai.uri,
  headers: {
    'x-api-key': config.photai.api_key,
    'Content-Type': 'application/json',
  },
});

const objectRemover = async ({ sourceUrl, maskImage }) => {
  try {
    const payload = {
      input_image_link: sourceUrl,
      mask_image: maskImage,
    };
    const { data } = await instance.post(
      '/user_activity/object-replacer',
      payload
    );

    return data;
  } catch (error) {
    console.log('Error in objectRemove:', error?.response?.data);
    const { status = 500, message = 'Internal server error' } =
      error?.response?.data;
    throw new ApiError(message, status);
  }
};

export default {
  objectRemover,
}
