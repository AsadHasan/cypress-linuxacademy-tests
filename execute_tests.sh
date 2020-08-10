docker run -it -v $PWD:/e2e -w /e2e \
  -e CYPRESS_RECORD_KEY \
  --entrypoint="" \
  cypress/included:4.12.0 \
	/bin/bash -c 'npm install cypress-axe && cypress run --spec "cypress/integration/**/*" --record'
