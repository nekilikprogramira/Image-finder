const accessKey = 'YOUR API KEY';
function getImage(){
    
    const imageName=document.querySelector('input').value;
fetch('https://api.unsplash.com/search/photos?query=' + imageName + '&client_id=' + accessKey)
  .then(response => response.json())
  .then(data => {
    let choice=Math.floor(Math.random() * data.results.length);
    document.querySelector('img').src=data.results[choice].urls.regular;
    console.log(data.results.length); // Output URL of the random photo
  })
  .catch(error => {
    console.log('Error fetching random photo:', error);
  });

}
