import { PageRender, retrivedData } from '/lecture_website_template/js/pageRender.js';
// Data file paths
let TAECHING_JSON = "/lecture_website_template/data/jsons/teaching.json";

class CoursePage extends PageRender{
    constructor() 
	{
        super();
        var getParms = PageRender.readGetPrams();
        getParms.get("course")
    }
    
    build(){
        this.createBreadcrumb();
    }

    //create html of Breadcrumb
    createBreadcrumb(){
        //add links!
        var html='<ul><li><a href="#">Home</a></li><li><a href="#">Courses</a></li><li>Name Course</li></ul>';
        document.getElementById("breadcrumb_section").innerHTML = html;
    }
    
    //create html for the body sections
    createSectionData(title, subTitle, text){
        var html = '<div class="main-body-page"><h3>'
        + title + '</h3><hr><h2>'
        + subTitle + '</h2><p>'
        + text + '</p><div class="person-row"><span class="main-dot"></span><span class="main-dot"></span><span class="main-dot"></span></div></div>';
        document.getElementById("body-section").innerHTML = html;
    }

}
// run the class build on page load
document.coursePage = new CoursePage();
document.coursePage.build();

export { CoursePage }
