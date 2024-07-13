directus:
	docker compose -f docker-compose.yml up -d --build

down:
	docker compose -f docker-compose.yml down
	docker compose -f docker-compose.prod.yml down

dev:
	docker compose -f docker-compose.yml up -d --build
	cd frontend; npm i; npm run dev

prod:
	docker compose -f docker-compose.prod.yml up -d --build

prod-restart:
	docker compose -f docker-compose.prod.yml down
	docker compose -f docker-compose.prod.yml up -d --build

temp:
	echo "export PUBLIC_APIURL='http://0.0.0.0:8055/'"
#	echo "export PUBLIC_APIURL='https://trilum-admin.mmaroske.com/'"

#deploy:
#	cd frontend; npm run build
#	tar -czf build.tar.gz -C frontend/build .
#	scp -r build.tar.gz root@172.105.163.238:/var/trilum/frontend
#	ssh root@172.105.163.238 'cd /var/trilum/frontend && tar -xzf build.tar.gz -C build && rm build.tar.gz && cd /var/trilum && make prod-restart'
#	rm -f build.tar.gz
