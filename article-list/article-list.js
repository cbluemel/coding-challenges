const articles = [
    {
        src: 'https://placebear.com/50/50',
        title: 'Article 1',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec erat lacus, dignissim ac orci eget, sollicitudin bibendum velit. Nam aliquet ornare mi ut sollicitudin. Suspendisse vitae viverra arcu. Phasellus ultricies, ligula ac ultrices egestas, leo nunc consequat massa, in tempus ex ipsum a nulla. Donec mattis lorem sit amet pulvinar laoreet. Mauris pharetra in sem id maximus. Integer sit amet aliquam lectus. Aenean fringilla tellus eget malesuada rutrum. Proin ac purus eleifend, eleifend nulla sed, mattis quam. Nunc faucibus sagittis orci non sollicitudin. Duis porttitor quam lacus, vel tincidunt quam bibendum et.',
        favorite: false
    },
    {
        src: 'https://placebear.com/50/50',
        title: 'Article 2',
        desc: 'Suspendisse accumsan nibh dignissim libero ultrices facilisis. Suspendisse efficitur elit non gravida tincidunt. Morbi at lobortis est, non porta dolor. Fusce semper enim id gravida congue. Donec scelerisque sed magna in convallis. Nam egestas tincidunt pharetra. Nullam venenatis, augue nec feugiat sagittis, est massa cursus metus, sed rhoncus ipsum ex eu libero. Cras imperdiet quam at massa pellentesque vulputate sit amet sit amet justo. Aenean ac auctor ligula. Integer in dictum lacus. Nulla cursus est id justo imperdiet fringilla. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam felis augue, bibendum a ex et, venenatis dapibus mi. Curabitur in suscipit lacus.',
        favorite: true
    },
    {
        src: 'https://placebear.com/50/50',
        title: 'Article 3',
        desc: 'In vulputate libero vitae elit imperdiet viverra. Donec fermentum metus eget magna mattis euismod. Vestibulum sagittis accumsan erat vel posuere. Nulla sapien metus, mattis id urna eget, interdum vestibulum augue. Donec finibus purus eu leo hendrerit, ut molestie nunc aliquam. Nunc elementum, metus quis accumsan molestie, erat ipsum finibus velit, nec eleifend sapien dolor sit amet urna. Vestibulum imperdiet accumsan arcu, ut aliquet ipsum venenatis non. Cras sodales consectetur arcu id dapibus. Pellentesque sed nisi laoreet, finibus enim vitae, egestas ante.',
        favorite: false
    },
    {
        src: 'https://placebear.com/50/50',
        title: 'Article 4',
        desc: 'Mauris nec consequat orci, ornare pretium risus. Fusce ullamcorper felis vel fringilla dapibus. Donec sit amet congue dolor, eu hendrerit orci. Proin facilisis placerat maximus. Vestibulum ornare vitae diam ac mollis. Mauris a lorem dapibus augue venenatis venenatis. Suspendisse tempor posuere nulla, sed pharetra mi.',
        favorite: false
    },
    {
        src: 'https://placebear.com/50/50',
        title: 'Article 5',
        desc: 'Nam tincidunt lacus sit amet justo rhoncus, sit amet sollicitudin magna gravida. Aliquam porttitor ante ac commodo suscipit. Sed non elementum magna. Nulla euismod finibus vestibulum. Ut non cursus libero, at sagittis tellus. Curabitur velit ligula, pulvinar sed justo vel, tempus lobortis tellus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aenean sed sapien id libero condimentum finibus. Curabitur bibendum congue ex, at fringilla enim. Aliquam tempor, quam quis dignissim lacinia, nulla sapien aliquet purus, vel lobortis tellus metus in purus. Nunc suscipit dapibus nulla, ac sollicitudin neque fringilla eget.',
        favorite: false
    },
];
let main;

function loadAllArticles() {
    main = document.getElementsByTagName('main')[0];
    articles.forEach((article) => {
        loadArticle(article);
    });
}

function loadArticle(article) {
    // Is there a better way to do this? Can't guarantee titles will be unique. Would probably be better to get an id from the data source
    let articleId = article.title.replace(' ', '-').toLowerCase();
    let documentArticle = document.getElementById(articleId);
    if (!documentArticle) {
        documentArticle = createHtmlNode('article', articleId);
        addArticle(documentArticle, articleId, article);
    } else {
        updateArticle(articleId, article);
    }
}

function addArticle(domElement, baseId, articleData) {
    domElement.onclick = () => {
        articleData.favorite = !articleData.favorite;
        loadArticle(articleData);
    }

    let favoriteContainer = document.createElement('div');
    let favoriteIcon = createHtmlNode('span', `${baseId}-favorite`, '&#x2764;');
    if (articleData.favorite) {
        favoriteIcon.className = "favorite";
    }
    favoriteContainer.appendChild(favoriteIcon);
    domElement.appendChild(favoriteContainer);

    let imageContainer = document.createElement('figure');
    let image = createHtmlNode('img', `${baseId}-image`, null, articleData.src);
    imageContainer.appendChild(image);
    domElement.appendChild(imageContainer);

    let descriptionContainer = document.createElement('section');
    let title = createHtmlNode('h3', `${baseId}-title`, articleData.title);
    descriptionContainer.appendChild(title);
    let description = createHtmlNode('div', `${baseId}-description`, articleData.desc);
    descriptionContainer.appendChild(description);
    domElement.appendChild(descriptionContainer);

    main.appendChild(domElement);
}

function updateArticle(baseId, articleData) {
    document.getElementById(`${baseId}-favorite`).className = articleData.favorite ? 'favorite' : '';
}

function createHtmlNode(tagName, id, innerHtml, src) {
    let htmlNode = document.createElement(tagName);
    htmlNode.id = id;
    if (innerHtml) {
        htmlNode.innerHTML = innerHtml;
    }
    if (src) {
        htmlNode.src = src;
    }

    return htmlNode;
}