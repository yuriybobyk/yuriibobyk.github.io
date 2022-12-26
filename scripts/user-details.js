const url = new URL(location.href)
const id = url.searchParams.get('id')
const details_container = document.createElement('div')
details_container.classList.add('details_container')
document.body.appendChild(details_container)

fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(response => response.json())
    .then(response =>{
        for (const item in response) {
            const user_info = document.createElement('div')
            user_info.classList.add('user_info')
            details_container.appendChild(user_info)
            if (typeof response[item] !== 'object') {
                user_info.innerText = `${item}: ${response[item]}`
            }else {
                user_info.innerText = `${item} :`
                for (const data in response[item]) {
                    const address_info = document.createElement('div')
                    if (typeof response[item][data] !== 'object'){
                        address_info.innerText = `${data}: ${response[item][data]}`
                    }else {
                        address_info.innerText = `${data} :`
                        for (const element in response[item][data]) {
                            const company_info = document.createElement('div')
                            if (typeof response[item][data][element] !== 'object'){
                                company_info.innerText = `${element}: ${response[item][data][element]} `
                            }
                            address_info.appendChild(company_info)
                        }
                    }
                    user_info.appendChild(address_info)

                }
            }
        }
    })

const posturl = new URL(location.href)
const postid = posturl.searchParams.get('id') + '/posts';
fetch('https://jsonplaceholder.typicode.com/users/' + postid)
    .then(value => value.json())
    .then(value => {
        const postbtndiv = document.createElement('div')
        postbtndiv.classList.add('postbtndiv')
        details_container.appendChild(postbtndiv)
        const postbtn = document.createElement('button')
        postbtn.classList.add('post-btn')
        postbtn.innerText = 'post of current user';
        postbtndiv.appendChild(postbtn)
        postbtn.onclick = function (){
            const titlediv = document.createElement('div')
            titlediv.classList.add('title')
            details_container.appendChild(titlediv)
            for (const item of value) {
                const desc = document.createElement('div')
                desc.classList.add('desc')
                titlediv.appendChild(desc)
                desc.innerText = `${item.id} -- ${item.title}`
                const detailbtn = document.createElement('button')
                detailbtn.classList.add('detailbtn')
                detailbtn.innerText = 'Post details'
                detailbtn.onclick = function (){
                    window.location = 'post-details.html?post=' + JSON.stringify(item)
                }
                desc.appendChild(detailbtn)
            }
            postbtn.disabled = 'true';
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

