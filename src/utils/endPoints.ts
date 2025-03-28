export default {
  PreSignedURLGET: 'empty',
  login: '',
  register: '',
  otpVerification: 'user-service/reel/api/v1/user/verify-otp-with-firebase',
  resendOtp: 'user-service/reel/api/v1/user/resendOtp',
  updateUserCategory: 'user-service/reel/api/v1/user/user-details',
  positionList: 'user-service/reel/api/v1/user/role-list',
  uploadImage: 'user-service/reel/api/v1/user/edit-profileImage',
  staticContent: 'user-service/reel/api/v1/user/static-content?',
  contactUs: 'user-service/reel/api/v1/user/contact-info',
  faq: 'user-service/reel/api/v1/user/faqs',
  //Home Page
  bannerList: 'shop-service/reel/api/v1/app/banner',
  productList: 'shop-service/reel/api/v1/app/products',
  userDepartmentCategory:
    'shop-service/reel/api/v1/app/user-departments-categories',
  vendorDetails: 'shop-service/reel/api/v1/app/vendor?vendorId=',
  user: {
    logout: 'empty',
    deleteAccount: 'empty',
  },
  app: {
    homeScreenServiceList: 'shop-service/reel/api/v1/app/services',
    productList: 'shop-service/reel/api/v1/app/products',
    branchDetails: 'shop-service/reel/api/v1/app/branches',
    vendorProductList: 'shop-service/reel/api/v1/app/vendor-products',
    vendorServicesList: 'shop-service/reel/api/v1/app/vendor-services',
  },
  directionApi: 'https://maps.googleapis.com/maps/api/directions/json',
};
