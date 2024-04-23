all:
	firebase deploy
	git add .
	git commit -a
	git push
