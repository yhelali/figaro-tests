# Figaro end to end tests

## Requirements

-   docker & docker-compose
-   npm

## Install

### Docker install & run tests

```
docker-compose -f docker-compose.yml up
```

### npm install & run tests

```
npm install
npx cypress run --headed --spec "**/*.feature"
```