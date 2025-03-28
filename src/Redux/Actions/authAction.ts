import {createAsyncThunk} from '@reduxjs/toolkit';
import {Platform} from 'react-native';
import ApiRequest from '../../services/ApiServices';
import { actionNames, END_POINTS } from '../../utils';
import { authAction } from '../Slices/authslice';
import { API_STATUS } from '../../modals';
import { ApiMethods } from '../../services';
// import {snackBarRef} from '_navigations/navigationServices';

export interface UserCredentials {
  countryCode: string;
  phoneNo: string;
  type: string;
  deviceName: string;
  browser: string;
  region: string;
}

export interface loginActionResponse {
  statusCode: number;
  type: string;
  message: string;
}
export interface registerData {
  firstName: string;
  lastName: string;
  phoneNo: string;
  email: string;
  country: string;
  countryCode: string;
  deviceId: string;
  deviceToken: string;
  deviceName: string;
}

export interface otpVerification {
  type: string;
  phoneNo: string;
  otp: string;
  deviceId: string;
}

interface RegisterResponse {
  data: {
    _id: string;
    email: string;
    phoneNo: string;
  };
  message: string;
  statusCode: number;
  type: string;
}

export interface OtpVerificationResponse {
  statusCode: number;
  type: string;
  data: {
    accessToken: string;
  };
  message: string;
}

export interface resendOtpActionResponse {
  statusCode: number;
  type: string;
  message: string;
}

export interface resendOtp {
  countryCode: string;
  phoneNo: string;
  type: string;
  deviceName: string;
  browser: string;
  region: string;
}

export interface updateUserCategoryResponse {
  statusCode: number;
  type: string;
  data: {
    profilePicture: string;
    enabled2FA: boolean;
    isBiometricEnrolled: boolean;
    status2FA: boolean;
    isEmailVerified: boolean;
    isPhoneVerified: boolean;
    department: any; //[]
    position: any; //[]
    status: string; //UN_BLOCKED
    userType: string; //USER
    lastLogin: number;
    _id: string; //65449e7914a1410008f5f0ba
    firstName: string;
    lastName: string;
    phoneNo: string;
    email: string;
    country: string;
    countryCode: string;
    deviceName: string;
    lastActiveAt: number;
    created: number;
    createdAt: string;
    updatedAt: string;
  };
  message: string;
}

export interface updateDataParams {
  // userId: string;
  employerType: string;
  employerDetails?: string;
  department: string[];
  position: string[];
}

export interface companyDetails {
  _id: string;
  empImage: string;
  empName: string;
  created: number;
}

export interface companyListResponse {
  statusCode: number;
  type: string;
  data: companyDetails[];
  message: string;
}

export interface companyParams {
  type: string;
  searchKey: string;
}

export interface DepartmentData {
  _id: string;
  deptImage: string;
  deptName: string;
  created: number;
}

export interface departmentDataResponse {
  statusCode: number;
  type: string;
  data: DepartmentData[];
  message: string;
}

export interface departmentParams {
  searchKey: string;
}

export interface positionSearch {
  deptIds: string;
  searchKey: string;
}

export interface uploadImageProfile {
  profilePicture: string;
}

export const loginAction = createAsyncThunk<
  loginActionResponse,
  UserCredentials
>(actionNames.loginAction, async (params: UserCredentials, thunkAPI: any) => {
  try {
    const response = await ApiRequest({
      method: 'POST',
      url: END_POINTS.login,
      data: params,
      headers: {
        language: 'en',
        api_key: '1234',
        accept: 'application/json',
        'Content-Type': 'application/json',
        offset: new Date().getTimezoneOffset(),
        authorization: 'Basic cmVlbDpyZWVsQDEyMw==',
        platform: Platform.OS === 'android' ? '1' : '2',
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      },
    });
    return response;
  } catch (error) {
    console.log('error error', error);
    return thunkAPI.rejectWithValue(error);
  }
});

