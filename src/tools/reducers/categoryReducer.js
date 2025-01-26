
const categories = [
    {
        title: 'headlamps',
        img: "https://princetontec.com/wp-content/uploads/2024/06/Sniper-SWAT-219-scaled-e1719427300420.jpg"
    },
    {
        title: 'handhelds',
        img:"https://princetontec.com/wp-content/uploads/2024/06/PtecJuly2021-19-scaled-e1718224171273.jpg"
    },
    {
        title: 'helmet lights',
        img:"https://princetontec.com/wp-content/uploads/2024/06/24KWhite_TacGas24BRAVO_07125-scaled.jpg"
    },
    {
        title: 'lanterns',
        img:"https://princetontec.com/wp-content/uploads/2024/06/PTecIceland-27-scaled-e1718221259153.jpg"
    },
    {
        title: 'marker lights',
        img:"https://princetontec.com/wp-content/uploads/2024/06/anemonefish_banded_two_tc_h_0148_isr0625-scaled.jpg"
    },
    {
        title: 'accessories',
        img:"https://princetontec.com/wp-content/uploads/2024/06/PtecCatalogAlloy-X-1-scaled.jpg"
    }];

export const categoryReducer = (state = categories, action) => {
    switch (action.type) {
        case "GET_CATEGORIES":
            return state

        default:
            return state
    }
};