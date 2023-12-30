

const toastOption = {
    position: "top-right",
    autoClose: 3000,
    pauseOnHover: false,
    draggable: false,
    theme: 'light'
}

//-1: Đơn hàng khách huỷ
//0: Đang chờ xử ý
//1: Đã duyệt đơn
//2: Đã hoàn thành
//-2: Không chấp nhận

const genders = [
    {
        id: 1,
        title: "Nam"
    },
    {
        id: 2,
        title: "Nữ"
    },
    {
        id: 3,
        title: "Khác"
    }
]


const routeOrderAdmin = [
    {
        id: 1,
        path: "",
        title: "Chờ xử lý"
    },
    {
        id: 2,
        path: "confirmed",
        title: "Đã xác nhận"
    },
    {
        id: 3,
        path: "success",
        title: "Thành công"
    },
    {
        id: 4,
        path: "refuse",
        title: "Đã huỷ bỏ"
    },
    {
        id: 5,
        path: "cancel",
        title: "Khách huỷ"
    }
]

const routesPurchasePage = [
    {
        id: 1,
        path: "",
        title: "Chờ xác nhận"
    },
    {
        id: 2,
        path: "toship",
        title: "Đang giao"
    },
    {
        id: 3,
        path: "complete",
        title: "Hoàn thành"
    },
    {
        id: 4,
        path: "cancel",
        title: "Đã huỷ"
    },
]

const SUMMER_SHOP = "summerShop"
export {
    toastOption,
    routesPurchasePage
}


