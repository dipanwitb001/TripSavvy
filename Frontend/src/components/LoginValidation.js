function Validation(values, ischeckboxChecked){
    let error = {}
    const email_patterns=/^[^\s@]+@[^\s@]+\.[^\s@]+$/  //regrex pattern for email addresses

    /*
    Regex Breakdown
        /^: Start of the string.
        [^\s@]+: One or more characters that are not spaces or "@" symbols. This represents the local part of the email.
        @: The "@" symbol, which separates the local part and the domain part.
        [^\s@]+: One or more characters that are not spaces or "@" symbols. This represents the domain name.
        \.: A literal dot character, used to separate the domain name and the domain extension.
        [^\s@]+: One or more characters that are not spaces or "@" symbols. This represents the domain extension.
        $/: End of the string.
    */ 
    const phonePattern = /^\+?\d{1,3}?[-.\s]?\d{10}$/; //regrex pattern for phone numbers -Accepts an optional + followed by country code (1-3 digits) and a space or hyphen, followed by 10 digits.



    if(values.fullName === "")
    {
        error.fullName = "Full Name should not be empty"
    }
    else
    {
        error.fullName = ""
    }

    if(values.username === "")
    {
        error.username = "User Name cannot be empty"
    }
    else
    {
        error.username = ""
    }


    if(values.email === "")
    {
        error.email = "Email cannot be empty"
    }
    else if (!email_patterns.test(values.email)) {
        error.email = "Email did not match"
    }
    else
    {
        error.email = ""
    }


    if(values.phoneNumber === "")
    {
        error.phoneNumber = "phone Number should not be empty"
    }
    // else if (!phonePattern.test(values.phoneNumber)) {
    //     error.phoneNumber = "phone number did not match"
    // }
    else
    {
        error.phoneNumber = ""
    }


    if(values.password === "")
    {
        error.password = "Password cannot be empty"
    }
    else
    {
        error.password = ""
    }

    if(values.confirmPassword === "")
    {
        error.fullName = "Confirm Password cannot be empty"
    }
    else if (values.confirmPassword !== values.password)
        {
            error.confirmPassword="password didnot match"
        }
    else
    {
        error.confirmPassword = ""
    }
    if(!ischeckboxChecked){
        error.checkbox = "You must agree to the Terms of Use"
    }

    return error;


}

export default Validation;