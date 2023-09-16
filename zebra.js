var password = prompt("Welcome Mr.Subhankar Das. Enter the password to show your daily tution routin:  ");

if(password == "cool"){
    var day = prompt("Enter the day: ");
    if(day == "sunday"){
        document.write("You have one class on sunday. CHEMISTRY--- 11am.");
    }else if(day == "monday") {
        document.write("You have one class on monday. BENGALI TEXT--- 6PM.");
    }else if (day == "tuesday"){
        document.write("You have two classes on tuesday. BENGALI GRAMMAR---7am & PHYSICS--- 6pm.");
    }else if (day == "wednesday"){
        document.write("You have one class on wednesday. MATHEMATICS--- 7am.");
    }else if(day == "thursday"){
        document.write("You have one class on wednesday. CHEMISTRY--- 7am.");
    }else if(day == "friday"){
        document.write("You have one class on friday. PHYSICS--- 7am.");
    }else if (day == "saturday"){
        document.write("You have one class on saturday. MATHEMATICS--- 7am.");
    }else{
        document.write("Invalid");
    }

}else{
    document.write("Sorry....this is incorrect password. We cannot show you the routin.");
}