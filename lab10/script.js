function add_new_img(dataset) {
      var gallery = document.getElementById("gallery");
      gallery.innerHTML = ""; 
      var photos = dataset.photos.photo;
      photos.forEach(photo => {
        var img = document.createElement("img");
        var imgUrl = `https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_b.jpg`;
        img.src = imgUrl;
        gallery.appendChild(img);
      });
    }
function fetchFlickrPhotos() {
  const apiKey = 'YOUR_API_KEY'; // 替換成你的 API 金鑰
  const searchText = 'YOUR_SEARCH_TERM'; // 替換成你想要搜尋的關鍵字
  const apiUrl = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&text=${searchText}&format=json&nojsoncallback=1`;

  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      // 步驟 3: 分析 Flickr API 回傳的 JSON
      analyzeFlickrData(data);
    })
    .catch(error => {
      console.error('Error fetching Flickr photos:', error);
    });
}