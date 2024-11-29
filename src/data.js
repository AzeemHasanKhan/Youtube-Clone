export const API_KEY = "AIzaSyBuWobSdfbcAzSYW-uMY6B0LrH_R2LWf9w"

export const value_converter = (value)=>{
    if (value>=1000000) {
        return Math.floor(value/1000000)+"M"
    }
    else if (value>=1000) {
        return Math.floor(value/1000)+"K"
    }
    else {
        return value
    }
}