function test_one(){
	var a = "amir";
	var a = "Amir";
	//let e = "espelani";
	let e = "Espelani";
	
	try{
		console.log(a+" "+e);
	}catch(e){
		console.log(e);
	}
}
test_one();


function test_const(){
	
	const You = ({
		name : 'Ali',
		family : 'Mihandost',
		company_name : "PTC"
	});
	
	const showme = ({
					name = '',
					family = '',
					company_name = ''
			}) => console.log(`Your name is ${name}, 
			i am ${company_name} years old`);
		showme(You);
	}

test_const();
