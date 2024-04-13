import axios, * as others from "axios";

export const landsListApi = async (pageNo = 1) => {
    const url = `https://prod-be.1acre.in/lands/?ordering=-updated_at&page=${pageNo}&page_size=10`;
    try {
        const response = await axios.get(url);
        console.log('api response: ', response);
        return response.data;
    } catch (error) {
        console.log('Error in landsListApi: ', error);
        throw error
    }
}
