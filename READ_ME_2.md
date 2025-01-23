These codes are just copied from a dummy spreadsheet; you can see it [here](https://docs.google.com/spreadsheets/d/1E4lgSHAq4wWVef0fy3RJXqVcupbR9XnFZ7broiHpv7Y/edit?usp=sharing).

But, what if you don't want to access Apps Scrips? And what if the spreadsheet gets compromised?

I'll be descriptive about what does what.

Also, if you're wondering about the nested functions mapped to values (as in, why I didn't use a "for" loop like on that Medium article), it's because the function needs to complete between every cell. If there was definitively going to be 1 link in each cell, I could've done it that way...but it just won't work if there's more than 1 link. The code will reach the first link in the array and clear the links everywhere else. Even when you take out the "break" that stops logging the urls in a cell, this will happen. Maybe someone brighter than me can make it work for them, heh.
