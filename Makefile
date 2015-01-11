.PHONY: ext all publish

# Put local npm installed scripts to path
export PATH := node_modules/.bin:$(PATH)

ext:    ## use jquery as external reference
	browserify -x jQuery ./app/main.js > static/bundle.js

jst:    ## use jquery as external reference
	browserify -t jstify -x jQuery ./app/main.js > static/bundle.js

all:
	browserify ./app/main.js > static/bundle.js

watch:
	watchify ./app/main.js -o static/bundle.js

publish:
	browserify ./app/main.js | uglifyjs > static/bundle.js
