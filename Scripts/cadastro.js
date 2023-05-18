const mainSection = document.getElementById("main-section");

window.onload = getStudentData;

async function getStudentData() {

	url = "../Server/returnStudent.php";

	const fetchOptions = {
		method: "GET",
		headers: {
			"Content-Type": "application/json",
			"Accept": "application/json"
		},
	};

	const response = await fetch(url).then((response) =>
		response.json())
		.then((data) => {
			const students = data;
			createTable(students);
		});
}

function createTable(students) {
	const tableHeaders = ["Nome", "RA", "Sexo", "Idade", "Endereço", "Telefone", "E-mail"];
	const table = document.createElement("table");
	const headerRow = document.createElement("tr");
	table.appendChild(headerRow);
	mainSection.appendChild(table);
	tableHeaders.forEach(element => {
		header = document.createElement("th");
		header.innerText = element;
		headerRow.appendChild(header);
	});
	students.sort((a, b) => {
		a=JSON.parse(a);
		b=JSON.parse(b);
		a.ra=parseInt(a.ra)
		b.ra=parseInt(b.ra)
		if (a.ra > b.ra) return 1;
		if (b.ra > a.ra) return -1;

		return 0;
	});
	console.log(students)
	students.forEach(element => {
		const studentRow = document.createElement("tr");
		const studentObject = JSON.parse(element);
		Object.values(studentObject).forEach(element => {
			const studentData = document.createElement("td");
			studentData.innerText = element;
			studentRow.appendChild(studentData);
		});
		table.appendChild(studentRow)
	});
}