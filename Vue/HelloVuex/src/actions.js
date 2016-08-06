
export const incrementAsync = ({dispatch})=>{
    setTimeout( ()=> {
        dispatch('INCREMENT');
    }, 1000);
};
export const increment = ({dispatch})=>{
    console.log('#');
    dispatch('INCREMENT');
};
export const decrement = ({dispatch})=>{
    dispatch('DECREMENT');
};