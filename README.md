# define-interaction

Scraping is a bottle neck when it comes to bot interactions online. Is there any way around that?

The idea here is to create a npm package that tackles this problem. You download it and then a build step is added to your project that generates file(s) to help bots navigate/interact with your site.

I'm not set on the contents of the file but it would be some form of minified version of the page that defines the interactive elements of the page, how to access them and what type of data to find on the page.

Bots benefit because the initial parsing phase doesn't get re-run everytime the site is revisited and site owners benefit because they get to define the interaction with their website.
