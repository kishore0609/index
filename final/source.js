var namev,genderv,agev,yearv,clgnamev,emailv,cityv,phonev;
function readForm()
{
    namev=document.getElementById("name").value;
    genderv=document.getElementById("gender").value;
    agev=document.getElementById("age").value;
    yearv=document.getElementById("year").value;
    clgnamev=document.getElementById("college").value;
    emailv=document.getElementById("email").value;
    cityv=document.getElementById("city").value;
    contactv=document.getElementById("phone").value;
    console.log(namev,genderv,agev,yearv,clgnamev,emailv,cityv,phonev);
}
document.getElementById("insert").onclick=function()
{
    readForm();
    firebase.database().ref("student/"+namev).set({name:namev,gender:genderv,age:agev,year:yearv,college:collegev,email:emailv,city:cityv,phone:phonev,});
    alert("data inserted");
    document.getElementById("name").value="";
    document.getElementById("gender").value="";
    document.getElementById("age").value="";
    document.getElementById("year").value="";
    document.getElementById("college").value="";
    document.getElementById("email").value="";
    document.getElementById("city").value="";
    document.getElementById("phone").value="";
};

document.getElementById("read").onclick=function()
{
    readForm();
    firebase.database().ref("student/"+namev).on("value",function(snap){
    document.getElementById("name").value=snap.val().name;
    document.getElementById("Gender").value=snap.val().gender;
    document.getElementById("age").value=snap.val().age;
    document.getElementById("year").value=snap.val().year;
    document.getElementById("college").value=snap.val().college;
    document.getElementById("email").value=snap.val().email;
    document.getElementById("city").value=snap.val().city;
    document.getElementById("phone").value=snap.val().contact;

    });
};

document.getElementById("update").onclick=function(){
    readForm();
    firebase.database().ref("student/"+namev).update({name:namev,Gender:genderv,age:agev,year:yearv,college:clgnamev,email:emailv,city:cityv,phone:phonev,parent:parentv,});
    alert("data updated");
    document.getElementById("name").value="";
    document.getElementById("gender").value="";
    document.getElementById("age").value="";
    document.getElementById("year").value="";
    document.getElementById("college").value="";
    document.getElementById("email").value="";
    document.getElementById("city").value="";
    document.getElementById("phone").value="";
};


document.getElementById("delete").onclick=function(){
    readForm();
    firebase.database().ref("student/"+namev).remove();
    alert("data deleted");
    document.getElementById("name").value="";
    document.getElementById("gender").value="";
    document.getElementById("age").value="";
    document.getElementById("year").value="";
    document.getElementById("college").value="";
    document.getElementById("email").value="";
    document.getElementById("city").value="";
    document.getElementById("phone").value="";
};