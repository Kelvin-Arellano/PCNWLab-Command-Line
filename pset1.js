/******************
PROBLEM 1:

Follow the following steps ONLY using your command line:

1. Navigate to your Desktop directory.
2. Create a directory called my_first_direc.
3. Enter the my_first_direc directory.
4. Create a file called first.js.
5. Create a folder called assignments.
6. Move first.js into assignments.
7. Go into the assignments folder.
8. Delete first.js.
9. Go up to the my_first_direc directory.
10. Delete the assignments folder.
11. Go up to the Desktop directory.
12. Delete the test folder.
Kelvins-MacBook-Air:PCNWLab-Command-Line kelvinarellano$ cd ~
Kelvins-MacBook-Air:~ kelvinarellano$ ls
Applications    Documents       Library         Music           Postman
Desktop         Downloads       Movies          Pictures        Public
Kelvins-MacBook-Air:~ kelvinarellano$ cd Desktop/
Kelvins-MacBook-Air:Desktop kelvinarellano$ mkdir my_first_direc
Kelvins-MacBook-Air:Desktop kelvinarellano$ cd my_first_direc/
Kelvins-MacBook-Air:my_first_direc kelvinarellano$ touch first.js
Kelvins-MacBook-Air:my_first_direc kelvinarellano$ cd ..
Kelvins-MacBook-Air:Desktop kelvinarellano$ mkdir assignments
Kelvins-MacBook-Air:Desktop kelvinarellano$ mv my_first_direc/first.js cd assignments/
mv: rename cd to assignments/cd: No such file or directory
Kelvins-MacBook-Air:Desktop kelvinarellano$ cd assignments/
Kelvins-MacBook-Air:assignments kelvinarellano$ rm first.js 
Kelvins-MacBook-Air:assignments kelvinarellano$ ls
Kelvins-MacBook-Air:assignments kelvinarellano$ pwd
/Users/kelvinarellano/Desktop/assignments
Kelvins-MacBook-Air:assignments kelvinarellano$ cd ,,
bash: cd: ,,: No such file or directory
Kelvins-MacBook-Air:assignments kelvinarellano$ ls
Kelvins-MacBook-Air:assignments kelvinarellano$ cd ..
Kelvins-MacBook-Air:Desktop kelvinarellano$ ls
Getting_it                                      my_first_direc
Kelvin_Arellano_Gits                            pset2
Screen Shot 2019-09-24 at 8.27.16 PM.png        toughStuff
assignments
Kelvins-MacBook-Air:Desktop kelvinarellano$ rm -r my_first_direc/
Kelvins-MacBook-Air:Desktop kelvinarellano$ pwd
/Users/kelvinarellano/Desktop
Kelvins-MacBook-Air:Desktop kelvinarellano$ cd Getting_it/
Kelvins-MacBook-Air:Getting_it kelvinarellano$ ls
Hardwork.md             PCNWLab-Command-Line    easyBreezy
Kelvins-MacBook-Air:Getting_it kelvinarellano$ cd PCNWLab-Command-Line/
Kelvins-MacBook-Air:PCNWLab-Command-Line kelvinarellano$ ls
README.md       pset1.js        pset2.js        stuff
Kelvins-MacBook-Air:PCNWLab-Command-Line kelvinarellano$ git status
On branch master
Your branch is up to date with 'origin/master'.

nothing to commit, working tree clean
Kelvins-MacBook-Air:PCNWLab-Command-Line kelvinarellano
******************/



/******************
PROBLEM 2:

Follow the following steps ONLY using your command line:

1. Navigate to the inside of your Documents folder
3. Create a file called foo.js
4. Open the file with a text editor, (Atom/VSCode)
5. Add the following text to the file: console.log('hello')
6. Save and exit the file
7. Open the file again with a text editor, (Atom/VSCode)
8. Add the following in a new line: hellohellohello
9. Exit without saving

******************/




