import { baseService } from "./baseService";
import { GROUP_ID } from "../util/settings/config";

export class QuanLyRapService extends baseService {
    
    constructor() {
        super();
    }

    layDanhSachRap = () => {
        return this.get(`/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=${GROUP_ID}`);
    }

    
}

export const qlyRapService = new QuanLyRapService();