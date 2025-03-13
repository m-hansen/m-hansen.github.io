readFile("/../json/content.json");

function readFile(file)
{
	var f = new XMLHttpRequest();
	f.open("GET", file, false);
	f.onreadystatechange = function()
	{
		if (f.readyState === 4 && (f.status === 200 || f.status == 0))
		{
			var obj = JSON.parse(f.responseText);
			
			// About section
			document.getElementById(obj.personal.ids[0]).innerHTML=obj.personal["name"];
			document.getElementById(obj.personal.ids[1]).innerHTML=obj.personal["profession"];
			document.getElementById(obj.personal.ids[2]).innerHTML=obj.personal["bio"]
			
			// Project modals
			Object.entries(obj.projects).forEach(
				([index, project]) => {
					document.getElementById(project.ids[0]).innerHTML=project["title"];
					document.getElementById(project.ids[1]).innerHTML=project["description"];

					// Create tags
					Object.entries(project.tags).forEach(
						([i, tag]) => {
							document.getElementById(project.ids[2]).innerHTML+="<div class=\"tag\">" + tag + "</div>";
						}
					);
				}
			);
		}
	}
	f.send(null);
}