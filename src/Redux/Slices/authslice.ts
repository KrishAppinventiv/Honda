import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { loginAction, otpVerificationAction, OtpVerificationResponse, resendOtpAction, resendOtpActionResponse } from '../Actions/authAction';
import { ApiRequest } from '../../services';
import { STRINGS } from '../../utils';

export const authAdapter = createEntityAdapter();
export const AUTH_SLICE = 'authSlice';
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
export const initialState = authAdapter.getInitialState({
  // registerLoading: STRINGS.notLoading,
  // otpVerificationLoading: STRINGS.notLoading,
  // resendOtpLoading: STRINGS.notLoading,
  // updateUserCategoryLoading: STRINGS.notLoading,
  // loginLoading: STRINGS.notLoading,
  // companyListLoading: STRINGS.notLoading,
  // departmentLoading: STRINGS.notLoading,
  // positionLoading: STRINGS.notLoading,
  // imageUploadLoading: STRINGS.notLoading,
  loginError: {},
  otpVerificationError: {},
  resendOtpError: {},
  updateUserCategoryError: {},
  registerError: {},
  companyListError: {},
  departmentError: {},
  positionError: {},
  imageUploadError: {},
  registerResponse: null as RegisterResponse | null,
  otpVerificationResponseData: null as OtpVerificationResponse | null,
  resendOtpResponse: null as resendOtpActionResponse | null,
  loginValue: {},
  isLogin: false,
  isProfileSelection: false,
  profileSetupStep: 0,
  privacyPolicy:'',
  termAndCondition :'',
  contactUs:{countryCode : '',phoneNumber : '',email:''}
});

export const authSlice = createSlice({
  name: AUTH_SLICE,
  initialState: initialState,
  reducers: {
    logout: (state, action) => {
      return initialState;
    },
    changeLogin: (state, action) => {
      return {
        ...state,
        isLogin: true,
      };
    },
    updateTermAndCondition: (state, action) => {
      return {
        ...state,
        termAndCondition:action.payload
      };
    },
    removeOtpData: (state, action) => {
      return initialState;
    },
    changeLanguage: (state, action) => {
      return {
        ...state,
        languageCode: action.payload,
      };
    },
  },
  extraReducers: builder => {
    builder
      .addCase(loginAction.pending, state => {
        state.loginLoading = STRINGS.loading;
      })
      .addCase(loginAction.fulfilled, (state, action) => {
        state.loginLoading = STRINGS.loaded;
        state.loginValue = action.payload;
      })
      .addCase(loginAction.rejected, (state, action) => {
        state.loginLoading = STRINGS.error;
        state.loginError = action.payload?.response?.data?.message;
      })
      .addCase(otpVerificationAction.pending, (state, action) => {
        state.otpVerificationLoading = STRINGS.loading;
      })
      .addCase(otpVerificationAction.fulfilled, (state, action) => {
        state.otpVerificationLoading = STRINGS.loaded;
        state.profileSetupStep = action.payload?.data?.isUserDetailsAdded
          ? 2
          : 0;
        state.otpVerificationResponseData = action.payload;
        ApiRequest.defaults.headers.common.Authorization =
          action.payload?.data?.accessToken;
      })
      .addCase(otpVerificationAction.rejected, (state, action) => {
        state.otpVerificationLoading = STRINGS.error;
        state.otpVerificationError = action.payload?.response?.data?.message;
      })
      .addCase(resendOtpAction.pending, (state, action) => {
        state.resendOtpLoading = STRINGS.loading;
      })
      .addCase(resendOtpAction.fulfilled, (state, action) => {
        state.resendOtpLoading = STRINGS.loaded;
        state.resendOtpResponse = action.payload;
      })
      .addCase(resendOtpAction.rejected, (state, action) => {
        state.resendOtpLoading = STRINGS.error;
        state.resendOtpError = action.payload?.response?.data?.message;
      })
  },
});

export const authAction = authSlice.actions;
export const authReducer = authSlice.reducer;

export const getLoginValue = (state: any) => {
  return state.authReducer.loginValue;
};
