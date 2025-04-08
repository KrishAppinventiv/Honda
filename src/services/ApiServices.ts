import {Platform} from 'react-native';
import axios, {AxiosError, AxiosRequestConfig, AxiosResponse} from 'axios';
 import {store} from '../store';
import { authAction } from '../Redux/Slices/authslice';
import { CommonFunctions } from '../utils';
import { ReducerModal } from '../modals';

const getServiceUrls = (env = 'DEV') => {
  switch (env) {
    case 'DEV':
      return {
        // keyPrefix: 'reel-track-dev/',
        API_URL: '3003',
        GOOGLE_API_KEY: '',
      };
    
  }
};

export const SERVICE_URLS = getServiceUrls('DEV');
/**f
 * setup axios instance
 */
const ApiRequest = axios.create({
  baseURL: SERVICE_URLS.API_URL,
  timeout: 30000,
  headers: {
    language: 'en',
    server_key: 'C6GRh7CX1k3x6n4ahVTrjDKS918psPby',
    accept: 'application/json',
    'Content-Type': 'application/json',
    offset: new Date().getTimezoneOffset() * 60 * 1000,
    authorization: 'Basic aG9uZGEyMDI1OmhvbmRhQDIwMjU=',
    platform: Platform.OS === 'android' ? '1' : '2',
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
  },
});

ApiRequest.interceptors.request.use(
  (config: any) => {
    const getState = store?.getState();
    config.metadata = {startTime: new Date()};
    // console.log('request url', config.url);
    if (getState) {
      const token =
        getState.authReducer?.otpVerificationResponseData?.data?.accessToken;
      console.log(token);
      config['headers'] = {
        ...config.headers,
        authorization: 'Basic cmVlbDpyZWVsQDEyMw==',
      };
      if (config.url.includes('static-content')) {
        config['headers'] = {
          ...config.headers,
          authorization: 'Basic cmVlbDpyZWVsQDEyMw==',
        };
      } else if (token) {
        console.log('check user token', token);

        config['headers'] = {
          ...config.headers,
          authorization: 'Bearer ' + token,
        };
      }

      return config;
    }
    return config;
  },
  error => Promise.reject(error),
);

const onResponse = (response: AxiosResponse): AxiosResponse => {
  console.log('onResponse', response.config.url, response);
  response.config.metadata.endTime = new Date();
  response.duration =
    response.config.metadata.endTime - response.config.metadata.startTime;
  return response.data;
};

const onErrorResponse = (error: AxiosError | Error): Promise<AxiosError> => {
  console.log('🚀 ~ onErrorResponse ~ error:', error);
  if (axios.isAxiosError(error)) {
    const {message} = error;
    const {method, url} = error.config as AxiosRequestConfig;
    const {status, data} = (error.response as AxiosResponse) ?? {};

    switch (status) {
      case 400: {
        // const myStore: ReducerModal = store.getState();
        // if (myStore?.authReducer?.otpVerificationResponseData?.data) {
        //   store.dispatch(authAction.removeOtpData({}));
        //   dispatch(authAction.logout({}));
        // }
        break;
      }
      case 401: {
        const myStore: ReducerModal = store.getState();
        console.log('myStore', myStore);
        if (
          myStore?.authReducer?.otpVerificationResponseData?.data?.accessToken
        ) {
          CommonFunctions.logoutFireBaseUser();
          store.dispatch(authAction.removeOtpData({}));
          store.dispatch(authAction.logout({}));
          // navigationRef?.current?.reset({
          //   index: 0,
          //   routes: [{name: screenNames.LOGIN_SCREEN}],
          // });
          // if (snackBarRef && snackBarRef.current && data?.message) {
          //   snackBarRef.current?.showToast({
          //     type: ToastOptionType.ERROR,
          //     message: 'UNAUTHORIZED ACCESS',
          //   });
          // }
        }
        console.log('401 || UNAUTHORIZED ACCESS');
        break;
      }
      case 403: {
        console.log('403 || ERROR');
        break;
      }
      case 404: {
        console.log('404 || API NOT FOUND');
        break;
      }
      case 500: {
        console.log('500 || SERVER ERROR');
        break;
      }
      default: {
        console.log('Network Error');
        break;
      }
    }
  }
  return Promise.reject(error);
};

ApiRequest.interceptors.response.use(onResponse, onErrorResponse);

/**
 * export all function
 */
export default ApiRequest;
