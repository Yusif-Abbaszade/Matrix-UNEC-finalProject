
export const socialmediaReducer = (state=[], action) => {
    switch(action.type){
        case("GET_SOCIALMEDIA"):
            return action.socialmedia;
        default:
            return state;
    }
}