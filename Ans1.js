

/*
Que: 1
Consider the following array:
let allRead = true;

let notifications = [
    {message: ‘Lorem’, read: true},
{message: ‘Ipsum’, read: true},
{message: ‘Dolor’, read: true},
{message: ‘Sit’, read: false},
{message: ‘Amet’, read: true}
];

*/ 

let allRead = true;

let notifications = [
{message: 'Lorem', read: true},
{message: 'Ipsum', read: true},
{message: 'Dolor', read: true},
{message: 'Sit', read: false},
{message: 'Amet', read: true}
];


/************ANSWER****************/

let messageReadStatus = (m0, m1, m2, m3, m4) => {

    if (m0.read && m1.read && m2.read && m3.read && m4.read){
        allRead = true
    }else {
        allRead = false
    }
}
/************ANSWER****************/
