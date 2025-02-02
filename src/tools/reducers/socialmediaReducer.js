import supabase from "../../utils/supabase";


const {data, error} = await supabase
.from('SocialMediaPosts')
.select('*')

if(error)console.log(error);

export const socialmediaReducer = (state=data, action) => {
    switch(action.type){
        case("GET_SOCIALMEDIA"):
            return state;
        default:
            return state;
    }
}