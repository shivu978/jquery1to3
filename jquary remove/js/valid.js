function  val()
{
    if(document.frm.fname.value=="")
    {
        alert("please enter your firstname")
        document.frm.fname.focus();
        return false;
    }

    if(document.frm.lname.value=="")
    {
        alert("please enter your lastname")
        document.frm.lname.focus();
        return false;
    }

    if(document.frm.email.value=="")
    {
        alert("please enter your Email")
        document.frm.email.focus();
        return false;
    }
}