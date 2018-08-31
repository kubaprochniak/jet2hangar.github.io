# PWA

## Manifest.json file

### Display

The "display" can be set to:

- "browser" - Normal browser window view. Includes the search bar.
- "standalone" - Hides the search bar.
- "fullscreen" - Hides everything including the status bar and android navigation.

### Icons

### Description

"description" Provides a general description of what the web application does.

## Jekyll

https://jekyllrb.com/

Make sure all dependencies used by Jekyll are up to date

1. Ruby ```ruby -v``` We need version 2.2.5+
    To update
    ```curl -L https://get.rvm.io | bash -s stable``` 
    Restart terminal and run
    ```rvm install ruby-2.4.1```
2. Gems ```gem -v```
3. You'll also need to check if these are available
    ```gcc -v```, ```g++ -v``` and ```make -v``` 
    
Installing Jekyll on MacOS

1. ```xcode-select --install``` Might be already installed
2. ```gem install bundler jekyll``` Install Bundler and Jekyll 
3. Navigate to the project folder. 
4. To isntall the project run ```bundle install```

Run Jekyll

```bundle exec jekyll serve``` run this only after the initial setup or after changing settings/themes etc.
then you can run ```jekyll serve```

Navigate to http://127.0.0.1:4000