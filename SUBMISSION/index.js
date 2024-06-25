const scrollContainers = document.querySelectorAll(".gallery_container .slide_cont");
const prevButtons = document.querySelectorAll(".prev");
const nextButtons = document.querySelectorAll(".next");

scrollContainers.forEach((container, index) => {
    // Sembunyikan tombol prev saat halaman dimuat
    prevButtons[index].style.display = "none";

    container.addEventListener("scroll", () => {
        const scrollLeft = container.scrollLeft;
        const scrollWidth = container.scrollWidth - container.clientWidth;
        
        // Atur tampilan tombol prev
        if (scrollLeft === 0) {
            prevButtons[index].style.display = "none"; // Jika di slide pertama, sembunyikan tombol prev
        } else {
            prevButtons[index].style.display = "block"; // Jika tidak di slide pertama, tampilkan tombol prev
        }

        // Atur tampilan tombol next
        if (scrollLeft >= scrollWidth - 1) {
            nextButtons[index].style.display = "none"; // Jika di slide terakhir, sembunyikan tombol next
        } else {
            nextButtons[index].style.display = "block"; // Jika tidak di slide terakhir, tampilkan tombol next
        }
    });

    // Event listener untuk tombol prev
    prevButtons[index].addEventListener("click", () => {
        container.scrollBy({
            left: -1200,
            behavior: 'smooth'
        });
    });

    // Event listener untuk tombol next
    nextButtons[index].addEventListener("click", () => {
        container.scrollBy({
            left: 1200,
            behavior: 'smooth'
        });
    });

    // Mengatur bahwa galeri tidak dapat digeser secara manual
    container.addEventListener("wheel", (evt) => {
        evt.preventDefault();
    });

    const galleryImages = document.querySelectorAll('.gallery img');

    galleryImages.forEach(img => {
        img.addEventListener('wheel', (evt) => {
            evt.stopPropagation(); // Pastikan tidak menghentikan propagasi event
        });
    });

});
