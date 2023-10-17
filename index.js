//Example
let article = {
    title: 'Why Accessibility Matters in UI UX Design',
    date: 'May 25, 2023',
    description:  'Accessibility is a word that is often thrown around in the design field. As a UI/UX Web Designer, you might have heard this word a few times and you might wonder why it’s important.'
  }
  
  let title = document.getElementById('title');
  let date = document.getElementById('date');
  let description = document.getElementById('description');
  
  title.textContent = article.title;
  date.textContent = article.date;
  description.textContent = article.description;
  
  //Challenge
  
  let article2 = {
    title: "Common Accessibility Errors and How To Fix Them",
    date: "January 5, 2022",
    description: "Accessibility should never be an afterthought, but rather a large part of the development process. Most accessibility errors come from six categories and if we fix them, we will make our websites more accessible to everyone."
  }
  
  let title2 = document.getElementById('title2');
  let date2 = document.getElementById('date2');
  let description2 = document.getElementById('description2');
  
  title2.textContent = article2.title;
  date2.textContent = article2.date;
  description2.textContent = article2.description;