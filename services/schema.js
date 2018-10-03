const schemaDetails = require("./parser");

module.exports = (req,res) => {
    console.log("Started fetching the details");
    let details = [];
    if(!req.body.Search.trim()){
        switch (req.body.sortType) {
            case 2: details = sortByNav(req.body.SortBy)
                break;
            case 3: details = sortByDate(req.body.SortBy)
                break;     
            default:details = schemaDetails
                break;
        }
    }
    else{
        details = schemaDetails.filter(schemaObject =>{
            return schemaObject['SchemeName'] === req.body.Search
        }) 
    }    
    console.log("Completed fetching the details");
    res.status(200).json({status:"success",message:"successfully fetched the details",data:details})
}

const sortByDate=(order) => {
    console.log("Started Sorting by date ")
    let details = [];
    if(order === 1){
        details = schemaDetails.sort(function(a, b){
            return new Date(b.Date) - new Date(a.Date)
        })
    }
    else{
        details = schemaDetails.sort(function(a, b){
            return new Date(a.Date) - new Date(b.Date)
        })
    }
    console.log("Completed Sorting by date ")
    return details;
}

const sortByNav = (order)=>{
    console.log("Started Sorting by Nav ")
    let details = [];
    if(order === 1){
        details = schemaDetails.sort(function(a, b){
            return a.NAV-b.NAV
        })
    }
    else{
        details = schemaDetails.sort(function(a, b){
            return b.NAV-a.NAV
        })
    }
    console.log("Completed Sorting by Nav ")
    return details;
}

