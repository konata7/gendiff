install:
	npm ci --legacy-peer-deps
	npm link

run:
	node bin/gendiff.js
test:
	npx jest

test-coverage:
	npx jest --coverage --coverageProvider=v8

lint:
	npx eslint .

.PHONY: test