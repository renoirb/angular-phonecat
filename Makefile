SHELL  := bash
PATH   := bin:${PATH}
PWD    := $(shell dirname $(realpath $(lastword $(MAKEFILE_LIST))))

## References:
##  - https://www.gnu.org/software/make/manual/make.html
##  - http://makefiletutorial.com/

.DEFAULT: lint

.PHONY: lint
lint:
		find app -type f -name '*.js' -exec sh -c 'node_modules/.bin/eslint {}' \;

.PHONY: fix
fix:
		find app -type f -name '*.js' -exec sh -c 'node_modules/.bin/eslint --fix {}' \;
