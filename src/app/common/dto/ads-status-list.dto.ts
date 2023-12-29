import { SelectModel } from "./select-model.dto";

export const adsStatusList: SelectModel[] = [
    {
        valueDisplay: 'Hết hạn',
        valueString: 'HetHan',
        valueNumber: 1
    },
    {
        valueDisplay: 'Còn hạn',
        valueString: 'ConHan',
        valueNumber: 2
    },
    {
        valueDisplay: 'Chưa xét duyệt',
        valueString: 'ChuaXetDuyet',
        valueNumber: 3
    },
    {
        valueDisplay: 'Vi phạm',
        valueString: 'ViPham',
        valueNumber: 4
    }
];