function printAlphabets(nameChar){

	//set the default value of i & j to print A to Z
	var i = 65;
	var j = 91;
  window.arrfornames;
	//loop through the values from i to j
	for(k = i; k < j; k++){
		//convert the char code to string (Alphabets)
		var str =String.fromCharCode(k);
		//print the result in console
    if (str==nameChar){
        // console.log(nameChar);
      window.arrfornames = window.arrfornames + nameChar;
    }
	}
}

function forName(v){
    if (v=="null"||v==""){
      document.getElementById('one').style.backgroundColor = "maroon";
      return 0;
    }
    else if(v.length>=3)
    {
      var name = v;
      name = name.toUpperCase();
      // console.log(name);
      window.arrfornames="";
      for (var i = 0; i < name.length; i++) {
        //   alert(name);
        printAlphabets(name[i]);
        // console.log(name[i]);
      }
      if (window.arrfornames==name){
        document.getElementById('one').style.backgroundColor = "initial";
        return 1;
      }
      else {
        // console.log(window.arrfornames+"!="+name);
        document.getElementById('one').style.backgroundColor = "maroon";
        return 0;
      }
    }
    else {
        document.getElementById('one').style.backgroundColor = "maroon";
      return 0;
    }
  }

function forEmail(email_id) {
	if(email_id=="null"||email_id==""){
		document.getElementById('two').style.backgroundColor = "maroon";
        return 0;
	}
	else{
		var x= email_id;
		var atposition=x.indexOf("@");
		var dotposition=x.lastIndexOf(".");
		if (atposition<1 || dotposition<atposition+2 || dotposition+2>=x.length){
            document.getElementById('two').style.backgroundColor = "maroon";
          return 0;
		  }
		 else {
            document.getElementById('two').style.backgroundColor = "initial";
            return 1;
		 }
	}
}

function mobile_numfun(digit) {
	window.arrfor_mobile_number;
	for (var i = 0; i <= 9; i++) {
	 if (i==digit) {
		 window.arrfor_mobile_number = window.arrfor_mobile_number + digit;
	 }
	}
}

function forNumber(mobile_num) {
	if (mobile_num=="null"||mobile_num=="") {
		document.getElementById('three').style.backgroundColor = "maroon";
        return 0;
	}
	else if(mobile_num.length==10){
		window.arrfor_mobile_number="";
		var text_value = mobile_num;
		for (var i = 0; i < text_value.length; i++) {
			mobile_numfun(text_value[i]);
		 }
		   if (text_value==window.arrfor_mobile_number){
            document.getElementById('three').style.backgroundColor = "initial";
              return 1;
		   }
		  else {
            document.getElementById('three').style.backgroundColor = "maroon";
		  	  console.log(text_value+'!='+window.arrfor_mobile_number);
              return 0;
		  }
	}
	else{
		document.getElementById('three').style.backgroundColor = "maroon";
        return 0;
	}
}

function forBihar() {
    let array = ["Patna", "Gaya", "Siwan"];
    let string = "";
    for (let i = 0; i <array.length; i++) {
        string = string + "<option>"+ array[i] +"</option>";
    }
    string = "<select id='biharId'>"+string+"</select>"
    document.getElementById('city').innerHTML = string;
}

function forGujarat() {
    let array = ["Ahmedabad", "Rajkot", "Amreli"];
    let string = "";
    for (let i = 0; i <array.length; i++) {
        string = string + "<option>"+ array[i] +"</option>";
    }
    string = "<select id='gujaratId'>"+string+"</select>"
    document.getElementById('city').innerHTML = string;
}

function forMaharashtra() {
    let array = ["Pune", "Mumbai", "Nashik"];
    let string = "";
    for (let i = 0; i <array.length; i++) {
        string = string + "<option>"+ array[i] +"</option>";
    }
    string = "<select id='maharashtraId'>"+string+"</select>"
    document.getElementById('city').innerHTML = string;
}

function forMadhyaPradesh() {
    let array = ["Neemuch", "Bhopal", "Indore"];
    let string = "";
    for (let i = 0; i <array.length; i++) {
        string = string + "<option>"+ array[i] +"</option>";
    }
    string = "<select id='madhyapradeshId'>"+string+"</select>"
    document.getElementById('city').innerHTML = string;
}

