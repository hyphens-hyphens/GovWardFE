import { SelectModel } from "./select-model.dto";

export const warningTypeList: SelectModel[] = [
    {
        valueDisplay: "Tố giác sai phạm",
        valueString: "ToGiacSaiPham",
        valueNumber: 1
    },
    {
        valueDisplay: "Đóng góp ý kiến",
        valueString: "DongGopYKien",
        valueNumber: 2
    },
    {
        valueDisplay: "Đăng ký nội dung",
        valueString: "DangKyNoiDung",
        valueNumber: 3
    },
    {
        valueDisplay: "Giải đáp thắc mắc",
        valueString: "GiaiDapThacMac",
        valueNumber: 4
    }
];
