const detailurl = new URL(location.href);
const detail = detailurl.searchParams.get('post')
const parse = JSON.parse(detail)

const detailcontainer = document.createElement('div')
detailcontainer.classList.add('detailcontainer')
document.body.appendChild(detailcontainer);

for (const item in parse) {
    const infodiv = document.createElement('div')
    infodiv.classList.add('infodiv')
    detailcontainer.appendChild(infodiv)
    infodiv.innerText = `${item} -- ${parse[item]}`
}

const commenturl = parse.id + '/comments'
fetch('https://jsonplaceholder.typicode.com/posts/' + commenturl)
    .then(response => response.json())
    .then(response =>{
        const buttondiv = document.createElement('div')
        buttondiv.classList.add('buttondiv')
        detailcontainer.appendChild(buttondiv)
        const commentbtn = document.createElement('button')
        commentbtn.classList.add('commentbtn')
        commentbtn.innerText = 'Comments to post'
        buttondiv.appendChild(commentbtn)
        commentbtn.onclick = function (){
            const commentdiv = document.createElement('div')
            commentdiv.classList.add('commentdiv')
            detailcontainer.appendChild(commentdiv)
            for (const element of response) {
                const commentdesc = document.createElement('div')
                commentdesc.classList.add('commentdesc')
                commentdesc.innerText = `${element.postId} -- ${element.body}`
                commentdiv.appendChild(commentdesc)
            }
            commentbtn.disabled = 'true'
        }
    })

const futter = document.createElement('div')
futter.classList.add('futter')
document.body.appendChild(futter)
const git = document.createElement('i')
git.classList.add('fa-brands', 'fa-github')
const gitlink = document.createElement('a')
gitlink.classList.add('gitlink')
gitlink.appendChild(git)
gitlink.href = 'https://github.com/yuriybobyk';
gitlink.target = '_blank'
futter.appendChild(gitlink)
const telegram = document.createElement('i')
telegram.classList.add('fa-brands', 'fa-telegram')
const telegramlink = document.createElement('a')
telegramlink.classList.add('telegramlink')
telegramlink.appendChild(telegram)
telegramlink.href = 'https://t.me/yura_bobyk'
telegramlink.target = '_blank'
futter.appendChild(telegramlink)
const insta = document.createElement('i')
insta.classList.add('fa-brands', 'fa-instagram')
const instalink = document.createElement('a')
instalink.classList.add('instalink')
instalink.appendChild(insta)
instalink.href = 'https://www.instagram.com/yurii__bobyk_/'
instalink.target = '_blank'
futter.appendChild(instalink)
const twitter = document.createElement('i')
twitter.classList.add('fa-brands', 'fa-twitter')
const twitlink = document.createElement('a')
twitlink.classList.add('twitlink')
twitlink.appendChild(twitter)
twitlink.href = 'https://twitter.com/YuriiBobyk'
twitlink.target = '_blank'
futter.appendChild(twitlink)
const signy = document.createElement("h5")
signy.classList.add('signy')
signy.innerText = '© 2022 Yurii Bobyk'
futter.appendChild(signy)


