.PHONY: serve build

serve:
	uv run mkdocs serve --livereload -a localhost:8001

build:
	uv run mkdocs build
