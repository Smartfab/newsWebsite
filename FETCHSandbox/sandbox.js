const btn1 = document.querySelector("#getText");
const btn2 = document.querySelector("#getUsers");
const btn3 = document.querySelector("#getPosts");
const form = document.querySelector("#addPost");
const title = document.querySelector("#title");
const body = document.querySelector("#body");
btn1.addEventListener("click", getText);
btn2.addEventListener("click", getUsers);
btn3.addEventListener("click", getPosts);
form.addEventListener("submit", addPost);
const output = document.querySelector("#output");
function getText() {
	// fetch("sample.txt")
	// 	.then(function (res) {
	// 		return res.text();
	// 	})
	// 	.then(function (data) {
	// 		console.log(data);
	// 	});
	fetch("sample.txt")
		.then((res) => res.text())
		// .then((data) => console.log(data));
		.then((data) => {
			output.innerHTML = data;
		})
		.catch((err) => console.log(err));
}

function getUsers() {
	fetch("users.json")
		.then((res) => res.json())
		.then((data) => {
			let outputList = "<h2>Users</h2>";
			data.forEach(function (user) {
				outputList += `<ul>
			<li>ID: ${user.id}</li>
			<li>Name: ${user.name}</li>
			<li>Email: ${user.email}</li>
			</ul>`;
			});
			output.innerHTML = outputList;
		});
}

// function getPosts() {
// 	fetch("https://jsonplaceholder.typicode.com/posts")
// 		.then((res) => res.json())
// 		.then((data) => {
// 			let outputList = "<h2>Posts</h2>";
// 			data.forEach(function (post) {
// 				outputList += `
// 				<div>
// 			<small>ID: ${post.id}</small>
// 			<h3>Title: ${post.title}</h3>
// 			<p>Body: ${post.body}</p>
// 			</div>
// 			`;
// 			});
// 			output.innerHTML = outputList;
// 		});
// }

// function addPost(e) {
// 	e.preventDefault();
// 	let title = document.getElementById("title").value;
// 	let body = document.getElementById("body").value;
// 	fetch("https://jsonplaceholder.typicode.com/posts", {
// 		method: "POST",
// 		headers: {
// 			Accept: "application/json, text/plain, */*",
// 			"Content-type": "application/json",
// 		},
// 		body: JSON.stringify({ title: title, body: body }),
// 	})
// 		.then((res) => res.json())
// 		.then((data) => console.log(data));
// }

function getPosts() {
	fetch("https://jsonplaceholder.typicode.com/posts")
		.then((res) => res.json())
		.then((data) => {
			let outputContent = "<h1>Posts</h1>";
			data.forEach(function (post) {
				outputContent += `
<div> 
<small>ID : ${post.id}</small>
<p>Body : ${post.body}</p>
<h2>Title: ${post.title}</h2>
</div>`;
			});
			output.innerHTML = outputContent;
		});
}

function addPost(e) {
	e.preventDefault();

	fetch("https://jsonplaceholder.typicode.com/posts", {
		method: "POST",
		headers: {
			// Accept: "application/json, text/plain, */*",
			"Content-type": "application/json",
		},
		body: JSON.stringify({ title: title.value, body: body.value }),
	})
		.then((res) => res.json())
		.then((data) => console.log(data));
}

fetch("https://reqres.in/api/users").then((res) => {
	if (res.ok) {
		console.log("Success");
	} else {
		console.log("failed");
	}
});
