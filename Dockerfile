FROM node:18
ENV DEBIAN_FRONTEND=noninteractive
RUN apt-get update && apt-get dist-upgrade -y && \
  apt-get install -y libnss3\
  libnspr4\
  libdbus-1-3\
  libatk1.0-0\
  libatk-bridge2.0-0\
  libcups2\
  libdrm2\
  libxkbcommon0\
  libatspi2.0-0\
  libxcomposite1\
  libxdamage1\
  libxfixes3\
  libxrandr2\
  libgbm1\
  libasound2

USER node
WORKDIR /repo
COPY --chown=node package.json package-lock.json config/ /repo/

RUN npm install
RUN npx playwright install chromium
USER root
RUN npx playwright install-deps chromium

USER node
ENV PATH=/repo/node_modules/.bin:$PATH
CMD ["npm", "run", "serve-test"]
