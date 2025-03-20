"use strict";
let currentPage = 1;
let lastFetchTime = 0
async function fetchPosts(page) {
  try {
    let now = Date.now()
    if(now - lastFetchTime < 2000){
      console.log("Rate limit exceeded. Please wait.")
      return
    }
    lastFetchTime = now 
    const url = `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=10`;
    const res = await fetch(url);
    if (!response.ok) throw new Error("Failed to fetch data");
    const data = await res.json();
    renderPosts(data);
  } catch (error) {
    console.error("Error fetching posts:", error.message);
  }
}

//fetchPosts(2)

function renderPosts(posts) {
  const div = document.getElementById("output");
  div.innerHTML = "";
  const ul = document.createElement("ul");

  posts.forEach((posts) => {
    const li = document.createElement("li");
    li.innerText = posts.title;
    ul.appendChild(li);
  });
  div.appendChild(ul);
}


const nextButton = document.getElementById("next")
const prevButton = document.getElementById("prev")



nextButton.addEventListener("click", () => {
  currentPage++;
  fetchPosts(currentPage);
  });

  prevButton.addEventListener("click", () => {
    if (currentPage > 1) {
      currentPage--;
      fetchPosts(currentPage);
    }
  });

fetchPosts(currentPage);

