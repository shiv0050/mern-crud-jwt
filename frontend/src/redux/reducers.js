import RestaurantDataService from "../services/restaurant.js";
export const reducer=async (action)=>{
    switch(action.type){
        case 'ADD_REVIEW':
            return RestaurantDataService.createReview(action.data)
                    .then(response => {
                      setSubmitted(true);
                      console.log(response.data);
                    })
                    .catch(e => {
                      console.log(e);
                    });
        case 'GET_RESTAURANTS':
            const response= await RestaurantDataService.getAll()
            const list=[]
            console.log(response);
            
            response.then(result => {
                console.log(result);
                list=response.data.restaurants;
              })
            return list
            
        default:
            return null;
    }
}