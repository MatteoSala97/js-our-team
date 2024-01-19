/*********** MILESTONES 0 - 1 ***********/
const member1 = {
    firstName : "Wayne",
    lastName : "Barnett",
    role : "Founder & CEO",
    portrait : "./assets/img/wayne-barnett-founder-ceo.jpg"
}
const member2 = {
    firstName : "Angela",
    lastName : "Carrol",
    role : "Chief Editor",
    portrait : "./assets/img/angela-caroll-chief-editor.jpg"
}
const member3 = {
    firstName : "Walter",
    lastName : "Gordon",
    role : "Office Manager",
    portrait : "./assets/img/walter-gordon-office-manager.jpg"
}
const member4 = {
    firstName : "Angela",
    lastName : "Lopez",
    role : "Social Media Manager",
    portrait : "./assets/img/angela-lopez-social-media-manager.jpg"
}
const member5 = {
    firstName : "Scott",
    lastName : "Estrada",
    role : "Developer",
    portrait : "./assets/img/scott-estrada-developer.jpg"
}
const member6 = {
    firstName : "Barbara",
    lastName : "Ramos",
    role : "Graphic Designer",
    portrait : './assets/img/barbara-ramos-graphic-designer.jpg'
}

const arrayMembers = [member1, member2, member3, member4,member5, member6]

for (i = 0; i < arrayMembers.length; i++){
    console.log(arrayMembers[i])
}

/*********** MILESTONE 2 ***********/

const mainElement = document.querySelector('main')


for (var i = 0; i < arrayMembers.length; i++) {
    // takes the members from the array
    var member = arrayMembers[i]

    // creates a new div element for each member
    var memberDiv = document.createElement('div')
    memberDiv.classList.add('member')

    // Create and set the HTML content for each member
    memberDiv.innerHTML = '<img src="' + member.portrait + '" alt="' + member.firstName + ' ' + member.lastName + '" />' +
    '<h2>' + member.firstName + ' ' + member.lastName + '</h2>' +
    '<p>' + member.role + '</p>'

    // appends the memberDiv to the main
    mainElement.appendChild(memberDiv)
}