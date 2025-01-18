import { useCallback } from 'react';
import axiosInstance from '../services/axios'; // Import the Axios instance
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setLoader } from '../redux/reducers/authSlice'; // Import the loader actions
import { useToast } from './toasterProvider';
// import { toast } from 'react-toastify';


const jsonHeader = { "content-type": "application/json" };

const useAxios = () => {
      const dispatch = useDispatch();
      const navigate = useNavigate();
      const showToast = useToast();

      const makeRequest = useCallback(async ({
            url,
            method = 'GET',
            data = null,
            headers = jsonHeader,
            reduxAction = null,
            onSuccessCallback = null,
            route = null,
            isToastVisible = true,
            toggleLoader = true,
      }) => {
            if(toggleLoader){
                   dispatch(setLoader(true));// Show the loader before the request starts
            }

            try {
                  const response = await axiosInstance({
                        url,
                        method,
                        data,
                        headers, // Include custom headers if provided  
                  });
                  if (response?.status === 200 || response?.status === 201) {
                        if (isToastVisible) {
                              console.log('response',response);
                              
                              // toast.success(response?.data?.message || 'Success')
                              showToast("success", response?.data?.responseMessage);
                        }
                  }

                  // Dispatch Redux action
                  if (reduxAction) {
                        dispatch(reduxAction(response.data));
                  }

                  // Call the success callback if provided
                  if (onSuccessCallback) {
                        onSuccessCallback(response.data);
                  }

                  if (route) {
                        navigate(route)
                  }

            } catch (error) {
                  // Handle errors
                  if (onSuccessCallback) {
                        onSuccessCallback(error?.response?.data);
                  }
                  if (isToastVisible) {
                        // toast.error(error?.response?.data?.message)
                        showToast("error", error?.response?.data?.responseMessage);
                  }
                  console.error('Request failed:', error); // Log the error for debugging
                  // navigate('/error'); // Example: redirect to an error page
            } finally {
                  if (toggleLoader) {
                        dispatch(setLoader(false)); // Hide the loader after the request completes
                  }
            }
      }, [dispatch, navigate]);

      return { makeRequest };
};

export default useAxios;
