import axiosInstance from '../../utils/axios';
import ApiConfig from '../ApiConfig';
import {Constant} from '../Theme';
import {commonConstant} from '../Theme/Constants';
// import {getData} from '@/utils/storage';

export const axiosPost = async (
  url,
  data,
  contentType = 'application/json',
) => {
  let response = {};
  let header = {};
  header = {
    'Content-Type': contentType,
    Accept: '*/*',
    ...(commonConstant.isLoggedIn && {
      Authorization: ApiConfig.headers.Authorization,
    }),
  };

  try {
    const result = await axiosInstance.post(url, data, {
      headers: header,
    });
    console.log('result', result.data);

    response.data = result.data;
    response.status = [200, 201].includes(result.status);
  } catch (e) {
    response.status = false;
    response.message = e?.response?.data?.detail;
    response.data = e?.response?.data || e;
  }
  return response;
};
export const axiosGet = async (
  url,
  params = {},
  contentType = 'application/json',
) => {
  let response = {};
  let header = {};

  header = {
    'Content-Type': contentType,
    Accept: '*/*',
    ...(commonConstant.isLoggedIn && {
      Authorization: ApiConfig.headers.Authorization,
    }),
  };

  try {
    const result = await axiosInstance.get(url, {
      headers: header,
      params,
    });

    response.data = result.data;
    response.status = [200, 201].includes(result.status);
  } catch (e) {
    response.status = false;
    response.message = 'something went wrong';
    response.data = e;
  }
  return response;
};

export const axiosPatch = async (
  url,
  data,
  contentType = 'application/json',
) => {
  let response = {};
  let header = {};

  header = {
    'Content-Type': contentType,
    Accept: '*/*',
    ...(commonConstant.isLoggedIn && {
      Authorization: ApiConfig.headers.Authorization,
    }),
  };
  try {
    const result = await axiosInstance.patch(url, data, {
      headers: header,
    });
    response = result.data;
    response.status = result.data?.status || [200, 201].includes(result.status);
  } catch (e) {
    response.status = false;
    response.message =
      e?.response?.data?.detail ||
      e?.response?.data?.details ||
      'something went wrong';
    response.data = e;
  }
  return response;
};

export const axiosPut = async (url, data, contentType = 'application/json') => {
  let response = {};
  let header = {};
  header = {
    'Content-Type': contentType,
    Accept: '*/*',
    Accept: '*/*',
    ...(commonConstant.isLoggedIn && {
      Authorization: ApiConfig.headers.Authorization,
    }),
  };
  try {
    const result = await axiosInstance.put(url, data, {
      headers: header,
    });
    response = result.data;
    response.status = [200, 201].includes(result.status);
  } catch (e) {
    response.status = false;
    response.message = 'something went wrong';
    response.data = e;
  }
  return response;
};

export const axiosDelete = async (
  url,
  data,
  contentType = 'application/json',
) => {
  let response = {};
  let header = {};
  // const token = getData('token');
  // const userAuth = token?.access_token;
  // if (userAuth) {
  //   header = {
  //     'Content-Type': contentType,
  //     Accept: '*/*',
  //     Authorization: `Bearer ${userAuth}`,
  //   };
  // } else {
  header = {
    'Content-Type': contentType,
    Accept: '*/*',
  };
  // }
  try {
    const result = await axiosInstance.delete(url, {
      headers: header,
    });
    response = result.data;
    response.status = [200, 201].includes(result.status);
  } catch (e) {
    response.status = false;
    response.message = 'something went wrong';
    response.data = e;
  }
  return response;
};
