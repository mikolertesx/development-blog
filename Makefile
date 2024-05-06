remove_data:
	rm -rf ./temp

open_db:
	open http://localhost:8080/?pgsql=db&username=root&db=blog&ns=public

.PHONY:
	remove_data
