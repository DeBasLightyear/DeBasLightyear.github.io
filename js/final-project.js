// Todo: Create main CV elements in Divs

//--------------------------------------------------------------
//...............Arrays for holding all text....................
//--------------------------------------------------------------
const cvContent = [
  "Work experience",
  "Education",
  "Certificates",
  "Skills",
  "Interests",
  "Profiles",
  "Contact"
]

const workExperience = [
  "Embrace IT - Junior Software Engineer",
  "PMT Groep - Junior Consultant",
  "CSV Ichthus Rotterdam - Treasurer",
  "Wybenga Advocaten - Legal Intern"
]
const workExperienceDescription = [
  //Beware: Placeholder text
"We build IT stuff",
"Maak die pensioenkeuze nou gewoon",
"Ka ching",
"I've got no idea what I'm doing, but I seem to be doing OK"
]

const education = [
  "Embrace IT - Web development traineeship",
  "Erasmus University Rotterdam - LLM Health Law",
  "Erasmus University Rotterdam - LLB Dutch Law"
]
const educationDescription = [
   //Beware: Placeholder text
   "We build IT stuff",
   "Boy, I hope I'll actually be able to find a job",
   "Wow, all these potential jobs look great!"
]

const certificates = [
  "W3C HTML",
  "W3C CSS",
  "W3C Javascript",
  "Coursera HTML, CSS and JavaScript for Web Developers",
  "Coursera SQL",
  "Agile/Scrum",
  "Wft vermogen",
  "Wft inkomen",
  "Wft basis"
]

const madSkills = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "Jquery",
  "Bootstrap",
  "TMap",
  "Agile/Scrum",
  "Git",
  "Jira"
]

const interests = [
  "Music and guitar",
  "Audio production",
  "Film",
  "Video Games"
]

const profiles = [
  "LinkedIn",
  "GitHub"
]

//--------------------------------------------------------------
//...............Behold all functions below.....................
//--------------------------------------------------------------

function selectContentForSection(sectionId){
  
}

/* Functions for creating divs for content of CV with correct id
(respectively Work experience, skills etc and Embrace, PMT, Wybenga etc)*/
function createSections(){
  const elements = []
  for (let section of cvContent){
    const sectionElement = document.createElement("div")
    sectionElement.setAttribute("id", section)
    sectionElement.setAttribute("class", "section")
    elements.push(sectionElement)
  }
  return elements
}

function createSubSections(contentArray, isItaDescrption){
  const subElements = []
  for (let content of contentArray){
    const sectionElement = document.createElement("div")
    if (isItaDescrption){
      sectionElement.setAttribute("id", "description")
    }
    else{
      sectionElement.setAttribute("id", "card")
    }
    subElements.push(sectionElement)
  }
}

/* Function for inserting HTML generated by aforementioned functions into index.html*/
function insertSectionsIntoBodyCV(){
  const elementsCV = createSections()
  const bodyCV = document.getElementById("bodyCV")
  for (let element of elementsCV){
    bodyCV.appendChild(element)
  }
}
