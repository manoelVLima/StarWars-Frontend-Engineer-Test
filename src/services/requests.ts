import axios from "axios";
import { createApi } from "unsplash-js";

export const getApi = async <T>(endpoint: string): Promise<T> => {
    const { data } = await axios.get<T>(`${endpoint}`);
    return data;
}

export const api = createApi ({
    accessKey:'FjW70_lcvwgyBgDFBPpk43pzvi9Wy6B3487y5hJyDHg'
})
