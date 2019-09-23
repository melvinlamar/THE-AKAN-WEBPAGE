var male=[
    "born on sunday; Kwasi",
    "born on monday; Kwadwo","born on tuesday; Kwabena","born on wednesday; Kwaku","born on thursday; Yaw","born on friday; Kofi","born on saturday; Kwame"
]
var female=[
    "born on sunday; Akosua","born on monday; dwoa","born on tuesday; Abenaa","born on wednesday; Akua","born on thursday;Yaa","born on friday; Afua","born on saturday;Ama"
]

function login(){
    var name=""
    var gender= document.forms["myForm"]["gender"].value;
    var date=document.forms["myForm"]["date"].value;
    var dateObject=new Date(date);
    var day=dateObject.getDay();
    if (gender==="male"){
        name=male[day];
    }else if (gender==="female"){
        name=female[day];
    }else{
        alert("invalid option")
    }
    document.getElementById("result").innerHTML=name;
    window.scrollTo(0,document.body.scrollHeight);

        var frm = document.getElementsByName('date')[0];
        frm.submit(); // Submit
        frm.reset(dateObject);  // Reset
        return false; // Prevent page refresh

     return name;
}