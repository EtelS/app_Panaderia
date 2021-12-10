export const SELECT_iTEM='SELECT_iTEM';
export const FILTERED_ITEMS= 'FILTERED_ITEMS';

export const selectItem= (id)=>({
    type:SELECT_iTEM,
    itemID:id
    })

export const filteredItem= (id) =>({
    type: FILTERED_ITEMS,
    categoryID : id
})
