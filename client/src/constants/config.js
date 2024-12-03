import axios from 'axios';

export const API_NOTIFICATION_MESSAGES = {
  loading: {
    title: 'Loading...',
    message: 'Data is being loaded, please wait.'
  },
  success: {
    title: 'Success',
    message: 'Data loaded successfully.'
  },
  responseFailure: {
    title: 'Error',
    message: 'Failed to load data, please try again.'
  },
  requestFailure: {
    title: 'Error',
    message: 'Failed to send request, please try again.'
  },
  networkError: {
    title: 'Error',
    message: 'Network error, please check your connection.'
  }
};


const BASE_URL = 'http://localhost:3000'; 


const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});


axiosInstance.interceptors.response.use(
  response => response,
  error => {
    console.error('API Response Error:', {
      message: error.message,
      data: error.response?.data,
      status: error.response?.status,
    });
    return Promise.reject(error);
  }
);


export const SERVICE_URL = {
  userSignup: {
    method: 'POST',
    url: '/signup', 
    responseType: 'json'
  },
  userLogin: { 
    url: '/login', 
    method: 'POST',
    responseType: 'json'
  },
};


const apiRequest = async (service, data) => {
  try {
    const { url, method } = service;
    const response = await axiosInstance({ url, method, data });
    return response.data;
  } catch (error) {
    const message = error.response?.data?.msg || API_NOTIFICATION_MESSAGES.responseFailure.message;
    throw new Error(message);
  }
};

export const userSignup = async (data) => {
    try {
      console.log("userLogin function is running");
      return await apiRequest(SERVICE_URL.userSignup, data); 
    } catch (error) {
      console.error('Signup API call failed:', error.message);
      throw error; 
    }
  };

export const userLogin = async (data) => {
    try {
      console.log("userLogin function is running");
      return await apiRequest(SERVICE_URL.userLogin, data); 
    } catch (error) {
      console.error('Login API call failed:', error.message);
      throw error; 
    }
  };


