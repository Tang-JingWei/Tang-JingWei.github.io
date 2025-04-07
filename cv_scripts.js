// 图片数组，你需要替换成实际的图片路径
const images = [
    'images/jjw/1.png',
    'images/jjw/2.png',
    'images/jjw/3.png',
    // 可以继续添加更多图片
];

let currentIndex = 0;
const mainImage = document.getElementById('main-image');
const thumbnailContainer = document.querySelector('.thumbnail-container');

// 初始化缩略图
function initThumbnails() {
    images.forEach((image, index) => {
        const thumbnail = document.createElement('img');
        thumbnail.src = image;
        thumbnail.alt = `Thumbnail ${index + 1}`;
        thumbnail.className = 'thumbnail';
        thumbnail.onclick = () => setImage(index);
        thumbnailContainer.appendChild(thumbnail);
    });
    updateThumbnailActiveState();
}

// 设置当前显示的图片
function setImage(index) {
    currentIndex = index;
    mainImage.src = images[currentIndex];
    updateThumbnailActiveState();
}

// 更新缩略图的激活状态
function updateThumbnailActiveState() {
    const thumbnails = document.querySelectorAll('.thumbnail');
    thumbnails.forEach((thumbnail, index) => {
        if (index === currentIndex) {
            thumbnail.classList.add('active');
        } else {
            thumbnail.classList.remove('active');
        }
    });
}

// 切换图片
function changeImage(offset) {
    currentIndex = (currentIndex + offset + images.length) % images.length;
    setImage(currentIndex);
}

// 初始化
initThumbnails();