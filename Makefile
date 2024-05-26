all:
	firebase deploy
	git add .
	git commit -a
	git push

debug:
	firebase emulators:start

