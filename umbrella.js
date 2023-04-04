const colorSwatches = document.querySelectorAll('.color-swatch');
const umbrellaPreview = document.querySelector('.umbrella-preview');
const umbrellapage = document.querySelector('.umbrella-page')
const uploadcolor = document.querySelector('.upload-input')
const fileInput = document.querySelector('input[type="file"]');
let spinner = document.getElementById('spinner')
let showlogo = document.getElementById('showlogo')

colorSwatches.forEach(swatch => {
    swatch.addEventListener('click', function () {

        const color = this.classList[1];
        const color2 = this.classList[2];
        const uploadcolornew = this.id;

        umbrellaPreview.classList.remove('pink', 'blue', 'yellow');
        spinner.style.display = 'block'
        showlogo.style.display = 'none'
        setTimeout(() => {
            spinner.style.display = 'none'
            umbrellaPreview.classList.add(color);
            uploadcolor.id = uploadcolornew;
            showlogo.style.display = 'block'
            umbrellapage.classList.remove('pinkish', 'blueish', 'yellowish');
            umbrellapage.classList.add(color2);
        }, 2000);
    });
});


fileInput.addEventListener('change', function () {
    const file = this.files[0];
    const reader = new FileReader();
    reader.onload = function () {
        showlogo.style.display = 'block'
        umbrellaPreview.querySelector('img:nth-child(2)').src = reader.result;
    }
    reader.readAsDataURL(file);
});



