import supabase from '../../utils/supabase';

const { data, error } = await supabase.from('Products').select('*')
if(error){console.log(error);}


export const productReducer = (state = data, action) => {
    switch (action.type) {
        case "GET_PRODUCT":
            return state;
        default:
            return state;
    }
}