function forAddress(house_and_street){
    if (house_and_street=="null"||house_and_street=="") {
        document.getElementById('address_tr').style.backgroundColor = "maroon";
        return 0;
    }
      else if(house_and_street.length>=10 && house_and_street.length<=500){
          var text_value = house_and_street;
          var format = /[`!@#$%^&*_+\=\[\]{};':"\\|.<>\/?~]/;
          //            ^                                       ^
          var flag = format.test(text_value);
        //   console.log(flag);
          if(flag) {
            document.getElementById('address_tr').style.backgroundColor = "maroon";
            return 0;
          }
          else {
            document.getElementById('address_tr').style.backgroundColor = "initial";
            return 1;
          }
      }
      else {
        document.getElementById('address_tr').style.backgroundColor = "maroon";
        return 0;
      }
 }
 
function forstate_return() {

    try {
               // alert(count);
               let dropDown = document.getElementById('selectid');
               let value_of_drop =  dropDown.options[dropDown.selectedIndex].text;
               // alert(value_of_drop);
               
               if (value_of_drop == 'Bihar'){
                   let bihardrop = document.getElementById('biharId');
                   let city_value =  bihardrop.options[bihardrop.selectedIndex].text;
                   return city_value;
               }
               else if (value_of_drop == 'Gujarat') {
                   let bihardrop = document.getElementById('gujaratId');
                   let city_value =  bihardrop.options[bihardrop.selectedIndex].text;
                   return city_value;
               }
               else if (value_of_drop == 'Maharashtra') {
                   let bihardrop = document.getElementById('maharashtraId');
                   let city_value =  bihardrop.options[bihardrop.selectedIndex].text;
                   return city_value;
               }
               else if (value_of_drop == 'Madhya Pradesh') {
                   let bihardrop = document.getElementById('madhyapradeshId');
                   let city_value =  bihardrop.options[bihardrop.selectedIndex].text;
                   return city_value;
               }
    }
    catch {
        // console.log("Nothing");
        let city_is = document.getElementById('forcity');
        let value_city =  city_is.options[city_is.selectedIndex].text;
        // console.log(value_city);
        return value_city
    }
}


function myfun() {

    document.getElementById('selectid').disabled = false;
    let count = 0;
    let name = document.getElementById('name').value;
    count = count + forName(name);

    let mail = document.getElementById('email').value;
    count = count + forEmail(mail);

    let num = document.getElementById('number').value;
    count = count + forNumber(num);
    
    let dropDown = document.getElementById('selectid');
    let value_of_drop =  dropDown.options[dropDown.selectedIndex].text;

    if (value_of_drop != '--- Choose State ---') {
        window.city = forstate_return();
        count = count + 1;
    }

    let address = document.getElementById("address").value;
    count = count + forAddress(address);
    // alert(count);

    let next = localStorage.length;

    if (count == 5) {
        if (localStorage.length == 0) {

            let myObj = {
                Name: name,
                Email: mail,
                Number: num,
                State: value_of_drop,
                City: window.city,
                Address: address,
            }
            localStorage.setItem(next, JSON.stringify(myObj));
            document.getElementById('submit_txt').value = "";

        }
        else if (localStorage.length!=0) {
            let flag = true;
            for(let i=0; i<localStorage.length; i++) {
                let key = localStorage.key(i);
                // alert(`${key}: ${localStorage.getItem(key)}`);
                let deserial = JSON.parse(localStorage.getItem(key));
                // console.log(deserial);

                for (let key in deserial) {
                    if (deserial[key] == mail) {
                        console.log(`${deserial[key]}==${mail}`);
                        document.getElementById('submit_txt').value = "mail exist!";
                        flag = false
                    }
                    // alert( key );  // name, age, isAdmin
                  }
              }
            if (flag) {
                let myObj = {
                    Name: name,
                    Email: mail,
                    Number: num,
                    State: value_of_drop,
                    City: window.city,
                    Address: address,
                }
                localStorage.setItem(next, JSON.stringify(myObj));
                document.getElementById('submit_txt').value = "";
            }
        }
    }
    document.getElementById("searchtxt").value = "";

    return false;
}


function onclickfun() {

    // alert(count);
    let dropDown = document.getElementById('selectid');
    let value_of_drop =  dropDown.options[dropDown.selectedIndex].text;
    // alert(value_of_drop);


    if (value_of_drop == '--- Choose State ---') {
        let string = "";
        string = "<select>"+ string + "</select>";
        document.getElementById('city').innerHTML = string;
        document.getElementById("states").style.backgroundColor = "maroon";
    }
    else if (value_of_drop == 'Bihar'){
        document.getElementById("states").style.backgroundColor = "initial";
        forBihar();
    }
    else if (value_of_drop == 'Gujarat') {
        document.getElementById("states").style.backgroundColor = "initial";
        forGujarat();
    }
    else if (value_of_drop == 'Maharashtra') {
        document.getElementById("states").style.backgroundColor = "initial";
        forMaharashtra();
    }
    else if (value_of_drop == 'Madhya Pradesh') {
        document.getElementById("states").style.backgroundColor = "initial";
        forMadhyaPradesh();
    }
}

function searching() {

    document.getElementById('selectid').disabled = false;
    document.getElementById("searchtxt").value = "";
    // document.getElementById('city').disabled = false;

    let nameS = document.getElementById('name').value;
    if (nameS=="null" || nameS=="") {
        document.getElementById('searchtxt').value = "Enter Name";
    }
    else {
        let flag = false;
        for(let i=0; i<localStorage.length; i++) {
            let key = localStorage.key(i);
            // alert(`${key}:`);

            let deserialised = JSON.parse(localStorage.getItem(key));
            // console.log(deserialised);
            
            for (let key in deserialised) {

                if (deserialised[key] == nameS) {
                    // console.log(`${deserialised[key]} == ${nameS}`);
                    document.getElementById('email').value = deserialised['Email'];
                    document.getElementById('number').value = deserialised['Number'];

                    document.getElementById('address').value = deserialised['Address'];

                    let dropDown = document.getElementById('selectid');
                    dropDown.options[0].text = deserialised['State'];

                    // console.log(deserialised['State']);
                    // document.getElementById('selectid').value = deserialised['State'];
                    // document.getElementById('selectid').value =deserialised['State'];
                    
                    string = "";
                    string = string + "<option>"+ deserialised['City'] +"</option>";
                    string = "<select id='forcity'>" + string + "</select>"
                    document.getElementById('city').innerHTML = string;
                    
                    document.getElementById("searchtxt").value = "";
                    flag = true;
                }
            }
        }
        if (!flag) {
            document.getElementById('email').value = "";
            document.getElementById('number').value = "";
            document.getElementById('address').value = "";  
            document.getElementById("searchtxt").value = "Not Found";
            document.getElementById('selectid').disabled = true;
            document.getElementById('city').innerHTML = "";
        }
    }
}