

// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '8635f7a1d6msh9099c638d27ce08p1b187ajsnb0a8fb48a01b',
// 		'X-RapidAPI-Host': 'open-weather13.p.rapidapi.com'
// 	}
// };

// fetch('https://open-weather13.p.rapidapi.com/city/landon', options)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));

const whether = document.getElementById("form")

const getcontent = (e) => {



    
    e.preventDefault();
    
    const city = document.forms['myform']['search'].value;

    alert(city)

    const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '8635f7a1d6msh9099c638d27ce08p1b187ajsnb0a8fb48a01b',
		'X-RapidAPI-Host': 'open-weather13.p.rapidapi.com'
	}
};

fetch(`https://open-weather13.p.rapidapi.com/city/${city}`, options)
	.then(response => response.json())
	.then(response => {

        // const temp1 = response.main.temp;

        console.log(response)
        // const orignal = (temp1-32)*5/9;
        
        // document.getElementById('cloud').innerHTML=Math.round(orignal);


    })
	.catch(err => console.error(err));

}

whether.addEventListener("submit",getcontent)
