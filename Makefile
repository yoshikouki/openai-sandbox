PORT=8888
IMAGE_NAME=aic
include .env

build:
	@docker build . -t $(IMAGE_NAME)

run/production:
	@$(MAKE) build
	@docker run --rm \
	-e OPENAI_API_KEY=$(OPENAI_API_KEY) \
	-e LINE_CHANNEL_ACCESS_TOKEN=$(LINE_CHANNEL_ACCESS_TOKEN) \
	-e LINE_CHANNEL_SECRET=$(LINE_CHANNEL_SECRET) \
	-p $(PORT):3000 $(IMAGE_NAME)
