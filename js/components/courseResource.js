import { Element } from '/lecture_website_template/js/components/element.js';
import {Course} from '/lecture_website_template/js/components/course.js';

class CourseResource extends Element
{
	constructor(name, link, description, type)
	{
		super();
		this.name = name;
		this.link = link;
		this.description = description;
		this.type = type;
	}
	
	// convert the object into HTML
	toHtml(lastVisit)
	{
		let img = '<img src="';
		switch (this.type) {
			case "slides":
				img += '/lecture_website_template/img/mdi_slideshow.png';
				break;
			case "video":
				img += '/lecture_website_template/img/mdi_video_library.png';
				break;
			default:
				img += '/lecture_website_template/img/mdi_insert_drive_file.png';
				break;
		}

		img += '" class="resource-img"/>';
		
		let html = '<div class="resource-content"><a href="'+ this.link + '" class="resource-link">' + img
				  + this.name + '</a><p class="resource-description">' + Course.descriptionTrim(this.description) + '</p></div>';

		return html;
	}
	
	// build a list of this object from Json object
	static createListFromJson(jsonObj)
	{
		var resourcesList = [];
		for(const resourceType in jsonObj) {
			let resourcesArray = [];

			jsonObj[resourceType].forEach(resource => {
				resourcesArray.push(CourseResource.createFromJson(resource));
			});

			resourcesList.push({[resourceType] : resourcesArray});
		};
		return resourcesList;

	}
	
	// build a list of this object from Json object
	static createFromJson(jsonObj)
	{

		return new CourseResource(jsonObj["name"],
		jsonObj["link"], 
		jsonObj["description"], 
		jsonObj["type"]);

	}
}
export {CourseResource};