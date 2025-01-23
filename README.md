# GSheets_Mass_Link_Styling
Google sheets doesn't really offer a "CSS" function for the spreadsheets. So, what if you want to style just the links?

These codes are your answer!

The code selects exclusively links and changes their color. This is a versatile function; you can add features to change other style types, make "striped" link colors, or make them "hidden" in a colored cell every time you change the cell's color.

I am no genius; I drew from several different sources to make this work:

# References
## Sources (Giant Codes/Major Backbones):
- **RichTextValues mapping** | Youtube Video: https://youtu.be/EsBhbjdrI-k?si=QteBvWW5p41UoRLF; GitHub file: https://github.com/ashtonfei/live-coding/blob/main/src/projects/LC015/Code.js
- **Extract Hyperlinks from text (loop)** | Medium Article: https://aryanirani123.medium.com/extract-hyperlinks-from-text-in-google-sheets-using-google-apps-script-cca56aba4c27; GitHub: https://github.com/aryanirani123/Google-Apps-Script/blob/master/ExtractURL.js?source=post_page-----cca56aba4c27-------------------------------- 

## StackOverflow/forum Sources:
- **Get hex of cell color:** https://stackoverflow.com/questions/58768268/get-hex-of-cell-colours
- **Only do onChange function for one cell:** https://stackoverflow.com/questions/74542978/onchange-trigger-on-specific-cell-value-change-google-apps-script

## Merged Cell sources
~~...Just in case the code breaks on merged cells (again) and I have to do revisions.~~
- **Medium article:** https://medium.com/google-cloud/technique-for-processing-google-spreadsheet-including-merged-cells-using-google-apps-script-80740e3f1519
- (What I can gather from the Medium article is to experiment with filling all cells in a merged range with the one from the first cell.)
- **Reddit question:** https://www.reddit.com/r/googlesheets/comments/1ajm4d6/comment/kp24i3c/?context=3&share_id=ysd490v1eE4_W8RQmncF5&utm_content=1&utm_medium=ios_app&utm_name=ioscss&utm_source=share&utm_term=1

- **isHexColor function:** https://www.geeksforgeeks.org/javascript-check-if-a-string-is-a-valid-hex-color-representation/
-  **Mobile onEdit Button:** https://youtu.be/SERvgSdWugc?si=XPYuUZHO4omxsBvx