export const registerAction = createAsyncThunk<RegisterResponse, registerData>(
  actionNames.registerAction,
  async (params: registerData, thunkAPI: any) => {
    try {
      const response = await ApiRequest({
        method: 'POST',
        url: END_POINTS.register,
        data: params,
        headers: {
          language: 'en',
          API_KEY: '1234',
          accept: 'application/json',
          'Content-Type': 'application/json',
          offset: new Date().getTimezoneOffset(),
          authorization: 'Basic cmVlbDpyZWVsQDEyMw==',
          platform: Platform.OS === 'android' ? '1' : '2',
          timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
        },
      });
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export const otpVerificationAction = createAsyncThunk<
  OtpVerificationResponse,
  otpVerification
>(
  actionNames.otpVerificationAction,
  async (params: otpVerification, thunkAPI: any) => {
    try {
      const response = await ApiRequest({
        method: 'POST',
        url: END_POINTS.otpVerification,
        data: params?.params,
       //data: params, //this is for bypass otp verification
      });
      return response;
    } catch (error) {
      console.log('response response', error);
      params?.callback && params?.callback(error);
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export const resendOtpAction = createAsyncThunk<
  resendOtpActionResponse,
  resendOtp
>(actionNames.resendOtpAction, async (params: resendOtp, thunkAPI: any) => {
  try {
    const response = await ApiRequest({
      method: 'POST',
      url: END_POINTS.resendOtp,
      maxBodyLength: Infinity,
      data: params,
      headers: {
        accept: 'application/json',
        platform: '1',
        timezone: '0',
        language: 'en',
        offset: '0',
        'Content-Type': 'application/json',
        Authorization: 'Basic cmVlbDpyZWVsQDEyMw==',
      },
    });
    return response;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

export const addUpdateUserCategory = createAsyncThunk<
  updateUserCategoryResponse,
  updateDataParams
>(
  actionNames.addUpdateUserCategory,
  async (params: updateDataParams, thunkAPI: any) => {
    try {
      const response = await ApiRequest({
        method: 'POST',
        url: END_POINTS.updateUserCategory,
        data: params,
        headers: {
          authorization: `Bearer ${ApiRequest.defaults.headers.common.Authorization}`,
        },
      });
      return response;
    } catch (error) {
      console.log('error error', error?.response);
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export const companyListAction = createAsyncThunk<
  companyListResponse,
  companyParams
>(
  actionNames.companyListAction,
  async (params: companyParams, thunkAPI: any) => {
    try {
      const response = await ApiRequest({
        method: 'GET',
        url:
          params?.searchKey?.length > 0
            ? END_POINTS.companyDetails +
              `?type=${params.type}&searchKey=${params?.searchKey}`
            : END_POINTS.companyDetails + `?type=${params.type}`,
        headers: {
          accept: 'application/json',
          platform: Platform.OS === 'android' ? '1' : '2',
          timezone: '0',
          language: 'en',
          offset: new Date().getTimezoneOffset(),
          'Content-Type': 'application/json',
          API_KEY: '1234',
          authorization: `Bearer ${ApiRequest.defaults.headers.common.Authorization}`,
        },
      });
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export const departmentListAction = createAsyncThunk<
  departmentDataResponse,
  departmentParams
>(
  actionNames.departmentListAction,
  async (params: departmentParams, thunkAPI: any) => {
    try {
      const response = await ApiRequest({
        method: 'GET',
        url:
          params?.searchKey?.length > 0
            ? `${END_POINTS.departmentList}?searchKey=${encodeURIComponent(
                params.searchKey,
              )}`
            : END_POINTS.departmentList,
        headers: {
          authorization: `Bearer ${ApiRequest.defaults.headers.common.Authorization}`,
        },
      });
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export const positionListAction = createAsyncThunk<
  departmentDataResponse,
  positionSearch
>(
  actionNames.positionListAction,
  async (params: positionSearch, thunkAPI: any) => {
    try {
      const response = await ApiRequest({
        method: 'GET',
        url:
          params?.searchKey?.length > 0
            ? `${END_POINTS.positionList}?deptIds=${
                params?.deptIds
              }&searchKey=${encodeURIComponent(params?.searchKey)}`
            : `${END_POINTS.positionList}?deptIds=${params?.deptIds}`,
        headers: {
          accept: 'application/json',
          platform: Platform.OS === 'android' ? '1' : '2',
          timezone: '0',
          language: 'en',
          offset: new Date().getTimezoneOffset(),
          'Content-Type': 'application/json',
          API_KEY: '1234',
          authorization: `Bearer ${ApiRequest.defaults.headers.common.Authorization}`,
        },
      });
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export const uploadProfileAction = createAsyncThunk<
  departmentDataResponse,
  uploadImageProfile
>(
  actionNames.uploadProfileAction,
  async (params: uploadImageProfile, thunkAPI: any) => {
    try {
      const response = await ApiRequest({
        method: 'PUT',
        url: END_POINTS.uploadImage,
        data: params,
        headers: {
          accept: 'application/json',
          platform: Platform.OS === 'android' ? '1' : '2',
          timezone: '0',
          language: 'en',
          offset: new Date().getTimezoneOffset(),
          'Content-Type': 'application/json',
          API_KEY: '1234',
          authorization: `Bearer ${ApiRequest.defaults.headers.common.Authorization}`,
        },
      });
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export const logoutAction = createAsyncThunk<any, any>(
  actionNames.logoutAction,
  async (params: any, thunkAPI: any) => {
  //write your code here
  },
);

export const getContactUs = createAsyncThunk<any, any>(
  actionNames.staticContent,
  async (params: any, thunkApi) => {
    const {successCallback, errorCallback} = params;
    try {
      const apiResult: any = await ApiMethods.getApiCall(
        `${END_POINTS.contactUs}`,
      );
      const {data, statusCode} = apiResult;
      if (statusCode == API_STATUS.SUCCESS && data?.length) {
        const {contact = [], email = []} = data[0];
        const result = {
          countryCode: contact.length ? contact[0].countryCode : '',
          phoneNumber: contact.length ? contact[0].phoneNumber : '',
          email: email.length ? email[0] : '',
        };
        thunkApi.dispatch(authAction.updateContactUs(result));
        successCallback(result);
      } else errorCallback();
    } catch (error) {
      thunkApi.dispatch(
        authAction.updateContactUs({
          countryCode: '',
          phoneNumber: '',
          email: '',
        }),
      );
      errorCallback();
      return thunkApi.rejectWithValue(error);
    }
  },
);

export const getFaq = createAsyncThunk<any, any>(
  actionNames.staticContent,
  async (params: any, thunkApi) => {
    try {
      const apiResult: any = await ApiMethods.getApiCall(`${END_POINTS.faq}`);
      const {statusCode, data} = apiResult;
      if (statusCode === API_STATUS.SUCCESS) {
        params.callback && params.callback(data);
      }
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  },
);
