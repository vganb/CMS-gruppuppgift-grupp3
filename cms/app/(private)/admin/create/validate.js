


export const validate = (form) =>{

    if(form.title.trim() === ''){
        return 'Please enter a title'
    }

    if(form.time.trim() === ''){
        return 'Please enter the time of the event'
    }

    if(form.time.length <= 4){
        return 'The "Time" field must be at least 4 characters long.'
    }
    
    if(form.seats.trim() === ''){
        return 'Please enter the number of seats available for the event'
    }

    if(form.imageName.trim() === ''){
        return 'Please provide with an image'
    }

    if(form.description.trim() === ''){
        return 'Please enter a description of the event'
    }

    if(form.city.trim() === ''){
        return 'Please enter a city'
    }

return ''

}