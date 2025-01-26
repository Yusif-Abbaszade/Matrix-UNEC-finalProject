const activities = [
    {
        title:"camping",
        img:"https://princetontec.com/wp-content/uploads/2024/06/PTecSeptember2022-8-scaled.jpg"
    },
    {
        title:"diving",
        img:"https://princetontec.com/wp-content/uploads/2024/06/coral_pillar_oc_jar_v_0582_cub2383-scaled.jpg"
    },
    {
        title:"fishing",
        img:"https://princetontec.com/wp-content/uploads/2024/06/PTecJune23-1-pd-edit-size--scaled.jpg"
    },
    {
        title:"hunting",
        img:"https://princetontec.com/wp-content/uploads/2024/06/PTecJanuary2023-4-scaled.jpg"
    },
    {
        title:"hiking",
        img:"https://princetontec.com/wp-content/uploads/2024/06/PtecCatalogApexRechargeable-3-scaled.jpg"
    }
]

export const activityReducer = (state=activities, action)=>{
    switch (action.type){
        case("GET_ACTIVITIES"):
            return state;
        default:
            return state;
    }
}