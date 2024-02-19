document.addEventListener('DOMContentLoaded', function () {
    
    let pintristContainer = document.getElementsByClassName('pintristContainer')[0];
    let generate = document.getElementById('generate');
    let clear = document.getElementById('clear');

    function game() {
        pintristContainer.innerHTML = '';

        let imageFilenames = [
            'babycurry.jpg',
            'bay.jpg',
            'bigcat.jpg',
            'boat.jpg',
            'chinatown.jpg',
            'curry.jpg',
            'dog.jpg',
            'download.png',
            'Eddie.jpg',
            'escape.jpg',
            'forest.jpg',
            'forest2.jpg',
            'gphoto.jpg',
            'lights.jpg',
            'michael.jpeg',
            'museum.jpg',
            'palmtrees.jpg',
            'projects-header-img-b5b7c0ed250aa91d9c646254c007d226.jpeg',
            'sashacrying.jpg',
            'sentimental.jpg',
            'sunset.jpg',
            'tree.jpg',
            'unit1.jpg',
            'vegas.jpg',
            '4AD7493A-A5A3-421A-BF01-9E4CBB4AD3D5-1432-0000018D13FAF48C_tmp.jpeg',
            '027C4E82-954E-400D-96D6-A34C19F25921-3157-000002CD85789180_tmp.jpeg',
            '582502D7-7DF2-40D0-B29F-A9E12D6FFE9A.jpeg',
            '66465240240__FC28E8C2-8956-446C-8A28-E48AB345836C.jpeg',
            '70087783441__999B2321-61EE-4C0E-AD1E-C6ECE6DAB428.jpeg',
            '72877379862__4D8015C9-F029-49A6-B6A2-3CA4632907A9.jpeg',
            '72945952964__80AE0A0F-844B-4D4F-9554-52670BA4FBA5.jpeg',
            'IMG_0021.jpeg',
            'IMG_0218.jpeg',
            'IMG_0238.jpeg',
            'IMG_0708.jpeg',
            'IMG_0753.jpeg',
            'IMG_0928.jpeg',
            'IMG_0989.jpeg',
            'IMG_1040.jpeg',
            'IMG_1276.jpeg',
            'IMG_1646.jpeg',
            'IMG_1847.jpeg',
            'IMG_2136.jpeg',
            'IMG_2137.jpeg',
            'IMG_2428.jpeg',
            'IMG_2851.jpeg',
            'IMG_3092.jpeg',
            'IMG_3288.jpeg',
            'IMG_3459.jpeg',
            'IMG_3575.jpeg',
            'IMG_3832.jpeg',
            'IMG_3847.jpeg',
            'IMG_3864.jpeg',
            'IMG_4421.jpeg',
            'IMG_4454.jpeg',
            'IMG_5373.jpeg',
            'IMG_4470.jpeg',
            'IMG_4496.jpeg',
            'IMG_4542.jpeg',
            'IMG_4847.jpeg',
            'IMG_8341.jpeg'
        ];

        let randomizeThisList = [];

        for (let i = imageFilenames.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [imageFilenames[i], imageFilenames[j]] = [imageFilenames[j], imageFilenames[i]];
        }

        for (let i = 0; i < 10; i++) {
            let back = document.createElement('div');
            let card1 = document.createElement('div');
            let card2 = document.createElement('div');
            let imageElement = document.createElement('img');
            let copy = document.createElement('img');
            imageElement.src = 'image/' + imageFilenames[i];
            copy.src = 'image/' + imageFilenames[i];

            //creating elements
            back.classList.add('back');
            card1.classList.add('card');
            card2.classList.add('card');
            card1.appendChild(imageElement);
            card2.appendChild(copy);
            card1.appendChild(back);
            card2.appendChild(back)

            randomizeThisList.push(card1);
            randomizeThisList.push(card2);
        }

        for (let i = randomizeThisList.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [randomizeThisList[i], randomizeThisList[j]] = [randomizeThisList[j], randomizeThisList[i]];
        }

        for (let i = 0; i < randomizeThisList.length; i++) {
            let hoverContainer = document.createElement('div');
            hoverContainer.classList.add('hoverContainer');
            hoverContainer.appendChild(randomizeThisList[i]);
            pintristContainer.appendChild(hoverContainer);
        }
    }

    function cleared() {
        pintristContainer.innerHTML = '';
    }

    generate.addEventListener('click', game);
    clear.addEventListener('click', cleared);
});
