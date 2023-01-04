// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

console.log('test');
return "pass";
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(type,data) 
{

	let markdown = "";

	switch(type)
	{
		case 'projectTitle':
			markdown = `# ${data}

			`;
		break;

		case 'description':
		markdown = `# ${data}

			`;
		break;

		case 'installationInstructions':
			markdown =  `# ${data}

			`;
		break;

		case 'usageInformation':
			markdown =  `# ${data}

			`;
		break;

		case 'contributionGuidelines':
			markdown =  `# ${data}

			`;
		break;

		case 'testInstructions':
			markdown =  `# ${data}

			`;
		break;

		case 'githubUsername':
			markdown =  `# ${data}

			`;
		break;

		case 'emailAddress':
			markdown =  `# ${data}

			`;
		break;
	}

	return markdown;

}

module.exports = generateMarkdown;
