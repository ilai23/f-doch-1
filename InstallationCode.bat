@echo off
mkdir "C:\Program Files\Fuck Doch 1"
set srcpath=%~dp0
echo To find your cookie go to the url: https://one.prat.idf.il
echo Login to your account, click F12, ctrl + r
echo Search in the sidebar for getUser, click it and scroll down, look for the header Request Headers
echo In Request Headers look for the label cookie and copy its content
set /p cookie="Cookie: "
xcopy /s "%srcpath%*.*" "C:\Program Files\Fuck Doch 1" 
echo COOKIE=%cookie%>"C:\Program Files\Fuck Doch 1\.env"
set /p time="Set Time(hh:mm format): "
SCHTASKS /CREATE /SC WEEKLY /D SUN,MON,TUE,WED,THU /TN "doch 1"  /TR "'C:\Program Files\nodejs\node.exe' 'C:\Program Files\Fuck Doch 1\node.js'" /ST %time%
set /p input="Installed in C:\Program Files\"