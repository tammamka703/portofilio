
import projects from "../data/project.js";


// bringing the container div from the documet to javascript file to manuplate it
const projectContainer = document.querySelector(".projects");

let item_element_flow = false;
// Creating an element for each project
const projects_items_array = projects.project_item.map((element)=>{
    // creating the project item 
    const projectItem = document.createElement("div");
    // adding the class name to it
    projectItem.classList.add("project_item");
    
    
    // creating the project caption div
    const projectCaption  = document.createElement("div");
    
    // setting up the class name for the div
    projectCaption.classList.add("project_caption");
    
    // creating the children of the caption element
    const h1 = document.createElement("h1");
    const p = document.createElement("p");
    const a = document.createElement("a");
    const h3 = document.createElement("h3");
    // setting up the text values of each child  (only text we add in this way)
    h1.innerText = element.name;
    h1.classList.add("under_lined");
    p.innerText = element.discription;
    h3.innerText = "Technologies :";
    h3.classList.add("under_lined");
    a.innerText = "See More";
    
    // unorder list for the tools and prgramming languages for each project;
    const toolList = document.createElement('ul');
    
    element.technologies.forEach((item)=>{
        // creating the list item <li></li>
        const li = document.createElement("li");
        li.innerText = item;
        toolList.append(li);
    })

    console.log(toolList)
    // setting up the href atribute for the a tag
    a.setAttribute("href",element.link)
    
    console.log("the anchore tag after adding the text and the href attribute:")
    console.log(a)
    
    // this function will put the elements we created in the div we created for projectCaption
    projectCaption.append(h1,p,h3,toolList,a)
    
    // lets console it to be sure that the element in the write place
    console.log("project caption div :")
    console.log(projectCaption)
    
    // ___________________________________________________________________
    
    // lets create the img container
    
    const project_img_container = document.createElement("div");
    project_img_container.classList.add("images_wrapper")
    
    
    // Creating four container for each img
    const imgContainers = element.imgSrc.map((imgsrc)=>{
        const imgContainer = document.createElement("div");
        imgContainer.classList.add("image_container");
        const img = document.createElement("img");
        img.setAttribute("src",imgsrc);
        imgContainer.append(img);
        return imgContainer;
    })

    // giving a special class name for the first and the second containers
    imgContainers[0].classList.add("first_img")
    imgContainers[1].classList.add("second_img")

    // check if the array is working
    console.log(imgContainers)

    // creating the wrapper which will wrap the all img contaniers
    const imgWrapper = document.createElement("div")
    imgWrapper.classList.add("images_wrapper")
    // lets console it to see if it done right
    imgContainers.forEach((item)=>{
        console.log("there is the img items")
        console.log(item)
        imgWrapper.appendChild(item)
    })
    console.log("the project img wrapper")
    console.log(imgWrapper)
    

    // ____________________________________________________________________
    // adding the project caption elemetnt and the project img container to the project item div

    if(item_element_flow){
        projectItem.append(projectCaption);
        projectItem.append(imgWrapper);
        item_element_flow = !item_element_flow;
    }else{
        projectItem.append(imgWrapper);
        projectItem.append(projectCaption);
        item_element_flow = !item_element_flow;
    }
    
    return projectItem;
})




// appendeing each element to the project gallery
projects_items_array.forEach((item)=>{
    projectContainer.append(item);
    console.log(item);
})
    
    
    
    
    
    
    
    
    




const projectsItems = document.querySelectorAll(".project_item");
const heroSection = document.querySelector(".hero");

  
  const observer = new IntersectionObserver(element =>{
    element.forEach(item=>{
        item.target.classList.toggle('active',item.isIntersecting)
    })
},{
    threshold:.3
})

projectsItems.forEach(item =>{
    observer.observe(item)
})

observer.observe(heroSection)

