import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization:
         'Bearer 8i3tzx40jfRhDRaNZpzprRq2-KYtV-XhQt0mghvwGNOfY3197VUZrQweYPEmtSrthoEp4EDX9knoqTU9vFDSC6T1SapROcCsByq866c3jwLb9XL_VTi27ErLD1vhXnYx'
    }
});
