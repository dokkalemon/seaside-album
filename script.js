const photo = [
    './img/event/DSC_0001.jpg',
    './img/event/DSC_0002.jpg',
    './img/event/DSC_0003.jpg',
    './img/event/DSC_0004.jpg',
    './img/event/DSC_0005.jpg',
    './img/event/DSC_0006.jpg',
    './img/event/DSC_0007.jpg',
    './img/event/DSC_0008.jpg',
    './img/event/DSC_0009.jpg',
    './img/event/DSC_0010.jpg',
    './img/event/DSC_0011.jpg',
    './img/event/DSC_0012.jpg',
    './img/event/DSC_0013.jpg',
    './img/event/DSC_0014.jpg',
    './img/event/DSC_0015.jpg',
    './img/event/DSC_0016.jpg',
    './img/event/DSC_0017.jpg',
    './img/event/DSC_0018.jpg',
    './img/event/DSC_0019.jpg',
    './img/event/DSC_0020.jpg',
    './img/event/DSC_0021.jpg',
    './img/event/DSC_0022.jpg',
    './img/event/DSC_0023.jpg',
    './img/event/DSC_0024.jpg',
    './img/event/DSC_0025.jpg',
    './img/event/DSC_0026.jpg',
    './img/event/DSC_0027.jpg',
    './img/event/DSC_0028.jpg',
    './img/event/DSC_0029.jpg',
    './img/event/DSC_0030.jpg',
    './img/event/DSC_0031.jpg',
    './img/event/DSC_0032.jpg',
    './img/event/DSC_0033.jpg',
    './img/event/DSC_0034.jpg',
    './img/event/DSC_0035.jpg',
    './img/event/DSC_0036.jpg',
    './img/event/DSC_0037.jpg',
    './img/event/DSC_0038.jpg',
    './img/event/DSC_0039.jpg',
    './img/event/DSC_0040.jpg',
    './img/event/DSC_0041.jpg',
    './img/event/DSC_0089.jpg',
    './img/event/DSC_0090.jpg',
    './img/event/DSC_0091.jpg',
    './img/event/DSC_0092.jpg',
    './img/event/DSC_0093.jpg',
    './img/event/DSC_0094.jpg',
    './img/event/DSC_0095.jpg',
    './img/event/DSC_0096.jpg',
    './img/event/DSC_0097.jpg',

]

const albumContainer = document.querySelector('.album-container')

photo.forEach((el, index) => {
    const image = document.createElement('div');
    image.classList.add('image');
    albumContainer.append(image);

    const imageTag = document.createElement('img');
    imageTag.setAttribute('src', el);
    image.append(imageTag)

})
