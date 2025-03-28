
import { API_STATUS } from '../modals';
import ApiRequest from './ApiServices';

/**
 *
 * @param endPoint api end point
 * @param params request data
 * @param successCallback function for handle success response
 * @param errorCallback  function for handle error response
 */
export const postApiCall = async (endPoint: string, params: any) => {
  try {
    const apiResult: any = await ApiRequest.post(endPoint, params);
    if (apiResult) {
      const {statusCode, message, data, msg} = apiResult;
      return statusCode == API_STATUS.SUCCESS ||
        statusCode == API_STATUS.CREATED
        ? {message, data, msg, statusCode}
        : {message, data: null, msg: '', statusCode};
    }
    throw apiResult;
  } catch (error) {
    return error;
  }
};

/**
 *
 * @param endPoint api end point
 * @param params api url parameter
 * @param successCallback function for handle success response
 * @param errorCallback function for handle error response
 */
export const getApiCall = async (endPoint: string, params = '') => {
  try {
    const apiResult: any = await ApiRequest.get(endPoint + params);
    console.log(':::: api endPoint', endPoint);
    console.log(':::: api Result', {apiResult, params});
    if (apiResult) {
      const {statusCode, message, data} = apiResult;
      return statusCode == API_STATUS.SUCCESS
        ? {message, data, statusCode}
        : {message, data: null};
    }
    throw new Error(apiResult);
  } catch (error) {
    return error;
  }
};

/** ******************************************************************************************* */
/**
 *
 * @param endPoint api end point
 * @param params api request data
 */
export const deleteApiCall = async (
  endPoint: string,
  params = '',
  data?: any,
) => {
  try {
    const apiResult: any = await ApiRequest.delete(endPoint + params, {
      data: data,
    });
    if (apiResult) {
      const {statusCode, message, data} = apiResult;
      return statusCode == API_STATUS.SUCCESS
        ? {message, data, statusCode}
        : {message, data: null, statusCode};
    }
    throw new Error(apiResult);
  } catch (error) {
    return error;
  }
};

/**
 *
 * @param endPoint api end point
 * @param params api request data
 * @param successCallback function for handle success response
 * @param errorCallback function for handle error response
 */
export const putApiCall = async (endPoint: string, params = '') => {
  try {
    const apiResult: any = await ApiRequest.put(endPoint, params);
    if (apiResult) {
      const {statusCode, message, data} = apiResult;
      return statusCode == API_STATUS.SUCCESS ||
        statusCode == API_STATUS.PUT_SUCCESS
        ? {message, data, statusCode}
        : {message, data: null, statusCode};
    }
    throw new Error(apiResult);
  } catch (error) {
    return error;
  }
};

/**
 *
 * @param endPoint api end point
 * @param params api request data
 * @param successCallback function for handle success response
 * @param errorCallback function for handle error response
 */
export const patchApiCall = async (endPoint: string, params = '') => {
  try {
    const apiResult: any = await ApiRequest.patch(endPoint, params);
    if (apiResult) {
      const {statusCode, message, data} = apiResult;
      return statusCode == API_STATUS.SUCCESS ||
        statusCode == API_STATUS.PATCH_SUCCESS
        ? {message, data, statusCode}
        : {message, data: null, statusCode};
    }
    throw new Error(apiResult);
  } catch (error) {
    return error;
  }
};

export default {
  putApiCall,
  deleteApiCall,
  getApiCall,
  postApiCall,
  patchApiCall,
};
