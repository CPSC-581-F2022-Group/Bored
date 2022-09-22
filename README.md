# Bored!

Staying full in the Morning!



## Local development

Because web developers suck at security (lookup local file CORS violation if you're interested) images can't be loaded from a local drive. When we upload the project to github it will work, just won't work locally. 

In the meantime to run it locally you will need to:

1. install python 3 and python pip (if on windows **do not install from windows store** nothing will work properly because microsoft sucks)

2. Run `pip install flask` or `pip3 install flask` or `sudo python3 -m pip install flask`

3. To run the server run `python routes.py` or `python3 routes.py`

4. Navigate to [localhost:5000](http://localhost:5000) and you will see the app
