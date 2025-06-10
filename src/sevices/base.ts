import type { AxiosInstance } from "axios";
import axios from "axios";

export class BaseService {
    private ax: AxiosInstance

    constructor(baseURL: string) {
        this.ax = axios.create({ baseURL });
    }

    private checkEndPointStr = (str: string) => `${str.charAt(0) !== '/' ? `/${str}` : str}`

    private checkParams = (str?: string) => str ?? ''

    private buildEndPoint = (endPoint: string, params?: string) => this.checkEndPointStr(endPoint) + this.checkParams(params)

    public get = async <T>(endpoint: string, params?: string, query?: object) => (await this.ax.get<T>(this.buildEndPoint(endpoint, params), { params: query })).data
}