const albumPhotos = [
    "park1.jpg",
    "room1.jpg",
    "coffie.jpg",
    "xmas1.jpg",
    "xmas2.jpg"
];

const albumGrid = document.getElementById('g-album');
let currentIndex = 0;

if (albumGrid) {
    if (albumPhotos.length === 0) {
        albumGrid.innerHTML = '<div class="empty">No photos yet.</div>';
    } else {
        // ഓരോ ഫോട്ടോയ്ക്കും അതിന്റെ ഇൻഡക്സ് (നമ്പർ) നൽകുന്നു
        albumGrid.innerHTML = albumPhotos.map((photo, index) => 
            `<img src="${photo}" class="gallery-img" onclick="openLightbox(${index})" alt="Album Photo">`
        ).join('');
    }
}

// ഫോട്ടോ തുറക്കാൻ
function openLightbox(index) {
    currentIndex = index;
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    if(lightbox && lightboxImg) {
        lightbox.style.display = "flex";
        lightboxImg.src = albumPhotos[currentIndex];
    }
}

// അടുത്തതോ മുൻപത്തേതോ ആയ ഫോട്ടോ കാണിക്കാൻ (Next / Prev)
function changeImage(event, step) {
    event.stopPropagation(); // ക്ലിക്ക് ചെയ്യുമ്പോൾ ലൈറ്റ്ബോക്സ് അടയാതിരിക്കാൻ
    currentIndex += step;
    
    // ആദ്യത്തെ ഫോട്ടോയിൽ നിന്ന് മുൻപോട്ട് പോയാൽ അവസാനത്തേതിലേക്കും, തിരിച്ചും പോകാൻ
    if (currentIndex >= albumPhotos.length) currentIndex = 0;
    if (currentIndex < 0) currentIndex = albumPhotos.length - 1;
    
    document.getElementById("lightbox-img").src = albumPhotos[currentIndex];
}

// ലൈറ്റ്ബോക്സ് അടയ്ക്കാൻ
function closeLightbox(event) {
    // ഇമേജിന് മേലെ ക്ലിക്ക് ചെയ്താൽ അടയാതിരിക്കാൻ
    if(event && event.target.id === "lightbox-img") return; 
    
    const lightbox = document.getElementById("lightbox");
    if(lightbox) {
        lightbox.style.display = "none";
    }
}
