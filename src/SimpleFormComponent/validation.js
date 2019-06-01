export const validate = (values) =>  {
    const errors = {};

    if(!values.userName) {
        errors.userName = 'Required'
    } else if(values.userName.length < 4 || values.userName.length > 14) {
        errors.userName = 'Name length must be between 5 - 14 characters'
    }
    if(!values.userEmail) {
        errors.userEmail = 'Required'
    }
    if(!values.userAge) {
        errors.userAge = 'Required'
    } else if (values.userAge < 18) {
        errors.userAge = 'You are too young, sorry'
    } else if (values.userAge > 100) {
        errors.userAge = 'You are too old, sorry'
    }
    return errors
}
