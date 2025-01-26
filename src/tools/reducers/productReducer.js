const products = [
    {
        title: "Switch RGB MPLS",
        price: 79.99,
        img:'https://princetontec.com/wp-content/uploads/2023/05/princeton-tec-switch-rgb-tan-1x1-1-300x300.png',
        imghover:'https://princetontec.com/wp-content/uploads/2023/05/princeton-tec-switch-rgb-tan-1x1-hover-300x300.png'
    },
    {
        title:"Charge X",
        price:149.99,
        img:"https://princetontec.com/wp-content/uploads/2023/11/princeton-tec-chargex-tan-1x1-3-300x300.png",
        imghover:"https://princetontec.com/wp-content/uploads/2023/11/princeton-tec-chargex-tan-1x1-hover-300x300.png"
    },
    {
        title:"Vizz 550 RGB",
        price:59.99,
        img:"https://princetontec.com/wp-content/uploads/2023/01/princeton-tec-vizz-rgb-multicam-1x1-1-300x300.png",
        imghover:"https://princetontec.com/wp-content/uploads/2023/01/princeton-tec-vizz-rgb-multicam-hover-300x300.png"
    },
    {
        title:"Helix Li",
        price:70.99,
        img:"https://princetontec.com/wp-content/uploads/2015/02/princeton-tec-helix-li-1x1-2-300x300.png",
        imghover:"https://princetontec.com/wp-content/uploads/2015/02/princeton-tec-helix-li-hover-300x300.png"
    },
    {
        title:"Byte",
        price:25.99,
        img:"https://princetontec.com/wp-content/uploads/2020/11/princeton-tec-byte-black-1x1-1-300x300.png",
        imghover:"https://princetontec.com/wp-content/uploads/2020/11/princeton-tec-byte-black-hover-300x300.png"
    },
    {
        title:"SNAP 450 RW KIT",
        price:51.99,
        img:"https://princetontec.com/wp-content/uploads/2023/01/princeton-tec-snap-kit-black-1x1-2-300x300.png",
        imghover:"https://princetontec.com/wp-content/uploads/2023/01/princeton-tec-snap-kit-black-hover-300x300.png"
    },
    {
        title:"Axis Li",
        price:65.99,
        img:"https://princetontec.com/wp-content/uploads/2020/12/princeton-tec-axis-li-1x1-1-300x300.png",
        imghover:"https://princetontec.com/wp-content/uploads/2020/12/princeton-tec-axis-li-hoover-300x300.png"
    },
    {
        title:"Vizz Tactical MPLS",
        price:109.99,
        img:"https://princetontec.com/wp-content/uploads/2018/07/princeton-tec-vizz-tac-mpls-black-1x1-1-300x300.png",
        imghover:"https://princetontec.com/wp-content/uploads/2023/01/princeton-tec-vizz-tac-bk-shroud-hover-300x300.png"
    },
]

export const productReducer = (state = products, action) => {
    switch (action.type) {
        case "GET_PRODUCT":
            return state;

        default:
            return state;
    }
}