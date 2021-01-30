# Part 3: Debugging
1. What was the bug
   1. Num1 and Num2 are of the string datatype, so it was not adding integers, but strings.
2. How would you fix it?
   1. I used the parseInt functionality to change num1 and num2 to ints. The screenshot is solution.png
# Part 3: Network Tab
1. What is the name of the new json file?
   1. citylots.json
2. Which file initiated the download of the new file?
   1.   VM15:1 is under Initiator, and it says fetchdata:part2.js
3.  What is its file size?
    1.  11.7 MB
4.  How long did it take to download?
    1.  11.38s
5. What was your User-Agent for the browser that made the request?
   1. Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.104 Safari/537.36
6. In the response, what type of server did it come from?
   1. I'm getting "Failed to load response data", I included a screen shot, instructions unclear.
7. When was the file last modified?
   1. Tue, 26 Jan 2021 22:14:13 GMT
8. What was the Content-Type of the file?
   1. application/json
9. Which method inside the initiating file made the request?
   1.  fetchData()